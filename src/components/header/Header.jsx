import { Link, Navigate, useNavigate } from 'react-router-dom'
import './header.css'

export default function Header() {
  const navigate = useNavigate()
  
  return (
    <div className="header flex justify-between items-center px-4 py-4 bg-gray-500 ">
      <div className='text-white'>Training center</div>
      <ul className='flex gap-4 text-white'>
        <li>
          <Link to="/dashbord/users">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/kashkool">Kashkool</Link>
          {/* <button className=' cursor-pointer' onClick={() => navigate('/kashkool')}>Kashkool</button> */}
        </li>
      </ul>
    </div>
  )
}
