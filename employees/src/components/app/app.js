import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearhPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [  //data from server
                {name:"Anna I.", salary: 800, increase: false, id:1},
                {name:"Denis S.", salary: 3000, increase: true, id:2},
                {name:"Sasha G.", salary: 5000, increase: false, id:3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            
            // большой метод создание нового массива данных
            // const index =data.findIndex(elem => elem.id === id);
            // const before = data.slice(0,index) //массив до нужного индекса
            // const after = data.slice(index+1) // после нужного индекса
            // const newArray = [...before,...after]; //новый массив без индекса
            
            return {
                //вариант с методом filter
                data: data.filter(item => item.id !==id)
            }        
        })
    }
   
    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearhPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
    
            </div>
        );
    
    }

}

export default App;