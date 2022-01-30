import React from 'react'
import './App.css'
import NavBar from './FullPage/NavBar'
import Loader from './Loader/Loading'
import Welcome from './WelcomePage/WelcomePage'
import Aos from 'aos'
import 'aos/dist/aos.css';


function App() {

  const [Loading, setloading] = React.useState(false);
  const [Wel, setWel] = React.useState(false);


  React.useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setWel(true);
      setTimeout(() => {
        setWel(false);
      }, 7100)
    }, 4000)
  }, [])
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div>      
      { Loading ? <Loader/> : Wel ? <Welcome /> : <NavBar/>}
    </div>
  )
}

export default App
