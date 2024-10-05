import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({ children }:any) => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("Token")
    if (!token) {
      navigate("/")
    }
  })
  return (
    <div>
      {children}
    </div>
  )
}

export default Auth

