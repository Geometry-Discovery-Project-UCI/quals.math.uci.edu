# 2018 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Determine the number of roots, counted with multiplicity, of
$$
2z^5-15z^2+z+2
$$
inside the annulus
$$
1\le |z|\le2.
$$

#proof

Let
$$
P(z)=2z^5-15z^2+z+2.
$$
On $|z|=1$,
$$
|-15z^2|=15>2+1+2\ge |2z^5+z+2|.
$$
By Rouche's theorem, $P$ and $-15z^2$ have the same number of zeros in $|z|<1$. Thus $P$ has $2$ zeros in $|z|<1$.

On $|z|=2$, compare
$$
2z^5-15z^2=z^2(2z^3-15)
$$
with $z+2$. The polynomial $z^2(2z^3-15)$ has all $5$ zeros in $|z|<2$, since the three roots of $2z^3-15=0$ have modulus $(15/2)^{1/3}<2$. On $|z|=2$,
$$
|z^2(2z^3-15)|=4|16e^{3it}-15|\ge4,
$$
while
$$
|z+2|\le4.
$$
Equality can occur only at $z=2$, and there the two terms point in the same direction, so the homotopy
$$
z^2(2z^3-15)+t(z+2),\qquad 0\le t\le1,
$$
has no zero on $|z|=2$. Hence the number of zeros inside $|z|<2$ is unchanged and equals $5$.

Therefore the number of zeros in $1\le |z|\le2$ is
$$
5-2=3.
$$
::

::ProblemBlock{number=2}
#problem

Let $f$ and $g$ be analytic on
$$
U=D(1,15)\setminus\{i\}.
$$
Suppose
$$
f'(z)=g'(z)
$$
for all $z\in U$. Prove that $f-g$ is constant on $U$.

#proof

Let
$$
h=f-g.
$$
Then $h$ is analytic on $U$ and
$$
h'(z)=0
$$
for all $z\in U$.

The set $U=D(1,15)\setminus\{i\}$ is connected. Since $h'=0$ on a connected domain, $h$ is constant. Therefore there exists $a\in\mathbb C$ such that
$$
f(z)-g(z)=a
$$
for all $z\in U$.
::

::ProblemBlock{number=3}
#problem

Let
$$
L=\{t+it:t\ge1\},
\qquad
U=\{\operatorname{Re}z>0,\operatorname{Im}z>0\}.
$$
Find an explicit conformal map from $U\setminus L$ to the unit disk.

#proof

First square:
$$
w=z^2.
$$
The first quadrant maps to the upper half-plane, and the ray $L$ maps to the vertical ray
$$
\{iy:y\ge2\}.
$$
Now use
$$
\eta=\frac{w-2i}{w+2i}.
$$
This maps the upper half-plane to the unit disk and sends the slit $\{iy:y\ge2\}$ to the interval $[0,1)$.

Taking a square root opens the slit. Finally apply a Mobius map from the resulting half-disk to the unit disk. One explicit choice is
$$

\Phi(z)=
\frac{
\sqrt{\frac{z^2-2i}{z^2+2i}}-i
}{
\sqrt{\frac{z^2-2i}{z^2+2i}}+i
},

$$
where the branch of the square root is chosen on the slit disk so that the composition is single-valued. This is a composition of conformal maps, hence is conformal from $U\setminus L$ onto the unit disk.
::

::ProblemBlock{number=4}
#problem

Suppose
$$
f(z)=u(x,y)+iv(y)
$$
is holomorphic. Show that there exist $a\in\mathbb R$ and $\lambda\in\mathbb C$ such that
$$
f(z)=az+\lambda.
$$

#proof

The imaginary part of $f$ depends only on $y$, so write it as $v(y)$. The Cauchy-Riemann equations give
$$
u_x=v_y,
\qquad
u_y=-v_x=0.
$$
Thus $u$ depends only on $x$. Since $u_x=v_y$, the left side depends only on $x$ and the right side depends only on $y$, so both are constant. Let this constant be $a\in\mathbb R$.

