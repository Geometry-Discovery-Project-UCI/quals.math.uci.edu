---
draft: true
---

# 2010 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Suppose $f$ is Lipschitz continuous in $[0,1]$, that is, $|f(x)-f(y)|\leq L|x-y|$ for some constant $L$. Show that

(a) $m(f(E))=0$ if $m(E)=0$.

(b) If $E$ is measurable, then $f(E)$ is also measurable.

#proof

::

::ProblemBlock{number=2}
#problem
Let $\{q_k\}$ be all the rational numbers in $[0,1]$. Show that
$$
\sum_{k=1}^\infty \frac{1}{k^2} \frac{1}{\sqrt{|x-q_k|}} \text{ converges a.e. in } [0,1].
$$

#proof

::

::ProblemBlock{number=3}
#problem
Suppose that $f(t) = \int_0^t g(s)\, ds$ where $g(s)$ is integrable over $[0,1]$. Show that
$$
\lim_{n\to\infty} \sum_{k=0}^{2^n-1}\left| f\left(\frac{k+1}{2^n}\right)-f\left(\frac{k}{2^n}\right)\right|^2 = 0.
$$

#proof

::

::ProblemBlock{number=4}
#problem
Let $f$ be a real-valued uniformly continuous function on $[0,\infty)$. Show that if $f$ is Lebesgue integrable on $[0,\infty)$, then $\lim_{x\to\infty} f(x)=0$.

#proof

::

::ProblemBlock{number=5}
#problem
Let $(X,\mathfrak{A},\mu)$ be a measure space and let $f$ be an extended real-valued $\mathfrak{A}$-measurable function on $X$ such that $\int_X |f|^p\, d\mu < \infty$ for some $p\in(0,\infty)$. Show that
$$
\lim_{\lambda\to\infty} \lambda^p \mu(\{x : |f(x)|\geq\lambda\}) = 0.
$$

#proof

::

::ProblemBlock{number=6}
#problem
Consider the Lebesgue measurable space $(\R,\mathfrak{M}_L,\mu_L)$ on $\R$. Let $f$ be a $\mu_L$-integrable extended real-valued $\mathfrak{M}_L$-measurable function on $\R$. Show that
$$
\lim_{h\to\infty} \int_\R |f(x+h)-f(x)|\, \mu_L(dx) = 0.
$$

#proof

::