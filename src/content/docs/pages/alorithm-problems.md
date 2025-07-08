---
title:  Algorithm - Problem-Solving
description: A Rigorous Introduction, For Gifted High School Graduates
sidebar_label: Overview
draft: false
---

There are no language specific codes here but pure algorithms, as it should be while writing algorithms. If I was interviewing a candidate, I would want the candidate to write algorithm and not code. They are not the same. Writing code while implementing an algorithm distorts symantics for syntaxes no matter how craeful we are. 
# Mathematical Algorithms Part 2: LeetCode Problem Solutions
*Advanced Problem-Solving with Mathematical Rigor*

## Table of Contents

1. [Array Problems](#array-problems)
2. [String Problems](#string-problems)
3. [Linked List Problems](#linked-list-problems)
4. [Tree Problems](#tree-problems)
5. [Graph Problems](#graph-problems)
6. [Dynamic Programming Problems](#dynamic-programming-problems)
7. [Two Pointers & Sliding Window](#two-pointers--sliding-window)
8. [Stack & Queue Problems](#stack--queue-problems)
9. [Mathematical Problems](#mathematical-problems)
10. [Backtracking Problems](#backtracking-problems)
11. [Advanced Miscellaneous Problems](#advanced-miscellaneous-problems)

---

## Array Problems

### Problem 1: Two Sum (LeetCode #1)

**Problem Statement**: Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**The Big Idea**: Use a hash map to remember what numbers we've seen and what we need to find. As we scan the array, for each number x, we check if (target - x) exists in our memory.

**Motivation**: This problem teaches the fundamental trade-off between time and space complexity. The brute force O(n²) approach becomes O(n) with O(n) extra space.

**Algorithm 1.1**: TWO-SUM(nums, target)
```
TWO-SUM(nums, target)
1  let complement_map be a new hash table
2  for i = 0 to nums.length - 1
3      complement = target - nums[i]
4      if complement_map.contains(complement)
5          return [complement_map[complement], i]
6      complement_map[nums[i]] = i
7  return []
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: O(n)
- **Correctness**: For each element, we check if its complement exists in previous elements

---

### Problem 2: Best Time to Buy and Sell Stock (LeetCode #121)

**Problem Statement**: Given an array of stock prices, find the maximum profit from buying and selling once.

**The Big Idea**: Track the minimum price seen so far and the maximum profit possible. At each day, we either have a new minimum price or a potentially better profit.

**Motivation**: This problem demonstrates the power of maintaining invariants while scanning data once. It's a classic example of optimal substructure.

**Algorithm 1.2**: MAX-PROFIT(prices)
```
MAX-PROFIT(prices)
1  if prices.length < 2
2      return 0
3  min_price = prices[0]
4  max_profit = 0
5  for i = 1 to prices.length - 1
6      if prices[i] < min_price
7          min_price = prices[i]
8      else if prices[i] - min_price > max_profit
9          max_profit = prices[i] - min_price
10 return max_profit
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)
- **Invariant**: At position i, min_price is the minimum price in prices[0..i-1]

---

### Problem 3: Maximum Subarray (LeetCode #53)

**Problem Statement**: Find the contiguous subarray with the largest sum.

**The Big Idea**: Kadane's algorithm - at each position, decide whether to extend the current subarray or start a new one. If the current sum becomes negative, it's better to start fresh.

**Motivation**: This showcases dynamic programming in its simplest form and demonstrates how local optimal choices can lead to global optimality.

**Algorithm 1.3**: MAX-SUBARRAY(nums)
```
MAX-SUBARRAY(nums)
1  max_sum = nums[0]
2  current_sum = nums[0]
3  for i = 1 to nums.length - 1
4      current_sum = max(nums[i], current_sum + nums[i])
5      max_sum = max(max_sum, current_sum)
6  return max_sum
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)
- **Recurrence**: max_ending_here[i] = max(nums[i], max_ending_here[i-1] + nums[i])

---

### Problem 4: Contains Duplicate (LeetCode #217)

**Problem Statement**: Determine if any value appears at least twice in the array.

**The Big Idea**: Use a hash set to track seen elements. The first time we encounter a duplicate, we return true.

**Algorithm 1.4**: CONTAINS-DUPLICATE(nums)
```
CONTAINS-DUPLICATE(nums)
1  let seen be a new hash set
2  for i = 0 to nums.length - 1
3      if seen.contains(nums[i])
4          return true
5      seen.add(nums[i])
6  return false
```

**Analysis**:
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

---

### Problem 5: Product of Array Except Self (LeetCode #238)

**Problem Statement**: Return an array where output[i] equals the product of all elements except nums[i], without using division.

**The Big Idea**: Use two passes - one to compute left products, one to compute right products. The result is the product of left and right products for each position.

**Algorithm 1.5**: PRODUCT-EXCEPT-SELF(nums)
```
PRODUCT-EXCEPT-SELF(nums)
1  n = nums.length
2  let result[1..n] be a new array
3  result[0] = 1
4  for i = 1 to n - 1
5      result[i] = result[i-1] * nums[i-1]
6  right_product = 1
7  for i = n - 1 downto 0
8      result[i] = result[i] * right_product
9      right_product = right_product * nums[i]
10 return result
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: O(1) extra space

---

## String Problems

### Problem 6: Valid Anagram (LeetCode #242)

**Problem Statement**: Determine if two strings are anagrams of each other.

**The Big Idea**: Count character frequencies. Two strings are anagrams if they have identical character frequency distributions.

**Algorithm 2.1**: IS-ANAGRAM(s, t)
```
IS-ANAGRAM(s, t)
1  if s.length ≠ t.length
2      return false
3  let char_count[26] be initialized to 0
4  for i = 0 to s.length - 1
5      char_count[s[i] - 'a'] += 1
6      char_count[t[i] - 'a'] -= 1
7  for i = 0 to 25
8      if char_count[i] ≠ 0
9          return false
10 return true
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1) for English alphabet

---

### Problem 7: Valid Palindrome (LeetCode #125)

**Problem Statement**: Determine if a string is a palindrome, considering only alphanumeric characters and ignoring case.

**The Big Idea**: Use two pointers from both ends, skipping non-alphanumeric characters and comparing in lowercase.

**Algorithm 2.2**: IS-PALINDROME(s)
```
IS-PALINDROME(s)
1  left = 0
2  right = s.length - 1
3  while left < right
4      while left < right and not IS-ALPHANUMERIC(s[left])
5          left += 1
6      while left < right and not IS-ALPHANUMERIC(s[right])
7          right -= 1
8      if LOWERCASE(s[left]) ≠ LOWERCASE(s[right])
9          return false
10     left += 1
11     right -= 1
12 return true
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)

---

### Problem 8: Longest Substring Without Repeating Characters (LeetCode #3)

**Problem Statement**: Find the length of the longest substring without repeating characters.

**The Big Idea**: Sliding window with hash set. Expand the window by moving right pointer, shrink by moving left pointer when duplicates are found.

**Algorithm 2.3**: LENGTH-OF-LONGEST-SUBSTRING(s)
```
LENGTH-OF-LONGEST-SUBSTRING(s)
1  let char_set be a new hash set
2  left = 0
3  max_length = 0
4  for right = 0 to s.length - 1
5      while char_set.contains(s[right])
6          char_set.remove(s[left])
7          left += 1
8      char_set.add(s[right])
9      max_length = max(max_length, right - left + 1)
10 return max_length
```

**Analysis**:
- **Time Complexity**: O(n)
- **Space Complexity**: O(min(m,n)) where m is charset size

---

## Linked List Problems

### Problem 9: Reverse Linked List (LeetCode #206)

**Problem Statement**: Reverse a singly linked list.

**The Big Idea**: Use three pointers to reverse the direction of links. Previous, current, and next pointers help us not lose track while reversing.

**Algorithm 3.1**: REVERSE-LIST(head)
```
REVERSE-LIST(head)
1  prev = null
2  current = head
3  while current ≠ null
4      next = current.next
5      current.next = prev
6      prev = current
7      current = next
8  return prev
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)

---

### Problem 10: Merge Two Sorted Lists (LeetCode #21)

**Problem Statement**: Merge two sorted linked lists into one sorted list.

**The Big Idea**: Use two pointers to traverse both lists, always choosing the smaller value. It's the merge step of merge sort applied to linked lists.

**Algorithm 3.2**: MERGE-TWO-LISTS(list1, list2)
```
MERGE-TWO-LISTS(list1, list2)
1  dummy = new ListNode(0)
2  current = dummy
3  while list1 ≠ null and list2 ≠ null
4      if list1.val ≤ list2.val
5          current.next = list1
6          list1 = list1.next
7      else
8          current.next = list2
9          list2 = list2.next
10     current = current.next
11 if list1 ≠ null
12     current.next = list1
13 else
14     current.next = list2
15 return dummy.next
```

**Analysis**:
- **Time Complexity**: Θ(n + m)
- **Space Complexity**: Θ(1)

---

### Problem 11: Linked List Cycle (LeetCode #141)

**Problem Statement**: Determine if a linked list has a cycle.

**The Big Idea**: Floyd's cycle-finding algorithm (tortoise and hare). Use two pointers moving at different speeds - if there's a cycle, they'll eventually meet.

**Algorithm 3.3**: HAS-CYCLE(head)
```
HAS-CYCLE(head)
1  if head = null or head.next = null
2      return false
3  slow = head
4  fast = head.next
5  while fast ≠ null and fast.next ≠ null
6      if slow = fast
7          return true
8      slow = slow.next
9      fast = fast.next.next
10 return false
```

**Analysis**:
- **Time Complexity**: O(n)
- **Space Complexity**: Θ(1)

---

## Tree Problems

### Problem 12: Maximum Depth of Binary Tree (LeetCode #104)

**Problem Statement**: Find the maximum depth of a binary tree.

**The Big Idea**: The depth of a tree is 1 + maximum depth of its subtrees. This naturally leads to a recursive solution.

**Algorithm 4.1**: MAX-DEPTH(root)
```
MAX-DEPTH(root)
1  if root = null
2      return 0
3  left_depth = MAX-DEPTH(root.left)
4  right_depth = MAX-DEPTH(root.right)
5  return 1 + max(left_depth, right_depth)
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: O(h) where h is tree height

---

### Problem 13: Same Tree (LeetCode #100)

**Problem Statement**: Determine if two binary trees are the same.

**The Big Idea**: Two trees are the same if their roots have the same value and their corresponding subtrees are the same.

**Algorithm 4.2**: IS-SAME-TREE(p, q)
```
IS-SAME-TREE(p, q)
1  if p = null and q = null
2      return true
3  if p = null or q = null
4      return false
5  if p.val ≠ q.val
6      return false
7  return IS-SAME-TREE(p.left, q.left) and IS-SAME-TREE(p.right, q.right)
```

**Analysis**:
- **Time Complexity**: O(min(m,n))
- **Space Complexity**: O(min(m,n))

---

### Problem 14: Invert Binary Tree (LeetCode #226)

**Problem Statement**: Invert a binary tree (mirror image).

**The Big Idea**: Recursively swap left and right subtrees at each node.

**Algorithm 4.3**: INVERT-TREE(root)
```
INVERT-TREE(root)
1  if root = null
2      return null
3  temp = root.left
4  root.left = INVERT-TREE(root.right)
5  root.right = INVERT-TREE(temp)
6  return root
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: O(h)

---

### Problem 15: Binary Tree Level Order Traversal (LeetCode #102)

**Problem Statement**: Return the level order traversal of a binary tree's nodes.

**The Big Idea**: Use BFS with a queue. Process nodes level by level, keeping track of level boundaries.

**Algorithm 4.4**: LEVEL-ORDER(root)
```
LEVEL-ORDER(root)
1  if root = null
2      return []
3  result = []
4  queue = new Queue()
5  queue.enqueue(root)
6  while not queue.isEmpty()
7      level_size = queue.size()
8      current_level = []
9      for i = 1 to level_size
10         node = queue.dequeue()
11         current_level.append(node.val)
12         if node.left ≠ null
13             queue.enqueue(node.left)
14         if node.right ≠ null
15             queue.enqueue(node.right)
16     result.append(current_level)
17 return result
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: O(w) where w is maximum width

---

## Graph Problems

### Problem 16: Number of Islands (LeetCode #200)

**Problem Statement**: Count the number of islands in a 2D grid where '1' represents land and '0' represents water.

**The Big Idea**: Use DFS to explore each connected component of '1's. Each DFS call from an unvisited '1' discovers a new island.

**Algorithm 5.1**: NUM-ISLANDS(grid)
```
NUM-ISLANDS(grid)
1  if grid = null or grid.length = 0
2      return 0
3  islands = 0
4  for i = 0 to grid.length - 1
5      for j = 0 to grid[0].length - 1
6          if grid[i][j] = '1'
7              islands += 1
8              DFS-ISLAND(grid, i, j)
9  return islands

DFS-ISLAND(grid, i, j)
1  if i < 0 or i ≥ grid.length or j < 0 or j ≥ grid[0].length or grid[i][j] = '0'
2      return
3  grid[i][j] = '0'
4  DFS-ISLAND(grid, i+1, j)
5  DFS-ISLAND(grid, i-1, j)
6  DFS-ISLAND(grid, i, j+1)
7  DFS-ISLAND(grid, i, j-1)
```

**Analysis**:
- **Time Complexity**: O(m × n)
- **Space Complexity**: O(m × n) in worst case

---

### Problem 17: Clone Graph (LeetCode #133)

**Problem Statement**: Clone an undirected graph where each node contains a value and a list of neighbors.

**The Big Idea**: Use DFS with a hash map to track original → clone mappings. This prevents infinite loops and duplicate cloning.

**Algorithm 5.2**: CLONE-GRAPH(node)
```
CLONE-GRAPH(node)
1  if node = null
2      return null
3  let cloned be a new hash map
4  return DFS-CLONE(node, cloned)

DFS-CLONE(node, cloned)
1  if cloned.contains(node)
2      return cloned[node]
3  clone = new Node(node.val)
4  cloned[node] = clone
5  for neighbor in node.neighbors
6      clone.neighbors.append(DFS-CLONE(neighbor, cloned))
7  return clone
```

**Analysis**:
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)

---

## Dynamic Programming Problems

### Problem 18: Climbing Stairs (LeetCode #70)

**Problem Statement**: Count the number of ways to reach the top of n stairs, where you can climb 1 or 2 steps at a time.

**The Big Idea**: This is the Fibonacci sequence in disguise. To reach step n, you can come from step n-1 or step n-2.

**Algorithm 6.1**: CLIMB-STAIRS(n)
```
CLIMB-STAIRS(n)
1  if n ≤ 2
2      return n
3  prev2 = 1
4  prev1 = 2
5  for i = 3 to n
6      current = prev1 + prev2
7      prev2 = prev1
8      prev1 = current
9  return prev1
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)
- **Recurrence**: f(n) = f(n-1) + f(n-2)

---

### Problem 19: House Robber (LeetCode #198)

**Problem Statement**: Rob houses to maximize money without robbing adjacent houses.

**The Big Idea**: At each house, decide whether to rob it (and skip the previous) or skip it (and take the max from the previous). This creates overlapping subproblems.

**Algorithm 6.2**: ROB(nums)
```
ROB(nums)
1  if nums.length = 0
2      return 0
3  if nums.length = 1
4      return nums[0]
5  prev2 = nums[0]
6  prev1 = max(nums[0], nums[1])
7  for i = 2 to nums.length - 1
8      current = max(prev1, prev2 + nums[i])
9      prev2 = prev1
10     prev1 = current
11 return prev1
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)

---

### Problem 20: Coin Change (LeetCode #322)

**Problem Statement**: Find the minimum number of coins needed to make up a given amount.

**The Big Idea**: For each amount, try all possible coins and take the minimum. Build up from smaller amounts to larger ones.

**Algorithm 6.3**: COIN-CHANGE(coins, amount)
```
COIN-CHANGE(coins, amount)
1  let dp[0..amount] be initialized to amount + 1
2  dp[0] = 0
3  for i = 1 to amount
4      for coin in coins
5          if coin ≤ i
6              dp[i] = min(dp[i], dp[i - coin] + 1)
7  return dp[amount] > amount ? -1 : dp[amount]
```

**Analysis**:
- **Time Complexity**: O(amount × coins.length)
- **Space Complexity**: O(amount)

---

## Two Pointers & Sliding Window

### Problem 21: Valid Parentheses (LeetCode #20)

**Problem Statement**: Determine if a string of parentheses is valid.

**The Big Idea**: Use a stack to match opening and closing brackets. Each closing bracket must match the most recent unmatched opening bracket.

**Algorithm 7.1**: IS-VALID(s)
```
IS-VALID(s)
1  let stack be a new stack
2  let mapping = {')': '(', '}': '{', ']': '['}
3  for char in s
4      if char in mapping
5          if stack.isEmpty() or stack.pop() ≠ mapping[char]
6              return false
7      else
8          stack.push(char)
9  return stack.isEmpty()
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: O(n)

---

### Problem 22: 3Sum (LeetCode #15)

**Problem Statement**: Find all unique triplets that sum to zero.

**The Big Idea**: Fix one element, then use two pointers on the remaining sorted array to find pairs that sum to the negative of the fixed element.

**Algorithm 7.2**: THREE-SUM(nums)
```
THREE-SUM(nums)
1  SORT(nums)
2  result = []
3  for i = 0 to nums.length - 3
4      if i > 0 and nums[i] = nums[i-1]
5          continue
6      left = i + 1
7      right = nums.length - 1
8      while left < right
9          sum = nums[i] + nums[left] + nums[right]
10         if sum = 0
11             result.append([nums[i], nums[left], nums[right]])
12             while left < right and nums[left] = nums[left + 1]
13                 left += 1
14             while left < right and nums[right] = nums[right - 1]
15                 right -= 1
16             left += 1
17             right -= 1
18         else if sum < 0
19             left += 1
20         else
21             right -= 1
22 return result
```

**Analysis**:
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1) extra space

---

### Problem 23: Container With Most Water (LeetCode #11)

**Problem Statement**: Find two lines that form a container holding the most water.

**The Big Idea**: Use two pointers from both ends. The area is limited by the shorter line, so we move the pointer at the shorter line inward.

**Algorithm 7.3**: MAX-AREA(height)
```
MAX-AREA(height)
1  left = 0
2  right = height.length - 1
3  max_area = 0
4  while left < right
5      width = right - left
6      current_area = width × min(height[left], height[right])
7      max_area = max(max_area, current_area)
8      if height[left] < height[right]
9          left += 1
10     else
11         right -= 1
12 return max_area
```

**Analysis**:
- **Time Complexity**: Θ(n)
- **Space Complexity**: Θ(1)

---

## Stack & Queue Problems

### Problem 24: Min Stack (LeetCode #155)

**Problem Statement**: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

**The Big Idea**: Use two stacks - one for values and one for minimum values. The min stack tracks the minimum at each level.

**Algorithm 8.1**: MinStack Implementation
```
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val):
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self):
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()
    
    def top(self):
        return self.stack[-1] if self.stack else None
    
    def getMin(self):
        return self.min_stack[-1] if self.min_stack else None
```

**Analysis**:
- **Time Complexity**: O(1) for all operations
- **Space Complexity**: O(n)

---

### Problem 25: Daily Temperatures (LeetCode #739)

**Problem Statement**: Find how many days you have to wait for a warmer temperature.

**The Big Idea**: Use a monotonic stack to keep track of temperatures in decreasing order. When we find a warmer day, we can resolve all previous cooler days.

**Algorithm 8.2**: DAILY-TEMPERATURES(temperatures)
```
DAILY-TEMPERATURES(temperatures)
1  n = temperatures.length
2  result = new array[n] initialized to 0
3  let stack be a new stack
4  for i = 0 to n - 1
5      while not stack.isEmpty() and temperatures[i] > temperatures[stack.top()]
6          index = stack.pop()
7          result[index] = i - index
8      stack.push(i)
9  return result
```

**Analysis**:
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

---

## Mathematical Problems

### Problem 26: Palindrome Number (LeetCode #9)

**Problem Statement**: Determine if an integer is a palindrome without converting to string.

**The Big Idea**: Reverse half the number and compare with the other half. This avoids integer overflow issues.

**Algorithm 9.1**: IS-PALINDROME(x)
```
IS-PALINDROME(x)
1  if x < 0 or (x mod 10 = 0 and x ≠ 0)
2      return false
3  reversed_half = 0
4  while x > reversed_half
5      reversed_half = reversed_half × 10 + x mod 10
6      x = x ÷ 10
7  return x = reversed_half or x = reversed_half ÷ 10
```

**Analysis**:
- **Time Complexity**: O(log n)
- **Space Complexity**: Θ(1)

---

### Problem 27: Pow(x, n) (LeetCode #50)

**Problem Statement**: Calculate x raised to the power n.

**The Big Idea**: Use binary exponentiation. If n is even, x^n = (x^(n/2))². If n is odd, x^n = x × x^(n-1).

**Algorithm 9.2**: MY-POW(x, n)
```
MY-POW(x, n)
1  if n = 0
2      return 1
3  if n < 0
4      return 1 / MY-POW(x, -n)
5  if n mod 2 = 0
6      half = MY-POW(x, n/2)
7      return half × half
8  else
9      return x × MY-POW(x, n-1)
```

**Analysis**:
- **Time Complexity**: O(log n)
- **Space Complexity**: O(log n)

---

### Problem 28: Happy Number (LeetCode #202)

**Problem Statement**: Determine if a number is happy (eventually reaches 1 when replaced by sum of squares of digits).

**The Big Idea**: Use Floyd's cycle detection. If we enter a cycle that doesn't contain 1, the number isn't happy.

**Algorithm 9.3**: IS-HAPPY(n)
```
IS-HAPPY(n)
1  slow = n
2  fast = n
3  repeat
4      slow = GET-NEXT(slow)
5      fast = GET-NEXT(GET-NEXT(fast))
6  until slow = fast
7  return slow = 1

GET-NEXT(n)
1  sum = 0
2  while n > 0
3      digit = n mod 10
4      sum += digit × digit
5      n = n ÷ 10
6  return sum
```

**Analysis**:
- **Time Complexity**: O(log n)
- **Space Complexity**: Θ(1)

---

## Backtracking Problems

### Problem 29: Generate Parentheses (LeetCode #22)

**Problem Statement**: Generate all valid combinations of n pairs of parentheses.

**The Big Idea**: Use backtracking with constraints. Add '(' if we haven't used all opening brackets, add ')' if it wouldn't create an invalid sequence.

**Algorithm 10.1**: GENERATE-PARENTHESES(n)
```
GENERATE-PARENTHESES(n)
1  result = []
2  BACKTRACK(result, "", 0, 0, n)
3  return result

BACKTRACK(result, current, open, close, max)
1  if current.length = max × 2
2      result.append(current)
3      return
4  if open < max
5      BACKTRACK(result, current + "(", open + 1, close, max)
6  if close < open
7      BACKTRACK(result, current + ")", open, close + 1, max)
```

**Analysis**:
- **Time Complexity**: O(4^n / √n) (Catalan number)
- **Space Complexity**: O(n)

---

### Problem 30: Letter Combinations of Phone Number (LeetCode #17)

**Problem Statement**: Generate all possible letter combinations from a phone number.

**The Big Idea**: Use backtracking to explore all combinations. For each digit, try all possible letters.

**Algorithm 10.2**: LETTER-COMBINATIONS(digits)
```
LETTER-COMBINATIONS(digits)
1  if digits.length = 0
2      return []
3  phone_map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
4  result = []
5  BACKTRACK-LETTERS(result, "", digits, 0, phone_map)
6  return result

BACKTRACK-LETTERS(result, current, digits, index, phone_map)
1  if index = digits.length
2      result.append(current)
3      return
4  digit = digits[index] - '0'
5  letters = phone_map[digit]
6  for letter in letters
7      BACKTRACK-LETTERS(result, current + letter, digits, index + 1, phone_map)
```

**Analysis**:
- **Time Complexity**: O(3^n × 4^m) where n is digits with 3 letters, m is digits with 4 letters
- **Space Complexity**: O(n)

---

### Problem 31: Combination Sum (LeetCode #39)

**Problem Statement:** Given an array of distinct integers `candidates` and a target integer `target`, return all unique combinations where the candidates sum to `target`. The same number may be chosen from `candidates` unlimited number of times.

**The Big Idea:** Use backtracking with pruning. At each step, try all candidates that don't exceed the remaining target. Since we can reuse elements, we don't advance the start index when recursing on the same element.

**Algorithm 10.3: COMBINATION-SUM(candidates, target)**
```
COMBINATION-SUM(candidates, target)
1  result = []
2  SORT(candidates)  // For pruning optimization
3  BACKTRACK(result, candidates, target, [], 0)
4  return result

BACKTRACK(result, candidates, target, current, start)
1  if target = 0
2      result.append(COPY(current))
3      return
4  for i = start to candidates.length - 1
5      if candidates[i] > target
6          break  // Pruning: no need to continue
7      current.append(candidates[i])
8      BACKTRACK(result, candidates, target - candidates[i], current, i)
9      current.pop()
```

**Analysis:**
- Time Complexity: O(N^(T/M)) where N is number of candidates, T is target, M is minimal value
- Space Complexity: O(T/M) for recursion depth

---

### Problem 32: Combination Sum II (LeetCode #40)

**Problem Statement:** Given a collection of candidate numbers and a target number, find all unique combinations where the candidate numbers sum to the target. Each number in the candidates may only be used once in the combination.

**The Big Idea:** Similar to Combination Sum, but skip duplicates at the same recursion level and advance start index to prevent reuse of the same element.

**Algorithm 10.4: COMBINATION-SUM-II(candidates, target)**
```
COMBINATION-SUM-II(candidates, target)
1  result = []
2  SORT(candidates)
3  BACKTRACK(result, candidates, target, [], 0)
4  return result

BACKTRACK(result, candidates, target, current, start)
1  if target = 0
2      result.append(COPY(current))
3      return
4  for i = start to candidates.length - 1
5      if candidates[i] > target
6          break
7      // Skip duplicates at same level
8      if i > start and candidates[i] = candidates[i - 1]
9          continue
10     current.append(candidates[i])
11     BACKTRACK(result, candidates, target - candidates[i], current, i + 1)
12     current.pop()
```

**Analysis:**
- Time Complexity: O(2^N) where N is the number of candidates
- Space Complexity: O(N) for recursion depth

---

### Problem 33: Permutations (LeetCode #46)

**Problem Statement:** Given an array of distinct integers, return all possible permutations.

**The Big Idea:** Use backtracking with a used array to track which elements are already in the current permutation.

**Algorithm 10.5: PERMUTATIONS(nums)**
```
PERMUTATIONS(nums)
1  result = []
2  used = ARRAY[nums.length] filled with false
3  BACKTRACK(result, nums, [], used)
4  return result

BACKTRACK(result, nums, current, used)
1  if current.length = nums.length
2      result.append(COPY(current))
3      return
4  for i = 0 to nums.length - 1
5      if not used[i]
6          used[i] = true
7          current.append(nums[i])
8          BACKTRACK(result, nums, current, used)
9          current.pop()
10         used[i] = false
```

**Analysis:**
- Time Complexity: O(N! × N) where N is the number of elements
- Space Complexity: O(N) for recursion depth and used array

---

### Problem 34: Permutations II (LeetCode #47)

**Problem Statement:** Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**The Big Idea:** Similar to Permutations I, but sort the array first and skip duplicates when the previous duplicate hasn't been used.

**Algorithm 10.6: PERMUTATIONS-II(nums)**
```
PERMUTATIONS-II(nums)
1  result = []
2  SORT(nums)
3  used = ARRAY[nums.length] filled with false
4  BACKTRACK(result, nums, [], used)
5  return result

BACKTRACK(result, nums, current, used)
1  if current.length = nums.length
2      result.append(COPY(current))
3      return
4  for i = 0 to nums.length - 1
5      if used[i]
6          continue
7      // Skip duplicates: use duplicate only if previous same element is used
8      if i > 0 and nums[i] = nums[i - 1] and not used[i - 1]
9          continue
10     used[i] = true
11     current.append(nums[i])
12     BACKTRACK(result, nums, current, used)
13     current.pop()
14     used[i] = false
```

**Analysis:**
- Time Complexity: O(N! × N) where N is the number of elements
- Space Complexity: O(N) for recursion depth and used array

---

### Problem 35: Subsets (LeetCode #78)

**Problem Statement:** Given an integer array of unique elements, return all possible subsets (the power set).

**The Big Idea:** Use backtracking to generate all possible combinations. At each element, we have two choices: include it or exclude it.

**Algorithm 10.7: SUBSETS(nums)**
```
SUBSETS(nums)
1  result = []
2  BACKTRACK(result, nums, [], 0)
3  return result

BACKTRACK(result, nums, current, start)
1  result.append(COPY(current))
2  for i = start to nums.length - 1
3      current.append(nums[i])
4      BACKTRACK(result, nums, current, i + 1)
5      current.pop()
```

**Analysis:**
- Time Complexity: O(2^N × N) where N is the number of elements
- Space Complexity: O(N) for recursion depth

---

### Problem 36: Subsets II (LeetCode #90)

**Problem Statement:** Given an integer array that may contain duplicates, return all possible subsets (the power set).

**The Big Idea:** Similar to Subsets I, but sort first and skip duplicates at the same recursion level.

**Algorithm 10.8: SUBSETS-II(nums)**
```
SUBSETS-II(nums)
1  result = []
2  SORT(nums)
3  BACKTRACK(result, nums, [], 0)
4  return result

BACKTRACK(result, nums, current, start)
1  result.append(COPY(current))
2  for i = start to nums.length - 1
3      // Skip duplicates at same level
4      if i > start and nums[i] = nums[i - 1]
5          continue
6      current.append(nums[i])
7      BACKTRACK(result, nums, current, i + 1)
8      current.pop()
```

**Analysis:**
- Time Complexity: O(2^N × N) where N is the number of elements
- Space Complexity: O(N) for recursion depth

---

### Problem 37: Word Search (LeetCode #79)

**Problem Statement:** Given an m x n grid of characters and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.

**The Big Idea:** Use backtracking with DFS to explore all possible paths. Mark cells as visited during exploration and unmark when backtracking.

**Algorithm 10.9: EXIST(board, word)**
```
EXIST(board, word)
1  if board is empty or word is empty
2      return false
3  
4  m = board.length
5  n = board[0].length
6  
7  for i = 0 to m - 1
8      for j = 0 to n - 1
9          if DFS(board, word, i, j, 0, m, n)
10             return true
11 
12 return false

DFS(board, word, i, j, index, m, n)
1  if index = word.length
2      return true
3  if i < 0 or i ≥ m or j < 0 or j ≥ n or board[i][j] ≠ word[index]
4      return false
5  
6  temp = board[i][j]
7  board[i][j] = '#'  // Mark as visited
8  
9  found = DFS(board, word, i + 1, j, index + 1, m, n) or
10         DFS(board, word, i - 1, j, index + 1, m, n) or
11         DFS(board, word, i, j + 1, index + 1, m, n) or
12         DFS(board, word, i, j - 1, index + 1, m, n)
13 
14 board[i][j] = temp  // Restore
15 return found
```

**Analysis:**
- Time Complexity: O(m × n × 4^L) where L is the length of word
- Space Complexity: O(L) for recursion depth

---

### Problem 38: Palindrome Partitioning (LeetCode #131)

**Problem Statement:** Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

**The Big Idea:** Use backtracking to try all possible partitions. At each position, try all possible substrings and check if they are palindromes.

**Algorithm 10.10: PARTITION(s)**
```
PARTITION(s)
1  result = []
2  BACKTRACK(result, s, [], 0)
3  return result

BACKTRACK(result, s, current, start)
1  if start = s.length
2      result.append(COPY(current))
3      return
4  
5  for end = start to s.length - 1
6      if IS-PALINDROME(s, start, end)
7          current.append(s.substring(start, end + 1))
8          BACKTRACK(result, s, current, end + 1)
9          current.pop()

IS-PALINDROME(s, left, right)
1  while left < right
2      if s[left] ≠ s[right]
3          return false
4      left = left + 1
5      right = right - 1
6  return true
```

**Analysis:**
- Time Complexity: O(2^N × N) where N is the length of string
- Space Complexity: O(N) for recursion depth

---

### Problem 39: N-Queens (LeetCode #51)

**Problem Statement:** The n-queens puzzle is the problem of placing n chess queens on an n×n chessboard so that no two queens attack each other.

**The Big Idea:** Use backtracking to place queens row by row. For each row, try all columns and check if the placement is valid (no conflicts with previously placed queens).

**Algorithm 10.11: SOLVE-N-QUEENS(n)**
```
SOLVE-N-QUEENS(n)
1  result = []
2  board = ARRAY[n] filled with arrays of n dots
3  BACKTRACK(result, board, 0, n)
4  return result

BACKTRACK(result, board, row, n)
1  if row = n
2      result.append(CONSTRUCT-SOLUTION(board, n))
3      return
4  
5  for col = 0 to n - 1
6      if IS-VALID(board, row, col, n)
7          board[row][col] = 'Q'
8          BACKTRACK(result, board, row + 1, n)
9          board[row][col] = '.'

IS-VALID(board, row, col, n)
1  // Check column
2  for i = 0 to row - 1
3      if board[i][col] = 'Q'
4          return false
5  
6  // Check diagonal (top-left to bottom-right)
7  for i = row - 1, j = col - 1; i ≥ 0 and j ≥ 0; i = i - 1, j = j - 1
8      if board[i][j] = 'Q'
9          return false
10 
11 // Check diagonal (top-right to bottom-left)
12 for i = row - 1, j = col + 1; i ≥ 0 and j < n; i = i - 1, j = j + 1
13     if board[i][j] = 'Q'
14         return false
15 
16 return true

CONSTRUCT-SOLUTION(board, n)
1  solution = []
2  for i = 0 to n - 1
3      solution.append(STRING(board[i]))
4  return solution
```

**Analysis:**
- Time Complexity: O(N!) where N is the board size
- Space Complexity: O(N²) for the board

---

### Problem 40: Sudoku Solver (LeetCode #37)

**Problem Statement:** Write a program to solve a Sudoku puzzle by filling the empty cells. Empty cells are indicated by the character '.'.

**The Big Idea:** Use backtracking to try all possible numbers (1-9) in each empty cell. Check if the placement is valid according to Sudoku rules.

**Algorithm 10.12: SOLVE-SUDOKU(board)**
```
SOLVE-SUDOKU(board)
1  if SOLVE(board)
2      return  // Solution found and board is modified
3  // No solution exists

SOLVE(board)
1  for row = 0 to 8
2      for col = 0 to 8
3          if board[row][col] = '.'
4              for num = '1' to '9'
5                  if IS-VALID-PLACEMENT(board, row, col, num)
6                      board[row][col] = num
7                      if SOLVE(board)
8                          return true
9                      board[row][col] = '.'
10             return false
11 return true

IS-VALID-PLACEMENT(board, row, col, num)
1  // Check row
2  for j = 0 to 8
3      if board[row][j] = num
4          return false
5  
6  // Check column
7  for i = 0 to 8
8      if board[i][col] = num
9          return false
10 
11 // Check 3x3 box
12 boxRow = (row ÷ 3) × 3
13 boxCol = (col ÷ 3) × 3
14 for i = boxRow to boxRow + 2
15     for j = boxCol to boxCol + 2
16         if board[i][j] = num
17             return false
18 
19 return true
```

**Analysis:**
- Time Complexity: O(9^(N×N)) where N = 9 (exponential in worst case)
- Space Complexity: O(N×N) for recursion depth

---

---

## Advanced Miscellaneous Problems

*These problems combine multiple algorithmic paradigms and require sophisticated problem-solving approaches.*

### Problem 41: Trapping Rain Water (LeetCode #42)

**Problem Statement:** Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water can be trapped after raining.

**The Big Idea:** Use two pointers approach. Water level at any position is determined by the minimum of maximum heights to its left and right. Move pointer with smaller maximum height.

**Algorithm 11.1: TRAP(height)**
```
TRAP(height)
1  if height.length < 3
2      return 0
3  
4  left = 0
5  right = height.length - 1
6  leftMax = 0
7  rightMax = 0
8  water = 0
9  
10 while left < right
11     if height[left] < height[right]
12         if height[left] ≥ leftMax
13             leftMax = height[left]
14         else
15             water = water + (leftMax - height[left])
16         left = left + 1
17     else
18         if height[right] ≥ rightMax
19             rightMax = height[right]
20         else
21             water = water + (rightMax - height[right])
22         right = right - 1
23 
24 return water
```

**Analysis:**
- Time Complexity: O(n)
- Space Complexity: O(1)

---

### Problem 42: Shortest Bridge (LeetCode #934)

**Problem Statement:** In a given 2D binary array, there are two islands. Return the smallest number of flips required to connect the two islands.

**The Big Idea:** Use DFS to find first island and mark it, then use BFS to find shortest path to second island.

**Algorithm 11.2: SHORTEST-BRIDGE(grid)**
```
SHORTEST-BRIDGE(grid)
1  n = grid.length
2  queue = EMPTY-QUEUE()
3  found = false
4  
5  // Find first island using DFS
6  for i = 0 to n - 1
7      if found
8          break
9      for j = 0 to n - 1
10         if grid[i][j] = 1
11             DFS-MARK-ISLAND(grid, i, j, n, queue)
12             found = true
13             break
14 
15 // BFS to find shortest path to second island
16 directions = [[0,1], [0,-1], [1,0], [-1,0]]
17 steps = 0
18 
19 while not queue.isEmpty()
20     size = queue.size()
21     for k = 0 to size - 1
22         [x, y] = queue.dequeue()
23         for [dx, dy] in directions
24             nx = x + dx
25             ny = y + dy
26             if nx ≥ 0 and nx < n and ny ≥ 0 and ny < n
27                 if grid[nx][ny] = 1
28                     return steps
29                 if grid[nx][ny] = 0
30                     grid[nx][ny] = 2
31                     queue.enqueue([nx, ny])
32     steps = steps + 1
33 
34 return -1

DFS-MARK-ISLAND(grid, i, j, n, queue)
1  if i < 0 or i ≥ n or j < 0 or j ≥ n or grid[i][j] ≠ 1
2      return
3  
4  grid[i][j] = 2  // Mark as visited
5  queue.enqueue([i, j])
6  
7  DFS-MARK-ISLAND(grid, i + 1, j, n, queue)
8  DFS-MARK-ISLAND(grid, i - 1, j, n, queue)
9  DFS-MARK-ISLAND(grid, i, j + 1, n, queue)
10 DFS-MARK-ISLAND(grid, i, j - 1, n, queue)
```

**Analysis:**
- Time Complexity: O(n²)
- Space Complexity: O(n²)

---

### Problem 43: Largest Rectangle in Histogram (LeetCode #84)

**Problem Statement:** Given an array of integers representing the histogram's bar height, find the area of largest rectangle in the histogram.

**The Big Idea:** Use a monotonic increasing stack. For each bar, calculate the maximum rectangle with that bar as the shortest bar.

**Algorithm 11.3: LARGEST-RECTANGLE-AREA(heights)**
```
LARGEST-RECTANGLE-AREA(heights)
1  stack = EMPTY-STACK()
2  maxArea = 0
3  
4  for i = 0 to heights.length
5      height = (i = heights.length) ? 0 : heights[i]
6      
7      while not stack.isEmpty() and height < heights[stack.top()]
8          h = heights[stack.pop()]
9          width = stack.isEmpty() ? i : i - stack.top() - 1
10         maxArea = MAX(maxArea, h × width)
11     
12     stack.push(i)
13 
14 return maxArea
```

**Analysis:**
- Time Complexity: O(n)
- Space Complexity: O(n)

---

### Problem 44: Serialize and Deserialize Binary Tree (LeetCode #297)

**Problem Statement:** Design an algorithm to serialize and deserialize a binary tree.

**The Big Idea:** Use preorder traversal for serialization with null markers. For deserialization, use the same preorder pattern.

**Algorithm 11.4: SERIALIZE-DESERIALIZE**
```
SERIALIZE(root)
1  if root is null
2      return "null,"
3  
4  return root.val + "," + SERIALIZE(root.left) + SERIALIZE(root.right)

DESERIALIZE(data)
1  values = data.split(",")
2  index = [0]  // Use array to pass by reference
3  return DESERIALIZE-HELPER(values, index)

DESERIALIZE-HELPER(values, index)
1  if values[index[0]] = "null"
2      index[0] = index[0] + 1
3      return null
4  
5  root = new TreeNode(INTEGER(values[index[0]]))
6  index[0] = index[0] + 1
7  
8  root.left = DESERIALIZE-HELPER(values, index)
9  root.right = DESERIALIZE-HELPER(values, index)
10 
11 return root
```

**Analysis:**
- Time Complexity: O(n) for both operations
- Space Complexity: O(n)

---

### Problem 45: Word Ladder (LeetCode #127)

**Problem Statement:** Given two words and a dictionary, find the length of shortest transformation sequence from beginWord to endWord, changing only one letter at a time.

**The Big Idea:** Use BFS to find shortest path in the word graph. Each word is a node, and edges exist between words differing by one character.

**Algorithm 11.5: LADDER-LENGTH(beginWord, endWord, wordList)**
```
LADDER-LENGTH(beginWord, endWord, wordList)
1  if endWord not in wordList
2      return 0
3  
4  wordSet = SET(wordList)
5  queue = EMPTY-QUEUE()
6  queue.enqueue([beginWord, 1])
7  visited = EMPTY-SET()
8  visited.add(beginWord)
9  
10 while not queue.isEmpty()
11     [word, level] = queue.dequeue()
12     
13     if word = endWord
14         return level
15     
16     for i = 0 to word.length - 1
17         for c = 'a' to 'z'
18             if c ≠ word[i]
19                 newWord = word[0:i] + c + word[i+1:]
20                 if newWord in wordSet and newWord not in visited
21                     visited.add(newWord)
22                     queue.enqueue([newWord, level + 1])
23 
24 return 0
```

**Analysis:**
- Time Complexity: O(M² × N) where M is word length, N is number of words
- Space Complexity: O(M × N)

---

### Problem 46: Design LRU Cache (LeetCode #146)

**Problem Statement:** Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

**The Big Idea:** Use a doubly linked list for order tracking and a hash map for O(1) access. Move accessed nodes to front.

**Algorithm 11.6: LRU-CACHE**
```
class LRUCache:
    Node:
        key, value, prev, next
    
    INIT(capacity)
    1  this.capacity = capacity
    2  this.cache = EMPTY-HASH-MAP()
    3  this.head = new Node(0, 0)
    4  this.tail = new Node(0, 0)
    5  this.head.next = this.tail
    6  this.tail.prev = this.head
    
    GET(key)
    1  if key in this.cache
    2      node = this.cache[key]
    3      MOVE-TO-HEAD(node)
    4      return node.value
    5  return -1
    
    PUT(key, value)
    1  if key in this.cache
    2      node = this.cache[key]
    3      node.value = value
    4      MOVE-TO-HEAD(node)
    5  else
    6      if this.cache.size() = this.capacity
    7          tail = REMOVE-TAIL()
    8          delete this.cache[tail.key]
    9      
    10     node = new Node(key, value)
    11     this.cache[key] = node
    12     ADD-TO-HEAD(node)
    
    MOVE-TO-HEAD(node)
    1  REMOVE-NODE(node)
    2  ADD-TO-HEAD(node)
    
    REMOVE-NODE(node)
    1  node.prev.next = node.next
    2  node.next.prev = node.prev
    
    ADD-TO-HEAD(node)
    1  node.prev = this.head
    2  node.next = this.head.next
    3  this.head.next.prev = node
    4  this.head.next = node
    
    REMOVE-TAIL()
    1  last = this.tail.prev
    2  REMOVE-NODE(last)
    3  return last
```

**Analysis:**
- Time Complexity: O(1) for both get and put operations
- Space Complexity: O(capacity)

---

### Problem 47: Median of Two Sorted Arrays (LeetCode #4)

**Problem Statement:** Given two sorted arrays, find the median of the two sorted arrays.

**The Big Idea:** Use binary search on the smaller array to find the correct partition point where elements on left are smaller than elements on right.

**Algorithm 11.7: FIND-MEDIAN-SORTED-ARRAYS(nums1, nums2)**
```
FIND-MEDIAN-SORTED-ARRAYS(nums1, nums2)
1  if nums1.length > nums2.length
2      return FIND-MEDIAN-SORTED-ARRAYS(nums2, nums1)
3  
4  m = nums1.length
5  n = nums2.length
6  left = 0
7  right = m
8  
9  while left ≤ right
10     i = (left + right) ÷ 2
11     j = (m + n + 1) ÷ 2 - i
12     
13     maxLeft1 = (i = 0) ? -∞ : nums1[i - 1]
14     minRight1 = (i = m) ? +∞ : nums1[i]
15     maxLeft2 = (j = 0) ? -∞ : nums2[j - 1]
16     minRight2 = (j = n) ? +∞ : nums2[j]
17     
18     if maxLeft1 ≤ minRight2 and maxLeft2 ≤ minRight1
19         if (m + n) mod 2 = 0
20             return (MAX(maxLeft1, maxLeft2) + MIN(minRight1, minRight2)) / 2.0
21         else
22             return MAX(maxLeft1, maxLeft2)
23     else if maxLeft1 > minRight2
24         right = i - 1
25     else
26         left = i + 1
27 
28 return 0.0
```

**Analysis:**
- Time Complexity: O(log(min(m, n)))
- Space Complexity: O(1)

---

### Problem 48: Regular Expression Matching (LeetCode #10)

**Problem Statement:** Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.

**The Big Idea:** Use dynamic programming. For each position in string and pattern, determine if match is possible considering '*' can match zero or more characters.

**Algorithm 11.8: IS-MATCH(s, p)**
```
IS-MATCH(s, p)
1  m = s.length
2  n = p.length
3  dp = ARRAY[m + 1][n + 1] filled with false
4  dp[0][0] = true
5  
6  // Handle patterns like a*, a*b*, a*b*c*
7  for j = 2 to n step 2
8      if p[j - 1] = '*'
9          dp[0][j] = dp[0][j - 2]
10 
11 for i = 1 to m
12     for j = 1 to n
13         if p[j - 1] = '*'
14             // Zero occurrences
15             dp[i][j] = dp[i][j - 2]
16             // One or more occurrences
17             if MATCHES(s[i - 1], p[j - 2])
18                 dp[i][j] = dp[i][j] or dp[i - 1][j]
19         else
20             if MATCHES(s[i - 1], p[j - 1])
21                 dp[i][j] = dp[i - 1][j - 1]
22 
23 return dp[m][n]

MATCHES(s_char, p_char)
1  return p_char = '.' or s_char = p_char
```

**Analysis:**
- Time Complexity: O(m × n)
- Space Complexity: O(m × n)

---

### Problem 49: Edit Distance (LeetCode #72)

**Problem Statement:** Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

**The Big Idea:** Use dynamic programming. At each position, we can insert, delete, or replace a character. Choose the option with minimum cost.

**Algorithm 11.9: MIN-DISTANCE(word1, word2)**
```
MIN-DISTANCE(word1, word2)
1  m = word1.length
2  n = word2.length
3  dp = ARRAY[m + 1][n + 1]
4  
5  // Initialize base cases
6  for i = 0 to m
7      dp[i][0] = i
8  for j = 0 to n
9      dp[0][j] = j
10 
11 for i = 1 to m
12     for j = 1 to n
13         if word1[i - 1] = word2[j - 1]
14             dp[i][j] = dp[i - 1][j - 1]
15         else
16             dp[i][j] = 1 + MIN(
17                 dp[i - 1][j],     // Delete
18                 dp[i][j - 1],     // Insert
19                 dp[i - 1][j - 1]  // Replace
20             )
21 
22 return dp[m][n]
```

**Analysis:**
- Time Complexity: O(m × n)
- Space Complexity: O(m × n)

---

### Problem 50: Sliding Window Maximum (LeetCode #239)

**Problem Statement:** Given an array of integers and a sliding window of size k, return the maximum for each window position.

**The Big Idea:** Use a deque to maintain elements in decreasing order. The front always contains the maximum of current window.

**Algorithm 11.10: MAX-SLIDING-WINDOW(nums, k)**
```
MAX-SLIDING-WINDOW(nums, k)
1  if nums is empty or k = 0
2      return []
3  
4  deque = EMPTY-DEQUE()
5  result = []
6  
7  for i = 0 to nums.length - 1
8      // Remove elements outside window
9      while not deque.isEmpty() and deque.front() < i - k + 1
10         deque.removeFront()
11     
12     // Remove smaller elements from back
13     while not deque.isEmpty() and nums[deque.back()] < nums[i]
14         deque.removeBack()
15     
16     deque.addBack(i)
17     
18     // Add result when window is fully formed
19     if i ≥ k - 1
20         result.append(nums[deque.front()])
21 
22 return result
```

**Analysis:**
- Time Complexity: O(n)
- Space Complexity: O(k)

---

## Conclusion

These advanced problems demonstrate the sophisticated integration of multiple algorithmic paradigms:

1. **Multi-Paradigm Integration**: Combining techniques like DFS+BFS, DP+Binary Search, Stack+Two Pointers
2. **Advanced Data Structures**: Implementing complex structures like LRU Cache with optimal time complexity
3. **Geometric and Mathematical Insights**: Problems like rain water trapping requiring spatial reasoning
4. **Graph Algorithms**: Shortest path problems with custom constraints
5. **String Processing**: Advanced pattern matching and edit distance calculations

The problems showcase how real-world algorithmic challenges often require creative combinations of fundamental techniques. Each solution demonstrates careful analysis of time-space tradeoffs and optimal algorithm selection for specific problem constraints.

These problems represent the pinnacle of algorithmic problem-solving, requiring deep understanding of multiple paradigms and the ability to synthesize them into elegant, efficient solutions. Mastery of these techniques prepares one for the most challenging problems in competitive programming and system design.