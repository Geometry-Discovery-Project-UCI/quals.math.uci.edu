# 2024 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Let $u$ be a real-valued harmonic function on a domain $U\subset\mathbb C$. Show that the zero set of $u$ does not have an isolated point. The zero set is
$$
Z=\{z\in U:u(z)=0\}.
$$

#proof

Let $z_0\in Z$. We prove that $z_0$ is not an isolated point of $Z$.

Since $u$ is harmonic, it is real analytic. In a small disk centered at $z_0$, write
$$
u(z)=\sum_{m=0}^{\infty}P_m(z-z_0),
$$
where each $P_m$ is a homogeneous harmonic polynomial of degree $m$. Since $u(z_0)=0$, the constant term is zero.

If all terms vanish, then $u$ is identically zero in a neighborhood of $z_0$, and then $z_0$ is certainly not isolated in the zero set.

Otherwise, let $m\ge 1$ be the first degree for which $P_m\ne0$. A nonzero homogeneous harmonic polynomial in two variables has the form
$$
P_m(re^{i\theta})=cr^m\cos(m\theta+\alpha)
$$
for some constants $c\ne0$ and $\alpha$. This function vanishes along $2m$ rays through $z_0$. By the implicit structure of real analytic zero sets, the zero set of $u$ near $z_0$ consists of arcs tangent to those rays. In particular, there are zeros of $u$ arbitrarily close to $z_0$ other than $z_0$ itself.

Thus no point of $Z$ is isolated.
::

::ProblemBlock{number=2}
#problem

Is there an entire function $f$ that satisfies
$$
|f(z)|\ge e^{|z|}
$$
for all sufficiently large $|z|$? Either provide an example or prove that none exists.

#proof

No such entire function exists.

Suppose such an entire function $f$ existed. Then for all sufficiently large $|z|$,
$$
|f(z)|\ge e^{|z|}>0.
$$
Hence $f$ has no zeros outside a large disk. Therefore $f$ has only finitely many zeros in $\mathbb C$.

Let $P$ be the polynomial whose zeros, with multiplicity, are exactly the zeros of $f$. Then
$$
g(z)=\frac{P(z)}{f(z)}
$$
is entire. For sufficiently large $|z|$,
$$
|g(z)|\le C|z|^N e^{-|z|}
$$
for some constants $C,N>0$. In particular,
$$
g(z)\to0
$$
as $|z|\to\infty$.

Thus $g$ is an entire function bounded near infinity, hence bounded on all of $\mathbb C$. By Liouville's theorem, $g$ is constant. Since $g(z)\to0$, this constant must be $0$. But $g=P/f$ is not identically zero. This contradiction proves that no such entire function exists.
::

::ProblemBlock{number=3}
#problem

Fix a complex number $\lambda$ with $0<|\lambda|<1$. For $n\ge1$, let
$$
f(z)=(z-1)^ne^z+\lambda(z+1)^n.
$$
Show that $f$ has exactly $n$ simple zeros in the right half-plane $\operatorname{Re}z>0$.

#proof

Let
$$
h(z)=(z-1)^ne^z,
\qquad
k(z)=\lambda(z+1)^n.
$$
We compare $h$ and $k$ on a large right half-disk
$$
D_R=\{z:\operatorname{Re}z>0,\ |z|<R\}.
$$

On the imaginary axis, $z=iy$, we have
$$
|z-1|=|z+1|
$$
and
$$
|e^z|=1.
$$
Thus
$$
|h(z)|=|z+1|^n>| \lambda|\,|z+1|^n=|k(z)|.
$$
On the large semicircle $|z|=R$, $\operatorname{Re}z\ge0$, we have
$$
\frac{|h(z)|}{|k(z)|}
=\frac{e^{\operatorname{Re}z}}{|\lambda|}
\left|\frac{z-1}{z+1}\right|^n.
$$
For $R$ sufficiently large, this ratio is greater than $1$ uniformly on the semicircle. Hence, by Rouche's theorem on $D_R$, the functions $h+k$ and $h$ have the same number of zeros in $D_R$.

