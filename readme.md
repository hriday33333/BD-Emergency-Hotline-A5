

***** q: no:১ *****
১, What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

***** ans to the q: no:১*****
 Answer ১: পার্থক্য
১. getElementById: একটি element কে তার id দিয়ে বাছাই করে  id অবশ্যই পেজে একটিমাত্র হওয়া উচিত।
যদি এমন কোনো element না থাকে, তবে এটি null রিটার্ন করে।

২. getElementsByClassName:একটি নির্দিষ্ট class-যুক্ত সকল element বাছাই করে elements[0], elements[1] দিয়ে access করা যায় ।

৩. querySelector; প্রথম matching element রিটার্ন করে
৪, সকল matching element রিটার্ন করে, static NodeList হিসেবে।

    **********************************
    **********************************
    **********************************



***** q: no:২ *****
২, How do you **create and insert a new element into the DOM**?

***** ans to the q: no:২*****
Answer ২: document.createElement(tagName) ব্যবহার করে একটি নতুন element তৈরি করা যায়। tagName হতে পারে "div", "p", "span", "button" ইত্যাদি।
নতুন element তৈরি করার পরে, তার মধ্যে লেখা, class বা attribute যোগ করা যায়।
element DOM-এ যোগ করা

নিচের  method ব্যবহার করা যায়:

 (appendChild)
document.body.appendChild(newDiv); <body> এর শেষে যোগ


**********************************
    **********************************
    **********************************


***** q: no:৩ *****
৩, What is **Event Bubbling** and how does it work?

***** ans to the q: no:৩*****
Answer ৩:
Event Bubbling হলো JavaScript-এ event propagation-এর একটি ধাপ।
এটা যখন কোনো element-এ event (click) ঘটে, তখন সেই event প্রথমে ওই element-এ trigger হয় → তারপর তার parent → তার grandparent → এভাবে উপরের দিকে DOM tree-এর root পর্যন্ত ছড়িয়ে যায়।

একে বলে “bubbling up” (bubble এর মতো উপরে উঠতে থাকে)।



**********************************
    **********************************
    **********************************




***** q: no:৪ *****
৪. What is **Event Delegation** in JavaScript? Why is it useful?

***** ans to the q: no:৪*****
Answer ৪:
Event Delegation হলো এমন একটি টেকনিক যেখানে আমরা একটা parent element-এ event listener বসাই, আর সেই parent-এর মধ্যে থাকা multiple child elements-এর event handle করি।
মানে, প্রত্যেক child element-এ আলাদা আলাদা listener বসানোর দরকার নেই।
Event bubbling-এর কারণে event parent পর্যন্ত পৌঁছে যায়, তাই parent থেকেই child কে চিহ্নিত করা যায়।

  *** কেন এটা জনপ্রিয় ***
 Performance
অনেকগুলো element থাকলে প্রত্যেকটায় আলাদা listener বসানোর দরকার নেই → একটাই listener parent-এ বসালেই হবে।

Dynamic Elements
যদি DOM-এ পরে নতুন element যোগ হয়, তাহলেও event কাজ করবে।
যেমন: নতুন <li> add করলে সেটাতেও auto event কাজ করবে (কারণ parent listener আছে)।
Cleaner Code
কোড ছোট ও maintain করা সহজ হয়






**********************************
    **********************************
    **********************************



***** q: no:৫ *****
৫, What is the difference between **preventDefault() and stopPropagation()** methods?

***** ans to the q: no:৫*****
Answer ৫:

১, event.preventDefault()
Purpose: কোনো element-এর default behavior বন্ধ করে দেয়।
Example use cases:
Form submit বন্ধ করা
Anchor link click করলে পেজ রিফ্রেশ না হওয়া
Right-click করলে context menu আসা বন্ধ করা

২, event.stopPropagation()
Purpose: Event propagation (bubbling বা capturing) বন্ধ করে দেয়।
মানে: Event আর parent elements-এ উঠবে (বা নামবে) না।

---

