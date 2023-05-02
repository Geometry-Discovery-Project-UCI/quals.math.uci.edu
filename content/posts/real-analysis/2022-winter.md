# 2022 Winter Real Analysis

::ProblemBlock{number=1}
#problem
Let $f_n:[-1,1]\to\R$ converge pointwise to $f: [-1,1]\to \R$. 
Show that 
$$
TV(f)\leq\liminf_{n\to\infty}TV(f_n).
$$
Before embarking on the proof, state the definition of TV (total variation).

#proof
Let $\mathcal S=\{-1 = x_0 < x_1 < \cdots < x_r=1\}$ be a sequence of $(r+1)$ numbers in $[-1,1]$.
        Define the total variation of $f$ to be
$$
TV(f)=\sup_r\sup_{\mathcal S}\, \sum_{j=1}^r|f(x_j)-f(x_{j-1})|.
$$
Now we prove the theorem. By assumption, we have, for any $r$ and $\mathcal S$, that 
$$
        \sum_{j=1}^r|f(x_j)-f(x_{j-1})|=\lim_{n\to\infty} \sum_{j=1}^r|f_n(x_j)-f_n(x_{j-1})|
        \leq\liminf_{n\to\infty} TV(f_n).
$$
Taking supremium of the left side above, we get the conclusion. ghg
::

::ProblemBlock{number=2}
#problem
Let $\mu$ and $\nu$ be two positive measures on a measurable space $(X, \mathcal M)$. Suppose that, for every $\eps>0$, there exists $E\in\mathcal M$ such that $\mu(E)<\eps$ and $\nu(E^c)<\eps$. Show that $\mu\perp\nu$.

#proof
For any $j$, we can find $E_j$ such that $\mu(E_j)<1/j^2$ and $\nu(E^c)<1/j^2$. Let
 $$
 E=\bigcup_{j=1}^\infty\bigcap_{k \geq  j} E_k.
 $$
 By definition, we have 
$$
 \mu(\bigcap_{k \geq   j} E_k)\leq \mu(E_k)\leq \frac{1}{k^2}\to 0
$$     
for any $k\geq j$, and 
thus 
$$
 \mu(\bigcap_{k \geq   j} E_k)=0.
$$
As a result, we have 
$$
\mu(\bigcup_{j=1}^\infty\bigcap_{k \geq   j} E_k)\leq\sum_{j=1}^\infty  \mu(\bigcap_{k \geq  j} E_k)=0.
$$
On the the hand, we consider 
$$
E^c= \bigcap_{j=1}^\infty\bigcup_{k \geq  j} E_k^c.
$$
We have 
$$
\nu(\bigcup_{k \geq   j} E_k)\leq\sum_{k=j}^\infty\frac{1}{k^2} \leq\frac 1{j-1}.
$$
Thus $\nu(E^c)=0$. This completes the proof. 
::

::ProblemBlock{number=3}
#problem
Let $\mu$ be a probability measure, i.e. a measure on $X$ with $\mu(X)=1$. Show 
           that, given measuable $E_1,\cdots, E_n$, it holds that 
$$
\sum_{j=1}^n\mu(E_j)>n-1 \Longrightarrow\mu\left(\bigcap_{j=1}^nE_j\right)>0.
$$

#proof
This problem is very similar to [Problem 1 of 2023 
    Winter Real Analysis Exam](/posts/real-analysis/2023-winter/)
  and   [Problem 6 of 2022 
    Fall  Real Analysis Exam](/posts/real-analysis/2022-fall/). Let 
$$
 f(x)=\sum_{j=1}^n 1_{E_j},
$$
where $1_{E_j}$ is the characteristic function of $E_j$.
Then $f$ is a positive integer valued function. We have 
$$
\int_X f(x)d\mu  =\sum_{j=1}^n \mu(E_j)>n-1.
$$
Thus there is a point $x_0$ such that $f(x_0)>n-1$. Obviously
$$
\bigcap_{j=1}^nE_j\supset \{x_0\}\neq\emptyset.
$$
::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal M, \mu)$ be a measure space, and let $f\in L^1(X,\mathcal M,\mu)$. 
           Let $(E_n)_{n\in\mathbb N}$ be a sequence
           of $\mathcal M$-measureable sets such that 
$$
           \lim_{n\to\infty}\mu(E_n)=0.
$$
Prove that 
$$
           \lim_{n\to\infty}\int_{E_n} f d\mu=0.
$$
 

#proof
We can write $f=f^+-f^-$ so it suffices to prove the theorem assuming that $f$ is nonnegative. 
 We observe that 
$$
 \int_{E_n} f d\mu=\int_X 1_{E_n} fd\mu.
$$
 The sequence of functions $(1-1_{E_n}) f\to f$ almost everywhere by the assumption of the 
 measures of $E_n$. Then by 
  [Fatou's lemma](https://en.wikipedia.org/wiki/Fatou%27s_lemma), we have
 $$
\int_X fd\mu\leq\liminf_{n\to\infty}\int_X(1-1_{E_n}) fd\mu=\int_X fd\mu-\limsup_{n\to\infty}
 \int_{E_n} fd\mu.
$$
This completes the proof.
::

::ProblemBlock{number=5}
#problem
Suppose that $E\subset\R$ is a measurable set of positive measure and
    $D=\{q_k\mid k\geq 1\}\subset\R$ be a dense set. Prove that 
$$
S=\R\backslash \bigcup_{k\geq 1} (q_k+E)
$$
is a set of measure zero.

#proof
We shall use the 
[Lebesgue's Density Theorem](https://en.wikipedia.org/wiki/Lebesgue%27s_density_theorem). Assume that the masure of $S$ is positive. Then
there is a point $x$ such that for any $\eps>0$, there exists an $\sigma>0$ such that 
$m((x-\sigma,x+\sigma)\cap S)>2(1-\eps)\sigma$. Since $E$ is of positive measure, there 
exists a $y$ such that $m((y-\sigma,y+\sigma)\cap E)>2(1-\eps)\sigma$. Choose some $q_k$ 
such that $m((x-\sigma,x+\sigma)\cap (q_k+E))>2(1-\eps)\sigma$. This is not possible since 
$(q_k+E)\cap S=\emptyset$. 
::

::ProblemBlock{number=6}
#problem
Suppose that $f\in L^1((0,+\infty))$ and prove that 
$$
 \lim_{n\to\infty}\frac 1n\int_0^n xf(x) dx=0.
$$

#proof
For any $\eps>0$, there exists an $N$ such that 
$$
        \int_N^n|f(x)| dx<\eps
$$
for $n>N$.
For such a fixed $N$, we let $n$ large enough so that 
$$
\frac 1n\int_0^N x|f(x)| dx<\eps.
$$
Thus we have 
$$
        \frac 1n\left|\int_0^n xf(x) dx\right|
        \leq \frac 1n\int_0^N x|f(x)| dx+  \int_N^n|f(x)| dx\leq 2\eps.
$$
This completes the proof. 
::
