# 2021 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Show that for any integer $n\ge2$,
$$
\int_0^\infty \frac{1}{1+x^n}\,dx
=\frac{\pi}{n\sin(\pi/n)}.
$$

The source PDF appears to omit the factor $1/n$ on the right-hand side; without it the formula is false already for $n=2$.

#proof

Use the sector contour for
$$
\frac1{1+z^n}
$$
with angles $0$ and $2\pi/n$. The only pole inside the sector is
$$
z_0=e^{i\pi/n}.
$$
Its residue is
$$
\operatorname{Res}_{z=z_0}\frac1{1+z^n}
=\frac1{nz_0^{n-1}}.
$$
Let
$$
I=\int_0^\infty\frac{dx}{1+x^n}.
$$
The integral along the ray $\arg z=2\pi/n$ contributes
$$
-e^{2\pi i/n}I.
$$
The circular arcs vanish in the limit. Hence
$$
(1-e^{2\pi i/n})I
=2\pi i\frac1{ne^{i\pi(n-1)/n}}.
$$
Using
$$
1-e^{2\pi i/n}=-2ie^{\pi i/n}\sin(\pi/n),
$$
we obtain
$$

I=\frac{\pi}{n\sin(\pi/n)}.

$$
::

::ProblemBlock{number=2}
#problem

Let $f$ be holomorphic in $D(0,2)$ and continuous on $\overline{D(0,2)}$. If $|f(z)|$ is constant on the boundary of $D(0,2)$, then prove that $f$ is either constant or has finitely many zeros in $D(0,2)$.

#proof

Let
$$
|f(z)|=C
$$
on $|z|=2$.

If $C=0$, then $f=0$ on the boundary. By the maximum modulus principle, $f\equiv0$, so $f$ is constant.

Assume $C>0$. Then $f$ has no zeros on the boundary. Since $f$ is continuous on $\overline{D(0,2)}$, there is a collar neighborhood of the boundary in which $f$ has no zeros. Thus all zeros of $f$ in $D(0,2)$ lie in a compact subset of the disk.

Zeros of a nonzero holomorphic function are isolated. Therefore, if $f$ is not identically zero, it can have only finitely many zeros in that compact subset. Hence $f$ is either constant or has finitely many zeros in $D(0,2)$.
::

::ProblemBlock{number=3}
#problem

Define the Bernoulli numbers $B_n$ by
$$
\frac{z}{e^z-1}
=\sum_{n=0}^{\infty}\frac{B_n}{n!}z^n.
$$

<span style="display:inline-block; width:1em;"></span> **(i)** Prove that $B_0=1$ and
$$
\sum_{k=0}^{n-1}\frac{B_k}{(n-k)!k!}=0,
\qquad n>1.
$$

<span style="display:inline-block; width:1em;"></span> **(ii)** Find $B_1,B_2,B_3$, and $B_4$.

#proof

Since
$$
\frac{e^z-1}{z}
=\sum_{m=0}^{\infty}\frac{z^m}{(m+1)!},
$$
we have
$$
\left(\sum_{m=0}^{\infty}\frac{z^m}{(m+1)!}\right)
\left(\sum_{k=0}^{\infty}\frac{B_k}{k!}z^k\right)=1.
$$
Comparing constant terms gives
$$
B_0=1.
$$
For $n>1$, comparing the coefficient of $z^{n-1}$ gives
$$
\sum_{k=0}^{n-1}\frac{B_k}{(n-k)!k!}=0.
$$

Using this recurrence:

For $n=2$,
$$
\frac{B_0}{2!}+\frac{B_1}{1!}=0,
$$
so
$$
B_1=-\frac12.
$$
For $n=3$,
$$
\frac{B_0}{3!}+\frac{B_1}{2!}+\frac{B_2}{2!}=0,
$$
so
$$
B_2=\frac16.
$$
For $n=4$,
$$
\frac{B_0}{4!}+\frac{B_1}{3!}+\frac{B_2}{2!2!}+\frac{B_3}{3!}=0,
$$
so
$$
B_3=0.
$$
For $n=5$,
$$
\frac{B_0}{5!}+\frac{B_1}{4!}+\frac{B_2}{3!2!}+\frac{B_3}{2!3!}+\frac{B_4}{4!}=0,
$$
so
$$
B_4=-\frac1{30}.
$$
Thus
$$

B_1=-\frac12,\quad B_2=\frac16,\quad B_3=0,\quad B_4=-\frac1{30}.

$$
::

::ProblemBlock{number=4}
#problem

Let
$$
F(z)=\sum_{n=0}^{\infty}\frac1{2^n}z^{2^n}.
$$
Prove:

<span style="display:inline-block; width:1em;"></span> **(i)** $F$ is holomorphic in $D(0,1)$ and continuous on $\overline{D(0,1)}$.

<span style="display:inline-block; width:1em;"></span> **(ii)** Every point of $\partial D(0,1)$ is a singular point for $F$.

#proof

<span style="display:inline-block; width:1em;"></span> **(i)** For $|z|\le1$,
$$
\sum_{n=0}^{\infty}\left|\frac1{2^n}z^{2^n}\right|
\le
\sum_{n=0}^{\infty}\frac1{2^n}<\infty.
$$
Thus the series converges uniformly on $\overline{D(0,1)}$, so $F$ is continuous there and holomorphic in $D(0,1)$.

