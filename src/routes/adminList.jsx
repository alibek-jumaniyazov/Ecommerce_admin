import { Link } from "react-router-dom";

export const adminList = [
  {
    key: '1',
    icon: <i class="fa-solid fa-user"></i>,
    label: <Link to='/'>Home</Link>,
  },
  {
    key: '2',
    icon: <i class="fa-solid fa-user"></i>,
    label: <Link to='/products'>Products</Link>,
  },
  {
    key: '3',
    icon: <i class="fa-solid fa-user"></i>,
    label: <Link to='/category'>Categories</Link>,
  },
  {
    key: '4',
    icon: <i class="fa-solid fa-user"></i>,
    label: <Link to='/brand'>Brands</Link>,
  },
  {
    key: '5',
    icon: <i class="fa-solid fa-user"></i>,
    label: <Link to='/users'>Users</Link>,
  },
]