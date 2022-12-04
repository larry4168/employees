import api from "../Api/EmployeesApi"
import { useState, useEffect } from "react"

const Customer = () => {
    const [Customers, setCustomers] = useState([]);

    const GetAllCustomer = async() => {
        const response = await api.get('/contacts');
        return response.data;
    }

    useEffect(() => {
        const retrieveCustomers = async () => {
            const AllCustomers = await GetAllCustomer();
            if (AllCustomers) {
                setCustomers(AllCustomers);
            };
        }
        retrieveCustomers();
    }, [])

    return (
      <div>
        <h1>Here is our Customers:</h1>
        {Customers ? (
          Customers.map((customer) => {
            return <h1 key={customer.id} className="text-sm">{customer.name}</h1>;
          })
        ) : (
          <h1>not available</h1>
        )}
      </div>
    );
}

export default Customer;