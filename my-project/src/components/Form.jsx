import { useState } from "react";

import axios from 'axios';

import { NavLink, useNavigate } from "react-router-dom";

import clearImg from '../images/times.svg';

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

    return(
        <form className="flex justify-center w-full">
            <div className="flex justify-between rounded-xl border-2 border-blue-400 h-[50px] w-11/12 max-w-2xl relative">
                <input className="outline-none bg-transparent pl-8 pr-3" placeholder="Login" value={login} onChange={handleChange}/>
                {login ?
                <div className="flex items-center">
                    <button
                        className="mr-2 hover:opacity-60"
                        onClick={handleClick}
                    >
                        <img className='h-[20px]' src={clearImg}/>
                    </button>
                    <button 
                        onClick={handleSubmit}
                        type="submit"
                        className=" tracking-wide mt-1 mr-1 mb-1 bg-[#3d8bfd] rounded-lg px-4 py-1.5 text-white font-semibold text-xl font-inter hover:opacity-90 transform transition duration-500 active:scale-90"
                    >
                        Profile
                    </button>
                </div> :
                null}
            </div>
            { error ? <p className="absolute mt-12">User is not found. Try another login.</p> : null}
        </form>
    );
}