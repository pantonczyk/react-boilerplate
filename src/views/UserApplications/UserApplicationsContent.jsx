import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { array } from 'prop-types';

import { redirectTo } from 'common/utils/routerFunctions';
import Button from 'components/Button';
import { TableContextMenu, TableContextMenuItem } from 'components/TableContextMenu';
import './UserApplicationsContent.scss';

const UserApplicationsContent = ({ applicationsList }) => {
    const history = useHistory();

    return (
        <div className="applications">
            <div className="applications__header">
                <Button>Nowy Wniosek</Button>
            </div>

            <div className="applications__main">
                <h1 className="applications__title">Lista Twoich wniosków</h1>

                <div className="applications__table">
                    <div className="table__header">
                        <div className="table__col table__col--1">#</div>
                        <div className="table__col table__col--2">Nazwa wniosku</div>
                        <div className="table__col table__col--3">Firma wnioskująca</div>
                        <div className="table__col table__col--4">Data modyfikacji</div>
                        <div className="table__col table__col--5">Data złożenia</div>
                        <div className="table__col table__col--6">Status</div>
                        <div className="table__col table__col--7"> </div>
                    </div>

                    {applicationsList?.map(
                        ({ id, title, company, dateCreated, dateModified, status }) => (
                            <div className="table__row" key={id}>
                                <div
                                    className="table__content"
                                    onClick={redirectTo(history, `/applications/${id}/overview`)}
                                >
                                    <div className="table__col table__col--1" data-label="#">
                                        {id}
                                    </div>
                                    <div
                                        className="table__col table__col--2 "
                                        data-label="Nazwa wniosku"
                                    >
                                        {title}
                                    </div>
                                    <div
                                        className="table__col table__col--3"
                                        data-label="Firma wnioskująca"
                                    >
                                        {company}
                                    </div>
                                    <div
                                        className="table__col table__col--4"
                                        data-label="Data modyfikacji"
                                    >
                                        {dateModified !== null &&
                                            moment(dateModified).format('DD/MM/YYYY HH:mm:ss')}
                                    </div>
                                    <div
                                        className="table__col table__col--5"
                                        data-label="Data złożenia"
                                    >
                                        {dateCreated !== null &&
                                            moment(dateCreated).format('DD/MM/YYYY HH:MM:SS')}
                                    </div>
                                    <div className="table__col table__col--6" data-label="Status">
                                        {status}
                                    </div>
                                </div>

                                <div className="table__col table__col--7">
                                    <div className="col__contextMenu">
                                        <TableContextMenu>
                                            <TableContextMenuItem
                                                onClick={redirectTo(
                                                    history,
                                                    `/applications/${id}/overview`
                                                )}
                                            >
                                                Podgląd
                                            </TableContextMenuItem>
                                            <TableContextMenuItem>Edytuj</TableContextMenuItem>
                                            <TableContextMenuItem>
                                                Historia wniosku
                                            </TableContextMenuItem>
                                            <TableContextMenuItem>Usuń</TableContextMenuItem>
                                        </TableContextMenu>
                                    </div>
                                </div>
                                <div className="row__mobileContextMenu">
                                    <div
                                        className="mobileContextMenu__item"
                                        onClick={redirectTo(
                                            history,
                                            `/applications/${id}/overview`
                                        )}
                                    >
                                        Podgląd
                                    </div>
                                    <div className="mobileContextMenu__item">Edytuj</div>
                                    <div className="mobileContextMenu__item">Historia</div>
                                    <div className="mobileContextMenu__item">Usuń</div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

UserApplicationsContent.propTypes = {
    applicationsList: array,
};

export default UserApplicationsContent;
