
import { useContext } from "react"
import AppContext from '../context/AppContext'


function List() {

    const context = useContext(AppContext)

    console.log('Current items: ', context.items);

    function removeItem(event) {
        console.log('list.js removeItem event', event);
        let tmp = context.items.filter((item, index) => {
            console.log('removeItem index:', index, ' item:', item, 'event.target.id ', event.target.id, 'index != event.target.id ', index != event.target.id);

            return index != event.target.id
        });
        console.log('new items from filter: ', tmp);
        context.setItems(tmp);
    };

    return (
        <div>
            {context.items.map((entry, index) => {
                return (
                    <li id={index} onClick={removeItem}>{entry} -- <b>ClickMe to remove</b></li>
                )
            })}
        </div>
    )


};

export default List

