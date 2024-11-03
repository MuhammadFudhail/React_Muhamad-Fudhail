import { useState } from 'react';
import CreateProduct from './CreateProduct';

import Login from './Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CreateProduct />  */}
      <Login />   {/* Menambahkan ListProduct */}
    </>
  );
}

export default App;
