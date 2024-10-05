import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WithoutLogin = ({children}:any) => {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("Token")
        if(token){
            navigate("/layout")
        }
    })
  return (
    <div>
      {children}
    </div>
  )
}

export default WithoutLogin
