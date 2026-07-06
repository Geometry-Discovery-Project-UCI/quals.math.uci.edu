# 2015 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem
Prove that for each $n\in\mathbb N$, every solution of
$$
(1-iz)^n+z^n=0
$$
must satisfy
$$
\operatorname{Im} z=-\frac12.
$$

#proof
Let $z$ be a solution. Since $z=0$ does not satisfy the equation, $z\neq 0$. The equation gives
$$
(1-iz)^n=-z^n,
$$
so
$$
\left|\frac{1-iz}{z}\right|^n=1.
$$
Hence
$$
|1-iz|=|z|.
$$
Write $z=x+iy$. Then
$$
1-iz=1-i(x+iy)=1+y-ix.
$$
Therefore
$$
|1-iz|^2=(1+y)^2+x^2,
\qquad
|z|^2=x^2+y^2.
$$
Since the moduli are equal,
$$
(1+y)^2+x^2=x^2+y^2.
$$
Thus
$$
1+2y=0,
$$
and so
$$
\operatorname{Im}z=y=-\frac12.
$$
::

::ProblemBlock{number=2}
#problem
Classify all singularities and find the associated residues for
$$
f(z)=\frac{e^{-1/z}}{(z-1)(z+1)^2}.
$$

#proof
The possible singularities are $z=0$, $z=1$, and $z=-1$.

At $z=0$, the factor $e^{-1/z}$ has an essential singularity, while the denominator is nonzero. Hence $z=0$ is an essential singularity.

At $z=1$, the denominator has a simple zero and $e^{-1/z}$ is analytic and nonzero, so $z=1$ is a simple pole. Its residue is
$$
\operatorname{Res}(f,1)
=\lim_{z\to 1}(z-1)f(z)
=\frac{e^{-1}}{(1+1)^2}
=\frac{e^{-1}}{4}.
$$

At $z=-1$, the denominator has a double zero, so $z=-1$ is a double pole. Write
$$
f(z)=\frac{h(z)}{(z+1)^2},
\qquad
h(z)=\frac{e^{-1/z}}{z-1}.
$$
For a double pole, the residue is $h'(-1)$. Since
$$
h'(z)=\frac{e^{-1/z}}{z^2(z-1)}-\frac{e^{-1/z}}{(z-1)^2},
$$
we get
$$
h'(-1)=\frac{e}{1\cdot(-2)}-\frac{e}{4}
=-\frac{3e}{4}.
$$
Thus
$$
\operatorname{Res}(f,-1)=-\frac{3e}{4}.
$$

It remains to find the residue at the essential singularity $0$. Since
$$
f(z)=O(z^{-3})
\qquad (z\to\infty),
$$
there is no $1/z$ term in the Laurent expansion at infinity, so the residue at infinity is $0$. By the residue theorem on the Riemann sphere,
$$
\operatorname{Res}(f,0)+\operatorname{Res}(f,1)+\operatorname{Res}(f,-1)=0.
$$
Therefore
$$
\operatorname{Res}(f,0)
=-\frac{e^{-1}}4+\frac{3e}{4}
=\frac{3e-e^{-1}}4.
$$
::

::ProblemBlock{number=3}
#problem
Expand in a series of powers of $w$ each branch of $z=z(w)$ defined by
$$
w=2z+z^2,
$$
where one branch satisfies $z(0)=0$ and the other satisfies $z(0)=-2$.

#proof
The equation can be rewritten as
$$
z^2+2z-w=0.
$$
Equivalently,
$$
(z+1)^2=1+w.
$$
Thus
$$
z=-1\pm (1+w)^{1/2}.
$$

Using the binomial expansion
$$
(1+w)^{1/2}
=1+\frac12w-\frac18w^2+\frac1{16}w^3-\frac5{128}w^4+\cdots,
$$
we obtain the branch with $z(0)=0$:
$$
z_0(w)=-1+(1+w)^{1/2}
=\frac12w-\frac18w^2+\frac1{16}w^3-\frac5{128}w^4+\cdots.
$$

