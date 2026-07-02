# 2026 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $0\le f\in L^3(\mathbb R)$. Prove that
$$
\sum_{n\in\mathbb N} n^2 m(\{x\in\mathbb R:f(x)\ge n\})<\infty.
$$
Here $m$ denotes Lebesgue measure.

#proof
For each $x\in\mathbb R$, we have
$$
\sum_{n=1}^{\infty} n^2\mathbf 1_{\{f(x)\ge n\}}
=
\sum_{1\le n\le f(x)} n^2.
$$
If $f(x)<1$, this sum is $0$. If $f(x)\ge1$, then
$$
\sum_{1\le n\le f(x)} n^2
\le
\sum_{n=1}^{\lfloor f(x)\rfloor} n^2
\le
\left(\lfloor f(x)\rfloor\right)^3
\le
f(x)^3.
$$
Therefore, for every $x\in\mathbb R$,
$$
\sum_{n=1}^{\infty} n^2\mathbf 1_{\{f(x)\ge n\}}
\le
f(x)^3.
$$

By [Tonelli's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem#Tonelli's_theorem)
$$
\sum_{n=1}^{\infty} n^2 m(\{f\ge n\})
=
\sum_{n=1}^{\infty} n^2\int_{\mathbb R}\mathbf 1_{\{f\ge n\}}\,dx
$$
and hence
$$
\sum_{n=1}^{\infty} n^2 m(\{f\ge n\})
=
\int_{\mathbb R}
\sum_{n=1}^{\infty} n^2\mathbf 1_{\{f(x)\ge n\}}\,dx.
$$
Using the pointwise bound above, we get
$$
\sum_{n=1}^{\infty} n^2 m(\{f\ge n\})
\le
\int_{\mathbb R} f(x)^3\,dx.
$$
Since $f\in L^3(\mathbb R)$,
$$
\int_{\mathbb R} f(x)^3\,dx<\infty.
$$
Therefore,
$$
\sum_{n\in\mathbb N} n^2 m(\{f\ge n\})<\infty.
$$
::

::ProblemBlock{number=2}
#problem
Let $(X,\mathcal M,\mu)$ be a semi-finite measure space, let
$E\in\mathcal M$, and suppose that
$$
\mu(E)=\infty.
$$
Show that for any $C>0$, there exists $F\in\mathcal M$ such that
$$
F\subset E
\qquad\text{and}\qquad
\mu(F)\in(C,\infty).
$$



#proof
Recall that $\mu$ is semi-finite means that if $A\in\mathcal M$ and
$\mu(A)=\infty$, then there exists $B\in\mathcal M$ such that
$$
B\subset A
\qquad\text{and}\qquad
0<\mu(B)<\infty.
$$

We prove the claim by contradiction. Suppose there exists some $C>0$ such that
every measurable subset $F\subset E$ with finite measure satisfies
$$
\mu(F)\le C.
$$
Define
$$
\alpha
=
\sup\{\mu(F):F\in\mathcal M,\ F\subset E,\ \mu(F)<\infty\}.
$$
By assumption,
$$
\alpha\le C<\infty.
$$

By the definition of supremum, for each $n\in\mathbb N$, choose
$F_n\subset E$ with $\mu(F_n)<\infty$ such that
$$
\mu(F_n)>\alpha-\frac1n.
$$
Let
$$
G_n=\bigcup_{k=1}^n F_k.
$$
Then $G_n\subset E$ and $\mu(G_n)<\infty$, so by the definition of $\alpha$,
$$
\mu(G_n)\le \alpha.
$$
Also,
$$
\mu(G_n)\ge \mu(F_n)>\alpha-\frac1n.
$$
Hence
$$
\mu(G_n)\to \alpha.
$$

Now set
$$
G=\bigcup_{n=1}^{\infty}G_n.
$$
Since $G_n$ is increasing, continuity from below gives
$$
\mu(G)=\lim_{n\to\infty}\mu(G_n)=\alpha<\infty.
$$
Because
$$
G\subset E
$$
and
$$
\mu(E)=\infty,
$$
we must have
$$
\mu(E\setminus G)=\infty.
$$
Since $\mu$ is semi-finite, there exists $H\in\mathcal M$ such that
$$
H\subset E\setminus G
$$
and
$$
0<\mu(H)<\infty.
$$
Then
$$
G\cup H\subset E
$$
and
$$
\mu(G\cup H)=\mu(G)+\mu(H)=\alpha+\mu(H)>\alpha.
$$
Also,
$$
\mu(G\cup H)<\infty.
$$
This contradicts the definition of $\alpha$ as the supremum of finite measures
of measurable subsets of $E$.

