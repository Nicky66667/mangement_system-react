import React from "react";
import SearchBox from "./searchBox";
import Tables from "./tables";
import Buttons from "./buttons";

//this is the transaction page
const Transaction = () => {

    return (
        <div className="h-auto w-auto">

            <SearchBox />
            <Buttons />

            <Tables />
        </div>
    )

}

export default Transaction