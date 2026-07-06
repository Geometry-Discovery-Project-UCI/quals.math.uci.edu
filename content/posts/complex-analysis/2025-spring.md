# 2025 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Determine all holomorphic functions $f$ on $\mathbb C\setminus\{0\}$ such that $f$ has a pole of order $m$ at $\infty$ and a pole of order $n$ at $0$.

#proof

Since $f$ is holomorphic on $\mathbb C\setminus\{0\}$, it has a Laurent expansion
$$
f(z)=\sum_{k=-\infty}^{\infty}a_kz^k
$$
on $\mathbb C\setminus\{0\}$.

Having a pole of order $n$ at $0$ means that the negative part stops at $z^{-n}$ and that $a_{-n}\ne0$:
$$
a_k=0\quad(k<-n),\qquad a_{-n}\ne0.
$$
Having a pole of order $m$ at $\infty$ means that $f(1/w)$ has a pole of order $m$ at $w=0$. Equivalently, the positive part stops at $z^m$ and $a_m\ne0$:
$$
a_k=0\quad(k>m),\qquad a_m\ne0.
$$
Therefore the functions are exactly
$$

f(z)=\sum_{k=-n}^{m}a_kz^k,\qquad a_{-n}\ne0,\quad a_m\ne0.

$$
::

::ProblemBlock{number=2}
#problem

Let $P(z)$ be a polynomial of degree $n\ge1$ over $\mathbb C$, and let $z_1,\ldots,z_k$ be the distinct roots of $P$. First show that on $\mathbb C\setminus\{z_1,\ldots,z_k\}$, the function $1/P(z)$ can be written as
$$
\frac1{P(z)}
=\sum_{j=1}^{k}\sum_{m=1}^{m_j}\frac{A_{j,m}}{(z-z_j)^m}.
$$
Then use Cauchy's residue theorem to show that if $n\ge2$, then
$$
\sum_{j=1}^{k}A_{j,1}=0.
$$

#proof

Since the only singularities of $1/P(z)$ are poles at the zeros of $P$, the partial fraction decomposition gives
$$
\frac1{P(z)}
=\sum_{j=1}^{k}\sum_{m=1}^{m_j}\frac{A_{j,m}}{(z-z_j)^m},
$$
where $m_j$ is the multiplicity of the zero $z_j$.

The coefficient $A_{j,1}$ is the residue of $1/P$ at $z_j$:
$$
A_{j,1}=\operatorname{Res}_{z=z_j}\frac1{P(z)}.
$$
Let $R$ be so large that all zeros of $P$ lie inside $|z|<R$. By the residue theorem,
$$
\int_{|z|=R}\frac{dz}{P(z)}
=2\pi i\sum_{j=1}^{k}A_{j,1}.
$$
If $n\ge2$, then as $|z|\to\infty$,
$$
\frac1{P(z)}=O\left(\frac1{z^n}\right)=O\left(\frac1{z^2}\right).
$$
Therefore
$$
\left|\int_{|z|=R}\frac{dz}{P(z)}\right|
\le 2\pi R\cdot O(R^{-2})\to0
$$
as $R\to\infty$. Hence
$$
2\pi i\sum_{j=1}^{k}A_{j,1}=0,
$$
so
$$
\sum_{j=1}^{k}A_{j,1}=0.
$$
::

::ProblemBlock{number=3}
#problem

Let $\Omega$ be an open set in $\mathbb C$, and let $u(x,y),v(x,y)$ be real-valued functions with continuous partial derivatives in $\Omega$ satisfying the Cauchy-Riemann equations. Assume also that
$$
u^2+v^2\ne0
$$
on $\Omega$. Prove that
$$
\frac{u\,\partial u/\partial x+v\,\partial v/\partial x}{u^2+v^2}
$$
is harmonic in $\Omega$ and find its harmonic conjugate on $\Omega$ if it exists.

#proof

Let
$$
F=u+iv.
$$
The Cauchy-Riemann equations imply that $F$ is holomorphic, and the condition $u^2+v^2\ne0$ says that $F$ has no zeros on $\Omega$.

