import React from "react";
import emojipedia from "../emojipedia";


function Entry(props) {
  return <div className="term">
          <dt>
           <span className="emoji" role="img" aria-label="Tense Biceps">
             {props.emoji}
           </span>
           <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
}

function createEntry(entry) {
  return (
    <Entry 
        key = {entry.id}
        emoji = {entry.emoji}
        name = {entry.name}
        meaning = {entry.meaning}
        />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
    <dl className="dictionary">
        {emojipedia.map(createEntry)}
    </dl>
    </div>
  );
}

export default App;
