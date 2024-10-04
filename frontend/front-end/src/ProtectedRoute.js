import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants"
import {jwtDecode} from "jwt-decode"
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import api_tision from "./api_tision"

function ProtectedRoute({children}){
    const [isAuthorised, setIsAuthorised] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
            auth().catch(error=>{
            console.log("This is the protectedroute Error", error);
            setIsAuthorised(false);
             }
            )
        }, []);

    const refresh = async ()=>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const res = await api_tision.post("/tision/token/refresh", {
                refresh: refreshToken
                })

            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorised(true)
            }else{
                setIsAuthorised(false)
            }
            
        }catch(error){
            console.log(error)
            setIsAuthorised(false)
        }
        

    };

    const auth = async ()=>{
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setIsAuthorised(false)
            return
        }

        const tokenDecoded = jwtDecode(token)
        const tokenExpiration = tokenDecoded.exp
        const now = Date.now()/1000

        if(tokenExpiration < now){
            await refresh()
        }
        else{
            setIsAuthorised(true)
        }
    };

    if(isAuthorised === null){
        return <div>Loading...</div>
    }

    return isAuthorised? children : navigate("/login")
}

export default ProtectedRoute