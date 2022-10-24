import React from "react";
import { useNavigate } from "react-router-dom";

const PageA = () => {
  const navigate = useNavigate();

  const goToPageC = () => {
    alert("페이지C로 이동");
    navigate("/c");
  };
  const names = [
    { id: 0, name: "싱싱", age: 0 },
    { id: 1, name: "싱싱1", age: 1 },
    { id: 2, name: "싱싱2", age: 2 },
  ];
  const nameList = names.map((user) => (
    <PageA key={user.id} name={user.name} age={user.age} />
  ));

  return (
    <div>
      PageA
      <div onClick={goToPageC}>PageC</div>
      <div>{nameList}</div>
    </div>
  );
};
export default PageA;
