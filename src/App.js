import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Store/Store';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          {/* <Portfolio /> */}
          {/* <Store /> */}
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default App;
