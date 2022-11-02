import { useEffect, useState } from "react";

import axios from "axios";

import { useLocation } from "react-router-dom";
import { TableItem } from "../components/TableItem";

import { NavLink } from "react-router-dom";

import starImg from "../images/star.svg";
import { Table } from "../components/Table";

import React from "react";

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
        <>
            <header className='flex flex-col items-center py-[60px] w-full top-0 fixed bg-white top-[68px]'>
                <figure className='flex h-40 w-40'>
                    <img className='rounded-full' src={location.state.img}/>
                </figure>
                <p className='font-bold text-3xl m-8'>{location.state.login}</p>
            </header>
            <main className="pb-[50px]">
                <Table size={4} titles={['Name', 'Language', 'Description', 'Boomarks']} tableStyles='mt-[360px]' tableBodyStyles='mt-[120px]' tableHeaderStyles='top-[420px]'>
                    {repos.map(repo => 
                        <React.Fragment key={repo.id}>
                            <td>
                                <NavLink 
                                    state={{username: location.state.login, name: repo.name, updationDate: repo.updated_at}}
                                    className="text-[#3d8bfd] font-bold hover:underline block"
                                    to={`repo+${repo.id}`}
                                >
                                    {repo.name}
                                </NavLink>
                            </td>
                            <td>{repo.language || '—'}</td>
                            <td>{repo.description || '—'}</td>
                            <td className="flex justify-center">
                                <img className="h-8" src={starImg}/>
                                <span className="whitespace-pre font-fuzzyBubbles font-semibold text-2xl text-[#3d8bfd]">
                                    x{repo.stargazers_count}
                                </span>
                            </td>
                        </ React.Fragment>)
                        }
                </Table>
            </main>
        </>
    );
}