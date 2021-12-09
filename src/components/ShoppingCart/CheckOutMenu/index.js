import React, {useState, useEffect} from "react";
import './style.css';

const CheckOutMenu = (props) => {

    const[tax, setTax] = useState(0);

    useEffect(() => {
        setTax((props.data*0.1));
    })
    
  return (
    <div class="check-out-menu-custom card text-center bg-dark text-light">
      
      <div class="card-body">
        <h5 class="card-title">Price: ${props.data}</h5>
        <h5 class="card-title">Tax: ${tax}</h5>
        <h5 class="card-title">Total: ${props.data + tax}</h5>
        <p class="card-text">
          *******************************************
        </p>
        <a href="#" class="btn btn-success btn-block">
          Check Out
        </a>
      </div>
    </div>
  );
};

export default CheckOutMenu;
