---
title: Mathematical Foundations
description: A Rigorous Introduction, For Gifted High School Graduates
sidebar_label: Overview
draft: false
---


Before we can rigorously analyze algorithms, we must establish the mathematical language and reasoning tools that will serve as our foundation. This chapter introduces the essential concepts from set theory, logic, proof techniques, and combinatorics that underpin all algorithmic analysis.

While these topics may seem abstract, they provide the precise vocabulary needed to discuss computational problems and their solutions. Every algorithm we encounter will be described using sets, analyzed using logical reasoning, proven correct through formal techniques, and evaluated using combinatorial methods.

## 1.1 Set Theory

A **set** is a collection of distinct objects, called **elements** or **members**. Sets form the foundation of mathematical discourse because they allow us to discuss collections of objects with precision.

### 1.1.1 Basic Definitions and Notation

We write $a \in S$ to denote that $a$ is an element of set $S$, and $a \notin S$ to denote that $a$ is not an element of $S$. Sets can be specified in several ways:

**Roster notation**: $S = \{1, 2, 3, 4, 5\}$
**Set-builder notation**: $S = \{x : x \text{ is a positive integer and } x \leq 5\}$

Two sets are **equal** if they contain exactly the same elements. Order and repetition do not matter: $\{1, 2, 3\} = \{3, 1, 2\} = \{1, 1, 2, 3\}$.

**Important sets**:
- $\mathbb{N} = \{1, 2, 3, \ldots\}$ (natural numbers)
- $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$ (integers)
- $\mathbb{Q}$ (rational numbers)
- $\mathbb{R}$ (real numbers)
- $\emptyset$ (empty set)

### 1.1.2 Set Operations

Given sets $A$ and $B$:

**Union**: $A \cup B = \{x : x \in A \text{ or } x \in B\}$
**Intersection**: $A \cap B = \{x : x \in A \text{ and } x \in B\}$
**Difference**: $A \setminus B = \{x : x \in A \text{ and } x \notin B\}$
**Complement**: $\overline{A} = \{x : x \notin A\}$ (relative to some universal set)

**Exercise 1.1**: Let $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$. Find $A \cup B$, $A \cap B$, $A \setminus B$, and $B \setminus A$.

### 1.1.3 Relations Between Sets

Set $A$ is a **subset** of set $B$, written $A \subseteq B$, if every element of $A$ is also an element of $B$. Formally:
$$A \subseteq B \iff \forall x (x \in A \rightarrow x \in B)$$

If $A \subseteq B$ and $A \neq B$, then $A$ is a **proper subset** of $B$, written $A \subset B$.

**Theorem 1.1**: For any sets $A$, $B$, and $C$:
1. $A \subseteq A$ (reflexivity)
2. If $A \subseteq B$ and $B \subseteq A$, then $A = B$ (antisymmetry)
3. If $A \subseteq B$ and $B \subseteq C$, then $A \subseteq C$ (transitivity)

**Exercise 1.2**: Prove that if $A \subseteq B$, then $A \cap B = A$ and $A \cup B = B$.

### 1.1.4 Cartesian Products and Relations

The **Cartesian product** of sets $A$ and $B$ is:
$$A \times B = \{(a, b) : a \in A \text{ and } b \in B\}$$

A **relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$. We write $aRb$ or $(a, b) \in R$ to indicate that $a$ is related to $b$.

**Exercise 1.3**: Let $A = \{1, 2\}$ and $B = \{a, b, c\}$. Find $A \times B$ and $B \times A$. Are they equal?

### 1.1.5 Functions

A **function** $f: A \rightarrow B$ is a special relation where each element of $A$ is related to exactly one element of $B$. We write $f(a) = b$ to denote that $a$ maps to $b$.

- $A$ is the **domain** of $f$
- $B$ is the **codomain** of $f$
- The **range** of $f$ is $\{b \in B : \exists a \in A, f(a) = b\}$

A function $f: A \rightarrow B$ is:
- **Injective** (one-to-one) if $f(a_1) = f(a_2)$ implies $a_1 = a_2$
- **Surjective** (onto) if for every $b \in B$, there exists $a \in A$ such that $f(a) = b$
- **Bijective** if it is both injective and surjective

**Exercise 1.4**: Determine whether the function $f: \mathbb{N} \rightarrow \mathbb{N}$ defined by $f(n) = 2n$ is injective, surjective, or bijective.

## 1.2 Logic and Proof Techniques

Mathematical logic provides the framework for precise reasoning about mathematical statements. Understanding logical structure is essential for constructing and evaluating proofs.

### 1.2.1 Propositions and Logical Connectives

A **proposition** is a statement that is either true or false. We use variables like $p$, $q$, $r$ to represent propositions.

**Logical connectives**:
- **Negation**: $\neg p$ ("not $p$")
- **Conjunction**: $p \land q$ ("$p$ and $q$")
- **Disjunction**: $p \lor q$ ("$p$ or $q$")
- **Implication**: $p \rightarrow q$ ("if $p$ then $q$")
- **Biconditional**: $p \leftrightarrow q$ ("$p$ if and only if $q$")

