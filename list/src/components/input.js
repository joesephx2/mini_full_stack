
import { useContext } from "react"
import AppContext from '../context/AppContext'



function Input() {
    const { items, setItems } = useContext(AppContext)

    const handleInputChange = event => {
        event.preventDefault();
        setItems([...items, event.target.parentNode[0].value]);
        console.log('handleInputChange : item', items);
    }
    // console.log('Input() item', item);



    return (
        <div>
            <h2>Enter your to-do list</h2>
            <form>
                <label>Database input <br />
                    <input type="text" id="textfield" />
                </label>
                <button onClick={handleInputChange} > Submit </button>
            </form>
        </div>
    )


};

export default Input

