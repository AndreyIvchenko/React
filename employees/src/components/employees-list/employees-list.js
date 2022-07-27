import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        //деструктуризация частичная, вытаскиваем id for key 
        const {id, ...itemProps} = item;
        return (
            //Использование оператора spread...= name={item.name} salary={item.salary}
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete = {() => onDelete(id)}
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