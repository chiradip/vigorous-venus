---
title: Do Not Write Code - Write Algorithm
description: Do Not Write Code - Write Algorithm.
order: 2
draft: true
---

I have my fair share of failure in real life and in interviews. The biggest reason for the failure was writing code before the algorithm was fully developed. Coding is translating an algorithm into coding, but we do bad coding without developing the algorithm fully. The key principle is - develop the algorithm fully before writing a single line of code. No matter what stage of your career you are at; if you have the habit of not fully developing algorithms before you start to code, break that habit completely. I can’t stress enough on this.

Let me give you a personal example of failure. In a high pressure interview I was asked to solve "Letter Combinations of a Phone Number" problem. Leetcode link of the problem is here https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/, it was very clear to me how to solve the problem, at least that's what I thought, I broke my own rule and started coding, finished coding in about 8 minutes. The interviewer found a severe bug in my code. Let us analyze the bug and let me tell you why that bug appeared.

### Correct Code - not algorithm yet
    Map<Integer, String> map = new HashMap<>(); 
	// populate map here
	
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
			for (char c: adjs) {
				sb.append(c);
				backracking(idx + 1; combinations, sb, digits);
				sb.removeLast();
			}
		}
	}

### Incorrect Code 
The above code is the right code - the wrong one is below 

	
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
			char[] adjs = map.get(key).toCharArray();
			for (char c: adjs) {
				sb.append(c);
				backracking(key + 1; combinations, sb, digits);
				sb.removeLast();
			}
		}
	}

### The mistake 
The mistake was, due to... lets look at the phone characters mapping first.

	Map<Integer, List<Character>> map = Map.of(0, "0", 1, "1", 2, "abc", 3, "def", 
			4, "ghi", 5, "jkl", 6, "mno", 7, "pqrs", 8, "tuv", 9, "wxyz");

Notice I was iterating over the keys of the map instead of iterating over the `int[]`, Why? The map keys looked perfect in ASC sequence and appeared fair game for `ASC` iteration for fast coding. Very silly and should not be done at all. If I wrote an algorithm instead, this problem would not have happened. At one point I would have to write like the following in algorithm:

### Algorithm 

    backtracking(index: Int) is 
		-- Get the the current digit at the current index
		currentChar := digits[currentIndex]
		-- Get the possible characters against the current digit from the reference map
		adjList := refMap.get(currentChar)
		-- Iterate over the adjacency List (adjList) 
		for each (substitute in adjList) ->
			-- accumulate the substitute until last index 
			accumulator.add(substitute)
			-- find the next list of substitute 
			call backtracking(index + 1, accumulator)
			-- delete the last character from the accumulator
			-- thats the rule of backtracking
			accumulator.delete(:-1) // delete last

That's my friend. It is essentially technically coded in English with clarity. Coding in a particular language forces us to care about the language specific features and not the flow of the code itself. Having said all these, you can always write algorithms in a language notation - but write algorithms not code. I hope it is clear now. 

“Coding is to programming, what typing is to writing”  --Leslie Lamport



