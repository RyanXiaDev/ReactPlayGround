import { useContext } from "react";
import { DataContext } from "../FetchDataContext";

export default function DataDisplay () {
  const data = useContext(DataContext)
  return (
    <p>{data}</p>
  )

}