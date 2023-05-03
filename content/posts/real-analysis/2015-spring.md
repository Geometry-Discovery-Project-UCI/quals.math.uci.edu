# 2015 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Show that if $f\in L^4(\mathbb{R})$ then
$$
\lim_{c\to 1}\int_\mathbb{R} |f(cx)-f(x)|^4 dx = 0.
$$

#proof
The is the same [Problem 5 of 2022 Fall Real Analysis Exam](/posts/real-analysis/2022-fall/).
::

::ProblemBlock{number=2}
#problem
Let $f_n:(0,\infty)\to\mathbb{R}$, $n=1,2,\ldots$ be a sequence of Lebesgue measurable functions such that $f_n\to f$ a.e. as $n\to\infty$. Assume that there exists $g:(0,\infty)\to\mathbb{R}$ such that $|f_n|\leq g$, $n=1,2,\ldots$ and $g\in L^1((0,a))$ for all $0<a<\infty$. Assume furthermore that
$$
\int_1^\infty |f_n(\sqrt{x})|dx\leq C \qquad n=1,2,\ldots\tag{1}
$$
for some constant $C>0$. Show that $f_n\in L^1((0,\infty))$, $f\in L^1((0,\infty))$ and $f_n\to f$ in $L^1((0,\infty))$ as $n\to\infty$.

