import {useState} from 'react';

function Item(){
    let [item, setItem] = useState([]);

    function addItem(){
        setItem([
            ...item,
            Math.floor(Math.random() * 10)+1
        ])
    }

    return(
        <div className="App">
            {
                console.log(item)
            }
            <button onClick={addItem}>Add a number</button>
            {
                item.map((i, index)=>(
                    <div key={index} style={{ bbackground: i%2 ? "grey" : "yellow"}}>

            {i}

                    </div>
                ))
            }
            <div>{item}</div>
        </div>
    )
}
export default Item;