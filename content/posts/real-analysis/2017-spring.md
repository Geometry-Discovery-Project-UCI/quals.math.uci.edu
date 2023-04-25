---
draft: true
---

# 2017 Spring Real Analysis

::ProblemBlock{number=1}
#problem
There are five separate statements listed below. For each, say whether it is true or false. For true statement cite an appropriate theorem or give a justification. For false statements provide counterexamples.

If $E_n$ is a sequence of measurable sets in a measure space $(X,\mu)$ such that $\mu(E_n)\to 0$, and $f:X\to \mathbb{R}$ is measurable, is it true that you can conclude that $\int_{E_n} f\, d\mu \to 0$ if

(a) $f\geq 0$

(b) $E_n$ are nested and decreasing

(c) $X=\mathbb{R}^n$ and $f$ is continuous

(d) $X=\mathbb{R}^n$ and $f$ is locally integrable

(e) $f\in L^1(X,\mu)$

#proof

::

::ProblemBlock{number=2}
#problem
Consider Lebesgue measure on the real line.

Let $X\subset \mathbb{R}$ be a measurable subset, and consider a sequence of real measurable function $f_n$. Suppose that $f_n\to 0$ a.e. in $X$. If $\int_X f_n^4\, dx \leq 1$, is it true that
$$
\lim_{n\to\infty} \int_X |f_n|\, dx = 0
$$
if

(a) $X=[0,1]$

(b) $X=\mathbb{R}$

Prove or give a counterexample.

#proof

::

::ProblemBlock{number=3}
#problem
Let $f$ be a measurable function on $[0,1]$. Assume that for any $t\geq 0$, $m\{|f|\geq t\}\leq \frac1{t^2}$. Show that $f\in L^1([0,1])$.

#proof

::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ be a $\sigma$-finite measure space with $\mu(X)=\infty$.

(a) Prove that there exist $\{B_n\}_{n\in\mathbb{N}}\subset\mathcal{A}$, disjoint, such that $1\leq \mu(B_n)<\infty$ for all $n\in\mathbb{N}$ and $X = \bigcup_{n\in\mathbb{N}} B_n$.

(b) Prove that there exists an $\mathcal{A}$-measurable real-valued funtion $f$ on $X$ such that $f\notin L^1$ but $f\in L^p$ for all $p\in (1,\infty)$.

#proof

::

::ProblemBlock{number=5}
#problem
Let $(X,\mathcal{A},\mu)$ be a measure space. Show that

(a) $L^1(X,\mathcal{A},\mu)\cap L^\infty(X,\mathcal{A},\mu) = \bigcap_{p\in[1,infty]} L^p(X,\mathcal{A},\mu)$

(b) It is not always true that $L^1(X,\mathcal{A},\mu)\cup L^\infty(X,\mathcal{A},\mu) \supset \bigcap_{p\in(1,\infty)} L^p(X,\mathcal{A},\mu)$

#proof

::

::ProblemBlock{number=6}
#problem
Let $U$ be open in $\mathbb{R}^2$. Show that $U$ is equal to the union of pairwise disjoint open balls and a set of Lebesgue measure zero.

Hint: First show there are disjoint open balls $B_i\subset U$ with $m(\bigcup_{i=1}^\infty B_i) > \frac{m(U)}{5}$.

#proof

::