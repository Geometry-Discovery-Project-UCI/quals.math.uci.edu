# 2023 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Evaluate the following integral
$$
\frac{1}{2\pi i}\int_{|z|=4}\frac{\cos(e^z)}{\sin^2 z}\,dz.
$$

#proof

The poles of the integrand inside $|z|=4$ occur at the zeros of $\sin z$, namely
$$
z=-\pi,\quad z=0,\quad z=\pi.
$$
At a zero $a=k\pi$ of $\sin z$, the function $\csc^2 z$ has expansion
$$
\frac{1}{\sin^2 z}=\frac{1}{(z-a)^2}+O(1),
$$
with no $(z-a)^{-1}$ term. Therefore, if $h(z)=\cos(e^z)$, then
$$
\operatorname{Res}_{z=a}\frac{h(z)}{\sin^2 z}=h'(a).
$$
Since
$$
h'(z)=-e^z\sin(e^z),
$$
the required integral is the sum of the residues:
$$
\frac{1}{2\pi i}\int_{|z|=4}\frac{\cos(e^z)}{\sin^2 z}\,dz
=\sum_{a\in\{-\pi,0,\pi\}} -e^a\sin(e^a).
$$
Thus
$$

-e^{-\pi}\sin(e^{-\pi})-\sin(e)-e^\pi\sin(e^\pi)
.
$$
::

::ProblemBlock{number=2}
#problem

Let $f$ be a non-constant analytic function on the closed unit disk $\overline{D(0,1)}$. Suppose that $|f(z)|=1$ if $|z|=1$. Prove that
$$
f(D(0,1))=D(0,1).
$$

#proof

First, by the maximum modulus principle,
$$
|f(z)|\le 1
$$
for all $z\in D(0,1)$. Since $f$ is non-constant, the open mapping theorem implies that $f$ cannot take a value of modulus $1$ in the interior. Hence
$$
f(D(0,1))\subset D(0,1).
$$

It remains to prove the reverse inclusion. We first show that $f$ has at least one zero in $D(0,1)$. If $f$ had no zero in the closed disk, then $1/f$ would be analytic on the closed disk and
$$
\left|\frac1{f(z)}\right|=1
$$
on $|z|=1$. By the maximum modulus principle applied to $1/f$,
$$
\left|\frac1{f(z)}\right|\le 1,
$$
so $|f(z)|\ge 1$ in the disk. Together with $|f(z)|\le 1$, this gives $|f(z)|=1$ throughout the disk, forcing $f$ to be constant, a contradiction. Therefore $f$ has at least one zero.

Now fix $w\in D(0,1)$. On $|z|=1$,
$$
|w|<1=|f(z)|.
$$
By Rouche's theorem, $f(z)-w$ and $f(z)$ have the same number of zeros in $D(0,1)$, counted with multiplicity. Since $f$ has at least one zero, $f-w$ has at least one zero. Thus there exists $z\in D(0,1)$ such that
$$
f(z)=w.
$$
Hence $D(0,1)\subset f(D(0,1))$, and therefore
$$
f(D(0,1))=D(0,1).
$$
::

::ProblemBlock{number=3}
#problem

Let
$$
J(z)=\sum_{n=0}^{\infty}\frac{(-1)^n}{(n!)^2}\left(\frac z2\right)^{2n}.
$$
Prove that $J(z)$ is entire and satisfies
$$
zJ''(z)+J'(z)+zJ(z)=0.
$$

#proof

Write
$$
J(z)=\sum_{n=0}^{\infty}a_n z^{2n},
\qquad
a_n=\frac{(-1)^n}{4^n(n!)^2}.
$$
The ratio of consecutive terms is
$$
\left|\frac{a_{n+1}z^{2n+2}}{a_nz^{2n}}\right|
=\frac{|z|^2}{4(n+1)^2}\to 0
$$
as $n\to\infty$. Hence the radius of convergence is infinite, so $J$ is entire.

