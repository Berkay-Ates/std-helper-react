import { observer } from "mobx-react";
import React from "react";
import Title from "../small_comp/title";
import Input from "../small_comp/input";
import Lessons from "../small_comp/lessons";

const Home = observer((props) => {
    return (
        <div>
            <Title style={{ margin: '12px' }} text={props.viewModel.email} />
        <label>
        <input style={{ margin: '12px' }}
          type="checkbox"
          checked={props.viewModel.meal_notify }
          onChange={(event)=>{props.viewModel.changeMealNotify(event.target.checked)}}/>
                Yemekhane mailleri almak istiyorum</label>
            
            <form onSubmit={(event) => { event.preventDefault() }}>
                <Input onChange={props.viewModel.setLessonName} value={props.viewModel.lesson_name} placeholder='Ders Adi'   type="text"  name="lessons_name"/>
                <Input onChange={props.viewModel.setClassRoom} value={props.viewModel.class_room}  placeholder="Sinif"   type="text"  name="class_room"/>
                <label>Ders Saati:</label>
                <Input onChange={props.viewModel.setLessonHour} value={props.viewModel.lesson_hour}   type="time"  name="lesson_hour"/>
                <label>Ders Bitiş Tarihi:</label>
                <Input onChange={props.viewModel.setEndDate}  value={props.viewModel.end_date}   type="datetime-local"  name="end_date"/>
                <button onClick={(event) => {
                    props.viewModel.createLesson(event)
                }}>Ders Ekle</button>
            </form>
            {props.viewModel.lessons.map((value, index) => {
                return <Lessons onClick={props.viewModel.deleteLesson}
                    lesson_id={value.lesson_id}
                    key={index}
                    lessons_name={value.lessons_name}
                    class_room={value.class_room}
                    lesson_hour={value.lesson_hour}
                    end_date={props.viewModel.formatDateTime(value.end_date)} />
            })}
        </div>
    )
})

export default Home