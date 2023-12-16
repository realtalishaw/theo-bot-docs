import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const MySwaggerComponent = () => {
  return <SwaggerUI url={`${process.env.PUBLIC_URL}/api-docs.yaml`} />
  ;
};



function App() {
  return (
    <div className="App">
      <MySwaggerComponent/>
  
    </div>
  );
}

export default App;
