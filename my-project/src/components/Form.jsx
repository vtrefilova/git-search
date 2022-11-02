import { useState } from "react";

import axios from 'axios';

import { NavLink, useNavigate } from "react-router-dom";

import clearImg from '../images/times.svg';
import { CustomButton } from "./CustomButton";

import { useDispatch, useSelector } from 'react-redux';

export const Form = () => {
    const [login, setLogin] = useState('');
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const curInput = e.target.value;
        setLogin(curInput);
        setError(false);
    }

    const handleClick = () => {
        setLogin('');
        setError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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

    console.log(user);

    const borderColor = error ? 'border-[#DC3545]' : 'border-blue-400';

    return(
        <div className="flex justify-center w-full">
            <form className={`flex justify-between pt-1 pb-1 pr-1 rounded-xl border-2 ${borderColor} h-[50px] w-11/12 max-w-2xl relative`}>
                <input className="outline-none bg-transparent pl-6 pr-3 w-9/12" placeholder="Login" value={login} onChange={handleChange}/>
                {login ?
                <div className="flex items-center">
                    <button
                        className="mr-2 hover:opacity-60"
                        onClick={handleClick}
                    >
                        <img className='h-[20px]' src={clearImg}/>
                    </button>
                    <CustomButton disabled={error} onClick={handleSubmit} type="submit">
                        Profile
                    </CustomButton>
                </div> :
                null}
            { error ? <p className="absolute top-14 text-[#DC3545]">User is not found. Try another login.</p> : null}
            </form>
        </div>
    );
}