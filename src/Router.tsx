import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { LayoutForgetPassword, LayoutLogin, LayoutRegister } from "./layouts/Auth"
import { ChangePassword, Login, PasswordCheckEmail, PasswordInputEmail, Register } from "./screens/Auth"
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
                <Route element={<LayoutForgetPassword />}>
                    <Route path="/forget_password" element={<PasswordInputEmail />} />
                    <Route path="/forget_password/check_email" element={<PasswordCheckEmail />} />
                    <Route path="/change_password" element={<ChangePassword />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router