The function $h(z)=(z-1)^ne^z$ has exactly $n$ zeros in the right half-plane, all at $z=1$, counted with multiplicity. Therefore $f$ has exactly $n$ zeros in $\operatorname{Re}z>0$.

It remains to prove the zeros are simple. Suppose $z_0$ is a multiple zero. Then
$$
(z_0-1)^ne^{z_0}+\lambda(z_0+1)^n=0
$$
and
$$
(z_0-1)^{n-1}e^{z_0}(z_0-1+n)+\lambda n(z_0+1)^{n-1}=0.
$$
Using the first equation in the second gives
$$
(z_0-1)^{n-1}e^{z_0}
\left(z_0-1+n-\frac{n(z_0-1)}{z_0+1}\right)=0.
$$
Thus
$$
z_0-1+\frac{2n}{z_0+1}=0.
$$
Equivalently,
$$
z_0^2=1-2n.
$$
So $z_0$ is purely imaginary. This contradicts the fact that all zeros lie in the open right half-plane. Therefore all zeros are simple.
::

::ProblemBlock{number=4}
#problem

Show that
$$
\cosh\left(z+\frac1z\right)
$$
has the following Laurent series centered at $0$:
$$
\cosh\left(z+\frac1z\right)
=a_0+\sum_{n=1}^{\infty}a_n\left(z^n+\frac1{z^n}\right),
\qquad z\ne0,
$$
where
$$
a_n=\frac1{2\pi}\int_0^{2\pi}\cos(nt)\cosh(2\cos t)\,dt,
\qquad n=0,1,2,\ldots.
$$
Recall that $\cosh z=\frac12(e^z+e^{-z})$.

#proof

Let
$$
F(z)=\cosh\left(z+\frac1z\right).
$$
This is holomorphic on $\mathbb C\setminus\{0\}$, so it has a Laurent expansion
$$
F(z)=\sum_{n=-\infty}^{\infty}c_nz^n.
$$
On the unit circle $z=e^{it}$,
$$
z+\frac1z=e^{it}+e^{-it}=2\cos t.
$$
Therefore
$$
F(e^{it})=\cosh(2\cos t).
$$
The Laurent coefficients are the Fourier coefficients:
$$
c_n=\frac1{2\pi}\int_0^{2\pi}F(e^{it})e^{-int}\,dt
=\frac1{2\pi}\int_0^{2\pi}\cosh(2\cos t)e^{-int}\,dt.
$$
Since $\cosh(2\cos t)$ is real and even as a function of $t$, its sine Fourier coefficients vanish. Hence
$$
c_n=\frac1{2\pi}\int_0^{2\pi}\cos(nt)\cosh(2\cos t)\,dt=a_n.
$$
Also,
$$
F(1/z)=F(z),
$$
so $c_{-n}=c_n$. Thus
$$
F(z)=a_0+\sum_{n=1}^{\infty}a_n(z^n+z^{-n}),
$$
as required.
::

::ProblemBlock{number=5}
#problem

Let $f(z)$ be holomorphic on the punctured disk $D(0,1)\setminus\{0\}$ and let $g$ be a non-constant entire function. Determine the type of the singularity of $g\circ f$ at $z=0$ for each of the following cases, with proofs:

<span style="display:inline-block; width:1em;"></span> **(a)** $z=0$ is a removable singularity of $f$.

<span style="display:inline-block; width:1em;"></span> **(b)** $z=0$ is a pole of $f$.

<span style="display:inline-block; width:1em;"></span> **(c)** $z=0$ is an essential singularity of $f$.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** If $f$ has a removable singularity at $0$, then $f$ extends holomorphically to $0$. Since $g$ is entire, $g\circ f$ also extends holomorphically to $0$. Thus $g\circ f$ has a removable singularity at $0$.

