---
draft: true
---

# 2019 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $f_n$ be a sequence of functions in $L^\infty([0,1])$ that converge to a function $f\in L^\infty([0,1])$ in $L^2([0,1])$. Prove, or disprove by example, that:

(a) $f_n$ converge to $f$ in $L^1([0,1])$

(b) $f_n$ converge to $f$ in $L^3([0,1])$

#proof

::

::ProblemBlock{number=2}
#problem
(a) Show that any sequence $f_n$ of non-negative integrable functions on $[0,1]$ with
$$
\int_0^1 f_n^3 \, dx \leq \frac1{n^2}
$$
must converge to zero almost everywhere.

(b) Is there a sequence $g_n$ of non-negative integrable functions on $[0,1]$ satisfying
$$
\int_0^1 g_n^3 \, dx \to 0
$$
which does not converge to zero almost everywhere? Explain.

#proof

::

::ProblemBlock{number=3}
#problem
Assume that $\nu$ and $\mu$ are two finite positive measures on a measure space $(X,M)$. Prove that $\nu$ is absolutely continuous with respect to $\mu$ if and only if $\lim_{n\to\infty} (\nu-n\mu)_+=0$.

#proof

::

::ProblemBlock{number=4}
#problem
We say a function $f:[-1,1]\to \mathbb{R}$ is convex if
$$
f(tx+(1-t)y) \leq tf(x) + (1-t)f(y)
$$
for all $t\in[0,1]$ and $x,y\in [-1,1]$.

(a) Let $f(x)$ be a $C^1$ convex function on $[-1,1]$. Show that $f''$ exists Lebesgue almost everywhere.

(b) Does there exist a $C^1$ convex function $f$ on $[-1,1]$ such that $f''$ equals zero almost everywhere, but $f$ is not linear? Either construct or prove it is impossible.

#proof

::

::ProblemBlock{number=5}
#problem
Let $f\in L^1(\mathbb{R})$ and let $g$ be the 1-periodic function on $\mathbb{R}$ with $g(x) = 1-2x$ for $0\leq x<1$. Show that
$$
\lim_{t\to\infty} \int_\mathbb{R} f(x)g(x\sqrt{t}) \, dx = 0
$$

#proof

::

::ProblemBlock{number=6}
#problem
Let $f$ be a twice continuously differentiable function on $\mathbb{R}$ with compact support. Show that
$$
||f'||_{L^2(\mathbb{R})} \leq \frac12 \left(||f||_{L^2(\mathbb{R})} + ||f''||_{L^2(\mathbb{R})}\right)
$$

#proof

::