import Login from './Login/Login';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Settings from './Settings/Settings';
import Books from './Books/Books';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:taskId" element={<Detail animationType={0}  />} />
        <Route path="/detail/fromPrevious/:taskId" element={<Detail animationType={1} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/books" element={<Books />} />
        {/* This is for the next version */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;