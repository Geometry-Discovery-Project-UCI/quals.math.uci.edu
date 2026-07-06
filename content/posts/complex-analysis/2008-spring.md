# 2008 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem
Find explicitly a conformal mapping of
$$
\{z\in\mathbb C: |z|>1,\ \operatorname{Re}z>0,\ \operatorname{Im}z>0\}
$$
onto the unit disk.

#proof
The map
$$
w=\frac{i}{z}
$$
sends the exterior first-quadrant domain onto the quarter unit disk
$$
\{w: |w|<1,\ \operatorname{Re}w>0,\ \operatorname{Im}w>0\}.
$$
Then $w^2$ maps this quarter disk onto the upper half unit disk. The map
$$
T(\zeta)=i\frac{1-\zeta}{1+\zeta}
$$
maps the upper half unit disk onto the first quadrant. Squaring maps the first quadrant onto the upper half-plane, and
$$
C(\eta)=\frac{\eta-i}{\eta+i}
$$
maps the upper half-plane onto the unit disk.

Thus one explicit conformal map is
$$

F(z)=
\frac{\left(i\frac{1-(i/z)^2}{1+(i/z)^2}\right)^2-i}
{\left(i\frac{1-(i/z)^2}{1+(i/z)^2}\right)^2+i}.
$$
::

::ProblemBlock{number=2}
#problem
Let $f$ be entire and suppose
$$
|f(z)|\leq |\cos z|
$$
for all $z\in\mathbb C$. Prove that
$$
f(z)=c\cos z
$$
for some constant $c$.

#proof
At every zero of $\cos z$, the inequality forces $f$ to vanish at least to the same order. Hence
$$
g(z)=\frac{f(z)}{\cos z}
$$
has removable singularities at the zeros of $\cos z$ and extends to an entire function.

Away from the zeros of $\cos z$,
$$
|g(z)|\leq 1.
$$
By removability, this bound holds everywhere. Therefore $g$ is bounded and entire, so by Liouville's theorem $g$ is constant. Hence
$$
f(z)=c\cos z.
$$
::

::ProblemBlock{number=3}
#problem
Show that there is a holomorphic function on
$$
\Omega=\{z\in\mathbb C: |z|>4\}
$$
whose derivative is
$$
\frac{z}{(z-1)(z-2)(z-3)}.
$$
Is there a holomorphic function on $\Omega$ whose derivative is
$$
\frac{z^2}{(z-1)(z-2)(z-3)}?
$$

#proof
On the exterior domain $\Omega$, a holomorphic function has a primitive exactly when its integral around a large circle $|z|=R>4$ is $0$.

For
$$
F(z)=\frac{z}{(z-1)(z-2)(z-3)},
$$
we have
$$
F(z)=O(z^{-2})
\qquad (z\to\infty).
$$
Thus there is no $1/z$ term in the Laurent expansion at infinity, so
$$
\int_{|z|=R}F(z)\,dz=0.
$$
Therefore $F$ has a primitive on $\Omega$.

For
$$
G(z)=\frac{z^2}{(z-1)(z-2)(z-3)},
$$
we have
$$
G(z)=\frac1z+O(z^{-2})
\qquad (z\to\infty).
$$
Hence
$$
\int_{|z|=R}G(z)\,dz=2\pi i\neq 0.
$$
So $G$ has no primitive on $\Omega$.
::

::ProblemBlock{number=4}
#problem
Let $D$ be the unit disk. Does there exist a holomorphic function $f:D\to D$ such that
$$
f(1/2)=\frac34
\qquad\text{and}\qquad
f'(1/2)=\frac23?
$$

#proof
No.

By the Schwarz-Pick derivative estimate,
$$
|f'(a)|\leq \frac{1-|f(a)|^2}{1-|a|^2}.
$$
Taking $a=1/2$ and $f(a)=3/4$, we get
$$
|f'(1/2)|
\leq
\frac{1-\frac{9}{16}}{1-\frac14}
=\frac{\frac7{16}}{\frac34}
=\frac7{12}.
$$
But
$$
\frac23>\frac7{12}.
$$
Thus no such holomorphic map exists.
::

::ProblemBlock{number=5}
#problem
Evaluate
$$
\int_{-\infty}^{+\infty}\frac{x^2\sin(\pi x)}{x^3-1}\,dx.
$$

#proof
Although the denominator vanishes at $x=1$, the real integrand has a removable singularity there because $\sin(\pi x)$ also vanishes.

Consider
$$
F(z)=\frac{z^2e^{i\pi z}}{z^3-1}
$$
and close the contour in the upper half-plane, indenting above the pole at $z=1$. The upper half-plane pole is
$$
\omega=e^{2\pi i/3}.
$$
The residue at $\omega$ is
$$
\operatorname{Res}(F,\omega)=\frac{e^{i\pi\omega}}{3}.
$$
The indented pole at $1$ contributes one half-residue, and
$$
\operatorname{Res}(F,1)=\frac{e^{i\pi}}3=-\frac13.
$$
Thus the principal value of the complex exponential integral is
$$
2\pi i\frac{e^{i\pi\omega}}3+i\pi\left(-\frac13\right).
$$
Since
$$
\omega=-\frac12+\frac{\sqrt3}{2}i,
\qquad
e^{i\pi\omega}=-i e^{-\pi\sqrt3/2},
$$
the first term is real. Therefore the imaginary part is
$$
-\frac{\pi}{3}.
$$
Hence
$$
\displaystyle
\int_{-\infty}^{+\infty}\frac{x^2\sin(\pi x)}{x^3-1}\,dx
=-\frac{\pi}{3}.
$$
::

