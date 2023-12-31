//Задание 1

test_var = prompt('Enter test variable, please')
console.log('test_var orig: ' + test_var)

console.log('Type of original variable: ' + typeof(test_var))

let new_test_var = +test_var
console.log('Modified variable = ' + new_test_var)
res = typeof(new_test_var)
console.log('Type of ' + new_test_var + ' is ' + res)

if(res=="number")   // if number
{
  if(isNaN(new_test_var))     // if number, but NaN
  {
    console.log("Упс, кажется, вы ошиблись")
  }
  else              // if number , but not NaN
  {
    let rem = new_test_var % 2
    console.log("Remainder = " + rem)
    if(rem === 0)
    {
    console.log("even - чётное")
    }
    else
    {
      console.log("odd - нечётное")
    }
  }
}
    
else{     // if type is not number
  console.log("Упс, кажется, вы ошиблись")
}
