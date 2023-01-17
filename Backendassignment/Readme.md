### Explain in brief what is node js?
#### Node.js is a runtime environment for JavaScript that allows developers to run JavaScript code on the server side, rather than in a web browser. It is built on top of the V8 JavaScript engine, which is the same engine that powers the Google Chrome web browser.Node.js uses an event-driven, non-blocking I/O model, which makes it efficient for building scalable network applications. It is commonly used for building real-time web applications, such as chat apps, online games, and collaboration tools.

### How is node js non-blocking?
#### In a traditional, blocking system, a request made to a server or database will cause the program to pause execution until the request has been completed and a response has been received. This can lead to poor performance and scalability, as the program is unable to handle multiple requests concurrently.In contrast, Node.js uses a non-blocking, event-driven model for I/O operations. When a program makes a request, it registers a callback function to be executed when the response is received. The program then continues to execute, rather than waiting for the response. This allows it to handle multiple requests concurrently and improve performance.

### What is throughput?
#### Throughput is a measure of the rate at which a system can process and complete tasks. It is typically expressed in terms of the number of tasks that can be completed in a given time period, such as tasks per second or tasks per minute.In computer systems, throughput can refer to the rate at which a system can perform a specific type of operation, such as the number of database queries that can be processed per second, or the number of requests that can be handled by a web server per minute. It can also refer to the rate at which data can be transferred, such as the amount of data that can be transferred between two systems over a network connection in a given time period.

### How is Node js having high IO throughput?
#### Node.js is designed to have high I/O throughput by using an event-driven, non-blocking model for I/O operations. This means that when a program makes a request for input or output (I/O), it registers a callback function to be executed when the response is received, and continues to execute other tasks while waiting for the response. This allows the program to handle multiple I/O requests concurrently and improve its overall throughput.Node.js also takes advantage of the V8 JavaScript engine, which is optimized for high performance and is used in Google Chrome, one of the most popular web browsers. The V8 engine compiles JavaScript code into native machine code, which allows it to execute more quickly than interpreted languages.

### What are CPU intensive tasks?
#### CPU-intensive tasks are tasks that require a lot of processing power from a computer's central processing unit (CPU). These tasks tend to be computationally intensive, and may include operations such as large-scale data processing, complex mathematical calculations, and rendering graphics or video.CPU-intensive tasks can be contrasted with I/O-intensive tasks, which are tasks that require a lot of input/output (I/O) operations, such as reading or writing data to a disk or network. I/O-intensive tasks tend to be less computationally intensive, but may take longer to complete due to the time required for the I/O operations.

### How can you end up blocking your main thread in node.js?
#### In Node.js, the main thread is responsible for running the event loop and handling all I/O operations. If the main thread is blocked, it will be unable to process any new I/O events, which can lead to poor performance and decreased throughput.
#### There are several ways that the main thread can be blocked in Node.js:
#### Running long-running synchronous code: If the main thread is executing a long-running synchronous task, such as a loop with a high iteration count, it will be unable to process new I/O events until the task is completed. This can lead to the main thread being blocked for a significant amount of time.
#### Performing blocking I/O operations: Some I/O operations, such as reading or writing to a disk, can take a significant amount of time to complete. If the main thread is performing these operations, it will be blocked until they are finished.
#### Using blocking APIs: Some built-in Node.js APIs, such as fs.readFileSync, are blocking, which means they will block the main thread until they are completed.

### What is the event loop?
#### The event loop is a central part of the Node.js runtime. It is responsible for scheduling and executing the callback functions that are associated with I/O events, such as the completion of a network request or the availability of data to be read from a stream.The event loop is implemented as a single-threaded loop that runs continuously, checking for new I/O events and executing the corresponding callback functions. This allows Node.js to process I/O events asynchronously and non-blocking, without the need for multiple threads.

### What are different phases in event loop?
#### The event loop in Node.js consists of several phases, each of which processes a different type of task or event. The phases are:

#### Timers: This phase processes timers that have completed, such as setTimeout and setInterval.