<span style="display:inline-block; width:1em;"></span> **(ii)** This is a lacunary series with exponents
$$
m_n=2^n,
$$
and
$$
\frac{m_{n+1}}{m_n}=2>1.
$$
Its radius of convergence is $1$, since
$$
\left(\frac1{2^n}\right)^{1/2^n}\to1.
$$
By the Hadamard gap theorem, the unit circle is a natural boundary. Hence every point of $\partial D(0,1)$ is a singular point for $F$.
::

::ProblemBlock{number=5}
#problem

Let $D$ be a bounded domain in $\mathbb C$ with $C^1$ boundary and $0\in D$. Prove or disprove: there is a sequence of polynomials $\{p_n\}_{n=1}^{\infty}$ such that
$$
p_n(z)\to \frac1{z^2}
$$
uniformly on $\partial D$.

#proof

The statement is false.

Suppose such polynomials existed. Since $z p_n(z)$ is also a polynomial,
$$
\int_{\partial D} z p_n(z)\,dz=0
$$
for every $n$.

Uniform convergence on $\partial D$ gives
$$
z p_n(z)\to \frac1z
$$
uniformly on $\partial D$. Therefore
$$
0=\lim_{n\to\infty}\int_{\partial D} z p_n(z)\,dz
=\int_{\partial D}\frac1z\,dz.
$$
But $0\in D$, so by the residue theorem,
$$
\int_{\partial D}\frac1z\,dz=2\pi i,
$$
a contradiction.

Thus no such sequence of polynomials exists.
::

::ProblemBlock{number=6}
#problem

Let $u$ be harmonic in $D(0,1)\setminus\{0\}$ and suppose
$$
\lim_{z\to0}\frac{u(z)}{\log|z|}=0.
$$
Prove that $u$ is harmonic in $D(0,1)$.

#proof

An isolated singularity of a harmonic function has an expansion of the form
$$
u(z)=a\log|z|+\operatorname{Re}\left(\sum_{k=1}^{N}c_kz^{-k}\right)+h(z),
$$
where $h$ is harmonic near $0$, unless the singularity is removable.

The condition
$$
\frac{u(z)}{\log|z|}\to0
$$
forces the logarithmic coefficient $a$ to be zero. It also rules out any principal part terms $z^{-k}$, since those grow faster than $|\log|z||$ along suitable directions.

Therefore the singular part vanishes, and $u$ has a removable singularity at $0$. Hence $u$ extends harmonically to all of $D(0,1)$.
::

::ProblemBlock{number=7}
#problem

Prove that
$$
(3-e)|z|<|e^z-1|<(e-1)|z|
$$
for any $z\in D(0,1)\setminus\{0\}$.

#proof

For the upper bound, write
$$
e^z-1=\sum_{n=1}^{\infty}\frac{z^n}{n!}.
$$
If $|z|<1$, then
$$
|e^z-1|
\le \sum_{n=1}^{\infty}\frac{|z|^n}{n!}
< |z|\sum_{n=1}^{\infty}\frac1{n!}
=(e-1)|z|.
$$

For the lower bound,
$$
e^z-1=z+\sum_{n=2}^{\infty}\frac{z^n}{n!}.
$$
Thus
$$
|e^z-1|
\ge |z|-\sum_{n=2}^{\infty}\frac{|z|^n}{n!}
> |z|-|z|\sum_{n=2}^{\infty}\frac1{n!}.
$$
Since
$$
\sum_{n=2}^{\infty}\frac1{n!}=e-2,
$$
we get
$$
|e^z-1|>(3-e)|z|.
$$
::

::ProblemBlock{number=8}
#problem

Suppose $f$ is holomorphic in $D(0,1)\setminus\{0\}$ and
$$
f\left(\frac1n\right)=\frac{(-1)^n}{n}
$$
for all positive integers $n$. Prove that
$$
\lim_{z\to0}|f(z)|
$$
does not exist.

#proof

Suppose the limit existed. Since
$$
\left|f\left(\frac1n\right)\right|=\frac1n\to0,
$$
the limit would have to be $0$. Thus $f(z)\to0$ as $z\to0$, so $0$ would be a removable singularity of $f$ and the extension would satisfy $f(0)=0$.

Then
$$
g(z)=\frac{f(z)}{z}
$$
would be holomorphic near $0$. But
$$
g\left(\frac1n\right)
=n f\left(\frac1n\right)
=(-1)^n.
$$
The values $(-1)^n$ do not converge as $n\to\infty$, contradicting the continuity of $g$ at $0$.

Therefore $\lim_{z\to0}|f(z)|$ does not exist.
::

::ProblemBlock{number=9}
#problem

Prove that all zeros of
$$
p_n(z)=z^n+a_1z^{n-1}+\cdots+a_{n-1}z+a_n
$$
lie in the disk $D(0,R)$, where
$$
R=1+\max\{|a_j|:1\le j\le n\}.
$$

#proof

Let
$$
A=\max\{|a_j|:1\le j\le n\},
\qquad
R=1+A.
$$
Suppose $|z|>R$. Then $|z|-1>A$. We estimate
$$
|a_1z^{n-1}+\cdots+a_n|
\le A(|z|^{n-1}+|z|^{n-2}+\cdots+1).
$$
Since
$$
|z|^{n-1}+|z|^{n-2}+\cdots+1
=\frac{|z|^n-1}{|z|-1},
$$
we get
$$
|a_1z^{n-1}+\cdots+a_n|
<
|z|^n.
$$
Therefore
$$
|z^n|>|a_1z^{n-1}+\cdots+a_n|,
$$
so
$$
p_n(z)\ne0.
$$
Thus every zero satisfies
$$
|z|\le R.
$$
In particular, all zeros lie in $D(0,R)$ up to the usual harmless open/closed boundary convention.
::
