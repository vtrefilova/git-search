import { useState } from "react";

import axios from 'axios';

import { NavLink, useNavigate } from "react-router-dom";

export const Form = () => {
    const [login, setLogin] = useState('');
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const curInput = e.target.value;
        setLogin(curInput);
        setError(false);
    }

    const handleClick = () => {
        setLogin('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('говно');
        axios.get(`https://api.github.com/users/${login}`)
        .then(res => {
            setUser(res.data);
            console.log(res.data);
            console.log(`/user+${login}`);
            navigate(`/user+${login}`, {state: {login: res.data.login, img: res.data.avatar_url}, replace: false});
        })
        .catch(() => {
            setError(true);
        })
    };

    return(
        <form id="login">
            <input placeholder="Login" value={login} onChange={handleChange}/>
            <button form="login" onClick={handleSubmit} type="submit">view profile</button>
            { error ? <p>User is not found. Try another login.</p> : null}
        </form>
    );
}