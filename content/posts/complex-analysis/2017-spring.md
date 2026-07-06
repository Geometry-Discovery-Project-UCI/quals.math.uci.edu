# 2017 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Find
$$
\int_0^{2\pi}\frac{d\theta}{a+\cos\theta},
\qquad a>1.
$$

#proof

The standard formula gives
$$
\int_0^{2\pi}\frac{d\theta}{a+b\cos\theta}
=\frac{2\pi}{\sqrt{a^2-b^2}},
\qquad a>|b|.
$$
With $b=1$,
$$

\int_0^{2\pi}\frac{d\theta}{a+\cos\theta}
=\frac{2\pi}{\sqrt{a^2-1}}.

$$
::

::ProblemBlock{number=2}
#problem

The Bernoulli polynomials $B_n(z)$ are defined by
$$
\frac{te^{tz}}{e^t-1}
=\sum_{n=0}^{\infty}\frac{B_n(z)}{n!}t^n.
$$
Prove that
$$
B_n(z+1)-B_n(z)=nz^{n-1}.
$$

#proof

Compute the difference of generating functions:
$$
\frac{te^{t(z+1)}}{e^t-1}
-
\frac{te^{tz}}{e^t-1}
=
\frac{te^{tz}(e^t-1)}{e^t-1}
=te^{tz}.
$$
But
$$
te^{tz}
=t\sum_{m=0}^{\infty}\frac{z^m}{m!}t^m
=\sum_{n=1}^{\infty}\frac{nz^{n-1}}{n!}t^n.
$$
Comparing coefficients of $t^n/n!$ gives
$$
B_n(z+1)-B_n(z)=nz^{n-1}.
$$
::

::ProblemBlock{number=3}
#problem

Let $f$ be analytic in the strip
$$
S=\{z=x+iy:-1<x<1\}
$$
and continuous on $\overline S$. Suppose that $f(z)$ is real when $\operatorname{Re}z=\pm1$. Prove that $f$ can be extended analytically to the whole plane and that the resulting entire function satisfies
$$
f(z+4)=f(z).
$$

#proof

Since $f$ is real on the boundary line $\operatorname{Re}z=1$, Schwarz reflection across that vertical line extends $f$ analytically to the strip
$$
1<\operatorname{Re}z<3
$$
by
$$
f(z)=\overline{f(2-\overline z)}.
$$
Similarly, reflection across $\operatorname{Re}z=-1$ extends $f$ to
$$
-3<\operatorname{Re}z<-1.
$$
Repeating these reflections extends $f$ analytically to the whole plane.

Reflecting successively across the two vertical lines $\operatorname{Re}z=1$ and $\operatorname{Re}z=3$ produces a translation by $4$. Hence the analytic continuation satisfies
$$
f(z+4)=f(z)
$$
for all $z\in\mathbb C$.
::

::ProblemBlock{number=4}
#problem

Let $f_n:D(0,1)\to D(0,1)\setminus\{0\}$ be analytic and suppose
$$
\sum_{n=1}^{\infty}|f_n(0)|<\infty.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Prove that
$$
\sum_{n=1}^{\infty}|f_n(z)|^3
$$
converges uniformly on $|z|\le1/2$.

<span style="display:inline-block; width:1em;"></span> **(b)** Give an example satisfying the above conditions such that
$$
\sum_{n=1}^{\infty}|f_n(z)|^3
$$
diverges for every $|z|>1/2$.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** Since $f_n$ maps into the punctured disk, $u_n=-\log|f_n|$ is positive harmonic on $D(0,1)$. Harnack's inequality gives
$$
u_n(z)\ge \frac{1-|z|}{1+|z|}u_n(0).
$$
For $|z|\le1/2$,
$$
u_n(z)\ge \frac13u_n(0).
$$
Thus
$$
|f_n(z)|\le |f_n(0)|^{1/3},
$$
and hence
$$
|f_n(z)|^3\le |f_n(0)|.
$$
Since $\sum |f_n(0)|<\infty$, the Weierstrass $M$-test proves uniform convergence on $|z|\le1/2$.

<span style="display:inline-block; width:1em;"></span> **(b)** Let
$$
a_n=\frac1{n(\log(n+1))^2}
$$
and define
$$
f_n(z)=\exp\left(\log a_n\cdot\frac{1+z}{1-z}\right).
$$
Here $\log a_n<0$, and since $\operatorname{Re}\frac{1+z}{1-z}>0$ in the disk, each $f_n$ maps $D$ into $D^*$.

