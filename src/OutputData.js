import "./outputData.css";

function OutputData(props) {

   
  


  return (
    <div className="outputData">
      {props.takeData.length < 1 ? (
        <h1>No Data Found!!!</h1>
      ) : (
        <div className="dataBox">
          {props.takeData.map((node) => (
            <div key={node.name} className="eachElement fw-bold">
              <p className="textContent">
                {node.name} ({node.age} Years Old)
              </p>
            
            </div>  
          ))}
        </div>
      )}
    </div>
  );
}

export default OutputData;
