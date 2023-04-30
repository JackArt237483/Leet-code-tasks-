//1) получение двух значений из массива
// const arr = [1,2,5,9]
// const target = 10
// function makeValue(arr,target) {
//  for(let i = 0; i< arr.length; i ++){
//   for(let k = 0; k < arr.length; k ++) {
//     if(arr[i] + arr[k] === target) {
//       return [i,k]
//     }
//   }
//  }
// }
// console.log(makeValue(arr,target))


//2) Полидром проверка его занчения
// const x = -121
// function checkValue (x) {
//   const string = x.toString() 
//   //меняем число на строку 
//    let left = 0, right = string.length = -1
//   // делаем иницилизацию с начала и конца 0- это начало -1 это конец
//  console.log(string)
//   //идет сравнение двух указателей
//   while(right > left) {
//     if(string[right] !== string[left]){
//       //Если символы не совпадают то число не является палидромом
//       return false
//     }
//     left ++ // двигаем влево
//     right -- //двигаем вправо
//   }
//   return true // и если добрались до этой строки то число являеся палидромом
// }
// console.log(checkValue(x))

const s = "M"

function romanInteger (s) {
 
   const objectCheck = {  //делаем обьект из римских цифр и нормальных цифр чтобы делать по ним соответствсие
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000,
   }

let result = 0 //переменная которая будет отвечать за хранение текущего  знечения точней за результат
let prevRelult = 0 //переменная которая будет отвечать за хранение предыдущего значения число которое у тебя есть в данный момент 
//Мы начинаем здесь проходится с конца строки к самому началу 
// где  s.length - 1 это начало стороки 
// i >= 0 здесь идет проверка если i больше или равен 0 и если будет 0 то мы достигли начало строки
for(let i = s.length - 1; i >= 0 ; i--) {
  const currentValue = objectCheck[s[i]] //здесь мы получаем текущее значение из обьекта Value
  if(currentValue >= prevRelult) { //здесь идет сравнение если текущее значенеи больше и равно предыдущему то это значение идет в результат 
     result += currentValue
  } else {
     result -= currentValue //Если значение текущего символа меньше предыдущего то делай минус в переменой где далается результат 
 }
 prevRelult = currentValue //сохраням значение текущего массива для следущей итерации
}
return result //здесь мы возращаем итоговый результат
}

console.log(romanInteger(s))