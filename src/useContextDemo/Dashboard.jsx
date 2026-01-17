import { useContext } from "react"
import { AuthContext } from "./UseContextDemo";

const Dashboard = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            {user.name} and {user.role}
        </div>
    )
}

export default Dashboard;