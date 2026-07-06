# 2019 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Let $f(z)$ be analytic in the punctured disk $0<|z|<1$ and suppose
$$
\operatorname{Re}f(z)<2.
$$
Show that $z=0$ is a removable singularity of $f$.

#proof

Write the Laurent expansion of $f$ at $0$:
$$
f(z)=\sum_{n=-\infty}^{\infty}a_nz^n.
$$
If the principal part were nonzero, let $m\ge1$ be the largest integer such that $a_{-m}\ne0$. Then near $0$,
$$
f(z)=a_{-m}z^{-m}+O(z^{-m+1}).
$$
Along suitable rays approaching $0$, the real part of $a_{-m}z^{-m}$ becomes arbitrarily large and positive. Hence $\operatorname{Re}f(z)$ would be unbounded above near $0$, contradicting
$$
\operatorname{Re}f(z)<2.
$$
Thus the principal part vanishes, so $0$ is removable.
::

::ProblemBlock{number=2}
#problem

Let $u:\mathbb C\to\mathbb R$ be a nonconstant real harmonic function. Show that there exists a sequence $\{z_n\}\subset\mathbb C$ such that
$$
\lim_{n\to\infty}u(z_n)=-\infty.
$$

#proof

Suppose not. Then $u$ is bounded below on $\mathbb C$. Since $\mathbb C$ is simply connected, there is an entire function $F$ such that
$$
\operatorname{Re}F=u.
$$
If $u$ is bounded below, then
$$
e^{-F}
$$
is a bounded entire function. By Liouville's theorem, $e^{-F}$ is constant, hence $F$ is constant, so $u$ is constant. This contradicts the hypothesis.

Therefore $u$ is not bounded below, and there exists a sequence $z_n$ such that
$$
u(z_n)\to-\infty.
$$
::

::ProblemBlock{number=3}
#problem

<span style="display:inline-block; width:1em;"></span> **(a)** State the Schwarz-Pick lemma.

