import { createBrowserRouter } from "react-router-dom";
import App from "../../app/layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../contact/ContactPage.tsx";
import ProductDetails from "../../features/catalog/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {path:'', element:<HomePage/>},
            {path:'store', element:<Catalog/>},
            {path:'store/:id', element:<ProductDetails/>},
            {path:'contact', element:<ContactPage/>},
        ]
    }
])