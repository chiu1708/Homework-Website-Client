import { motion } from 'motion/react'
import React, { useContext } from 'react'
import BasicHeader from './../Headers/BasicHeader';
import './Books.css';
import { useTranslation } from 'react-i18next';
import SubjectBooks from './SubjectBooks';
import { SubjectsContext } from '../../Contexts';

const Books = () => {

  const {t} = useTranslation("Books");
  const subjects = useContext(SubjectsContext);

  return (
    <motion.div
      className="books-page"      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}>  
      <BasicHeader/>
      <div className="books-container">
        <h1 className="big-text">{t("books")}</h1>
        <div className="subjects-books-container d-flex flex-column gap-3">
          {
            subjects.map((subject) => <SubjectBooks key={subject.id} {...subject} />)
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Books