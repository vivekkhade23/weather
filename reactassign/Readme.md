1. Explain redux to a 5 year old?
Let’s consider an event you’re likely conversant with - going to the bank to withdraw cash. Even if you don’t do this often, you’re likely aware of what the process looks like.
You wake up one morning, and head to the bank as quickly as possible. While going to the bank there’s just one intention / action you’ve got in mind i.e WITHDRAW_MONEY.
Here’s where things get interesting. When you get into the bank, you go straight to the Cashier to make your request known. You want to withdraw money from the bank.
Wait, you went to the Cashier? Why didn’t you just go into the bank vault to get your money?
After all, it’s your hard earned money.
Well, like you already know, things don’t work that way. Yes, the bank has money in the vault, but you have to talk to the Cashier to help you follow a due process for withdrawing your own money.
The Cashier, from their computer, then enters some commands and delivers your cash to you. Easy-peasy.

2. What is immutability?
If an object is immutable, you cannot change its state or the value of its properties. However, this also means that you cannot add new properties to the object.
For example, try the following fiddle:
If you run it, you’ll see an alert window with the message undefined. The new property was not added.

3. What does Object.freeze() do?
The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

4. Why is immutability required by Redux?
Immutability of redux state is necessary since it allows detecting redux state changes in an efficient manner. This implies that whenever we want to modify a redux state, we must create a new copy of it and do modifications to that copy - which then becomes the new redux state.

5. How does Redux use shallow equality checking?
React-Redux uses shallow equality checking to determine whether the component it’s wrapping needs to be re-rendered.
To do this, it assumes that the wrapped component is pure; that is, that the component will produce the same results given the same props and state.
By assuming the wrapped component is pure, it need only check whether the root state object or the values returned from mapStateToProps have changed. If they haven’t, the wrapped component does not need re-rendering.
It detects a change by keeping a reference to the root state object, and a reference to each value in the props object that's returned from the mapStateToProps function.
It then runs a shallow equality check on its reference to the root state object and the state object passed to it, and a separate series of shallow checks on each reference to the props object’s values and those that are returned from running the mapStateToProps function again.

6. How well does Redux “scale” in terms of performance and architecture?
Redux may not be as efficient out of the box when compared to other libraries. For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID). This minimizes the overall amount of rendering to be done. Use of memoized selector functions is also an important performance consideration.

As for architecture, anecdotal evidence is that Redux works well for varying project and team sizes. Redux is currently used by hundreds of companies and thousands of developers, with several hundred thousand monthly installations from NPM. One developer reported:
"for scale, we have ~500 action types, ~400 reducer cases, ~150 components, 5 middlewares, ~200 actions, ~2300 tests"

7. How does Redux compare to the React Context API?
Context API is a functionality provided in React to share data across the application without having to pass through props. It is like a Global value which can be accessed anywhere through the application component tree. It is not recommended to be used for frequently changing data and more useful for site level settings like Language, theme etc.
If you have more application data which is complex and frequently changing and which you need to share across the application components, you need to go with a state management tool like Redux, which gives you better control over your data as all data is kept and managed from one place.
Redux is a state management container which can be used along with any application (React, angular etc.) to handle all the application related data. All changes to the data happen through reducers and all data is maintained in global store. So we have more control over the data and the changes and easy to access the data at any place in the application just by connecting to the store.

8. What is webpack ?
Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.

9. What is treeshaking ?
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.
In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

10. What are some features of using webpack?
###  Entry
Webpack creates a graph of all of your application's dependencies. The starting point of this graph is known as an entry point. The entry point tells Webpack where to start and follows the graph of dependencies to know what to bundle. You can think of your application's entry point as the contextual root or the first file to kick off your app.
### Output
Once you've bundled all of your assets together, we still need to tell Webpack where to bundle our application. The webpack output property describes to Webpack how to treat bundled code.
### Loaders
The goal is to have all of the assets in your project to be Webpack's concern and not the browser's. (This doesn't mean that they all have to be bundled together). Webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module. However, Webpack only understands JavaScript.
### Plugins
Since Loaders only execute transforms on a per-file basis, plugins are most commonly used (but not limited to) performing actions and custom functionality on "compilations" or "chunks" of your bundled modules (and so much more). The Webpack Plugin system is extremely powerful and customizable.