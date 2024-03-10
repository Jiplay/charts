import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MultipleInputsExample from './InputGroup';

type MyModalProps = {
  show: boolean;
  onHide: () => void;
  onChange: () => void;
};


function MainModal(props: MyModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Plot details</h4>
        <p>
          How do you divide your income ? Rent, Saving, Cigarets, Trip plans...
          Consider 1 share as project or saving and assign to each share a percentage of the main income
        </p>
      <MultipleInputsExample onInputChange={props.onChange}></MultipleInputsExample>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MainModal;