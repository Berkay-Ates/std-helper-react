import axios from "axios";
import { makeAutoObservable } from "mobx";
import Constants from "../../constants/constants";

let instance = null; // Singleton örneği

export default class HomeViewModel {
  constructor() {
    if (!instance) {
        instance = this;
        makeAutoObservable(this);
        }
        return instance;
    }
    
    baseUrl = new Constants().baseApiUrl

    isLoading = false;
    changeLoading = () => !this.isLoading;
    
    email = ''
    user_id = ''
    meal_notify = false
    lessons = []

    lesson_name = ''
    class_room = ''
    lesson_hour = ''
    end_date = ''

    setLessonName=(value)=>this.lesson_name=value
    setClassRoom=(value)=>this.class_room=value
    setLessonHour=(value)=>this.lesson_hour=value
    setEndDate=(value)=>this.end_date=value
    

    setUser = (email, meal_notify,user_id) => {
        this.email = email
        this.meal_notify = meal_notify
        this.user_id = user_id
    }

    getLessons = async () => {
        let res = ''
        try {
            res = await axios.get(this.baseUrl + 'userlessons/' + this.user_id + '/')
        } catch (error) {}
         
        if (res.status === 200) {
            this.setLessons(res.data['lessons'])
        }   
    }
    
    setLessons = (value) => {
        this.lessons = value
    }

    createLesson = async (event) => {
        let result = ''
        try { 
            const result = await axios.post(this.baseUrl + 'createlesson/', {
                "user":this.user_id,
                "lessons_name" : this.lesson_name,
                "class_room": this.class_room,
                "lesson_hour": this.lesson_hour,
                "end_date": this.end_date
            })
        } catch (e) {
            console.log(e)
        }
        if (result.status === 201) {
            this.setLessonName("")
            this.setClassRoom('')
            this.setLessonHour("")
            this.setEndDate("")
            await this.getLessons()
        }
    }
    
    changeMealNotify = async (value) => {
        let res = ''
        try { 
            res = await axios.post(this.baseUrl + 'setmealnotify/', {
                "mail":this.email,
                "meal_notify":value
            })
        }catch(e){}

        if (res.status === 201) {
            this.meal_notify = res.data['meal_updated']['meal_notify']
        }
    }

    deleteLesson = async (event, value) => {
        let res = ''
        try {
            res = await axios.delete(this.baseUrl + 'deletelesson/' + value )
        }catch(e){}
        
        if (res.status === 204) {
            await this.getLessons()
        }
    }

    formatDateTime = (inputDate) => {
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        };
        const date = new Date(inputDate);
        return date.toLocaleDateString('tr-TR', options).replace(/\./g, '/').replace(',', '');
    }

}