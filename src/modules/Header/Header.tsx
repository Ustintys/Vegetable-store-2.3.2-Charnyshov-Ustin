import style from "./header.module.scss";
import Cart from "./components/Cart/Cart.tsx";

function Header() {

  return (
    <header className={style.container}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>Vegetable</h1>
        <div className={style.titleSHOP}>SHOP</div>
      </div>
      <Cart />
    </header>
  )}
export default Header;