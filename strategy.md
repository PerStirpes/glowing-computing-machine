# Intro to Algorithms


## Strategy

The strategy to develop your algorithm skills revolves around a few extremely important concepts that need to be repeated consistently.  They are: 1) acquiring **knowledge**, 2) **applying** concepts, and 3) **testing** one's understand of the concepts.  

But there is a structured approach to algorithms that will make your life easier to learn faster.  In math, you have prerequisites that you should take before taking a more advanced class.  These prerequisites are laid out in an organized fashion so you do not get overwhelmed skipping over foundational concepts before moving on.

Same with algorithms and data structures.  There is a structure to the topics that you can learn that will greatly improve your understanding if you progress through the algorithms. Here are the steps I suggest you follow:

1. Learn to evaluate efficiency (complexity) of algorithms
2. Develop a process for problem solving
3. Learn basic algorithm patterns
4. Learn basic data structures
5. Put into practice
6. Start easy and progress harder
7. Track and measure

It can get tricky with different types of inputs, here are some of the input types and common factors that are scaling:

| Input 		| Common Factor that is Scaling |
|---			|---|
| Integer		| Magnitude of number|
| String		| Length of String|
| Array		| Length of Array| 
| LinkedList	| Number of nodes| 
| Tree			| Number of nodes| 
| Hashtable	| Number of key-value pairs| 
| Matrix		| Width and height of matrix|
| Graph 		| Number of vertices and edges| 

*Disclaimer: These are 'common' factors that scale.  Sometimes with particular problems there might be less obvious factors that scale.*


To determine why the operations for a loop has a linear order magnitude. Lets explore it in more detail line by line. When there is a loop we have to multiply the operations inside the loop by the total number of iteration the loop runs.

```javascript
// print each item in the array.
function printAll(arr) {
											// 1 (initiating i to 0 is an operation)
											// the loop runs N iterations
	for(let i = 0; i < arr.length; i++) { 		// 2 operations per break condition check
		console.log(arr[i]); 					// 2 operations to print
	}
}

// total = 1 + N * (2 + 2) = 4N + 1 
// reduce down to O(N) or linear time complexity
```

**While Loops** Sometimes loops can be tricky, especially with ```while``` 
loops. You have to really evaluate the code to see how many times the loops runs and if it is proportional to the input.

---

**Q:** Evaluate the following code for time complexity:

```javascript
// print the first ten items in the array
function firstTen(arr) {
	let i = 0;
	while(i < 10 && i < arr.length) {
		console.log(arr[10]); 
		i++;
	}
}
```

**A:** Lets explore the code line by line, keep in mind we have 


```javascript
// print the first ten items in the array
function firstTen(arr) {
	let i = 0; 						// 1
									// maximum of 10 iterations
	while(i < 10 && i < arr.length){ 	// 4 operations for each break condition check
		console.log(arr[10]); 			// 2 operations to print
		i++;								// 1 to increment
	}
}

// total = 1 + 10 * (4 + 2 + 1) = 71 
// reduce down to O(1) or constant time complexity
```
---



---
### 1f. Analyze by Chunks

Analyzing line by line is good for when you are starting out. But you may quickly learn that it isn't always necessary. We did a lot of work to compute the exact number of operations only to reduce it back down. 

Knowing that lower order terms and coefficients will get dropped anyway, you can speed up your analysis by looking at **chunks** of code at a time, and evaluating based on **magnitude**. 

### 1g. Nested vs Un-nested Loops

Be careful not to mistakenly assume that just because there are multiple ```for-loops``` in an algorithm that that it is automatically quadratic O(N^2) complexity or more. The simple rule you should remember here is:

* **nested loops multiply**
* **un-nested loops add**


```javascript
// print all values that have a matching pairs
function findPairs(arr) {
    for (let i = 0; i < arr.length; i++) {      // linear
        for (let j = i; j < arr.length; j++) {      // linear
            if(arr[i] === arr[j]) {                    // constant
                console.log(i, 'is a pair');
            }
        }
    }
}
```
Since there are two nested loops,  we multiply linear, linear, and constant together to make quadratic O(N^2 ) time complexity. Note how the second loop starts at index ```i``` and moves towards the end of the array.  The second loop is getting smaller and smaller each time.  We still consider the inner loop linear because on average the number of iterations will be about 0.5N. Since we drop coefficients anyway, the inner loop is simplified to linear.


### 1h. Recognize Common Orders of Magnitudes

Below are some common examples of algorithms and patterns that lead to different magnitudes of time complexity. When problems have an associated constraint, use the constraints as clues to what the algorithm may end up being.

*Disclaimer: these examples highly depend on the actual input that is scaling.*