<span style="display:inline-block; width:1em;"></span> **(b)** Suppose $f$ has a pole at $0$. Then $f(z)\to\infty$ as $z\to0$.

If $g$ is a non-constant polynomial of degree $d$, then
$$
g(w)\sim c_dw^d
$$
as $w\to\infty$, with $c_d\ne0$. Hence $g(f(z))\to\infty$, and $g\circ f$ has a pole at $0$.

If $g$ is transcendental entire, then $g$ has an essential singularity at infinity. Since a pole $f$ maps a sufficiently small punctured disk around $0$ onto the exterior of a sufficiently large disk, the composition $g\circ f$ has an essential singularity at $0$.

Thus in case **(b)**, $g\circ f$ has a pole if $g$ is a polynomial, and an essential singularity if $g$ is transcendental entire.

<span style="display:inline-block; width:1em;"></span> **(c)** Suppose $f$ has an essential singularity at $0$. By the Casorati-Weierstrass theorem, the image of every punctured neighborhood of $0$ under $f$ is dense in $\mathbb C$.

If $g\circ f$ had a removable singularity or a pole at $0$, then $g(f(z))$ would tend to a limit in $\mathbb C$ or to $\infty$ as $z\to0$. But since $f$ takes values arbitrarily close to every complex number near the essential singularity, this would force the non-constant entire function $g$ to have only one limiting value on a dense subset of $\mathbb C$, which is impossible.

Therefore $g\circ f$ has an essential singularity at $0$.
::

::ProblemBlock{number=6}
#problem

Let $F$ be the family of holomorphic functions $f$ on the unit disk $D(0,1)$ satisfying
$$
|f(0)|^2+\iint_{D(0,1)} |f'(z)|^2(1-|z|^2)\,dA\le1.
$$
Prove that $F$ is a normal family on $D(0,1)$.

#proof

We prove that $F$ is locally bounded. Then Montel's theorem implies normality.

Fix $0<r<1$. For $|z|\le r$, choose a number $s>0$ such that every disk $D(z,s)$ lies in $D(0,\rho)$ for some $\rho<1$. On $D(0,\rho)$, we have
$$
1-|w|^2\ge 1-\rho^2.
$$
Hence
$$
\iint_{D(0,\rho)} |f'(w)|^2\,dA(w)
\le \frac{1}{1-\rho^2}
$$
for every $f\in F$.

Since $f'$ is holomorphic, $|f'|^2$ is subharmonic. By the mean-value inequality, for $|z|\le r$,
$$
|f'(z)|^2
\le \frac{1}{\pi s^2}\iint_{D(z,s)}|f'(w)|^2\,dA(w)
\le C_r,
$$
where $C_r$ depends only on $r$, not on $f$.

Also,
$$
|f(0)|\le1.
$$
For $|z|\le r$,
$$
|f(z)|
\le |f(0)|+\int_0^1 |f'(tz)|\,|z|\,dt
\le 1+r\sqrt{C_r}.
$$
Thus $F$ is uniformly bounded on every compact subset of $D(0,1)$. By Montel's theorem, $F$ is a normal family.
::

::ProblemBlock{number=7}
#problem

Let $g$ be a non-constant entire function. Prove or disprove that there is a holomorphic function $f(z)$ on the unit disk $D(0,1)$ such that
$$
f(z)=g(\overline z)
\qquad\text{if } |z|=\frac12.
$$
What if we only assume that $g$ is a non-constant holomorphic function on the punctured plane $\mathbb C\setminus\{0\}$?

#proof

First assume $g$ is entire. On the circle $|z|=1/2$, we have
$$
\overline z=\frac{1}{4z}.
$$
Thus the condition becomes
$$
f(z)=g\left(\frac1{4z}\right)
\qquad\text{on } |z|=\frac12.
$$
The function
$$
h(z)=g\left(\frac1{4z}\right)
$$
is holomorphic on the punctured disk $0<|z|<1$. Since $f$ is holomorphic on $D(0,1)$ and $f=h$ on the circle $|z|=1/2$, the identity theorem gives
$$
f(z)=h(z)
$$
on the annulus $0<|z|<1$.

