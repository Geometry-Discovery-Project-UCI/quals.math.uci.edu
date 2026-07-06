# 2023 Winter Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

An entire transcendental function is an entire function which is not a polynomial. Prove that if $f$ is an entire transcendental function and $K\subset\mathbb C$ is a compact set, then
$$
f(\mathbb C\setminus K)
$$
is dense in $\mathbb C$.

#proof

Suppose, toward a contradiction, that $f(\mathbb C\setminus K)$ is not dense in $\mathbb C$. Then there are $a\in\mathbb C$ and $\rho>0$ such that
$$
|f(z)-a|\ge \rho
$$
for all $z\in\mathbb C\setminus K$.

Consider
$$
g(z)=\frac{1}{f(z)-a}.
$$
The poles of $g$ occur at the zeros of $f-a$. Since there are no such zeros outside $K$, all poles of $g$ lie in the compact set $K$. Hence there are only finitely many poles.

Subtract the principal parts at these finitely many poles. Then
$$
G(z)=g(z)-\sum_j P_j\!\left(\frac{1}{z-z_j}\right)
$$
is entire. Also, outside a sufficiently large disk, $g$ is bounded by $1/\rho$, and each principal part tends to $0$ at infinity. Therefore $G$ is bounded near infinity. Since $G$ is entire, it follows from Liouville's theorem that $G$ is constant.

Thus $g$ is rational. Hence
$$
f(z)=a+\frac{1}{g(z)}
$$
is meromorphic on the Riemann sphere. Since $f$ is entire, it has no finite poles, so $f$ must be a polynomial. This contradicts the assumption that $f$ is entire transcendental.

Therefore $f(\mathbb C\setminus K)$ is dense in $\mathbb C$.
::

::ProblemBlock{number=2}
#problem

<span style="display:inline-block; width:1em;"></span> **(a)** Give an example of a Laurent series centered at $1$ that converges to
$$
f(z)=\frac{z-2}{z(z-1)^2}
$$
in its domain of convergence.

<span style="display:inline-block; width:1em;"></span> **(b)** Is an example that you gave unique? Explain your answer.

#proof

First decompose $f$ into partial fractions:
$$
\frac{z-2}{z(z-1)^2}
=-\frac2z+\frac{2}{z-1}-\frac{1}{(z-1)^2}.
$$
Let
$$
w=z-1.
$$
Then $z=1+w$, and for $|w|<1$,
$$
\frac1z=\frac{1}{1+w}=\sum_{n=0}^{\infty}(-1)^n w^n.
$$
Therefore, in the annulus $0<|z-1|<1$,
$$
f(z)
=-\frac{1}{(z-1)^2}+\frac{2}{z-1}
-2\sum_{n=0}^{\infty}(-1)^n(z-1)^n.
$$
This is one Laurent series centered at $1$.

The example is not unique unless the annulus of convergence is fixed. For example, for $|w|>1$,
$$
\frac1z=\frac1{1+w}
=\frac1w\cdot\frac1{1+1/w}
=\sum_{n=0}^{\infty}(-1)^n w^{-n-1}.
$$
Thus on the annulus $|z-1|>1$,
$$
f(z)
=-\frac{1}{(z-1)^2}+\frac{2}{z-1}
-2\sum_{n=0}^{\infty}(-1)^n(z-1)^{-n-1}.
$$
So different Laurent expansions are possible on different annuli. On any fixed annulus, however, the Laurent series is unique.
::

::ProblemBlock{number=3}
#problem

Suppose that the power series
$$
\sum_{n=0}^{\infty}c_nz^n
$$
has positive radius of convergence, and for some $\delta>0$ the sum is real on the interval $(-\delta,\delta)$. Prove that all coefficients $c_n$ are real.

#proof

Let
$$
f(z)=\sum_{n=0}^{\infty}c_nz^n.
$$
The function $f$ is holomorphic in a neighborhood of $0$. For real $x$ sufficiently close to $0$, we are given that
$$
f(x)\in\mathbb R.
$$

Since the Taylor coefficients satisfy
$$
c_n=\frac{f^{(n)}(0)}{n!},
$$
it is enough to show that every derivative $f^{(n)}(0)$ is real. But derivatives at $0$ can be computed from real difference quotients along the real axis. Since $f$ takes real values on a real interval around $0$, all these real-axis derivatives are real.

Therefore
$$
c_n\in\mathbb R
$$
for every $n\ge 0$.
::

