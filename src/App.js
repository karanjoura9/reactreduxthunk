import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import * as AmountAction from '../src/state/action/amountAction'
import * as CartAction from '../src/state/action/cartAction'
import * as GetNewsAction from '../src/state/action/getNewsAction'


function App() {
  const amount = useSelector(state => state.amount);
  const cart = useSelector(state => state.cart);
  const news = useSelector(state => state.news);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2> Balance: {amount}</h2>
      <button onClick={() => dispatch(AmountAction.depositAmount(100))}>Deposit</button>
      <button onClick={() => dispatch(AmountAction.withdrawMoney(100))} >Withdraw</button>

      <br />
      <br />

      <h2> Cart: {cart}</h2>
      <button onClick={() => dispatch(CartAction.AddCartItem(1))}>Deposit</button>
      <button onClick={() => dispatch(CartAction.RemoveCartItem(1))} >Withdraw</button>


      <br />
      <br />

      <button onClick={() => dispatch(GetNewsAction.getNewsAPI('bbc-news'))}>BBC NEWS</button>
      <button onClick={() => dispatch(GetNewsAction.getNewsAPI('cnbc'))}>CNBC NEWS</button>
      <button onClick={() => dispatch(GetNewsAction.getNewsAPI('google-news'))}>GOOGLE NEWS</button>

      <h2> news: {JSON.stringify(news)}</h2>

    </div>



  );
}

export default App;