Write
$$
g(w)=\sum_{n=0}^{\infty}a_nw^n.
$$
Then
$$
h(z)=\sum_{n=0}^{\infty}a_n4^{-n}z^{-n}.
$$
For $h$ to extend holomorphically to $z=0$, all negative powers must vanish. Thus $a_n=0$ for every $n\ge1$, so $g$ must be constant. This contradicts the assumption that $g$ is non-constant. Therefore no such $f$ exists for non-constant entire $g$.

If $g$ is only assumed holomorphic on $\mathbb C\setminus\{0\}$, the answer depends on $g$. For example, if
$$
g(w)=\frac1w,
$$
then on $|z|=1/2$,
$$
g(\overline z)=\frac1{\overline z}=4z,
$$
so $f(z)=4z$ works.

However, not every such $g$ works. For instance, $g(w)=w$ gives the same obstruction as above:
$$
g(\overline z)=\overline z=\frac1{4z},
$$
which cannot be the restriction of a holomorphic function on the whole unit disk.
::

::ProblemBlock{number=8}
#problem

The Stirling formula reads
$$
n!=n^ne^{-n}s_n,
\qquad
\lim_{n\to\infty}s_n^{1/n}=1.
$$
Use Stirling's formula to find the radius of convergence of
$$
\sum_{n=1}^{\infty}\frac{(n!)^3}{(3n)!}z^n.
$$

#proof

Let
$$
a_n=\frac{(n!)^3}{(3n)!}.
$$
By Stirling's formula,
$$
n!=n^ne^{-n}s_n
$$
with $s_n^{1/n}\to1$. Also,
$$
(3n)!=(3n)^{3n}e^{-3n}s_{3n}.
$$
Hence
$$
a_n
=\frac{(n^ne^{-n}s_n)^3}{(3n)^{3n}e^{-3n}s_{3n}}
=\frac{1}{27^n}\frac{s_n^3}{s_{3n}}.
$$
Taking $n$th roots,
$$
|a_n|^{1/n}\to\frac1{27}.
$$
Therefore the radius of convergence is
$$
R=\frac{1}{\limsup |a_n|^{1/n}}=27.
$$
So the radius of convergence is
$$
27.
$$
::

::ProblemBlock{number=9}
#problem

Let
$$
P(z)=z^n+a_{n-1}z^{n-1}+\cdots+a_0.
$$
Prove that either $P(z)\equiv z^n$, or there exists a point $\zeta$ on the unit circle such that
$$
|P(\zeta)|>1.
$$

Hint: Note that
$$
Q(z):=z^nP(1/z)
$$
is a polynomial.

#proof

Suppose, toward a contradiction, that
$$
|P(\zeta)|\le1
$$
for every $|\zeta|=1$.

Define
$$
Q(z)=z^nP(1/z).
$$
Since
$$
P(z)=z^n+a_{n-1}z^{n-1}+\cdots+a_0,
$$
we have
$$
Q(z)=1+a_{n-1}z+\cdots+a_0z^n,
$$
which is a polynomial. On $|z|=1$,
$$
|Q(z)|=|z|^n|P(1/z)|=|P(1/z)|\le1.
$$
By the maximum modulus principle,
$$
|Q(z)|\le1
$$
for all $|z|\le1$. But
$$
Q(0)=1.
$$
Thus $Q$ attains its maximum modulus at an interior point. By the maximum modulus principle, $Q$ is constant. Since $Q(0)=1$, we get
$$
Q(z)\equiv1.
$$
Therefore
$$
P(z)\equiv z^n.
$$

Taking the contrapositive, if $P(z)\not\equiv z^n$, then there exists $|\zeta|=1$ such that
$$
|P(\zeta)|>1.
$$
::
