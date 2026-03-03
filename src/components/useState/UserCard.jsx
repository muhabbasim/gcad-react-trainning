import { Link } from "react-router-dom";

export default function UserCard({ data }) {
  return (
    <Link to={`/dashbord/users/single-user/${data.id}`}>
      <div className="bg-[#0d1b2a] p-6 rounded-lg text-white">
        <div className="w-full">
          <img src={data.image} alt="personal imgae" className="w-full mb-5 rounded-lg"/>
        </div>
        <h2 className="text-red-800">name: {data.name}</h2>
        <h2>email: {data.email}</h2>
        <h2>status: {data.active ? 'Active' : "Inactive"}</h2>
      </div>
    </Link>
  )
}