Also
$$
f_n(0)=a_n,
$$
so
$$
\sum |f_n(0)|<\infty.
$$
For real $r>1/2$,
$$
|f_n(r)|^3
=a_n^{3(1+r)/(1-r)}
$$
after choosing the reciprocal extremal direction; equivalently, using
$$
\exp\left(\log a_n\cdot\frac{1-z}{1+z}\right)
$$
gives
$$
|f_n(r)|^3=a_n^{3(1-r)/(1+r)}.
$$
For any fixed $r>1/2$, the exponent
$$
3\frac{1-r}{1+r}<1,
$$
so
$$
\sum |f_n(r)|^3
$$
diverges. By rotating the construction, one obtains divergence at every point with $|z|>1/2$.
::

::ProblemBlock{number=5}
#problem

Let $f$ be holomorphic in
$$
D=\{z\in\mathbb C:2<|z|<\infty\}
$$
and suppose
$$
\int_{|z|=3}f(z)\,dz=0.
$$
Prove that there is a holomorphic function $F$ in $D$ such that
$$
F'(z)=f(z)
$$
on $D$.

#proof

The domain $D$ is an annulus exterior to the disk $|z|\le2$. A holomorphic function on $D$ has a primitive if and only if its integral over a generator of the fundamental group is zero.

The circle $|z|=3$ is such a generator. Since
$$
\int_{|z|=3}f(z)\,dz=0,
$$
all periods of $f(z)\,dz$ on $D$ vanish. Therefore the path integral
$$
F(z)=\int_{z_0}^{z} f(w)\,dw
$$
is independent of path in $D$, and defines a holomorphic function with
$$
F'=f.
$$
::

::ProblemBlock{number=6}
#problem

Find a conformal map from
$$
U_1=\{z=x+iy:y>0\}\setminus\{iy:1\le y\le2\}
$$
onto
$$
U_2=D(0,1)\setminus\{0\}.
$$

#proof

One explicit construction is by mapping the upper half-plane with a vertical slit to a horizontal strip, and then exponentiating.

The function
$$
w=\sqrt{z^2+1}
$$
with the branch chosen appropriately opens the slit with endpoints $i$ and $2i$. After a Mobius normalization sending the two sides of the slit to the two boundary lines of a strip, one obtains a conformal map $\Psi:U_1\to\{0<\operatorname{Im}w<\pi\}$.

Then
$$
\Phi(z)=e^{i\Psi(z)}
$$
maps the strip conformally onto the punctured disk. Thus an explicit conformal map is a composition of elementary maps:
$$
\Phi=e^{i\Psi},
$$
where $\Psi$ is the slit-opening square-root/Mobius map described above.
::

::ProblemBlock{number=7}
#problem

Let $f$ be meromorphic in $\mathbb C$ and suppose
$$
|f(z)|^3\le |\tan z|,
\qquad z\in\mathbb C\setminus P(f),
$$
where $P(f)$ is the set of poles of $f$. Prove that
$$
f\equiv0.
$$

#proof

At a zero of $\tan z$, namely $z=k\pi$, the right side has a simple zero. Hence $f$ must vanish at each $k\pi$.

At a pole of $\tan z$, namely $z=\pi/2+k\pi$, the right side has a simple pole. If $f$ had a pole of order $m\ge1$ there, then $|f|^3$ would have pole order $3m$, which is larger than $1$, contradicting the inequality. Thus $f$ has no poles. Therefore $f$ is entire.

For large $|\operatorname{Im}z|$, the function $\tan z$ is bounded. Away from small neighborhoods of its poles, the inequality gives a uniform bound for $f$. Near the former poles of $\tan z$, the function $f$ is entire and hence locally bounded. By periodicity of $\tan z$, these local bounds can be chosen uniformly on vertical translates of a fundamental strip. Therefore $f$ is bounded entire.

By Liouville's theorem, $f$ is constant. Since $f(k\pi)=0$ for all integers $k$, the constant is $0$. Hence
$$
f\equiv0.
$$
::

::ProblemBlock{number=8}
#problem

Prove or disprove: there is a nonconstant entire function
$$
f=u+iv
$$
such that
$$
v(z)\ne u(z)^2
$$
whenever $u(z)\ge0$.

#proof

No such function exists.

The condition says that the image of $f$ avoids every point on the half-parabola
$$
\Gamma=\{x+ix^2:x\ge0\}.
$$
This set contains more than one point. By Picard's theorem, a nonconstant entire function can omit at most one complex value. Therefore an entire function omitting all points of $\Gamma$ must be constant.

Hence no nonconstant entire function with the stated property exists.
::