The branch with $z(0)=-2$ is
$$
z_{-2}(w)=-1-(1+w)^{1/2},
$$
so
$$
z_{-2}(w)
=-2-\frac12w+\frac18w^2-\frac1{16}w^3+\frac5{128}w^4-\cdots.
$$

In compact form,
$$
z_0(w)=\sum_{k=1}^{\infty}\binom{1/2}{k}w^k,
$$
and
$$
z_{-2}(w)=-2-\sum_{k=1}^{\infty}\binom{1/2}{k}w^k,
$$
valid for $|w|<1$.
::

::ProblemBlock{number=4}
#problem
Evaluate
$$
\int_{-\infty}^{\infty}\frac{x\sin \pi x}{x^2+2x+5}\,dx.
$$

#proof
Consider
$$
I=\int_{-\infty}^{\infty}\frac{x e^{i\pi x}}{x^2+2x+5}\,dx.
$$
The desired integral is $\operatorname{Im} I$.

Factor the denominator:
$$
x^2+2x+5=(x+1)^2+4=(x+1-2i)(x+1+2i).
$$
Close the contour in the upper half-plane. Since $e^{i\pi z}$ decays there, Jordan's lemma applies. The only pole in the upper half-plane is
$$
z_0=-1+2i.
$$
Hence
$$
I=2\pi i\operatorname{Res}\left(\frac{z e^{i\pi z}}{z^2+2z+5},z_0\right).
$$
The residue is
$$
\frac{z_0e^{i\pi z_0}}{z_0+1+2i}.
$$
Now
$$
e^{i\pi(-1+2i)}=e^{-i\pi}e^{-2\pi}=-e^{-2\pi},
$$
and
$$
z_0+1+2i=4i.
$$
Therefore
$$
I=2\pi i\cdot \frac{(-1+2i)(-e^{-2\pi})}{4i}
=\frac{\pi}{2}(1-2i)e^{-2\pi}.
$$
Taking imaginary parts gives
$$
\displaystyle
\int_{-\infty}^{\infty}\frac{x\sin \pi x}{x^2+2x+5}\,dx
=-\pi e^{-2\pi}.
$$
::

::ProblemBlock{number=5}
#problem
Suppose $f:D(0,1)\to D(0,1)$ is holomorphic and
$$
f(0)=\frac15.
$$
Give an upper bound for $|f'(0)|$, and characterize the functions for which equality holds.

#proof
By the Schwarz-Pick lemma,
$$
|f'(0)|\leq \frac{1-|f(0)|^2}{1-|0|^2}.
$$
Since $f(0)=1/5$,
$$
|f'(0)|\leq 1-\frac1{25}=\frac{24}{25}.
$$

Equality in Schwarz-Pick occurs exactly when $f$ is an automorphism of the unit disk. The disk automorphisms mapping $0$ to $1/5$ are
$$
f(z)=\frac{\frac15+e^{i\theta}z}{1+\frac15 e^{i\theta}z},
\qquad \theta\in\mathbb R.
$$
For these functions,
$$
|f'(0)|=1-\left|\frac15\right|^2=\frac{24}{25}.
$$
Thus the sharp upper bound is
$$
\frac{24}{25},
$$
with equality exactly for the automorphisms above.
::

::ProblemBlock{number=6}
#problem
Let $f(z)$ be meromorphic in a neighborhood of the closed unit disk $|z|\leq 1$, and suppose it has only one singular point $z_0$ on the circle $|z|=1$, which is a simple pole. Show that
$$
\frac{f^{(n)}(0)}{n!}=\frac{A}{z_0^n}(1+\phi_n),
$$
where $\lim_{n\to\infty}\phi_n=0$.

#proof
Let the residue of $f$ at the simple pole $z_0$ be $c$. Then near $z_0$,
$$
f(z)=\frac{c}{z-z_0}+g(z),
$$
where $g$ is holomorphic in a neighborhood of the closed unit disk, and in fact holomorphic in some larger disk $|z|<\rho$ with $\rho>1$ after removing the pole.

