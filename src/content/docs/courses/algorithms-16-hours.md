---
title: 16-Hour Algorithms
Description: 16-Hour Dense Algorithm Training Course
---

# 16-Hour Dense LeetCode Algorithm Training Course

## Course Overview
This intensive course focuses on pattern recognition and systematic problem-solving approaches. Each session builds upon previous concepts while introducing new algorithmic patterns commonly tested in technical interviews.

---

## **Hour 1-2: Foundation & Two Pointers**

### **Problem 1: Two Sum (LeetCode #1)**
**Description**: Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Algorithm: TWO-SUM(nums, target)**
```
1  n ← LENGTH(nums)
2  hash_map ← empty hash table
3  for i ← 0 to n-1
4      complement ← target - nums[i]
5      if complement ∈ hash_map
6          return [hash_map[complement], i]
7      hash_map[nums[i]] ← i
8  return []
```
**Time Complexity**: O(n) | **Space Complexity**: O(n)

### **Problem 2: Valid Palindrome (LeetCode #125)**
**Description**: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

**Algorithm: IS-PALINDROME(s)**
```
1  left ← 0
2  right ← LENGTH(s) - 1
3  while left < right
4      while left < right and NOT ALPHANUMERIC(s[left])
5          left ← left + 1
6      while left < right and NOT ALPHANUMERIC(s[right])
7          right ← right - 1
8      if LOWERCASE(s[left]) ≠ LOWERCASE(s[right])
9          return FALSE
10     left ← left + 1
11     right ← right - 1
12 return TRUE
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

### **Problem 3: Container With Most Water (LeetCode #11)**
**Description**: You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container that holds the most water.

**Algorithm: MAX-AREA(height)**
```
1  left ← 0
2  right ← LENGTH(height) - 1
3  max_area ← 0
4  while left < right
5      width ← right - left
6      area ← width × MIN(height[left], height[right])
7      max_area ← MAX(max_area, area)
8      if height[left] < height[right]
9          left ← left + 1
10     else
11         right ← right - 1
12 return max_area
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

### **Problem 4: 3Sum (LeetCode #15)**
**Description**: Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

**Algorithm: THREE-SUM(nums)**
```
1  SORT(nums)
2  result ← empty list
3  n ← LENGTH(nums)
4  for i ← 0 to n-3
5      if i > 0 and nums[i] = nums[i-1]
6          continue
7      left ← i + 1
8      right ← n - 1
9      while left < right
10         sum ← nums[i] + nums[left] + nums[right]
11         if sum = 0
12             ADD-TO-LIST(result, [nums[i], nums[left], nums[right]])
13             while left < right and nums[left] = nums[left+1]
14                 left ← left + 1
15             while left < right and nums[right] = nums[right-1]
16                 right ← right - 1
17             left ← left + 1
18             right ← right - 1
19         else if sum < 0
20             left ← left + 1
21         else
22             right ← right - 1
23 return result
```
**Time Complexity**: O(n²) | **Space Complexity**: O(1)

---

## **Hour 3-4: Sliding Window & String Manipulation**

### **Problem 5: Longest Substring Without Repeating Characters (LeetCode #3)**
**Description**: Given a string `s`, find the length of the longest substring without repeating characters.

**Algorithm: LENGTH-OF-LONGEST-SUBSTRING(s)**
```
1  n ← LENGTH(s)
2  char_map ← empty hash table
3  left ← 0
4  max_length ← 0
5  for right ← 0 to n-1
6      if s[right] ∈ char_map and char_map[s[right]] ≥ left
7          left ← char_map[s[right]] + 1
8      char_map[s[right]] ← right
9      max_length ← MAX(max_length, right - left + 1)
10 return max_length
```
**Time Complexity**: O(n) | **Space Complexity**: O(min(m,n)) where m is charset size