**Truth tables**:

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ | $p \rightarrow q$ | $p \leftrightarrow q$ |
|-----|-----|----------|-------------|------------|-------------------|-----------------------|
| T   | T   | F        | T           | T          | T                 | T                     |
| T   | F   | F        | F           | T          | F                 | F                     |
| F   | T   | T        | F           | T          | T                 | F                     |
| F   | F   | T        | F           | F          | T                 | T                     |

**Exercise 1.5**: Construct truth tables for $(p \rightarrow q) \land (q \rightarrow p)$ and $p \leftrightarrow q$. What do you observe?

### 1.2.2 Logical Equivalences

Two propositions are **logically equivalent** if they have the same truth value under all possible assignments of truth values to their variables.

**Important equivalences**:
- **De Morgan's Laws**: $\neg(p \land q) \equiv \neg p \lor \neg q$, $\neg(p \lor q) \equiv \neg p \land \neg q$
- **Contrapositive**: $p \rightarrow q \equiv \neg q \rightarrow \neg p$
- **Double negation**: $\neg(\neg p) \equiv p$
- **Distributivity**: $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$

**Exercise 1.6**: Prove that $p \rightarrow q \equiv \neg p \lor q$ using truth tables.

### 1.2.3 Quantifiers

**Universal quantifier**: $\forall x P(x)$ means "for all $x$, $P(x)$ is true"
**Existential quantifier**: $\exists x P(x)$ means "there exists an $x$ such that $P(x)$ is true"

**Quantifier negation**:
- $\neg(\forall x P(x)) \equiv \exists x \neg P(x)$
- $\neg(\exists x P(x)) \equiv \forall x \neg P(x)$

**Exercise 1.7**: Express the following statements using quantifiers:
1. Every positive integer has a successor
2. There exists a real number that is not rational
3. For every real number, there exists a larger real number

### 1.2.4 Proof Techniques

#### Direct Proof
To prove $p \rightarrow q$, assume $p$ is true and show that $q$ must be true.

**Example**: Prove that if $n$ is an even integer, then $n^2$ is even.
*Proof*: Suppose $n$ is even. Then $n = 2k$ for some integer $k$. Therefore, $n^2 = (2k)^2 = 4k^2 = 2(2k^2)$. Since $2k^2$ is an integer, $n^2$ is even. □

#### Proof by Contradiction
To prove $p$, assume $\neg p$ and derive a contradiction.

**Example**: Prove that $\sqrt{2}$ is irrational.
*Proof*: Suppose $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{a}{b}$ where $a$ and $b$ are integers with $\gcd(a,b) = 1$. Squaring both sides: $2 = \frac{a^2}{b^2}$, so $2b^2 = a^2$. This means $a^2$ is even, so $a$ is even. Let $a = 2c$. Then $2b^2 = 4c^2$, so $b^2 = 2c^2$. This means $b^2$ is even, so $b$ is even. But if both $a$ and $b$ are even, then $\gcd(a,b) \geq 2$, contradicting our assumption. Therefore, $\sqrt{2}$ is irrational. □

#### Proof by Contrapositive
To prove $p \rightarrow q$, prove $\neg q \rightarrow \neg p$.

**Example**: Prove that if $n^2$ is odd, then $n$ is odd.
*Proof*: We prove the contrapositive: if $n$ is even, then $n^2$ is even. If $n$ is even, then $n = 2k$ for some integer $k$. Therefore, $n^2 = 4k^2 = 2(2k^2)$, which is even. □

#### Mathematical Induction
To prove $\forall n \geq n_0, P(n)$:
1. **Base case**: Prove $P(n_0)$
2. **Inductive step**: Prove $P(k) \rightarrow P(k+1)$ for arbitrary $k \geq n_0$

**Example**: Prove that $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$ for all $n \geq 1$.
*Proof*: 
*Base case*: For $n = 1$, LHS $= 1$ and RHS $= \frac{1 \cdot 2}{2} = 1$. ✓
*Inductive step*: Assume the formula holds for $k$. Then:
$$1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$
This is the formula for $n = k+1$. By induction, the formula holds for all $n \geq 1$. □

**Exercise 1.8**: Prove by induction that $2^n > n$ for all $n \geq 1$.

## 1.3 Basic Combinatorics

Combinatorics studies methods of counting, which is essential for analyzing algorithm efficiency and correctness.

### 1.3.1 Fundamental Counting Principles

**Addition Principle**: If task $A$ can be done in $m$ ways and task $B$ can be done in $n$ ways, and the tasks cannot be done simultaneously, then choosing to do either $A$ or $B$ can be done in $m + n$ ways.

**Multiplication Principle**: If task $A$ can be done in $m$ ways and task $B$ can be done in $n$ ways, then doing both $A$ and $B$ can be done in $m \times n$ ways.

