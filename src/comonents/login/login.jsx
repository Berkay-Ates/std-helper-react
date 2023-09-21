import React from "react";
import Input from "../small_comp/input";
import Button from "../small_comp/button";
import Logo from "../small_comp/logo";
import { observer } from "mobx-react";
import Constants from "../../constants/constants";

const Login = observer((props) => {
    return (
        <div>
            <form onSubmit= {(event)=>event.preventDefault()}>
            <Logo url={new Constants().url} />
            <Input onChange={props.viewModel.setEmail}  value={props.viewModel.email} type='email' placeholder='email'/>
            <Button onClick={props.viewModel.login} name='Giris yap'/>
            <Button onClick={props.viewModel.navigateRegister} name='kayit ol' />
            </form >
        </div>
    )
})


export default Login

