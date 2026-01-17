import { createContext } from "react"
import Dashboard from "./Dashboard";

export const AuthContext = createContext();

const UseContextDemo = () => {
    const user = { name: "Vivek", role: "Admin" }

    return (
        <AuthContext.Provider value={user}>
            <Dashboard />
        </AuthContext.Provider>
    )
}
export default UseContextDemo;