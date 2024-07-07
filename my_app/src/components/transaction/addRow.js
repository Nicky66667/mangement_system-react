import React, { useState } from "react";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react"
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/transactionSlice";

//this class is to add rows to transaction records
const AddRow = () => {
    //openModal controls opening input field of adding records
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch()
    //to save the data of user input
    const [itemdata, setItemdata] = useState({
        number: 0,
        name: "",
        category: "",
        quantity: "",
        price: 0,
    })

    //add the record to transactionSlice
    function AddRecord() {
        dispatch(addItem({
            number: itemdata.number,
            name: itemdata.name,
            category: itemdata.category,
            quantity: itemdata.quantity,
            price: itemdata.price
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        AddRecord();
        console.log(itemdata);
    }

    return (

        <div>
            <Button class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 mx-2" type="button"
                onClick={() => { setOpenModal(true) }}>
                Add Row
            </Button>

            <Modal
                size="lg"
                popup
                show={openModal}
                onClose={() => setOpenModal(false)}
            >

                <Modal.Header>
                </Modal.Header>
                <Modal.Body>


                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Add New Transaction
                            </h3>
                        </div>

                        <form class="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transaction number</label>
                                    <input type="number" id="transno" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="e.g., 123456"
                                        minLength="6"
                                        maxLength="6"
                                        required
                                        onChange={(e) => {
                                            setItemdata({
                                                ...itemdata,
                                                number: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div class="col-span-2">
                                    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</p>
                                    <input type="text" id="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="e.g., iPhone 11 128G"
                                        required
                                        onChange={(e) => {
                                            setItemdata({
                                                ...itemdata,
                                                name: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</p>
                                    <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required
                                        onChange={(e) => {
                                            setItemdata({
                                                ...itemdata,
                                                category: e.target.value
                                            })
                                        }
                                        }
                                    >
                                        <option value="" disabled selected>Select category</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="PH">Phones</option>
                                        <option value="OT">Other</option>

                                    </select>
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</p>
                                    <input type="number" id="quantity"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="1"
                                        min="1"
                                        required
                                        onChange={(e) => {
                                            setItemdata({
                                                ...itemdata,
                                                quantity: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</p>
                                    <input type="number" id="price"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="$2999"
                                        required
                                        step="0.1"
                                        onChange={(e) => {
                                            setItemdata({
                                                ...itemdata,
                                                price: e.target.value
                                            })
                                        }}
                                    />
                                </div>

                            </div>
                            <button type="submit"
                                class=" mr-3 mt-3 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add
                            </button>
                            <button type="button" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => { setOpenModal(false) }}>
                                Cancel
                            </button>
                        </form>

                    </div>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </div>

    )
}

export default AddRow