import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {//onToggleIncrease, onToggleRise -замена на onToggleProp

    const elements = data.map(item => {
        //деструктуризация частичная, вытаскиваем id for key 
        const {id, ...itemProps} = item;
        return (
            //Использование оператора spread...= name={item.name} salary={item.salary}
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete = {() => onDelete(id)}
                // onToggleIncrease ={() => onToggleIncrease(id)}
                // onToggleRise ={() => onToggleRise(id)}
                onToggleProp ={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            /> 
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;