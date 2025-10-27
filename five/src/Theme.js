import {useState} from 'react'
import './Theme.css'

function Theme() {
    let [day, setDay] = useState(true);
    return (
        <div className={day? "light" : "dark"}>
            <button onClick={() => setDay(false)}>Dark</button>
            <button onClick={() => setDay(true)}>Light</button>

        </div>
    )
}
export default Theme;