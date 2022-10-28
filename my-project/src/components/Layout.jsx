import { Outlet } from "react-router-dom";

export const Layout = ({page}) => {
    return(
        <>
            <header className="bg-[#3d8bfd] p-4 text-3xl font-extrabold text-white font-inter fixed top-0 inset-x-0">
                <span>GitSearch</span>
            </header>
            <Outlet/>
        </>
    );
}