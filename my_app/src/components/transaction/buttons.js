import React from "react";
import AddRow from "./addRow";

//buttons to do different operations to transaction records
const Buttons = () => {
    return (
        <div class="pl-3 pt-1 flex">
            <AddRow />
            <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 mx-2">Add Column</button>
        </div>
    )
}

export default Buttons