import React, {FC} from 'react';
import {Link} from "react-router-dom";

const NavPanel: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/users'}>Пользователи</Link>
                </li>
                <li>
                    <Link to={'/todos'}>Список дел</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavPanel;