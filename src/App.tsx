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

const projectData = [
  {name: "Saving", goal: 2000, now: 0},
  {name: "Gift", goal: 2000, now: 0},
  {name: "Restaurant", goal: 2000, now: 0}
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
        // Replace the existing project with the updated one
        return {
          ...existingProject,
          goal: goal,
          now: 0,
        };
      } else {
        // Keep the existing project as it is
        return existingProject;
      }
    });
    setProjects(updatedProjects)

    // if (share !== undefined) {
    //   const project = {
    //     name: share.label,
    //     goal: goal,
    //     now: 0,
    //   }
    //   const newProjects = [...project]
    //   setProjects(newProjects);
    // } else {
    //   console.error("not implemented")
    // }
  }

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
              <p>{project?.name}, {project?.goal}</p>
              <Cercle name={'test'} goal={project?.goal} now={10}/>
            </Col>
          )
          
          
          )}

          {/* <Col>
            <p>{projects?.name}</p>
            <Cercle name={'test'} goal={100} now={100}/>
          </Col>
          <Col xs={5}>
            <p>Project 2</p>
            <Cercle name={''} goal={0} now={0}/>
          </Col>
          <Col>
            <p>Project 3</p>
            <Cercle name={''} goal={0} now={0}/>
          </Col> */}
        </Row>
      </Container>
      </div>
    </div>
  );  
}

export default App
