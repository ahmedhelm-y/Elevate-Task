import { Navbar } from "flowbite-react";

import { Link, NavLink } from 'react-router-dom';
export default function Navbarr() {
  return (
    <>
      <Navbar className=" bg-blue-300 py-5 sticky top-0" >
        <Navbar.Brand as={Link} href="#">
          <span className="self-center whitespace-nowrap p-3 rounded-lg bg-black text-xl font-semibold text-white">Elevate-Boot-Camp</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="flex-grow ml-10">
          <NavLink to="/">Home</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
