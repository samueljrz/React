import React, { useState, useEffect } from "react";
import "./styles.css";

const FunctionalComponent = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  const mouseClickHandler = event => {
    console.log('DidUpdate')
    setClickCount(clickCount => clickCount + 1);
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    console.log('DidMount')
    document.addEventListener("click", mouseClickHandler);
    return () => {
      console.log('DidUnmount')
      document.removeEventListener("click", mouseClickHandler);
    };
  }, []);

  return (
    <div>
      {coordinates.x},{coordinates.y} - {clickCount}
    </div>
  );
};

export default FunctionalComponent;
