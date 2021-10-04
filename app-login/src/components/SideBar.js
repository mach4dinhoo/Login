import React, { useState } from "react";
import { SideBarData } from './SideBarData';

function SideBar() {

    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    }
    return (
        <div className="SideBar">

            <div className={active ? "menu menuClose" : "menu menuOpen"} onClick={ToggleMode}>
                <i className="hamburguer hamburguerIcon" class="fas fa-bars"></i>
            </div>
            <ul className="SideBarList">
                {SideBarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : "close"}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}>
                            {""}
                            <div id="icon">
                                {val.icon}
                            </div>
                            {""}
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar;