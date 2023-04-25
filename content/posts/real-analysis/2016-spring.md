---
draft: true
---

# 2016 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Assume that $f\in L^1([0,1])$. Compute
$$
\lim_{k\to+\infty} \int_{[0,1]} |f|^{\frac1k} dx
$$
Justify your answer.

#proof

::

::ProblemBlock{number=2}
#problem
Let $\{f_n\}_{n\geq 1}$ be a sequence of measurable functions on $[0,1]$ and $0\leq f_n\leq 1$ a.e. Assume that
$$
\lim_{n\to+\infty} \int_{[0,1]} f_ng dx = \int_{[0,1]} fg dx
$$
for some $f\in L^1([0,1])$ and any $g\in C([0,1])$. Prove that $0\leq f\leq 1$ a.e.

#proof

::

::ProblemBlock{number=3}
#problem
Let $f,g\in L^2(\mathbb{R},\mathcal{M}_L,\mu_L)$. Show that $f*g$ is a continuous function on $\mathbb{R}$ vanishing at infinity, that is $f*g\in C(\mathbb{R})$ and $\lim_{|x|\to\infty}(f*g)(x) = 0$.

#proof

::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ be a finite measure space, and let $p_1\in (1,\infty]$. Let $\{f_n\}_{n\in\mathbb{N}}$ be a uniformly bounded sequence in $L^{p_1}(X,\mathcal{A},\mu)$, that is, $\{f_n\}_{n\in\mathbb{N}}\subset L^{p_1}(X,\mathcal{A},\mu)$ and $\sup_{n\in\mathcal{N}} ||f_n||_{L^{p_1}}<\infty$. Suppose $f = \lim_{n\to\infty} f_n$ exists $\mu$-a.e. Prove that $f\in L^p(X,\mathcal{A},\mu)$ for all $p\in[1,p_1]$ and $f_n\to f$ in $L^p(X,\mathcal{A},\mu)$ for all $p\in [1,p_1)$.

#proof

::

::ProblemBlock{number=5}
#problem
Let $(X,\mathcal{A},\mu)$ be a measure space, and let $f:X\to [0,\infty)$ be $\mathcal{A}$-measurable. Consider the measure space $(\mathbb{R},\mathcal{B}_\mathbb{R},\mu_L)$, where $\mathcal{B}_\mathbb{R}$ is the Borel $\sigma$-algebra on $\mathbb{R}$ and $\mu_L$ is Lebesgue measure, and form the product measure space $(X\times\mathbb{R},\sigma(\mathcal{A}\times\mathcal{B}_\mathbb{R}),\mu\times\mu_L)$. Define $E\subset X\times\mathbb{R}$ by $(x,y)\in E \Leftrightarrow y\in [0,f(x))$. Prove that $E\in \sigma(\mathcal{A}\times\mathcal{B}_\mathbb{R})$ and $(\mu\times \mu_L)(E) = \int_X f d\mu$.

#proof

::

::ProblemBlock{number=6}
#problem
Let $f\in L^1(\mathbb{R})$, and let $a_1,\ldots,a_k\in\mathbb{R}$ and $b_1,\ldots,b_k\in\mathbb{R}\setminus\{0\}$. Assume that the vectors $\frac{a_j}{b_j}$ are all distinct. Determine
$$
\lim_{t\to\infty} \int \left|\sum_{j=1}^k f(b_jx+ta_j)\right| dx
$$

#proof

::