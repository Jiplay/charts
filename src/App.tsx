import React from 'react';
import { VictoryPie } from 'victory';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MultipleInputsExample from './components/InputGroup';
import Input from './components/Input';
import { Shares } from './models/Shares';
import Cercle from './components/CircularProgressBar';
import { Project } from './models/Project';

import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
  {label: "Life", share: 60},
  {label: "Saving", share: 10},
  {label: "Gift", share: 5},
  {label: "Restaurant", share: 10}
];

const pro = {
  name: "julien",
  goal: 100,
  now: 10
}

function App() {
  const [values, setValues] = React.useState<Shares[]>(data)
  const [income, setIncome] = React.useState<number>(2000)
  const [finalValues, setFinalValues] = React.useState<Shares[]>(data)
  const [tets, settet] = React.useState<Project>(pro)
  
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
          <Col xs={6} style={{ }}>
            <VictoryPie
              data={finalValues}
              x="label"
              y="share"
              colorScale={["#FF5733", "#FFC300", "#DAF7A6", "#9AECDB", "#C70039"]}
              width={350}
              height={350}
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
          <Col>
            <p>Project 1 : Car</p>
            <Cercle name={'test'} goal={100} now={100}/>
          </Col>
          <Col xs={5}>
            <p>Project 2</p>
            <Cercle name={''} goal={0} now={0}/>
          </Col>
          <Col>
            <p>Project 3</p>
            <Cercle name={''} goal={0} now={0}/>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );  
}

export default App
