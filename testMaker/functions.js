// EXAMPLE answrKey
//test([{in: 'test', out: 'grfg'}, {in: 'sdafsfd', out: 'asdfasd'}])

const example = [
  {in: 'test', out: 'grfg'},
  {in: 'Test', out: 'Grfg'},
  {in: 'Ruby is cool!', out: 'Ehol vf pbby!'},
  {in: '0iev', out: '0vri'},
]

function buildTest(answrKey){
//    INITIALIZE CONSTANTS
  const LOG = (arg) => console.log(arg)
  const ERROR = {
        ARG_TYPE: 'ERR: ARGUMENT SHOULD BE AN ARRAY OF ANSWER OBJECTS',
        ANSWR_TYPE: 'ERR: ANSWER OBJECTS MUST HAVE TWO KEY-VALUE PAIRS: ## EX: {in: value, out: value} ##',
        UNEXPECTED_INPUT: 'ERR: UNEXPECTED INPUT. ALL TEST INPUTS MUST BE INITIALIZED IN TEST BUILD'
  };
  const VALIDATE = (key) => {
    if( !key instanceof Array ){
      LOG(ERROR.ARG_TYPE);
      return false;
    };
    key.forEach(e => {
      if(e.in == false || e.out == false){
        LOG(ERROR.ANSWR_TYPE);
        return false;
      };
    });
  };
  const possibleInputs = answrKey.map(answr => answr.in);
  LOG('possible inputs: ', possibleInputs)

//    VALIDATE
  VALIDATE(answrKey)
//    BUILD FUNTION
  function test(testData){
    VALIDATE(testData);
    const key = answrKey
    testData.forEach(answr => {
      if(possibleInputs.includes(answr.in)){
        const i = key.indexOf(answr.in)
        if(key[i].out === answr.out){
          LOG('CORRECT: ', answr.in, ' => ', answr.out);
        } else {
          LOG('INCORRECT: YOU PUT', answr.in, ' => ', answr.out, '\b', answr.in, ' SHOULD => ', key[i].out);
        }
      } else {
        LOG(ERROR.UNEXPECTED_INPUT);
        return false;
      };
    });
  };
//    RETURN FUNCTION
  return test;
};
