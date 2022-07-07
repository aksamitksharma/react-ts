import './App.css';
// import { Greet } from './components/Greet';
// import { User } from './components/User';
// import { Counter } from './components/Counter';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { DivBox } from './components/context/DivBox';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Amit" messagesCount={10} /> */}
      {/* <User />
      <Counter/> */}
    <ThemeContextProvider>
      <DivBox/>
    </ThemeContextProvider>

    </div>
  );
}

export default App;