#### Pending callbacks: This phase processes I/O events that have completed, such as the completion of a network request or the availability of data to be read from a stream. The corresponding callback functions are executed in this phase.

#### Idle, prepare: These are internal phases that perform various tasks, such as updating the set of pollable file descriptors or checking for low-level system errors.

#### Poll: This phase waits for new I/O events to occur. If there are no events to process, the event loop will block in this phase until an event becomes available.

#### Check: This phase processes setImmediate callbacks, which are similar to setTimeout but are intended for tasks that need to be run as soon as possible.

#### Close callbacks: This phase processes close events, such as the close event emitted by a stream when it is closed.

#### The event loop cycles through these phases repeatedly, processing events and executing callback functions as they become available. Each phase is processed in order, and the event loop will continue to run until the program is terminated.

### What is process.tick?
#### process.tick is a method in Node.js that allows the program to yield control to the event loop. It can be used to ensure that the event loop is given an opportunity to process I/O events and execute callback functions, even if the main program is performing a long-running task.

### When can process.tick starve your event loop?
#### If a program uses process.tick excessively, it can potentially starve the event loop and prevent it from processing I/O events and executing callback functions in a timely manner. This can occur if the program yields control to the event loop too frequently, or if it performs a large number of long-running tasks that each yield control to the event loop.

### What is the difference between setTimeout and setInterval?
#### setTimeout and setInterval are two built-in functions in Node.js that can be used to schedule the execution of a callback function at a later time. They both take a callback function and a delay time as arguments, and return a timer object that can be used to cancel the timer.
#### The main difference between setTimeout and setInterval is the way they repeat:
#### setTimeout schedules a callback function to be executed once, after the specified delay time has elapsed. Once the callback has been executed, the timer is cancelled.
#### setInterval schedules a callback function to be executed repeatedly, at a fixed interval of time. The callback will be executed every delay milliseconds, until the timer is cancelled.

### How can you make a network request with http module from the backend?
#### To make a network request from the backend using the http module in Node.js, you can use the http.request function. This function takes an options object and a callback function as arguments, and returns a client request object that can be used to send the request.
#### const http = require('http');

#### const options = {
 #### hostname: 'www.example.com',
 #### port: 80,
 #### path: '/',
 #### method: 'GET'
#### };
#### const req = http.request(options, (res) => {
 #### console.log(`Status: ${res.statusCode}`);
 #### console.log(`Headers: ${JSON.stringify(res.headers)}`);
 #### res.setEncoding('utf8');
 #### res.on('data', (chunk) => {
 ####   console.log(`Body: ${chunk}`);
 #### });
 #### res.on('end', () => {
  ####  console.log('No more data in response.');
 #### });
#### });

#### req.on('error', (e) => {
 #### console.error(`problem with request: ${e.message}`);
#### });

#### req.end();

### How can you create your own events?
#### In Node.js, you can create your own custom events by using the EventEmitter class from the events module. The EventEmitter class allows you to define and emit custom events, and register listeners that will be called when the events are emitted.

#### o create your own events, you will need to:

#### Require the events module:

#### const events = require('events');
#### Create a new EventEmitter instance:
#### const emitter = new events.EventEmitter();
#### Define your custom events by calling the emitter.on method and passing in the event name and a listener function:
#### emitter.on('customEvent', (arg1, arg2) => {
####  console.log(`Custom event fired with arguments: ${arg1}, ${arg2}`);
#### });
#### Emit your custom events by calling the emitter.emit method and passing in the event name and any arguments you want to pass to the listener function:
#### emitter.emit('customEvent', 'arg1 value', 'arg2 value');
#### In this example, the customEvent event will be emitted, and the listener function will be called with the specified arguments.
#### You can also use the emitter.once method to register a listener that will only be called once, and the emitter.off method to remove a listener.
#### Custom events can be useful for communication between different parts of a program or for triggering actions based on certain conditions.

### What are clusters?
#### In Node.js, a cluster is a group of worker processes that can be used to share the load of running a Node.js application. Each worker process runs in its own separate process, and the cluster automatically distributes incoming requests to the worker processes.

