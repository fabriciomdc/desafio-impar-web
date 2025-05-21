import { Outlet } from "react-router-dom";
import {Toaster} from 'react-hot-toast'

export function AppLayout() {
    return(
        <div>
            <div>
                <Toaster/>
                <Outlet/>
            </div>
        </div>
    )
}