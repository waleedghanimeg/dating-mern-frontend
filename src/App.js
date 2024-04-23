import './App.css';
import Header from './components/Header.js';
import DatingCards from './components/DatingCards.js';
import SwipeButton from './components/SwipeButtons.js';

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButton />
    </div>
  );
}
export default App;
