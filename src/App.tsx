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
  {label: "Saving", share: 20},
  {label: "Gift", share: 5},
  {label: "Restaurant", share: 15}
];

const projectData = [
  {name: "Saving", goal: 2000, now: 200},
  {name: "Gift", goal: 2000, now: 1200},
  {name: "Restaurant", goal: 2000, now: 750}
]

function App() {
  const [values, setValues] = React.useState<Shares[]>(data)
  const [income, setIncome] = React.useState<number>(2000)
  const [finalValues, setFinalValues] = React.useState<Shares[]>(data)
  const [projects, setProjects] = React.useState<Project[]>(projectData)
  
  const handleDelField = () => {
    const newInputFields = [...values];
    setFinalValues(newInputFields);
  };

  const handleChange = (goal: number, share?: Shares) => {
    const updatedProjects = projects?.map((existingProject) => {
      if (existingProject.name === share?.label) {
        return {
          ...existingProject,
          goal: goal,
          now: 0,
        };
      } else {
        return existingProject;
      }
    });
    setProjects(updatedProjects)
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '0 0 30%', backgroundColor: '#f0f0f0', padding: '20px', position: "relative" }}>
        <h2>Income Division (%)</h2>
        <MultipleInputsExample onInputChange={setValues}></MultipleInputsExample>
        <div style={{ textAlign: "center" }}>
          <Button style={{ marginTop: '10px' }} onClick={handleDelField}>update pie</Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Projects future</h2>
          {projects?.map((project, index) => (
              <p>
                {project?.name} will take <strong>{values[index+1].share}%</strong> of income monthly. 
                For complete it at 100% with <strong> +{(values[index+1].share / 100) * income} monthly </strong> based on your income
                it'll need <strong>{(project.goal / ((values[index+1].share / 100) * income)).toFixed(2)} months.</strong>
              </p>
          )
          )}
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
            <Input placeholder={"Income"}onInputChange={setIncome}></Input>
            <div style={{marginTop: '10px'}}>Project Goals details {income}</div>
            {finalValues.map((share, index) => (
              index !== 0 &&
              <Input onInputChange={handleChange} share={share} placeholder={share.label}></Input>
            ))}
          </div>
            </Col>
        </Row>
        <Row>
          {projects?.map((project) => (
            <Col>
              <h4>{project?.name}</h4>
              <Cercle name={'test'} goal={project?.goal} now={project?.now}/>
            </Col>
          )
          )}
        </Row>
      </Container>
      </div>
    </div>
  );  
}

export default App
