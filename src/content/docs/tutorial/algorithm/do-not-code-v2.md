---
title: Do Not Write Code – Write Algorithm
description: Why coding before designing the algorithm is the root cause of failure – and how to fix it.
order: 2
---

I’ve had my fair share of failures—both in real-world projects and high-pressure interviews. Reflecting on those failures, one consistent reason stands out: I started writing code before fully developing the algorithm.

Coding is merely the translation of an algorithm into a programming language. But if the algorithm isn’t fully developed, the code will be flawed—regardless of how fast or syntactically correct it is.

Let me be clear: **never start writing code before your algorithm is complete**. It doesn’t matter what stage of your career you're in—if you have the habit of coding prematurely, break that habit now. I cannot emphasize this enough.

---

## A Personal Example of Failure

In a high-pressure interview, I was asked to solve the classic **“Letter Combinations of a Phone Number”** problem.  
Link: [LeetCode Problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)

The problem seemed straightforward, and I thought I had it figured out. I ignored my own rule and jumped straight into coding. I completed it in 8 minutes. Confidently. But the interviewer quickly found a **critical bug**. Let me show you what happened—and why.

---

## Correct Code (But Still Not an Algorithm!)

```java
Map<Integer, String> map = new HashMap<>();
// populate the map appropriately

List<String> letterCombination(int[] digits) {
    List<String> combinations = new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    backtracking(0, combinations, sb, digits);
    return combinations;
}

void backtracking(int idx, List<String> combinations, StringBuilder sb, int[] digits) {
    if (idx == digits.length) {
        combinations.add(sb.toString());
    } else {
        char[] adjs = map.get(digits[idx]).toCharArray();
        for (char c : adjs) {
            sb.append(c);
            backtracking(idx + 1, combinations, sb, digits);
            sb.deleteCharAt(sb.length() - 1); // proper backtracking step
        }
    }
}
```

---

## Buggy Code I Actually Wrote

```java
List<String> letterCombination(int[] digits) {
    int n = digits.length;
    List<String> combinations = new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    backtracking(0, combinations, sb, n);
    return combinations;
}

void backtracking(int key, List<String> combinations, StringBuilder sb, int n) {
    if (key == n) {
        combinations.add(sb.toString());
    } else {
        char[] adjs = map.get(key).toCharArray(); // ❌ Wrong: key is not a digit from the input
        for (char c : adjs) {
            sb.append(c);
            backtracking(key + 1, combinations, sb, n); // ❌ Also missing actual digits
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}
```

---

## What Went Wrong?

Let’s look at the digit-to-letter mapping:

```java
Map<Integer, String> map = Map.of(
    0, "0", 1, "1", 2, "abc", 3, "def", 
    4, "ghi", 5, "jkl", 6, "mno", 
    7, "pqrs", 8, "tuv", 9, "wxyz"
);
```

Instead of iterating over the **actual digits in the input array**, I mistakenly used the loop index (`key`) to fetch from the map. Why? Because the map keys looked orderly and numeric—it seemed tempting to use them directly for quick coding. A **silly mistake**, easily avoided if I had written out the **algorithm** first.

---

## The Algorithm I Should Have Written

Before writing any code, the logic should have looked something like this:

```
function backtracking(index):
    if index == digits.length:
        add current accumulator to result list
    else:
        currentDigit = digits[index]
        adjList = map[currentDigit]
        for each char in adjList:
            accumulator.add(char)
            backtracking(index + 1)
            accumulator.removeLast()  // backtrack
```

This is algorithmic thinking—describing the *what* and the *how* in a language-neutral, step-by-step way. No syntax distractions. Just flow.

If I had written this first, my implementation would have followed logically. Instead, I was tripped up by premature code.

---

## Code Is Not the Starting Point

Writing code too early forces you to focus on **syntax**, **data structures**, and **edge cases** before the logic is even sound. An algorithm, on the other hand, captures the essence of the solution in plain structured thinking.

You *can* write algorithms in pseudocode, or even in your preferred language—but don’t write **code** until the **algorithm is complete**.

---

## Final Words

> "Coding is to programming what typing is to writing."  
> — **Leslie Lamport**

Don’t start typing before you know what you're saying.

Write the algorithm first. Code comes second.
