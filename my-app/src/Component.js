import React from "react";
import { useCart } from "react-use-cart";

const Component = (props) => {
    const { addItem} = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body text-center">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <button className="btn btn-success" onClick={ () => addItem(props.item)}>Add to Pipeline</button>
                    </div>
            </div>
        </div>
    );
};

export default Component;