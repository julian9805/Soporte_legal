import { useState } from "react";

function WorkItem(props) {

  let [hidden, setHidden] = useState(true);

  return (
    <div 
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      className={hidden ? "item" : "item hover"} 
      id={props.id}
      >
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default WorkItem;