#proof
Equation (1) is equivalent to, after change of variable,  
$$
2\int_1^\infty |f_n(x)| xdx\leq C.
$$
Thus for any $a\gg 0$, we have 
$$
\int_a^\infty |f_n(x)| dx\leq\frac{C}{2a}.
$$
Let $\eps>0$, we choose $a$ such that 
$$
\frac{C}{2a}<\eps.
$$
Since on $[0,a]$, $g$ is integrable, by the [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem), there is an $N>0$ such that for any $n>N$, we have
$$
\int_0^a |f_n(x)-f(x)| dx< \eps.
$$
On the other hand, by the [Fatou's lemma](https://en.wikipedia.org/wiki/Fatou%27s_lemma),
$$
\int_a^\infty|f(x)| dx\leq\liminf_{n\to\infty}\int_a^\infty|f_n(x)| dx\leq\eps.
$$
It follows that 
$$
\int_0^\infty |f_n(x)-f(x)| dx\leq 3\eps
$$
and the theorem is proved.
::

::ProblemBlock{number=3}
#problem
Assume that $f\in \mathcal C^1((0,1))$ and
$$
\int_{(0,1)} x|f'|^p dx<+\infty \qquad \text{for some } p>2.
$$
Show that $\lim_{x\to 0^+} f(x)$ exists.

#proof
Let $0<x_1<x_2<1$. Then by [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality), we have
$$
|f(x_1)-f(x_2)|=\left|\int_{x_1}^{x_2} f'(x) dx\right|=\left|\int_{x_1}^{x_2} x^{1/p}f'(x) \cdot x^{1/q} dx\right|\leq \left(\int_{x_1}^{x_2} x|f'(x)|^p dx\right)^{1/p}\cdot
\left(\int_{x_1}^{x_2} dx\right)^{1/q}\leq C|x_2-x_1|^{1/q}
$$
where $q=p/(p-1)$.
Thus $\lim_{x\to 0^+} f(x)$ exists.
::

::ProblemBlock{number=4}
#problem
Suppose that $E\subset[0,1]^2$ is measurable. Denote
$$
E_x = \{ y\in[0,1] : (x,y)\in E \} \quad\text{ and }\quad E_y = \{ x\in [0,1] : (x,y)\in E \}.
$$
Show that if $m(E_x)=0$ for a.e. $x\in[0,\frac12]$, then
$$
m(\{y\in[0,1] : m(E_y)=1 \}) \leq \frac12.
$$

#proof
By [Fubini's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem#Product_measures), we have
$$
m(E)=\int_0^1 m(E_x) dx=\int_0^1m(E_y) dy.
$$
If $m(E_x)=0$ for a.e. $x\in[0,\frac12]$, then 
$$
\int_0^1 m(E_x) dx\leq \int_{1/2}^1 m(E_x) dx\leq\frac 12
$$
which implies the conclusion.
::

::ProblemBlock{number=5}
#problem
Let $f\in L^p(\mathbb{R})$, $1<p<\infty$, and let $\alpha>1-\frac1p$. Show that the series
$$
\sum_{n=1}^\infty \int_n^{n+n^{-\alpha}} |f(x+y)|dy
$$
converges for a.e. $x\in\mathbb{R}$.

#proof
We assume that $f$ is nonnegative without loss of generality.
Let $b>a>0$. We consider 
$$
\int_a^b\int_n^{n+n^{-\alpha}} f(x+y) dydx=\int_n^{n+n^{-\alpha}}\int_a^b f(x+y) dxdy=
\int_n^{n+n^{-\alpha}}\int_{a+y}^{b+y} f(x) dxdy.
$$
Since $n\leq y\leq n+n^{-\alpha}\leq n+1$, we have
$$
\int_a^b\int_n^{n+n^{-\alpha}} f(x+y) dydx\leq \int_n^{n+n^{-\alpha}}\int_{a+n}^{b+n+1} f(x) dxdy
=n^{-\alpha} \int_{a+n}^{b+n+1} f(x) dxdy.
$$
By [Young's inequality](https://en.wikipedia.org/wiki/Young%27s_inequality_for_products), we have 
$$
\sum_{n=1}^\infty n^{-\alpha} \int_{a+n}^{b+n+1} f(x) dxdy\leq \frac 1p\sum_{n=1}^\infty \int_{a+n}^{b+n+1} f(x)^p dx+\frac 1q \sum_{n=1}^\infty n^{-\alpha q}.
$$
By assumption on $\alpha$, we know that $\alpha q>1$. Thus the second term in the above right is convergent. For the first term in the above right, we are in the same situation as in [Problem 5 of 2021 Spring Real Analysis Exam](/posts/real-analysis/2021-spring/) and [Problem 5 of 2018 Fall Real Analysis Exam](/posts/real-analysis/2018-fall/), and we can conclude that it is also bounded:
$$
\sum_{n=1}^\infty n^{-\alpha} \int_{a+n}^{b+n+1} f(x) dxdy\leq \frac 1p C(a,b) \|f\|_{L^p}^p+C.
$$
We thus conclude that 
$$
\int_a^b\left(\sum_{n=1}^\infty \int_n^{n+n^{-\alpha}} |f(x+y)|dy\right)dx\leq C<\infty
$$
is integrable. The theorem thus follows.
::

::ProblemBlock{number=6}
#problem
Suppose $E\subset \mathbb{R}$ is measurable and $E = E+\frac1n$ for every natural number $n\geq 1$. Show that either $m(E)=0$ or $m(E^c)=0$.

#proof
Let $\alpha>0$ be any real number. Let $n_1\in\N$ be the smallest positive integer such that 
$$
\frac{1}{n_1}<\alpha.
$$
Inductively we define $n_k\in\N$ such that it is the smallest positive integer such that 
$$
n_k>n_{k-1},\quad \frac{1}{n_k}<\alpha-\sum_{j=1}^{k-1}\frac{1}{n_j}
$$
for any $k\geq 1$. 
We claim that 
$$
\sum_{j=1}^\infty \frac{1}{n_j}=\alpha.
$$
In order to prove the claim, we notice that by construction of $\{n_k\}$, for each $k$, we either have $n_{k-1}=n_k-1$, or 
$$
\frac{1}{n_k-1}\geq\alpha-\sum_{j=1}^{k-1}\frac{1}{n_j}.\tag{2}
$$
Since the harmonic series $\sum\frac 1k$ is divergent, $n_{k-1}=n_k-1$ is not true for all sufficient large $k$. As a result, we shall find a subsequence $\{n_{k_j}\}$ such that 
$$
n_{k_j}>n _{k_j-1}+1.
$$
Let 
$$
\beta=\alpha -\sum_{j=1}^\infty \frac{1}{n_j}>0.
$$
Then we  have a contradiction since (2) is not valid for sufficiently large $k_j$.

By the claim, we have $E=E+\alpha$ for all $\alpha>0$. It is not hard to extend the same translation invariance to all real numbers $\alpha$. We   are then in the same situation as in the [Problem 5 of 2022 Winter Real Analysis Exam](/posts/real-analysis/2022-winter) and we can use the method there to complete the proof.
::