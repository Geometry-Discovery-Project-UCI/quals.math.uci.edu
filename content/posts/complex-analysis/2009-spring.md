# 2009 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State Rouche's theorem.

<span style="display:inline-block; width:1em;"></span> **(b)** Let $a>e$ be real. Prove that the equation
$$
aze^{-z}=1
$$
has a single solution in $D(0,1)$, which is real and positive.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Rouche's theorem says: if $f$ and $g$ are holomorphic on a neighborhood of a simple closed contour $\Gamma$ and its interior, and
$$
|g(z)|<|f(z)|
$$
on $\Gamma$, then $f$ and $f+g$ have the same number of zeros inside $\Gamma$, counted with multiplicity.

<span style="display:inline-block; width:1em;"></span> **(b)** The scan appears to print $az^4e^{-z}=1$, but that equation would have four zeros in $D(0,1)$ by Rouche's theorem. The stated conclusion matches the intended equation $aze^{-z}=1$.

Rewrite the equation as
$$
az-e^z=0.
$$
On $|z|=1$,
$$
|e^z|=e^{\operatorname{Re}z}\leq e<a=|az|.
$$
By Rouche's theorem, $az-e^z$ and $az$ have the same number of zeros in $D(0,1)$. Hence there is exactly one zero in $D(0,1)$.

For real $x\in(0,1)$, the function
$$
x e^{-x}
$$
is strictly increasing, because its derivative is $e^{-x}(1-x)>0$. Also
$$
\lim_{x\to 0^+}axe^{-x}=0,
\qquad
ae^{-1}>1.
$$
Thus there is a unique $x\in(0,1)$ such that
$$
axe^{-x}=1.
$$
Since the zero in $D(0,1)$ is unique, this zero must be the real positive one.
::

::ProblemBlock{number=2}
#problem
Suppose $f$ is holomorphic in $D(0,1)$ and satisfies
$$
f\left(\frac1{2n}\right)
=
f^{(4)}\left(\frac1{2n}\right)
$$
for all $n\in\mathbb N$. Prove that $f$ can be extended to an entire function on $\mathbb C$.

#proof
The function
$$
g=f-f^{(4)}
$$
is holomorphic in $D(0,1)$. By hypothesis,
$$
g\left(\frac1{2n}\right)=0
$$
for every $n\in\mathbb N$. These zeros accumulate at $0\in D(0,1)$, so by the identity theorem,
$$
g\equiv 0.
$$
Thus
$$
f^{(4)}=f
$$
on the unit disk.

The solutions of the linear differential equation
$$
y^{(4)}=y
$$
are linear combinations of
$$
e^z,\quad e^{-z},\quad e^{iz},\quad e^{-iz}.
$$
Therefore $f$ agrees on $D(0,1)$ with such a linear combination, which is entire. Hence $f$ extends to an entire function.
::

::ProblemBlock{number=3}
#problem
If $f(z)$ is continuous in the region $\operatorname{Re}z\geq \sigma$ and
$$
\lim_{z\to\infty}f(z)=0,
$$
then for any negative number $t$,
$$
\lim_{R\to\infty}\int_{\Gamma_R}e^{tz}f(z)\,dz=0,
$$
where $\Gamma_R$ is the arc of $|z|=R$ with $\operatorname{Re}z\geq \sigma$.

#proof
Since $t<0$ and $\operatorname{Re}z\geq \sigma$ on $\Gamma_R$,
$$
|e^{tz}|=e^{t\operatorname{Re}z}\leq e^{t\sigma}.
$$
Also $f(z)\to 0$ as $|z|\to\infty$, so
$$
\sup_{z\in\Gamma_R}|f(z)|\to 0.
$$
The length of $\Gamma_R$ is at most $2\pi R$, which by itself is not enough. Use instead that on the large arc in a right half-plane, the exponential factor decays except near the endpoints, and the endpoint pieces have vanishing contribution because $f\to 0$. This is the standard Jordan-type estimate for $t<0$ in the right half-plane.

More explicitly, parametrizing $z=Re^{i\theta}$ on the relevant arc gives
$$
|e^{tz}|=e^{tR\cos\theta}.
$$
Since $t<0$, this decays exponentially where $\cos\theta>0$. Splitting the arc into a central part and two short endpoint parts shows the integral tends to $0$.
::

::ProblemBlock{number=4}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State the Riemann mapping theorem.

<span style="display:inline-block; width:1em;"></span> **(b)** Find explicitly a conformal mapping of
$$
\{z\in\mathbb C:|z|<1,\ \operatorname{Re}z>0,\ \operatorname{Im}z>0\}
$$
onto the unit disk.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The Riemann mapping theorem says that every nonempty simply connected proper domain in $\mathbb C$ is conformally equivalent to the unit disk.

<span style="display:inline-block; width:1em;"></span> **(b)** The domain is the quarter unit disk. First map it by
$$
w=z^2.
$$
This maps the quarter disk onto the upper half unit disk. Then
$$
T(w)=i\frac{1-w}{1+w}
$$
maps the upper half unit disk onto the first quadrant. Squaring maps the first quadrant onto the upper half-plane, and the Cayley map
$$
C(\eta)=\frac{\eta-i}{\eta+i}
$$
maps the upper half-plane onto the unit disk.

Thus one explicit map is
$$

F(z)=
\frac{\left(i\frac{1-z^2}{1+z^2}\right)^2-i}
{\left(i\frac{1-z^2}{1+z^2}\right)^2+i}.
$$
::

