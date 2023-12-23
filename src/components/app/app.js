import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: 800, increase: false, rise: true, id: 1 },
        {
          name: "Alex H.",
          salary: 3000,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Bob M.",
          salary: 7000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 3;
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      // newArr = data.filter(item => item.id !== id);

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   // this.setState(({data}) => {
  //   //   const index = data.findIndex(elem => elem.id === id);

  //   //   const old = data[index];
  //   //   const newItem = {...old, increase: !old.increase};
  //   //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

  //   //   return {
  //   //     data: newArr
  //   //   }
  //   // });

  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, hasLike: !item.hasLike };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilter = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "salaryMore1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const employeesNumber = this.state.data.length;
    const increasedNumber = this.state.data.filter(
      (item) => item.increase
    ).length;
    const visibleData = this.onFilter(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          employeesNumber={employeesNumber}
          increasedNumber={increasedNumber}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

// function App(){

//     const data = [
//         {name: "John S.", salary: 800, increase:false, id: 1},
//         {name: "Alex H.", salary: 3000, increase:true, id: 2},
//         {name: "Bob M.", salary: 7000, increase:false, id: 3},
//     ];

//     return (
//         <div className="app">
//             <AppInfo/>
//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>
//             <EmployeesList data={data} onDelete = {id => console.log(id)}/>
//             <EmployeesAddForm/>
//         </div>
//     );
// }

export default App;
