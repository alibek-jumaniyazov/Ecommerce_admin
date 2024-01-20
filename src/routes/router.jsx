import CategoryPage from "../Pages/adminCategory/CategoryPage";
import ProductPage from "../Pages/adminCategory/ProductPage";
import OrdersPage from "../Pages/adminCategory/ordersPage";
import UsersPage from "../Pages/adminCategory/UsersPage";
import EventsPage from "../Pages/adminCategory/EventsPage";
import Home from "../Pages/Home";


export const routes = [
    {
        key:1,
        label: "home",
        component: <Home/>
    },
    {
        key:2,
        label: "category",
        component: <CategoryPage/>
    },
    {
        key:3,
        label: "brand",
        component: <CategoryPage/>
    },
    {
        key:4,
        label: "product",
        component: <ProductPage/>
    },
    {
        key:5,
        label: "users",
        component: <UsersPage/>
    },
    {
        key:6,
        label: "orders",
        component: <OrdersPage/>
    },
    {
        key:7,
        label: "events",
        component: <EventsPage/>
    },
]


