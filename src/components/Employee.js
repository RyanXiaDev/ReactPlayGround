import { useState } from "react";

const Employee = ({ id, name, salary }) => {
  const [salaryInput, setSalaryInput] = useState(salary);
  console.log("test", typeof salary, typeof salaryInput)

  return (
    <li>
      <span>{name}</span>
      <span>
        <input type="number" value={salaryInput}
          onChange={(e)=>{setSalaryInput(e.target.valueAsNumber)}}
        ></input>
      </span>
      <button disabled={!salaryInput||salaryInput===salary}>SAVE</button>
    </li>
  );
};

export default Employee;
