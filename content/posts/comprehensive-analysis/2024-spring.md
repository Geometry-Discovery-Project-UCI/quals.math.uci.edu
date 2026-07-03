# 2024 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $(a_n)_{n=0}^\infty$ be a sequence of positive numbers and suppose
$$
\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=a.
$$
Show that the limit $\lim_{n\to\infty}a_n^{1/n}$ exists and has the same value $a$.

#proof
First suppose $a>0$. Fix $\varepsilon\in(0,a)$. Then for all sufficiently large $n$,
$$
a-\varepsilon\le \frac{a_{n+1}}{a_n}\le a+\varepsilon.
$$
Thus, for $n\ge N$,
$$
a_N(a-\varepsilon)^{n-N}\le a_n\le a_N(a+\varepsilon)^{n-N}.
$$
Taking $n$th roots gives
$$
a_N^{1/n}(a-\varepsilon)^{1-N/n}
\le a_n^{1/n}\le
 a_N^{1/n}(a+\varepsilon)^{1-N/n}.
$$
Letting $n\to\infty$, we obtain
$$
a-\varepsilon\le \liminf_{n\to\infty}a_n^{1/n}
\le \limsup_{n\to\infty}a_n^{1/n}
\le a+\varepsilon.
$$
Since $\varepsilon>0$ is arbitrary, $a_n^{1/n}\to a$.

If $a=0$, then for every $\varepsilon>0$ we have $a_{n+1}/a_n\le \varepsilon$ for all sufficiently large $n$. Hence $a_n\le C\varepsilon^n$ for some constant $C>0$, so
$$
\limsup_{n\to\infty}a_n^{1/n}\le \varepsilon.
$$
Since $\varepsilon>0$ is arbitrary, $a_n^{1/n}\to 0=a$.
::

::ProblemBlock{number=2}
#problem
For each $q>0$, investigate convergence or divergence of the integral
$$
\int_1^\infty \frac{x}{1+x^q}|\sin x|\,dx.
$$

#proof
For $q>2$,
$$
0\le \frac{x}{1+x^q}|\sin x|\le x^{1-q},
$$
and
$$
\int_1^\infty x^{1-q}\,dx<\infty.
$$
Hence the integral converges for $q>2$.

For divergence, let
$$
I_k=[2\pi k+\pi/6,\,2\pi k+5\pi/6].
$$
On $I_k$, we have $|\sin x|\ge 1/2$. Also, for $x\ge 1$,
$$
1+x^q\le 2x^q.
$$
Therefore, on $I_k$,
$$
\frac{x}{1+x^q}|\sin x|\ge \frac14 x^{1-q}.
$$
It follows that
$$
\int_1^\infty \frac{x}{1+x^q}|\sin x|\,dx
\ge C\sum_{k\ge k_0}\int_{I_k}x^{1-q}\,dx.
$$
The last sum is comparable to
$$
\sum_{k\ge k_0}k^{1-q},
$$
which diverges exactly when $q\le 2$. Thus the integral converges if and only if
$$
q>2.
$$
::

::ProblemBlock{number=3}
#problem
Let $A$ be a non-empty subset of $\ell^\infty(\mathbb{N})$. Define $f:\ell^\infty(\mathbb{N})\to\mathbb{R}$ by
$$
f(x)=\inf_{y\in A}\|x-y\|_{\ell^\infty}.
$$
Prove that $f$ is Lipschitz with constant $1$, that is, for any $x,y\in \ell^\infty(\mathbb{N})$,
$$
|f(x)-f(y)|\le \|x-y\|_{\ell^\infty}.
$$

#proof
For any $x,y\in \ell^\infty(\mathbb{N})$ and any $z\in A$, the triangle inequality gives
$$
\|x-z\|_{\ell^\infty}
\le \|x-y\|_{\ell^\infty}+\|y-z\|_{\ell^\infty}.
$$
Taking the infimum over $z\in A$ yields
$$
f(x)\le \|x-y\|_{\ell^\infty}+f(y).
$$
Hence
$$
f(x)-f(y)\le \|x-y\|_{\ell^\infty}.
$$
Interchanging $x$ and $y$ gives
$$
f(y)-f(x)\le \|x-y\|_{\ell^\infty}.
$$
Therefore
$$
|f(x)-f(y)|\le \|x-y\|_{\ell^\infty}.
$$
::

::ProblemBlock{number=4}
#problem
Let $E\subset \mathbb{R}$ be a bounded set, and let $f:E\to\mathbb{R}$ be a uniformly continuous function. Prove that $f$ is bounded on $E$.

