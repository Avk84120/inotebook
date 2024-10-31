import React, { useState } from "react";
import NoteContext from "./noteContext";
// import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6720c08085abc6abc626848e",
          "user": "671f46e87979c08b815d2a3d",
          "title": "Python Programing Start",
          "description": "Python is a easy to lern and less syntax",
          "tag": "Public",
          "date": "2024-10-29T11:01:20.193Z",
          "__v": 0
        },
        {
            "_id": "6720c08085abc6abc626848e",
            "user": "671f46e87979c08b815d2a3d",
            "title": "Python Programing Start",
            "description": "Python is a easy to lern and less syntax",
            "tag": "Public",
            "date": "2024-10-29T11:01:20.193Z",
            "__v": 0
          },
          {
            "_id": "6720c08085abc6abc626848e",
            "user": "671f46e87979c08b815d2a3d",
            "title": "Python Programing Start",
            "description": "Python is a easy to lern and less syntax",
            "tag": "Public",
            "date": "2024-10-29T11:01:20.193Z",
            "__v": 0
          },
          {
            "_id": "6720c08085abc6abc626848e",
            "user": "671f46e87979c08b815d2a3d",
            "title": "Python Programing Start",
            "description": "Python is a easy to lern and less syntax",
            "tag": "Public",
            "date": "2024-10-29T11:01:20.193Z",
            "__v": 0
          },
          {
            "_id": "6720c08085abc6abc626848e",
            "user": "671f46e87979c08b815d2a3d",
            "title": "Python Programing Start",
            "description": "Python is a easy to lern and less syntax",
            "tag": "Public",
            "date": "2024-10-29T11:01:20.193Z",
            "__v": 0
          },
          {
            "_id": "6720c08085abc6abc626848e",
            "user": "671f46e87979c08b815d2a3d",
            "title": "Python Programing Start",
            "description": "Python is a easy to lern and less syntax",
            "tag": "Public",
            "date": "2024-10-29T11:01:20.193Z",
            "__v": 0
          },
      ]    

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value= {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>        
    )
}

export default NoteState;