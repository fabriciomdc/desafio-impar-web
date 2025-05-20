import { createBrowserRouter } from "react-router-dom";
import { History } from "./presentation/pages/history/history";
import { AppLayout } from "./presentation/_layouts/app";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [{path: '/', element: <History/>}]
    }
])