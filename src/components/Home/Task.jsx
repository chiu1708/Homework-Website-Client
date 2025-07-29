import dayjs from 'dayjs';
import React, { useContext } from 'react'
import { LangContext } from '../../Contexts';

const Task = (task) => {

  // handle date
  let formattedDeadline = dayjs(task.deadline).format('dddd');
  formattedDeadline = formattedDeadline[0].toUpperCase() + formattedDeadline.substr(1);
  // end handle date
  
  return (
    <div className="home-content-container">
        <p>
            <b><span>{formattedDeadline}</span> | <span className={task.subjectColor}>{task.subjectName}</span> | <span>{task.contentsText}</span></b>
        </p>
        <hr />
    </div>
  )
}

export default Task