import ComponentB from './ComponentB';
import { useState} from 'react';

function ComponentA() {
 let [Cendol, setCendol] = useState(2);


  return (
    <div>
      <ComponentB Cendol={Cendol} setCendol ={setCendol} />
    </div>
  );
}

export default ComponentA;
