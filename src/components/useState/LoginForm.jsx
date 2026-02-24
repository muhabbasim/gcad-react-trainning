import { useState } from "react"

export default function LoginForm() {

    // state management 

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      comfirm_password: '',
    })
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
    
      setFormData((perv) => ({
        ...perv,
        [name]: value
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { password, comfirm_password } = formData;
  
      if(password !== comfirm_password) {
        console.log('Rejected')
        return
      }
  
      console.log('accepted', formData)
    }
  
  return (
    <section className="flex flex-col gap-20">
      <form onSubmit={handleSubmit} className="p-10 border w-100 bg-gray-100 rounded-md flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">Name:</h3>
          </div>
          <input 
            value={formData.name}
            name="name" 
            type="text"
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2"
            />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">email:</h3>
          </div>
          <input 
            value={formData.email} 
            name="email" 
            type="email"
            onChange={handleInputChange}
            placeholder="email"
            className="border p-2"
            />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">password:</h3>
          </div>
          <input 
            value={formData.password} 
            name="password"
            type="password"
            onChange={handleInputChange}
            placeholder="password"
            className="border p-2"
            />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">comfirm password:</h3>
          </div>
          <input 
            value={formData.comfirm_password} 
            name="comfirm_password"
            type="comfirm_password"
            onChange={handleInputChange}
            placeholder="comfirm_password"
            className="border p-2"
            />
        </div>

        <div>
          <button type="submit" className="bg-blue-500 p-2 w-full text-white">Submit</button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit} className="p-10 border w-100 bg-gray-100 rounded-md flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">Name:</h3>
          </div>
          <input 
            value={name} 
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2"
            />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">email:</h3>
          </div>
          <input 
            value={email} 
            onChange={handleInputChange}
            placeholder="email"
            className="border p-2"
            />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <h3 className="w-20">password:</h3>
          </div>
          <input 
            value={password} 
            onChange={handleInputChange}
            placeholder="password"
            className="border p-2"
            />
        </div>

        <div>
          <button className="bg-blue-500 p-2 w-full text-white">Submit</button>
        </div>
      </form> */}
  </section>
  )
}
