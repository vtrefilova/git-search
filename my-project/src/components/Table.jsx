export const Table = ({size, titles, children, tableStyles, tableBodyStyles, tableHeaderStyles}) => {
    return(
        <table className={`grid px-10` + ' ' + tableStyles}>
            <thead>
                <tr className={`grid grid-cols-${size} gap-x-2.5 pl-10 py-4 border-b-[2px] bg-white fixed inset-x-10` + " " + tableHeaderStyles}>
                    {titles.map((title) => <th className='text-start font-semibold' key={title}>{title}</th>)}
                </tr>
            </thead>
            <tbody className={" " + tableBodyStyles}>
                {children}
            </tbody>
        </table>
    );
}