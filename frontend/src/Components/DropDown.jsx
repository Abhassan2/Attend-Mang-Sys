import { useState } from "react";

export default function DropDown({ list }) {

  return (
    <div className="dropDown">
      {list.map((li, index) => (
        <p key={index}>{li}</p>
      ))}
    </div>
  );
}