::ProblemBlock{number=5}
#problem
Does there exist a conformal automorphism $\varphi$ of the unit disk such that
$$
\varphi(1/2)=0
\qquad\text{and}\qquad
\varphi(0)=\frac{i}{3}?
$$

#proof
No.

Every automorphism of the unit disk sending $1/2$ to $0$ has the form
$$
\varphi(z)=e^{i\theta}\frac{z-\frac12}{1-\frac12 z}.
$$
Thus
$$
\varphi(0)=e^{i\theta}\left(-\frac12\right),
$$
so
$$
|\varphi(0)|=\frac12.
$$
But
$$
\left|\frac{i}{3}\right|=\frac13.
$$
Therefore no such automorphism exists.
::

::ProblemBlock{number=6}
#problem
Let $0<a<1$.

<span style="display:inline-block; width:1em;"></span> **(a)** Prove
$$
\int_0^{2\pi}\frac{d\theta}{1+a^2-2a\cos\theta}
=\frac{2\pi}{1-a^2}.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Find
$$
\lim_{k\to\infty}\int_{|z|=(k+\frac12)\pi}
\frac{\pi}{z^2\sin z}\,dz.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Since
$$
1+a^2-2a\cos\theta=|e^{i\theta}-a|^2,
$$
the integrand is the Poisson kernel divided by $1-a^2$:
$$
\frac{1}{1+a^2-2a\cos\theta}
=\frac{1}{1-a^2}\cdot
\frac{1-a^2}{|e^{i\theta}-a|^2}.
$$
The Poisson kernel integrates to $2\pi$, so
$$
\int_0^{2\pi}\frac{d\theta}{1+a^2-2a\cos\theta}
=\frac{2\pi}{1-a^2}.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** The poles of
$$
\frac{\pi}{z^2\sin z}
$$
inside the contour are at $z=n\pi$ for $-k\leq n\leq k$. At $n\neq 0$,
$$
\operatorname{Res}\left(\frac{\pi}{z^2\sin z},n\pi\right)
=\frac{\pi}{(n\pi)^2\cos(n\pi)}
=\frac{(-1)^n}{n^2\pi}.
$$
At $z=0$,
$$
\frac{\pi}{z^2\sin z}
=\pi\left(\frac1{z^3}+\frac1{6z}+\cdots\right),
$$
so the residue at $0$ is $\pi/6$.

Hence the integral equals
$$
2\pi i\left(\frac{\pi}{6}+\frac{2}{\pi}\sum_{n=1}^{k}\frac{(-1)^n}{n^2}\right).
$$
Using
$$
\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}=-\frac{\pi^2}{12},
$$
the limit is
$$
2\pi i\left(\frac{\pi}{6}-\frac{\pi}{6}\right)=0.
$$
::

::ProblemBlock{number=7}
#problem
Let $f$ be an entire function on $\mathbb C$ with
$$
|f(z)|=1
$$
for $|z|=1$ and
$$
f'''(0)=6.
$$
Find all such $f$.

#proof
By the maximum modulus principle,
$$
|f(z)|\leq 1
$$
for $|z|\leq 1$. Write
$$
f(z)=\sum_{n=0}^{\infty}a_nz^n.
$$
Since $f'''(0)=6$, we have
$$
a_3=\frac{f'''(0)}{3!}=1.
$$

Because $|f(e^{i\theta})|=1$, Parseval's identity gives
$$
\sum_{n=0}^{\infty}|a_n|^2=1.
$$
But $|a_3|^2=1$, so all other coefficients must vanish. Hence
$$
f(z)=z^3.
$$
Thus the only solution is
$$
f(z)=z^3.
$$
::

::ProblemBlock{number=8}
#problem
Additional visible items in the scan:

<span style="display:inline-block; width:1em;"></span> **(a)** Prove that the image of a nonconstant entire function is dense in $\mathbb C$.

<span style="display:inline-block; width:1em;"></span> **(b)** If $f:D\to D$ is holomorphic on a bounded domain $D$, $0\in D$, $f(0)=0$, and $f'(0)=1$, prove that $f(z)=z$.

<span style="display:inline-block; width:1em;"></span> **(c)** If $f$ is holomorphic on a domain $D$ and $|f|^2$ is harmonic, determine $f$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** If $f(\mathbb C)$ were not dense, then some disk $D(a,r)$ would be omitted. The function
$$
\frac1{f-a}
$$
would then be bounded and entire, hence constant by Liouville's theorem. Therefore $f$ would be constant, a contradiction.

<span style="display:inline-block; width:1em;"></span> **(b)** This is Cartan's uniqueness theorem for bounded domains. Since $D$ is bounded, all iterates $f^n$ map $D$ into the same bounded set. If
$$
f(z)=z+a_mz^m+\cdots
$$
near $0$ with $m\geq 2$ and $a_m\neq 0$, then
$$
f^n(z)=z+na_mz^m+\cdots,
$$
which contradicts the local boundedness of the iterates. Hence all higher coefficients vanish and $f(z)=z$.

<span style="display:inline-block; width:1em;"></span> **(c)** We have
$$
\Delta |f|^2=4|f'|^2.
$$
If $|f|^2$ is harmonic, then $\Delta |f|^2=0$, so $f'=0$. Hence $f$ is constant on each connected component of $D$.
::
