import "pretendard/dist/web/static/pretendard.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/not-found/page';
import LandingPage from './pages/landing/page';

import './App.css'

function App() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/login' element={<>로그인</>}></Route>
            <Route path='/program' element={<></>}></Route>

            {/* 에러 페이지 */}
            <Route path='*' element={<NotFoundPage />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
