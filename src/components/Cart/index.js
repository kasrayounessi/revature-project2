import React from "react";
import "./cart.css";
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

      {/* This looks awful right now, but it's a skeleton, will probably
      need to pull from the database and use a map the books to cart
      similar to how its done in the contents and search. I started in the above
      commented code but I'm not sure how Spring will do it.
      You can delete the CSS if you want and just keep it super simple. */}
      <div className="CartContainer">
        <div className="Header">
          <h3 className="Heading">Book Cart</h3>
        </div>

        <div className="Cart-Items">
          <div className="image-box">
            <img src="" style={{ height: "60px" }} />
          </div>
          <div className="about">
            <h1 className="title">Apple Juice</h1>

            <img src="images/veg.png" style={{ height: "30px" }} />
          </div>
          <div className="counter">
            <div className="btn">+</div>
            <div className="count">2</div>
            <div className="btn">-</div>
          </div>
          <div className="prices">
            <div className="amount">$2.99</div>

            <div className="remove">
              <u>Remove</u>
            </div>
          </div>
        </div>

        <div className="Cart-Items pad">
          <div className="image-box">
            <img src="images/grapes.png" style={{ height: "120px" }} />
          </div>
          <div className="about">
            <h1 className="title">Grapes Juice</h1>

            <img src="images/veg.png" style={{ height: "30px" }} />
          </div>
          <div className="counter">
            <div className="btn">+</div>
            <div className="count">1</div>
            <div className="btn">-</div>
          </div>
          <div className="prices">
            <div className="amount">$3.19</div>

            <div className="remove">
              <u>Remove</u>
            </div>
          </div>
        </div>
        <hr />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">2 items</div>
            </div>
            <div className="total-amount">$6.18</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>

      <span onClick={onClose}>Close</span>
    </div>
  );
};

export default Cart;
