# 2021 Winter Real Analysis

::ProblemBlock{number=1}
#problem
(a) Give an example of a sequence $\{f_n\}_n$ of Lebesgue measurable functions on $[0,1]$ that does not converge to zero almost everywhere, but nonetheless
$$
\int_0^1 f_n^{10}\, dx \to 0
$$

(b) Is there such an example if one assumes that
$$
\int_0^1 f_n^{10}\, dx \leq \frac{1}{n^{10}}
$$
Give an example or prove there isn't one.

#proof

::

::ProblemBlock{number=2}
#problem
(a) Give an example of a measure $\mu$ on the unit interval that differs from Lebesgue measure such that:

(i) $\mu([0,1])=1$

(ii) Every Borel set is $\mu$-measurable

(iii) If $x\in[0,1]$, then $\mu(\{x\})=0$

(iv) If $(a,b)\subseteq [0,1]$ and $a\neq b$ then $\mu((a,b))\neq 0$

(b) Show that for all measures $\mu$ on the unit interval satisfying properties (i-iv) there is a measure $\nu$ on the unit square $[0,1]\times[0,1]$ such that

(i) $\nu([0,1]\times[0,1])=1$

(ii) Every Borel set is $\nu$-measurable

(iii) If $(x,y)\in[0,1]\times[0,1]$ then $\nu(\{(x,y)\})=0$

(iv) For $A\subseteq [0,1]$
$$
\nu(A\times [0,1]) = \mu(A)
$$
Define the measure and prove it has properties (i-iv).

#proof

::

::ProblemBlock{number=3}
#problem
Let $(X,\mathcal{A},\mu)$ and $(Y,\mathcal{B},\nu)$ be the measure spaces given by given by:

- $X=Y=[0,1]$
- $\mathcal{A}=\mathcal{B}=\mathcal{B}_{[0,1]}$, the Borel $\sigma$-algebra of $[0,1]$
- $\mu = \mu_L$ (Lebesgue measure) and $\nu$ is the counting measure

Consider the product measure space $(X\times Y,\sigma(\mathcal{A}\times\mathcal{B}))$ and a subset of it defined by $E = \{(x,y)\in X\times Y : x=y \}$. Then show that

(a) $E\in \sigma(\mathcal{A}\times\mathcal{B})$

(b) $\int_X \{ \int_Y \mathbf{1}_E\, d\nu \} \, d\mu \neq \int_Y = \{ \int_X \mathbf{1}_E\, d\mu \}\, d\nu$

(c) Why is Tonelli's Theorem not applicable?

#proof

::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ and $(Y,\mathcal{B},\nu)$ be $\sigma$-finite measure spaces, and consider the product measure space $(X\times Y,\sigma(\mathcal{A}\times\mathcal{B}),\mu\times\nu)$. Let $f$ be a real-valued, $\mathcal{A}$-measurable and $\mu$-integrable function on $X$ and $g$ a real-valued, $\mathcal{B}$-measurable and $\nu$-integrable function on $Y$. Consider the real-valued function on $X\times Y$ given by $h(x,y)=f(x)g(y)$. Show that $h$ is a $\sigma(\mathcal{A}\times\mathcal{B})$-measurable and $\mu\times\nu$-integrable function on $X\times Y$, and
$$
\int_{X\times Y} h\, d(\mu\times\nu) = \left\{ \int_X f\, d\mu\right\}\left\{ \int_Y g\, d\nu\right\}
$$

#proof

::

::ProblemBlock{number=5}
#problem
$g(x):\mathbb{R}\to\mathbb{R}$ is a measurable function and $O$ is non-empty open subset of $\mathbb{R}$. Let $h(t)=t\sin(t)$. Define
$$
f(x) = \inf\{t\geq 0 : h(t)g(x)\in O \}
$$
Show that $f(x)$ is a real-valued measurable function.

#proof

::

::ProblemBlock{number=6}
#problem
$\{f_n\}_{n\geq 1}$ is a sequence of real valued function in $L^2([0,1])$. Suppose that for any $g\in L^2([0,1])$,
$$
\sup_{n\geq 1} \int_{[0,1]} f_ng\, dx < +\infty
$$
Prove that
$$
\sup_{n\geq 1} ||f_n||_{L^2([0,1])} < +\infty
$$
(You may NOT simply quote the Banach-Steinhaus Theorem or the Uniform Boundedness Principle.)

#proof

::