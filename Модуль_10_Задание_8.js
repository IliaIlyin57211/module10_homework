//Задание 8
let my_map = new Map()

my_map.set('a', 1)
my_map.set('b', 22)
my_map.set('c', 'Moscow')
my_map.set('d', false)
my_map.set('e', 'Green')
my_map.set('f', NaN)
my_map.set('g', null)
my_map.set(6, 16)
my_map.set(true, false)



for (let [my_keys, my_values] of my_map )
{
    console.log(`Ключ - ${my_keys}, Значение - ${my_values}`)
}


my_map.forEach( (my_values, my_keys ) => 
{
   console.log(`Ключ - ${my_keys}, Значение - ${my_values}`);  
}  )
