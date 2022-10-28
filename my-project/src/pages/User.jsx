import { useEffect, useState } from "react";

import axios from "axios";

import { useLocation } from "react-router-dom";
import { TableItem } from "../components/TableItem";

import { NavLink } from "react-router-dom";

import starImg from "../images/star.svg";
import { TableHeader } from "../components/TableHeader";

export const User = () => {
    const [repos, setRepos] = useState([]);
    const [isFetching, setFetching] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const fetchData = () => {
            setFetching(true);
            axios.get(`https://api.github.com/users/${location.state.login}/repos`)
            .then(res => setRepos(res.data))
            .finally(() => setFetching(false))
        }

        fetchData();
    }, []);

    console.log(repos);

    return(
        <div>
            <header className='flex flex-col items-center pt-[100px] w-full top-0 fixed bg-white'>
                <figure className='flex h-40 w-40'>
                    <img className='rounded-full' src={location.state.img}/>
                </figure>
                <p className='font-bold text-3xl m-8'>{location.state.login}</p>
            </header>
            <main>
                <div className='w-full p-10'>
                    <TableHeader className="fixed top-[360px]" size={4} titles={['Name', 'Language', 'Description', 'Boomarks']}/>
                    <div className="mt-[377px]">
                        {repos.map(repo => 
                        <TableItem key={repo.id} size={4}>
                            <NavLink 
                                state={{username: location.state.login, name: repo.name, updationDate: repo.updated_at}}
                                className="text-[#3d8bfd] font-bold hover:underline"
                                to={`repo+${repo.id}`}
                            >
                                {repo.name}
                            </NavLink>
                                <span className="">{repo.language || '—'}</span>
                                <span className="truncate">{repo.description || '—'}</span>
                                <div className="flex justify-center align-bottom">
                                    <img className="h-8" src={starImg}/>
                                    <span className="whitespace-pre font-fuzzyBubbles font-semibold text-2xl text-[#3d8bfd]">
                                        x{repo.stargazers_count}
                                    </span>
                                </div>
                        </TableItem>)
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}