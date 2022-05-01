function echoType(param) {
  let paramType = typeof param;

  /* if (paramType == 'number' || paramType == 'string') {
        console.log(`${paramType}\n${param}`);
    }else {
        console.log(`${paramType}\nParameter is not suitable for printing`);
    } */

  paramType == "number" || paramType == "string"
    ? console.log(`${paramType}\n${param}`)
    : console.log(`${paramType}\nParameter is not suitable for printing`);
}
echoType("Hello, JavaScript!");
echoType(18);
echoType(null);
