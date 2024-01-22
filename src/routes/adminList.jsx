import { Link } from "react-router-dom";

export const adminList = [
  {
    key: 1,
    icon: <i className="fa-solid fa-house"></i>,
    label: <Link to='/'>Home</Link>,
  },
  {
    key: 2,
    icon: <i className="fa-solid fa-users"></i>,
    label: <Link to='/banners'>Users</Link>,
  },
  {
    key: 3,
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    label: <Link to='/products'>Products</Link>,
  },
  {
    key: 4,
    icon: <i className="fa-solid fa-list"></i>,
    label: <Link to='/category'>Categories</Link>,
  },
  {
    key: 5,
    icon: <i className="fa-brands fa-slack"></i>,
    label: <Link to='/brand'>Brands</Link>,
  },
  {
    key: 6,
    icon: <i className="fa-solid fa-table"></i>,
    label: <Link to='/users'>Banners</Link>,
  },

]