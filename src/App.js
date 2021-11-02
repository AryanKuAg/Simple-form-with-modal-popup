import './app.css'
import { useState } from 'react'
import MyForm from './MyForm'
import OutputData from './OutputData'

function App(){
 const [data, setData] = useState([
    {
      name: "aryan",
      age: "learning",
    },
    {
      name: "akash",
      age: "mobile",
    },
  ])

    function dataPassing(name, age){
        setData([...data, {name, age}])

    }


    return <div className="app container">
        
        {/* Form data and ui */}
            <MyForm getData={dataPassing} />
        {/* output data and ui */}
        <OutputData takeData={data} />

    </div>
}

export default App