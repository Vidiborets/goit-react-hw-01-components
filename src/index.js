import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

// import ReactDOM from "react-dom";
// import painting from '../src/data/painting.json'
// import App from './App'

// function Painting() {
//   return (
//     <div>
//       <img src="" alt="" width="480" />
//       <p>
//         Автор: <a href=""></a>
//       </p>
//       <p>Цена: кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   )
// }

// ReactDOM.render(<Painting/>, document.querySelector('#root'))
