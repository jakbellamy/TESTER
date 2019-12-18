//DIRECTIONS
  //ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
  //ROT13 is an example of the Caesar cipher.

  //Create a function that takes a string and returns the string ciphered with Rot13.
  //If there are numbers or special characters included in the string, they should be returned as they are.
  //Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
//    INIT ALHPABET
  const lowAlph = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  const upAlph = lowAlph.map(letter => letter.toUpperCase());
//    INIT IN/OUT ARRAYS
  const inArr = message.split('');
  let outArr = [];
//    LOOP THROUGH IN-ARRAY, SORT BY TYPE, AND PUSH PRODUCTS INTO OUT-ARRAY
  inArr.forEach((char) => {
    if ( lowAlph.includes(char) ) {
      let index = lowAlph.indexOf(char);
      if ( (index + 13) < 26 ){
        outArr.push( lowAlph[ index + 13 ] );
      } else {
        outArr.push( lowAlph[ (index + 13) - 26 ] );
      };
    }
    else if ( upAlph.includes(char) ) {
      let index = upAlph.indexOf(char);
      if ( (index + 13) <= 26 ){
        outArr.push( upAlph[ index + 13 ] );
      } else {
        outArr.push( upAlph[ (index + 13)-26 ] );
      };
    }
    else {
      outArr.push(char);
    };
  });
//    RETURN OUTARR AS A JOINED STRING
  return outArr.join('')
};

//TEST
function test(input){
  switch (input) {
    case 'test':
      return rot13(input) === 'grfg' ? true : false
      break;
    case 'Test':
      return rot13(input) === 'Grfg' ? true : false
      break;
    case 'Ruby is cool!':
      return rot13(input) === 'Ehol vf pbby!' ? true : false
      break;
    case '0iev':
      return rot13(input) === '0vri' ? true : false
      break;
    case 'kp3j8':
      return rot13(input) === 'xc3w8' ? true : false
      break;
    case 'abcdefghijklmnopqrstuvwxyz':
      return rot13(input) === 'nopqrstuvwxyzabcdefghijklm' ? true : false
      break;
  }
};

function runTests(){
  const inputs = ['test', 'Test', 'Ruby is cool!', '0iev', 'kp3j8', 'abcdefghijklmnopqrstuvwxyz'];
  let results = [];

  inputs.forEach((input, index) => {
    if(test(input) == true){
      results.push('test ', index, ' PASSED');
    } else {
      console.log('input: ', input, ' // output: ', rot13(input), '\b', 'expected output: ', test(input));
      results.push('test ', index, ' FAILED');
    };
  });
  return results;
};
