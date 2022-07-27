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
                {name:"Anna I.", salary: 800, increase: false, rise:false, id:1},
                {name:"Denis S.", salary: 3000, increase: false, rise:false, id:2},
                {name:"Sasha G.", salary: 5000, increase: false, rise:false, id:3},
            ]
        }
        this.maxId = 4;
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
    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item =>{
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))
    // }
   
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item =>{
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    //замена двух методов сверху
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item =>{
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
   



    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearhPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
    
            </div>
        );
    
    }

}

export default App;