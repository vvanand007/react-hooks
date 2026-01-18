import { useState } from "react";
export default function WithoutUseMemoDemo() {
    const [users, setUsers] = useState([
        { "id": 1001, "name": "Liam Carter" }, { "id": 1002, "name": "Emma Rodriguez" },
        { "id": 1003, "name": "Noah Bennett" }, { "id": 1004, "name": "Olivia Chen" },
        { "id": 1005, "name": "William Davis" }, { "id": 1006, "name": "Sophia Morales" },
        { "id": 1007, "name": "James Wilson" }, { "id": 1008, "name": "Isabella Taylor" },
        { "id": 1009, "name": "Benjamin Anderson" }, { "id": 1010, "name": "Mia Thompson" },
        { "id": 1011, "name": "Lucas Garcia" }, { "id": 1012, "name": "Charlotte Lee" },
        { "id": 1013, "name": "Mason Wright" }, { "id": 1014, "name": "Amelia Scott" },
        { "id": 1015, "name": "Ethan Nguyen" }, { "id": 1016, "name": "Harper King" },
        { "id": 1017, "name": "Alexander Green" }, { "id": 1018, "name": "Evelyn Baker" },
        { "id": 1019, "name": "Sebastian Hill" }, { "id": 1020, "name": "Luna Rivera" }
    ]);
    const [search, setSearch] = useState("");
    const [counter, setCounter] = useState(0);
    const filteredUsers = users.filter(user => {
        console.log("filtering");
        return user.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <input type="text" placeholder="search user" onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            <button onClick={() => setCounter(counter + 1)}>plus</button> {counter}
        </div>
    )
}