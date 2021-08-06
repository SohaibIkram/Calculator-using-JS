/*

    HOISTING
    ' b = undefined                           '
    ' c = undefined                           '
    ' addFontBoldClass =  {                   '
    '        var class_name = "font-bold";    '
    '       return class_name;                '
    '    }                                    '
    '-----------------------------------------'
    Memory Space / Global Space

    ' b = undefined                           '
    ' c = undefined                           '
    ' addFontBoldClass =  {                   '
    '        var class_name = "font-bold";    '
    '       return class_name;                '
    '    }                                    '
    '-----------------------------------------'
    Content Execution Space

  var a = document.getElementById('demo').classList; //statement

    everything inside a {} is a block

  == will check only the Value of the variable NOT THE DATA TYPE
    number + number = number
    string + string/number/boolean = string
    js programs is collection of statements.

*/

/*
   INSERT
   CLEAR
   BACKSPACE   // it will remove the last character from the input
   in Java/C++ we have substring

   equal
*/

var expression = document.getElementById("result");

function insert(param) {
  expression.value += param;
}

function ClearIn() {
  expression.value = "";
}

function backspace() {
  expression.value = expression.value.slice(0, -1);
}

function equal() {
  console.log(expression.value);
  expression.value = eval(expression.value);
}



/*
function equalWithoutEval() {
  let expArr = [...expression.value];
  let operators = "/*+-", tempNum = "", result = 0;

  for(let i = 0; i < expArr.length; i++){
    let ch = expArr[i];
    if(operators.includes(ch)){
      if(result === 0){

      }
      switch (ch) {
        case '+':
          result += parseInt(tempNum);
          break;
        case '-':
          result -= parseInt(tempNum);
          break;
        case '*':
          result *= parseInt(tempNum);
          break;
        case '/':
          result /= parseInt(tempNum);
          break;
      }
      tempNum = "";
    }
    else {
      tempNum += ch;
    }
  }
}

 *
 *
 *
 * Eval input is string
 *
 *
 * Processing it will convert the String into Javascript Code
 *
 * and then it will execute.
 *
 *
 */




/********************** */



/****
 *
 *
 *
 * payment( ac ){
 *
 *  var a = verify(ac) {.....}
 *
 *
 * if(a === true)
 *  var a = icici(ac){ ..... return [ac , ifsc , actype] };
 * else
 *    throw error )
 * }
 *
 *
 *
 */
