import React from "react";
import "./EventBubbling.css";

const EventBubbling = () => {
  const handleClick = (title, e) => {
    console.log(title, " was clicked");
  };
  return (
    <div>
      <h1>EventBubbling and capturing</h1>
      <p>
        Events are generally processed in three phases in the DOM. They are the
        capturing, the target, and the bubbling phase.
      </p>
      <p>
        Event Bubbling is the phase where the event bubbles up from the target element all the
        way to the global window object.
      </p>
      <div
        className="grand-parent"
        title="grand-parent"
        onClick={() => handleClick("grand parent")}
      >
        <div
          className="parent"
          title="parent"
          onClick={() => handleClick("parent")}
        >
          <div
            className="child"
            title="child"
            onClick={() => handleClick("child")}
          >
            Click here
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBubbling;
