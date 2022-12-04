import "./index.css"
import Employees from "./Pages/Employees";
import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Dictionary from "./Pages/Dictionary";
import Definition from "./Pages/Definition";
import NotFound from "./Components/NotFound";
import Customer from "./Pages/Customers";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employee" element={<Employees />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
    
    
  )
  
}

export default App;
