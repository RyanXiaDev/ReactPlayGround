//const https = require("https")
import axios from "axios"
const API_URL = "https://jsonmock.hackerrank.com/api/stocks"
// ?date={dateStr} format: 5-January-2000


export default function getData(dateStr){
  let url = `${API_URL}?date=${dateStr}`
  return axios.get(url).then((res)=>{
    //console.log(res);
    return res
  })

}