### **Problem 6: Minimum Window Substring (LeetCode #76)**
**Description**: Given two strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` is included in the window.

**Algorithm: MIN-WINDOW(s, t)**
```
1  if LENGTH(s) < LENGTH(t)
2      return ""
3  t_count ← CHARACTER-FREQUENCY(t)
4  required ← SIZE(t_count)
5  left ← 0, right ← 0
6  formed ← 0
7  window_counts ← empty hash table
8  ans ← [∞, 0, 0]  // length, left, right
9  while right < LENGTH(s)
10     char ← s[right]
11     window_counts[char] ← window_counts[char] + 1
12     if char ∈ t_count and window_counts[char] = t_count[char]
13         formed ← formed + 1
14     while left ≤ right and formed = required
15         if right - left + 1 < ans[0]
16             ans ← [right - left + 1, left, right]
17         char ← s[left]
18         window_counts[char] ← window_counts[char] - 1
19         if char ∈ t_count and window_counts[char] < t_count[char]
20             formed ← formed - 1
21         left ← left + 1
22     right ← right + 1
23 return ans[0] = ∞ ? "" : s[ans[1] : ans[2] + 1]
```
**Time Complexity**: O(|s| + |t|) | **Space Complexity**: O(|s| + |t|)

### **Problem 7: Sliding Window Maximum (LeetCode #239)**
**Description**: You are given an array of integers `nums`, and a sliding window of size `k` which is moving from left to right. Return the max sliding window.

**Algorithm: MAX-SLIDING-WINDOW(nums, k)**
```
1  deque ← empty double-ended queue
2  result ← empty list
3  for i ← 0 to LENGTH(nums) - 1
4      while NOT EMPTY(deque) and deque[0] ≤ i - k
5          REMOVE-FRONT(deque)
6      while NOT EMPTY(deque) and nums[deque[BACK(deque)]] ≤ nums[i]
7          REMOVE-BACK(deque)
8      ADD-BACK(deque, i)
9      if i ≥ k - 1
10         ADD-TO-LIST(result, nums[deque[0]])
11 return result
```
**Time Complexity**: O(n) | **Space Complexity**: O(k)

### **Problem 8: Longest Repeating Character Replacement (LeetCode #424)**
**Description**: You can choose any character and change it to any other character. Find the length of the longest substring containing the same letter you can get after performing at most `k` operations.

**Algorithm: CHARACTER-REPLACEMENT(s, k)**
```
1  left ← 0
2  max_count ← 0
3  max_length ← 0
4  count ← empty hash table
5  for right ← 0 to LENGTH(s) - 1
6      count[s[right]] ← count[s[right]] + 1
7      max_count ← MAX(max_count, count[s[right]])
8      while right - left + 1 - max_count > k
9          count[s[left]] ← count[s[left]] - 1
10         left ← left + 1
11     max_length ← MAX(max_length, right - left + 1)
12 return max_length
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

## **Hour 5-6: Arrays & Matrix Manipulation**

### **Problem 9: Rotate Image (LeetCode #48)**
**Description**: You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees clockwise in-place.

**Algorithm: ROTATE(matrix)**
```
1  n ← LENGTH(matrix)
2  // Transpose matrix
3  for i ← 0 to n-1
4      for j ← i to n-1
5          SWAP(matrix[i][j], matrix[j][i])
6  // Reverse each row
7  for i ← 0 to n-1
8      left ← 0
9      right ← n - 1
10     while left < right
11         SWAP(matrix[i][left], matrix[i][right])
12         left ← left + 1
13         right ← right - 1
```
**Time Complexity**: O(n²) | **Space Complexity**: O(1)

### **Problem 10: Spiral Matrix (LeetCode #54)**
**Description**: Given an m x n matrix, return all elements of the matrix in spiral order.

**Algorithm: SPIRAL-ORDER(matrix)**
```
1  if EMPTY(matrix)
2      return []
3  result ← empty list
4  top ← 0, bottom ← LENGTH(matrix) - 1
5  left ← 0, right ← LENGTH(matrix[0]) - 1
6  while top ≤ bottom and left ≤ right
7      // Traverse right
8      for col ← left to right
9          ADD-TO-LIST(result, matrix[top][col])
10     top ← top + 1
11     // Traverse down
12     for row ← top to bottom
13         ADD-TO-LIST(result, matrix[row][right])
14     right ← right - 1
15     if top ≤ bottom
16         // Traverse left
17         for col ← right downto left
18             ADD-TO-LIST(result, matrix[bottom][col])
19         bottom ← bottom - 1
20     if left ≤ right
21         // Traverse up
22         for row ← bottom downto top
23             ADD-TO-LIST(result, matrix[row][left])
24         left ← left + 1
25 return result
```
**Time Complexity**: O(m×n) | **Space Complexity**: O(1)