<span style="display:inline-block; width:1em;"></span> **(b)** Suppose $f:D(0,1)\to D(0,1)$ is holomorphic and
$$
f(0)=\frac16.
$$
Give an upper bound for $|f'(0)|$, and characterize the functions for which equality holds.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** Schwarz-Pick says that if $f:D\to D$ is holomorphic, then
$$
\left|\frac{f(z)-f(w)}{1-\overline{f(w)}f(z)}\right|
\le
\left|\frac{z-w}{1-\overline w z}\right|
$$
for all $z,w\in D$. Equivalently,
$$
\frac{|f'(z)|}{1-|f(z)|^2}
\le
\frac1{1-|z|^2}.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** At $z=0$,
$$
|f'(0)|\le 1-|f(0)|^2
=1-\frac1{36}
=\frac{35}{36}.
$$
Equality holds exactly when $f$ is a disk automorphism. Since $f(0)=1/6$, these functions are
$$

f(z)=\phi_{1/6}^{-1}(e^{i\theta}z),
\qquad \theta\in\mathbb R,

$$
where
$$
\phi_{1/6}(w)=\frac{w-1/6}{1-w/6}.
$$
::

::ProblemBlock{number=4}
#problem

Let
$$
f(z)=\frac{z^3}{(z^2+1)e^{1/z}}.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Find and classify all singularities of $f$ in the extended complex plane.

<span style="display:inline-block; width:1em;"></span> **(b)** Evaluate
$$
\oint_\Gamma f(z)\,dz,
$$
where
$$
\Gamma=\{z\in\mathbb C:|\operatorname{Re}z|+|\operatorname{Im}z|=3\}.
$$

<span style="display:inline-block; width:1em;"></span> **(c)** Does there exist a holomorphic function $F$ on $|z|>3$ such that $F'(z)=f(z)$ on $|z|>3$?

#proof

Since
$$
f(z)=\frac{z^3e^{-1/z}}{z^2+1},
$$
the finite singularities are at
$$
z=0,\quad z=i,\quad z=-i.
$$
At $z=0$, the factor $e^{-1/z}$ has an essential singularity, so $f$ has an essential singularity. At $z=\pm i$, the denominator $z^2+1$ has simple zeros, so $f$ has simple poles.

At infinity,
$$
f(z)=z\frac{e^{-1/z}}{1+1/z^2}.
$$
Thus $f(z)\sim z$ as $z\to\infty$, so infinity is a pole of order $1$.

For the integral, expand at infinity:
$$
f(z)=z\left(1-\frac1z+\frac1{2z^2}+O(z^{-3})\right)
\left(1-\frac1{z^2}+O(z^{-4})\right).
$$
The coefficient of $1/z$ is
$$
\frac12-1=-\frac12.
$$
Therefore
$$
\operatorname{Res}_\infty f=\frac12.
$$
Since $\Gamma$ encloses all finite singularities,
$$
\oint_\Gamma f(z)\,dz
=-2\pi i\,\operatorname{Res}_\infty f
=-\pi i.
$$

For part **(c)**, a primitive on the exterior domain $|z|>3$ would force the integral around a large positively oriented circle to vanish. But this integral is
$$
-\pi i\ne0.
$$
Therefore no such holomorphic primitive exists.
::

::ProblemBlock{number=5}
#problem

Assume
$$
f(z)=\sum_{j=0}^{\infty}a_jz^j
$$
is holomorphic for $|z|<1$ and
$$
|a_1|>\sum_{j=2}^{\infty}j|a_j|.
$$
Show that $f$ is one-to-one in $D(0,1)$.

#proof

Let $z,w\in D(0,1)$ with $z\ne w$. Then
$$
\frac{f(z)-f(w)}{z-w}
=a_1+\sum_{j=2}^{\infty}a_j\frac{z^j-w^j}{z-w}.
$$
For $|z|,|w|<1$,
$$
\left|\frac{z^j-w^j}{z-w}\right|
=|z^{j-1}+z^{j-2}w+\cdots+w^{j-1}|
\le j.
$$
Thus
$$
\left|
\sum_{j=2}^{\infty}a_j\frac{z^j-w^j}{z-w}
\right|
\le
\sum_{j=2}^{\infty}j|a_j|
<|a_1|.
$$
Therefore
$$
\frac{f(z)-f(w)}{z-w}\ne0.
$$
Hence $f(z)\ne f(w)$ whenever $z\ne w$, so $f$ is one-to-one.
::

::ProblemBlock{number=6}
#problem

Let
$$
f(z)=\sum_{j=0}^{\infty}a_jz^j
$$
be entire and suppose
$$
|f(z)|\le 10e^{|z|}
$$
for all $z\in\mathbb C$. Prove that
$$
|a_j|\le 10\left(\frac ej\right)^j
$$
for all $j\in\mathbb N$.

#proof

By Cauchy's estimate, for any $r>0$,
$$
|a_j|\le \frac{\max_{|z|=r}|f(z)|}{r^j}
\le \frac{10e^r}{r^j}.
$$
Choose $r=j$. Then
$$
|a_j|\le 10\frac{e^j}{j^j}
=10\left(\frac ej\right)^j.
$$
::

::ProblemBlock{number=7}
#problem

Construct a conformal map $\phi$ from
$$
D_1=\{z\in\mathbb C:0<\operatorname{Re}z<2\}
$$
onto
$$
D_2=\{z\in\mathbb C:|z|>1\}.
$$

#proof

First map the vertical strip to the upper half-plane by
$$
w=e^{\pi iz/2}.
$$
Indeed, if $z=x+iy$ and $0<x<2$, then
$$
\arg w=\frac{\pi x}{2}\in(0,\pi),
$$
so $w$ lies in the upper half-plane.

The map
$$
\phi(z)=\frac{w+i}{w-i}
$$
maps the upper half-plane conformally onto the exterior of the unit disk. Therefore
$$

\phi(z)=
\frac{e^{\pi iz/2}+i}{e^{\pi iz/2}-i}

$$
is a conformal map from $D_1$ onto $D_2$.
::

::ProblemBlock{number=8}
#problem

Let $u$ be harmonic in $D(0,1)\setminus\{0\}$ and suppose
$$
\lim_{z\to0}\frac{u(z)}{\ln|z|}=0.
$$
Prove that $u$ is harmonic on $D(0,1)$.

#proof

An isolated singularity of a harmonic function has the form
$$
u(z)=a\log|z|+\operatorname{Re}\left(\sum_{k=1}^{N}c_kz^{-k}\right)+h(z),
$$
where $h$ is harmonic near $0$, unless the singularity is removable.

The condition
$$
\frac{u(z)}{\ln|z|}\to0
$$
forces $a=0$. It also rules out every principal part term $z^{-k}$, because such terms grow faster than $|\log|z||$ along suitable paths.

Therefore the singular part vanishes, so $u$ has a removable singularity at $0$. Hence $u$ extends harmonically to $D(0,1)$.
::
