import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table, Pagination } from 'react-bootstrap';

import { startGetData } from '../../redux/actions/data.action';
import { Modal } from '../../components';

import './home.scss';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Data);
    const [pageActive, setPageActive] = useState(1);

    const getPages = () => {
        const pages = [];
        for (let i = 1; i <= (data.total_pages || 1); i += 1) {
            pages.push(
                <Pagination.Item key={i} active={i === pageActive}>
                    {i}
                </Pagination.Item>,
            );
        }

        return pages;
    };

    useEffect(() => {
        dispatch(startGetData({ method: 'get', path: `/users?page=${pageActive}` }));
    }, [pageActive]);

    return (
        <div className="home-div__main">
            <Table className="home-table__main" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.data && data.data
                        .map((item, idx) => (
                            <tr key={idx.toString()} onClick={() => history.push(`/user/${item.id}`)}>
                                <td className="text-center">
                                    <img src={item.avatar} alt="error-avatar" />
                                </td>
                                <td className="text-center">{item.first_name}</td>
                                <td className="text-center">{item.last_name}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Pagination
                className="home-pagination__main"
                size="sm"
                onClick={(e) => setPageActive(parseInt(e.target.text, 10))}>
                {getPages()}
            </Pagination>

            {(!data || !data.data) && <div className="home-div__notData">No hay datos</div>}
            {data.error && <Modal show title="Error" text={data.error} />}
        </div>
    );
};

export default Home;
