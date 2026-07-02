# 2026 Spring Comprehensive in Analysis
::ProblemBlock{number=1}
#problem
Let $\{a_n\}$ be any sequence of positive real numbers. Denote
$$
B_0=1,
\qquad
B_n=\prod_{k=1}^n(1+a_k),
\qquad n\ge1.
$$
Prove that the series
$$
\sum_{n=1}^{\infty}\frac{a_n}{B_n}
$$
converges and that its sum is less than or equal to $1$.

#proof
 Since
$$
B_n=B_{n-1}(1+a_n),
$$
we have
$$
a_n=\frac{B_n}{B_{n-1}}-1
=
\frac{B_n-B_{n-1}}{B_{n-1}}.
$$
Therefore
$$
\frac{a_n}{B_n}
=
\frac{B_n-B_{n-1}}{B_{n-1}B_n}
=
\frac1{B_{n-1}}-\frac1{B_n}.
$$
Hence the partial sums telescope:
$$
\sum_{n=1}^N \frac{a_n}{B_n}
=
\sum_{n=1}^N
\left(
\frac1{B_{n-1}}-\frac1{B_n}
\right)
=
1-\frac1{B_N}.
$$
Since $B_N>0$, we get
$$
\sum_{n=1}^N \frac{a_n}{B_n}\le1.
$$
The partial sums are increasing because all terms are positive, and they are
bounded above by $1$. Therefore the series converges and
$$
\sum_{n=1}^{\infty}\frac{a_n}{B_n}\le1.
$$
::

::ProblemBlock{number=2}
#problem
 Suppose $f(x)$ is uniformly continuous on $[0,\infty)$ and satisfies
$$
\lim_{n\to\infty} f(x+n)=0
$$
for any $x\in[0,1]$.


<span style="display:inline-block; width:1em;"></span> **(a)** Show that
$$
\lim_{x\to+\infty} f(x)=0.
$$

<span style="display:inline-block; width:1em;"></span> **(b)**  Does the above claim still hold if uniformly continuous is replaced
by continuous? Explain your answer.


#proof
<span style="display:inline-block; width:1em;"></span> **(a)** 
Suppose not. Then there exist $\varepsilon>0$ and a sequence $y_j\to\infty$
such that
$$
|f(y_j)|\ge \varepsilon
$$
for every $j$.

Write
$$
y_j=n_j+r_j,
$$
where $n_j\in\mathbb N$ and $r_j\in[0,1]$. Since $[0,1]$ is compact, after
passing to a subsequence we may assume
$$
r_j\to r
$$
for some $r\in[0,1]$.

Because $f$ is uniformly continuous on $[0,\infty)$, we have
$$
|f(n_j+r_j)-f(n_j+r)|\to0.
$$
By assumption, since $r\in[0,1]$,
$$
f(n_j+r)\to0.
$$
Therefore
$$
f(y_j)=f(n_j+r_j)\to0,
$$
contradicting $|f(y_j)|\ge\varepsilon$. Hence
$$
\lim_{x\to+\infty}f(x)=0.
$$

<br>

<span style="display:inline-block; width:1em;"></span> **(b)** 
No. The claim can fail if $f$ is only continuous.

For each $m\in\mathbb N$, let
$$
c_m=m+\frac1m.
$$
Define a triangular spike function
$$
\phi_m(x)=\max\left\{0,1-4m^2|x-c_m|\right\}.
$$
Now define
$$
f(x)=\sum_{m=1}^{\infty}\phi_m(x).
$$
The supports of the $\phi_m$ are very small intervals centered at $c_m$.
They are locally finite, so $f$ is continuous on $[0,\infty)$.

Also,
$$
f(c_m)=1
$$
for every $m$, and $c_m\to\infty$. Hence
$$
\lim_{x\to\infty}f(x)\ne0.
$$

However, for each fixed $x\in[0,1]$, we have
$$
f(x+n)\to0.
$$
Indeed, the only possible spikes near $x+n$ have centers of the form
$m+1/m$. For fixed $x\in[0,1]$, the fractional parts $1/m$ tend to $0$, while
the widths of the spikes are of order $1/m^2$. Thus for all sufficiently large
$n$, the point $x+n$ lies outside every spike support, and so
$$
f(x+n)=0.
$$
Therefore continuity alone is not enough.
::