### **Problem 11: Set Matrix Zeroes (LeetCode #73)**
**Description**: Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. Do it in-place.

**Algorithm: SET-ZEROES(matrix)**
```
1  m ← LENGTH(matrix), n ← LENGTH(matrix[0])
2  first_row_zero ← FALSE, first_col_zero ← FALSE
3  // Check if first row has zero
4  for j ← 0 to n-1
5      if matrix[0][j] = 0
6          first_row_zero ← TRUE
7          break
8  // Check if first column has zero
9  for i ← 0 to m-1
10     if matrix[i][0] = 0
11         first_col_zero ← TRUE
12         break
13 // Use first row and column as markers
14 for i ← 1 to m-1
15     for j ← 1 to n-1
16         if matrix[i][j] = 0
17             matrix[i][0] ← 0
18             matrix[0][j] ← 0
19 // Set zeros based on markers
20 for i ← 1 to m-1
21     for j ← 1 to n-1
22         if matrix[i][0] = 0 or matrix[0][j] = 0
23             matrix[i][j] ← 0
24 // Handle first row and column
25 if first_row_zero
26     for j ← 0 to n-1
27         matrix[0][j] ← 0
28 if first_col_zero
29     for i ← 0 to m-1
30         matrix[i][0] ← 0
```
**Time Complexity**: O(m×n) | **Space Complexity**: O(1)

### **Problem 12: Product of Array Except Self (LeetCode #238)**
**Description**: Given an integer array `nums`, return an array such that `answer[i]` is equal to the product of all elements of `nums` except `nums[i]`.

**Algorithm: PRODUCT-EXCEPT-SELF(nums)**
```
1  n ← LENGTH(nums)
2  result ← array of size n
3  // Left pass
4  result[0] ← 1
5  for i ← 1 to n-1
6      result[i] ← result[i-1] × nums[i-1]
7  // Right pass
8  right ← 1
9  for i ← n-1 downto 0
10     result[i] ← result[i] × right
11     right ← right × nums[i]
12 return result
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

## **Hour 7-8: Linked Lists & Fast/Slow Pointers**

### **Problem 13: Reverse Linked List (LeetCode #206)**
**Description**: Given the head of a singly linked list, reverse the list and return the reversed list.

**Algorithm: REVERSE-LIST(head)**
```
1  prev ← NIL
2  current ← head
3  while current ≠ NIL
4      next_temp ← current.next
5      current.next ← prev
6      prev ← current
7      current ← next_temp
8  return prev
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

### **Problem 14: Linked List Cycle II (LeetCode #142)**
**Description**: Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

**Algorithm: DETECT-CYCLE(head)**
```
1  if head = NIL or head.next = NIL
2      return NIL
3  slow ← head
4  fast ← head
5  // Phase 1: Detect cycle
6  while fast ≠ NIL and fast.next ≠ NIL
7      slow ← slow.next
8      fast ← fast.next.next
9      if slow = fast
10         break
11 if fast = NIL or fast.next = NIL
12     return NIL
13 // Phase 2: Find cycle start
14 slow ← head
15 while slow ≠ fast
16     slow ← slow.next
17     fast ← fast.next
18 return slow
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

### **Problem 15: Merge Two Sorted Lists (LeetCode #21)**
**Description**: You are given the heads of two sorted linked lists. Merge them into one sorted list.

**Algorithm: MERGE-TWO-LISTS(list1, list2)**
```
1  dummy ← new ListNode(0)
2  current ← dummy
3  while list1 ≠ NIL and list2 ≠ NIL
4      if list1.val ≤ list2.val
5          current.next ← list1
6          list1 ← list1.next
7      else
8          current.next ← list2
9          list2 ← list2.next
10     current ← current.next
11 current.next ← list1 ≠ NIL ? list1 : list2
12 return dummy.next
```
**Time Complexity**: O(n + m) | **Space Complexity**: O(1)

### **Problem 16: Remove Nth Node From End of List (LeetCode #19)**
**Description**: Given the head of a linked list, remove the nth node from the end of the list and return its head.

**Algorithm: REMOVE-NTH-FROM-END(head, n)**
```
1  dummy ← new ListNode(0)
2  dummy.next ← head
3  first ← dummy
4  second ← dummy
5  // Move first n+1 steps ahead
6  for i ← 0 to n
7      first ← first.next
8  // Move both pointers until first reaches end
9  while first ≠ NIL
10     first ← first.next
11     second ← second.next
12 // Remove the nth node
13 second.next ← second.next.next
14 return dummy.next
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