Now
$$
\frac{F'}{F}
=\frac{u_x+iv_x}{u+iv}
=\frac{(u_x+iv_x)(u-iv)}{u^2+v^2}.
$$
Therefore
$$
\operatorname{Re}\frac{F'}{F}
=\frac{uu_x+vv_x}{u^2+v^2}.
$$
Since $F'/F$ is holomorphic on $\Omega$, its real part is harmonic. Hence the given function is harmonic.

A harmonic conjugate is the imaginary part of $F'/F$:
$$

\frac{uv_x-vu_x}{u^2+v^2}

$$
up to an additive real constant. This conjugate exists globally because $F'/F$ is a globally defined holomorphic function on $\Omega$.
::

::ProblemBlock{number=4}
#problem

Let $P(z)$ be a polynomial of degree $d$ with complex coefficients such that
$$
|P(x)|\le1
$$
for all $x\in[-1,1]$. Show that
$$
|P(5)|\le10^d.
$$

#proof

Consider
$$
f(z)=z^dP\left(\frac12\left(z+\frac1z\right)\right).
$$
Although this expression appears to have a pole at $0$, the factor $z^d$ removes all negative powers because $P$ has degree $d$. Thus $f$ is holomorphic in the unit disk and continuous on its closure.

On $|z|=1$, write $z=e^{it}$. Then
$$
\frac12\left(z+\frac1z\right)=\cos t\in[-1,1].
$$
Hence
$$
|f(z)|=|z|^d|P(\cos t)|\le1
$$
on $|z|=1$. By the maximum modulus principle,
$$
|f(z)|\le1
$$
for $|z|\le1$.

Now choose $r\in(0,1)$ such that
$$
\frac12\left(r+\frac1r\right)=5.
$$
This is equivalent to
$$
r+\frac1r=10,
$$
so
$$
r=5-2\sqrt6.
$$
Then
$$
|r^dP(5)|=|f(r)|\le1,
$$
and therefore
$$
|P(5)|\le r^{-d}=(5+2\sqrt6)^d<10^d.
$$
Thus
$$
|P(5)|\le10^d.
$$
::

::ProblemBlock{number=5}
#problem

Use contour integration to show that for all integers $n\ge2$,
$$
\int_0^\infty \frac{dx}{1+x^n}
=\frac{\pi}{n\sin(\pi/n)}.
$$

#proof

Let
$$
I=\int_0^\infty \frac{dx}{1+x^n}.
$$
Integrate
$$
\frac1{1+z^n}
$$
over the sector contour with angles $0$ and $2\pi/n$, radius $R$, and a small circle around the origin. The only pole inside the sector is
$$
z_0=e^{i\pi/n},
$$
because
$$
z_0^n=-1.
$$
The residue is
$$
\operatorname{Res}_{z=z_0}\frac1{1+z^n}
=\frac1{nz_0^{n-1}}
=\frac1{n e^{i\pi(n-1)/n}}.
$$

The circular arc contribution tends to $0$ as $R\to\infty$. The integral along the positive real axis tends to $I$. Along the ray $z=re^{2\pi i/n}$, oriented inward,
$$
dz=e^{2\pi i/n}\,dr
$$
and
$$
1+z^n=1+r^n.
$$
Thus the ray contributes
$$
-e^{2\pi i/n}I.
$$
By the residue theorem,
$$
(1-e^{2\pi i/n})I
=2\pi i\cdot \frac1{n e^{i\pi(n-1)/n}}.
$$
Using
$$
1-e^{2\pi i/n}
=-2ie^{\pi i/n}\sin(\pi/n),
$$
we obtain
$$
I=\frac{\pi}{n\sin(\pi/n)}.
$$
::

::ProblemBlock{number=6}
#problem

Suppose $f:D\to D$ is a holomorphic function with two distinct fixed points $a,b\in D$, so
$$
f(a)=a,\qquad f(b)=b,\qquad a\ne b.
$$
Prove that
$$
f(z)=z
$$
for all $z\in D$.

#proof

Let $\phi_a$ be a disk automorphism sending $a$ to $0$, and define
$$
g=\phi_a\circ f\circ \phi_a^{-1}.
$$
Then $g:D\to D$ is holomorphic and
$$
g(0)=0.
$$
Also, since $b$ is another fixed point of $f$, the point
$$
c=\phi_a(b)
$$
is a nonzero fixed point of $g$:
$$
g(c)=c,\qquad c\ne0.
$$

By Schwarz's lemma,
$$
|g(z)|\le |z|
$$
for all $z\in D$. Since equality holds at the nonzero point $c$, Schwarz's lemma implies that
$$
g(z)=e^{i\theta}z
$$
for some real $\theta$. But $g(c)=c$ and $c\ne0$, so $e^{i\theta}=1$. Thus
$$
g(z)=z.
$$
Conjugating back by $\phi_a$, we get
$$
f(z)=z
$$
for all $z\in D$.
::

::ProblemBlock{number=7}
#problem

Find an explicit conformal map between
$$
\Omega=\mathbb C\setminus\bigl((-\infty,-1]\cup[1,\infty)\bigr)
$$
and the unit disk $D$.

#proof

Consider
$$
W(z)=\frac{1+z}{1-z}.
$$
The two removed rays $(-\infty,-1]$ and $[1,\infty)$ are mapped to the negative real axis. Hence $W$ maps $\Omega$ conformally onto
$$
\mathbb C\setminus(-\infty,0].
$$
Taking the principal square root maps this slit plane onto the right half-plane:
$$
S(z)=\sqrt{\frac{1+z}{1-z}},
$$
where the square root is chosen with positive real part.

Finally, the map
$$
\Phi(z)=\frac{S(z)-1}{S(z)+1}
$$
maps the right half-plane conformally onto the unit disk. Therefore an explicit conformal map is
$$

\Phi(z)=
\frac{
\sqrt{\frac{1+z}{1-z}}-1
}{
\sqrt{\frac{1+z}{1-z}}+1
}.

$$
::

::ProblemBlock{number=8}
#problem

Consider
$$
f(z)=\sum_{n=0}^{\infty}\frac{z^{n!}}{n!}.
$$
Show that $f$ is a bounded holomorphic function on the unit disk $D$ that admits a continuous extension to $\overline D$, but cannot be holomorphically extended to any neighborhood $D(p,\varepsilon)$ of any point $p\in\partial D$.

#proof

For $|z|<1$,
$$
|f(z)|\le \sum_{n=0}^{\infty}\frac{|z|^{n!}}{n!}
\le \sum_{n=0}^{\infty}\frac1{n!}=e.
$$
Thus $f$ is bounded on $D$. The same estimate shows that the series converges uniformly on $\overline D$, by the Weierstrass $M$-test. Hence $f$ extends continuously to $\overline D$.

It remains to show that no boundary point admits holomorphic continuation. We first show that every root of unity is a singular boundary point. Let $\zeta$ be a root of unity of order $q$. For all sufficiently large $n$, $q$ divides $n!$, so
$$
\zeta^{n!}=1.
$$
Along the radius $z=r\zeta$,
$$
f'(r\zeta)
=\sum_{n=1}^{\infty}\frac{n!(r\zeta)^{n!-1}}{n!}
=\sum_{n=1}^{\infty}r^{n!-1}\zeta^{n!-1}.
$$
For all sufficiently large $n$,
$$
\zeta^{n!-1}=\zeta^{-1}.
$$
Therefore
$$
|f'(r\zeta)|
$$
becomes unbounded as $r\to1^-$. If $f$ had a holomorphic extension to a neighborhood of $\zeta$, then $f'$ would be bounded near $\zeta$, a contradiction.

Thus every root of unity is a singular boundary point. Since the roots of unity are dense on $\partial D$, no point of $\partial D$ can have a neighborhood across which $f$ extends holomorphically. Indeed, any such neighborhood would contain a root of unity on the boundary, contradicting what we just proved.
::

::ProblemBlock{number=9}
#problem

First, find an example of a pair of distinct entire functions $f$ and $g$ such that
$$
f(\sqrt n)=g(\sqrt n)
$$
for all $n\in\mathbb N$.

Show that it is impossible to find a distinct pair with this property if we further assume
$$
|f(z)|+|g(z)|\le e^{|z|}
$$
for all $z\in\mathbb C$.

#proof

For an example without the growth condition, take
$$
f(z)=0,\qquad g(z)=\sin(\pi z^2).
$$
Then $f$ and $g$ are distinct entire functions, and for every $n\in\mathbb N$,
$$
g(\sqrt n)=\sin(\pi n)=0=f(\sqrt n).
$$

Now assume the growth condition. Let
$$
h=f-g.
$$
Then $h$ is entire,
$$
h(\sqrt n)=0
$$
for every $n\in\mathbb N$, and
$$
|h(z)|\le |f(z)|+|g(z)|\le e^{|z|}.
$$
If $h$ is not identically zero, Jensen's formula gives, for large $R$,
$$
\sum_{|\sqrt n|<R}\log\frac{R}{\sqrt n}
\le
\frac1{2\pi}\int_0^{2\pi}\log|h(Re^{it})|\,dt-\log|h(0)|
$$
after removing a possible zero at $0$.

The right-hand side is at most $C+R$ for some constant $C$, because
$$
\log|h(Re^{it})|\le R.
$$
On the other hand, the left-hand side grows like
$$
\sum_{n<R^2}\log\frac{R}{\sqrt n}
=N\log R-\frac12\log(N!)
\sim \frac12R^2,
\qquad N=\lfloor R^2\rfloor.
$$
This contradicts the bound $C+R$ for large $R$.

Therefore $h\equiv0$, so $f\equiv g$. Hence no distinct pair can satisfy both the interpolation condition and the growth condition.
::
