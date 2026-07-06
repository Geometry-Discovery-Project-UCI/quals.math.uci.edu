# 2022 Winter Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Let
$$
P(z)=z^n+a_1z^{n-1}+\cdots+a_n.
$$
Show that either $P(z)=z^n$ identically, or there exists a point $z_0\in\mathbb C$ with $|z_0|=1$ such that
$$
|P(z_0)|>1.
$$

#proof

Assume
$$
|P(z)|\le1
$$
for all $|z|=1$. Define
$$
Q(z)=z^nP(1/z).
$$
Then
$$
Q(z)=1+a_1z+\cdots+a_nz^n
$$
is a polynomial. On $|z|=1$,
$$
|Q(z)|=|P(1/z)|\le1.
$$
By the maximum modulus principle,
$$
|Q(z)|\le1
$$
for $|z|\le1$. But
$$
Q(0)=1.
$$
Thus $Q$ attains its maximum modulus at an interior point, so $Q$ is constant. Hence
$$
Q(z)\equiv1,
$$
which implies
$$
P(z)\equiv z^n.
$$
Therefore, if $P$ is not identically $z^n$, then there must be some $|z_0|=1$ such that
$$
|P(z_0)|>1.
$$
::

::ProblemBlock{number=2}
#problem

Find the number of roots of
$$
z^4+z^3-4z+1=0
$$
in the domain
$$
\{z\in\mathbb C:1<|z|<2\}.
$$
Roots are counted with multiplicity.

#proof

Let
$$
P(z)=z^4+z^3-4z+1.
$$
First count the roots in $|z|<1$. On $|z|=1$,
$$
|z^4+z^3+1|\le3<4=|-4z|.
$$
By Rouche's theorem, $P$ and $-4z$ have the same number of zeros in $|z|<1$. Thus $P$ has exactly one zero in $|z|<1$.

Now count the roots in $|z|<2$. On $|z|=2$, set
$$
H(z)=z^4+z^3-4z.
$$
A direct elementary minimization on $|z|=2$ gives
$$
|H(z)|\ge2.
$$
Therefore
$$
|1|<|H(z)|
$$
on $|z|=2$, and by Rouche's theorem, $P$ and $H$ have the same number of zeros in $|z|<2$.

Now
$$
H(z)=z(z^3+z^2-4).
$$
The zero $z=0$ lies in $|z|<2$. If $z^3+z^2-4=0$ and $|z|\ge2$, then
$$
|z|^2|z+1|=4.
$$
But for $|z|\ge2$,
$$
|z|^2|z+1|\ge |z|^2(|z|-1)\ge4,
$$
with equality only possible at $z=-2$, which is not a zero of $z^3+z^2-4$. Hence all three roots of $z^3+z^2-4$ lie in $|z|<2$.

So $P$ has four roots in $|z|<2$ and one root in $|z|<1$. Therefore the number of roots in
$$
1<|z|<2
$$
is
$$
3.
$$
::

::ProblemBlock{number=3}
#problem

Find a conformal map $\varphi$ mapping
$$
\{z\in\mathbb C:|\arg z|<\pi/4\}
$$
onto the unit disk, with
$$
\varphi(1)=0
$$
and
$$
\arg\varphi'(1)=\pi.
$$

#proof

The map
$$
w=z^2
$$
sends the sector $|\arg z|<\pi/4$ conformally onto the right half-plane
$$
\operatorname{Re}w>0.
$$
The map
$$
\psi(w)=\frac{1-w}{1+w}
$$
sends the right half-plane onto the unit disk and sends $w=1$ to $0$.

Therefore
$$
\varphi(z)=\frac{1-z^2}{1+z^2}
$$
maps the given sector conformally onto $D(0,1)$ and satisfies $\varphi(1)=0$.

Moreover,
$$
\varphi'(z)=\frac{-4z}{(1+z^2)^2},
$$
so
$$
\varphi'(1)=-1.
$$
Thus
$$
\arg\varphi'(1)=\pi.
$$
Hence
$$
\varphi(z)=\frac{1-z^2}{1+z^2}.
$$
::

::ProblemBlock{number=4}
#problem

Evaluate
$$
\int_{\partial D(0,2)}\frac{1}{z^n(1-z)}\,dz
$$
for all $n=0,1,2,\ldots$, where $D(0,2)$ is the disk centered at $0$ with radius $2$.

