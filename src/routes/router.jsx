import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/auth/Login";

const userInfo = JSON.parse(localStorage.getItem('userInfo'))

export const routes = [
    {
        id:1,
        path:'/',
        component: userInfo ? <Dashboard/> :  <Login/>
    },
    {
        id:2,
        path:'login',
        component:<Login/>
    },
    
]