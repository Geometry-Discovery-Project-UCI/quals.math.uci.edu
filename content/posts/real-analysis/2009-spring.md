---
draft: true
---

# 2009 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $(X,\mathcal{A},\mu)$ be a measure space. Let $(f_n : n\in\N)$ and $f$ be real-valued $\mathcal{A}$-measurable functions on a set $D\in\mathcal{A}$. Suppose $f_n\xrightarrow{\mu} f$ on $D$, that is, $(f_n : n\in\N)$ converges to $f$ in measure $\mu$ on $D$. Let $F$ be a real-valued uniformly continuous function on $\R$. Show that $F\circ f_n\xrightarrow{\mu} F\circ f$ on $D$.

#proof

::

::ProblemBlock{number=2}
#problem
(a) Let $f\in L^p([0,10])$, $p\geq 1$. Prove that $\displaystyle \lim_{t\downarrow 1} (t-1)^{\frac{1}{p}-1} \int_1^t f(s)\, ds =0$.

(b) Suppose $\displaystyle \int_0^\infty x^{-2}|f|^5\, dx < \infty$. Prove that $\displaystyle \lim_{t\downarrow 0} t^{-6/5} \int_0^t f(x)\, dx = 0$.

#proof

::

::ProblemBlock{number=3}
#problem
Let $f_n(x) = \frac{n}{2}\chi_{[-\frac{1}{n},\frac{1}{n}]}$. Prove that for $g\in L^1(\R)$,
$$
\int \left| \int f_n(y-x)g(x)\, dx - g(y)\right| \, dy\to 0 \text{ as } n\to\infty.
$$

#proof

::

::ProblemBlock{number=4}
#problem
Suppose $f$ is a bounded nonnegative function on $(X,\mu)$ with $\mu(X)=\infty$. Show that $f$ is integrable if and only if
$$
\sum_{n=0}^\infty \frac{1}{2^n} \mu\left(\left\{ x\in X : f(x)>\frac{1}{2^n} \right\}\right) < \infty
$$

#proof

::

::ProblemBlock{number=5}
#problem
Let $f$ be an element and $(f_n : n\in \N)$ be a sequence in $L^p(X,\mathcal{A},\mu)$ where $p\in[1,\infty)$ such that $\lim_{n\to\infty}\| f_n-f\|_p=0$. Show that for every $\eps>0$ there exists $\delta>0$ such that for all $n\in \N$ we have
$$
\int_E |f_n|^p\, d\mu < \eps \text{ for every } E\in\mathcal{A} \text{ such that } \mu(E)<\delta.
$$

#proof

::

::ProblemBlock{number=6}
#problem
Let $(X,\Sigma,\mu)$ be a measure space with $\mu(X)<\infty$, and let $\Sigma_0$ be a sub-$\sigma$-algebra of $\Sigma$. Given an integrable function $f$ on $(X,\Sigma,\mu)$, show that there is a $\Sigma_0$-measurable function $f_0$, such that
$$
\int_X f\, g\, d\mu = \int_X f_0\, g\, d\mu
$$
for every $\Sigma_0$-measurable function $g$ such that $f\, g$ is integrable. (Hint: Use the Radon-Nikodym Theorem.)

#proof

::