import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Shares } from '../models/Shares';

const data = [
  {label: "Health", share: 20},
  {label: "School", share: 25},
  {label: "Streaming", share: 20},
  {label: "Gaming", share: 20}
];

type MultipleInputsProps = {
    onInputChange: (inputValues: Shares[]) => void;
  };

function MultipleInputsExample(props: MultipleInputsProps) {
  const [inputFields, setInputFields] = useState<Shares[]>(data);

  const handleAddField = () => {
    setInputFields([...inputFields, { label: '', share: 0 }]);
  };

  const handleDelField = () => {
    const newInputFields = [...inputFields]; // Crée une copie de l'array existant
    newInputFields.pop();
    setInputFields(newInputFields); // Met à jour l'état avec la nouvelle copie
    props.onInputChange(newInputFields);
  };

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>, fieldName: keyof Shares) => {
    const { value } = event.target;
    const newInputFields = [...inputFields];

    newInputFields[index] = {
      ...newInputFields[index],
      [fieldName]: fieldName === 'share' ? Number(value) : value
    };
  
    setInputFields(newInputFields);
    props.onInputChange(newInputFields);
  };

  return (
    <div>
      {inputFields.map((field, index) => (
        <InputGroup key={index} className="mb-3">
          <InputGroup.Text>Label & Share </InputGroup.Text>
          <Form.Control
            value={field.label}
            onChange={(event) => handleChange(index, event, 'label')}
            aria-label="Label"
          />
          <Form.Control
            value={field.share}
            onChange={(event) => handleChange(index, event, 'share')}
            aria-label="Share"
          />
        </InputGroup>
      ))}
      <Button onClick={handleAddField}>+</Button>
      <Button style={{marginLeft: "10px"}} onClick={handleDelField}>-</Button>
    </div>
  );
}

export default MultipleInputsExample;
