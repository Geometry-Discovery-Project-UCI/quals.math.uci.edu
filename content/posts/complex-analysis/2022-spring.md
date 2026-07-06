# 2022 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Let $\varepsilon>0$ and let
$$
P(z)=a_nz^n+a_{n-1}z^{n-1}+\cdots+a_0
$$
be a polynomial with complex coefficients such that
$$
|a_k-1|\le\varepsilon
$$
for all $k=0,\ldots,n$. Show that for $\varepsilon>0$ sufficiently small, $P(z)$ has $n$ simple zeros in the annulus
$$
\left\{z\in\mathbb C:\frac12<|z|<2\right\}.
$$

#proof

Let
$$
P_0(z)=1+z+\cdots+z^n=\frac{z^{n+1}-1}{z-1}.
$$
The zeros of $P_0$ are the $(n+1)$st roots of unity other than $1$. Thus $P_0$ has $n$ simple zeros, all lying on $|z|=1$.

Choose pairwise disjoint small disks $D_1,\ldots,D_n$ around these zeros, all contained in the annulus
$$
\frac12<|z|<2.
$$
On the union of the boundary circles $\partial D_j$, the continuous function $|P_0|$ has a positive minimum:
$$
m=\min_{\cup_j\partial D_j}|P_0(z)|>0.
$$
Now
$$
P(z)-P_0(z)=\sum_{k=0}^n(a_k-1)z^k.
$$
On the compact set $\cup_j\partial D_j$, this satisfies
$$
|P(z)-P_0(z)|\le \varepsilon C
$$
for some constant $C$ depending only on the chosen disks and $n$.

Choose $\varepsilon>0$ so small that $\varepsilon C<m$. Then on every $\partial D_j$,
$$
|P-P_0|<|P_0|.
$$
By Rouche's theorem, $P$ and $P_0$ have the same number of zeros in each $D_j$. Since each $D_j$ contains exactly one simple zero of $P_0$, each $D_j$ contains exactly one zero of $P$.

Thus $P$ has $n$ zeros in the annulus. Since $P$ has degree $n$ for $\varepsilon<1$, these are all its zeros. Moreover, by choosing the disks small and using the fact that zeros vary continuously under small perturbations of the coefficients, the zeros remain simple for sufficiently small $\varepsilon$.
::

::ProblemBlock{number=2}
#problem