#### The cluster module in Node.js provides a simple way to create a cluster of worker processes and load balance requests across them. To use the cluster module, you will need to:

#### Require the cluster module:
#### const cluster = require('cluster');
#### Check if the current process is the master process:
#### if (cluster.isMaster) {
  #### // This code will be executed by the master process
#### } else {
 #### // This code will be executed by the worker processes}
#### If the current process is the master process, create a worker for each CPU on the system:
#### if (cluster.isMaster) {
 #### const numCPUs = require('os').cpus().length;
 #### for (let i = 0; i < numCPUs; i++) {
 ####   cluster.fork();
 #### }
#### }
#### If the current process is a worker process, start the server or perform other tasks:

### How does your Node.js application handle scale? Elaborate
#### There are several ways that a Node.js application can be designed to handle scale:
#### Using a load balancer: A load balancer distributes incoming traffic across multiple servers, which can help to ensure that the application can handle a larger number of requests.
#### Implementing a cache: Caching frequently-used data in memory can help to reduce the load on the server and improve the performance of the application.
#### Using a message queue: A message queue allows you to decouple the processing of requests from the actual handling of the request. This can be useful for tasks that are resource-intensive or time-consuming, as it allows you to offload those tasks to a separate process or server.
#### Horizontal scaling: Horizontal scaling involves adding more servers to the application, which can help to handle a larger number of requests.
#### Vertical scaling: Vertical scaling involves upgrading the hardware of the existing servers to handle a larger number of requests.
#### Optimizing the code: Optimizing the code of the application can help to improve its performance and make it more efficient at handling requests. This can include things like minimizing the number of database queries and reducing the amount of data that needs to be transferred over the network.
#### It's important to note that the best approach for handling scale will depend on the specific needs and requirements of the application. A combination of the above strategies may be necessary to effectively handle a large volume of traffic.

### What is the difference between readFile and readFileSync?
#### fs.readFile() and fs.readFileSync() are both methods for reading the contents of a file in Node.js, but they operate in different ways.fs.readFile() is an asynchronous method, which means that it reads the contents of a file in a non-blocking way. This means that the program will not stop execution while the file is being read. Instead, the method takes a callback function as an argument, which is executed once the file has been read.
#### Here is an example of using fs.readFile():
#### const fs = require('fs');

#### fs.readFile('/path/to/file.txt', (err, data) => {
  #### if (err) throw err;
 #### console.log(data);
#### });

#### console.log('This line will be executed before the file is read');
#### On the other hand, fs.readFileSync() is a synchronous method, which means that it blocks the execution of the program until the file has been read. This can be useful in certain situations, but it can also make the program less responsive if the file is large or if it takes a long time to read.

####  Here is an example of using fs.readFileSync():
#### const fs = require('fs');

#### const data = fs.readFileSync('/path/to/file.txt');
#### console.log(data);

#### console.log('This line will not be executed until the file is read');

### What are CORS? How do you configure them? Why do you need them?
#### CORS (Cross-Origin Resource Sharing) is a security feature that is implemented by web browsers. It prevents a web page from making requests to a different domain than the one that served the web page.
 #### For example, if a web page served from example.com tries to make an HTTP request to api.example.com, the browser will block the request unless the server at api.example.com includes the appropriate CORS headers in its response.
#### To configure CORS, you need to specify which domains are allowed to make requests to your server. This is done by setting the Access-Control-Allow-Origin header in the server's HTTP response. For example, to allow any domain to make requests to your server, you can set the header like this:
#### res.setHeader('Access-Control-Allow-Origin', '*');
#### Alternatively, you can specify a specific domain or a list of domains that are allowed to make requests.

#### You need CORS because it helps to prevent malicious websites from making unauthorized requests to your server. Without CORS, any website could potentially make requests to your server and access sensitive data.

#### It's important to note that CORS is a security feature implemented by the browser, so it only applies to client-side code that makes HTTP requests from a web page (e.g., using XMLHttpRequest or fetch). It does not apply to server-side code that makes HTTP requests using libraries like request or axios.

