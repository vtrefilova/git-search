export const TableItem = ({children, size}) => {

    return(
        <tr className={`grid gap-x-2.5 mx-10 items-center px-6 py-4 border-b-[1px] bg-white hover:bg-[#E8F0FF]`}
        style={{gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`}}
        >
            {children}
        </tr>
    );
}