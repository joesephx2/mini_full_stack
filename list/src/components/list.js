
import { useContext } from "react"
import AppContext from '../context/AppContext'


function List() {

    const context = useContext(AppContext)

    console.log('Current items: ', context.items);

    return (
        <div>
            {context.items.map((entry, index) => {
                return (
                    <li key={index}>{entry}</li>
                )
            })}
        </div>
    )


};

export default List

