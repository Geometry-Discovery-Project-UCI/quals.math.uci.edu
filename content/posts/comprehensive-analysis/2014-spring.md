# 2014 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Suppose that $f$ is differentiable on $(-1,1)$ and has $n$ distinct zeros in $(-1,1)$. Prove that $f'(x)$ has at least $n-1$ zeros in $(-1,1)$.

#proof
Let the $n$ distinct zeros of $f$ be
$$
r_1<r_2<\cdots<r_n,
$$
where each $r_i\in(-1,1)$ and $f(r_i)=0$.

For each $i=1,\dots,n-1$, the function $f$ is continuous on $[r_i,r_{i+1}]$ and differentiable on $(r_i,r_{i+1})$. Since
$$
f(r_i)=0=f(r_{i+1}),
$$
Rolle's theorem gives a point $c_i\in(r_i,r_{i+1})$ such that
$$
f'(c_i)=0.
$$
The intervals $(r_i,r_{i+1})$ are disjoint, so the points $c_1,\dots,c_{n-1}$ are distinct. Hence $f'$ has at least $n-1$ zeros in $(-1,1)$.
::

::ProblemBlock{number=2}
#problem
Let $\{x_n\}_{n=1}^{\infty}$ be a sequence of points in $\mathbb R^m$ such that
$$
\sum_{n=1}^{\infty}\|x_n-x_{n-1}\|<\infty.
$$
Prove that $\{x_n\}_{n=1}^{\infty}$ is a convergent sequence in $\mathbb R^m$.

#proof
The condition implies that the numerical series
$$
\sum_{n=1}^{\infty}\|x_n-x_{n-1}\|
$$
converges. Therefore its tails tend to $0$. That is, for every $\varepsilon>0$, there exists $N\in\mathbb N$ such that whenever $q>p\ge N$,
$$
\sum_{k=p+1}^{q}\|x_k-x_{k-1}\|<\varepsilon.
$$
For such $p$ and $q$, the triangle inequality gives
$$
\|x_q-x_p\|
=
\left\|\sum_{k=p+1}^{q}(x_k-x_{k-1})\right\|
\le
\sum_{k=p+1}^{q}\|x_k-x_{k-1}\|
<\varepsilon.
$$
Thus $\{x_n\}$ is a Cauchy sequence in $\mathbb R^m$. Since $\mathbb R^m$ is complete, $\{x_n\}$ converges in $\mathbb R^m$.
::

::ProblemBlock{number=3}
#problem
Show that the sequence $\{a_n\}_{n=1}^{\infty}$ defined recursively by
$$
a_1>1,
\qquad
 a_n=\sqrt{2a_{n-1}-1},\quad n\ge 2,
$$
converges, and find its limit.

#proof
First we show that $a_n>1$ for all $n$. Since $a_1>1$, suppose $a_{n-1}>1$. Then
$$
2a_{n-1}-1>1,
$$
so
$$
a_n=\sqrt{2a_{n-1}-1}>1.
$$
Thus $a_n>1$ for all $n$.

Next, for any $t>1$, we have
$$
\sqrt{2t-1}<t
$$
because both sides are positive and
$$
2t-1<t^2
\Longleftrightarrow
0<(t-1)^2.
$$
Applying this with $t=a_{n-1}$ gives
$$
a_n<a_{n-1}
$$
for all $n\ge2$. Therefore $\{a_n\}$ is decreasing and bounded below by $1$. Hence it converges. Let
$$
\lim_{n\to\infty}a_n=L.
$$
Since $a_n>1$, we have $L\ge1$. Passing to the limit in
$$
a_n=\sqrt{2a_{n-1}-1},
$$
we obtain
$$
L=\sqrt{2L-1}.
$$
Squaring gives
$$
L^2=2L-1,
$$
so
$$
(L-1)^2=0.
$$
Therefore
$$
L=1.
$$
Hence $\{a_n\}$ converges to $1$.
::

::ProblemBlock{number=4}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State Stokes' Theorem.

<span style="display:inline-block; width:1em;"></span> **(b)** Evaluate the following integral:
$$
\int_{\partial D}
\frac{x^3}{3}\,dy\wedge dz+
\sin(yz)\,dy\wedge dz+
x^{10}\,dx\wedge dz,
$$
where
$$
D=
\left\{(x,y,z):\frac{x^2}{4}+\frac{y^2}{9}+\frac{z^2}{16}<1\right\}.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Stokes' Theorem says the following. If $M$ is an oriented smooth manifold with boundary $\partial M$, and $\omega$ is a smooth differential form of degree one less than $\dim M$, then
$$
\int_{\partial M}\omega=\int_M d\omega,
$$
where $\partial M$ carries the induced boundary orientation.

