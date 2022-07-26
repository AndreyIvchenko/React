import AppInfo from '../app-info/app-info';
import SearhPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    //data from server
    const data = [
        {name:"Anna I.", salary: 800, increase: false, id:1},
        {name:"Denis S.", salary: 3000, increase: true, id:2},
        {name:"Sasha G.", salary: 5000, increase: false, id:3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearhPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>

        </div>
    );
}

export default App;