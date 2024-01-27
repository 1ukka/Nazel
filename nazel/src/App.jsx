import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import { Map } from './componets/map/map'
import { EveryThing } from './componets/everyThing/everyThing'
import { About } from './componets/about/about'
import { ContactUs } from './componets/contactus/contactUs'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EveryThing/>} />
      <Route path="/Map" element={<Map/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
