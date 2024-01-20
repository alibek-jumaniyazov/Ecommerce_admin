import { useContext } from "react"
import { UserContext } from "./Context/UserContext"
import Dashboard from "./Pages/Dashboard"
import CategoryPage from "./Pages/adminCategory/CategoryPage"
import Login from "./Pages/auth/Login"

function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      {user.isAuth ? <Dashboard /> : <Login />}
    </div>
  )
}

export default App
