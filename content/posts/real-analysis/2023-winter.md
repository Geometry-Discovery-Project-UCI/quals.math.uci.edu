# 2023 Winter Real Analysis

::ProblemBlock{number=1}
#problem
Consider a measure space $(X,\mathcal{A},\mu)$ and a sequence of measurable sets $E_n$, $n\in\mathbb{N}$ such that
$$
\sum_{n=1}^\infty \mu(E_n) < \infty
$$
Show that almost every $x\in X$ is an element of a most finitely many $E_n$'s.

#proof

::

::ProblemBlock{number=2}
#problem
Let $(X,\mathcal{B},\mu)$ be a $\sigma$-finite measure space and let $f:X\to [0,\infty)$ be measurable. Let $E:=\{ (x,y)\in X\times[0,\infty) : y\leq f(x) \}$. Assign the Lebesgue measure $m$ on $[0,\infty)$. Prove that $E$ is a measurable set on $X\times [0,\infty)$ with respect to the product measure $\mu\times m$ and that
$$
(\mu\times m)(E) = \int_X f\, d\mu
$$

#proof

::

::ProblemBlock{number=3}
#problem
Suppose that $(X,\mathcal{B},\mu)$ and $(Y,\mathcal{C},\nu)$ are measure spaces and $\Phi:X\to Y$ is a measurable map. Moreover, assume that for any measurable set $E\subset Y$, we have
$$
\nu(E) = \mu(f^{-1}(E))
$$
Then for any measurable function $f:Y\to\mathbb{C}$, prove that $f\in L^1(\nu)$ if and only if $f\circ \Phi\in L^1(\mu)$, in which case,
$$
\int_Y f\, d\nu = \int_X (f\circ \Phi)\, d\mu
$$

#proof

::

::ProblemBlock{number=4}
#problem
Let $f_k\in L^1([0,1])$ for $k\geq 1$ (with respect to Lebesgue measure), and assume that $\lim_{k\to\infty} ||f_k||_{L^1([0,1])}=0$.

(a) Show that a subsequence of $\{ f_k\}_{k=1}^\infty$ tends to zero almost everywhere.

(b) Show by example that the sequence $\{ f_k\}_{k=1}^\infty$ does not necessarily tend to zero almost everywhere.

#proof

::

::ProblemBlock{number=5}
#problem
Let $1\leq p<q<\infty$ and $n\in\mathbb{N}$.

(a) Show that the inclusions $L^p(\mathbb{R}^n)\subset L^q(\mathbb{R}^n)$ and $L^q(\mathbb{R}^n)\subset L^p(\mathbb{R}^n)$ are both false.

(b) Show that, for any $r\in (p,q)$, we have $L^p(\mathbb{R}^n)\cap L^q(\mathbb{R}^n)\subset L^r(\mathbb{R}^n)$, and furthermore that for $f\in L^p(\mathbb{R}^n)\cap L^q(\mathbb{R}^n)$ we have
$$
||f||_r \leq ||f||_p^\alpha ||f||_q^{1-\alpha} \qquad \text{where } \alpha = \frac{p(q-r)}{r(q-p)}
$$

#proof

::

::ProblemBlock{number=6}
#problem
Let $p\in(1,\infty)$. Suppose that $f_n\in L^p$ converges weakly to $f\in L^p$, that is, assume
$$
\lim_{n\to\infty} \int_0^1 f_ng\, dx = \int_0^1 fg\, dx
$$
for all $g\in L^q([0,1])$, where $q = \frac{p}{p-1}$.

(a) Show that $||f||_{L^p([0,1])}\leq \liminf_{n\to\infty} ||f_n||_{L^p([0,1])}$.

(b) Give an example where the inequality in part (a) is strict.

#proof

::