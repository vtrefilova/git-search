import { NavLink } from "react-router-dom";

export const TableItem = ({name, id, language, description, stars}) => {
    return(
        <div>
            <NavLink to={`repo+${id}`}>{name}</NavLink>
            <span>{language || '-'}</span>
            <span>{description || '-'}</span>
            <span>x{stars}</span>
        </div>
    );
}