import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

export default function DashboardLayout() {
  return (
    <>
      <Header/>
      <section className='flex'>
        <div className="w-[350px] bg-cyan-700 h-screen">
          <ul className='flex flex-col gap-4 text-white pt-10 m-10'>
              <Link to="/dashbord/users">
                <li className='bg-emerald-600 p-3 rounded-md'>Users</li>
              </Link>
              <Link to="/student">
                <li className='bg-emerald-600 p-3 rounded-md'>Student</li>
              </Link>
              <Link to="/techer">
                <li className='bg-emerald-600 p-3 rounded-md'>Techers</li>
              </Link>
          </ul>
        </div>

        <div className="main-body">
          <Outlet/>
        </div>
      </section>
    </>
  )
}
