import React from "react";


import "./css/SidebarOption.css";

export default function SidebarOption({ Icon, title, number }) {
    return (
        <div className="sidebarOption">
            <Icon />
            <h3>{ title }</h3>
            <p>{ number }</p>
        </div>
    );
}