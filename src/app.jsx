import { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [square, setSquare] = useState(0);

//   const calculateSquare = (newCount) => setSquare(newCount * newCount);

//   const increment = () => {
//     const newCount = count + 1;

//     setCount(newCount);
//     calculateSquare(newCount);
//   };

//   return (
//     <div>
//       <h1>Contagem: {count}</h1>
//       <button onClick={increment}>+</button>

//       <p>Ao quadrado: {square}</p>
//     </div>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);

//   const square = count * count;

//   return (
//     <div>
//       <h1>Contagem: {count}</h1>
//       <button onClick={increment}>+</button>

//       <p>Ao quadrado: {square}</p>
//     </div>
//   );
// };

const App = () => {
  const [shouldShow, setShouldShow] = useState(true);

  const handleClickToggle = () => setShouldShow(!shouldShow);

  return (
    <>
      {shouldShow && <p>To aqui</p>}
      <button onClick={handleClickToggle}>Alternar visibilidade</button>
    </>
  );
};

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [open, setOpen] = useState(true)
//   const [currentId, setCurrentId] = useState(null)
//   const [value, setValue] = useState('')
//   const [users, setUsers] = useState(() => createUsers())
//   const [form, setForm] = useState({ firstName: 'Ana', lastName: 'Silva' })
//   const [numbers, setNumbers] = useState([1, 2, 3])

//   return <h1>oi</h1>;
// };

export { App };
