## Emergency Hotline

---


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: *getElementById: It is most specific. Its purpose is to choose one element by its distinct id attribute.This method is highly optimized for this specific task.It is not necessary to use the # symbol. getElementById and querySelector both return specific element.Given that IDs are unique and that browsers are designed to perform this lookup, getElementById is typically the fastest approach.

*getElementsByClassName: getElementsByClassName selects all element that share specific class name. It gives back an HTMLCollection, which is a group of elements.Don't need to use the .(dot) symbol. Used: getElementsByClassName("btn-call"). It returns live HTMLCollection. It is fast method but less than getElementById.

*querySelector: querySelector is highly flexible as it can choose a single element using any valid CSS selector. It returns first matching element. It is slower method than getElementById and getElementsByClassName.

*querySelectorAll: It is multi element version of querySelector. querySelectorAll returns a static NodeList. The DOM as it was at the moment of the query is captured in a "static" collection. After the query is made, if the DOM changes, it won't update automatically. 

2. How do you **create and insert a new element into the DOM**?
Ans: At first write the HTML code : 
<!-- HTML part: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section id="section-container"></section>
    <script src="./test.js"></script>
</body>
</html> -->
Javascript part :
Step-1: take parent element by id
const sectionContainer = document.getElementById("section-container")

step-2: Create the element
const h1 = document.createElement("h1");

step-3: Add content
h1.innerText = "I am a web developer"

step-4: Insert
sectionContainer.appendChild(h1);

3. What is **Event Bubbling** and how does it work?
Ans: The process by which an event on one element initially triggers on that element and then "bubbles up" or propagates to all of its parent elements in the DOM hierarchy, ending up at the document object, is known as event bubbling.

How it work:
When a click on an element (the target element), the browser responds to the event on that element first. Once the target element's event handler has finished running, the event is triggered on its immediate parent, then the parent's parent, and so on, until it reaches the document's root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event delegation is a technique in JavaScript where, instead of adding separate event listeners to multiple child elements, you add a single event listener to their parent element. When an event, such as a click, occurs on a child element, it "bubbles up" to its parent, and the parent's event listener catches it. Then, by using the event object's target property, you can determine exactly which child element triggered the event.

It is useful because :
.Putting just one listener instead of many uses less memory.
.For better performance.
.If new child elements are added to the DOM later, don't need to add a separate listener for each. The parent's listener will work.
.The code is clearer and simpler to maintain when there are fewer listeners.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: preventDefault() : The preventDefault() function stops the browser's default, built-in response to an event. It doesn't prevent the event from bubbling up.
ex: e.preventDefault(); 

stopPropagation() : Stops the event from bubbling up to parent elements. It has no effect on the element's default behavior.
ex: e.stopPropagation();
---

