import { useEffect, useState } from "react";

import axios from "axios";

import { useLocation } from "react-router-dom";
import { TableItem } from "../components/TableItem";

export const User = () => {
    const [repos, setRepos] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const fetchData = () => {
            axios.get(`https://api.github.com/users/${location.state.login}/repos`)
            .then(res => setRepos(res.data))
        }

        fetchData();
    }, []);

    console.log(repos);

    return(
        <div>
            <header>
                <img src={location.state.img}/>
                <p>{location.state.login}</p>
            </header>
            <main>
                <div className='table'>
                    {repos.map(repo => <TableItem
                                            key={repo.id}
                                            id={repo.id}
                                            name={repo.name}
                                            language={repo.language}
                                            description={repo.description}
                                            stars={repo.stargazers_count}
                                        />)
                    }
                </div>
            </main>
        </div>
    );
}