The internet is primarily composed of 3 different types of files. HTML, CSS and Javascript. HTML is for the content. CSS is for the styling. Javascript is for the functionality. HTML and CSS files are primarly for what you read while Javascript is for what the page does. I'm gonna start with the HTML. This is for the words and images on the page. Let's create a file called ```my_first_page.html```. You can use nano for this. Open the ubuntu command line (terminal). First let's create a directory for our files type: ```$ mkdir my_first_page``` (don't have to type the dollar sign). Then let's enter the directory ```$ cd my_first_page``` (don't forget about the autocomplete press tab when you have it partially typed in. If the file is unique it will complete otherwise it will suggest the options). Then let's make our html file ```$ touch my_first_page.html```. Finally lets open the file in nano (another text editor like notepad or gedit). ```$ nano my_first_page.html```. This will open up nano. Nano is pretty straight forward you can type your document and it has some basic key commands to do things. Since you are still in the terminal there is no Graphical User Interface so the mouse doesn't do anything. Let's type some html! For the first line of our file type ```<h1>Hello World</h1>```. The ```<h1>``` tells the computer I'm putting a big header here and the ```</h1>``` tells the computer that is all for my header. You can now close out of nano by pressing ctrl and x and then y (for yes) to exit. Now lets look at our document in the browser, if you are on the windows subsystem for linux (windows) type ```$ explorer.exe my_first_page.html``` otherwise type ```$ open my_first_page.html```. This should open the file in your browser and you will see in big letters the words Hello World. 

Now go back to the ubuntu terminal. Let's try out some other types of html tags open up nano again and on a new line type: ```<p>The internet likes cats</p>```. Now save that by pressing ctrl + x again and look at it in the browser again, just like we did before. Now you'll see there is a new line that says 'The internet likes cats'. Next lets go back in nano and add a span tag around cats so your line will now look like so: ```<p>The internet likes <span>cats</spans></p>```. Save it and exit like before with ctrl + x and y. If you open the file up in the browser notice it looks the same...\

Let's make this span tag special now but first let's add a header and footer to our html file. Open the html file in nano and add the following to the very top:
```<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

```
This will tell the computer were to find our stylesheet. It's a bit more complicated than that but that is all you need to know for now. We will also need to add the footer at the very bottom of the document, it will look like this:
```
</body>
</html>
```

Now the special span. Let's make a new file: ```$ touch my_first_style.css```. In this file lets add the following:
```
span {
    color: darkolivegreen;
}
```
Now let's save that file and exit. This tells the computer to take all the span tags in the page and color them dark olive green. Don't forget the semi-colon this tells the computer that is all for now. It will still run the same for now but, if you add another line it won't work. You can now open the file in the browser with the open command or explorer.exe. It's real subtile but now cats are dark olive green. Let's make this a bit more obvious. In your css file ```$ nano my_first_style.css``` add the following lines:
```
body {
    background-color: tomato;
}
```
Hit ctrl + x to save and exit. Then open the file in the browser with ```open my_first_page.html``` or ```explorer.exe my_first_page```, respectively.
