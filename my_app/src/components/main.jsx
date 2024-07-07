import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sideBar";
import Transaction from "./transaction";


const Main = () => {
    return (
        <div class="flex w-full h-screen">

            <div class="w-1/5">
                <Sidebar />
            </div>


            <div class="w-full h-full bg-amber-50 mt-14 px-4">

                <Transaction />
            </div>
        </div>
    )
}

export default Main