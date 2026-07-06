# 2014 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem
Complete the following two problems.

<span style="display:inline-block; width:1em;"></span> **(a)** Describe all entire holomorphic functions $f$ with
$$
|f(z)|\leq |z|
$$
for all $z\in\mathbb C$.

<span style="display:inline-block; width:1em;"></span> **(b)** Describe all entire holomorphic functions $f$ with
$$
\lim_{z\to\infty}\frac{f(z)}{z}=0.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Since $|f(0)|\leq 0$, we have $f(0)=0$. Thus
$$
g(z)=\frac{f(z)}{z}
$$
has a removable singularity at $0$ and extends to an entire function. For $z\neq 0$,
$$
|g(z)|=\frac{|f(z)|}{|z|}\leq 1.
$$
By Liouville's theorem, $g$ is constant. Hence
$$
f(z)=cz
$$
for some constant $c$ with $|c|\leq 1$.

Thus the functions are exactly
$$
f(z)=cz,\quad |c|\leq 1.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** The condition says that $f(z)=o(z)$ as $z\to\infty$. We claim $f$ must be constant.

For any $\varepsilon>0$, there is $R$ such that
$$
|f(z)|\leq \varepsilon |z|
$$
whenever $|z|\geq R$. By Cauchy's estimate on the circle $|z|=\rho>R$,
$$
|f'(0)|\leq \frac{\max_{|z|=\rho}|f(z)|}{\rho}
\leq \varepsilon.
$$
Letting $\varepsilon\to 0$ gives $f'(0)=0$. Applying the same estimate to $f^{(k)}(0)$ for $k\geq 2$ gives
$$
|f^{(k)}(0)|\leq \frac{k!\max_{|z|=\rho}|f(z)|}{\rho^k}
\leq k!\varepsilon \rho^{1-k}\to 0
$$
as $\rho\to\infty$. Thus all derivatives of positive order vanish at $0$, and $f$ is constant.

Conversely, every constant function satisfies $f(z)/z\to 0$. Hence the functions are exactly the constant entire functions.
::

::ProblemBlock{number=2}
#problem
Complete the following two problems.

<span style="display:inline-block; width:1em;"></span> **(a)** Evaluate
$$
\int_{|z|=1}\exp\left(\frac1{z^2}\right)\,dz.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Evaluate
$$
\int_0^\infty \frac{x^2}{1+x^4}\,dx.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The Laurent expansion is
$$
\exp\left(\frac1{z^2}\right)
=\sum_{k=0}^{\infty}\frac{1}{k!z^{2k}}.
$$
There is no $z^{-1}$ coefficient. Hence the residue at $0$ is $0$, and therefore
$$
\displaystyle
\int_{|z|=1}\exp\left(\frac1{z^2}\right)\,dz=0.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** For $0<a<4$,
$$
\int_0^\infty \frac{x^{a-1}}{1+x^4}\,dx
=\frac{\pi}{4}\csc\left(\frac{\pi a}{4}\right).
$$
Taking $a=3$ gives
$$
\int_0^\infty \frac{x^2}{1+x^4}\,dx
=\frac{\pi}{4}\csc\left(\frac{3\pi}{4}\right)
=\frac{\pi}{4}\sqrt2.
$$
Thus
$$
\displaystyle
\int_0^\infty \frac{x^2}{1+x^4}\,dx
=\frac{\pi\sqrt2}{4}.
$$
::

::ProblemBlock{number=3}
#problem
Let $f:D(0,1)\to D(0,1)$ be holomorphic with
$$
f(0)=\frac13.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Give a sharp upper bound for $|f'(0)|$.

<span style="display:inline-block; width:1em;"></span> **(b)** Give an example of $f$ such that $|f'(0)|$ achieves the upper bound from part **(a)**.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** By the Schwarz-Pick lemma,
$$
|f'(0)|\leq 1-|f(0)|^2.
$$
Since $f(0)=1/3$,
$$
|f'(0)|\leq 1-\frac19=\frac89.
$$
Thus the sharp upper bound is
$$
\frac89.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Equality is attained by a disk automorphism mapping $0$ to $1/3$, for example
$$
f(z)=\frac{\frac13+z}{1+\frac13z}.
$$
Then $f(0)=1/3$ and
$$
f'(0)=1-\frac19=\frac89.
$$
::

::ProblemBlock{number=4}
#problem
Prove that there is an $N$ such that if $n\geq N$, then
$$
\sum_{k=0}^{n}(k+1)z^k\neq 0
$$
for every $z\in D(0,3/4)$.

