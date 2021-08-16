import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../../../_actions/user_actions';
import './Basket.css';
var finalAmt = 0;
function Basket(props) {
  const user = useSelector((state) => state.user);
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(false)
  const [finalAmout, setFinalAmout] = useState(0)
  console.log(user)
  let quantity = 0, price = 0;
  for (let index = 0; index < user.length; index++) {
    quantity += +user[index].quantity;
    price += +user[index].pPrice;
  }
  finalAmt = quantity * price;
  // console.log(final)
  // setFinalAmout(final)
  const dispatch = useDispatch()


  const callCounter = (ele) => {
    setValue(true);
    setCount(ele.quantity++);
  }

  // const deleteElem = (ele) => {
  //   dispatch(removeFromCart(ele))
  // }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className="font-bold border-b-2 text-5xl pb-4">Basket</h1>
      <div className="product-bucket">
        <ul className="list-inside">
          {
            (user && user.length > 0) && user.map(item => (

              <li className="border-b-2" key={item.id}>
                <div className="flex justify-between items-center pt-4 pb-4">
                  <div className="product-name">{item.pName}</div>
                  <div className="product-price">&#163;{item.pPrice}</div>
                  <div className="actions flex justify-between items-center">
                    <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-2 text-white" onClick={(e) => callCounter(item)}> + </button>
                    {
                      value ? <div className="pr-5 pl-5">{count}</div> : <div className="pr-5 pl-5">{item.quantity}</div>
                    }
                    <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-2 text-white" onClick={() => setCount(count - 1)}> - </button>
                    {/* <div className="pl-5">
                      <button className="rounded py-2 px-2 bg-red-600 text-white" onClick={() => deleteElem(item)}> Delete </button>
                    </div> */}

                  </div>
                </div>
                <div className="flex justify-end border-b-2 pb-2 pt-2 text-gray-400">Item price &#163;{item.pPrice} * {value ? <span>{count}</span> : <span>{item.quantity}</span>
                } = &#163;{
                    value ? <span>{item.pPrice * count}</span> : <span>{item.pPrice * item.quantity}</span>
                  }</div>
                <div className="flex justify-end border-b-2 pb-2  pt-2 text-red-400">Savings &#163;0.40</div>
                <div className="flex justify-end border-b-2 pb-2 pt-2">Item cost  &#163;0.80</div>
              </li>
            ))
          }
        </ul>
        {
          (user && user.length > 0) && <div className="final-amout">
            <div className="flex justify-between font-medium">
              <div className="">Sub Total</div>
              <div className="">&#163;5.50</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="">Savings:</div>
              <div className="">&#163;5.50</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="">Total Amout</div>
              <div className="">&#163;
                {finalAmt}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Basket;