### What is rate limiting?
#### Rate limiting is a technique used to control the rate at which a service or resource is accessed. It is often used to protect servers and other resources from being overwhelmed by too many requests in a short period of time.
#### There are several different ways to implement rate limiting, but one common approach is to allow a certain number of requests per time period (e.g., 100 requests per minute). When the limit is reached, subsequent requests may be rejected or slowed down until the time period has elapsed.
#### Rate limiting can be useful in a variety of situations, including:
#### Protecting against denial of service attacks: By limiting the number of requests that can be made in a given time period, rate limiting can help to prevent malicious users from overwhelming a server with requests and causing it to crash.
#### Managing resource usage: Rate limiting can be used to ensure that a particular resource is not overused, which can help to preserve its performance and availability for other users.
#### Reducing spam: By limiting the number of requests that can be made by a single user or IP address, rate limiting can help to reduce the amount of spam or automated requests being sent to a server.
#### There are a few different ways to implement rate limiting in a web application, including using a reverse proxy server like NGINX or using middleware in the application itself. It's important to carefully consider the specific needs and requirements of the application when deciding on a rate limiting strategy.

### How does middlewares work in express?
#### In the Express.js web framework for Node.js, middleware is a function that is executed on each incoming request to the server. It sits between the server and the route handler, and it can be used to perform various tasks such as parsing the request body, authenticating the user, and modifying the response.
#### To use middleware in Express, you can use the app.use() method to register a middleware function. The middleware function will be executed on every request that matches the specified path.
#### For example, to create a middleware function that logs all incoming requests to the server, you can do the following:

#### const express = require('express');
#### const app = express();
#### app.use((req, res, next) => {
 ####  console.log(`Received a ${req.method} request from ${req.ip}`);
 ####  next();
#### });
#### app.get('/', (req, res) => {
 ####  res.send('Hello, world!');
#### });

#### In this example, the middleware function will be executed on every request to the server, regardless of the route that was requested. You can also specify a path for the middleware function, in which case it will only be executed for requests that match the specified path.
#### Middleware functions are called in the order that they are defined, and they can modify the request and response objects as needed. They can also end the request-response cycle by calling the res.end() or res.send() methods, or they can pass control to the next middleware function or route handler by calling the next() function.
#### Middleware is a powerful feature of Express that allows you to modularize and reuse code across your application, and it is an essential part of building web applications with Node.js.


### What is the difference between Encryption and Hashing?
#### Encryption and hashing are both ways to protect data, but they are used for different purposes and have some key differences.

#### Encryption is a process that transforms data into a secure, encoded form that can only be accessed by someone with the correct decryption key. Encryption is reversible, which means that the original data can be recovered from the encoded form.
#### Hashing, on the other hand, is a one-way process that takes data and produces a fixed-size output, called a hash. Hashing is not reversible, which means that the original data cannot be recovered from the hash.
#### Here are some key differences between encryption and hashing:
#### Reversibility: Encryption is reversible, while hashing is not.
#### Purpose: Encryption is used to protect data while it is in transit or at rest, while hashing is used to verify the integrity of data.
#### Key management: Encryption requires the use of a key, which must be kept secret and protected. Hashing does not require a key.
#### Output size: Encrypted data is usually larger than the original data, while the output of a hash function is fixed in size.
#### In general, encryption is used to secure data so that it can only be accessed by authorized parties, while hashing is used to verify the integrity of data and to detect changes or tampering. Both encryption and hashing are important tools for protecting data, and they are often used together in security systems.

### What is the difference between https and http?
#### HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are protocols for communicating over the internet. They are both used to transfer data from a web server to a web browser, but HTTPS is more secure than HTTP.
#### Here are some key differences between HTTP and HTTPS:
#### Security: HTTPS uses encryption to secure the data being transferred between the server and the client. This makes it more difficult for attackers to intercept or modify the data in transit. HTTP, on the other hand, does not use encryption and is therefore less secure.
#### Privacy: HTTPS uses encryption to protect the privacy of the users of a website. This is particularly important when sensitive information, such as passwords or credit card numbers, is being transmitted. HTTP does not provide this level of privacy.
#### Trust: Websites using HTTPS are generally considered more trustworthy than those using HTTP. This is because HTTPS provides security and privacy, which can help to build user confidence in the website.
#### Performance: HTTPS may be slightly slower than HTTP because of the extra work that is required to encrypt and decrypt the data. However, the performance difference is usually not noticeable in most cases.
#### In summary, HTTPS is the more secure version of HTTP and is generally recommended for any website that handles sensitive information or requires a high level of trust.

