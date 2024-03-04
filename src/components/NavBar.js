import React from "react";
import Details from "./Details";
function NavBar(props) {
  return (
    <>
      <div className="nav-bar">
        {props.data.map((item, index, array) => {
          return (
            <button
            className="btn"
              key={index}
              onClick={(event) => {
                props.selectJob(index);
                props.selected(event);
              }}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <Details {...props.content} />
    </>
  );
}
export default NavBar;