<span style="display:inline-block; width:1em;"></span> **(b)** Let
$$
\omega=
\frac{x^3}{3}\,dy\wedge dz+
\sin(yz)\,dy\wedge dz+x^{10}\,dx\wedge dz.
$$
Then
$$
d\left(\frac{x^3}{3}\,dy\wedge dz\right)
=x^2\,dx\wedge dy\wedge dz.
$$
Also,
$$
d\bigl(\sin(yz)\,dy\wedge dz\bigr)
=d(\sin(yz))\wedge dy\wedge dz.
$$
Since
$$
d(\sin(yz))=z\cos(yz)\,dy+y\cos(yz)\,dz,
$$
we get
$$
d(\sin(yz))\wedge dy\wedge dz=0.
$$
Finally,
$$
d(x^{10}\,dx\wedge dz)=10x^9\,dx\wedge dx\wedge dz=0.
$$
Therefore
$$
d\omega=x^2\,dx\wedge dy\wedge dz.
$$
By Stokes' Theorem,
$$
\int_{\partial D}\omega
=
\int_D x^2\,dV.
$$
The region $D$ is the ellipsoid with semiaxes $2,3,4$. Put
$$
x=2X,\qquad y=3Y,\qquad z=4Z.
$$
Then $X^2+Y^2+Z^2<1$ and
$$
dV=24\,dX\,dY\,dZ.
$$
Hence
$$
\int_D x^2\,dV
=
\int_{X^2+Y^2+Z^2<1}4X^2\cdot 24\,dX\,dY\,dZ
=96\int_{B(0,1)}X^2\,dV.
$$
By symmetry,
$$
\int_{B(0,1)}X^2\,dV
=\frac{1}{3}\int_{B(0,1)}(X^2+Y^2+Z^2)\,dV.
$$
Using spherical coordinates,
$$
\int_{B(0,1)}(X^2+Y^2+Z^2)\,dV
=
\int_{B(0,1)}r^2\,dV
=
4\pi\int_0^1r^4\,dr
=
\frac{4\pi}{5}.
$$
Thus
$$
\int_{B(0,1)}X^2\,dV=\frac{4\pi}{15}.
$$
Therefore
$$
\int_{\partial D}\omega
=96\cdot \frac{4\pi}{15}
=\frac{128\pi}{5}.
$$
So the value of the integral is
$\frac{128\pi}{5}.$
::

::ProblemBlock{number=5}
#problem
Let $S$ be a subset of $\mathbb R^2$ such that every point $x\in S$ is an isolated point. Prove that $S$ is at most countable.

#proof
Since every point $x\in S$ is isolated, for each $x\in S$ there exists $r_x>0$ such that
$$
B(x,r_x)\cap S=\{x\}.
$$
Let $\mathcal B$ be the collection of all open balls in $\mathbb R^2$ whose centers have rational coordinates and whose radii are positive rational numbers. This is a countable basis for the topology of $\mathbb R^2$.

For each $x\in S$, since $B(x,r_x)$ is open and contains $x$, there exists a basis element $B_x\in\mathcal B$ such that
$$
x\in B_x\subset B(x,r_x).
$$
Then
$$
B_x\cap S=\{x\}.
$$
We claim the assignment $x\mapsto B_x$ is injective. Indeed, if $x,y\in S$ and $x\ne y$, then $B_x\cap S=\{x\}$, so $y\notin B_x$. Therefore $B_y$ cannot equal $B_x$, because $y\in B_y$.

Thus $S$ injects into the countable set $\mathcal B$. Hence $S$ is at most countable.
::

::ProblemBlock{number=6}
#problem
Let $X=C[0,2\pi]$ be the space of all real-valued continuous functions on $[0,2\pi]$ with metric
$$
d(f,g)=\max\{|f(x)-g(x)|:x\in[0,2\pi]\}.
$$
Let
$$
Y=\{\sin(x+\alpha):\alpha\in\mathbb R\}\subset C[0,2\pi].
$$
Prove that $Y$ is a compact subset of $(X,d)$.

#proof
Define
$$
\Phi:[0,2\pi]\to C[0,2\pi]
$$
by
$$
\Phi(\alpha)(x)=\sin(x+\alpha).
$$
We first show that $\Phi$ is continuous with respect to the metric $d$. For $\alpha,\beta\in[0,2\pi]$, by the mean value theorem applied to the sine function,
$$
|\sin(x+\alpha)-\sin(x+\beta)|\le |\alpha-\beta|
$$
for every $x\in[0,2\pi]$. Therefore
$$
d(\Phi(\alpha),\Phi(\beta))
=
\max_{x\in[0,2\pi]}|\sin(x+\alpha)-\sin(x+\beta)|
\le
|\alpha-\beta|.
$$
Thus $\Phi$ is continuous.

Since $[0,2\pi]$ is compact, the image $\Phi([0,2\pi])$ is compact in $C[0,2\pi]$. Also, because sine is $2\pi$-periodic,
$$
\{\sin(x+\alpha):\alpha\in\mathbb R\}
=
\{\sin(x+\alpha):\alpha\in[0,2\pi]\}.
$$
Hence
$$
Y=\Phi([0,2\pi]),
$$
and therefore $Y$ is compact.
::

