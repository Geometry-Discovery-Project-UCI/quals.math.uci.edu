# 2010 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Suppose $f$ is Lipschitz continuous in $[0,1]$, that is, $|f(x)-f(y)|\leq L|x-y|$ for some constant $L$. Show that

(a) $m(f(E))=0$ if $m(E)=0$.

(b) If $E$ is measurable, then $f(E)$ is also measurable.

#proof
(a). For any $\eps>0$, there exists an open set 
$$
U=\bigcup_{i=}^\infty (a_i, b_i)\supset E
$$
such that 
$$
\sum_{i=1}^\infty(b_i-a_i)<\eps.
$$
It is not hard to see that 
$$
m(F(U))\leq M\eps.
$$ 
Thus $m(f(E))=0$ by taking limit. 

(b). Every measurable set $E$ is the union of an $F_\sigma$ set and a Lebesgue set. An $F_\sigma$ set is a countable union of bounded closed set (=compact set). Since $f$ is continuous, it maps a compact set to
a compact set, and this it maps an $F_\sigma$ set to an $F_\sigma$ set. Combining this with (a), 
$F(E)$ can be expressed as a union of an $F_\sigma$ set to a Lebesgue measure zero set, hence measurable. 
::

::ProblemBlock{number=2}
#problem
Let $\{q_k\}$ be all the rational numbers in $[0,1]$. Show that
$$
\sum_{k=1}^\infty \frac{1}{k^2} \frac{1}{\sqrt{|x-q_k|}} \text{ converges a.e. in } [0,1].
$$

#proof
This is very similar to [Probloem 4 of 2017 Fall Real Analysis Exam](/posts/real-analysis/2017-fall/).
::

::ProblemBlock{number=3}
#problem
Suppose that $f(t) = \int_0^t g(s)\, ds$ where $g(s)$ is integrable over $[0,1]$. Show that
$$
\lim_{n\to\infty} \sum_{k=0}^{2^n-1}\left| f\left(\frac{k+1}{2^n}\right)-f\left(\frac{k}{2^n}\right)\right|^2 = 0.
$$

#proof
We have
$$
\sum_{k=0}^{2^n-1} \left|f\left(\frac{k+1}{2^n}\right)-f\left(\frac{k}{2^n}\right)\right|^2 
\leq \max_{0\leq k\leq 2^n-1} 
    \int_{k/2^n}^{(k+1)/2^n}|g(s)| ds
\cdot
\sum_{k=0}^{2^n-1}\int_{k/2^n}^{(k+1)/2^n}|g(s)| ds
=\int_0^1|g(s)| ds \cdot \max_{0\leq k\leq 2^n-1} 
    \int_{k/2^n}^{(k+1)/2^n}|g(s)| ds.
$$
We claim that 
$$\max_{0\leq k\leq 2^n-1} 
    \int_{k/2^n}^{(k+1)/2^n}|g(s)| ds\to 0
$$
as $n\to\infty$. If not, then there an $\\eps_0>0$ such that we can find sequences $(k_j, n_j)$ such that 
$$
\int_{a_j}^{b_j}|g(s)| ds\geq\eps_0,
$$
where $a_j=k_j/2^{n_j}$ and $b_j=(k_j+1)/2^{n_j}$.
Since $g$ is integrable, we can find an interval $[a_{j_1}, b_{j_1}]$ such that it contains infinitely many intervals of the form $[a_j, b_j]$. Inductively, we are able to find a subsequence such that
$$
[a_{j_1}, b_{j_1}]\supset\cdots\supset [a_{j_r}, b_{j_r}]\supset\cdots.
$$
By the [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem), we have 
$$
\lim_{r\to\infty} \int_{a_r}^{b_r}|g(s)| ds=0,
$$
a contradiction. 
::

::ProblemBlock{number=4}
#problem
Let $f$ be a real-valued uniformly continuous function on $[0,\infty)$. Show that if $f$ is Lebesgue integrable on $[0,\infty)$, then $\lim_{x\to\infty} f(x)=0$.

#proof
If not, then there is an $\eps_0>0$ and  sequence $x_j\to\infty$ such that 
$$
|f(x_j)|\geq\eps_0.
$$
By choosing a subsequence if necessary, we may assume that $|x_j-x_{j-1}|>1$. By uniform continuity, there is a $\delta>0$ such that $|f(x)-f(x_j)|<\frac 12\eps_0$ whenever $|x-x_j|<\delta$. Thus $|f(x)|>\frac12 \eps_0$. As a result, we have 
$$
\int_{x_j-\delta}^{x_j+\delta}|f(x)| dx\geq \frac 12\delta\eps_0. 
$$
Assuming that $\delta<1/4$, we have 
$$
\int_0^\infty |f(x)| dx\geq \sum_{j=1}^\infty \int_{x_j-\delta}^{x_j+\delta}|f(x)| dx=\infty,
$$
which is a contradiction. 
::

::ProblemBlock{number=5}
#problem
Let $(X,\mathfrak{A},\mu)$ be a measure space and let $f$ be an extended real-valued $\mathfrak{A}$-measurable function on $X$ such that $\int_X |f|^p\, d\mu < \infty$ for some $p\in(0,\infty)$. Show that
$$
\lim_{\lambda\to\infty} \lambda^p \mu(\{x : |f(x)|\geq\lambda\}) = 0.
$$

#proof
We have 
$$
\lambda^p \mu(\{x : |f(x)|\geq\lambda\}) \leq\int_{\{x : |f(x)|\geq\lambda\}}|f(x)|^p d\mu
=\int_X 1_{\{x : |f(x)|\geq\lambda\}}|f(x)|^pd\mu.
$$
By the above first inequality, we have 
$$
 \mu(\{x : |f(x)|\geq\lambda\})\to 0.
$$
Applying the Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem), we know that the above right side tends to zero as $\lambda\to\infty$.

::

::ProblemBlock{number=6}
#problem
Consider the Lebesgue measurable space $(\R,\mathfrak{M}_L,\mu_L)$ on $\R$. Let $f$ be a $\mu_L$-integrable extended real-valued $\mathfrak{M}_L$-measurable function on $\R$. Show that
$$
\lim_{h\to\infty} \int_\R |f(x+h)-f(x)|\, \mu_L(dx) = 0.
$$

#proof
This is very similar to [Problem 5 of 2022 Fall Real Analysis Exam](/posts/real-analysis/2022-fall/).
::