export const TableItem = ({children, size}) => {
    return(
        <tr className={`grid grid-cols-${size} gap-x-2.5 items-center pl-10 py-4 border-b-[1px] bg-white hover:bg-[#E8F0FF]`}>
            {children}
        </tr>
    );
}