#proof
For $|z|<1$,
$$
\sum_{k=0}^{\infty}(k+1)z^k=\frac{1}{(1-z)^2}.
$$
This limit function is holomorphic and nonzero on $|z|<1$.

Let
$$
S_n(z)=\sum_{k=0}^{n}(k+1)z^k.
$$
The series converges uniformly on the closed disk $|z|\leq 3/4$, so
$$
S_n\to \frac{1}{(1-z)^2}
$$
uniformly on $|z|\leq 3/4$.

Since $(1-z)^{-2}$ has no zeros on the compact set $|z|\leq 3/4$, there is $m>0$ such that
$$
\left|\frac{1}{(1-z)^2}\right|\geq m
$$
on $|z|\leq 3/4$. For all sufficiently large $n$,
$$
\left|S_n(z)-\frac{1}{(1-z)^2}\right|<m
$$
on $|z|\leq 3/4$. Hence $S_n(z)$ cannot vanish there. Therefore there exists $N$ such that for $n\geq N$,
$$
S_n(z)\neq 0
$$
for all $z\in D(0,3/4)$.
::

::ProblemBlock{number=5}
#problem
Let $f_1,\ldots,f_n$ be holomorphic in a domain $D\subset\mathbb C$, and let $p\in(0,\infty)$. Prove:

<span style="display:inline-block; width:1em;"></span> **(a)** $\sum_{j=1}^{n}|f_j(z)|^p$ is subharmonic in $D$.

<span style="display:inline-block; width:1em;"></span> **(b)** If there is $z_0\in D$ such that
$$
\sum_{j=1}^{n}|f_j(z_0)|^p\geq \sum_{j=1}^{n}|f_j(z)|^p
$$
for all $z\in D$, then each $f_j$ is constant.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** For a holomorphic function $f$, the function $|f|^p$ is subharmonic for every $p>0$. This follows, for example, because $\log |f|$ is subharmonic and $t\mapsto e^{pt}$ is increasing and convex.

A finite sum of subharmonic functions is subharmonic. Hence
$$
\sum_{j=1}^{n}|f_j(z)|^p
$$
is subharmonic in $D$.

<span style="display:inline-block; width:1em;"></span> **(b)** Let
$$
u(z)=\sum_{j=1}^{n}|f_j(z)|^p.
$$
By part **(a)**, $u$ is subharmonic. The hypothesis says $u$ attains a maximum at the interior point $z_0$. By the maximum principle for subharmonic functions, $u$ is constant on $D$.

Since each $|f_j|^p$ is subharmonic and nonnegative, the distributional Laplacian of each term is a positive measure. The sum has Laplacian $0$, because $u$ is constant. Therefore each $|f_j|^p$ has Laplacian $0$, so each $|f_j|^p$ is harmonic.

If a holomorphic function $f_j$ is nonconstant, then $|f_j|^p$ is strictly subharmonic away from its zeros. Thus $|f_j|^p$ cannot be harmonic unless $f_j$ is constant. Hence every $f_j$ is constant.
::

::ProblemBlock{number=6}
#problem
Let
$$
D=\{z\in\mathbb C:1<|z+1|\ \text{and}\ |z+2|<2\}.
$$
Construct a conformal holomorphic map from $D$ onto the unit disk $D(0,1)$.

#proof
The two boundary circles
$$
|z+1|=1
\qquad\text{and}\qquad
|z+2|=2
$$
are tangent at $z=0$. The map
$$
w=\frac1z
$$
sends circles through $0$ to lines.

For $|z+1|=1$, we have
$$
|z|^2+z+\overline z=0.
$$
Dividing by $|z|^2$ gives
$$
1+w+\overline w=0,
$$
so
$$
\operatorname{Re}w=-\frac12.
$$

For $|z+2|=2$, we have
$$
|z|^2+2z+2\overline z=0.
$$
Dividing by $|z|^2$ gives
$$
1+2w+2\overline w=0,
$$
so
$$
\operatorname{Re}w=-\frac14.
$$
Thus $w=1/z$ maps $D$ onto the vertical strip
$$
-\frac12<\operatorname{Re}w<-\frac14.
$$

Translate and scale the strip by
$$
u=4\left(w+\frac12\right).
$$
Then
$$
0<\operatorname{Re}u<1.
$$
The exponential map
$$
\eta=e^{\pi i u}
$$
maps this strip conformally onto the upper half-plane. Finally,
$$
C(\eta)=\frac{\eta-i}{\eta+i}
$$
maps the upper half-plane onto the unit disk.

Therefore one required conformal map is
$$

F(z)=
\frac{\exp\left(4\pi i\left(\frac1z+\frac12\right)\right)-i}
{\exp\left(4\pi i\left(\frac1z+\frac12\right)\right)+i}.
$$
::

