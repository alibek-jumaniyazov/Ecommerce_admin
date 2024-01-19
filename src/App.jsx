import { Route, Routes } from "react-router-dom"
import { routes } from "./routes/router"

function App() {

  return (
    <div className="App">
        <Routes>
          {
            routes.map((item) => (
              <Route path={item.path} element={item.component} key={item.id}/>
            ))
          }
        </Routes>
    </div>
  )
}

export default App
