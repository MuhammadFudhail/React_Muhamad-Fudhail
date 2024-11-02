import { useState } from 'react';
import CreateProduct from './CreateProduct';
// import ListProduct from './ListProduct'; // Pastikan ini ditambahkan

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateProduct /> 
      {/* <ListProduct />   */}
    </>
  );
}

export default App;
