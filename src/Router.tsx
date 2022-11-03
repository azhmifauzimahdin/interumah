import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { LayoutForgetPassword, LayoutLogin, LayoutRegister } from "./layouts/Auth"
import { Login, PasswordInputEmail, Register } from "./screens/Auth"
import { UserDashboard } from "./screens/User"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route element={<LayoutLogin />} >
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<LayoutRegister />} >
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/forget_password" element={<LayoutForgetPassword />}>
                    <Route path="/forget_password" element={<PasswordInputEmail />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router