For $|z|<1$,
$$
\frac{c}{z-z_0}
=-\frac{c}{z_0}\frac{1}{1-z/z_0}
=-\frac{c}{z_0}\sum_{n=0}^{\infty}\left(\frac{z}{z_0}\right)^n.
$$
Thus the coefficient of $z^n$ coming from the pole is
$$
-\frac{c}{z_0^{n+1}}.
$$

Write the Taylor expansion of $g$ at $0$ as
$$
g(z)=\sum_{n=0}^{\infty}b_nz^n.
$$
Since $g$ is holomorphic on $|z|<\rho$ for some $\rho>1$, Cauchy's estimates give
$$
b_n=O(\rho^{-n}).
$$
Therefore
$$
\frac{f^{(n)}(0)}{n!}
=-\frac{c}{z_0^{n+1}}+b_n
=\frac{A}{z_0^n}\left(1+\phi_n\right),
$$
where
$$
A=-\frac{c}{z_0}.
$$
Since $|z_0|=1$ and $b_n=O(\rho^{-n})$ with $\rho>1$,
$$
\phi_n=\frac{b_nz_0^n}{A}\to 0.
$$
This proves the desired asymptotic formula.
::

::ProblemBlock{number=7}
#problem
True or false: there exists a bounded harmonic function on the upper half-plane $\mathbb H$ that cannot be extended to any larger domain. Explain your answer.

#proof
The statement is true.

Choose a measurable set $E\subset \mathbb R$ such that both $E$ and its complement have positive measure in every nonempty interval. Let
$$
u(x+iy)=\frac{1}{\pi}\int_{\mathbb R}\frac{y}{(x-t)^2+y^2}\chi_E(t)\,dt
$$
be the Poisson integral of $\chi_E$. Then $u$ is harmonic on the upper half-plane and satisfies
$$
0\leq u\leq 1,
$$
so it is bounded.

The nontangential boundary values of $u$ are $\chi_E$ almost everywhere. Suppose $u$ extended harmonically across some open interval $I\subset \mathbb R$. Then the extended harmonic function would be continuous in a neighborhood of $I$, so its boundary values on $I$ would agree almost everywhere with a continuous function.

But $\chi_E$ is not equal almost everywhere to any continuous function on any interval, because both $E$ and $\mathbb R\setminus E$ have positive measure in every subinterval. This contradiction shows that $u$ cannot be extended harmonically across any boundary interval.

Therefore $u$ cannot be extended to any larger domain containing the upper half-plane.
::

::ProblemBlock{number=8}
#problem
Suppose $f$ is analytic in an annulus
$$
r<|z|<R,
$$
and there exists a sequence of polynomials $p_n$ converging to $f$ uniformly on compact subsets of the annulus. Show that $f$ is analytic on the disk $|z|<R$.

#proof
Since $f$ is analytic in the annulus, it has a Laurent expansion
$$
f(z)=\sum_{k=-\infty}^{\infty}a_kz^k
$$
valid for $r<|z|<R$.

We show that all negative Laurent coefficients vanish. Fix $\rho$ with
$$
r<\rho<R.
$$
For $m<0$, the Laurent coefficient is
$$
a_m=\frac{1}{2\pi i}\int_{|\zeta|=\rho}\frac{f(\zeta)}{\zeta^{m+1}}\,d\zeta.
$$
Because $p_n\to f$ uniformly on the circle $|\zeta|=\rho$,
$$
a_m=\lim_{n\to\infty}\frac{1}{2\pi i}\int_{|\zeta|=\rho}\frac{p_n(\zeta)}{\zeta^{m+1}}\,d\zeta.
$$
But each $p_n$ is a polynomial, so it has no negative powers in its Laurent expansion about $0$. Therefore
$$
\frac{1}{2\pi i}\int_{|\zeta|=\rho}\frac{p_n(\zeta)}{\zeta^{m+1}}\,d\zeta=0
$$
for every $m<0$. Hence $a_m=0$ for all $m<0$.

Thus the Laurent expansion of $f$ has no principal part:
$$
f(z)=\sum_{k=0}^{\infty}a_kz^k.
$$
This power series converges for $|z|<R$, so it defines an analytic extension of $f$ to the whole disk $|z|<R$.
::
