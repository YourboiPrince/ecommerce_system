import React, { useContext } from "react";
// sidebar contecxt
import { SidebarContext } from "../contexts/SidebarContext";
// import icons
import {BsBag} from 'react-icons/bs';

const Header = () => {
    const {sidebarOpen,setSidebarOpen} = useContext(SidebarContext);
    return (
    <header className="bg-pink-200">
    <div>Header</div>
    <div onClick={() =>setSidebarOpen(!sidebarOpen)} className="cursor-pointer flex relative"><BsBag className="text-2xl"/></div>
    </header> 
    );
};

export default Header;