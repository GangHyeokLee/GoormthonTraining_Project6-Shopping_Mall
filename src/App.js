import {
  Route,
  Link,
  Routes,
  useNavigate

} from "react-router-dom"
import ProductsPage from "./components/ProductsPage/ProductsPage";
import LoginPage from "./components/LoginPage/LoginPAge";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import CartPage from "./components/CartPage/CartPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {

  let dispatch = useDispatch();
  let navigate = useNavigate();


  return (
    <Routes>
      <Route exact path='/' Component={ProductsPage}/>
      <Route excat path='/login' Component={LoginPage}/>
      <Route excat path='/register' Component={RegisterPage}/>
      <Route excat path='/cart' Component={CartPage}/>
    </Routes>
  );
}

export default App;
