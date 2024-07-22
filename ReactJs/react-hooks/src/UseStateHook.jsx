import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [backGround, setBackGround] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [menu, setMenu] = useState(true);
  const [fruit, setFruit] = useState("Apple");
  const [isOpen, setIsOpen] = useState(false);

  const increament = () => {
    setCounter(counter + 1);
  };

  const decreament = () => {
    if (counter === 0) {
      return 0;
    }
    setCounter(counter - 1);
  };

  const handleBackground = (color) => {
    setBackGround(color);
    // console.log("Clicked");
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleFruitsName = () => {
    setFruit(!fruit);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuList = ["aboutus", "contactus", "home"];
  const fruitList = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Watermelon",
  ];

  return (
    <div className="main" style={{ backgroundColor: backGround }}>
      <div className="use_state_main">
        <h1>useStateComponent</h1>
        <button onClick={increament}>Increament</button>
        <h1>{counter}</h1>
        <button onClick={decreament}>Decreament</button>
      </div>

      <div className="use_state_main">
        <h1>backGround Changer</h1>
        <button onClick={() => handleBackground("#000000")}>Dark Mode</button>
        <button onClick={() => handleBackground("#EEEDEB")}>light Mode</button>
      </div>

      <div className="use_state_main">
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p>This is some text!</p>}
      </div>

      <div className="use_state_main">
        <button onClick={toggleMenu}>{menu ? "hideMenu" : "showMenu"}</button>

        {menu && (
          <ul>
            {menuList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        )}
      </div>

      <div className="use_state_main">
        <button onClick={toggleFruitsName}>
          {fruit ? "hideFruit" : "showFruit"}
        </button>

        {fruit && (
          <ul className="fruit__list__main">
            {fruitList.map((item, index) => {
              return (
                <li className="fruitList" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div>
        <button onClick={toggleSidebar}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={`main-content ${isOpen ? "shifted" : ""}`}>
          <h2>Main Content</h2>
          <p>This is the main content of the page.</p>
        </div>
      </div>
    </div>
  );
}

export default UseStateHook;
