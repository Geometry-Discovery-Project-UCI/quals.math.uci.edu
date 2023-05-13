# 2009 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $(X,\mathcal{A},\mu)$ be a measure space. Let $(f_n : n\in\N)$ and $f$ be real-valued $\mathcal{A}$-measurable functions on a set $D\in\mathcal{A}$. Suppose $f_n\xrightarrow{\mu} f$ on $D$, that is, $(f_n : n\in\N)$ converges to $f$ in measure $\mu$ on $D$. Let $F$ be a real-valued uniformly continuous function on $\R$. Show that $F\circ f_n\xrightarrow{\mu} F\circ f$ on $D$.

#proof
Since $F$ is uniformly continuous, for any $\eps>0$, there is a $\delta>0$ such that whenever $|x-y|<\delta$, we have
$F(x)-F(y)<\eps$. Thus we have 
$$
\{x\mid |F(f_n(x))-F(f(x))|\geq\eps\}\subset \{x\mid |f_n(x)-f(x)|\geq\delta\}.
$$
Thus if $f_n$ is convergent to $f$ in measure, then  $F\circ f_n$ is convergent to $F\circ f$ in measure.
::

::ProblemBlock{number=2}
#problem
(a) Let $f\in L^p([0,10])$, $p\geq 1$. Prove that $\displaystyle \lim_{t\downarrow 1} (t-1)^{\frac{1}{p}-1} \int_1^t f(s)\, ds =0$.

(b) Suppose $\displaystyle \int_0^\infty x^{-2}|f|^5\, dx < \infty$. Prove that $\displaystyle \lim_{t\downarrow 0} t^{-6/5} \int_0^t f(x)\, dx = 0$.

#proof
This is very similar to [Problem 2 of 2017 Fall Real Analysis Exam](/posts/real-analysis/2017-fall/).
::

::ProblemBlock{number=3}
#problem
Let $f_n(x) = \frac{n}{2}\chi_{[-\frac{1}{n},\frac{1}{n}]}$. Prove that for $g\in L^1(\R)$,
$$
\int \left| \int f_n(y-x)g(x)\, dx - g(y)\right| \, dy\to 0 \text{ as } n\to\infty.
$$

#proof
We have
$$
\int \left| \int f_n(y-x)g(x)\, dx - g(y)\right| \, dy=\int_\R\left|\frac n2\int_{y-1/n}^{y+1/n} g(x) dx-g(y)\right|dy
$$

For any $\eps>0$, let $h\in\mathcal C^\infty (\R)$ such that 
$$
\int_\R|h(x)-g(x)| dx<\eps.
$$
Let $\xi(x)=|h(x)-g(x)|$. We have 
$$
\int_\R\left|\frac n2\int_{y-1/n}^{y+1/n} \xi(x) dx-\xi(y)\right|dy\leq \int_\R\frac n2\int_{y-1/n}^{y+1/n} \xi(x) dxdy+\int_\R\xi(y) dy=2\int_\R\xi(y) dy<2\eps.
$$
On the other hand, since $h$ is smooth with compact support, it must be uniformly continuous. Thus for $n$ 
large enough, we must have 
$$
\left|\int_{y-1/n}^{y+1/n} g(x) dx-g(x)\right|<\eps/N,
$$
where  ${\rm supp}\, h\subset [-N,N]$. Then 
$$
\int_\R\left|\frac n2\int_{y-1/n}^{y+1/n} h(x) dx-h(y)\right|dy\leq eps.
$$
Using triangle inequality, we have 
$$
\int_\R\left|\frac n2\int_{y-1/n}^{y+1/n} g(x) dx-g(y)\right|dy\leq 3\eps
$$
for $n\gg 0$. 
::

::ProblemBlock{number=4}
#problem
Suppose $f$ is a bounded nonnegative function on $(X,\mu)$ with $\mu(X)=\infty$. Show that $f$ is integrable if and only if
$$
\sum_{n=0}^\infty \frac{1}{2^n} \mu\left(\left\{ x\in X : f(x)>\frac{1}{2^n} \right\}\right) < \infty.
$$

#proof
This is very similar to [Problem 1 of 2006 Fall Real Analysis Exam](/posts/real-analysis/2006-fall/).
::

::ProblemBlock{number=5}
#problem
Let $f$ be an element and $(f_n : n\in \N)$ be a sequence in $L^p(X,\mathcal{A},\mu)$ where $p\in[1,\infty)$ such that $\lim_{n\to\infty}\| f_n-f\|_p=0$. Show that for every $\eps>0$ there exists $\delta>0$ such that for all $n\in \N$ we have
$$
\int_E |f_n|^p\, d\mu < \eps \text{ for every } E\in\mathcal{A} \text{ such that } \mu(E)<\delta.
$$

#proof
By triangle inequality, we have 
$$
\left(\int_E |f_n|^p\, d\mu\right)^{1/p}\leq \|f_n-f\|_p+\left(\int_E |f|^p d\mu\right)^{1/p}.
$$
By [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem), for any $\eps$ there is a $\delta>0$ such that if $\mu(E)<\delta$, we must have 
$$
\int_E |f|^p d\mu\leq\eps.
$$
This completes the proof.
::

::ProblemBlock{number=6}
#problem
Let $(X,\Sigma,\mu)$ be a measure space with $\mu(X)<\infty$, and let $\Sigma_0$ be a sub-$\sigma$-algebra of $\Sigma$. Given an integrable function $f$ on $(X,\Sigma,\mu)$, show that there is a $\Sigma_0$-measurable function $f_0$, such that
$$
\int_X f\, g\, d\mu = \int_X f_0\, g\, d\mu
$$
for every $\Sigma_0$-measurable function $g$ such that $f\, g$ is integrable. (Hint: Use the Radon-Nikodym Theorem.)

#proof
This is the same as [Problem 1 of 2016 Fall Real Analysis Exam](/posts/real-analysis/2016-fall/).
::