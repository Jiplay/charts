import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


type InputProps = {
    onInputChange: (income: number) => void;
  };

function Input(props: InputProps) {
  const [inputFields, setInputFields] = useState<number>(2000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    setInputFields(Number(value));
    props.onInputChange(Number(value));
  };

  return (
    <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>Income</InputGroup.Text>
          <Form.Control
            value={inputFields}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
          />
        </InputGroup>
    </div>
  );
}

export default Input;
