// JS can be weird when it comes to type coercion.
// Try to guess what the output for each of the lines below are:

false == ""; // true
false == []; // true
false == {}; // false
"" == 0; // true
"" == []; // true
"" == {}; // false
0 == []; // true
0 == {}; // false
0 == null; // false