### What is TLS?
#### TLS (Transport Layer Security) is a cryptographic protocol that provides secure communication over the internet. It is the successor to SSL (Secure Sockets Layer) and is used to establish an encrypted connection between a client and a server.
#### TLS is often used to secure communication between a web browser and a web server, and it is what enables the use of HTTPS (HTTP Secure). When a client (e.g., a web browser) makes a request to a server over TLS, the client and server perform a "handshake" to establish an encrypted connection. This involves exchanging a series of messages to negotiate the encryption parameters and to verify the identity of the server.
#### Once the connection is established, the client and server can communicate securely using the agreed-upon encryption parameters. TLS ensures that the data being transmitted between the client and server is encrypted and cannot be intercepted or modified by an attacker.
#### TLS is an important tool for protecting the privacy and security of internet communications, and it is used by millions of websites to secure sensitive information such as passwords, credit card numbers, and personal data.

### What is AES?
#### AES (Advanced Encryption Standard) is a widely-used symmetric encryption algorithm that was originally developed by the U.S. National Institute of Standards and Technology (NIST). It is a fast and secure algorithm that is commonly used to encrypt data at rest (e.g., data stored on a hard drive or in the cloud) and in transit (e.g., data transmitted over a network).
#### AES uses a fixed-length key (128, 192, or 256 bits) to encrypt and decrypt data. The longer the key, the stronger the encryption. AES is considered to be a very secure algorithm, and it is used by government agencies, financial institutions, and other organizations to protect sensitive data.
#### One of the main advantages of AES is that it is fast and efficient, which makes it well-suited for use in a wide range of applications. It is also relatively easy to implement, which has contributed to its widespread adoption.
#### In summary, AES is a widely-used encryption algorithm that is known for its security and performance. It is used to protect data at rest and in transit, and it is often used in conjunction with other security measures such as TLS (Transport Layer Security) to provide an additional layer of protection.

### What is JWT Token? Why do we need to use JWT? What are some pros and cons?
#### JWT (JSON Web Token) is a standard for representing claims securely between two parties. It is often used to authenticate users and to transmit information about the user between different systems.
#### JWTs consist of three parts: a header, a payload, and a signature. The header specifies the algorithm used to generate the signature, and the payload contains the claims (e.g., user information such as the user's name or ID). The signature is used to verify that the JWT has not been tampered with.
#### One reason to use JWTs is that they can be used to authenticate users without the need to store session information on the server. This can be useful for building scalable, stateless applications that can be easily deployed on multiple servers.
#### Another reason to use JWTs is that they can be easily passed between systems, which makes it easy to authenticate users across different domains or applications.
#### There are a few pros and cons to using JWTs:
#### Pros:
#### Stateless: JWTs do not require a server to store any session information, which can make it easier to scale applications.
#### Compact: JWTs are relatively small and can be easily passed between systems.
#### Easy to use: JWTs are simple to implement and can be easily integrated into a variety of applications.
#### Cons:
#### Lack of revocation: JWTs do not provide a way to revoke access once a token has been issued, which can be a security concern.
#### Single sign-on: JWTs do not support single sign-on (SSO), which means that users must sign in separately to each application that uses JWTs for authentication.
#### In summary, JWTs are a useful tool for authenticating users and transmitting information between systems, but they have some limitations that should be considered when deciding whether to use them.

