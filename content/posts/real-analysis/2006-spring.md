# 2006 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $f\in L^p\cap L^q$ with $1\leq p < q\leq\infty$. Prove that $f\in L^r$ for all $p < r < q$.

#proof
See [Problem 5 of 2023 Winter Real Analysis Exam](/posts/real-analysis/2023-winter/).


::

::ProblemBlock{number=2}
#problem
Let $\mathcal M$ be a Lebesgue measurable sets on the real line. Consider two measures on $\mathcal M$: Lebesgue measure $m$ and the counting measure $\tau$, where for $A\in\mathcal M$ we set $\tau(A)$ to be the number of points in $A$. Show that $m$ is absolutely continuous with respect to $\tau$, but that $\dfrac{dm}{d\tau}$ doesn't exist, i.e., there is no measureable function $h$ such that $m(A)=\int_A hd\tau$ for all $A\in\mathcal M$. Does this contradict to the Radon-Nikodym Theorem?

#proof
See [Radon-Nikodym theorem](https://en.wikipedia.org/wiki/Radon–Nikodym_theorem). The Radon-Nikodym derivative doesn't exist because:

1. $m$, $\tau$ live in two different $\sigma$-algebra;
2. $\tau$ is not $\sigma$-finite.
::

::ProblemBlock{number=3}
#problem
Given a measure space $(X,\mathfrak U,\mu)$, let $(f_n\mid n\in\mathbb N)$ and $f$ be extended real-valued $\mathfrak U$-measurable functions on a set $D\in\mathfrak U$ and assume that $f$ is real-valued a.e. on $D$. Suppose there exists a sequence of positive numbers $(\eps_n\mid n\in\mathbb N)$ such that:

1. $\sum_{n\in\mathbb N}\eps_n<\infty$
2. $\int_D|f_n-f|^pd\mu<\eps_n$ for every $n\in\mathbb N$ for some fixed $p\in(0,\infty)$

Show that the sequence $(f_n\mid n\in\mathbb N)$ convergens to $f$ a.e. on $D$.

#proof
This problem is similar to [Problem 4 of 2023 Winter Real Analysis Exam](/posts/real-analysis/2023-spring) and [Problem 2 of 2014 Spring Real Analysis Exam](/posts/real-analysis/2014-spring). Here we provide a proof for the sake of completeness.

Define

$$
E_j=\{x\mid |f_n(x)-f(x)|\geq 1/j \text{ for infinitely many $n$'s}\}
$$

Then from, 

$$
m(E_j)\cdot\infty\leq \int_{E_j}\sum_{n=1}^\infty|f_n-f|^pd\mu\leq\sum_{n=1}^\infty\eps_n<\infty,
$$

we conclude that $m(E_j)=0$. It follows that 

$$
m(\bigcup_{j=1}^\infty E_j)=0
$$ 

and this completes the proof.
::

::ProblemBlock{number=4}
#problem
Let $f$ be a real-valued function of bounded variation on $[a,b]$. Suppose $f$ is absolutely continuous on $[a+\eta,b]$ for every $\eta\in (0,b-a)$. Show that $f$ is absolutely continuous on $[a,b]$.

#proof
We write $f$ as $f=f_1-f_2$, where $f_j$ ($j=1,2$) are monotonic increasign fuctions, and for any $\eta>0$, these two functions are absolutely continuous on $[a+\eta,b]$. Since in addtion, $f_j$ are continuous at $a$, the total variaton of the functions on $[a,a+\eta]$ would be small for small $\eta$. Thus $f_j$ are absolutely continuous on $[a,b]$.
::

::ProblemBlock{number=5}
#problem
Let $\mathcal A$ be a collection of pairwise disjoint subsets of a $\sigma$-finite measure space, each of positive measure. Show that $\mathcal A$ is at most countable.

#proof
We just need to prove that the number of subsets of measure greater than $\eps>0$ is coutable. If the total measure of the space is finite, then this number is finite. If the space is $\sigma$-finite, then this number is at most countable.
::

::ProblemBlock{number=6}
#problem
Let $(X,\mathcal M,\mu)$ be a complete measure space and let $f$ be a nonnegative integrable function on $X$. Let $b(t)=\mu\{ x\in X\mid f(x)\geq t\}$. Show that:

$$
\int_X fd\mu=\int_0^\infty b(t)dt.
$$

#proof
Let

$$
E_t=\{ x\in X\mid f(x)\geq t\}
$$

Then

$$
b(t)=\mu(E_t)=\int_X 1_{E_t}
$$

Using [Fubini's Theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem), we have:

$$
\int_0^\infty b(t) dt=\int_0^\infty\int_X 1_{E_t}\,d\mu \, dt=\int_X \int_0^\infty 1_{E_t}d\mu\, dt=\int_X fd\mu.
::
