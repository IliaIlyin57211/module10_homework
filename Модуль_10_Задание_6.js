//Задание 6

//let myArr = ['a', 'a', 'a', 'a', 'a' ]
let myArr = ['a', 'a', 'a', 'a', 'A' ]
//let myArr = [1, 2, 'a', 3, 'a' ]
let arr_len = myArr.length
let item_compare = true

i=1
while (i < arr_len) {
//  console.log(`${i}, ${myArr[i-1]}, ${myArr[i]}`)
  if (myArr[i] != myArr[i-1]) {
    item_compare = false
    break
  }
  i++
}
  
console.log(item_compare)
