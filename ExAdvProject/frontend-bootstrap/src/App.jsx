import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Programs from './Pages/Programs'
import Profile from './Pages/Profile'
import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
import Success from './Pages/Alerts/Success'
import FailAutentification from './Pages//Alerts/FailAutentification'
import AdminMainWindow from './Pages/Admin/AdminMainWindow'
import ManageExercises from './Pages/Admin/ManageExercises'
import ManageUsers from './Pages/Admin/ManageUsers'


function App() {

  let pages;
  switch (window.location.pathname) {
    case "/":
      pages = <Home />
      break
    case "/home":
      pages = <Home />
      break
    case "/programs":
      pages = <Programs />
      break
    case "/profile":
      pages = <Profile />
      break
    case "/login":
      pages = <LogIn />
      break
    case "/register":
      pages = <Register />
      break
    case "/success":
      pages = <Success />
      break
    case "/fail":
      pages = <FailAutentification />
      break
    case "/admin-main-window":
      pages = <AdminMainWindow/>
      break
    case "/manage-users":
      pages = <ManageUsers/>
      break
    case "/manage-exercises":
      pages = <ManageExercises/>
      break
  }

  return (
    <>
      <NavBar />
      {pages}
    </>
  )
}

export default App
