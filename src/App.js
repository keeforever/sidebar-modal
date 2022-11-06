import Home from './components/Home'
import SideBar from './components/SideBar'
import Modal from './components/Modal'
import {AppProvider} from './context'
function App() {

  return (
    <AppProvider>
      <main>
        <div className="app-container">
          <Home/>
          <SideBar/>
          <Modal/>
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
