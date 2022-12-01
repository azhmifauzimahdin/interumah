import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { LayoutLandingPage, LayoutUserOne, LayoutUserTwo } from "./layouts"
import { LayoutForgetPassword, LayoutLogin, LayoutRegister } from "./layouts/Auth"
import { ChangePassword, FailedPasswordChange, Login, Logout, PasswordCheckEmail, PasswordInputEmail, Register, SuccessPasswordChange } from "./screens/Auth"
import LandingPage from "./screens/LandingPage/LandingPage"
import { UserAddReview, UserChangePassword, UserDashboard, UserDesainer, UserDetailDesain, UserFavorite, UserMessage, UserOrder, UserPayment, UserProfile, UserSearch } from "./screens/User"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutLandingPage />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route element={<LayoutUserOne />} >
                    <Route path="/dashboard/" element={<UserDashboard />} />
                    <Route path="/search/" element={<UserSearch />} />
                    <Route path="/favorite" element={<UserFavorite />} />
                    <Route path="/message" element={<UserMessage />} />
                    <Route path="/akunsaya" element={<UserProfile />} />
                    <Route path="/change_password" element={<UserChangePassword />} />
                    <Route path="/detail_desain/" element={<UserDetailDesain />} />
                    <Route path="/pesanan" element={<UserOrder />} />
                    <Route path="/desainer" element={<UserDesainer />} />
                </Route>
                <Route element={<LayoutUserTwo />} >
                    <Route path="/pembayaran/" element={<UserPayment />} />
                    <Route path="/penilaian/" element={<UserAddReview />} />
                </Route>
                <Route element={<LayoutLogin />} >
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<LayoutRegister />} >
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<LayoutForgetPassword />}>
                    <Route path="/forget_password" element={<PasswordInputEmail />} />
                    <Route path="/forget_password/check_email" element={<PasswordCheckEmail />} />
                    <Route path="/users/forgot-password/verify" element={<ChangePassword />} />
                    <Route path="/success_password_change" element={<SuccessPasswordChange />} />
                    <Route path="/failed_password_change" element={<FailedPasswordChange />} />
                </Route>
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router