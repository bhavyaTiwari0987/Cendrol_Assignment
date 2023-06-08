import ComponentA from './components/ComponentA';
import { useState} from 'react';

function App() {
 let [Cendol, setCendol] = useState(2);


  return (
    <div className="App">
      <ComponentA Cendol={Cendol} setCendol ={setCendol} />
    </div>
  );
}

export default App;
