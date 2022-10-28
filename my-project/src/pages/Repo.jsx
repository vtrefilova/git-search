import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { TableItem } from "../components/TableItem";
import { TableHeader } from "../components/TableHeader";

export const Repo = () => {
    const navigate = useNavigate();
    const [commits, setCommits] = useState([]);
    const [isFetching, setFetching] = useState(false);

    const location = useLocation();

    const date = new Date(location.state.updationDate);

    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchData = () => {
            setFetching(true);
            axios.get(`https://api.github.com/repos/${location.state.username}/${location.state.name}/commits`)
            .then(res => setCommits(res.data))
            .finally(() => setFetching(false))
        }

        fetchData();
    }, []);

    console.log(commits);

    return(
        <div>
            <header>

            </header>
            <main className="mb-[64px]">
                <span className='font-bold text-5xl m-8'>{location.state.name}</span>
                <span className='text-[#ABB5BE]'>Last updated {new Intl.DateTimeFormat('en-UK', {year: 'numeric', month: 'long', day: 'numeric'}).format(date)}</span>
                <div className='w-full p-10'>
                    <TableHeader className="top-[360px]" size={3} titles={['Author', 'Hash', 'Date']}/>
                    {commits.map((commit) =>
                    <TableItem size={3} key={commit.sha}>
                        <span>{commit.commit.author.email}</span>
                        <span>{commit.sha}</span>
                        <span className="text-right">{commit.commit.author.date.substr(0, 10)}</span> 
                    </TableItem>
                    )}
                </div>
            </main>
            <footer className='flex justify-end fixed inset-x-0 bottom-0 border-t-[2px] bg-white'>
                <button className="mr-[20px] my-[10px] tracking-wide bg-[#3d8bfd] rounded-lg px-4 py-1.5 text-white font-semibold text-xl font-inter hover:scale-90]" onClick={handleClick}>Назад</button>
            </footer>
        </div>
    );
}