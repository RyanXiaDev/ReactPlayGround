document.getElementById("demo").innerHTML = "TEST"
const tables = document.getElementsByTagName("table")
console.log(tables)
let maxCells = 0
for (let i = 0; i < tables.length; ++i){
  let count = tables[i].getElementsByTagName("td").length
  maxCells = Math.max(maxCells, count)
}

document.getElementById("result").innerHTML = maxCells

