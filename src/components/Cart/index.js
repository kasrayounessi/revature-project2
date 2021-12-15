import React from "react";
/*GO TO CARDLIST OR SEARCHBAR TO SEE HOW THE GOOGLE BOOKS API IS IMPLEMENT AND HOW DATA IS READ. YOU JUST NEED THE TITLE MAYBE THE THUMBNAIL IF YOU WANT
BUT NOT IMPORTANT I THINK RIGHT. HARDCODE THE PRICE TO $15 BECAUSE THAT'S THE PRICE OF ALL THE BOOKS IN MY LATEST COMMIT. EASIER THAT WAY I THINK*/
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
