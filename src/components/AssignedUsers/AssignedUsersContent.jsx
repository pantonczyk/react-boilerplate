import React from 'react';
import { array, string, func } from 'prop-types';

import { TableContextMenu, TableContextMenuItem } from 'components/TableContextMenu';
import SearchInput from 'components/SearchInput';
import SelectInput from 'components/SelectInput';
import FormAssignUser from 'components/Forms/FormAssignUser/FormAssignUser';
import './AssignedUsersContent.scss';

const AssignedUsersContent = ({
    assignedUsersList,
    groups,
    applicationID,
    handleAssignUser,
    handleUnassignUser,
    handleSetSearchFilter,
    handleSetGroupsFilter,
}) => {
    return (
        <div className="assignedUsers">
            <div className="assignedUser__filters">
                <div className="filters__search">
                    <SearchInput
                        variant="secondary"
                        placeholder="Wpisz nazwisko, imię lub e-mail"
                        onChange={handleSetSearchFilter}
                    />
                </div>
                <div className="filters__filter">
                    <SelectInput
                        id="groupsFilter"
                        name="Groups filter"
                        label="Uprawnienia"
                        options={groups}
                        optionMapKey="name"
                        onChange={(value) => handleSetGroupsFilter(value)}
                    />
                </div>
            </div>

            <div className="assignedUser__userInvitation">
                <FormAssignUser applicationID={applicationID} handleAssignUser={handleAssignUser} />
            </div>

            <div className="assignedUsers__table">
                <h1 className="table__title">Zespół</h1>
                <div className="table">
                    <div className="table__header">
                        <div className="table__col table__col--1">Użytkownik</div>
                        <div className="table__col table__col--2">E-mail</div>
                        <div className="table__col table__col--3">Uprawnienia</div>
                        <div className="table__col table__col--4"> </div>
                    </div>

                    {assignedUsersList?.map(
                        ({ assignedUser: { id, firstName, lastName, email, groups } }) => (
                            <div className="table__row" key={id}>
                                <div className="table__col table__col--1" data-label="Użytkownik">
                                    {firstName} {lastName}
                                </div>
                                <div className="table__col table__col--2 " data-label="E-mail">
                                    <span>{email}</span>
                                </div>
                                <div className="table__col table__col--3" data-label="Uprawnienia">
                                    {groups[0]?.name || '-'}
                                </div>
                                <div className="table__col table__col--4">
                                    <div className="col__contextMenu">
                                        <TableContextMenu>
                                            <TableContextMenuItem>Opcja 1</TableContextMenuItem>
                                            <TableContextMenuItem>Opcja 2</TableContextMenuItem>
                                            <TableContextMenuItem>Opcja 3</TableContextMenuItem>
                                            <TableContextMenuItem onClick={handleUnassignUser(id)}>
                                                Usuń
                                            </TableContextMenuItem>
                                        </TableContextMenu>
                                    </div>
                                </div>
                                <div className="row__mobileContextMenu">
                                    <div className="mobileContextMenu__item">Opcja 1</div>
                                    <div className="mobileContextMenu__item">Opcja 2</div>
                                    <div className="mobileContextMenu__item">Opcja 3</div>
                                    <div
                                        className="mobileContextMenu__item"
                                        onClick={handleUnassignUser(id)}
                                    >
                                        Usuń
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

AssignedUsersContent.propTypes = {
    assignedUsersList: array,
    groups: array,
    applicationID: string.isRequired,
    handleAssignUser: func.isRequired,
    handleUnassignUser: func.isRequired,
    handleSetSearchFilter: func.isRequired,
    handleSetGroupsFilter: func.isRequired,
};

export default AssignedUsersContent;
