import "./styles.css";
import addCustomStyle from "./addCustomStyle";
import { useEffect } from "react";

export default function App() {
  var styles = "{ color: red }";
  var styles1 = "{ color: blue }";

  useEffect(() => {
    addCustomStyle("ww", "h1", styles, "max-width: 500px");
    addCustomStyle("second", "h2", styles1);
  }, []);

  return (
    <div className="App">
      <h1>Hello </h1>
      <h2>Let's see addCustomStyle function</h2>
    </div>
  );
}
