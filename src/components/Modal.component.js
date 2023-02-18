import '../styles/Modal.css';
const Modal = ({ closeModal, messages }) => {

  return (
    <div className='modal-overlay'>
      <div className='flex-modal'>
        <h2>Error</h2>
        <h5>{`${messages.join(', ')}`}.</h5>
        <button className='btnModal' onClick={closeModal}>OK</button>
        
      </div>
    </div>
  );
};

export default Modal;
