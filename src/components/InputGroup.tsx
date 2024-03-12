import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Shares } from '../models/Shares';

const data = [
  {label: "Life", share: 60},
  {label: "Saving", share: 10},
  {label: "Games", share: 5},
  {label: "Gift", share: 5},
  {label: "Restaurant", share: 10}
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
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event, 'label')}
            aria-label="Label"
          />
          <Form.Control
            value={field.share}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event, 'share')}
            aria-label="Share"
          />
        </InputGroup>
      ))}
      <div style={{ textAlign: "center" }}>
        <Button onClick={handleAddField}>+</Button>
        <Button style={{marginLeft: "10px"}} onClick={handleDelField}>-</Button>
      </div>
    </div>
  );
}

export default MultipleInputsExample;
