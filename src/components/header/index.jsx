import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import { loginUser, logoutUser} from "../../Redux/user/actions";
import { selectProductsCount } from "../../Redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  // const { products } = useSelector(rootReducer => rootReducer.cartReducer)

  const productsCount = useSelector(selectProductsCount)


  const disptach = useDispatch()

  console.log(currentUser)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    disptach(loginUser({name: "gabriel", email: "gabriel@albano.com"}))
  }

  const handleLogoutClick = () => {
    disptach(logoutUser())
  }

  

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
          ) : (
          <div onClick={handleLoginClick}>Login</div>
          )}

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