::ProblemBlock{number=3}
#problem
Does the integral
$$
\int_0^\infty \frac{1}{1+x^4\cos^2 x}\,dx
$$
converge? Justify your answer.


#proof
 The only possible difficulty occurs near the zeros of $\cos x$. These zeros are
$$
c_k=\frac{\pi}{2}+k\pi,
\qquad k=0,1,2,\dots.
$$
Away from these points, $\cos^2 x$ is bounded below by a positive constant on
subintervals, and the integrand is bounded by a constant multiple of $x^{-4}$,
which is integrable at infinity.

It remains to estimate the contribution near each $c_k$. For $x$ near $c_k$,
write
$$
x=c_k+u.
$$
Then
$$
\cos x=\pm \sin u.
$$
For $|u|\le \frac{\pi}{2}$, we have
$$
|\sin u|\ge \frac{2}{\pi}|u|
$$
when $|u|$ is small, and in any case this gives the required local estimate.
Also, for large $k$, $x$ is comparable to $c_k$ on the interval
$$
\left[c_k-\frac{\pi}{2},c_k+\frac{\pi}{2}\right].
$$
Thus
$$
\int_{c_k-\pi/2}^{c_k+\pi/2}
\frac{dx}{1+x^4\cos^2 x}
\le
C\int_{-\pi/2}^{\pi/2}
\frac{du}{1+c_k^4u^2}.
$$
The last integral is bounded by
$$
C\int_{-\infty}^{\infty}\frac{du}{1+c_k^4u^2}.
$$
Using the change of variables $v=c_k^2u$, we get
$$
\int_{-\infty}^{\infty}\frac{du}{1+c_k^4u^2}
=
\frac1{c_k^2}\int_{-\infty}^{\infty}\frac{dv}{1+v^2}
=
\frac{C}{c_k^2}.
$$
Therefore
$$
\int_{c_k-\pi/2}^{c_k+\pi/2}
\frac{dx}{1+x^4\cos^2 x}
\le
\frac{C}{c_k^2}.
$$
Since
$$
\sum_{k=1}^{\infty}\frac1{c_k^2}<\infty,
$$
the integral converges. Hence
$$
\int_0^\infty \frac{1}{1+x^4\cos^2 x}\,dx
$$
converges.
::

::ProblemBlock{number=4}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** Show that if $M$ is a compact connected metric space, and
$f:M\to\mathbb R$ is continuous, then the image $f(M)\subset\mathbb R$ is a
finite closed interval.

<span style="display:inline-block; width:1em;"></span> **(b)**  Suppose $M$ is a metric space such that for any continuous function
$f:M\to\mathbb R$, the image $f(M)\subset\mathbb R$ is a finite closed
interval. Show that $M$ must be compact and connected.
 



#proof
<span style="display:inline-block; width:1em;"></span> **(a)** 
Since $M$ is compact and $f$ is continuous, $f(M)$ is compact in $\mathbb R$.
Since $M$ is connected and $f$ is continuous, $f(M)$ is connected in
$\mathbb R$.

The compact connected subsets of $\mathbb R$ are exactly the finite closed
intervals. Therefore
$$
f(M)=[\alpha,\beta]
$$
for some real numbers $\alpha\le\beta$.

<br>

<span style="display:inline-block; width:1em;"></span> **(b)** 
First we prove that $M$ is connected. Suppose $M$ is not connected. Then there
exist nonempty disjoint open sets $U,V\subset M$ such that
$$
M=U\cup V.
$$
Since $U$ and $V$ are also closed in $M$, the function
$$
f(x)=
\begin{cases}
0, & x\in U,\\
1, & x\in V
\end{cases}
$$
is continuous. But
$$
f(M)=\{0,1\},
$$
which is not an interval. This contradicts the hypothesis. Hence $M$ is
connected.

Now we prove that $M$ is compact. 
Let $p$ be any fixed point of $M$. Then the function $d(x,p)$ must be bounded by assumption. Let $\{x_n\}$ be a sequence of $M$, if for any such sequence there is a subsequence which is convergent to a point $q\in M$, then $M$ must be compact. If not, then $1/d(x,q)$ is an unbounded continuous function on $M$, whcih is a contradiction. 
::

::ProblemBlock{number=5}
#problem
 Show that for any continuously differentiable function $f:[0,1]\to\mathbb R$
