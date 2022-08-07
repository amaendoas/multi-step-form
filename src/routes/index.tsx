import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Step1 } from '../pages/Step1'
import { Step2 } from '../pages/Step2'
import { Step3 } from '../pages/Step3'
import { Step4 } from '../pages/Step4'
import { Submitted } from '../pages/Submitted'
import { Search } from "../pages/Search";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/step1" element={<Step1/>} />
        <Route path="/step2" element={<Step2/>} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4/>} />
        <Route path="/submitted" element={<Submitted/>} />
      </Routes>
    </BrowserRouter>
  )
}