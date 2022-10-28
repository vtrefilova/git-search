export const AnotherTableItem = ({author, hash, date}) => {
    return(
        <div className="grid grid-cols-3 w-full items-center h-16 pl-10 hover:bg-[#cfe2ff] border-b-[1px] overflow-hidden">
            <span>{author}</span>
            <span>{hash}</span>
            <span className="text-right">{date}</span>
        </div>
    );
}