Let
$$
D=\{z\in\mathbb C:|z|<1\},
\qquad
H=\{z\in\mathbb C:\operatorname{Im}z>0\}.
$$
Compute
$$
\sup\{\operatorname{Im} f'(i/2): f:H\to D \text{ holomorphic}\}.
$$

#proof

Let
$$
\phi(z)=\frac{z-i/2}{z+i/2}.
$$
Then $\phi:H\to D$ is conformal and $\phi(i/2)=0$. Also
$$
\phi'(z)=\frac{i}{(z+i/2)^2},
$$
so
$$
\phi'(i/2)=-i.
$$

For any holomorphic $f:H\to D$, the function
$$
g=f\circ\phi^{-1}
$$
maps $D$ to $D$. By Schwarz-Pick,
$$
|g'(0)|\le1.
$$
Since
$$
g'(0)=f'(i/2)(\phi^{-1})'(0)
$$
and $|(\phi^{-1})'(0)|=1$, we get
$$
|f'(i/2)|\le1.
$$
Therefore
$$
\operatorname{Im}f'(i/2)\le1.
$$

This bound is attained by taking
$$
f(z)=-\phi(z).
$$
Then
$$
f'(i/2)=i,
$$
so
$$
\operatorname{Im}f'(i/2)=1.
$$
Hence the supremum is
$$
1.
$$
::

::ProblemBlock{number=3}
#problem

Let $f$ be holomorphic on
$$
H=\{z\in\mathbb C:\operatorname{Im}z>0\}
$$
and continuous on
$$
\overline H=\{z\in\mathbb C:\operatorname{Im}z\ge0\}.
$$
Suppose there exist constants $C,\epsilon>0$ such that
$$
|f(z)|\le \frac{C}{(|z|+1)^\epsilon},
\qquad z\in H.
$$
Prove that
$$
f(z)=\frac1{2\pi i}\int_{-\infty}^{\infty}\frac{f(t)}{t-z}\,dt
$$
for all $z\in H$.

#proof

Fix $z\in H$. For $R>|z|$, integrate
$$
\frac{f(w)}{w-z}
$$
over the positively oriented contour consisting of the interval $[-R,R]$ and the upper semicircle $|w|=R$.

By Cauchy's integral formula,
$$
\int_{-R}^{R}\frac{f(t)}{t-z}\,dt
+\int_{\Gamma_R}\frac{f(w)}{w-z}\,dw
=2\pi i f(z).
$$
On the semicircle $\Gamma_R$, for large $R$,
$$
\left|\frac{f(w)}{w-z}\right|
\le
\frac{C}{(R+1)^\epsilon}\cdot \frac{2}{R}.
$$
Since the length of $\Gamma_R$ is $\pi R$, the arc integral is $O(R^{-\epsilon})$, hence tends to $0$.

Letting $R\to\infty$, we obtain
$$
\int_{-\infty}^{\infty}\frac{f(t)}{t-z}\,dt=2\pi i f(z),
$$
which proves the formula.
::

::ProblemBlock{number=4}
#problem

Let $f$ be holomorphic on a neighborhood of
$$
\overline D=\{z\in\mathbb C:|z|\le1\}.
$$
Assume that whenever $|z|=1$,
$$
\operatorname{Re}f(z)=\operatorname{Im}f(z).
$$
Show that $f$ is constant.

#proof

Write
$$
f=u+iv.
$$
The hypothesis says that
$$
u-v=0
$$
on $|z|=1$. Since $u-v$ is harmonic in a neighborhood of $\overline D$, the maximum principle gives
$$
u-v=0
$$
throughout $D$. Hence
$$
u=v
$$
in $D$.

Differentiate $u=v$ to get
$$
u_x=v_x,\qquad u_y=v_y.
$$
The Cauchy-Riemann equations give
$$
u_x=v_y,\qquad u_y=-v_x.
$$
Combining these,
$$
u_x=u_y,\qquad u_y=-u_x.
$$
Thus
$$
u_x=u_y=0.
$$
So $u$ is constant, and therefore $v=u$ is constant. Hence $f$ is constant.
::

::ProblemBlock{number=5}
#problem

Find all holomorphic functions $f:\mathbb C\to\mathbb C$ such that for all $z\in\mathbb C$,
$$
f(z+1)=e^{2\pi}f(z),
\qquad
f(z+i)=f(z).
$$

#proof

Define
$$
g(z)=e^{-2\pi z}f(z).
$$
Then
$$
g(z+1)=e^{-2\pi(z+1)}f(z+1)
=e^{-2\pi z}f(z)=g(z),
$$
and
$$
g(z+i)=e^{-2\pi(z+i)}f(z+i)
=e^{-2\pi z}e^{-2\pi i}f(z)=g(z).
$$
Thus $g$ is entire and doubly periodic with periods $1$ and $i$.

An entire doubly periodic function is bounded on a fundamental parallelogram, hence bounded on all of $\mathbb C$. By Liouville's theorem, $g$ is constant.

Therefore all solutions are
$$

f(z)=Ce^{2\pi z},\qquad C\in\mathbb C.

$$
::

::ProblemBlock{number=6}
#problem

Let $f$ be holomorphic on
$$
D=\{z\in\mathbb C:|z|<1\}
$$
and assume that
$$
0<|f(z)|\le1
$$
for $z\in D$. Prove that for all $z\in D$,
$$
|f(0)|^{\frac{1+|z|}{1-|z|}}
\le
|f(z)|
\le
|f(0)|^{\frac{1-|z|}{1+|z|}}.
$$

#proof

Since $f$ has no zeros in $D$, the function
$$
u(z)=-\log|f(z)|
$$
is positive and harmonic in $D$. Harnack's inequality for positive harmonic functions on the unit disk gives, for $r=|z|$,
$$
\frac{1-r}{1+r}u(0)
\le u(z)\le
\frac{1+r}{1-r}u(0).
$$
Substitute
$$
u(z)=-\log|f(z)|,\qquad u(0)=-\log|f(0)|.
$$
Since $0<|f(0)|\le1$, exponentiating the inequalities gives
$$
|f(0)|^{\frac{1+r}{1-r}}
\le
|f(z)|
\le
|f(0)|^{\frac{1-r}{1+r}}.
$$
This is the desired estimate.
::

::ProblemBlock{number=7}
#problem

Let $E_M$ be the set of functions holomorphic on
$$
D=\{z\in\mathbb C:|z|<1\}
$$
and continuous on
$$
\overline D=\{z\in\mathbb C:|z|\le1\}
$$
that satisfy
$$
\int_0^{2\pi}|f(e^{it})|^2\,dt\le M<\infty.
$$
Show that $E_M$ is a normal family.

#proof

It is enough to prove local boundedness. Fix $0<r<1$. For $|z|\le r$, Cauchy's integral formula gives
$$
f(z)=\frac1{2\pi i}\int_{|\zeta|=1}\frac{f(\zeta)}{\zeta-z}\,d\zeta.
$$
Therefore
$$
|f(z)|
\le \frac1{2\pi}\int_0^{2\pi}
\frac{|f(e^{it})|}{|e^{it}-z|}\,dt.
$$
Since $|e^{it}-z|\ge1-r$, Cauchy-Schwarz gives
$$
|f(z)|
\le
\frac1{2\pi(1-r)}
\left(\int_0^{2\pi}|f(e^{it})|^2\,dt\right)^{1/2}
(2\pi)^{1/2}.
$$
Thus
$$
|f(z)|\le C_{M,r}
$$
for all $|z|\le r$ and all $f\in E_M$.

Hence $E_M$ is locally bounded. By Montel's theorem, $E_M$ is a normal family.
::

::ProblemBlock{number=8}
#problem

Determine all entire functions $f:\mathbb C\to\mathbb C$ such that
$$
|f(z)|\le e^{|z|}
$$
for all sufficiently large $|z|$, and
$$
f(k^{1/4})=k
$$
for all $k\in\mathbb N$.

#proof

The function
$$
f(z)=z^4
$$
satisfies the conditions.

We prove it is the only solution. Let
$$
h(z)=f(z)-z^4.
$$
Then $h$ is entire and
$$
h(k^{1/4})=0
$$
for every $k\in\mathbb N$.

The growth hypothesis gives, for large $|z|$,
$$
|h(z)|\le e^{|z|}+|z|^4\le e^{2|z|}.
$$
Thus $h$ has at most exponential growth of order $1$.

If $h$ were not identically zero, Jensen's formula would imply that the number of zeros of $h$ in $|z|<R$ is at most $O(R)$ for this growth. But the zeros
$$
k^{1/4}
$$
with $k<R^4$ all lie in $|z|<R$, so there are at least on the order of $R^4$ zeros. This contradiction implies
$$
h\equiv0.
$$
Therefore
$$
f(z)=z^4.
$$
::