Since the series is entire, we may differentiate term by term:
$$
J'(z)=\sum_{n=1}^{\infty}2n a_n z^{2n-1},
$$
and
$$
J''(z)=\sum_{n=1}^{\infty}2n(2n-1)a_n z^{2n-2}.
$$
Thus
$$
zJ''(z)+J'(z)
=\sum_{n=1}^{\infty}\left(2n(2n-1)+2n\right)a_nz^{2n-1}
=\sum_{n=1}^{\infty}4n^2a_nz^{2n-1}.
$$
Also
$$
zJ(z)=\sum_{n=0}^{\infty}a_nz^{2n+1}
=\sum_{n=1}^{\infty}a_{n-1}z^{2n-1}.
$$
Therefore the coefficient of $z^{2n-1}$ in
$$
zJ''(z)+J'(z)+zJ(z)
$$
is
$$
4n^2a_n+a_{n-1}.
$$
But
$$
4n^2a_n
=4n^2\frac{(-1)^n}{4^n(n!)^2}
=-\frac{(-1)^{n-1}}{4^{n-1}((n-1)!)^2}
=-a_{n-1}.
$$
Hence every coefficient is zero, so
$$
zJ''(z)+J'(z)+zJ(z)=0.
$$
::

::ProblemBlock{number=4}
#problem

Prove that for any $a\in\mathbb C$ and any integer $n\ge 2$, the polynomial
$$
2022+az+2023z^n
$$
has at least one root in the unit disk $D(0,1)$.

#proof

Let
$$
p(z)=2022+az+2023z^n.
$$
Let its roots, counted with multiplicity, be $\alpha_1,\ldots,\alpha_n$. Since the leading coefficient is $2023$ and the constant term is $2022$, Vieta's formula gives
$$
\alpha_1\alpha_2\cdots\alpha_n
=(-1)^n\frac{2022}{2023}.
$$
Taking absolute values,
$$
|\alpha_1|\cdots|\alpha_n|=\frac{2022}{2023}<1.
$$
If every root satisfied $|\alpha_j|\ge 1$, then the product of the moduli would be at least $1$, a contradiction. Therefore at least one root satisfies
$$
|\alpha_j|<1.
$$
Thus $p$ has at least one root in $D(0,1)$.
::

::ProblemBlock{number=5}
#problem

Let $f$ be a holomorphic function in the unit disk $D(0,1)$ that is injective and satisfies $f(0)=0$. Prove that there exists a holomorphic function $g$ in $D(0,1)$ such that
$$
(g(z))^{2023}=f(z^{2023})
$$
for all $z\in D(0,1)$.

#proof

Since $f$ is injective and $f(0)=0$, the zero of $f$ at $0$ is simple and $f$ has no other zeros in $D(0,1)$. Therefore
$$
h(z)=\frac{f(z)}{z}
$$
extends holomorphically to $D(0,1)$ and is nowhere zero there.

Then
$$
f(z^{2023})=z^{2023}h(z^{2023}).
$$
The function $h(z^{2023})$ is holomorphic and nowhere zero in the simply connected disk $D(0,1)$. Hence it has a holomorphic logarithm: there exists a holomorphic function $L$ on $D(0,1)$ such that
$$
e^{L(z)}=h(z^{2023}).
$$
Define
$$
g(z)=z\exp\left(\frac{L(z)}{2023}\right).
$$
Then $g$ is holomorphic in $D(0,1)$ and
$$
(g(z))^{2023}
=z^{2023}e^{L(z)}
=z^{2023}h(z^{2023})
=f(z^{2023}).
$$
This proves the claim.
::

::ProblemBlock{number=6}
#problem

Let $f:D(0,1)\to D(0,1)$ be a non-constant holomorphic function and define inductively
$$
f_{n+1}(z)=\frac{1}{1+f_n(z)},\qquad n\in\mathbb N,
$$
with $f_1=f$.

<span style="display:inline-block; width:1em;"></span> **(a)** Show that for each $n\in\mathbb N$, the function $f_n$ is a holomorphic function in the unit disk $D(0,1)$.

<span style="display:inline-block; width:1em;"></span> **(b)** Does the sequence of holomorphic functions $\{f_n\}_{n\in\mathbb N}$ form a normal family in $D(0,1)$? Explain your answer.

#proof

Let
$$
T(w)=\frac{1}{1+w}.
$$
Then
$$
f_n=T^{n-1}\circ f.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** We must check that the denominator never vanishes. The iterates of $T$ are rational functions. A direct induction gives
$$
T^m(w)=\frac{F_{m-1}w+F_m}{F_mw+F_{m+1}},
$$
where $F_0=0$, $F_1=1$, and $F_{m+1}=F_m+F_{m-1}$ are the Fibonacci numbers.

The only pole of $T^m$ is
$$
w=-\frac{F_{m+1}}{F_m}.
$$
For the corresponding iterates used above, the possible poles lie on the negative real axis and are not attained by the preceding compositions starting from $f(D(0,1))\subset D(0,1)$. Equivalently, the denominator $1+f_n(z)$ cannot vanish because this would force an earlier iterate of $T$ to take a forbidden pole value outside the allowed chain of iterates from the unit disk. Hence every $f_n$ is holomorphic in $D(0,1)$.

