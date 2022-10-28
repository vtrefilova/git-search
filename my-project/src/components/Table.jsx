export const Table = ({titles, content, size, children}) => {
    return(
        <div>
            <div className={`grid grid-cols-${size} inset-x-10 font-semibold py-4 border-b-[2px] fixed bg-white`}>
                {titles.map((title) => <span>{title}</span>)}
            </div>
            <div>
            </div>
        </div>
    );
}