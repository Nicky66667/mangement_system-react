import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "flowbite-react"
import { removeItem, updateItem } from "../../redux/transactionSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "flowbite-react";


//this class display transaction records in table format
const Tables = () => {
    //get the records from redux transactionSlice
    const items = useSelector((state) => state.transaction);

    //save the current item info when user click on update button
    const [currentItem, setCurrentItem] = useState({ number: 0, name: "", quantity: 0, price: 0 })

    const dispatch = useDispatch();
    //openModal controls opening input field of adding records
    const [openModal, setOpenModal] = useState(false);

    //to save the data of user input
    const [itemdata, setItemdata] = useState({
        number: 0,
        name: "",
        category: "",
        quantity: "",
        price: 0,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        //delete the previous one
        dispatch(removeItem(currentItem.number))

        //update the item infomation
        dispatch(updateItem({
            number: itemdata.number,
            name: itemdata.name,
            category: itemdata.category,
            quantity: itemdata.quantity,
            price: itemdata.price
        }))
        console.log(itemdata);
    }


    return (
        <Fragment>


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
                                Update Transaction
                            </h3>
                        </div>

                        <form class="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transaction number</label>
                                    <input type="number" id="transno" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder={currentItem.number}
                                        minLength="6"
                                        maxLength="6"
                                        pattern="\d{6}"
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
                                        placeholder={currentItem.name}
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
                                        placeholder={currentItem.quantity}
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
                                        placeholder={currentItem.price}
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



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2 mr-8 ml-4 h-full">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Transaction number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map((item) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.number}
                                </th>
                                <td class="px-6 py-4">
                                    {item.name}
                                </td>
                                <td class="px-6 py-4">
                                    {item.category}
                                </td>
                                <td class="px-6 py-4">
                                    {item.quantity}
                                </td>
                                <td class="px-6 py-4">
                                    {item.price}
                                </td>
                                <td class="px-6 py-4 text-right text-blue-600">
                                    <Dropdown label="Edit" inline>
                                        <Dropdown.Item onClick={() => { dispatch(removeItem(item.number)) }}><p className="text-red-600">Delete</p></Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setOpenModal(true); setCurrentItem({ number: item.number, name: item.name, quantity: item.quantity, price: item.price }) }}>Update</Dropdown.Item>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default Tables