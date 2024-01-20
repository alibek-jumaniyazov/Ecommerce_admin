import { Route, Routes } from "react-router-dom"
import { routes } from "./routes/router"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/auth/Login"

function App() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={userInfo ? <Dashboard /> : <Login />} />
      </Routes>
    </div>
  )
}

export default App
