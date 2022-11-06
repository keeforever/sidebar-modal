import {FaRegTimesCircle} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Modal = () => {
  const {isModalOpen,modalHandler}=useGlobalContext()
  console.log(useGlobalContext())
  return (
    <>
    <div className={isModalOpen ? 'modal-overlay modal-overlay-show' : 'modal-overlay modal-overlay-hide'}>
      <div className="modal__content-container">
        <div className="modal__close__btn-wrapper">
          <button className='btn' onClick={modalHandler}><FaRegTimesCircle/></button>
        </div>
        <div className="modal__text-wrapper">
          <h1>{'Show Modal'}</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal
