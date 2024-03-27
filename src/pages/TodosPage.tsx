import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import List from "../components/any_lists_render/List";
import {useNavigate} from "react-router-dom";


const TodosPage: FC = () => {
    const navigate = useNavigate();

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate("/")}>На главную</button>
        <List
            items={todos}
            renderItem={(todo:ITodo) => <TodoItem
                todo={todo}
                key={todo.id}
            />}
        />
        </div>
    );
};

export default TodosPage;