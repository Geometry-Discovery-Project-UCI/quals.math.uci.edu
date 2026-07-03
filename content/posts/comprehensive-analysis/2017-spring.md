# 2017 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Recall that a metric space $X$ is pathconnected if, for any two points $x,y\in X$, there is a continuous function $\gamma:[0,1]\to X$ such that $\gamma(0)=x$ and $\gamma(1)=y$. We say that $X$ is locally pathconnected if every point in $X$ has a pathconnected neighborhood. Prove that if $X$ is connected and locally pathconnected, then $X$ is actually pathconnected.

#proof
Fix a point $x_0\in X$, and let
$$
A=\{x\in X: \text{there is a path from }x_0\text{ to }x\}.
$$
Clearly $x_0\in A$, so $A$ is nonempty.

We first show that $A$ is open. Let $a\in A$. Since $X$ is locally pathconnected, there is a pathconnected neighborhood $U$ of $a$. If $u\in U$, then there is a path in $U$ from $a$ to $u$. Since $a\in A$, there is also a path from $x_0$ to $a$. Concatenating these two paths gives a path from $x_0$ to $u$. Hence $u\in A$, so $U\subset A$. Thus $A$ is open.

We next show that $X\setminus A$ is open. Let $b\in X\setminus A$. Again, choose a pathconnected neighborhood $V$ of $b$. If $V$ met $A$, then for some $v\in V\cap A$ there would be a path from $x_0$ to $v$. Since $V$ is pathconnected, there would also be a path from $v$ to $b$. Concatenating these paths would give a path from $x_0$ to $b$, contradicting $b\notin A$. Hence $V\cap A=\varnothing$, so $V\subset X\setminus A$. Therefore $X\setminus A$ is open.

Thus $A$ is both open and closed in $X$. Since $X$ is connected and $A$ is nonempty, we must have $A=X$. Therefore every point of $X$ can be joined to $x_0$ by a path. If $x,y\in X$, join $x$ to $x_0$ and then $x_0$ to $y$; after reversing the first path if necessary, this gives a path from $x$ to $y$. Hence $X$ is pathconnected.
::

::ProblemBlock{number=2}
#problem
Let $f:\mathbb{R}\to \mathbb{R}$ be given by
$$
f(x):=\sum_{n=2}^{\infty}\left(\frac{x}{\ln n}\right)^n.
$$
Is $f$ continuous on $\mathbb{R}$? Justify your answer.

#solution
Yes, $f$ is continuous on $\mathbb{R}$.

For each fixed $x\in \mathbb{R}$, consider the series
$$
\sum_{n=2}^{\infty}\left(\frac{x}{\ln n}\right)^n.
$$
By the root test,
$$
\sqrt[n]{\left|\left(\frac{x}{\ln n}\right)^n\right|}
=\frac{|x|}{\ln n}\longrightarrow 0.
$$
Hence the series converges absolutely for every $x\in \mathbb{R}$, so $f$ is well-defined on all of $\mathbb{R}$.

To prove continuity, it is enough to prove uniform convergence on every compact interval. Let $R>0$ and assume $|x|\le R$. Since $\ln n\to \infty$, there exists $N$ such that $\ln n\ge 2R$ for all $n\ge N$. Then for all $n\ge N$ and all $|x|\le R$,
$$
\left|\left(\frac{x}{\ln n}\right)^n\right|
\le \left(\frac{R}{\ln n}\right)^n
\le \left(\frac12\right)^n.
$$
The series $\sum_{n=N}^{\infty}2^{-n}$ converges, so by the Weierstrass $M$-test the given series converges uniformly on $[-R,R]$.

Each function
$$
x\mapsto \left(\frac{x}{\ln n}\right)^n
$$
is continuous. Therefore $f$ is the uniform limit of continuous functions on every compact interval $[-R,R]$. Hence $f$ is continuous on every compact interval, and consequently $f$ is continuous on $\mathbb{R}$.
::

::ProblemBlock{number=3}
#problem
Suppose that $E$ is an open subset of $\mathbb{R}^2$ and that $f:E\to \mathbb{R}$ is a function such that $D_1f$, $D_2f$, and $D_{21}f$ exist on $E$. Further suppose that $D_{21}f$ is continuous at $(a,b)\in E$. Prove that $D_{12}f(a,b)$ exists and
$$
D_{12}f(a,b)=D_{21}f(a,b).
$$

#proof
We use the convention that $D_{21}f=D_2(D_1f)$ and $D_{12}f=D_1(D_2f)$.

Because $E$ is open, there is $\rho>0$ such that the rectangle
$$
(a-\rho,a+\rho)\times (b-\rho,b+\rho)
$$
is contained in $E$. For nonzero $h,k$ with $|h|,|k|<\rho$, define the second difference quotient
$$
Q(h,k)
=
\frac{f(a+h,b+k)-f(a+h,b)-f(a,b+k)+f(a,b)}{hk}.
$$
We will show that $Q(h,k)\to D_{21}f(a,b)$ as $(h,k)\to (0,0)$.

