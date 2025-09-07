import { motion } from 'motion/react'
import React from 'react'
import BasicHeader from './../Headers/BasicHeader';
import './Settings.css';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const {t} = useTranslation("Settings");
  return (
    <motion.div
      className="settings-page"      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}>     
      <BasicHeader/>
      <div className="settings-container">
        <h1 className="big-text">{t("settings")}</h1>
        <div className="box">
          <i className="fa-solid fa-wrench"></i><span>{t("comingsoon")}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Settings