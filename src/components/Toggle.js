import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggle () {
    setToggle((toggle) => !toggle );
  }

  const color = toggle ? "red" : "white";

  return <button style={{ background: color }} onClick = {handleToggle}>{ toggle ? 'ON' : 'OFF' }</button>;
}

export default Toggle;
