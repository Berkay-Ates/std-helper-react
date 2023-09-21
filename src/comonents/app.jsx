import React from "react";
import Login from "./login/login";
import Register from "../register/register";
import Home from '../comonents/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginViewModel from "../login_vm/login_vm";
import RegisterViewModel from "../register_vm/register_vm";
import HomeViewModel from "./home_vm/home_vm";
// import HomeVm from "../home_singleton";

export const loginVm = new LoginViewModel()
export const registerVm = new RegisterViewModel()
export const homeVm = new HomeViewModel()

function App() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route  path="/std-helper-react/" element={<Login viewModel={loginVm} />}/>
                <Route  path="/std-helper-react/register" element={<Register viewModel={registerVm} />}/>
                <Route  path="/std-helper-react/home" element={<Home viewModel={homeVm} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App