Therefore, for every $C>0$, there exists $F\in\mathcal M$ with
$$
F\subset E
\qquad\text{and}\qquad
C<\mu(F)<\infty.
$$
::

::ProblemBlock{number=3}
#problem
Assume that $f\in L^1([0,1])$. Compute
$$
\lim_{k\to\infty}\int_{[0,1]} |f(x)|^{1/k}\,dx.
$$
Justify your answer.

#proof
For each fixed $x\in[0,1]$, since $f\in L^1([0,1])$, we have
$|f(x)|<\infty$ for almost every $x$.

If $|f(x)|>0$, then
$$
|f(x)|^{1/k}\to 1.
$$
If $|f(x)|=0$, then
$$
|f(x)|^{1/k}=0
$$
for every $k$.
Therefore,
$$
|f(x)|^{1/k}\to \mathbf 1_{\{|f|>0\}}(x)
$$
for almost every $x\in[0,1]$.

Now we need a dominating function. Since $0<1/k\le1$, for every $t\ge0$,
$$
t^{1/k}\le 1+t.
$$
Hence
$$
|f(x)|^{1/k}\le 1+|f(x)|.
$$
Because $f\in L^1([0,1])$ and $[0,1]$ has finite measure,
$$
1+|f|\in L^1([0,1]).
$$
Thus, by the [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem),
$$
\lim_{k\to\infty}\int_{[0,1]} |f(x)|^{1/k}\,dx
=
\int_{[0,1]}\mathbf 1_{\{|f|>0\}}(x)\,dx.
$$
Therefore,
$$
\boxed{
\lim_{k\to\infty}\int_{[0,1]} |f(x)|^{1/k}\,dx
=
m(\{x\in[0,1]:f(x)\ne0\}).
}
$$
::

::ProblemBlock{number=4}
#problem
Let $E\subset\mathbb R$ be uncountable. Prove that there exists $x_0\in E$
such that, for every $\delta>0$,
$$
E\cap (x_0-\delta,x_0+\delta)
$$
is uncountable.

#proof
Suppose not. Then for every $x\in E$, there exists $\delta_x>0$ such that
$$
E\cap (x-\delta_x,x+\delta_x)
$$
is countable.

For each $x\in E$, choose an open interval $I_x$ with rational endpoints such
that
$$
x\in I_x\subset (x-\delta_x,x+\delta_x).
$$
Then
$$
E\cap I_x
$$
is countable, because
$$
E\cap I_x\subset E\cap (x-\delta_x,x+\delta_x).
$$

Now let $\mathcal I$ be the collection of all open intervals with rational
endpoints. This collection is countable. Also, by construction,
$$
E\subset \bigcup_{\substack{I\in\mathcal I\\ E\cap I\text{ is countable}}} I.
$$
Therefore,
$$
E
=
\bigcup_{\substack{I\in\mathcal I\\ E\cap I\text{ is countable}}}
(E\cap I).
$$
The right-hand side is a countable union of countable sets, hence is countable.
This contradicts the assumption that $E$ is uncountable.

Therefore, there must exist some $x_0\in E$ such that for every $\delta>0$,
$$
E\cap (x_0-\delta,x_0+\delta)
$$
is uncountable.
::

::ProblemBlock{number=5}
#problem
Let $(f_k)_{k\in\mathbb N}$ be a sequence of measurable real-valued functions
defined on a measurable set $E$ with
$$
m(E)<\infty.
$$
Suppose that, for each $x\in E$,
$$
|f_k(x)|\le M_x<\infty,
\qquad k\in\mathbb N
$$
for some $M_x\ge0$. Show that for every $\varepsilon>0$, there exist a closed
set $F\subset E$ and a finite constant $M$ such that
$$
m(E\setminus F)\le \varepsilon
$$
and
$$
|f_k(x)|\le M,
\qquad k\in\mathbb N,\ x\in F.
$$

#proof
 Define
