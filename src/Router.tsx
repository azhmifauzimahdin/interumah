import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { LayoutAdmin, LayoutLandingPage, LayoutUserOne, LayoutUserTwo } from "./layouts"
import { LayoutForgetPassword, LayoutLogin, LayoutRegister } from "./layouts/Auth"
import { AdminChangePassword, AdminDataAdmin, AdminDataDesigner, AdminDataOrder, AdminDataProduct, AdminDataTransfer, AdminDataUser, AdminFinancialReport, AdminLogin, AdminLogout } from "./screens/Admin"
import AdminDashboard from "./screens/Admin/Dashboard/AdminDashboar"
import { ChangePassword, FailedPasswordChange, Login, Logout, PasswordCheckEmail, PasswordInputEmail, Register, SuccessPasswordChange } from "./screens/Auth"
import LandingPage from "./screens/LandingPage/LandingPage"
import { UserAddReview, UserCategory, UserChangePassword, UserDashboard, UserDesainer, UserDetailDesain, UserFavorite, UserMessage, UserOrder, UserPayment, UserProfile, UserSearch } from "./screens/User"
import UserAllCategories from "./screens/User/AllCategories/AllCategories"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutLandingPage />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route element={<LayoutAdmin />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />

                    <Route path="/admin/data/admin" element={<AdminDataAdmin />} />
                    <Route path="/admin/data/desainer" element={<AdminDataDesigner />} />
                    <Route path="/admin/data/user" element={<AdminDataUser />} />
                    <Route path="/admin/data/produk" element={<AdminDataProduct />} />

                    <Route path="/admin/transaksi/pesanan" element={<AdminDataOrder />} />
                    <Route path="/admin/transaksi/transfer" element={<AdminDataTransfer />} />

                    <Route path="/admin/laporan/keuangan" element={<AdminFinancialReport />} />

                    <Route path="/admin/pengaturan/ganti_password" element={<AdminChangePassword />} />
                    <Route path="/admin/pengaturan/logout" element={<AdminLogout />} />
                </Route>
                <Route element={<LayoutUserOne />} >
                    <Route path="/dashboard/" element={<UserDashboard />} />
                    <Route path="/search/" element={<UserSearch />} />
                    <Route path="/favorite" element={<UserFavorite />} />
                    <Route path="/message" element={<UserMessage />} />
                    <Route path="/akunsaya" element={<UserProfile />} />
                    <Route path="/change_password" element={<UserChangePassword />} />
                    <Route path="/detail_desain" element={<UserDetailDesain />} />
                    <Route path="/pesananku" element={<UserOrder />} />
                    <Route path="/desainer" element={<UserDesainer />} />
                    <Route path="/kategori" element={<UserCategory />} />
                    <Route path="/semua_kategori" element={<UserAllCategories />} />
                </Route>
                <Route element={<LayoutUserTwo />} >
                    <Route path="/pembayaran" element={<UserPayment />} />
                    <Route path="/penilaian" element={<UserAddReview />} />
                </Route>
                <Route element={<LayoutLogin />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
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