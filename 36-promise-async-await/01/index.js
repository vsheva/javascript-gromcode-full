// window.addEventListener("error", function onUnhandledError (err) {
//   console.error("error", err.message);
// });
//
// let userParsingResult;
//
// try {
//   const user = JSON.parse('{"firstName": "Valerii", "lastName":"Shevchenko"}');
//   console.log("User data: ", user);
//   userParsingResult = "success";
// } catch(e) {
//   userParsingResult = "error";
// } finally {
//   console.log(`User parsing finished with ${userParsingResult}`);
// }
//
// let productParsingResult;
//
// try {
//   const product = JSON.parse('{"firstName": "Valerii", "lastName":"Shevchenko');
//   console.log("Product data: ", product);
//   productParsingResult = "success";
// } catch(e) {
//   productParsingResult = "error";
// } finally {
//   console.log(`Product parsing finished with ${productParsingResult}`);
// }


window .addEventListener('error', function onUnhadledError(e){
  console.log(e)
})



try {

  throw new ReferenceError();
  const userData = JSON.parse('{"name":"Valera"')
  console.log(userData)
}
catch (error) {
  if(error instanceof SyntaxError) {
    console.error("Handled")
  } else {
    throw error;
  }
  //console.error(error.name)
}

console.log("I'm alive")
