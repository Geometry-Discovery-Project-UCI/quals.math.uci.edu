# 2013 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem
Find the largest set $D$ where the power series
$$
\sum_{n=1}^{\infty}\frac{n}{2^n}z^{n^2}
$$
converges.

#proof
Consider the $n$th term
$$
\frac{n}{2^n}z^{n^2}.
$$
Its absolute value is
$$
\frac{n}{2^n}|z|^{n^2}.
$$
Taking the $n$th root gives
$$
\left(\frac{n}{2^n}|z|^{n^2}\right)^{1/n}
=n^{1/n}\frac{|z|^n}{2}.
$$
If $|z|<1$, this tends to $0$, so the series converges absolutely. If $|z|>1$, this tends to infinity, so the terms do not even tend to $0$.

If $|z|=1$, then
$$
\left|\frac{n}{2^n}z^{n^2}\right|=\frac{n}{2^n},
$$
and
$$
\sum_{n=1}^{\infty}\frac{n}{2^n}
$$
converges. Hence the series converges absolutely on the unit circle.

Therefore the largest set of convergence is
$$
D=\{z:|z|\leq 1\}.
$$
::

::ProblemBlock{number=2}
#problem
Let $\{f_j\}$ be a sequence of holomorphic functions from $D(0,1)$ to $D(0,1)\setminus\{0\}$. Prove that if
$$
\sum_{j=1}^{\infty}|f_j(0)|
$$
converges, then
$$
\sum_{j=1}^{\infty}f_j(z)^2
$$
converges absolutely and uniformly on compact sets in $D(0,1/3)$.

#proof
Since $0<|f_j(z)|<1$, the function
$$
u_j(z)=-\log |f_j(z)|
$$
is positive and harmonic on $D(0,1)$.

By Harnack's inequality, if $|z|\leq r<1$, then
$$
u_j(z)\geq \frac{1-r}{1+r}u_j(0).
$$
For compact subsets of $D(0,1/3)$, choose $r<1/3$ with the compact set contained in $|z|\leq r$. Then
$$
\frac{1-r}{1+r}>\frac12.
$$
Thus, for all $z$ in the compact set,
$$
-\log |f_j(z)|
\geq \alpha\bigl(-\log |f_j(0)|\bigr)
$$
for some $\alpha>1/2$. Equivalently,
$$
|f_j(z)|\leq |f_j(0)|^\alpha.
$$
Hence
$$
|f_j(z)|^2\leq |f_j(0)|^{2\alpha}.
$$

Since $0<|f_j(0)|<1$ and $2\alpha>1$,
$$
|f_j(0)|^{2\alpha}\leq |f_j(0)|.
$$
Therefore
$$
|f_j(z)^2|\leq |f_j(0)|
$$
on the compact set. The series $\sum |f_j(0)|$ converges, so the Weierstrass $M$-test proves absolute and uniform convergence on compact subsets of $D(0,1/3)$.
::

::ProblemBlock{number=3}
#problem
Suppose $f$ is holomorphic on the upper half-plane
$$
\mathbb H=\{z:\operatorname{Im}z>0\},
$$
with
$$
f(i)=0
$$
and
$$
|f(z)|\leq 1
$$
for all $z\in\mathbb H$. Prove that
$$
|f(2i)|\leq \frac13.
$$

#proof
The automorphism
$$
\phi(z)=\frac{z-i}{z+i}
$$
maps $\mathbb H$ conformally onto $D(0,1)$ and sends $i$ to $0$.

Since $f:\mathbb H\to D(0,1)$ and $f(i)=0$, the Schwarz lemma on the upper half-plane gives
$$
|f(z)|\leq |\phi(z)|
=\left|\frac{z-i}{z+i}\right|.
$$
Taking $z=2i$,
$$
|f(2i)|
\leq \left|\frac{2i-i}{2i+i}\right|
=\left|\frac{i}{3i}\right|
=\frac13.
$$
::

::ProblemBlock{number=4}
#problem
Suppose
$$
f(z)=u(x,y)+iv(y)
$$
is a holomorphic function. Show that there exist $a\in\mathbb R$ and $\lambda\in\mathbb C$ such that
$$
f(z)=az+\lambda.
$$

#proof
Since
$$
f=u(x,y)+iv(y)
$$
is holomorphic, the Cauchy-Riemann equations give
$$
u_x=v_y,
\qquad
u_y=-v_x.
$$
But $v$ depends only on $y$, so $v_x=0$. Hence
$$
u_y=0,
$$
so $u$ depends only on $x$.

Now $u_x$ depends only on $x$, while $v_y$ depends only on $y$. Since
$$
u_x=v_y,
$$
both must be equal to a real constant $a$. Therefore
$$
u(x,y)=ax+b,
\qquad
v(y)=ay+c
$$
for real constants $b,c$.

Thus
$$
f(z)=ax+b+i(ay+c)=a(x+iy)+(b+ic)=az+\lambda,
$$
where
$$
\lambda=b+ic\in\mathbb C.
$$
::

::ProblemBlock{number=5}
#problem
Determine the number of roots, counted with multiplicity, of
$$
2z^5-6z^2+z+1=0
$$
inside the annulus
$$
1\leq |z|\leq 2.
$$