## **Hour 9-10: Stack & Queue Patterns**

### **Problem 17: Valid Parentheses (LeetCode #20)**
**Description**: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

**Algorithm: IS-VALID(s)**
```
1  stack ← empty stack
2  mapping ← {')': '(', '}': '{', ']': '['}
3  for char in s
4      if char ∈ mapping
5          top_element ← EMPTY(stack) ? '#' : POP(stack)
6          if mapping[char] ≠ top_element
7              return FALSE
8      else
9          PUSH(stack, char)
10 return EMPTY(stack)
```
**Time Complexity**: O(n) | **Space Complexity**: O(n)

### **Problem 18: Daily Temperatures (LeetCode #739)**
**Description**: Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.

**Algorithm: DAILY-TEMPERATURES(temperatures)**
```
1  n ← LENGTH(temperatures)
2  result ← array of size n initialized to 0
3  stack ← empty stack
4  for i ← 0 to n-1
5      while NOT EMPTY(stack) and temperatures[TOP(stack)] < temperatures[i]
6          prev_index ← POP(stack)
7          result[prev_index] ← i - prev_index
8      PUSH(stack, i)
9  return result
```
**Time Complexity**: O(n) | **Space Complexity**: O(n)

### **Problem 19: Largest Rectangle in Histogram (LeetCode #84)**
**Description**: Given an array of integers heights representing the histogram's bar height, return the area of the largest rectangle in the histogram.

**Algorithm: LARGEST-RECTANGLE-AREA(heights)**
```
1  stack ← empty stack
2  max_area ← 0
3  index ← 0
4  while index < LENGTH(heights)
5      if EMPTY(stack) or heights[index] ≥ heights[TOP(stack)]
6          PUSH(stack, index)
7          index ← index + 1
8      else
9          top ← POP(stack)
10         width ← EMPTY(stack) ? index : index - TOP(stack) - 1
11         area ← heights[top] × width
12         max_area ← MAX(max_area, area)
13 while NOT EMPTY(stack)
14     top ← POP(stack)
15     width ← EMPTY(stack) ? index : index - TOP(stack) - 1
16     area ← heights[top] × width
17     max_area ← MAX(max_area, area)
18 return max_area
```
**Time Complexity**: O(n) | **Space Complexity**: O(n)

### **Problem 20: Implement Queue using Stacks (LeetCode #232)**
**Description**: Implement a first in first out (FIFO) queue using only two stacks.

**Algorithm: MyQueue Class**
```
Class MyQueue:
    stack1 ← empty stack  // for enqueue
    stack2 ← empty stack  // for dequeue

ENQUEUE(x):
1  PUSH(stack1, x)

DEQUEUE():
1  if EMPTY(stack2)
2      while NOT EMPTY(stack1)
3          PUSH(stack2, POP(stack1))
4  return POP(stack2)

PEEK():
1  if EMPTY(stack2)
2      while NOT EMPTY(stack1)
3          PUSH(stack2, POP(stack1))
4  return TOP(stack2)

EMPTY():
1  return EMPTY(stack1) and EMPTY(stack2)
```
**Time Complexity**: O(1) amortized for all operations | **Space Complexity**: O(n)