### What is salting? Where do we store salt?
#### Salting is a technique used to improve the security of hashed passwords. It involves adding random data (the "salt") to the password before it is hashed, which makes it more difficult for attackers to crack the hashed password.
#### The salt is usually generated randomly and is unique for each password. It is then concatenated with the password and hashed together. For example, if the password is "password" and the salt is "abc123", the resulting hashed password might be something like "f0e1d2c3b4a5".
#### The salt is usually stored in the same database as the hashed password, so that it can be used to verify the password when a user logs in. It is important to store the salt in a secure way, such as by using a secure hash function or by encrypting it with a separate key.
#### Salting is an important security measure because it makes it more difficult for attackers to crack hashed passwords using precomputed hash tables (also known as "rainbow tables"). Without a salt, an attacker could simply hash a common password and compare the resulting hash to the hashes in the table to find a match. With a salt, the attacker would have to generate a separate table for each unique salt, which makes the attack much more computationally expensive.
#### In summary, salting is a technique used to improve the security of hashed passwords by adding random data to the password before it is hashed.

### What is the difference between authorisation and Authentication?
#### Authentication and authorization are two related but distinct concepts in the field of security.
#### Authentication refers to the process of verifying the identity of a user, device, or system. It involves establishing that a user is who they claim to be, typically by requiring them to provide some form of credentials (e.g., a username and password).
#### Authorization, on the other hand, refers to the process of granting or denying access to specific resources or actions based on the authenticated user's permissions or privileges. Once a user has been authenticated, the system can use authorization to determine what the user is allowed to do.
#### Here are some key differences between authentication and authorization:
#### Purpose: Authentication is used to verify the identity of a user or device, while authorization is used to grant or deny access to specific resources or actions.
#### Order: Authentication typically comes before authorization. The user must be authenticated before the system can determine their permissions and grant or deny access.
#### Scope: Authentication is usually concerned with the identity of the user or device, while authorization is concerned with the user's permissions and privileges.
#### In summary, authentication is the process of verifying the identity of a user or device, while authorization is the process of granting or denying access to specific resources or actions based on the authenticated user's permissions or privileges. Both are important components of a secure system.

### What is the difference between JS on the browser and node?
 #### interactivity to websites. It can be run in a web browser or on a server using Node.js.
#### There are some key differences between running JavaScript in a web browser and running it on a server using Node.js:
#### Execution environment: JavaScript in a web browser is executed in a sandboxed environment that is provided by the browser. This environment provides access to the Document Object Model (DOM), which represents the structure of the web page, and other browser APIs that allow the JavaScript code to interact with the web page. Node.js, on the other hand, provides a runtime environment for executing JavaScript code outside of a web browser. It does not provide access to the DOM or other browser-specific APIs.
#### Available APIs: The APIs available to JavaScript code vary depending on whether it is running in a web browser or on a server. In a web browser, JavaScript has access to a variety of APIs that allow it to interact with the web page and the user's computer, such as the DOM API, the Web Audio API, and the Web Storage API. Node.js provides access to a different set of APIs that are specific to the server environment, such as the filesystem API and the network API.
#### Performance: JavaScript code running in a web browser is generally slower than code running on a server using Node.js. This is because the browser environment has additional overhead and constraints that can affect performance, such as the need to render the web page and handle user interactions. Node.js, on the other hand, is designed to be fast and efficient, and it can take advantage of multiple CPU cores to improve performance.
#### In summary, JavaScript can be run in a web browser or on a server using Node.js, but the execution environment and available APIs are different in each case. JavaScript in a web browser is typically slower than JavaScript running

### What is V8? 
#### V8 is an open-source JavaScript engine developed by Google. It is written in C++ and is used to execute JavaScript code.
#### V8 is designed to be fast and efficient, and it is used in a number of popular products and projects, including the Chrome web browser, the Node.js runtime, and the Deno runtime. It is known for its ability to optimize JavaScript code and to take advantage of modern hardware architectures, such as multi-core processors.
#### One of the key features of V8 is its Just-In-Time (JIT) compiler, which compiles JavaScript code into native machine code at runtime. This allows V8 to execute JavaScript code quickly, and it also enables V8 to optimize the code for better performance.
#### V8 is an important component of the modern web ecosystem, and it has had a significant impact on the performance and capabilities of JavaScript-based applications. It is actively developed and maintained by a team at Google, and it is released under the permissive BSD license.