Fix such $h,k$. For fixed $y$, apply the one-variable mean value theorem to the function $x\mapsto f(x,y)$. There exists $\theta\in(0,1)$, depending on $h$ and $k$, such that
$$
f(a+h,b+k)-f(a,b+k)-f(a+h,b)+f(a,b)
=
h\left[D_1f(a+\theta h,b+k)-D_1f(a+\theta h,b)\right].
$$
Now apply the one-variable mean value theorem in the second variable to $y\mapsto D_1f(a+\theta h,y)$. There exists $\eta\in(0,1)$ such that
$$
D_1f(a+\theta h,b+k)-D_1f(a+\theta h,b)
=
kD_{21}f(a+\theta h,b+\eta k).
$$
Therefore
$$
Q(h,k)=D_{21}f(a+\theta h,b+\eta k).
$$
Since $(a+\theta h,b+\eta k)\to (a,b)$ as $(h,k)\to(0,0)$ and $D_{21}f$ is continuous at $(a,b)$, we get
$$
Q(h,k)\longrightarrow D_{21}f(a,b).
$$

Now fix $h\ne 0$ sufficiently small. By the definition of $D_2f$,
$$
\lim_{k\to 0}Q(h,k)
=
\frac{D_2f(a+h,b)-D_2f(a,b)}{h}.
$$
Since $Q(h,k)$ is close to $D_{21}f(a,b)$ uniformly for all sufficiently small nonzero $h,k$, passing to the limit $k\to0$ gives
$$
\frac{D_2f(a+h,b)-D_2f(a,b)}{h}\longrightarrow D_{21}f(a,b)
\quad\text{as }h\to0.
$$
Thus the derivative of $D_2f$ with respect to the first variable exists at $(a,b)$, and
$$
D_{12}f(a,b)=D_{21}f(a,b).
$$
::

::ProblemBlock{number=4}
#problem
Let $h:\mathbb{R}\to\mathbb{R}$ be a bounded function and define $F:\mathbb{R}\to\mathbb{R}$ by
$$
F(x):=\int_{-1}^{x}\sin(u^2)e^u h(u)\,du.
$$
Prove that $F$ is continuous.

#proof
Since $h$ is bounded, there exists $M>0$ such that
$$
|h(u)|\le M
$$
for all $u\in\mathbb{R}$.

Fix $x_0\in\mathbb{R}$. We prove that $F$ is continuous at $x_0$. Choose $r>0$ and restrict attention to $x$ satisfying $|x-x_0|<r$. Then $u$ lies in the compact interval between $x$ and $x_0$, which is contained in
$$
[x_0-r,x_0+r].
$$
On this interval, $e^u$ is bounded by $e^{x_0+r}$, and $|\sin(u^2)|\le 1$. Therefore
$$
|\sin(u^2)e^u h(u)|\le Me^{x_0+r}.
$$
For such $x$, we have
$$
|F(x)-F(x_0)|
=
\left|\int_{x_0}^{x}\sin(u^2)e^u h(u)\,du\right|
\le Me^{x_0+r}|x-x_0|.
$$
Hence
$$
|F(x)-F(x_0)|\to0
\quad\text{as}\quad x\to x_0.
$$
Thus $F$ is continuous at $x_0$. Since $x_0$ was arbitrary, $F$ is continuous on $\mathbb{R}$.
::

::ProblemBlock{number=5}
#problem
Suppose that $X$ is a compact metric space and that, for each $n\in\mathbb{N}$, $f_n:X\to\mathbb{R}$ is a continuous function. Further suppose that
$$
f_n(x)\le f_{n+1}(x)
$$
for all $x\in X$ and all $n\in\mathbb{N}$, and that the sequence $(f_n)$ is uniformly bounded. Prove that the sequence $(f_n)$ converges uniformly to a function $f:X\to\mathbb{R}$.

#solution
As stated, this assertion is false. The assumptions imply pointwise convergence, but they do not imply uniform convergence.

Indeed, let
$$
X=[0,1]
$$
with the usual metric, and define
$$
f_n(x)=1-(1-x)^n.
$$
Each $f_n$ is continuous on $[0,1]$. Also, for every $x\in[0,1]$,
$$
f_{n+1}(x)-f_n(x)
=
\left[1-(1-x)^{n+1}\right]-\left[1-(1-x)^n\right]
=
x(1-x)^n\ge0.
$$
Thus $f_n(x)\le f_{n+1}(x)$ for all $x$ and $n$. Moreover,
$$
0\le f_n(x)\le1,
$$
so the sequence is uniformly bounded.

For each fixed $x\in[0,1]$,
$$
f_n(x)=1-(1-x)^n\to
\begin{cases}
0, & x=0,\\
1, & 0<x\le1.
\end{cases}
$$
Thus the pointwise limit is
$$
f(x)=
\begin{cases}
0, & x=0,\\
1, & 0<x\le1.
\end{cases}
$$
This limit function is discontinuous at $0$.

If $f_n$ converged uniformly to $f$, then $f$ would be continuous as the uniform limit of continuous functions. But $f$ is not continuous at $0$. Therefore the convergence is not uniform.

