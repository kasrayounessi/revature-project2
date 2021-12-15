import React from "react";
/*THIS CART COMPONENT IS WRAPPED IN THE MODAL COMPONENT, 
YOU DON'T REALLY NEED TO EDIT THE MODAL COMPONENT UNLESS THERE IS A CSS ISSUE I THINK,
WHATEVER YOU WORK ON HERE WILL SHOW UP AS A POP UP WHEN YOU CLICK ON CART IN THE NAVBAR
REMEMBER WHEN ADDING STUFF TO THE CART FROM CARDLIST COMPONENT IN CONTENTS COMPONENT THAT WE ALSO NEED TO DO THE 
SAME THING TO  SEARCHBAR COMPONENT BECAUSE THOSE BOOKS ARE RENDERED SEPERATELY*/

const Cart = (props) => {
  const onClose = () => {
    props.handleCartCloseClick();
  };
  const { cartItems, onAdd, onRemove } = props;
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {/* WORK IN PROGRESS */}
      {/* {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
        </div>
      ))} */}
      <span onClick={onClose}>Close</span>
    </div>
  );
};

export default Cart;
