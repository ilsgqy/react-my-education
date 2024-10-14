import "./App.css"
import React from 'react'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/common/header/Header'
import Home from "./components/home/Home" 
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pric from "./components/pricing/Pric";
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/courses' exact component={CourseHome} />
          <Route path='/team' exact component={Team} />
          <Route path='/pricing' exact component={Pric} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
