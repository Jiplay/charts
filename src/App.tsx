import React from 'react';
import { VictoryPie } from 'victory';
import MultipleInputsExample from './components/InputGroup';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Shares } from './models/Shares';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = [
  {label: "Life", share: 60},
  {label: "Saving", share: 10},
  {label: "Games", share: 5},
  {label: "Gift", share: 5},
  {label: "Restaurant", share: 10}
];

function App() {
  const [values, setValues] = React.useState<Shares[]>(data)
  const [income, setIncome] = React.useState<number>(2000)
  const [finalValues, setFinalValues] = React.useState<Shares[]>(data)
  
  const handleDelField = () => {
    const newInputFields = [...values];
    setFinalValues(newInputFields);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '0 0 30%', backgroundColor: '#f0f0f0', padding: '20px', position: "relative" }}>
        <MultipleInputsExample onInputChange={setValues}></MultipleInputsExample>
        <div style={{ textAlign: "center" }}>
          <Button style={{ marginTop: '10px' }} onClick={handleDelField}>update pie</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: '50vh', padding: '20px' }}>
      <Container style={{ width: '100%', height: '100%' }}>
        <Row>
          <Col >
            <h2>Saving Vision</h2>
          </Col>
          <Col xs={6} style={{ marginLeft: "20px" }}>
            <VictoryPie
              data={finalValues}
              x="label"
              y="share"
              colorScale={["#FF5733", "#FFC300", "#DAF7A6", "#9AECDB", "#C70039"]}
              width={400}
              height={400}
            />
            </Col>
            <Col>
              <div>Income details {income}</div>
              <div style={{ marginTop: '10px' }}>
            <Input onInputChange={setIncome}></Input>
          </div>
            </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
    </Container>
        
        {/* <div style={{ marginBottom: '20px'}}>
          <h1>Saving Vision</h1>
        </div>
        <div style={{}}>
          <VictoryPie
            data={finalValues}
            x="label"
            y="share"
            colorScale={["#FF5733", "#FFC300", "#DAF7A6", "#9AECDB", "#C70039"]}
            width={400}
            height={400}
          />
        </div> */}
      </div>
    </div>
  );  
}

export default App
