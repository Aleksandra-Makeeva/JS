// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, 
//принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function(age_1, age_2, age_3) {
    if (age_1 < age_2){
            console.log("You don't have access cause your age is", + age_1 + " It's less then")
            return
             } else if (age_1 >= age_2 && age_1 < age_3){
                 console.log("Welcome !")
                 return
             } else if (age_1 > age_3) {
                 console.log("Keep calm and look Culture channel")
                 return
             } else {
                console.log("Technical work")
                return
    }
}
checkAge(17, 18, 61)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.
const checkNumber2 = function(age_1, age_2, age_3){
    if (typeof age_1 !== 'number') {
        console.error(`The value ${age_1} should be number type`);
        return false
      }
      if (typeof age_2 !== 'number') {
        console.error(`The value ${age_2} should be number type`);
        return false
      }
      if (typeof age_3 !== 'number') {
        console.error(`The value' ${age_3} should be number type`);
        return false
      }
      return true
}

const checkAge2 = function(age_1, age_2, age_3) {
    if (checkNumber2(age_1,age_2,age_3)) {

    { if (age_1 < age_2){
            console.log("You don't have access cause your age is", + age_1 + " It's less then")
            return 
             } else if (age_1 >= age_2 && age_1 < age_3){
                 console.log("Welcome !")
                 return 
             } else if (age_1 > age_3) {
                 console.log("Keep calm and look Culture channel")
                 return 
             } else {
                console.log("Technical work")
                return 
    } 
    }
} 
}

checkAge2 (17, 18, 61)


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkNumber3 = function(age_1, age_2, age_3){
    if (typeof age_1 !== 'number') {
        if (!isFinite(age_1)) {
            console.error(`The value ${age_1} should be number type`);
             return false
             }
      } 
        
      if (typeof age_2 !== 'number') {
        if (!isFinite(age_2)) {
            console.error(`The value ${age_2} should be number type`);
             return false
             }
      }
      if (typeof age_3 !== 'number') {
        if (!isFinite(age_3)) {
            console.error(`The value ${age_3} should be number type`);
             return false
             }
      }
      return true
}

const checkAge3 = function(age_1, age_2, age_3) {
    if (checkNumber3(age_1,age_2,age_3)) {

    { if (Number(age_1) < Number(age_2)){
            console.log("You don't have access cause your age is", + age_1 + " It's less then")
            return 
             } else if (Number(age_1) >= Number(age_2) && Number(age_1) < Number(age_3)){
                 console.log("Welcome !")
                 return 
             } else if (Number(age_1) > Number(age_3)) {
                 console.log("Keep calm and look Culture channel")
                 return 
             } 
                console.log("Technical work")
                return 
    
    }
} 
}

checkAge3 ("17", "18", "61")

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке




