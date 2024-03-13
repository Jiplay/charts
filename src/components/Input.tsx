import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Shares } from '../models/Shares';


type InputProps = {
    onInputChange: (income: number, share?: Shares) => void;
    placeholder: string;
    share?: Shares;
  };

function Input(props: InputProps) {
  const [inputFields, setInputFields] = useState<number>(2000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    setInputFields(Number(value));
    props.onInputChange(Number(value), props.share);
  };

  return (
    <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>{props.placeholder}</InputGroup.Text>
          <Form.Control
            value={inputFields}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
          />
        </InputGroup>
    </div>
  );
}

export default Input;
