import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Auth from "./layouts/Auth/Auth"
import { Login } from "./screens"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />} >
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={"Register"} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router