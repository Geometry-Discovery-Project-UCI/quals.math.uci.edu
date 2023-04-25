---
draft: true
---

# 2021 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $m$ be the Lebesgue measure on $(\mathbb{R},\mathcal{L})$ and $\nu$ be the counting measure. Show that $\nu$ does not have a Lebesgue decomposition with respect to $m$.

#proof

::

::ProblemBlock{number=2}
#problem
Let $E\subset \mathbb{R}$ be a not necessarily measurable set with $m^*(E)>0$, where $m^*$ is the Lebesgue outer measure given by
$$
m^*(E) = \inf\left\{ \sum_{n\in\mathbb{N}} l(I_n) : I_n \text{ is an open interval for }n\in\mathbb{N}\text{ and }E\subset\bigcup_{n\in\mathbb{N}} I_n \right\}
$$
and $l(I)$ denotes the length of an interval $I\subset\mathbb{R}$. Show that 
$$
\forall \alpha\in(0,1)\,\exists I, \text{ open interval. s.t. } m^*(E\cap I)>\alpha\, m(I)
$$

#proof

::

::ProblemBlock{number=3}
#problem
Let $(X,\mathcal{M},\mu)$ be a measure space and prove that there exists a function $f\in L^1(X,\mu)$ satisfying $\mu([f=0])=0$ if and only if $(X,\mathcal{M},\mu)$ is $\sigma$-finite.

#proof

::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{M},\mu)$ be a probability space, that is, a measure space with $\mu(X)=1$. Let $f$ be a strictly positive $\mathcal{M}$-measurable function on $X$. Prove that
$$
1\leq \left( \int_X f\, d\mu\right)\left(\int_X \frac1f\, d\mu\right)
$$

#proof

::

::ProblemBlock{number=5}
#problem
Suppose that $f\in L^1(\mathbb{R})$ and prove that
$$
\lim_{n\to+\infty} f(n^2x)=0 \quad \text{for a.e. } x\in\mathbb{R}
$$

#proof

::

::ProblemBlock{number=6}
#problem
Let $A$ and $B$ be two measurable subsets of $\mathbb{R}$ with finite measures and define
$$
f(x) = m((A-x)\cap B)
$$
for the Lebesgue measure $m$. Prove that
$$
\int_\mathbb{R} f(x)\, dx = m(B)\, m(A)
$$
justifying all the steps in your calculation.

#proof

::