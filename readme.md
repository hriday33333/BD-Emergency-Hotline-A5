
***** q: no:1 *****
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

***** ans to the q: no:1 *****
Answer 1: Difference

getElementById: Selects a single element by its id. The id must be unique in the page. If no such element exists, it returns null.

getElementsByClassName: Selects all elements with a specific class. You can access them using elements[0], elements[1], etc.

querySelector: Returns the first matching element.

querySelectorAll: Returns all matching elements as a static NodeList.







    **********************************
    **********************************
    **********************************







***** q: no:2 *****
2. How do you create and insert a new element into the DOM?

***** ans to the q: no:2 *****
Answer 2:
You can create a new element using document.createElement(tagName).
The tagName can be "div", "p", "span", "button", etc.

After creating a new element, you can add text, classes, or attributes to it.

To insert the element into the DOM, the following method can be used:

appendChild

document.body.appendChild(newDiv); adds it to the end of <body>






**********************************
    **********************************
    **********************************






***** q: no:3 *****
3. What is Event Bubbling and how does it work?

***** ans to the q: no:3 *****
Answer 3:
Event Bubbling is a phase of event propagation in JavaScript.
When an event (like click) occurs on an element, the event first triggers on that element → then on its parent → then on its grandparent → and so on, spreading upward through the DOM tree until it reaches the root.

This process is called “bubbling up” (like a bubble rising upward).





**********************************
    **********************************
    **********************************






***** q: no:4 *****
4. What is Event Delegation in JavaScript? Why is it useful?

***** ans to the q: no:4 *****
Answer 4:
Event Delegation is a technique where we add an event listener to a parent element, and handle the events of multiple child elements from that parent.
That means we don’t need to attach separate listeners to each child element.
Because of event bubbling, the event reaches the parent, so the parent can identify which child triggered it.

*** Why it is useful ***

Performance
When there are many elements, we don’t need to add separate listeners to each of them → just one listener on the parent is enough.

Dynamic Elements
If new elements are added to the DOM later, the event will still work.
For example, if a new <li> is added, it will automatically work with the parent’s listener.

Cleaner Code
The code becomes shorter and easier to maintain.






**********************************
    **********************************
    **********************************





***** q: no:5 *****
5. What is the difference between preventDefault() and stopPropagation() methods?

***** ans to the q: no:5 *****
Answer 5:

event.preventDefault()
Purpose: Stops the default behavior of an element.
Example use cases:
Preventing form submission
Preventing a page refresh when an anchor link is clicked
Preventing the right-click context menu from appearing
event.stopPropagation()
Purpose: Stops event propagation (bubbling or capturing).
Meaning: The event will no longer travel up (or down) to parent elements.



**********************************
    **********************************
    **********************************