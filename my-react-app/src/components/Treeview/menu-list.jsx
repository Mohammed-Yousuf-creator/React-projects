
import MenuItem from "./menu-item";


export default function MenuList({List = []}){
    return <ul className="menu-list-container">
        {
            List && List.length ? 
            List.map(listItem=> <MenuItem item={listItem}/>)
            : null
        }
    </ul>
}