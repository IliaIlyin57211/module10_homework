//Задание 2

let x = null   // Примечание: в этом задании использовать promt не нужно.
res = typeof(x)
//console.log( typeof(x) )

switch (res) {
  case "number":
    console.log("Type of x is number" )
    break
  case "string":
    console.log("Type of x is string" )   
    break
  case "boolean":  
    console.log("Type of x is boolean" )   
    break
  default:  
    console.log("«Тип x не определён».")
}