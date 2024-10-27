import { useState } from 'react'
import CreateProduct from './CreateProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateProduct />
    </>
  )
}

export default App
