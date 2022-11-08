import { useEffect, useState } from "react";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  const [aset, setAset] = useState("");
  const [bset, setBset] = useState("");
  useEffect(() => {
    console.log("됐다");
  }, [aset]);
  const onChangeNameb = (e) => {
    setBset(e.target.value);
  };
  const onChangeName = (e) => {
    setAset(e.target.value);
  };

  return (
    <div>
      <input value={aset} onChange={onChangeName} />
      <input value={bset} onChange={onChangeNameb} />
    </div>
  );
};
export default App;
