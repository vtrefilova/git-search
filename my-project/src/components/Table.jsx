import { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import { TableItem } from "./TableItem";
import { Dropdown } from './Dropdown';
import 'react-dropdown/style.css';

export const Table = ({size, titles, children, tableStyles, tableBodyStyles, tableHeaderStyles}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedColumn, setSelectedColumn] = useState(1);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const columnsCount = windowWidth > 635 ? size : 2;

    console.log('детки', selectedColumn);

    const options = titles.filter((el, i) => i != 0);

    return(
        <table className={`grid md:text-base text-sm` + ' ' + tableStyles}>
            <thead className="font-semibold text-start items-end">
                <tr className={`grid gap-x-2.5 px-6 py-4 border-b-[2px] bg-white fixed inset-x-10` + " " + tableHeaderStyles}
                    style={{gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`}}
                >
                    { windowWidth > 635 ?
                        titles.map((title) => <th className='text-start' key={title}>{title}</th>) :
                        <>
                            <th className='flex items-center justify-center'>{titles[0]}</th>
                            <th className='flex justify-center'>
                            <Dropdown
                                items={options}
                                defaultValue={titles[1]}
                                handleSelect={setSelectedColumn}
                            />
                            </th>
                        </>
                    }
                </tr>
            </thead>
            <tbody className={"" + tableBodyStyles}>
                {windowWidth > 635 ?
                    children.map((child, i) => <TableItem key={i} size={columnsCount}>{child}</TableItem>) :
                    children.map((child, i) => <TableItem key={i} size={columnsCount}>{child.props.children.filter((item, i) => i == 0 || i == selectedColumn)}</TableItem>)
                }
            </tbody>
        </table>
    );
}