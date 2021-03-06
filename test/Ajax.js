//The XMLHttpRequest object is used to exchange data with a server.
//To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
xhttp.open("GET", "url/ajax_info.txt", true);
xhttp.send();

/*
Method 	                    Description
open(method, url, async) 	Specifies the type of request
                            method: the type of request: GET or POST
                            url: the server (file) location
                            async: true (asynchronous) or false (synchronous)

send() 	                    Sends the request to the server (used for GET)
send(string) 	            Sends the request to the server (used for POST)
*/
// ------ GET or POST?
/*
GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:

    A cached file is not an option (update a file or database on the server).
    Sending a large amount of data to the server (POST has no size limitations).
    Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
*/
//If you want to send information with the GET method, add the information to the URL:
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
xhttp.send(); 

//To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data 
//you want to send in the send() method:
xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford"); 