#proof

If $n=0$, then
$$
\frac1{1-z}
$$
has a simple pole at $z=1$ with residue $-1$. Hence
$$
\int_{\partial D(0,2)}\frac1{1-z}\,dz=-2\pi i.
$$

Now suppose $n\ge1$. The poles inside $|z|<2$ are $z=0$ and $z=1$. At $z=1$, the residue is
$$
\operatorname{Res}_{z=1}\frac1{z^n(1-z)}=-1.
$$
At $z=0$,
$$
\frac1{z^n(1-z)}
=z^{-n}(1+z+z^2+\cdots),
$$
so the coefficient of $z^{-1}$ is $1$. Hence
$$
\operatorname{Res}_{z=0}\frac1{z^n(1-z)}=1.
$$
The sum of residues is $0$, so
$$
\int_{\partial D(0,2)}\frac{1}{z^n(1-z)}\,dz=0
\qquad(n\ge1).
$$

Thus
$$

\int_{\partial D(0,2)}\frac{1}{z^n(1-z)}\,dz
=
\begin{cases}
-2\pi i, & n=0,\\
0, & n\ge1.
\end{cases}
$$
::

::ProblemBlock{number=5}
#problem

<span style="display:inline-block; width:1em;"></span> **(a)** Classify the singularities of
$$
f(z)=\frac{z}{\sin z}.
$$
Include the point at infinity.

<span style="display:inline-block; width:1em;"></span> **(b)** Find a Laurent expansion, valid in the region $|z+1|>3$, for
$$
f(z)=\frac{7z-2}{z^3-z^2-2z}.
$$
Find the residue of $f$ at $z=0$.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** The zeros of $\sin z$ are $z=k\pi$, $k\in\mathbb Z$. At $z=0$, both numerator and denominator vanish simply, and
$$
\frac{z}{\sin z}\to1.
$$
Thus $z=0$ is removable.

For $k\ne0$, the zero of $\sin z$ at $k\pi$ is simple, while the numerator is nonzero. Hence $z=k\pi$ is a simple pole for every nonzero integer $k$.

At infinity, the singularity is not isolated, because the poles $k\pi$ tend to infinity. Therefore infinity is not an isolated singularity of this function.

<span style="display:inline-block; width:1em;"></span> **(b)** Factor the denominator:
$$
z^3-z^2-2z=z(z-2)(z+1).
$$
Partial fractions give
$$
\frac{7z-2}{z(z-2)(z+1)}
=\frac1z+\frac2{z-2}-\frac3{z+1}.
$$
Let
$$
w=z+1.
$$
Then
$$
\frac1z=\frac1{w-1}
=\sum_{k=0}^{\infty}w^{-k-1},
\qquad |w|>1,
$$
and
$$
\frac2{z-2}=\frac2{w-3}
=2\sum_{k=0}^{\infty}3^k w^{-k-1},
\qquad |w|>3.
$$
Also
$$
-\frac3{z+1}=-\frac3w.
$$
Therefore, for $|z+1|>3$,
$$

f(z)=
\sum_{k=0}^{\infty}\bigl(1+2\cdot3^k\bigr)(z+1)^{-k-1}
-3(z+1)^{-1}.

$$
Equivalently, the coefficient of $(z+1)^{-1}$ is $1+2-3=0$, and the remaining terms are
$$
f(z)=\sum_{k=1}^{\infty}\bigl(1+2\cdot3^k\bigr)(z+1)^{-k-1}.
$$
The residue at $z=0$ is the coefficient of $1/z$ in the partial fraction expansion:
$$
1.
$$
::

::ProblemBlock{number=6}
#problem

Let $f$ be holomorphic in $\mathbb C$ with
$$
|f(z)|\ge |z|^5,\qquad |z|>1.
$$
Prove or disprove that $f$ is a polynomial.

#proof

The statement is true.

The inequality implies that $f$ has no zeros for $|z|>1$. Hence $f$ has only finitely many zeros in $\mathbb C$. Let $P$ be the polynomial whose zeros, with multiplicities, are exactly the zeros of $f$. Then
$$
g(z)=\frac{P(z)}{f(z)}
$$
is entire.

For $|z|>1$,
$$
|g(z)|\le C\frac{|z|^N}{|z|^5}
$$
for some constants $C,N$. Thus $g$ has polynomial growth. By Cauchy's estimates, $g$ must be a polynomial.

