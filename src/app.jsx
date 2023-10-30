// import { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   return (
//     <div>
//       <h1>Contagem: {count}</h1>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   console.log(count);

//   const increment = () => setCount((c) => c + 1);

//   const incrementMultiple = () => {
//     setCount((c) => c + 1);
//     setCount((c) => c + 1);
//     setCount((c) => c + 1);
//   };

//   return (
//     <div>
//       <h1>Contagem: {count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={incrementMultiple}>+3</button>
//     </div>
//   );
// };

// const Toggle = () => {
//   const [shouldShow, setShouldShow] = useState(true);

//   const handleClickToggle = () => setShouldShow((s) => !s);

//   return (
//     <div>
//       {shouldShow && <p>To aqui</p>}
//       <button onClick={handleClickToggle}>Alternar visibilidade</button>
//     </div>
//   );
// };

// const App = () => (
//   <div className="app">
//     <Toggle />
//     <Toggle />
//   </div>
// );

// const Toggle = ({ shouldShow, handleClickToggle }) => (
//   <div>
//     {shouldShow && <p>To aqui</p>}
//     <button onClick={handleClickToggle}>Alternar visibilidade</button>
//   </div>
// );

// const App = () => {
//   const [shouldShow, setShouldShow] = useState(true);

//   const handleClickToggle = () => setShouldShow((s) => !s);

//   return (
//     <div className="app">
//       <Toggle shouldShow={shouldShow} onClickToggle={handleClickToggle} />
//       <Toggle shouldShow={shouldShow} onClickToggle={handleClickToggle} />
//     </div>
//   );
// };

// let myStr = 'a'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [open, setOpen] = useState(true)
//   const [currentId, setCurrentId] = useState(null)
//   if (myStr === 'a') {
//     const [value, setValue] = useState('')
//   }
//   const [users, setUsers] = useState(() => createUsers())
//   const [form, setForm] = useState({ firstName: 'Ana', lastName: 'Silva' })
//   const [numbers, setNumbers] = useState([1, 2, 3])

//   return <h1>oi</h1>;
// };

// CHILDREN

// const Title = ({ text }) => <h1>{text}</h1>;

// const App = () => (
//   <>
//     <Title text={'Olá'} />
//     <Title text={'Oi'} />
//   </>
// );

// const Title = ({ children }) => <h1>{children}</h1>;

// const App = () => (
//   <>
//     <Title>Olá</Title>
//     <Title>Oi</Title>
//   </>
// );

// const Title = ({ children }) => <h1>{children}</h1>;

// const bla = true;

// const App = () => (
//   <>
//     <Title>{bla ? 'oi' : 'olá'}</Title>
//   </>
// );

const Title = ({ children }) => <h1>{children}</h1>;

const App = () => (
  <>
    <Title>
      Oi, <i>cara de boi</i>
    </Title>
  </>
);

export { App };
