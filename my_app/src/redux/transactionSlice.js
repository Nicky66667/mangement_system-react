import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transRecord",
    initialState: {
        transaction: [],
    },
    reducers: {
        addItem: (state, action) => {
            //check if trans number exists
            const itemExist = state.transaction.find((item) => item.number === action.payload.number);
            //if it does, cancel this action
            if (itemExist) {

            } else {
                state.transaction.push({ ...action.payload })
            }

        },
        removeItem: (state, action) => {
            //reset the items list without this current item
            const removeItem = state.transaction.filter((item) => item.number !== action.payload);
            state.transaction = removeItem;
        },

        updateItem: (state, action) => {
            //delete this item first
            const deleteItem = state.transaction.filter((item) => item.number !== action.payload)
            state.transaction = deleteItem;
            state.transaction.push({ ...action.payload })
        }
    }



})

//return reducer configures the Redux store.
export const transactionReducer = transactionSlice.reducer;

export const { addItem, removeItem, updateItem } = transactionSlice.actions;