#proof
Suppose not. Then there is a sequence $(x_n)\subset E$ such that
$$
|f(x_n)|\to\infty.
$$
Since $E$ is bounded, the sequence $(x_n)$ has a convergent subsequence in $\mathbb{R}$, say $(x_{n_k})$. In particular, $(x_{n_k})$ is Cauchy.

By uniform continuity, for every $\varepsilon>0$ there exists $\delta>0$ such that whenever $u,v\in E$ and $|u-v|<\delta$, we have
$$
|f(u)-f(v)|<\varepsilon.
$$
Since $(x_{n_k})$ is Cauchy, it follows that $(f(x_{n_k}))$ is Cauchy in $\mathbb{R}$. Hence $(f(x_{n_k}))$ is bounded, contradicting $|f(x_{n_k})|\to\infty$. Therefore $f$ is bounded on $E$.
::

::ProblemBlock{number=5}
#problem
Let $X$ be a compact metric space and let $f:X\to\mathbb{R}$ and $f_n:X\to\mathbb{R}$ be continuous functions for $n\in\mathbb{N}$. Assume that $f_n\le f_{n+1}$ for all $n\in\mathbb{N}$ and that $f_n$ converges pointwise to $f$. Show that the convergence is uniform and that this claim is not true in general if $f$ is not assumed to be continuous.

#proof
Let
$$
g_n=f-f_n.
$$
Since $f$ and $f_n$ are continuous, each $g_n$ is continuous. Also, because $f_n\le f_{n+1}$ and $f_n\to f$ pointwise,
$$
g_n\ge 0,
\qquad
 g_{n+1}\le g_n,
\qquad
 g_n(x)\to 0
$$
for every $x\in X$.

Fix $\varepsilon>0$ and define
$$
U_n=\{x\in X:g_n(x)<\varepsilon\}.
$$
Each $U_n$ is open. Since $g_n(x)\to 0$ pointwise, we have
$$
X=\bigcup_{n=1}^\infty U_n.
$$
Also, the sets $U_n$ are increasing: $U_n\subset U_{n+1}$. By compactness, finitely many $U_n$ cover $X$. Since they are increasing, there is some $N$ such that
$$
X=U_N.
$$
Thus $g_N(x)<\varepsilon$ for every $x\in X$. For $n\ge N$, $0\le g_n\le g_N$, so
$$
0\le f(x)-f_n(x)<\varepsilon
$$
for all $x\in X$. Therefore $f_n\to f$ uniformly.

The continuity of $f$ is necessary. For example, take $X=[0,1]$ and
$$
f_n(x)=1-x^n.
$$
Then each $f_n$ is continuous and
$$
f_n\le f_{n+1}.
$$
Pointwise,
$$
f_n(x)\to f(x)=
\begin{cases}
1, & 0\le x<1,\\
0, & x=1.
\end{cases}
$$
The limit $f$ is not continuous. The convergence is not uniform, since for $x<1$,
$$
|f(x)-f_n(x)|=x^n,
$$
and hence
$$
\sup_{0\le x\le 1}|f(x)-f_n(x)|=1
$$
for every $n$.
::

::ProblemBlock{number=6}
#problem
Let $U\subset\mathbb{R}^2$ be the open set
$$
U=\{(x,y): y>\arctan x>0,\ x>\arctan y>0\}.
$$
For which $a>0$ does the integral
$$
\int_U f_a(x,y)\,dx\,dy
$$
converge, where
$$
f_a(x,y)=\frac{1}{(x+y)^a}.
$$

#proof
First, $U\subset (0,\infty)^2$. For $0<x<\pi/2$, the condition
$$
x>\arctan y
$$
is equivalent to
$$
y<\tan x.
$$
Thus, near the origin,
$$
U=\{(x,y):0<x<\delta,\ \arctan x<y<\tan x\}
$$
for any sufficiently small $\delta>0$.

As $x\to 0$,
$$
\tan x-\arctan x\sim \frac{2}{3}x^3.
$$
Also, for small $x>0$ and $y\in(\arctan x,\tan x)$, we have
$$
x+y\asymp x.
$$
Hence the contribution near the origin is comparable to
$$
\int_0^\delta x^{-a}(\tan x-\arctan x)\,dx
\asymp
\int_0^\delta x^{3-a}\,dx.
$$
This converges exactly when
$$
3-a>-1,
$$
that is,
$$
a<4.
$$
So convergence near the origin requires $a<4$.