Equivalently, one can see the failure directly: at $x=1/n$,
$$
|f(1/n)-f_n(1/n)|
=1-\left[1-\left(1-\frac1n\right)^n\right]
=
\left(1-\frac1n\right)^n,
$$
which tends to $e^{-1}$, not to $0$. Hence
$$
\sup_{x\in[0,1]}|f(x)-f_n(x)|
$$
does not tend to $0$.

Therefore the proposed statement is false without an additional hypothesis, such as continuity of the pointwise limit.
::

::ProblemBlock{number=6}
#problem
Suppose that $f:\mathbb{R}\to\mathbb{R}$ is a continuous function. Prove that
$$
\int_0^x f(u)(x-u)\,du
=
\int_0^x\int_0^u f(t)\,dt\,du.
$$

#proof
Define
$$
H(x)=\int_0^x f(t)\,dt.
$$
Since $f$ is continuous, the fundamental theorem of calculus gives
$$
H'(x)=f(x).
$$

Let
$$
L(x)=\int_0^x f(u)(x-u)\,du.
$$
Then
$$
L(x)=x\int_0^x f(u)\,du-\int_0^x uf(u)\,du
=xH(x)-\int_0^x uf(u)\,du.
$$
Differentiating gives
$$
L'(x)=H(x)+xf(x)-xf(x)=H(x).
$$
Also,
$$
L(0)=0.
$$

Now define
$$
R(x)=\int_0^x\int_0^u f(t)\,dt\,du
=
\int_0^x H(u)\,du.
$$
Again by the fundamental theorem of calculus,
$$
R'(x)=H(x),
$$
and also
$$
R(0)=0.
$$

Thus $L'(x)=R'(x)$ for every $x\in\mathbb{R}$ and $L(0)=R(0)$. Therefore $L-R$ is constant and equals $0$. Hence
$$
\int_0^x f(u)(x-u)\,du
=
\int_0^x\int_0^u f(t)\,dt\,du
$$
for all $x\in\mathbb{R}$.
::

::ProblemBlock{number=7}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** Let $S^2$ denote the unit sphere in $\mathbb{R}^3$. Compute the boundary $\partial S^2$ of $S^2$.

<span style="display:inline-block; width:1em;"></span> **(b)** Suppose that $\omega$ is an exact $2$-form in $\mathbb{R}^3$. Prove that
$$
\int_{S^2}\omega=0.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The unit sphere is a closed oriented surface; it has no boundary. Thus
$$
\partial S^2=0.
$$

One way to see this explicitly is to write $S^2$ as the union of the upper and lower hemispheres. Each hemisphere has boundary equal to the equator, but the induced orientations on the equator are opposite. Therefore the two boundary curves cancel, and the total boundary is zero:
$$
\partial S^2=\partial S^2_+ + \partial S^2_-=C-C=0.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Since $\omega$ is exact, there exists a $1$-form $\eta$ on $\mathbb{R}^3$ such that
$$
\omega=d\eta.
$$
By Stokes' theorem,
$$
\int_{S^2}\omega
=
\int_{S^2}d\eta
=
\int_{\partial S^2}\eta.
$$
Using part **(a)**, $\partial S^2=0$, so
$$
\int_{\partial S^2}\eta=0.
$$
Hence
$$
\int_{S^2}\omega=0.
$$
::

::ProblemBlock{number=8}
#problem
Suppose that $f:[a,b]\to\mathbb{R}$ is an increasing function. Prove that $f$ is integrable on $[a,b]$.

#proof
Since $f$ is increasing on $[a,b]$, it is bounded:
$$
f(a)\le f(x)\le f(b)
$$
for all $x\in[a,b]$.

We prove Riemann integrability using upper and lower sums. If $f(b)=f(a)$, then $f$ is constant and hence integrable. Assume $f(b)>f(a)$.

Let $\varepsilon>0$. Choose a partition
$$
P=\{a=x_0<x_1<\cdots<x_n=b\}
$$
with equal subinterval lengths
$$
\Delta x=\frac{b-a}{n}.
$$
Because $f$ is increasing, on each interval $[x_{i-1},x_i]$ we have
$$
\inf_{[x_{i-1},x_i]}f=f(x_{i-1})
\quad\text{and}\quad
\sup_{[x_{i-1},x_i]}f=f(x_i).
$$
Therefore
$$
U(P,f)-L(P,f)
=
\sum_{i=1}^n \left(f(x_i)-f(x_{i-1})\right)\Delta x.
$$
Since all subintervals have the same length,
$$
U(P,f)-L(P,f)
=
\Delta x\sum_{i=1}^n \left(f(x_i)-f(x_{i-1})\right)
=
\Delta x\left(f(b)-f(a)\right).
$$
Thus
$$
U(P,f)-L(P,f)
=
\frac{b-a}{n}\left(f(b)-f(a)\right).
$$
Choose $n$ large enough so that
$$
\frac{b-a}{n}\left(f(b)-f(a)\right)<\varepsilon.
$$
Then $U(P,f)-L(P,f)<\varepsilon$. Hence $f$ is Riemann integrable on $[a,b]$.
::
