# 2018 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $f\in L^2(\mathbb{R})$, and let $(\alpha_n)_{n=1}^\infty$, $(\beta_n)_{n=1}^\infty$ be sequences of real numbers such that $\alpha_n\neq 0$ for all $n=1,2,\ldots$ and $\sum_{n=1}^\infty \frac{|\beta_n|}{|\alpha_n|^{1/2}}<\infty$. Show that $\lim_{n\to\infty}\beta_n f(\alpha_nx)=0$ for almost all $x\in\mathbb{R}$.

#proof

::

::ProblemBlock{number=2}
#problem
Let $g_k,g\in L^1(\mathbb{R})$ and assume that $g_k\to g$ in $L^1(\mathbb{R})$ as $k\to \infty$. Let $(\alpha_k)_{k=1}^\infty$ be a bounded sequence in $\mathbb{R}$, and let $f_k(x):=g_k(x+\alpha_k)$, $k=1,2,\ldots$. Prove that the sequence of function $(f_k)_{k=1}^\infty$ has a subsequence that converges in $L^1(\mathbb{R})$, almost everywhere, and in measure.

#proof

::

::ProblemBlock{number=3}
#problem
Let $f,g\in L^p(\mathbb{R}^n)$ for some $1<p<\infty$. Assume that for every $0<t<\infty$,
$$
m(\{ x\in\mathbb{R}^n : |g(x)|>t \}) \leq \frac1t \int_{\{x\in\mathbb{R}^n : |g(x)|>t \}} |f(x)|\, dx
$$
where $m$ is the Lebesgue measure. Show that
$$
||g||_{L^p(\mathbb{R}^n)} \leq p'||f||_{L^p(\mathbb{R}^n)} \qquad \frac1p + \frac1{p'} = 1
$$

#proof

::

::ProblemBlock{number=4}
#problem
Let $f\in L^1(\mathbb{R})$ be such that
$$
\int_E f(y)\, dy = 0
$$
for all Lebesgue measurable sets $E\subset \mathbb{R}$ with $m(E)=\pi$. Prove or disprove that $f(x)=0$ for almost all $x\in \mathbb{R}$.

#proof

::

::ProblemBlock{number=5}
#problem
Let $\mu$ be a positive finite Borel measure on $[0,1]$ and let $\varphi:[0,1]\to [0,1]$ be continuous. Assume that $\mu(\varphi^{-1}(E))=0$ for every Borel set $E\subset [0,1]$ with $\mu(E)=0$. Show that there is a Borel measurable function $f:[0,1]\to[0,\infty)$ such that 
$$
\int_0^1 g(\varphi(x))\, d\mu(x) = \int_0^1 g(x)f(x) \, d\mu(x)
$$
for all continuous $g:[0,1]\to\mathbb{R}$.

#proof

::

::ProblemBlock{number=6}
#problem
Let $f\in L^p([0,1])$ for some $1\leq p<\infty$. Compute
$$
\lim_{n\to\infty} \left( n^{p-1}\sum_{k=0}^{n-1}\left(\int_{k/n}^{(k+1)/n} |f(y)|\, dy\right)^p\right)^{1/p}
$$

#proof

::