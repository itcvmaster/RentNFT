import { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");

const Modal: React.FC<any> = (props) => {
  return (
    <>
      <ModalStyles />
      <ReactModal
        isOpen={props.showModal}
        onRequestClose={() => props.setShowModal(false)}
        overlayClassName="myoverlay"
        className="mycontent"
      >
        {props.content}
      </ReactModal>
    </>
  );
}

export default Modal;

const ModalStyles = createGlobalStyle`
.myoverlay {
  z-index: 10;
} 
.mycontent {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;    
  background-color: rgba(255, 255, 255, 0.5);
  padding: var(--padding);
}
`;