::ProblemBlock{number=7}
#problem
Let $D$ be a simply connected domain in $\mathbb C$ and $z_0\in D$. If $\phi_1,\phi_2\in\operatorname{Aut}(D)$ satisfy
$$
\phi_1(z_0)=\phi_2(z_0)
$$
and
$$
\phi_1'(z_0)=\phi_2'(z_0),
$$
prove that
$$
\phi_1\equiv \phi_2.
$$

#proof
Let
$$
\psi=\phi_2^{-1}\circ \phi_1.
$$
Then $\psi\in\operatorname{Aut}(D)$,
$$
\psi(z_0)=z_0,
$$
and
$$
\psi'(z_0)=1.
$$
It is enough to prove $\psi\equiv \operatorname{id}$.

If $D=\mathbb C$, then every automorphism has the form
$$
\psi(z)=az+b,
\qquad a\neq 0.
$$
The conditions $\psi(z_0)=z_0$ and $\psi'(z_0)=1$ give $a=1$ and $b=0$, so $\psi$ is the identity.

If $D\neq\mathbb C$, then by the Riemann mapping theorem there is a conformal map
$$
T:D\to D(0,1).
$$
The map
$$
\Psi=T\circ \psi\circ T^{-1}
$$
is an automorphism of the unit disk. It fixes $T(z_0)$ and has derivative of modulus $1$ there. Conjugating once more by a disk automorphism that sends $T(z_0)$ to $0$, we get a disk automorphism fixing $0$ with derivative $1$ at $0$.

By the Schwarz lemma, such a map must be the identity. Therefore $\Psi$ is the identity, hence $\psi$ is the identity, and so
$$
\phi_1\equiv \phi_2.
$$
::

::ProblemBlock{number=8}
#problem
Let $f(z)$ be holomorphic in
$$
D(0,1)\setminus\{0\}
$$
such that
$$
\int_{D(0,1)\setminus\{0\}} |f(z)|\,dA(z)<\infty.
$$
Prove that $z=0$ is either removable or a simple pole.

#proof
The singularity at $0$ is isolated. If it is removable, there is nothing to prove. Otherwise, suppose first that $0$ is a pole of order $m$. Then near $0$,
$$
|f(z)|\sim C|z|^{-m}
$$
for some $C>0$. In polar coordinates,
$$
\int_{|z|<\varepsilon}|f(z)|\,dA(z)
$$
has the same convergence behavior as
$$
\int_0^\varepsilon r^{-m}r\,dr
=\int_0^\varepsilon r^{1-m}\,dr.
$$
This integral is finite exactly when $m<2$. Since $m$ is a positive integer, we must have $m=1$. Thus a pole can only be simple.

It remains to rule out an essential singularity. A standard form of the $L^1$ removable-singularity theorem says: if a holomorphic function on a punctured disk is locally integrable and has an isolated singularity at the puncture, then the singularity is either removable or a pole of order strictly less than $2$. Applying this theorem with $p=1$ gives precisely that the singularity is removable or a simple pole.

Therefore $z=0$ is either removable or a simple pole.
::

::ProblemBlock{number=9}
#problem
Let
$$
f_n:D(0,1)\to D(0,1)\setminus\{0\}
$$
be a sequence of holomorphic functions with
$$
\sum_{n=1}^{\infty}|f_n(0)|^2<\infty.
$$
Prove that
$$
\sum_{n=1}^{\infty}|f_n(z)|^3
$$
converges uniformly on $D(0,1/5)$.

#proof
Since $0<|f_n(z)|<1$, the function
$$
u_n(z)=-\log |f_n(z)|
$$
is positive and harmonic on $D(0,1)$.

By Harnack's inequality, for $|z|\leq r<1$,
$$
u_n(z)\geq \frac{1-r}{1+r}u_n(0).
$$
Take $r=1/5$. Then
$$
\frac{1-r}{1+r}
=\frac{4/5}{6/5}
=\frac23.
$$
Hence, for $|z|\leq 1/5$,
$$
-\log |f_n(z)|
\geq \frac23\bigl(-\log |f_n(0)|\bigr).
$$
Equivalently,
$$
|f_n(z)|\leq |f_n(0)|^{2/3}.
$$
Raising both sides to the third power,
$$
|f_n(z)|^3\leq |f_n(0)|^2.
$$
Since
$$
\sum_{n=1}^{\infty}|f_n(0)|^2<\infty,
$$
the Weierstrass $M$-test shows that
$$
\sum_{n=1}^{\infty}|f_n(z)|^3
$$
converges uniformly on $D(0,1/5)$.
::
