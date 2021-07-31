import React, { useRef, useState, useMemo } from "react";

const MainComponent = (props) => {
  const [state, setState] = useState({ count: 0, postion: "left", name: "" });
  console.log("I am here right now ");
  const nameRef = useRef("");

  const displayRef = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  const replyMe = useMemo(() => {
    return `this is the ${state.count} times`;
  }, [state.count]);

  const updateCount = (e) => {
    e.preventDefault();
    setState({ ...state, count: state.count + 1 });
  };

  return (
    <React.Fragment>
      <div>
        <h5>Welcome to react hooks right here</h5>
        <form>
          <input
            // onChange={handleChange}
            placeholder="Type here..."
            ref={nameRef}
          />
          <button onClick={displayRef}>click me</button>
          <button onClick={updateCount}>update count</button>
        </form>
        {replyMe}
      </div>
    </React.Fragment>
  );
};

export default MainComponent;
