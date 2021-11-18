import './App.css';
import Product from './components/Product';
import Form from './components/form';
import UpdateProduct from './components/UpdateForm'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="newProduct" element={<Form />} />
        <Route path="updateProduct/:id" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
