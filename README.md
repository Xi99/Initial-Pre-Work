# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Once you click the URL, the browser checks to make sure that there is a TCP connection which guarantees the delivery of data and that data can be sent back to the client in the order they came. The browser then has the go ahead to send HTTP requests to the server via GET requests. The server which holds the data for the website receives this GET request and if it has the data, it will send it back in the form of either JSON or HTML. In the format that it comes in, the information for the website to show in the browser is sent with it via an HTTP response. Finally, the browser has now received the HTML, CSS, and JavaScript files it needs to display the webpage in the browser.

## From start to finish, how does data reach you to be rendered in the browser?

When HTML, CSS, or JavaScript is trying to be opened and rendered in the browser there are many steps for this to actually happen. The browser receives this information in the form of bytes from your hard disk. The browser needs to work with the Document Object Model, or DOM. The DOM is created when a web page loads and uses a tree structure of objects that it can use to create dynamic features for a webpage to update content, style, and structure a document.

There is then a process of converting these bytes into something the browser can read and render. The bytes are converted to characters from the HTML file with the help of the DOM. The browser still can't render anything with just the characters so those are then converted into tokens. Tokens are parsed data of all the HTML tags and understands all the rules that each of them have in a document. From here, the tokens are converted into nodes which are objects with specific properties. The nodes then communicate with the DOM to make a parent-child relationship tree structure.

The first file that makes it's way to be rendered is the HTML file. As the DOM is constructing the webpage with the data that your browser can now understand, it will come across the "stylesheet" containing the CSS file. This triggers the DOM to then request the CSS data which is in bytes, just like the HTML data. The same process happens to convert the CSS bytes to become eventually a DOM-like structure called CSS Object Model, ore CSSOM. In the CSSOM process the information on how certain element styles behave is established.

We now have both the DOM and the CSSOM objects, but the browser still needs a way to partner these together in order for it to render the data. The browser engine has the software to combine the two into what is called a render tree. During this process the browser is looking at all the HTML and CSS elements and is sizing and positioning them so that they fit naturally into the browser.

This process will get you a rendered webpage of HTML and CSS, but of course you would also want to use JavaScript in your application. JS can modify the contents of our DOM and CSSOM. To make sure it doesn't disrupt our flow in rendering, the async attribute can be added to the same script tag used to bring in JS so that it doesn't create problems and roadblocks to the DOM and CSSOM. At this point your browser is able to render all the information onto the screen.

## What code is rendered in the browser?

HTML, CSS, and JavaScript.

## What is the server-side code’s main function?

Server-side code's main function is to decide what information to send to the user. You are able to access and store lots of data of users in a database to use to tailor a user's experience to feel unique. It is able to save information such as credit cards and user preferences to make a dynamic experience. The user is able to be sent notifications or emails when something they have been looking at is on sale or there is another item just like it.

## What is the client-side code’s main function?

The main function of client-side code is the appearance of a web page and how it performs. The process takes place in the users browser so it doesn't have to do a call to a server. This changes the way a webpage responds to a user by such things as hovering the mouse over picture to enlarge it or a video to make it start playing.

## What is runtime?

It is the time from the program has been executed, to when the program is ended. It is keeping track of all that is going on while a program is running. These things include things that are necessary for the program to run, even things that you didn't even write to form the structure needed for the program.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I don't fully understand the question and tried looking up what this would mean so I will do my best to explain what it sounds like to me. Since client-side code is in the client's browser, then the number of instances is dependent on the user's hard drive storage. With each tab they open they create another instance.  

## How many instances of the server-side code are available at any given time?

I am having trouble finding the answer to this question and what "an instance" is referring to. My best understanding is that there are as many instances available as the server can withstand. I believe this is referring to the connection between the client (user) and the server and the server can have instances with many users at one time.  

## How many instances of the databases connected to the server application are created?

Same as the above in that I am having trouble finding the answer to this question. I believe I am stuck on the verbiage so it is difficult for me when trying to google for what some of this question means. My best guess as to what the question is asking for is similar to the above where you can have as many instances for there are client and server relations happening.

I did try to find the answers to the last three questions for a fair amount of time so I would really appreciate if someone could reach out to me with how to go about finding the best understanding of them, or explaining them in a different way. Much appreciated!