::ProblemBlock{number=6}
#problem
Prove that
$$
\prod_{n=1}^{\infty}\left(\frac{z^n}{n!}+\exp\left(\frac{z}{2^n}\right)\right)
$$
converges uniformly on compact sets to an entire function.

#proof
Write each factor as
$$
1+u_n(z),
$$
where
$$
u_n(z)=\frac{z^n}{n!}+\exp\left(\frac{z}{2^n}\right)-1.
$$
On a compact set $|z|\leq R$,
$$
\left|\frac{z^n}{n!}\right|\leq \frac{R^n}{n!},
$$
and
$$
\left|\exp\left(\frac{z}{2^n}\right)-1\right|\leq C_R\frac{R}{2^n}.
$$
Both
$$
\sum_{n=1}^{\infty}\frac{R^n}{n!}
\qquad\text{and}\qquad
\sum_{n=1}^{\infty}\frac{1}{2^n}
$$
converge. Hence
$$
\sum_{n=1}^{\infty}\sup_{|z|\leq R}|u_n(z)|
$$
converges.

Therefore the infinite product $\prod(1+u_n)$ converges uniformly on compact sets. Its limit is holomorphic on every compact disk, hence entire.
::

::ProblemBlock{number=7}
#problem
Let $F$ be a family of holomorphic functions on $D(0,1)$ such that every $f\in F$ satisfies
$$
|f(0)|^2+\int_{D(0,1)}|f'(z)|^2\,dA(z)\leq 1.
$$
Prove that $F$ is a normal family on $D(0,1)$.

#proof
Write
$$
f(z)=\sum_{n=0}^{\infty}a_nz^n.
$$
Then
$$
f'(z)=\sum_{n=1}^{\infty}na_nz^{n-1},
$$
and orthogonality gives
$$
\int_D |f'(z)|^2\,dA(z)
=\pi\sum_{n=1}^{\infty}n|a_n|^2.
$$
Also $a_0=f(0)$, so the hypothesis gives uniform bounds on $|a_0|$ and on
$$
\sum_{n=1}^{\infty}n|a_n|^2.
$$

For $|z|\leq r<1$,
$$
|f(z)|
\leq |a_0|+\sum_{n=1}^{\infty}|a_n|r^n.
$$
By Cauchy-Schwarz,
$$
\sum_{n=1}^{\infty}|a_n|r^n
\leq
\left(\sum_{n=1}^{\infty}n|a_n|^2\right)^{1/2}
\left(\sum_{n=1}^{\infty}\frac{r^{2n}}{n}\right)^{1/2}.
$$
The second sum is finite for $r<1$, and the first is uniformly bounded. Thus $F$ is locally uniformly bounded.

By Montel's theorem, $F$ is a normal family.
::

::ProblemBlock{number=8}
#problem
Let $f$ be holomorphic on the upper half-plane $U$ and continuous on $U\cup[0,1]$. Assume that
$$
f(x)=x^2-x+1,
\qquad x\in(0,1).
$$
Find all such functions $f$.

#proof
Let
$$
p(z)=z^2-z+1
$$
and set
$$
g=f-p.
$$
Then $g$ is holomorphic on $U$, continuous on $U\cup[0,1]$, and
$$
g(x)=0
$$
for $x\in(0,1)$.

By the Schwarz reflection principle, $g$ extends holomorphically across the interval $(0,1)$ by
$$
g(z)=\overline{g(\overline z)}
$$
in the reflected lower half-neighborhood. The extended function vanishes on the interval, which is now a set with accumulation points inside the extended domain. By the identity theorem, $g\equiv 0$.

Thus
$$
f(z)=z^2-z+1.
$$
::

::ProblemBlock{number=9}
#problem
Show that there is no holomorphic function $f$ on
$$
\{z\in\mathbb C:1<|z|<3\}
$$
satisfying
$$
\left|\frac{f(z)^2}{z}-1\right|<1.
$$

#proof
The inequality implies
$$
\frac{f(z)^2}{z}
$$
takes values in the disk $D(1,1)$, which does not contain $0$. Hence $f$ has no zeros in the annulus.

Fix $r$ with $1<r<3$ and let $|z|=r$. Since $f$ has no zeros, the winding number of $f(re^{it})$ about $0$ is an integer $m$. Therefore the winding number of
$$
\frac{f(z)^2}{z}
$$
around $0$ is
$$
2m-1.
$$
This is an odd integer.

But $\frac{f(z)^2}{z}$ lies entirely in $D(1,1)$, a disk that does not wind around $0$. Hence its winding number about $0$ must be $0$.

This contradiction proves that no such holomorphic function exists.
::
