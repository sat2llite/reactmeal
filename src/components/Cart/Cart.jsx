//모달팝업 안에 들어갈 내용
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0; // 장바구니에 항목이 있을 경우
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  
  // 계속 변화하는 값
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {/* li를 map으로 돌림 */}
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <div>
              <span className={classes.price}>{`$${item.price.toFixed(2)}`}</span>
              <span className={classes.amount}>x {item.amount}</span>
            </div>
          </div>
          <div className={classes.btns}>
            <button onClick={() => cartItemRemoveHandler(item.id)}>-</button>
            <button onClick={() => cartItemAddHandler(item)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    // 모달 안에 모든 내용을 집어넣음
    <Modal onClose={props.onClose}>
      <div>
        {cartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.action}>
          <button className={classes["button-outline"]} onClick={props.onClose}>
            Close
          </button>
          {/* hasItems가 true일 때만 Order버튼이 보이게 */}
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
