export const TableHeader = ({titles, size, className}) => {
    return(
        <div className={`grid grid-cols-${size} inset-x-10 font-semibold py-4 border-b-[2px] bg-white` + ' ' + className}>
            {titles.map((title) => <span key={title}>{title}</span>)}
        </div>
    );
}