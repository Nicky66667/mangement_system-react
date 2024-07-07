import { createBrowserRouter, Navigate } from 'react-router-dom'
import Main from "../components/main"

//set up the paths
const router = createBrowserRouter([{
    path: '/',
    element: <Main />,

}])

export default router