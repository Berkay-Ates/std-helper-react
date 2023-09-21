import React from "react";   
import Input from "../comonents/small_comp/input";
import Button from "../comonents/small_comp/button";   
import Logo from "../comonents/small_comp/logo";                                          
import Constants from "../constants/constants";
import { observer } from "mobx-react";

const Register = observer((props)=> {
    return (
        <div>
        <Logo url={new Constants().url}/>
        <form onSubmit= {(event)=>event.preventDefault()}>
           <Input onChange={props.viewModel.setEmail} value ={props.viewModel.email} type='email' placeholder='email'/>
           <Input onChange={props.viewModel.setName} value ={props.viewModel.name} type='text' placeholder='isim'/>
           <Input onChange={props.viewModel.setSurname} value ={props.viewModel.surname} type='text' placeholder='soyisim'/>
           <Button onClick={props.viewModel.registerUser} name='kayit ol'/>
        </form>
        </div>
    );
})


export default Register