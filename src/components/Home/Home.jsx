import React, { useContext, useEffect, useState } from 'react'
import HomeHeader from '../Headers/HomeHeader';
import './Home.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { TasksContext } from '../../Contexts';
import Task from './Task';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)

const Home = () => {

  const {t} = useTranslation("Home");
  const tasks = useContext(TasksContext);
  const [thisWeekTasks, setThisWeekTasks] = useState([])
  const [nextWeekTasks, setNextWeekTasks] = useState([])
  const [laterWeeksTasks, setLaterWeeksTasks] = useState([])

  useEffect(() => {
    setThisWeekTasks(tasks.filter((task) => {
      const deadlineDate = dayjs(task.deadline);
      return deadlineDate.isBetween(dayjs(), dayjs().endOf("week"), "day", "[]");
    }));
    setNextWeekTasks(tasks.filter((task) => {
      const deadlineDate = dayjs(task.deadline);
      return deadlineDate.isBetween(dayjs().startOf("week").add(1, "week"), dayjs().endOf("week").add(1, "week"), "day", "[]")
    }))
    setLaterWeeksTasks(tasks.filter((task) => {
      const deadlineDate = dayjs(task.deadline);
      return deadlineDate.isSameOrAfter(dayjs().startOf("week").add(2, "week"))
    }))
  }, [tasks])


  return (
    <motion.div className="home-page"      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}>
      {/* <HomeHeader/> */}
      {/* I will add header in later update */}
      <div className="contents-container d-flex flex-column gap-4">
        <div className="week-container this-week-container">
          <div className="week-header-container">
            <div className="box shadowed-box week-header">{t("thisweek")}</div>
          </div>
          <div className="contents-container">
            <div className="contents box blurred-box">
              {thisWeekTasks.map((task, index) => {
                return (
                  <NavLink className="none-decor" key={task.id} to={"/detail/" + task.id}>
                    <Task {...task} />
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>

        
        <div className="week-container next-week-container">
          <div className="week-header-container">
            <div className="box shadowed-box week-header">{t("nextweek")}</div>
          </div>
          <div className="contents-container">
            <div className="contents box blurred-box">
              {nextWeekTasks.map((task, index) => {
                return (
                  <NavLink className="none-decor" key={task.id} to={"/detail/" + task.id}>
                    <Task {...task} />
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>

        
        <div className="week-container later-weeks-container">
          <div className="week-header-container">
            <div className="box shadowed-box week-header">{t("laterweeks")}</div>
          </div>
          <div className="contents-container">
            <div className="contents box blurred-box">
              {laterWeeksTasks.map((task, index) => {
                return (
                  <NavLink className="none-decor" key={task.id} to={"/detail/" + task.id}>
                    <Task {...task} />
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home