**Exercise 1.9**: A restaurant offers 5 appetizers, 8 main courses, and 4 desserts. How many different three-course meals are possible?

### 1.3.2 Permutations

A **permutation** is an arrangement of objects in a specific order.

**Permutations of $n$ distinct objects**: $n!$ (read "$n$ factorial")
**Permutations of $r$ objects from $n$ distinct objects**: $P(n,r) = \frac{n!}{(n-r)!}$

**Exercise 1.10**: In how many ways can 8 people be arranged in a line? In how many ways can 3 people be selected from 8 people and arranged in a line?

### 1.3.3 Combinations

A **combination** is a selection of objects where order doesn't matter.

**Combinations of $r$ objects from $n$ distinct objects**: $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$

**Properties of binomial coefficients**:
- $\binom{n}{0} = \binom{n}{n} = 1$
- $\binom{n}{r} = \binom{n}{n-r}$
- $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$ (Pascal's identity)

**Exercise 1.11**: Prove Pascal's identity both algebraically and combinatorially.

### 1.3.4 The Binomial Theorem

**Theorem 1.2 (Binomial Theorem)**: For any real numbers $x$ and $y$ and non-negative integer $n$:
$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$$

**Exercise 1.12**: Use the binomial theorem to expand $(x + 2)^4$.

### 1.3.5 The Pigeonhole Principle

**Theorem 1.3 (Pigeonhole Principle)**: If $n$ pigeons are placed in $m$ pigeonholes and $n > m$, then at least one pigeonhole contains more than one pigeon.

**Generalized Pigeonhole Principle**: If $n$ pigeons are placed in $m$ pigeonholes, then at least one pigeonhole contains at least $\lceil n/m \rceil$ pigeons.

**Exercise 1.13**: Prove that among any 13 people, at least two have birthdays in the same month.

### 1.3.6 Inclusion-Exclusion Principle

**Theorem 1.4 (Inclusion-Exclusion Principle)**: For finite sets $A_1, A_2, \ldots, A_n$:
$$|A_1 \cup A_2 \cup \cdots \cup A_n| = \sum_{i} |A_i| - \sum_{i < j} |A_i \cap A_j| + \sum_{i < j < k} |A_i \cap A_j \cap A_k| - \cdots$$

**Exercise 1.14**: Use inclusion-exclusion to find the number of integers from 1 to 1000 that are divisible by 2, 3, or 5.

## 1.4 Connecting Foundations to Algorithms

These mathematical foundations directly support algorithmic analysis:

**Set theory** provides the vocabulary for describing input domains, output ranges, and data structures. Every algorithm operates on sets of data.

**Logic** enables precise specification of algorithm correctness. We express what an algorithm should do using logical statements, then prove these statements hold.

**Proof techniques** allow us to rigorously demonstrate that algorithms work correctly. We'll use direct proof, contradiction, and induction repeatedly.

**Combinatorics** gives us tools to count operations, analyze worst-case scenarios, and compute probabilities in randomized algorithms.

**Exercise 1.15**: Consider the problem of finding the maximum element in a set $S = \{a_1, a_2, \ldots, a_n\}$ of distinct integers. 
1. Express the problem statement using set theory and logic
2. Describe an algorithm to solve this problem
3. Prove your algorithm is correct
4. Count the number of comparisons your algorithm makes

## Summary

This chapter established the mathematical language we'll use throughout our study of algorithms. We covered:

- **Set theory**: Basic operations, relations, and functions
- **Logic**: Propositions, quantifiers, and logical reasoning
- **Proof techniques**: Direct proof, contradiction, contrapositive, and induction
- **Combinatorics**: Counting principles, permutations, combinations, and important theorems

These tools provide the foundation for rigorous algorithm analysis. In the next chapter, we'll begin applying these concepts to analyze the correctness and efficiency of basic algorithms.

**Key takeaways**:
1. Precision in mathematical language prevents ambiguity in algorithm specification
2. Logical reasoning enables rigorous correctness proofs
3. Combinatorial analysis quantifies algorithm performance
4. Mathematical maturity develops through practice with formal reasoning

The exercises in this chapter are essential for developing the mathematical fluency needed for advanced algorithm analysis. Work through them systematically before proceeding to the next chapter.

## Selected Exercise Solutions

**Solution 1.1**: $A \cup B = \{1, 2, 3, 4, 5, 6\}$, $A \cap B = \{3, 4\}$, $A \setminus B = \{1, 2\}$, $B \setminus A = \{5, 6\}$.

**Solution 1.8**: 
*Base case*: For $n = 1$, $2^1 = 2 > 1$. ✓
*Inductive step*: Assume $2^k > k$. Then $2^{k+1} = 2 \cdot 2^k > 2k$. Since $k \geq 1$, we have $2k \geq k + 1$, so $2^{k+1} > k + 1$. By induction, $2^n > n$ for all $n \geq 1$. □