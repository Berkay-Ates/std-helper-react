import axios from "axios";
import { makeAutoObservable } from "mobx";  
import Constants from "../constants/constants";
import HomeViewModel from "../comonents/home_vm/home_vm";
// import HomeVm from "../home_singleton";

export default class LoginViewModel{
    email = ""
    baseUrl = new Constants().baseApiUrl

    constructor() {
        makeAutoObservable(this)
    }

    setEmail=(value)=> {
        this.email = value
    }

    checkPendingMails = async () => {
        let res = ''
        try {
            res = await axios.get(this.baseUrl + 'scheduledjobs/')
        } catch (e) {
            print(e)
        }
    }

    login = async (event, navigate) => {
        let res = ''
        try {
            res = await axios.post(this.baseUrl + 'loginuser/', { "mail": this.email })
        } catch (e) {
            alert('girdiginiz e postaya ait kayit oldugundan emin olunuz')
            console.log(this.baseUrl + 'loginuser/')
            console.log(e)
        }
        
        if (res.status === 201) {
            alert('Size gelen emailden hesabinizi dogrulamaniz gerekmektedir. Sonrasinda tekrar giris yapabilirsiniz')
        } else if (res.status === 200) {
            const homeVm = new HomeViewModel()
            // HomeVm.setUser(res.data['users']['mail'], res.data['users']['meal_notify'])
            homeVm.setUser(res.data['users']['mail'], res.data['users']['meal_notify'], res.data['users']['std_id'])
            await homeVm.getLessons()
            navigate('/std-helper-react/home/')
        }
        event.preventDefault()
    }

    navigateRegister = (event, navigate) => {
        navigate('/std-helper-react/register/')
    }
}