import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import LayoutLogin from "./layouts/Auth/Login/LayoutLogin"
import LayoutRegister from "./layouts/Auth/Register/LayoutRegister"
import { Login, Register } from "./screens"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<LayoutLogin />} >
                    <Route path="/auth/login" element={<Login />} />
                </Route>
                <Route path="/auth" element={<LayoutRegister />} >
                    <Route path="/auth/register" element={<Register />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router