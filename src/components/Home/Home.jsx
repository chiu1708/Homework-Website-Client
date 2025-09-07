import React, { useContext } from 'react'
import HomeHeader from '../Headers/HomeHeader';
import './Home.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { TasksContext } from '../../Contexts';
import Task from './Task';
import { NavLink } from 'react-router-dom';

const Home = () => {

  const {t} = useTranslation("Home");
  const tasks = useContext(TasksContext);


  return (
    <motion.div className="home-page"      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}>
      <HomeHeader/>
      <div className="contents-container">
        <div className="week-container this-week-container">
          <div className="week-header-container">
            <div className="box shadowed-box week-header">{t("thisweek")}</div>
          </div>
          <div className="contents-container">
            <div className="contents box blurred-box">
              {tasks.map((task, index) => {
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