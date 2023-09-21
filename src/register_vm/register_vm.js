import axios from "axios"
import { makeAutoObservable } from "mobx"
import Constants from "../constants/constants"

export default class RegisterViewModel{
    constructor() {
        makeAutoObservable(this)
    }

    baseUrl = new Constants().baseApiUrl

    email=''
    name=''
    surname = ''
    
    setEmail=(value)=> {this.email = value}
    setName=(value)=> {this.name = value}
    setSurname = (value) => {this.surname = value}
    
    registerUser = async (event, navigation) => {
        let result = ''
        try {
             result = await axios.post(this.baseUrl + 'createuser/', { 
                "name":this.name,
                "surname":this.surname,
                "mail":this.email,
                "mealNotify":false
            })
        } catch (e) {
            alert("Girdiginiz e postaya ait bir kayit oldugundan emin olun")
       }
        if (result.status === 201) {
            alert('Size gelen emailden hesabinizi dogrulamaniz gerekmektedir. Sonrasinda tekrar giris yapabilirsiniz')
            navigation('/')
        }
        event.preventDefault()
    }
}