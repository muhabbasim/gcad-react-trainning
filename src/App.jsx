import Timer from "./components/useEffect/Timer"
import AddNumer from "./components/useState/AddNumer"
import LoginForm from "./components/useState/LoginForm"
import TempretureCalculator from "./components/useState/TempretureCalculator"
import Users from "./components/useState/Users"


function App() {

  return (
    <div className="flex flex-col gap-20">
      {/* useState */}
      <Users/>
      <AddNumer/>
      <LoginForm/>
      <TempretureCalculator/>

      {/* useEffect */}
      <Timer/>
    </div>
  )
}

export default App
