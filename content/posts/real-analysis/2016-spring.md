# 2016 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Assume that $f\in L^1([0,1])$. Compute 
$$
\lim_{k\to+\infty} \int_{[0,1]} |f|^{\frac1k} dx.
$$
Justify your answer.

#proof
Let 
$$
E=\{x\mid |f(x)|>0\}.
$$
We claim that 
$$
\lim_{k\to+\infty} \int_{[0,1]} |f|^{\frac1k} dx={\rm meas}(E).
$$
It is obvious that, point-wisely, that 
$$
\lim_{k\to+\infty} 1_E(x) |f(x)|^{1/k}=1_E(x)
$$
for all $x\in[0,1]$. Moreover, we have 
$$
|f(x)|^{1/k}\leq\max(1, |f(x)|).
$$
Since $\max(1, |f(x)|)$ is integrable, by using the [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem), we conclude the claim.
::

::ProblemBlock{number=2}
#problem
Let $\{f_n\}_{n\geq 1}$ be a sequence of measurable functions on $[0,1]$ and $0\leq f_n\leq 1$ a.e. Assume that
$$
\lim_{n\to+\infty} \int_{[0,1]} f_ng dx = \int_{[0,1]} fg dx
$$
for some $f\in L^1([0,1])$ and any $g\in \mathcal C([0,1])$. Prove that $0\leq f\leq 1$ a.e..

#proof
For each $j\in\N$, define
$$
E_j=\{x\mid f(x)>1+j^{-1}\}. 
$$
For any $\eps>0$, let $g\in\mathcal C(\R)$ such that 
$$
\int_{[0,1]} |g(x)-1_{E_j}(x)| dx<\eps.
$$
Thus we have 
$$
j^{-1}\,m(E_j)\leq \int_{[0,1]}(f-f_n)1_{E_j} dx=\int_{[0,1]}(f-f_n)(1_{E_j}(x)-g(x)) dx+\int_{[0,1]}(f-f_n)g(x)dx\leq\eps+\int_{[0,1]}(f-f_n)g(x)dx.
$$
Letting $n\to\infty$, we get 
$$
j^{-1}\,m(E_j)\leq \eps.
$$
Since $\eps$ is arbitrary, this implies $m(E_j)$=0$. As a result, we have 
$$
m(\bigcup_{j=1}^\infty E_j)=0
$$
and implies that $f\leq 1$ a.e.. Similarly, we can prove that $f\geq 0$ a.e..
::

::ProblemBlock{number=3}
#problem
Let $f,g\in L^2(\mathbb{R},\mathcal{M}_L,\mu_L)$. Show that $f*g$ is a continuous function on $\mathbb{R}$ vanishing at infinity, that is $f*g\in \mathcal C(\mathbb{R})$ and $\lim_{|x|\to\infty}(f*g)(x) = 0$.

#proof
See [Problem 4 of 2014 Spring Real Analysis Exam](/posts/real-analysis/2014-spring/).

::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ be a finite measure space, and let $p_1\in (1,\infty]$. Let $\{f_n\}_{n\in\mathbb{N}}$ be a uniformly bounded sequence in $L^{p_1}(X,\mathcal{A},\mu)$, that is, $\{f_n\}_{n\in\mathbb{N}}\subset L^{p_1}(X,\mathcal{A},\mu)$ and $\sup_{n\in\N} \|f_n\|_{L^{p_1}}<\infty$. Suppose $f = \lim_{n\to\infty} f_n$ exists $\mu$-a.e. Prove that $f\in L^p(X,\mathcal{A},\mu)$ for all $p\in[1,p_1]$ and $f_n\to f$ in $L^p(X,\mathcal{A},\mu)$ for all $p\in [1,p_1)$.

