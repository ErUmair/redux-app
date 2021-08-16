import React, { useState } from 'react';

function Button({ parentCallback }) {
  const [count, setCount] = useState(0);
  const callCounter = (ele) => {
    // if (props.buttonType === "increase") {
    parentCallback('test');
    // } else {
    //   parentCallback(count - 1);
    // }
  }
  return (
    <div>
      {/* <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-2 text-white" onClick={(e) => callCounter(props.buttonType)}> {(props.buttonType === 'increase') ? <span>+</span> : <span>-</span>} </button> */}
      <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-2 text-white" onClick={(e) => callCounter()}> + </button>
    </div>
  );
}

export default Button;