$$
g(x)=\sup_{k\in\mathbb N}|f_k(x)|.
$$
Since each $f_k$ is measurable, $g$ is measurable. By assumption, for every
$x\in E$,
$$
g(x)\le M_x<\infty.
$$
Hence
$$
g(x)<\infty
$$
for every $x\in E$.

For each $n\in\mathbb N$, define
$$
A_n=\{x\in E:g(x)\le n\}.
$$
Then each $A_n$ is measurable, and
$$
A_1\subset A_2\subset A_3\subset\cdots.
$$
Also, since $g(x)<\infty$ for every $x\in E$,
$$
E=\bigcup_{n=1}^{\infty}A_n.
$$
Because $m(E)<\infty$, by continuity from below,
$$
m(A_n)\to m(E).
$$
Therefore,
$$
m(E\setminus A_n)\to0.
$$
Choose $N\in\mathbb N$ such that
$$
m(E\setminus A_N)<\frac{\varepsilon}{2}.
$$

Since $A_N$ is measurable and has finite measure, by inner regularity of
Lebesgue measure, there exists a closed set $F\subset A_N$ such that
$$
m(A_N\setminus F)<\frac{\varepsilon}{2}.
$$
Then $F\subset A_N\subset E$, and
$$
m(E\setminus F)
\le
m(E\setminus A_N)+m(A_N\setminus F)
<
\frac{\varepsilon}{2}+\frac{\varepsilon}{2}
=
\varepsilon.
$$

Finally, since $F\subset A_N$, for every $x\in F$ we have
$$
g(x)\le N.
$$
Thus, for every $k\in\mathbb N$ and every $x\in F$,
$$
|f_k(x)|\le g(x)\le N.
$$
Taking
$$
M=N,
$$
we obtain the desired uniform bound on $F$.
::

 

::ProblemBlock{number=6}
#problem
Let $f:[0,\infty)\to[0,\infty)$ be locally absolutely continuous with
$$
f'\in L^1([0,\infty)).
$$
Prove that the limit
$$
\lim_{n\to\infty}
\left(
\sum_{k=1}^n f(k)-\int_0^n f(x)\,dx
\right)
$$
exists.

#proof
For each $k\in\mathbb N$, define
$$
a_k
=
f(k)-\int_{k-1}^k f(x)\,dx.
$$
Then
$$
\sum_{k=1}^n f(k)-\int_0^n f(x)\,dx
=
\sum_{k=1}^n
\left(
f(k)-\int_{k-1}^k f(x)\,dx
\right)
=
\sum_{k=1}^n a_k.
$$
Thus it is enough to show that
$$
\sum_{k=1}^{\infty} a_k
$$
converges.

Since $f$ is absolutely continuous on every compact interval, for
$x\in[k-1,k]$ we have
$$
f(k)-f(x)=\int_x^k f'(t)\,dt.
$$
Therefore
$$
a_k
=
\int_{k-1}^k (f(k)-f(x))\,dx
=
\int_{k-1}^k \int_x^k f'(t)\,dt\,dx.
$$
Hence
$$
|a_k|
\le
\int_{k-1}^k \int_x^k |f'(t)|\,dt\,dx.
$$
By changing the order of integration,
$$
\int_{k-1}^k \int_x^k |f'(t)|\,dt\,dx
=
\int_{k-1}^k
\int_{k-1}^t |f'(t)|\,dx\,dt.
$$
Thus
$$
|a_k|
\le
\int_{k-1}^k (t-k+1)|f'(t)|\,dt
\le
\int_{k-1}^k |f'(t)|\,dt.
$$
Summing over $k$, we get
$$
\sum_{k=1}^{\infty}|a_k|
\le
\sum_{k=1}^{\infty}\int_{k-1}^k |f'(t)|\,dt
=
\int_0^\infty |f'(t)|\,dt
<
\infty.
$$
Therefore
$$
\sum_{k=1}^{\infty} a_k
$$
converges absolutely. Hence the sequence of partial sums
$$
\sum_{k=1}^n a_k
=
\sum_{k=1}^n f(k)-\int_0^n f(x)\,dx
$$
has a finite limit as $n\to\infty$.

Therefore,
$$
\lim_{n\to\infty}
\left(
\sum_{k=1}^n f(k)-\int_0^n f(x)\,dx
\right)
$$
exists.
::
