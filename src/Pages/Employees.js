import "../index.css"
import Employee from "../Components/Employee";
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddEmployee from "../Components/AddEmployee";
import api from "../Api/EmployeesApi";

function Employees() {
  const LOCAL_STORAGE_KEY = "employees"
  const [employees, setEmployees] = useState([]);

  const retrieveEmployees = async () => {
        const response = await api.get("/employees");
        return response.data;
    }

  const updateEmployee = async (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if ( id === employee.id ) {
        return {...employee, name: newName, role: newRole}
      }
      return employee;
    });
    setEmployees(updatedEmployees)

    document.getElementById('message').innerHTML = 'You have updated your employee.';
  }

  const newEmployee = async (name, role, img) => {
    const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img, 
      }
    const response = await api.post('/employees', newEmployee);
    setEmployees([...employees, response.data])
  }

  const delEmployeeHandler = async(id) => {
    await api.delete(`/employees/${id}`);
    const employee = employees.filter((employee) => {
      return employee.id !== id;
    })
    setEmployees(employee)
  }

  useEffect(() => {
    const GetAllData = async () => {
      const allEmployee = await retrieveEmployees();
      if (allEmployee) setEmployees(allEmployee);
    }

    GetAllData();

  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const showEmployees = true;

  return (
    <div className='App bg-gray-400 min-h-screen py-2'>
      { showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return(
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img} 
                  updateEmployee={updateEmployee}
                  delHandler={delEmployeeHandler}
                />
              )
              
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>Can`t show any Employee right now.</p>
      )}

    </div>
  )
}

export default Employees;
