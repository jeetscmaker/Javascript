// Maps in Javascript

/*
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
Essential Map Methods:
	new Map() ---	Creates a new Map
	set()	  ---   Sets the value for a key in a Map
	get()	  ---   Gets the value for a key in a Map
	delete()  ---	Removes a Map element specified by the key
	has()	  ---   Returns true if a key exists in a Map
	forEach() ---	Calls a function for each key/value pair in a Map
	entries() ---	Returns an iterator with the [key, value] pairs in a Map
Property 	Description
	size ---	Returns the number of elements in a Map
*/

// Create a Map
const fruits_and_their_quantity = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// You can add elements to a Map with the set() method:
// Create a Map
const fruits = new Map(); // in Java, it is, Map<String, Integer> fruits = new LinkedHashMap<String, Integer>();

// Set Map Values
fruits.set("apples", 500); // in Java it is, fruits.put("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// The set() method can also be used to change existing Map values.
fruits.set("apples", 100); 

// The get() method gets the value of a key in a Map:
fruits.get("apples");    // Returns 500

// The size property returns the number of elements in a Map:
fruits.size; // returns 3

// The delete() method removes a Map element:
fruits.delete("apples");

// The has() method returns true if a key exists in a Map:
fruits.has("apples"); // returns false because we just deleted ["apples", 100]


