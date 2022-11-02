import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { TableItem } from "../components/TableItem";
import { Table } from "../components/Table";
import { CustomButton } from "../components/CustomButton";
import { Preloader } from "../components/Preloader";

export const Repo = () => {
    const navigate = useNavigate();
    const [commits, setCommits] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [isEmpty, setEmpty] = useState(false);

    const location = useLocation();

    const date = new Date(location.state.updationDate);

    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchData = () => {
            setFetching(true);
            axios.get(`https://api.github.com/repos/${location.state.username}/${location.state.name}/commits`)
            .then(res => {
                setCommits(res.data)
                setEmpty(false)
            })
            .catch(() => setEmpty(true))
            .finally(() => setFetching(false))
        }

        fetchData();
    }, []);

    console.log(commits);

    return( 
        <>
            <main className="mb-[64px] mt-24 pb-[30px]">
                <div className="fixed flex flex-wrap items-end inset-x-0 top-[68px] py-10 bg-white pl-10">
                    <span className='font-bold text-5xl mr-4'>{location.state.name}</span>
                    <span className='text-[#ABB5BE] opacity-60'>Last updated {new Intl.DateTimeFormat('en-UK', {year: 'numeric', month: 'long', day: 'numeric'}).format(date)}</span>
                </div>
                {isFetching ? <Preloader styles='top-[190px]'/> : isEmpty ? <span className="flex h-screen items-center justify-center">No commits</span> :
                    <Table size={3} titles={['Author', 'Hash', 'Date']} tableHeaderStyles="top-[190px]" tableBodyStyles="mt-[154px]">
                        {commits.map((commit) =>
                            <React.Fragment key={commit.sha}>
                                <td className="break-all">{commit.commit.author.email}</td>
                                <td className="truncate">{commit.sha}</td>
                                <td className="text-right">{commit.commit.author.date.substr(0, 10)}</td> 
                            </React.Fragment>
                            )}
                    </Table>
                }
            </main>
            <footer className='flex justify-end fixed inset-x-0 bottom-0 border-t-[2px] pr-[20px] py-[10px] bg-white'>
                <CustomButton onClick={handleClick}>
                    Назад
                </CustomButton>
            </footer>
        </>
    );
}