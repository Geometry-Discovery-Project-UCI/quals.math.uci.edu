# 2021 Winter Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

For every $a\in\mathbb R$, find all solutions of
$$
|z|^2+2iz+2a(1+i)=0.
$$

#proof

Write $z=x+iy$. Then
$$
|z|^2=x^2+y^2
$$
and
$$
2iz=2ix-2y.
$$
Separating real and imaginary parts gives
$$
x^2+y^2-2y+2a=0,
$$
and
$$
2x+2a=0.
$$
Thus
$$
x=-a.
$$
Substitute into the real equation:
$$
a^2+y^2-2y+2a=0.
$$
Equivalently,
$$
(y-1)^2=2-(a+1)^2.
$$
Therefore solutions exist exactly when
$$
2-(a+1)^2\ge0,
$$
that is,
$$
|a+1|\le \sqrt2.
$$
In that case,
$$

z=-a+i\left(1\pm\sqrt{2-(a+1)^2}\right).

$$
If $|a+1|>\sqrt2$, there are no solutions.
::

::ProblemBlock{number=2}
#problem

Evaluate
$$
\int_\gamma f(z)\,dz,
\qquad
f(z)=\frac1{(z-1)(iz-5)},
$$
where
$$
\gamma(t)=3e^{2\pi it}+e^{6\pi it},\qquad 0\le t\le1.
$$

#proof

The poles are at
$$
z=1
\qquad\text{and}\qquad
z=-5i.
$$
The winding number of $\gamma$ around a point $a$ is the number of zeros in $|w|<1$ of
$$
w^3+3w-a,
$$
where $w=e^{2\pi it}$.

For $a=1$, on $|w|=1$,
$$
|w^3-1|\le2<3=|3w|.
$$
By Rouche's theorem, $w^3+3w-1$ has one zero in $|w|<1$. Hence
$$
n(\gamma,1)=1.
$$
For $a=-5i$, on $|w|=1$,
$$
|w^3+3w|\le4<5=|5i|.
$$
Thus $w^3+3w+5i$ has no zeros in $|w|<1$, so
$$
n(\gamma,-5i)=0.
$$

Only the pole at $z=1$ contributes. Its residue is
$$
\operatorname{Res}_{z=1}f(z)
=\frac1{i-5}.
$$
Therefore
$$

\int_\gamma f(z)\,dz
=2\pi i\frac1{i-5}.

$$
::

::ProblemBlock{number=3}
#problem

Let the sequence $a_0,a_1,a_2,\ldots$ be defined by
$$
1+x^3+x^6+x^9+\cdots
=\sum_{n=0}^{\infty}a_n\left(x+\frac12\right)^n,
\qquad -1<x<0.
$$
Find
$$
\limsup_{n\to\infty}|a_n|^{1/n}.
$$

#proof

The left-hand side is
$$
\frac1{1-x^3}.
$$
The coefficients $a_n$ are the Taylor coefficients of this function centered at $x=-1/2$.

The radius of convergence is the distance from $-1/2$ to the nearest singularity of
$$
\frac1{1-z^3}.
$$
The singularities are the cube roots of unity:
$$
1,\qquad e^{2\pi i/3},\qquad e^{4\pi i/3}.
$$
The distances from $-1/2$ are
$$
\left|1+\frac12\right|=\frac32
$$
and
$$
\left|-\frac12\pm i\frac{\sqrt3}{2}+\frac12\right|=\frac{\sqrt3}{2}.
$$
Thus the radius of convergence is
$$
R=\frac{\sqrt3}{2}.
$$
Therefore
$$
\limsup_{n\to\infty}|a_n|^{1/n}
=\frac1R
=\frac2{\sqrt3}.
$$
::

::ProblemBlock{number=4}
#problem

<span style="display:inline-block; width:1em;"></span> **(a)** Suppose $f:\mathbb C\to\mathbb C$ is a function such that both $f^{2020}$ and $f^{2021}$ are entire functions. Prove that $f$ is entire.

<span style="display:inline-block; width:1em;"></span> **(b)** Suppose $f:\mathbb C\to\mathbb C$ is a function such that both $f^{2020}$ and $f^{2022}$ are entire functions. Does it imply that $f$ is entire? Explain.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** Let
$$
F=f^{2020},
\qquad
G=f^{2021}.
$$
Where $F\ne0$,
$$
f=\frac{G}{F}.
$$
Thus $f$ is holomorphic away from the zeros of $F$.

At a zero $z_0$ of $F$, the identity
$$
G^{2020}=F^{2021}
$$
implies that the vanishing orders are compatible. If
$$
\operatorname{ord}_{z_0}F=m,
$$
then
$$
2021m
$$
is divisible by $2020$. Since $\gcd(2020,2021)=1$, $m$ is divisible by $2020$. Hence $G/F$ has a removable singularity at $z_0$.

Therefore $f=G/F$ extends holomorphically across all zeros of $F$, so $f$ is entire.

<span style="display:inline-block; width:1em;"></span> **(b)** No. Since $\gcd(2020,2022)=2$, the powers only determine $f^2$, not necessarily $f$.

