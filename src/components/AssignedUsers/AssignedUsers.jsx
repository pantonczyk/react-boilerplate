import React, { useMemo, useState } from 'react';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { string } from 'prop-types';

import { useNotifications } from 'common/hooks/useNotifications';
import { convertIdToGid } from 'common/utils/convertIdToGid';
import ALL_ASSIGNMENTS_TO_APPLICATION from 'api/queries/allAssignmentsToApplication';
import GROUPS from 'api/queries/groups';
import UNASSIGN_USER from 'api/mutations/unassignUser';
import AssignedUsersContent from './AssignedUsersContent';

const AssignedUsers = ({ applicationID }) => {
    const { addNotification } = useNotifications();
    const [assignedUsersList, setAssignedUsersList] = useState([]);
    const [groupsList, setGroupsList] = useState(null);
    const [searchFilter, setSearchFilter] = useState('');
    const [groupsFilter, setGroupsFilter] = useState('');

    const applicationGid = useMemo(() => {
        return convertIdToGid('ApplicationNode', applicationID);
    }, [applicationID]);

    const [unassignUserMutation] = useMutation(UNASSIGN_USER);

    const [allAssignmentsToApplicationQuery, { data: dataAssignmentsUser }] = useLazyQuery(
        ALL_ASSIGNMENTS_TO_APPLICATION,
        {
            variables: {
                gid: applicationGid,
                searchPhrase: searchFilter,
                groupGid: groupsFilter,
            },
        }
    );

    const handleSetSearchFilter = (e) => {
        setSearchFilter(e.target.value);
    };

    const handleSetGroupsFilter = (groupName) => {
        const groupId = groupsList.filter((item) => item.name === groupName)[0].id;
        const groupGid = convertIdToGid('GroupProxyNode', groupId);
        setGroupsFilter(groupGid);
    };

    const { data: dataGroups } = useQuery(GROUPS);

    useMemo(() => {
        allAssignmentsToApplicationQuery();
        setAssignedUsersList(dataAssignmentsUser?.allAssignmentsToApplication);
        setGroupsList(dataGroups?.groups);
    }, [dataAssignmentsUser, dataGroups]);

    const handleAssignUser = (newAssginedUser) => {
        setAssignedUsersList((prevState) => [...prevState, newAssginedUser]);
    };

    const removeUserFromState = (data, userID) => {
        if (data.unassignUser.unassigned) {
            addNotification('success', 'Sukces', 'Użytkownik został usunięty z wniosku.');
            setAssignedUsersList((prevState) =>
                prevState.filter((item) => item.assignedUser.id !== userID)
            );
        }
    };

    const showError = (error) => {
        addNotification('error', 'Błąd', `${error.message}`);
    };

    const handleUnassignUser = (userID) => () => {
        const userGid = convertIdToGid('UserNode', userID);

        unassignUserMutation({
            variables: {
                applicationGid,
                userGid,
            },
        })
            .then(({ data }) => removeUserFromState(data, userID))
            .catch(showError);
    };

    return (
        <AssignedUsersContent
            assignedUsersList={assignedUsersList}
            groups={groupsList}
            applicationID={applicationID}
            handleAssignUser={handleAssignUser}
            handleUnassignUser={handleUnassignUser}
            handleSetSearchFilter={handleSetSearchFilter}
            handleSetGroupsFilter={handleSetGroupsFilter}
        />
    );
};

AssignedUsers.propTypes = {
    applicationID: string.isRequired,
};

export default AssignedUsers;
