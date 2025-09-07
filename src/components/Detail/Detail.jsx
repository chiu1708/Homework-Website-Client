import { motion } from 'motion/react'
import React, { useContext, useEffect, useState } from 'react'
import BasicHeader from './../Headers/BasicHeader';
import './Detail.css';
import { LangContext, TasksContext } from '../../Contexts';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { p } from 'motion/react-client';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

/* Animation type:
  - 0: from predecessor page or from random page
  - 1: from successor page
 */

const Detail = (animationType = 0) => {

  const lang = useContext(LangContext);

  const tasks = useContext(TasksContext);

  const {t} = useTranslation("Detail");

  const taskId = useParams().taskId;
  let [task, setTask] = useState(null);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < tasks.length; i++) {
      if (taskId === tasks[i].id) {
        setTask(tasks[i]);
        setIndex(i);
        break;
      }
    }
  }, [tasks]);
  
  const nextIndex = (index) => {
    if (index < tasks.length - 1) {
      return index+1;
    }
    return -1;
  }
  const prevIndex = (index) => {
    if (index > 0) {
      return index-1;
    }
    return -1;
  }

  console.log("at");
  console.log(animationType);

  return (task &&
    <motion.div className="detail-page">      
      <BasicHeader/>
      <div className="detail-container d-flex flex-column justify-content-between">
        <div className="detail-content-container d-flex flex-column gap-3">
          <div className="box title d-flex flex-column gap-1">
            <p className="subject-title"><b className={task.subjectColor}>{task.subjectName}</b></p>
            <p>{dayjs(task.deadline).format('dddd, D MMMM')}</p>
          </div>
          {task.contents.map((content, index) => {
            return (
              <div key={index} className="task-container box">
                {
                  content.type == 'text' &&
                  <p>&bull; {content.text[lang]}</p>
              }
                {
                  content.type == 'image' &&
                  <img src={content.link}></img>
                }
                {
                  content.type == 'link' &&
                  <a href={content.link}>{content.text[lang]}</a>
                }
              </div>
            )
          })}
        </div>
          
        <div className="navigation-buttons-container d-flex">
          <div className="button-container">
            {
              prevIndex(index) != -1 &&
              <NavLink to={"/detail/" + tasks[prevIndex(index)].id} className="box shadowed-box"><i className="fa-solid fa-angle-left"></i></NavLink>
            }
          </div>
          <div className="button-container">
            {
              nextIndex(index) != -1 &&
              <NavLink to={"/detail/fromPrevious/" + tasks[nextIndex(index)].id} className="box shadowed-box"><i className="fa-solid fa-angle-right"></i></NavLink>
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Detail;