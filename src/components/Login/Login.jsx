import { useState } from 'react'
import './Login.css';
import BasicHeader from '../Headers/BasicHeader';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Login = () => {

  const { t } = useTranslation("Login");

  return (
    <motion.div
      initial={{height: "0%", transform: "translateY(100%)"}}
      animate={{height: "100%", transform: "translateY(0%)"}}
      exit={{height: "0%", transform: "translateY(100%)"}}
      transition={{duration: 0.4}}
     className="login-page d-flex flex-column align-items-center">
      <BasicHeader />
        <div className="container login-container">
            <form className="container form-container box shadowed-box">
                <div className="form-item name">
                    <label htmlFor="name">
                        {t("whatsyourname")}
                    </label>
                    <input type="text" className="text-input" id="name" placeholder={t("entername")} />
                </div>
								<div className="form-item password">
                    <label htmlFor="password">
                        {t("password")}
                    </label>
                    <input type="password" className="text-input" id="password" placeholder={t("entername")} />
                </div>
								<div className="button-container d-flex justify-content-center align-items-center">
									<button className="button round-button" id="login-button">{t("login")}</button>
								</div>
            </form>
        </div>
    </motion.div>
  )
}

export default Login