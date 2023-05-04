import { useContext, useState } from "react";
import { APIContext, DataContext } from "../FetchDataContext";
import DataDisplay from "./DataDisplay";

export default function DataContainer() {
  const getData = useContext(APIContext);
  const [data, setData] = useState(null);
  const [dateInput, setDateInput] = useState("");
  return (
    <>
      <DataContext.Provider value={data}>
        <DataDisplay></DataDisplay>
      </DataContext.Provider>
      <input
        type="text"
        placeholder="5-January-2000"
        value={dateInput}
        onChange={(e) => {
          setDateInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          getData(dateInput).then((res) => {
            setData(JSON.stringify(res));
          });
        }}
      >
        Get Data from method in context
      </button>
    </>
  );
}