---

## **Hour 11-12: Binary Search & Sorted Arrays**

### **Problem 21: Binary Search (LeetCode #704)**
**Description**: Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.

**Algorithm: BINARY-SEARCH(nums, target)**
```
1  left ← 0
2  right ← LENGTH(nums) - 1
3  while left ≤ right
4      mid ← left + (right - left) / 2
5      if nums[mid] = target
6          return mid
7      else if nums[mid] < target
8          left ← mid + 1
9      else
10         right ← mid - 1
11 return -1
```
**Time Complexity**: O(log n) | **Space Complexity**: O(1)

### **Problem 22: Search in Rotated Sorted Array (LeetCode #33)**
**Description**: There is an integer array nums sorted in ascending order. Given the array after rotating it and an integer target, return the index of target.

**Algorithm: SEARCH-ROTATED(nums, target)**
```
1  left ← 0
2  right ← LENGTH(nums) - 1
3  while left ≤ right
4      mid ← left + (right - left) / 2
5      if nums[mid] = target
6          return mid
7      if nums[left] ≤ nums[mid]  // Left half is sorted
8          if nums[left] ≤ target < nums[mid]
9              right ← mid - 1
10         else
11             left ← mid + 1
12     else  // Right half is sorted
13         if nums[mid] < target ≤ nums[right]
14             left ← mid + 1
15         else
16             right ← mid - 1
17 return -1
```
**Time Complexity**: O(log n) | **Space Complexity**: O(1)

### **Problem 23: Find Minimum in Rotated Sorted Array (LeetCode #153)**
**Description**: Suppose an array of length n sorted in ascending order is rotated. Find the minimum element.

**Algorithm: FIND-MIN(nums)**
```
1  left ← 0
2  right ← LENGTH(nums) - 1
3  while left < right
4      mid ← left + (right - left) / 2
5      if nums[mid] > nums[right]
6          left ← mid + 1
7      else
8          right ← mid
9  return nums[left]
```
**Time Complexity**: O(log n) | **Space Complexity**: O(1)

### **Problem 24: Search a 2D Matrix (LeetCode #74)**
**Description**: You are given an m x n integer matrix with properties: integers in each row are sorted left to right, and the first integer of each row is greater than the last integer of the previous row.

**Algorithm: SEARCH-MATRIX(matrix, target)**
```
1  if EMPTY(matrix) or EMPTY(matrix[0])
2      return FALSE
3  m ← LENGTH(matrix)
4  n ← LENGTH(matrix[0])
5  left ← 0
6  right ← m × n - 1
7  while left ≤ right
8      mid ← left + (right - left) / 2
9      mid_value ← matrix[mid / n][mid % n]
10     if mid_value = target
11         return TRUE
12     else if mid_value < target
13         left ← mid + 1
14     else
15         right ← mid - 1
16 return FALSE
```
**Time Complexity**: O(log(m×n)) | **Space Complexity**: O(1)

---

## **Hour 13-14: Trees & Depth-First Search**

### **Problem 25: Maximum Depth of Binary Tree (LeetCode #104)**
**Description**: Given the root of a binary tree, return its maximum depth.

**Algorithm: MAX-DEPTH(root)**
```
1  if root = NIL
2      return 0
3  left_depth ← MAX-DEPTH(root.left)
4  right_depth ← MAX-DEPTH(root.right)
5  return 1 + MAX(left_depth, right_depth)
```
**Time Complexity**: O(n) | **Space Complexity**: O(h) where h is height

### **Problem 26: Validate Binary Search Tree (LeetCode #98)**
**Description**: Given the root of a binary tree, determine if it is a valid binary search tree (BST).

**Algorithm: IS-VALID-BST(root)**
```
1  return VALIDATE(root, -∞, +∞)

VALIDATE(node, min_val, max_val):
1  if node = NIL
2      return TRUE
3  if node.val ≤ min_val or node.val ≥ max_val
4      return FALSE
5  return VALIDATE(node.left, min_val, node.val) and
         VALIDATE(node.right, node.val, max_val)
```
**Time Complexity**: O(n) | **Space Complexity**: O(h)

