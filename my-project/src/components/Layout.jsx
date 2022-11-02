import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {

    return(
        <>
            <header className="bg-[#3d8bfd] p-4 text-3xl font-black text-white font-michroma fixed top-0 inset-x-0">
                <NavLink to='/'>GitSearch</NavLink>
            </header>
            <Outlet/>
        </>
    );
}