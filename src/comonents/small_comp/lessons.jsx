import React from "react";

function Lessons(props) {
    return (
        <div className="note">
          <h2> {props.lessons_name}</h2>
          <p>sinif: {props.class_room}</p>
          <p>baslangis saati: {props.lesson_hour}</p>
          <p>bitis tarihi: {props.end_date}</p>
        <button onClick={(event) => { props.onClick(event,props.lesson_id) }}>DELETE</button>
        </div>
      );
}

export default Lessons