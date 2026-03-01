import React from 'react'
import Users from '../../components/useState/Users'
import AddNumer from '../../components/useState/AddNumer'
import LoginForm from '../../components/useState/LoginForm'
import TempretureCalculator from '../../components/useState/TempretureCalculator'
import Timer from '../../components/useEffect/Timer'
export default function KashkoolPage() {
  return (
    <div className="flex flex-col gap-20">
      {/* useState */}
      <AddNumer/>
      <LoginForm/>
      <TempretureCalculator/>

      {/* useEffect */}
      <Timer/>
    </div>
  )
}
