---
draft: true
---

# 2015 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Show that if $f\in L^4(\mathbb{R})$ then
$$
\lim_{c\to 1}\int_\mathbb{R} |f(cx)-f(x)|^4 dx = 0
$$

#proof

::

::ProblemBlock{number=2}
#problem
Let $f_n:(0,\infty)\to\mathbb{R}$, $n=1,2,\ldots$ be a sequence of Lebesgue measurable functions such that $f_n\to f$ a.e. as $n\to\infty$. Assume that there exists $g:(0,\infty)\to\mathbb{R}$ such that $|f_n|\leq g$, $n=1,2,\ldots$ and $g\in L^1((0,a))$ for all $0<a<\infty$. Assume furthermore that
$$
\int_1^\infty |f_n(\sqrt{x})|dx\leq C \qquad n=1,2,\ldots
$$
for some constant $C>0$. Show that $f_n\in L^1((0,\infty))$, $f\in L^1((0,\infty))$ and $f_n\to f$ in $L^1((0,\infty))$ as $n\to\infty$.

#proof

::

::ProblemBlock{number=3}
#problem
Assume that $f\in C^1((0,1))$ and
$$
\int_{(0,1)} x|f'|^p dx<+\infty \qquad \text{for some } p>2
$$
Show that $\lim_{x\to 0^+} f(x)$ exists.

#proof

::

::ProblemBlock{number=4}
#problem
Suppose that $E\subset[0,1]^2$ is measurable. Denote
$$
E_x = \{ y\in[0,1] : (x,y)\in E \} \quad\text{ and }\quad E_y = \{ x\in [0,1] : (x,y)\in E \}
$$
Show that if $m(E_x)=0$ for a.e. $x\in[0,\frac12]$, then
$$
m(\{y\in[0,1] : m(E_y)=1 \}) \leq \frac12
$$

#proof

::

::ProblemBlock{number=5}
#problem
Let $f\in L^p(\mathbb{R})$, $1<p<\infty$, and let $\alpha>1-\frac1p$. Show that the series
$$
\sum_{n=1}^\infty \int_n^{n+n^{-\alpha}} |f(x+y)|dy
$$
converges for a.e. $x\in\mathbb{R}$.

#proof

::

::ProblemBlock{number=6}
#problem
Suppose $E\subset \mathbb{R}$ is measurable and $E = E+\frac1n$ for every natural number $n\geq 1$. Show that either $m(E)=0$ or $m(E^c)=0$.

#proof

::