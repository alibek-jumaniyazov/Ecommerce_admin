import CategoryPage from "../Pages/adminCategory/CategoryPage";
import ProductPage from "../Pages/adminCategory/ProductPage";
import OrdersPage from "../Pages/adminCategory/ordersPage";
import UsersPage from "../Pages/adminCategory/UsersPage";
import EventsPage from "../Pages/adminCategory/EventsPage";
import BrandPage from "../Pages/adminCategory/BrandPage";
import Home from "../Pages/adminCategory/Home";


export const routes = [
    {
        id: 1,
        path: "/",
        component: <Home />
    },
    {
        id: 2,
        path: "/category",
        component: <CategoryPage />
    },
    {
        id: 3,
        path: "/brand",
        component: <BrandPage />
    },
    {
        id: 4,
        path: "/products",
        component: <ProductPage />
    },
    {
        id: 5,
        path: "/users",
        component: <UsersPage />
    },
    {
        id: 6,
        path: "/orders",
        component: <OrdersPage />
    },
    {
        id: 7,
        path: "/banners",
        component: <EventsPage />
    },
]


