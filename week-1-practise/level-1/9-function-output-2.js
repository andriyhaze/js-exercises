function s(w1, w2) {
  return w1.concat(w2);
}

var result = s("code", "your");
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
//                  It concatenates the parameters of the function call input.
// - How many parameters does the function take?
//                  Two, "code" and "your".
// - What is the function name?
//                  s
// - Where is the function called? with what parameters?
//                  at __var result = s__ with the __'code', 'your'__ parameters.
// - What does the function return?
//                  The concatenated strings of the input parameters.
// - How can this function be improved?
//                  We can remove the __.concat(w2)__ and put __+ w2__ instead. It will still display the exact same result.
