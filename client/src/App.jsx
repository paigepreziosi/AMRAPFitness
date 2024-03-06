import { Outlet } from 'react-router-dom';
import './App.css';
import ExerciseForm from './components/ExerciseForm';
import Navbar from './components/Nav';
import Footer from './components/Footer/index.jsx';


function App() {

  return (
  <div className='"page-container'>
    <div className='content-wrap'>

    </div>
     <div className="bg" > 
      <Navbar/>
      <ExerciseForm/>
      </div>
      <Footer />
    </div>
  );
}

export default App;