#proof
Since $X$ is a finite measure space, $\{f_n\}_{n\in\mathbb{N}}$ is bounded in $L^{p}(X,\mathcal{A},\mu)$
for all $p\leq p_1$ by [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality). By
[Fatou's lemma](https://en.wikipedia.org/wiki/Fatou%27s_lemma#From_%22first_principles%22), we have
$$
\|f\|_{L^p}\leq\liminf_{n\to\infty} \|f_n\|_{L^p}\leq C<\infty.
$$
Finally, by [Egorov's theorem](https://en.wikipedia.org/wiki/Egorov%27s_theorem#Proof), for any $\eps>0$, there is a set $E$ with $m(E)<\eps$ and on $E^c$, the convergence $f_n\to f$ is uniform. For $p<p_1$, by triangle 
inequality, we have 
$$
\|f_n-f\|_{L^p}\leq \|f_n-f\|_{L^p(E^c)}+\|f_n-f\|_{L^p(E)}.
$$
By Hölder's inequality, we have 
$$
\|f_n-f\|_{L^p(E)}\leq (m(E))^{\frac 1p-\frac{1}{p_1}}\|f_n-f\|_{L^{p_1}(E)}\leq 2C \eps^{\frac 1p-\frac{1}{p_1}}.
$$
By the uniform convergence, there is an $N>0$ such that for $n>N$, we have 
$$
\|f_n-f\|_{L^p(E^c)}<\eps.
$$
Thus we have 
$$
\|f_n-f\|_{L^p}\leq \eps+ 2C \eps^{\frac 1p-\frac{1}{p_1}},
$$
and this completes the proof.
::

::ProblemBlock{number=5}
#problem
Let $(X,\mathcal{A},\mu)$ be a measure space, and let $f:X\to [0,\infty)$ be $\mathcal{A}$-measurable. Consider the measure space $(\mathbb{R},\mathcal{B}_\mathbb{R},\mu_L)$, where $\mathcal{B}_\mathbb{R}$ is the Borel $\sigma$-algebra on $\mathbb{R}$ and $\mu_L$ is Lebesgue measure, and form the product measure space $(X\times\mathbb{R},\sigma(\mathcal{A}\times\mathcal{B}_\mathbb{R}),\mu\times\mu_L)$. Define $E\subset X\times\mathbb{R}$ by $(x,y)\in E \Leftrightarrow y\in [0,f(x))$. Prove that $E\in \sigma(\mathcal{A}\times\mathcal{B}_\mathbb{R})$ and $(\mu\times \mu_L)(E) = \int_X f d\mu$.

#proof
We let $\{f_j=\sum_k a_{jk}1_{F_{jk}}\}$ be a sequence of increasing simply functions such that $f_j\to f$. Then 
$$
E=\bigcup_{j=1}^\infty E_j,
$$
where 
$$
E_j= \bigcup_{k=1}^\infty (E_{jk}\times [0,a_{jk}]).
$$
Thus $E$ is measurable with respect to the product measure. Moreover we have
$$
(\mu\times \mu_L)(E) = \int_X f d\mu.
$$
::

::ProblemBlock{number=6} 
#problem
Let $f\in L^1(\mathbb{R})$, and let $a_1,\ldots,a_k\in\mathbb{R}$ and $b_1,\ldots,b_k\in\mathbb{R}\setminus\{0\}$. Assume that the vectors $\frac{a_j}{b_j}$ are all distinct. Determine
$$
\lim_{t\to\infty} \int \left|\sum_{j=1}^k f(b_jx+ta_j)\right| dx
$$

#proof
For any $\eps>0$, let $g\in\mathcal C_0^\infty(\R)$ be a smooth function such that
$$
\int |f(x)-g(x)| dx <\eps.\tag{1}
$$
Assume the support of $g$ is within $(-R,R)$ for some $R>0$, then the supports of $g(b_jx+ta_j)$ must be within
$$
\left(-\frac{R}{b_j}-t\frac{a_j}{b_j}, \frac{R}{b_j}-t\frac{a_j}{b_j}\right).
$$
Since $a_j/b_j$ are distinct, for $t\gg 0$, these intervals are disjoint. Therefore we have 
$$
    \int |\sum_{j=1}^k g(b_j x + t a_j) | dx = \int \sum_{j=1}^k |g(b_j x + t a_j) | dx 
    = \sum_{j=1}^k \int \frac{1}{|b_j|}|g(u)|du 
    = \sum_{j=1}^k \frac{1}{|b_j|}\cdot \|g\|_1.
$$
Finally, by (1), we have
$$
\int |\sum_{j=1}^k (g(b_j x + t a_j)- f(b_j x + t a_j)) | dx\leq \eps \sum_{j=1}^k \frac{1}{|b_j|}.
$$
Thus 
$$
\lim_{t\to\infty} \int \left|\sum_{j=1}^k f(b_jx+ta_j)\right| dx= \sum_{j=1}^k \frac{1}{|b_j|}\cdot \|f\|_1.
$$
::