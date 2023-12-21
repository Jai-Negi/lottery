
import './App.css';
import Ball from './ball';
import Lottery from './lottery';

function App() {
  return (
    <div className="App">
     <Lottery/>
     <Lottery title='Mini daily' maxNum={10} maxBalls={4}/>
    </div>
  );
}

export default App;