Next consider behavior at infinity. Since
$$
[\pi/2,\infty)\times[\pi/2,\infty)\subset U,
$$
the integral diverges for $a\le 2$, because over this subset the integral is comparable to
$$
\int^\infty r^{1-a}\,dr,
$$
which diverges when $a\le 2$.

Conversely, if $a>2$, then away from a small neighborhood of the origin,
$$
\int_U \frac{1}{(x+y)^a}\,dx\,dy
\le
\int_{(0,\infty)^2\cap\{x+y\ge c\}}\frac{1}{(x+y)^a}\,dx\,dy.
$$
Using $t=x+y$, the last integral is equal to
$$
C\int_c^\infty t^{1-a}\,dt,
$$
which is finite exactly when $a>2$.

Combining the origin condition and the infinity condition, the integral converges exactly for
$$
2<a<4.
$$
::

::ProblemBlock{number=7}
#problem
Find the flux of the vector field
$$
F(x,y,z)=(x^2,y^2,z^2)
$$
in $\mathbb{R}^3$ through the surface of the unit sphere, oriented by the outward-pointing normal.

#proof
By the divergence theorem, the outward flux through the unit sphere $S^2$ is
$$
\iint_{S^2}F\cdot n\,dS
=
\iiint_{B^3}\nabla\cdot F\,dV.
$$
Now
$$
\nabla\cdot F=2x+2y+2z.
$$
Therefore
$$
\iiint_{B^3}(2x+2y+2z)\,dV=0
$$
by symmetry of the unit ball. Hence the flux is $0$.
::

::ProblemBlock{number=8}
#problem
Show that the mapping
$$
F(x,y)=(e^x+e^y,\ e^x+e^{-y})
$$
is locally invertible at every point $(x,y)\in\mathbb{R}^2$.

#proof
The Jacobian matrix of $F$ is
$$
DF(x,y)=
\begin{pmatrix}
 e^x & e^y\\
 e^x & -e^{-y}
\end{pmatrix}.
$$
Therefore
$$
\det DF(x,y)
= -e^x e^{-y}-e^x e^y
= -e^x(e^{-y}+e^y).
$$
Since $e^x>0$ and $e^{-y}+e^y>0$, we have
$$
\det DF(x,y)\ne 0
$$
for every $(x,y)\in\mathbb{R}^2$. By the inverse function theorem, $F$ is locally invertible at every point of $\mathbb{R}^2$.
::

::ProblemBlock{number=9}
#problem
Show that the set $\mathbb{N}$ of natural numbers can be represented as a union of uncountably many distinct subsets
$$
\mathbb{N}=\bigcup_{\alpha\in A}N_\alpha
$$
in such a way that for any $\alpha,\beta\in A$, either $N_\alpha=N_\beta$, or the intersection $N_\alpha\cap N_\beta$ is finite.

#proof
We construct an uncountable almost disjoint family of subsets of $\mathbb{N}$ whose union is $\mathbb{N}$.

Let $2^{<\mathbb{N}}$ denote the set of all finite binary strings. This set is countable, so choose a bijection
$$
\phi:\mathbb{N}\to 2^{<\mathbb{N}}.
$$
For each infinite binary sequence
$$
\alpha=(\alpha_1,\alpha_2,\ldots)\in 2^\mathbb{N},
$$
define
$$
N_\alpha=\{\phi^{-1}(\alpha_1\alpha_2\cdots \alpha_n):n\in\mathbb{N}\}.
$$
That is, $N_\alpha$ is the set of natural numbers corresponding to the finite initial segments of $\alpha$.

There are uncountably many infinite binary sequences, so the collection
$$
\{N_\alpha:\alpha\in 2^\mathbb{N}\}
$$
is uncountable. If $\alpha\ne\beta$, then $\alpha$ and $\beta$ first differ at some coordinate $m$. Hence they have exactly the same initial segments only up to length $m-1$. Therefore
$$
N_\alpha\cap N_\beta
$$
is finite. In particular, the sets $N_\alpha$ are distinct.

Finally, every finite binary string is an initial segment of some infinite binary sequence. Therefore every element of $2^{<\mathbb{N}}$ lies in some chain of initial segments, and hence
$$
\mathbb{N}=\bigcup_{\alpha\in 2^\mathbb{N}}N_\alpha.
$$
Thus $\mathbb{N}$ is the union of uncountably many distinct subsets such that any two distinct subsets have finite intersection.
::
