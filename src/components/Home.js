import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from '../context'

const Home = () => {
  const {modalHandler,sideBarHandler} = useGlobalContext()
  return (
    <>
    <button className="btn menu-btn" onClick={sideBarHandler}><FaBars/></button>
    <div className="modal-btn-container">
      <button className="modal-btn" onClick={modalHandler}>Show Modal</button>
    </div>
    </>
  )
}

export default Home
