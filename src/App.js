import logo from "./logo.svg";
import "./App.css";
import UItest from "./components/UItest"
import { useState, useContext } from "react";
import Employee from "./components/Employee";
import getData from "./components/GetData";
import { APIContext, DataContext } from "./FetchDataContext";
import DataContainer from "./components/DataContainer";

const iniEmployees = [
  {id: 1, name: "alex", salary: 5000},
  {id: 2, name: "claire", salary: 6000},
  {id: 3, name: "bob", salary:4000}
]

function App() {
  const [employees, setEmployees] = useState(iniEmployees)
  const [data, setData] = useState(null)
  //const getData2 = useContext(APIContext)
  return (
    <div className="App">
      <ul>
      {employees.map((employee) => {
        return (
          <Employee
            id={employee.id}
            name={employee.name}
            salary={employee.salary}
            key={employee.id}
          ></Employee>
        );
      })}

      </ul>
      <p>{data}</p>
      <APIContext.Provider value={getData}>
        <DataContainer></DataContainer>
      </APIContext.Provider>
      
      <button onClick={()=>{
        getData("5-January-2000").then(res=>{
          setData(JSON.stringify(res))
        })
        }}>Get Data</button>



    </div>
  );
}

export default App;