### **Problem 27: Lowest Common Ancestor of a Binary Search Tree (LeetCode #235)**
**Description**: Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

**Algorithm: LOWEST-COMMON-ANCESTOR(root, p, q)**
```
1  while root ≠ NIL
2      if p.val < root.val and q.val < root.val
3          root ← root.left
4      else if p.val > root.val and q.val > root.val
5          root ← root.right
6      else
7          return root
8  return NIL
```
**Time Complexity**: O(h) | **Space Complexity**: O(1)

### **Problem 28: Binary Tree Right Side View (LeetCode #199)**
**Description**: Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

**Algorithm: RIGHT-SIDE-VIEW(root)**
```
1  result ← empty list
2  RIGHT-VIEW-DFS(root, 0, result)
3  return result

RIGHT-VIEW-DFS(node, level, result):
1  if node = NIL
2      return
3  if level = LENGTH(result)
4      ADD-TO-LIST(result, node.val)
5  RIGHT-VIEW-DFS(node.right, level + 1, result)
6  RIGHT-VIEW-DFS(node.left, level + 1, result)
```
**Time Complexity**: O(n) | **Space Complexity**: O(h)

---

## **Hour 15-16: Dynamic Programming Foundations**

### **Problem 29: Climbing Stairs (LeetCode #70)**
**Description**: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Algorithm: CLIMB-STAIRS(n)**
```
1  if n ≤ 2
2      return n
3  prev2 ← 1
4  prev1 ← 2
5  for i ← 3 to n
6      current ← prev1 + prev2
7      prev2 ← prev1
8      prev1 ← current
9  return prev1
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

### **Problem 30: House Robber (LeetCode #198)**
**Description**: You are a robber planning to rob houses along a street. You cannot rob two adjacent houses. Given an array representing the amount of money in each house, return the maximum amount you can rob.

**Algorithm: ROB(nums)**
```
1  if EMPTY(nums)
2      return 0
3  if LENGTH(nums) = 1
4      return nums[0]
5  prev2 ← nums[0]
6  prev1 ← MAX(nums[0], nums[1])
7  for i ← 2 to LENGTH(nums) - 1
8      current ← MAX(prev1, prev2 + nums[i])
9      prev2 ← prev1
10     prev1 ← current
11 return prev1
```
**Time Complexity**: O(n) | **Space Complexity**: O(1)

### **Problem 31: Longest Increasing Subsequence (LeetCode #300)**
**Description**: Given an integer array nums, return the length of the longest strictly increasing subsequence.

**Algorithm: LENGTH-OF-LIS(nums)**
```
1  if EMPTY(nums)
2      return 0
3  dp ← array of size LENGTH(nums) initialized to 1
4  for i ← 1 to LENGTH(nums) - 1
5      for j ← 0 to i - 1
6          if nums[j] < nums[i]
7              dp[i] ← MAX(dp[i], dp[j] + 1)
8  return MAX(dp)
```
**Time Complexity**: O(n²) | **Space Complexity**: O(n)

### **Problem 32: Coin Change (LeetCode #322)**
**Description**: You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins needed to make up that amount.

**Algorithm: COIN-CHANGE(coins, amount)**
```
1  dp ← array of size amount + 1 initialized to amount + 1
2  dp[0] ← 0
3  for i ← 1 to amount
4      for coin in coins
5          if coin ≤ i
6              dp[i] ← MIN(dp[i], dp[i - coin] + 1)
7  return dp[amount] > amount ? -1 : dp[amount]
```
**Time Complexity**: O(amount × n) | **Space Complexity**: O(amount)

---

## **Study Strategy & Tips**

### During Each Session
1. **Read & Understand** (5 minutes per problem)
   - Identify the core problem type
   - Note constraints and edge cases

2. **Plan & Code** (15-20 minutes per problem)
   - Write pseudocode first
   - Implement with clear variable names
   - Test with examples

3. **Optimize & Review** (5-10 minutes per problem)
   - Analyze time/space complexity
   - Consider alternative approaches