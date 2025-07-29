import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import './HomeHeader.css';

const HomeHeader = () => {

	const { t } = useTranslation("Home");
	let formattedDate = dayjs().format('dddd, D MMMM, YYYY');
	formattedDate = formattedDate[0].toUpperCase() + formattedDate.substr(1);

  return (
    <div className="header-wrapper">
			<div className="info-container">
				<div className="greeting-container">
					<h1 className="greeting-text">{t("greeting1")}</h1>
					<h4 className="date-text">{formattedDate}</h4>
				</div>
			</div>
			{/* This is for the next version */}
			{/* <div className="user-container">
				<NavLink className="none-decor" to="/login">
					<button className="button round-button"><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
				</NavLink>
			</div> */}
    </div>
  )
}

export default HomeHeader