For example, choose any function $f:\mathbb C\to\mathbb C$ satisfying
$$
f(z)^2=z
$$
for every $z$, with some arbitrary choice of square root at each point. Such an $f$ cannot be continuous, hence cannot be entire. But
$$
f^{2020}=z^{1010},
\qquad
f^{2022}=z^{1011},
$$
which are entire functions.
::

::ProblemBlock{number=5}
#problem

Let $f$ be analytic in $\mathbb C\setminus\{0,2\}$, have a simple pole with residue $-1$ at $z=0$, and a simple pole with residue $1$ at $z=2$. Prove that for any $K>0$,
$$
\lim_{n\to\infty}
K^n\left|
\frac{f^{(n)}(1)}{n!}+1+(-1)^n
\right|=0.
$$

#proof

Since the residue at $0$ is $-1$ and the residue at $2$ is $1$, the function
$$
h(z)=f(z)+\frac1z-\frac1{z-2}
$$
is entire.

Thus
$$
f(z)=-\frac1z+\frac1{z-2}+h(z).
$$
Compute derivatives at $z=1$:
$$
\frac1{n!}\left(-\frac1z\right)^{(n)}\bigg|_{z=1}
=(-1)^{n+1},
$$
and
$$
\frac1{n!}\left(\frac1{z-2}\right)^{(n)}\bigg|_{z=1}
=-1.
$$
Therefore
$$
\frac{f^{(n)}(1)}{n!}+1+(-1)^n
=\frac{h^{(n)}(1)}{n!}.
$$

Since $h$ is entire, Cauchy's estimates on the circle $|\zeta-1|=R$ give
$$
\left|\frac{h^{(n)}(1)}{n!}\right|
\le \frac{M_R}{R^n}.
$$
Given $K>0$, choose $R>K$. Then
$$
K^n\left|\frac{h^{(n)}(1)}{n!}\right|
\le M_R\left(\frac KR\right)^n\to0.
$$
This proves the claim.
::

::ProblemBlock{number=6}
#problem

How many roots does
$$
f(z)=z^{2020}+z^{10}+1
$$
have in the first quadrant?

#proof

There are no zeros on the positive real axis, since
$$
x^{2020}+x^{10}+1>0
$$
for $x>0$.

There are also no zeros on the positive imaginary axis. If $z=iy$, $y>0$, then
$$
z^{2020}=y^{2020}
$$
and
$$
z^{10}=-y^{10},
$$
so
$$
f(iy)=y^{2020}-y^{10}+1.
$$
Let $t=y^{10}\ge0$. Then
$$
y^{2020}-y^{10}+1=t^{202}-t+1>0.
$$

Now apply the argument principle to a large quarter-circle in the first quadrant. On the circular arc, the term $z^{2020}$ dominates, so the change of argument tends to
$$
2020\cdot\frac{\pi}{2}=1010\pi.
$$
On the two axis segments, the image stays on the positive real axis and contributes no change of argument.

Thus the number of zeros in the first quadrant is
$$
\frac{1010\pi}{2\pi}=505.
$$
::

::ProblemBlock{number=7}
#problem

Find explicitly a conformal map from
$$
U=\{x+iy:0<x<1,\ y>0\}
$$
to the unit disk.

#proof

Set
$$
w=e^{\pi iz}.
$$
This maps $U$ onto the upper half of the unit disk:
$$
\{w:|w|<1,\ \operatorname{Im}w>0\}.
$$
Then
$$
\eta=\frac{1+w}{1-w}
$$
maps the upper half-disk onto the first quadrant. Squaring maps the first quadrant to the upper half-plane:
$$
\xi=\eta^2.
$$
Finally,
$$
\Phi(\xi)=\frac{\xi-i}{\xi+i}
$$
maps the upper half-plane to the unit disk.

Therefore one explicit map is
$$

\Phi(z)=
\frac{
\left(\frac{1+e^{\pi iz}}{1-e^{\pi iz}}\right)^2-i
}{
\left(\frac{1+e^{\pi iz}}{1-e^{\pi iz}}\right)^2+i
}.

$$
::

::ProblemBlock{number=8}
#problem

Let $f:\mathbb C\to\mathbb C$ be entire, and set
$$
g_a(z)=f\left(\left(\frac za\right)^{\lfloor a\rfloor}\right),
\qquad a>1,
$$
where $\lfloor a\rfloor$ is the greatest integer less than or equal to $a$. Prove that
$$
\{g_a\}_{a\in(1,\infty)}
$$
is a normal family on $\mathbb C$.

#proof

By Montel's theorem, it is enough to prove local boundedness.

Fix a compact set
$$
K=\{z:|z|\le R\}.
$$
For $1<a\le 2R+1$, the points
$$
\left(\frac za\right)^{\lfloor a\rfloor}
$$
remain in some fixed compact disk depending only on $R$.

For $a>2R+1$, we have
$$
\left|\frac za\right|\le \frac12
$$
for all $z\in K$, so
$$
\left|\left(\frac za\right)^{\lfloor a\rfloor}\right|\le1.
$$
Thus, for all $a>1$ and all $z\in K$, the arguments of $f$ lie in a single compact subset of $\mathbb C$ depending only on $K$.

Since $f$ is entire, it is bounded on that compact subset. Hence $\{g_a\}$ is uniformly bounded on $K$. Therefore the family is locally bounded, and by Montel's theorem it is normal.
::