Since
$$
f=\frac{P}{g}
$$
is entire and $P,g$ are polynomials, $f$ is a rational entire function. Therefore $f$ is a polynomial.
::

::ProblemBlock{number=7}
#problem

<span style="display:inline-block; width:1em;"></span> **(a)** Prove that all points on $\partial D(0,1)$ are singular points of
$$
f(z)=\sum_{n=1}^{\infty}\frac{n}{4^n}z^{2^n}.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Prove that $f$ defined above is differentiable on $\overline{D(0,1)}$.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** The series is a lacunary power series with exponents
$$
m_n=2^n.
$$
These satisfy
$$
\frac{m_{n+1}}{m_n}=2>1.
$$
Also, the radius of convergence is $1$, since
$$
\left(\frac{n}{4^n}\right)^{1/2^n}\to1.
$$
By the Hadamard gap theorem, the unit circle is a natural boundary for $f$. Hence every point of $\partial D(0,1)$ is a singular point.

<span style="display:inline-block; width:1em;"></span> **(b)** On $\overline{D(0,1)}$,
$$
\sum_{n=1}^{\infty}\left|\frac{n}{4^n}z^{2^n}\right|
\le
\sum_{n=1}^{\infty}\frac{n}{4^n}<\infty.
$$
Thus the series converges uniformly on $\overline{D(0,1)}$.

The formal derivative is
$$
f'(z)=\sum_{n=1}^{\infty}\frac{n2^n}{4^n}z^{2^n-1}
=\sum_{n=1}^{\infty}\frac{n}{2^n}z^{2^n-1}.
$$
This also converges uniformly on $\overline{D(0,1)}$, since
$$
\sum_{n=1}^{\infty}\frac{n}{2^n}<\infty.
$$
Therefore termwise differentiation is justified up to the closed disk, and $f$ is differentiable on $\overline{D(0,1)}$.
::

::ProblemBlock{number=8}
#problem

Let $f$ be holomorphic in $D(0,1)$ with
$$
f(0)=f'(0)=0.
$$
Prove that the series
$$
\sum_{n=2}^{\infty}
f\left(\frac{1}{\sqrt n\,\log(n+1)}\right)
$$
converges.

#proof

Since $f(0)=f'(0)=0$, the function
$$
g(z)=\frac{f(z)}{z^2}
$$
has a removable singularity at $0$ and is holomorphic near $0$. Hence there are constants $C>0$ and $\rho>0$ such that
$$
|f(z)|\le C|z|^2
$$
whenever $|z|<\rho$.

For all sufficiently large $n$,
$$
\left|\frac{1}{\sqrt n\,\log(n+1)}\right|<\rho.
$$
Therefore
$$
\left|
f\left(\frac{1}{\sqrt n\,\log(n+1)}\right)
\right|
\le
\frac{C}{n(\log(n+1))^2}.
$$
The series
$$
\sum_{n=2}^{\infty}\frac1{n(\log(n+1))^2}
$$
converges. Hence the given series converges absolutely.
::

::ProblemBlock{number=9}
#problem

Let $f:D(0,1)\setminus\{0\}\to\mathbb C$ be holomorphic and suppose
$$
\int_{D(0,1)}|f(z)|^{3/2}\,dA(z)=1.
$$
Prove that $z=0$ is either a pole of order $1$ or a removable singularity of $f$.

#proof

The condition says that $f$ is locally $L^{3/2}$ near $0$. An isolated essential singularity is impossible under such an area-integrability condition; equivalently, the standard Laurent-coefficient estimates for $L^p$ holomorphic functions imply that an isolated $L^p$ singularity can only be removable or a pole of order strictly less than $2/p$.

Here $p=3/2$, so a possible pole order $m$ must satisfy
$$
m\cdot\frac32<2.
$$
Thus
$$
m<\frac43.
$$
The only positive integer satisfying this is
$$
m=1.
$$

Indeed, if $f$ had a pole of order $m$, then near $0$,
$$
|f(z)|\sim C|z|^{-m},
$$
and the integral near $0$ would behave like
$$
\int_0^\epsilon r^{-3m/2}r\,dr,
$$
which is finite exactly when $m<4/3$.

Therefore the singularity at $0$ is either removable or a pole of order $1$.
::