Then
$$
u(x,y)=ax+b,
\qquad
v(y)=ay+c.
$$
Therefore
$$
f(z)=a(x+iy)+(b+ic)=az+\lambda,
$$
where $\lambda=b+ic\in\mathbb C$.
::

::ProblemBlock{number=5}
#problem

Suppose $p(z)$ is a polynomial of degree $d\ge2$ with only simple zeros $r_1,\ldots,r_d$. Prove that
$$
\frac1{p'(r_1)}+\frac1{p'(r_2)}+\cdots+\frac1{p'(r_d)}=0.
$$

#proof

Since all zeros are simple, the partial fraction decomposition of $1/p(z)$ is
$$
\frac1{p(z)}
=\sum_{j=1}^{d}\frac{1}{p'(r_j)}\frac1{z-r_j}.
$$
For large $z$,
$$
\frac1{z-r_j}=\frac1z+O\left(\frac1{z^2}\right).
$$
Therefore the coefficient of $1/z$ in the expansion of the right-hand side is
$$
\sum_{j=1}^{d}\frac1{p'(r_j)}.
$$
But since $d\ge2$,
$$
\frac1{p(z)}=O\left(\frac1{z^d}\right)=O\left(\frac1{z^2}\right),
$$
so there is no $1/z$ term. Hence
$$
\sum_{j=1}^{d}\frac1{p'(r_j)}=0.
$$
::

::ProblemBlock{number=6}
#problem

Evaluate
$$
\int_{-\infty}^{\infty}\frac{\sin x}{x+i}\,dx.
$$

#proof

Write
$$
\sin x=\frac{e^{ix}-e^{-ix}}{2i}.
$$
For
$$
I_+=\int_{-\infty}^{\infty}\frac{e^{ix}}{x+i}\,dx,
$$
close the contour in the upper half-plane. There is no pole there, so
$$
I_+=0.
$$
For
$$
I_-=\int_{-\infty}^{\infty}\frac{e^{-ix}}{x+i}\,dx,
$$
close in the lower half-plane. The pole at $z=-i$ is enclosed, with clockwise orientation. Its residue is
$$
e^{-i(-i)}=e^{-1}.
$$
Thus
$$
I_-=-2\pi i e^{-1}.
$$
Therefore
$$
\int_{-\infty}^{\infty}\frac{\sin x}{x+i}\,dx
=\frac{1}{2i}(I_+-I_-)
=\frac{\pi}{e}.
$$
::

::ProblemBlock{number=7}
#problem

Prove that the range of
$$
f(z)=\sum_{n=1}^{2018}\cos^n z
$$
is the whole complex plane.

#proof

Let
$$
P(w)=\sum_{n=1}^{2018}w^n.
$$
Then
$$
f(z)=P(\cos z).
$$
The cosine function is surjective from $\mathbb C$ onto $\mathbb C$. Also, $P$ is a nonconstant polynomial, hence $P(\mathbb C)=\mathbb C$ by the fundamental theorem of algebra.

Therefore
$$
f(\mathbb C)=P(\cos\mathbb C)=P(\mathbb C)=\mathbb C.
$$
::

::ProblemBlock{number=8}
#problem

A holomorphic function $f:D\to\mathbb C$ on the unit disk is called good if, for some $n\in\{1,2,\ldots,2018\}$, the function $f$ does not take values on the ray
$$
\{te^{2\pi i/n}:t\ge0\}.
$$
Prove that the collection of all good functions is normal.

#proof

Fix one of the finitely many rays
$$
R_n=\{te^{2\pi i/n}:t\ge0\}.
$$
The domain
$$
\mathbb C\setminus R_n
$$
is conformally equivalent to a half-plane by a suitable rotation followed by a square root. Hence the family of holomorphic maps from $D$ into $\mathbb C\setminus R_n$ is normal by Montel's theorem.

The good functions are the union of the finitely many normal families corresponding to $n=1,\ldots,2018$. A finite union of normal families is normal: every sequence has a subsequence lying in one of the finitely many families, and that subsequence has a normally convergent subsequence.

Therefore the collection of all good functions is normal.
::
