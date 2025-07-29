import './Global.css';
import './App.css';
import Footer from './components/Footers/Footer';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import { LangContext, LocalStorageKeyContext, SubjectsContext, TasksContext } from './Contexts';
import { useState } from 'react';
import useFirestoreData from './hooks/useFirestoreData';

const App = () => {

  // handle language
  const [lang, setLang] = useState('vi');
  dayjs.locale(lang);
  // end handle language
  
  const { tasks, subjects } = useFirestoreData(lang);
  const key = "son-tn1-homework-website-";

  return (
    <LangContext value={lang}>
      <LocalStorageKeyContext value={key}>
        <SubjectsContext value={subjects}>
          <TasksContext value={tasks}>
            <div className="app">
              <BrowserRouter>
                <div className="content-container">
                  <AnimatedRoutes />
                </div>
                <Footer />
              </BrowserRouter>
            </div>
          </TasksContext>
        </SubjectsContext>
      </LocalStorageKeyContext>
    </LangContext>
  )
}

export default App