::ProblemBlock{number=4}
#problem

Suppose that $0<|a|<1$ and $m$ is a positive integer. Prove that the equation
$$
(z-1)^m=ae^{-z}
$$
has exactly $m$ simple zeros with positive real part, and that all of these zeros are inside the disk
$$
D=\{z:|z-1|<1\}.
$$

#proof

Let
$$
F(z)=(z-1)^m-ae^{-z}.
$$
On the boundary of $D$, we have $|z-1|=1$, so
$$
|(z-1)^m|=1.
$$
Also, if $|z-1|=1$, then $\operatorname{Re}z\ge 0$. Therefore
$$
|ae^{-z}|=|a|e^{-\operatorname{Re}z}\le |a|<1.
$$
Thus on $\partial D$,
$$
|ae^{-z}|<|(z-1)^m|.
$$
By Rouche's theorem, $F(z)$ and $(z-1)^m$ have the same number of zeros in $D$, counted with multiplicity. Hence $F$ has exactly $m$ zeros in $D$.

Every point of $D$ satisfies $\operatorname{Re}z>0$, since the disk $|z-1|<1$ is tangent to the imaginary axis at $0$ and lies in the right half-plane. Thus all these zeros have positive real part.

It remains to prove that the zeros are simple. Suppose $z_0$ were a multiple zero. Then
$$
(z_0-1)^m=ae^{-z_0}
$$
and
$$
m(z_0-1)^{m-1}+ae^{-z_0}=0.
$$
Using the first equation in the second gives
$$
m(z_0-1)^{m-1}+(z_0-1)^m=0.
$$
Since $z_0\ne 1$, this becomes
$$
m+z_0-1=0,
$$
so
$$
z_0=1-m.
$$
But $1-m$ does not lie in $D$ with positive real part. This is impossible. Therefore all $m$ zeros are simple.
::

::ProblemBlock{number=5}
#problem

Let
$$
f(z)=\sum_{n\ge 0}a_nz^n
$$
have radius of convergence $R>0$. Let $w_0\in\partial D(0,R)$ be a point on the boundary of the disk of convergence, and suppose that for any $w\in\partial D(0,R)$ with $w\ne w_0$, the function $f$ can be analytically continued to an open set containing $w$.

<span style="display:inline-block; width:1em;"></span> **(a)** Show that $f$ cannot be analytically continued to any open set containing $w_0$.

<span style="display:inline-block; width:1em;"></span> **(b)** Is it true that there exists sufficiently small $\varepsilon>0$ such that $f$ can be analytically continued to the open set
$$
D(0,R+\varepsilon)\setminus\{w_0\}?
$$
Explain your answer.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** Suppose $f$ could also be analytically continued to an open set containing $w_0$. By hypothesis, $f$ can be analytically continued near every other point of $\partial D(0,R)$ as well. Since $\partial D(0,R)$ is compact, finitely many of these neighborhoods cover the whole boundary circle.

Together with the original disk of convergence, this gives an analytic continuation of $f$ to an open neighborhood of the closed disk $\overline{D(0,R)}$. In particular, the Taylor series of $f$ at $0$ would have radius of convergence larger than $R$, contradicting the definition of $R$.

Thus $f$ cannot be analytically continued to any open set containing $w_0$.

<span style="display:inline-block; width:1em;"></span> **(b)** No. Here is a counterexample with $R=1$ and $w_0=1$:
$$
f(z)=\sum_{k=1}^{\infty}\frac{2^{-k}}{z-(1+1/k)}.
$$
This series converges normally on compact subsets of
$$
\mathbb C\setminus\{1+1/k:k\ge1\},
$$
so it defines a holomorphic function in the unit disk. The singularities $1+1/k$ accumulate at $1$, so the radius of convergence of the Taylor series about $0$ is $1$.

Every point of $\partial D(0,1)$ except $1$ has a neighborhood avoiding all the singularities $1+1/k$, so $f$ can be analytically continued near every such point.

However, for every $\varepsilon>0$, the punctured disk
$$
D(0,1+\varepsilon)\setminus\{1\}
$$
contains some point $1+1/k$ for $k$ sufficiently large. Since $f$ has a pole there, $f$ cannot be analytically continued to the whole punctured disk. Therefore the statement is false.
::

::ProblemBlock{number=6}
#problem

Evaluate
$$
\int_0^\infty \frac{\cos x}{4x^2-\pi^2}\,dx.
$$

#proof

