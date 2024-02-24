import './App.css';
import App1 from './components/1st_Component/1st';
import App2 from './components/2nd_Component/2nd';

function App() {
  return (
   <div className='container'>
    <div className='left'>
      <App1></App1>
    </div>
    <div className='right'>
      <App2></App2>
    </div>
   </div>
  );
}

export default App;
