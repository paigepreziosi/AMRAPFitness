import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
    const {user} = useContext(UserContext)
    return (
        <div>
             <img
                src="./src/pages/11111.png" 
                style={{ width: '50%', height: 'auto' }}
            />
            {!!user && (<h2>Welcome Back to AMRAP!</h2>)}
            </div>
    )
}