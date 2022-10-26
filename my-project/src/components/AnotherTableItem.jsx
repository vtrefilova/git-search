export const AnotherTableItem = ({name, id, language, description, stars}) => {
    return(
        <div>
            <span>{language || '-'}</span>
            <span>{description || '-'}</span>
            <span>x{stars}</span>
        </div>
    );
}