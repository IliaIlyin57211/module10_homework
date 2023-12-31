//Задание 7
let myArr = [1, 3, 'xyz', 5, 6, false, 2, 0, 2, null, 11, '+%=', -4, -8, -7, NaN]
let arr_len = myArr.length

let count_zero = 0; let count_odd = 0; let count_even = 0; let count_nonnum = 0;
let i = 0
while (i < arr_len) 
{
  let check_type = typeof(myArr[i])
//  console.log(`i = ${i}, check_type = ${check_type}`)
  if (check_type != 'number') {
    count_nonnum++
    i++
    continue}
  resid = myArr[i] % 2
  if (myArr[i] == 0 && resid == 0) {
    count_zero++
  }
  else if (myArr[i] != 0 && resid == 0) {
    count_even++
  }
  
  else {
    count_odd++
  }
  i++
}
console.log(`Число нечётных значенией:  , ${count_odd}  `)
console.log(`Число чётных значенией:    , ${count_even} `)
console.log(`Число нулевых значенией:   , ${count_zero} `)
console.log(`Число нечисловых значений: , ${count_nonnum} `)
