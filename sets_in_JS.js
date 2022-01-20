// Javascript Sets.
/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
*/

// Creating a set in Javascript.
/*
You can create a JavaScript Set by:

    Passing an Array to new Set()
    Create a new Set and use add() to add values
    Create a new Set and use add() to add variables
*/
const letters = new Set(["a","b","c", "a"]); // creates a set of size 3 containing a,b,c.

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

/*
Essential Set Methods
------------------------
new Set() ---	Creates a new Set
add()	  ---   Adds a new element to the Set
delete()  ---   Removes an element from a Set
has()	  ---   Returns true if a value exists in the Set
forEach() ---	Invokes a callback for each element in the Set
values()  ---	Returns an iterator with all the values in a Set
Property  ---	Description
size	  ---   Returns the number of elements in a Set
*/

// The forEach() method invokes (calls) a function for each Set element:
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})

//The values() method returns a new iterator object containing all the values in a Set:
letters.values()   // Returns [object Set Iterator] 
// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x;
}