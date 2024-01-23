import './App.css'
import { Feedback } from './componets/feedbacks/feedback'
import { Footer } from './componets/footer/footer'
import { Frontimg } from './componets/frontimg/frontimg'
import { Header } from './componets/header/header'
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import { Map } from './componets/map/map'
import { EveryThing } from './componets/everyThing/everyThing'
import { About } from './componets/about/about'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EveryThing/>} />
      <Route path="/Map" element={<Map/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