The denominator vanishes at $x=\pi/2$, but $\cos x$ also vanishes there, so the singularity is removable.

We use the standard contour integral formula
$$
\operatorname{PV}\int_{-\infty}^{\infty}\frac{e^{ix}}{x^2-a^2}\,dx
=-\frac{\pi}{a}\sin a,
\qquad a>0.
$$
Taking real parts gives
$$
\operatorname{PV}\int_{-\infty}^{\infty}\frac{\cos x}{x^2-a^2}\,dx
=-\frac{\pi}{a}\sin a.
$$
Since the integrand is even,
$$
\int_0^\infty\frac{\cos x}{x^2-a^2}\,dx
=-\frac{\pi}{2a}\sin a.
$$
Here
$$
4x^2-\pi^2=4\left(x^2-\left(\frac{\pi}{2}\right)^2\right),
$$
so $a=\pi/2$. Therefore
$$
\int_0^\infty \frac{\cos x}{4x^2-\pi^2}\,dx
=\frac14\left(-\frac{\pi}{2(\pi/2)}\sin\frac{\pi}{2}\right)
=-\frac14.
$$
Thus
$$
-\frac14.
$$
::

::ProblemBlock{number=7}
#problem

Let $U\subset\mathbb C$ be given by
$$
U=\{z\in\mathbb C:|z|>1\ \text{and}\ |z-1|<2\}.
$$
Find a conformal mapping from $U$ to the unit disk.

#proof

The two boundary circles $|z|=1$ and $|z-1|=2$ are tangent at $z=-1$. Use the Mobius map
$$
w=\frac{1}{z+1},
$$
which sends the tangency point $-1$ to infinity. The circle $|z|=1$ becomes the line
$$
\operatorname{Re}w=\frac12,
$$
because
$$
\left|\frac1w-1\right|=1
\quad\Longleftrightarrow\quad
|1-w|=|w|
\quad\Longleftrightarrow\quad
\operatorname{Re}w=\frac12.
$$
The circle $|z-1|=2$ becomes
$$
\operatorname{Re}w=\frac14,
$$
because
$$
\left|\frac1w-2\right|=2
\quad\Longleftrightarrow\quad
|1-2w|=2|w|
\quad\Longleftrightarrow\quad
\operatorname{Re}w=\frac14.
$$
The domain $U$ maps to the vertical strip
$$
\frac14<\operatorname{Re}w<\frac12.
$$

Now set
$$
\xi=4w-1=\frac{4}{z+1}-1.
$$
Then $U$ maps to the strip
$$
0<\operatorname{Re}\xi<1.
$$
The map
$$
\eta=e^{\pi i\xi}
$$
maps this strip conformally onto the upper half-plane. Finally, the Cayley transform
$$
\zeta=\frac{\eta-i}{\eta+i}
$$
maps the upper half-plane onto the unit disk.

Therefore one conformal map $U\to D(0,1)$ is
$$

\Phi(z)=
\frac{
\exp\!\left(\pi i\left(\frac{4}{z+1}-1\right)\right)-i
}{
\exp\!\left(\pi i\left(\frac{4}{z+1}-1\right)\right)+i
}.

$$
::

::ProblemBlock{number=8}
#problem

Let
$$
H=\{z\in\mathbb C:\operatorname{Im}z>0\}
$$
be the upper half-plane, and let $f:H\to\mathbb C$ be holomorphic and bounded. For a given $r>0$, denote
$$
H_r=\{z\in\mathbb C:\operatorname{Im}z>r\}.
$$
Prove that for any $r>0$, the restriction
$$
f|_{H_r}:H_r\to\mathbb C
$$
is uniformly continuous.

#proof

Let
$$
|f(z)|\le M
$$
for all $z\in H$. Fix $r>0$. If $z\in H_r$, then the disk
$$
D\left(z,\frac r2\right)
$$
is contained in $H$. By Cauchy's estimate,
$$
|f'(z)|\le \frac{M}{r/2}=\frac{2M}{r}
$$
for all $z\in H_r$.

Since $H_r$ is convex, for any $z,w\in H_r$ the line segment joining $z$ and $w$ lies in $H_r$. Therefore
$$
|f(z)-f(w)|
\le \sup_{\zeta\in H_r}|f'(\zeta)|\,|z-w|
\le \frac{2M}{r}|z-w|.
$$
Thus $f|_{H_r}$ is Lipschitz, hence uniformly continuous.
::
