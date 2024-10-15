import { useState } from "react"

export default function Menu() {
    const [user, setUser] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            alert(`The name your entered was: ${user}`)
            setUser("")
        }}>
            <label>
                <b>Enter your name: </b>
                <input type="text" value={user}
                onChange={(e) => {setUser(e.target.value)}}></input>
            </label>
            <input type="submit"/>
        </form>
    )
}