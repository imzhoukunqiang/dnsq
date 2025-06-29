import { Link, NavLink } from 'react-router-dom'
import dnsq from '../assets/dnsq.svg'

interface MenuItem {
  label: string
  to: string
}
export default function Header({ fixed = false }: { fixed: boolean }) {
  const menus: MenuItem[] = [
    { label: '首页', to: '/' },
    { label: '关于', to: '/about' },
    { label: '设置', to: '/settings' },
  ]
  return (
    <div className={`navbar bg-base-100 shadow-sm p-0 ${fixed ? 'sticky top-0 z-50' : ''}`}>
      <div className="navbar mx-auto max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menus.map((menu) => (
                <li key={menu.label}>
                  <NavLink className="" to={menu.to}>
                    {menu.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="font-bold text-2xl font-sans
">
            DNS Q
            {/* <img alt="DNSQ Logo" className="h-12 rounded-xl" src={dnsq}></img> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {menus.map((menu) => (
              <li className="px-1" key={menu.label}>
                <NavLink className={({ isActive }) => (isActive ? 'menu-active' : '')} to={menu.to}>
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-outline btn-sm">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
                <path
                  d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{' '}
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