| Input | Common Examples |
|---|---|
|Constant: O(1)| Array access, arithmetic operators|
|Logarithmic: O(log(N))| Binary search, binary search tree retrieval/insertion (balanced)|
|Linear: O(N)| Looping through an array or hashtable| 
|Quasilinear: O(Nlog(N))| Quicksort, mergesort, heapsort| 
|Quadratic: O(N^2)| Nested loops | 
|Polynomial: O(N^C)| Deeply nested loops|
|Exponential: O(C^N)| Multiple-recursion | 
|Factorial: O(!N)| Permutations |


### 1j. Leveling Up on Complexity Analysis

Learn more by doing. Work to analyze problems and evaluate the code you have written out. Go through these two tutorials to get more practice on some problems. Furthermore, from now on, every algorithm you write should be analyzed for complexity.

1. [Asymptotic Notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation) by Khan Academy 


## 2. Learn Basic Algorithm Patterns

The basic list of algorithm patterns will help you progress throughout the first series of algorithms.  The basic algorithms will require understanding how to use arrays and hashtables, nest loops, and a strong logic controls (```if```, ```if-else```, ```and```, ```or```).


* **Linear Search:** The most basic search there is, this is a starting point to understand searching.
	* [Open My Mind - Implementation](http://algorithms.openmymind.net/search/linear.html)

* **Multiple Pointers:** Looping and using multiple pointers that start at different positions and sometimes travel at different speeds are important to ensure you can strengthen your looping game.
	* [Outco - Reading on Multiple Pointers](http://class.outco.io/courses/technical/lectures/1950839)
	
* **Frequency Count:** Learn to use hashtables to shave down time complexity on a lot of problems.  One class of problems involve knowing/tracking counts.
	* [Outco - Reading on Frequency Count](http://class.outco.io/courses/technical/lectures/2025015)
* **Decrease and Conquer:** Its cousin to the more popular Divide and Conquer algorithm, these class of problems are important because they can be solved easily without recursion. It uses a single subproblem which can be solved with a while loop.  As we begin on recursion later, converting these decrease and conquer problems to single recursion problems will help strengthen your understanding of recursion.
	* [Outco - Reading on Decrease & Conquer](http://class.outco.io/courses/technical/lectures/2067856)
	* [OpenMyMind - Binary Search](http://algorithms.openmymind.net/search/binarysearch.html)

* **Basic Sorting:** Insertion, Selection, and Bubble sort are basic sorts tha have O(N^2 ) time complexity.  Understanding that there are often many ways to solve the same problem, and looking at the advantages and disadvantages of them allows us to start making better algorithm design decisions.
	* [Youtube - Visualize Bubble and Insertion Sort](https://www.youtube.com/watch?v=WaNLJf8xzC4&t=114s)
	* [Khan Academy - Selection, Insertion](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
	* [OpenMyMind - Bubble Sort](http://algorithms.openmymind.net/sort/bubblesort.html)
	* [OpenMyMind - Insertion Sort](http://algorithms.openmymind.net/sort/insertionsort.html)
	* [Visualgo - Visualize Sorting Algorithms](https://visualgo.net/sorting)

* **Recursion** Finally, getting to recursion which can be a tough hump to get over for thosejust starting out.  We recommend using the Helper Method Recursion pattern which uses a helper method to actually do the recursion. One way to start is to replace simple loops with recursion. We will be posting simpler problems for you to start off soon.
	* [Khan Academy - Recursive Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/p/challenge-recursive-powers)
	* [Eloquent JavaScript - Recursion Section](http://eloquentjavascript.net/03_functions.html) 
	* [Rithm School - Intro to Recursion](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-recursion)

## 3. Learn Linear Data Structures

* **Arrays and Dynamic Arrays:** Start here to learn more about arrays and dynamic arrays.  If you began your development journey learning Python, Ruby, or JavaScript, you may not have been exposed to primitive array data structures (continuous blocks of memory) because your language has abstracted the concept of arrays into a more powerful, more functional data structures. Lets jump back to the old times and find out what arrays really are under the hood.
	* 	[OpenMyMind - Arrays and Dynamic Arrays](http://algorithms.openmymind.net/structures/arrays.html)

* **Linked Lists, Stacks, and Queues** These linear data structures are often neglected as data structures in Python, Ruby, and JavaScript because Lists and Arrays in these languages has combined their functionality.  It is still important to understand how they are constructed, and how to nagivate through these more limited functionality data structures. Often we are given constraints, learning to work with these constraints make us more aware ways to tackle a problem.  That starts with really understanding these linear data structues.
	* [MyCodeSchool - LinkedList](https://www.youtube.com/watch?v=NobHlGUjV3g&t)
	* [Visualgo - LinkedList, Stacks, Queues](https://visualgo.net/list)
	* [Gayle McDowell - Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)


## 4. Develop a Process for Problem Solving

Read the following 4 points and ask yourself if you ascribe to some or all of these challenges:

* I often find it difficult to understand what the problem is even asking.
* I can understand the problem, but am just not sure where to begin or I just blank out.
* I can jump into coding quickly, but when I find errors in my logic my algorithm seems to break down and I become stuck.
* I can come up with an algorithm in my head that I think might work, but I cannot seem to write it out correctly.

These are challenges that having a more structured process for problem solving would help. What you want to establish is a framework for solving problems. This framework will provide you with a list of steps and line items to check off to ensure:

 1. you properly understand the problem
 2. you are able to vocalize and visualize your code and talk over solutions at a high level
 3. you can analyze your solution to determine the validity of your algorithm 
 4. you are able to translate your algorithm into code you can verify

Here is an example framework which you can adopt and modify as needed to fit your style of problem solving:

1. **Understanding the problem**
    * Ask clarifying questions
    * Get the inputs, outputs, constraints (time/space)
    * Get example case, edge conditions
    * Clarify what functions/methods you have to work with
2. **Exploration of Solutions**
    * Communicate aloud (or with interviewer)
    * Diagramming (pencil/paper or on the whiteboard)
    * Explain the naive solution
    * Brainstorm
3. **Solution Analysis**
    * Complexity analysis to verify solutions
    * Verifying solution edge conditions
4. **Coding**
    * Pseudocoding
    * Coding out solution from pseudocode
    * Run example cases
    * Checking edge conditions

### Roadmap to develop a problem solving process

1. Adopt a framework and print out the steps for reference.
2. Select easier problems to practice your framework (two each day minimum). Focus on the process rather than the algorithm.
3. Follow the steps of your framework. Focus on applying each step before moving to the next.
4. Practice different formats: whiteboard, syntax highlighted text editor, and plain text editor.
5. Practice your framework daily until you can execute without the printed reference.


## 5. Put in Practice

Practice easy level algorithms to get into the groove of things. Remember the steps from the previous section.  Grab a notepad and pencil and prepare to diagram things out if necessary. Collectively, you should work on at least 15 problems from these resources:

* [Leetcode](https://leetcode.com/problemset/algorithms/) - Do Easy Problems with Over 55% Acceptance Rate
* [Codewars](https://www.codewars.com/) -  Kata 7-8 problems
* [Coderbyte](https://coderbyte.com/challenges#easyChals) - 10 Easy problems
* 

## 6. Progress to Intermediate Concepts

If you want to progress more, then these concepts are what you should tackle next. They are common enough on interviews that having a solid understanding of these concepts is critical to progressing past technical screens involving algorithms.

### Algorithm Patterns

* Pure Recursion
	* ***under construction***
* Divide and Conquer, Quicksort, Mergesort
	* [Chand John - What's the fastest way to alphabetize your bookshelf?](https://www.youtube.com/watch?v=WaNLJf8xzC4&t=114s)
	* [Khan Academy - Mergesort](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms)
	* [Khan Academy - Quicksort](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)
	* [Visualgo - Quicksort, MergeSort](https://visualgo.net/sorting)
* Tree and Graph Traversals
	* [Geeks for Geeks - Tree Traversals](http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
	* [Khan Academy - Breadth First Search](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/breadth-first-search-and-its-uses)
	* [Geeks for Geeks - Depth First Search of Graphs](http://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)

### Data Structures

* Binary Search Trees
	*  [Hacker Earth - Binary Search Trees](https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/tutorial/)
	*  [MyCodeSchool - Binary Search Trees](https://www.youtube.com/watch?v=pYT9F8_LFTM)
* Graphs
	* [Khan Academy - Graphs](https://www.khanacademy.org/computing/computer-science/algorithms#graph-representation)

### Practice 
Do at the minimum 20 problems of the level of difficulty listed here:

* [Leetcode - Do Problems 45-55% Acceptance Rate](https://leetcode.com/problemset/algorithms/)
* [Codewars Kata 6-7 problems](https://www.codewars.com/)


## 7. Track and Measure

If you are interviewing, you need to evaluate your ability to solve algorithms under  a set amount of time and possibly with someone on the other end. Get yourself into to pressure setting that interviews by doing mock interviews. 

Here are a few resources that you can use to test yourself:

* [Leetcode Mock Interview](https://leetcode.com/mockinterview/)
* [Pramp - practice with others live](https://pramp.com/)