#proof
Let
$$
P(z)=2z^5-6z^2+z+1.
$$
First count zeros in $|z|<2$. On $|z|=2$,
$$
|2z^5|=2\cdot 2^5=64,
$$
while
$$
|-6z^2+z+1|\leq 6\cdot 2^2+2+1=27.
$$
Thus, by Rouche's theorem, $P$ and $2z^5$ have the same number of zeros in $|z|<2$. Therefore $P$ has $5$ zeros in $|z|<2$.

Now count zeros in $|z|<1$. On $|z|=1$,
$$
|-6z^2|=6,
$$
while
$$
|2z^5+z+1|\leq 2+1+1=4.
$$
Again by Rouche's theorem, $P$ and $-6z^2$ have the same number of zeros in $|z|<1$. Thus $P$ has $2$ zeros in $|z|<1$.

The inequalities are strict on both circles, so there are no zeros on $|z|=1$ or $|z|=2$. Hence the number of zeros in the annulus $1\leq |z|\leq 2$ is
$$
5-2=3.
$$
Therefore the answer is
$$
3.
$$
::

::ProblemBlock{number=6}
#problem
Suppose $f$ is analytic in an annulus
$$
r<|z|<R,
$$
and there exists a sequence of polynomials $p_n$ converging to $f$ uniformly on every compact subset of the annulus. Show that $f$ is analytic on the disk
$$
|z|<R.
$$

#proof
Write the Laurent expansion of $f$ in the annulus:
$$
f(z)=\sum_{k=-\infty}^{\infty}a_kz^k.
$$
We show that all negative coefficients vanish.

Fix $\rho$ with $r<\rho<R$. For $m<0$,
$$
a_m=\frac{1}{2\pi i}\int_{|\zeta|=\rho}\frac{f(\zeta)}{\zeta^{m+1}}\,d\zeta.
$$
Since $p_n\to f$ uniformly on $|\zeta|=\rho$,
$$
a_m=\lim_{n\to\infty}
\frac{1}{2\pi i}\int_{|\zeta|=\rho}\frac{p_n(\zeta)}{\zeta^{m+1}}\,d\zeta.
$$
But a polynomial has no negative powers in its Laurent expansion about $0$, so the integral is $0$ for every $n$ and every $m<0$. Hence
$$
a_m=0
$$
for all $m<0$.

Therefore the Laurent expansion is actually a power series
$$
f(z)=\sum_{k=0}^{\infty}a_kz^k,
$$
which converges for $|z|<R$. This gives the desired analytic extension to the disk $|z|<R$.
::

::ProblemBlock{number=7}
#problem
Evaluate, for $a>0$,
$$
\int_{-\infty}^{+\infty}\frac{\cos 3x}{a^2+x^2}\,dx.
$$

#proof
The standard residue formula says that for $b>0$,
$$
\int_{-\infty}^{\infty}\frac{e^{ibx}}{x^2+a^2}\,dx
=\frac{\pi}{a}e^{-ab}.
$$
Taking real parts with $b=3$ gives
$$
\int_{-\infty}^{\infty}\frac{\cos 3x}{x^2+a^2}\,dx
=\frac{\pi}{a}e^{-3a}.
$$
Thus
$$
\displaystyle
\int_{-\infty}^{+\infty}\frac{\cos 3x}{a^2+x^2}\,dx
=\frac{\pi}{a}e^{-3a}.
$$
::

::ProblemBlock{number=8}
#problem
Find explicitly a conformal mapping of
$$
U=\{|z|<1,\ z\notin [1/2,1)\}=D(0,1)\setminus [1/2,1)
$$
onto the unit disk
$$
D=\{|z|<1\}.
$$

#proof
First send the initial point of the slit, $1/2$, to $0$ by the disk automorphism
$$
\phi(z)=\frac{z-\frac12}{1-\frac12 z}.
$$
This maps $D(0,1)$ onto itself and maps the slit $[1/2,1)$ to the slit $[0,1)$.

Thus $\phi$ maps $U$ conformally onto
$$
D(0,1)\setminus [0,1).
$$
On this slit disk, choose the branch of the square root with argument in $(0,2\pi)$:
$$
\psi(w)=\sqrt w.
$$
Then $\psi$ maps $D(0,1)\setminus [0,1)$ conformally onto the upper half unit disk
$$
\{\zeta:|\zeta|<1,\ \operatorname{Im}\zeta>0\}.
$$

Now use
$$
T(\zeta)=i\frac{1-\zeta}{1+\zeta}.
$$
This maps the upper half unit disk onto the first quadrant. Squaring maps the first quadrant onto the upper half-plane, and the Cayley map
$$
C(\eta)=\frac{\eta-i}{\eta+i}
$$
maps the upper half-plane onto the unit disk.

Therefore an explicit conformal map from $U$ onto $D(0,1)$ is
$$

F(z)=
\frac{\left(i\frac{1-\sqrt{\phi(z)}}{1+\sqrt{\phi(z)}}\right)^2-i}
{\left(i\frac{1-\sqrt{\phi(z)}}{1+\sqrt{\phi(z)}}\right)^2+i},
\qquad
\phi(z)=\frac{z-\frac12}{1-\frac12 z},
$$
where the square root branch is chosen on $\mathbb C\setminus[0,\infty)$ with argument in $(0,2\pi)$ after applying $\phi$.
::