::ProblemBlock{number=7}
#problem
Let $f(x)$ be a Riemann integrable function on $[0,1]$. Prove that
$$
\lim_{m\to\infty}\int_0^1 f(x)\cos(mx)\,dx=0.
$$

#proof
We first prove the result for a step function. Suppose
$$
\phi(x)=\sum_{j=1}^N c_j\mathbf 1_{[a_j,b_j]}(x)
$$
up to endpoints. Then
$$
\int_0^1\phi(x)\cos(mx)\,dx
=
\sum_{j=1}^N c_j\int_{a_j}^{b_j}\cos(mx)\,dx.
$$
For each interval,
$$
\int_{a_j}^{b_j}\cos(mx)\,dx
=
\frac{\sin(mb_j)-\sin(ma_j)}{m},
$$
which tends to $0$ as $m\to\infty$. Hence
$$
\lim_{m\to\infty}\int_0^1\phi(x)\cos(mx)\,dx=0.
$$

Now let $f$ be Riemann integrable on $[0,1]$. Given $\varepsilon>0$, by Riemann integrability there exists a step function $\phi$ such that
$$
\int_0^1 |f(x)-\phi(x)|\,dx<\varepsilon.
$$
Then
$$
\left|\int_0^1 f(x)\cos(mx)\,dx\right|
\le
\left|\int_0^1 (f(x)-\phi(x))\cos(mx)\,dx\right|
+
\left|\int_0^1 \phi(x)\cos(mx)\,dx\right|.
$$
Since $|\cos(mx)|\le1$,
$$
\left|\int_0^1 (f(x)-\phi(x))\cos(mx)\,dx\right|
\le
\int_0^1 |f(x)-\phi(x)|\,dx
<\varepsilon.
$$
For the fixed step function $\phi$, we already proved that
$$
\int_0^1\phi(x)\cos(mx)\,dx\to0.
$$
Therefore, for all sufficiently large $m$,
$$
\left|\int_0^1 \phi(x)\cos(mx)\,dx\right|<\varepsilon.
$$
Hence, for all sufficiently large $m$,
$$
\left|\int_0^1 f(x)\cos(mx)\,dx\right|<2\varepsilon.
$$
Since $\varepsilon>0$ was arbitrary,
$$
\lim_{m\to\infty}\int_0^1 f(x)\cos(mx)\,dx=0.
$$
::

::ProblemBlock{number=8}
#problem
Let
$$
f(x)=\ln(1+\|x\|^2),\qquad x\in\mathbb R^n.
$$
Prove that $f(x)$ is uniformly continuous on $\mathbb R^n$.

#proof
The function $f$ is differentiable on $\mathbb R^n$, and
$$
\nabla f(x)=\frac{2x}{1+\|x\|^2}.
$$
Therefore
$$
\|\nabla f(x)\|
=
\frac{2\|x\|}{1+\|x\|^2}.
$$
For $r=\|x\|\ge0$, we have
$$
\frac{2r}{1+r^2}\le1
$$
because
$$
2r\le1+r^2
\Longleftrightarrow
0\le(r-1)^2.
$$
Thus
$$
\|\nabla f(x)\|\le1
$$
for all $x\in\mathbb R^n$.

Now take any $x,y\in\mathbb R^n$. Define
$$
\gamma(t)=y+t(x-y),\qquad 0\le t\le1.
$$
Then
$$
f(x)-f(y)
=
\int_0^1 \nabla f(\gamma(t))\cdot (x-y)\,dt.
$$
Hence
$$
|f(x)-f(y)|
\le
\int_0^1 \|\nabla f(\gamma(t))\|\,\|x-y\|\,dt
\le
\|x-y\|.
$$
Thus $f$ is Lipschitz continuous with Lipschitz constant $1$. In particular, $f$ is uniformly continuous on $\mathbb R^n$.
::

::ProblemBlock{number=9}
#problem
Let $f$ be a differentiable function on $[0,1]$ such that
$$
\int_0^1 |f'(s)|^2\,ds\le A^2
$$
for some positive constant $A$. Prove that
$$
|f(x)-f(y)|\le A|x-y|^{1/2}
$$
for all $x,y\in[0,1]$.

#proof
Assume without loss of generality that $0\le x<y\le1$. By the fundamental theorem of calculus,
$$
f(y)-f(x)=\int_x^y f'(s)\,ds.
$$
Therefore, by the Cauchy-Schwarz inequality,
$$
|f(y)-f(x)|
\le
\int_x^y |f'(s)|\,ds
\le
\left(\int_x^y |f'(s)|^2\,ds\right)^{1/2}
\left(\int_x^y 1^2\,ds\right)^{1/2}.
$$
Thus
$$
|f(y)-f(x)|
\le
\left(\int_0^1 |f'(s)|^2\,ds\right)^{1/2}(y-x)^{1/2}
\le
A(y-x)^{1/2}.
$$
Since $y-x=|x-y|$, we obtain
$$
|f(x)-f(y)|\le A|x-y|^{1/2}.
$$
The case $x=y$ is immediate. Hence the estimate holds for all $x,y\in[0,1]$.
::
