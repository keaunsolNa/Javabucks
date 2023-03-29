import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Login from './pages/Login';
import Error from './pages/Error';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="menu" >
            <Route index element={ <Menus/> }/>
            <Route path=":id" element={ <MenuDetail/> }/>
            <Route path="regist" element={ <MenuRegist/> }/>
            <Route path="modify" >
              <Route path=":id" element={ <MenuModify/> }/>
            </Route>
          </Route>
          <Route path="login" element={ <Login/> }/>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';

// function App() {

//   useEffect(() => {
//     //여기서 데이터베이스에 있는 값을 가져온다.
//     axios.get('/api/values')
//       .then(response => {
//         console.log('response', response)
//         setLists(response.data)
//       })
//   }, [])

//   const [lists, setLists] = useState([])
//   const [value, setValue] = useState("")

//   const changeHandler = (event) => {
//     setValue(event.currentTarget.value)
//   }

//   const submitHandler = (event) => {
//     event.preventDefault();

//     axios.post('/api/value', { value: value })
//       .then(response => {
//         console.log(response);
//         if (response.data.success) {
//           console.log('response', response)
//           setLists([...lists, response.data]) 
//           setValue("");
//         } else {
//           alert('값을 DB에 넣는데 실패했습니다.')
//         }
//       })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="container">

//           {lists && lists.map((list, index) => (
//             <li key={index}>{list.value} </li>
//           ))}
//           <br />
//             안녕하세요.
//           <form className="example" onSubmit={submitHandler}>
//             <input
//               type="text"
//               placeholder="입력해주세요..."
//               onChange={changeHandler}
//               value={value}
//             />
//             <button type="submit">확인.</button>
//           </form>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
