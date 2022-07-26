import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        //деструктуризация частичная, вытаскиваем key 
        const {id, ...itemProps} = item;
        return (
            //Использование оператора spread...= name={item.name} salary={item.salary}
            <EmployeesListItem key={id} {...itemProps}/> 
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;