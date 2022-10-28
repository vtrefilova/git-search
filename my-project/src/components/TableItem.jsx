export const TableItem = ({size, children}) => {
    return(
        <div className={`grid grid-cols-${size} w-full items-center h-16 pl-10 hover:bg-[#cfe2ff] border-b-[1px]`}>
            {children}
        </div>
    );
}