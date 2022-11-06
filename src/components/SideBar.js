import { FaRegTimesCircle } from "react-icons/fa"
import {menu,social} from '../data'
import {useGlobalContext} from '../context'

const SideBar = () => {
  const {isSideBarOpen,sideBarHandler} = useGlobalContext()
  return (
    <aside className={isSideBarOpen ? "side-menu" :"side-menu side_menu-hide"}>
      <div className="close__btn-container">

        <FaRegTimesCircle onClick={sideBarHandler}/>

      </div>
      <div className="menu-list-container">
        <ul className="menu-lists">
        {
          menu.map(({id,text,icon,path})=>{
            return <li key={id}><a href={path}>{icon}{text}</a></li> 
          })
        }
        </ul>
      </div>
        <ul className="social-icons">
        {
          social.map(({id,icon,link})=>{
            return <li key={id}><a href={link}>{icon}</a></li> 
          })
        }
        </ul>
    </aside>
  )
}

export default SideBar
