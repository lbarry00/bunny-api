# Bunny Images API
### By: Lauren Barry

<br>
A simple REST API that uses Node.js, MongoDB, and Express to serve images of bunnies. 
<br>

#### Adding Images to Database from Text File
There are 100 starting image URLs located in `bunnies\encoded.txt`.

All URLs must be in encoded form, one on each line.

`bunnies\bunnyImagePost.jar` is a simple Java program to read URLs from the file and add them to the API database

The API must be online in order to add to the database.

From the repository's root directory, execute:
```
cd bunnies
java -jar bunnyImagePost.jar
```
