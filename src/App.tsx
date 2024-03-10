import React from 'react';
import { VictoryPie } from 'victory';
import MultipleInputsExample from './components/InputGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Shares } from './models/Shares';
import { Button } from 'react-bootstrap';


const data = [
  {label: "Health", share: 20},
  {label: "School", share: 25},
  {label: "Streaming", share: 20},
  {label: "Gaming", share: 20}
];

function App() {
  const [values, setValues] = React.useState<Shares[]>(data)
  const [finalValues, setFinalValues] = React.useState<Shares[]>(data)
  
  const handleDelField = () => {
    const newInputFields = [...values];
    setFinalValues(newInputFields);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '0 0 30%', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <MultipleInputsExample onInputChange={setValues}></MultipleInputsExample>
        <Button style={{ marginTop: '10px' }} onClick={handleDelField}>update pie</Button>
      </div>
      <div style={{ flex: '1', backgroundColor: '#fff', height: '50vh' }}>
        <h1>Share Vision</h1>
        <VictoryPie
          data={finalValues}
          x="label"
          y="share"
        />
      </div>
    </div>
  );  
}

export default App
