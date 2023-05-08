---
draft: true
---

# 2013 Spring Real Analysis

::ProblemBlock{number=1}
#problem
For each of (a) and (b) either prove or give a counterexample. Suppose that for every $n\in \N$, $f_n:X\to [0,1]$ is a $\mu$-measurable function, and
$$
\lim_{n\to\infty} \int f_n\, d\mu = 0.
$$
Then

(a) $f_n\to 0$ in measure

(b) for $\mu$-almost all $x\in X$, $\lim_{n\to\infty} f_n(x)=0$.

#proof

::

::ProblemBlock{number=2}
#problem
Let $f_n:\R\to\R$ be Borel measurable for every $n\in \N$. Define $E$ to be the set of points in $\R$ such that $\lim_{n\to\infty} f_n(x)$ exists and is finite. Show that $E$ is a Borel measurable set.

#proof

::

::ProblemBlock{number=3}
#problem
Does there exist a nowhere dense subset of $[0,1]^2\subset\R^2$

(a) of Lebesgue measure greater than 9/10?

(b) of Lebesgue measure 1?

If yes, construct such a set, if no, prove why not.

#proof

::

::ProblemBlock{number=4}
#problem
Let $\lambda\in (0,1)$, and $f\in L^1([0,1])$. Show that the integral
$$
F(x) = \int_0^x \frac{1}{(x-t)^\lambda}f(t)\, dt
$$
exists a.e. $x\in[0,1]$ and that $F\in L^1([0,1])$.

#proof

::

::ProblemBlock{number=5}
#problem
Show that for $g\in L^3([0,1])$, $f\in L^{3/2}([0,1])$
$$
\int_0^1 \cos(2\pi nx)g(x)f(x)\, dx \to 0
$$
as $n\to\infty$.

#proof

::

::ProblemBlock{number=6}
#problem
Assume that $f,f'\in L^1(\R)$. Let
$$
g(x) = \sum_{k=0}^\infty |f(x+k)|.
$$
Show that $g\in L^\infty(I)$ for any bounded interval $I$. (Hint: First prove for intervals with length $\leq\frac12$.)

#proof

::