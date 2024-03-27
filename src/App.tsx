import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/events_example/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/any_lists_render/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/events_example/EventsExample";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import TodosPage from "./pages/TodosPage";
import UserItemPage from "./pages/items/UserItemPage";
import TodosItemPage from "./pages/items/TodosItemPage";
import NavPanel from "./components/NavPanel";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                {/*<EventsExample/>*/}
                {/*<Card variant={CardVariant.outlined} width={'200px'} height={'200px'}>*/}
                {/*    <button>Кнопка</button>*/}
                {/*</Card>*/}
                <NavPanel/>
                <Routes>
                    <Route path={'/'} element={null}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos/:id'} element={<TodosItemPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;