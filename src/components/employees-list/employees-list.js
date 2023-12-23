import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDelete, 
    // onToggleIncrease, onToggleRise, 
onToggleProp}) => {

    const elements = data.map
        (item => {
            const {id, ...itemProps} = item;
            return (<EmployeesListItem  
                key={id} 
                {...itemProps} 
                onDelete = {() => onDelete(id)}
                // onToggleIncrease = {() => onToggleIncrease(id)}
                // onToggleRise = {() => onToggleRise(id)}
                onToggleProp = {(event) => onToggleProp(id, event.currentTarget.getAttribute("data-toggle"))}
                />);
    });

    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;