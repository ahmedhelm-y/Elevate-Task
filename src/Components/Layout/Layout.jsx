
import { Outlet } from 'react-router-dom';
import Navbarr from './../Navbarr/Navbarr';
export default function Layout() {
  return (
    <>
      <Navbarr />
      <Outlet />
    </>
  )
}
