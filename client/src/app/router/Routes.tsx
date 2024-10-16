import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App.tsx";
import HomePage from "../../features/home/HomePage.tsx";
import Catalog from "../../features/catalog/Catalog.tsx";
import {ContactPage} from "@mui/icons-material";
import ProductDetails from "../../features/catalog/ProductDetails.tsx";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {path: '',element: <HomePage/>},
            {path:'store', element: <Catalog/>},
            {path:'store/:id',element:<ProductDetails/>},
            {path: 'contact',element:<ContactPage/>},

        ]

    }
])