A more explicit way to see the same point is that for $w\in D(0,1)$, every iterate $T^m(w)$ is defined: the poles of $T^m$ are real numbers less than or equal to $-1$ in absolute value, while $D(0,1)$ contains none of them. Therefore $T^{n-1}\circ f$ is holomorphic.

<span style="display:inline-block; width:1em;"></span> **(b)** Yes. The iterates of $T$ converge locally uniformly on $D(0,1)$ to the attracting fixed point of $T$. The fixed points solve
$$
L=\frac{1}{1+L},
$$
so
$$
L^2+L-1=0.
$$
The attracting fixed point is
$$
\alpha=\frac{\sqrt5-1}{2}.
$$
Since
$$
|T'(\alpha)|=\frac{1}{|1+\alpha|^2}=\alpha^2<1,
$$
the iterates $T^m$ converge locally uniformly to $\alpha$ on the unit disk. Therefore
$$
f_n=T^{n-1}\circ f\to \alpha
$$
locally uniformly in $D(0,1)$.

Every locally uniformly convergent sequence of holomorphic functions is a normal family. Thus $\{f_n\}$ is normal in $D(0,1)$.
::

::ProblemBlock{number=7}
#problem

Let
$$
u(z)=u(x,y)=x^3-3xy^2-6xy.
$$
Find all entire functions $f(z)$ such that
$$
\operatorname{Re} f(z)=u(z).
$$

#proof

We recognize
$$
\operatorname{Re}(z^3)=x^3-3xy^2.
$$
Also,
$$
z^2=x^2-y^2+2ixy,
$$
so
$$
iz^2=i(x^2-y^2)-2xy,
$$
and therefore
$$
\operatorname{Re}(3iz^2)=-6xy.
$$
Hence
$$
\operatorname{Re}(z^3+3iz^2)=x^3-3xy^2-6xy=u(x,y).
$$

If $f$ and $z^3+3iz^2$ have the same real part on the connected domain $\mathbb C$, then their difference is an entire function with real part identically zero. Such a function is constant and purely imaginary. Therefore all solutions are
$$
f(z)=z^3+3iz^2+iC,\qquad C\in\mathbb R.
$$
::

::ProblemBlock{number=8}
#problem

True or false. There is a sequence of holomorphic functions $\{f_n\}_{n=1}^{\infty}$ on the unit disk $D(0,1)$ such that
$$
f_n(z)\to \cos(z^2)
$$
as $n\to\infty$ uniformly on the circle $|z|=\frac12$.

#proof

This is true.

Since $\cos(z^2)$ is an entire function, it is holomorphic on $D(0,1)$. Define
$$
f_n(z)=\cos(z^2)
$$
for every $n$. Then each $f_n$ is holomorphic in $D(0,1)$, and
$$
f_n(z)\to \cos(z^2)
$$
uniformly on every subset of $D(0,1)$, in particular on the circle $|z|=\frac12$.

Thus the statement is true.
::

::ProblemBlock{number=9}
#problem

Let $F$ be the family of all holomorphic functions
$$
f:H\to \Omega=\{z\in\mathbb C:|z|>1\}
$$
such that $f(i)=2$. Give the best estimate for $|f(3i)|$ for $f\in F$.

#proof

Since $H$ is simply connected and $f$ never vanishes, $f$ has a holomorphic logarithm on $H$. Choose a branch
$$
h=\log f
$$
such that
$$
h(i)=\log 2.
$$
Because $|f(z)|>1$, we have
$$
\operatorname{Re}h(z)=\log|f(z)|>0.
$$
Thus
$$
u(z)=\operatorname{Re}h(z)
$$
is a positive harmonic function on $H$ with
$$
u(i)=\log 2.
$$

By Harnack's inequality in the upper half-plane, for points $i$ and $3i$,
$$
\frac{1}{3}u(i)\le u(3i)\le 3u(i).
$$
Therefore
$$
\frac13\log 2\le \log|f(3i)|\le 3\log 2.
$$
Exponentiating gives
$$
2^{1/3}\le |f(3i)|\le 8.
$$

The constants are sharp because equality in Harnack's inequality is approached by Poisson kernels for the upper half-plane, and exponentiating their harmonic conjugates gives corresponding extremal holomorphic functions into $\{|z|>1\}$.
::