and any $\varepsilon>0$, there exists a polynomial $p(x)$ such that
$$
\sup_{x\in[0,1]}|p(x)-f(x)|<\varepsilon,
$$
$$
|p'(0)-f'(0)|<\varepsilon,
$$
and
$$
|p'(1)-f'(1)|<\varepsilon.
$$

#proof
Since $f\in C^1([0,1])$, we have $f'\in C([0,1])$. By the Weierstrass
approximation theorem, there exists a polynomial $q$ such that
$$
\sup_{x\in[0,1]}|q(x)-f'(x)|<\varepsilon.
$$
Define
$$
p(x)=f(0)+\int_0^x q(t)\,dt.
$$
Since $q$ is a polynomial, $p$ is also a polynomial.

Now
$$
p'(x)=q(x).
$$
Therefore
$$
|p'(0)-f'(0)|
=
|q(0)-f'(0)|
<
\varepsilon
$$
and
$$
|p'(1)-f'(1)|
=
|q(1)-f'(1)|
<
\varepsilon.
$$
Also, for every $x\in[0,1]$,
$$
p(x)-f(x)
=
\int_0^x q(t)\,dt-\int_0^x f'(t)\,dt
=
\int_0^x (q(t)-f'(t))\,dt.
$$
Thus
$$
|p(x)-f(x)|
\le
\int_0^x |q(t)-f'(t)|\,dt
<
\varepsilon.
$$
Hence
$$
\sup_{x\in[0,1]}|p(x)-f(x)|<\varepsilon.
$$
::

 

::ProblemBlock{number=6}
#problem
  Consider a linear operator $T:\ell^2(\mathbb N)\to\mathbb R$ defined by
$$
T(\overline{x})=\sum_{n=1}^{\infty}2^{-n}x_{2n},
$$
where
$$
\overline{x}=(x_1,x_2,x_3,\dots)\in\ell^2(\mathbb N).
$$
Is $T$ bounded? If yes, find $\|T\|$.


#proof
Define a sequence $a=(a_k)_{k=1}^{\infty}$ by
$$
a_{2n}=2^{-n},
\qquad
a_{2n-1}=0.
$$
Then
$$
T(\overline{x})=\sum_{k=1}^{\infty}a_kx_k.
$$
Since
$$
\|a\|_{\ell^2}^2
=
\sum_{n=1}^{\infty}4^{-n}
=
\frac{1/4}{1-1/4}
=
\frac13,
$$
we have
$$
a\in\ell^2
$$
and
$$
\|a\|_{\ell^2}=\frac1{\sqrt3}.
$$
By the Cauchy-Schwarz inequality,
$$
|T(\overline{x})|
\le
\|a\|_{\ell^2}\|\overline{x}\|_{\ell^2}
=
\frac1{\sqrt3}\|\overline{x}\|_{\ell^2}.
$$
Thus $T$ is bounded and
$$
\|T\|\le \frac1{\sqrt3}.
$$

To show equality, take
$$
\overline{x}=\frac{a}{\|a\|_{\ell^2}}.
$$
Then
$$
\|\overline{x}\|_{\ell^2}=1
$$
and
$$
T(\overline{x})
=
\sum_{k=1}^{\infty}a_k\frac{a_k}{\|a\|_{\ell^2}}
=
\frac{\|a\|_{\ell^2}^2}{\|a\|_{\ell^2}}
=
\|a\|_{\ell^2}
=
\frac1{\sqrt3}.
$$
Therefore
$$
\boxed{\|T\|=\frac1{\sqrt3}.}
$$
::

::ProblemBlock{number=7}
#problem
 Show that there exist $\varepsilon>0$ and $\delta>0$ such that for any
$2\times2$ matrix $A$ that is $\delta$-close to identity, there exists a unique
$2\times2$ matrix $X$ in the $\varepsilon$-neighborhood of the identity matrix
such that
$$
2X^3-X^2=A.
$$

#proof
Let $M_2(\mathbb R)$ denote the vector space of real $2\times2$ matrices.
Define
$$
F:M_2(\mathbb R)\to M_2(\mathbb R)
$$
by
$$
F(X)=2X^3-X^2.
$$
Then $F$ is continuously differentiable. Also,
$$
F(I)=2I^3-I^2=I.
$$

We compute the derivative of $F$ at $I$. For $H\in M_2(\mathbb R)$,
$$
D(X^2)_I(H)=IH+HI=2H,
$$
and
$$
D(X^3)_I(H)=I^2H+IHI+HI^2=3H.
$$
Therefore
$$
DF_I(H)
=
2\cdot 3H-2H
=
4H.
$$
Thus
$$
DF_I:M_2(\mathbb R)\to M_2(\mathbb R)
$$
is the linear map
$$
H\mapsto 4H,
$$
which is invertible.

By the inverse function theorem, there exist neighborhoods $U$ and $V$ of $I$
such that
$$
F:U\to V
$$
is a bijection with a continuously differentiable inverse. Therefore, there
exist $\varepsilon>0$ and $\delta>0$ such that if
$$
\|A-I\|<\delta,
$$
then there exists a unique matrix $X$ with
$$
\|X-I\|<\varepsilon
$$
such that
$$
F(X)=A.
$$
That is,
$$
2X^3-X^2=A.
$$
::

::ProblemBlock{number=8}
#problem
 Evaluate the integral
$$
\int_0^2
\left(
\int_0^{4-x^2}
\frac{xe^{2y}}{4-y}\,dy
\right)
dx.
$$
#proof
The region of integration is
$$
0\le x\le2,
\qquad
0\le y\le 4-x^2.
$$
Equivalently,
$$
0\le y\le4,
\qquad
0\le x\le \sqrt{4-y}.
$$
Therefore
$$
\int_0^2
\left(
\int_0^{4-x^2}
\frac{xe^{2y}}{4-y}\,dy
\right)
dx
=
\int_0^4
\left(
\int_0^{\sqrt{4-y}}
\frac{xe^{2y}}{4-y}\,dx
\right)
dy.
$$
Now
$$
\int_0^{\sqrt{4-y}}
\frac{xe^{2y}}{4-y}\,dx
=
\frac{e^{2y}}{4-y}
\int_0^{\sqrt{4-y}}x\,dx.
$$
Thus
$$
\int_0^{\sqrt{4-y}}x\,dx
=
\frac{4-y}{2}.
$$
Hence
$$
\int_0^{\sqrt{4-y}}
\frac{xe^{2y}}{4-y}\,dx
=
\frac12 e^{2y}.
$$
Therefore
$$
\int_0^2
\left(
\int_0^{4-x^2}
\frac{xe^{2y}}{4-y}\,dy
\right)
dx
=
\frac12\int_0^4 e^{2y}\,dy.
$$
So
$$
\frac12\int_0^4 e^{2y}\,dy
=
\frac12\cdot \frac12(e^8-1)
=
\frac{e^8-1}{4}.
$$
Therefore
$$
\boxed{
\int_0^2
\left(
\int_0^{4-x^2}
\frac{xe^{2y}}{4-y}\,dy
\right)
dx
=
\frac{e^8-1}{4}.
}
$$
::

::ProblemBlock{number=9}
#problem
 A fisherman's net has a rim, which is a circle of radius $5$. He fixes it in the
sea in such a way that the rim is in the $xz$-plane with center at the origin.
The velocity of water is given by the vector field $\overline F$ given by
$$
\overline F(x,y,z)=(9xy^2+z^2, 2-3y^3, x^2).
$$
Find the flux of the water across the net.
#proof
The rim is the circle
$$
x^2+z^2=25
$$
in the plane $y=0$. Since
$$
\nabla\cdot \overline F
=
\frac{\partial}{\partial x}(9xy^2+z^2)
+
\frac{\partial}{\partial y}(2-3y^3)
+
\frac{\partial}{\partial z}(x^2),
$$
we get
$$
\nabla\cdot \overline F
=
9y^2-9y^2+0=0.
$$
Therefore the flux through any surface spanning the rim is the same as the flux
through the flat disk
$$
D=\{(x,0,z):x^2+z^2\le25\}.
$$
Choose the normal vector
$$
\mathbf n=(0,1,0).
$$
On the disk $D$, we have $y=0$, so
$$
\overline F(x,0,z)=(z^2,2,x^2).
$$
Thus
$$
\overline F(x,0,z)\cdot \mathbf n=2.
$$
Therefore the flux is
$$
\iint_D 2\,dA
=
2\cdot \pi(5)^2
=
50\pi.
$$
Hence the flux across the net is
$$
\pm 50\pi
$$
depending on the orientation chosen.
::