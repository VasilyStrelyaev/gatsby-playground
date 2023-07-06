import * as React from "react";
import { useState } from "react";

function StaticMarkup() {
  return (
    <div>
      <h1>Static Markup</h1>
      <p>This is some static text!</p>
    </div>
  );
}

export default function ServerRenderableComponent() {
  const [value, setValue] = useState(1);

  return (
    <>
      <StaticMarkup/>
      <button onClick={() => setValue(value + 1)}>{ 'Increment!' }</button>
      <div>{ value }</div>
    </>
  );
}
