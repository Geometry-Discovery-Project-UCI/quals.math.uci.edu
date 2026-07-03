# 2015 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Prove that
$$
\sum_{n\ge 2}\frac{1}{n(\log n)^2}<+\infty.
$$

#proof
We use the integral test. Define
$$
f(x)=\frac{1}{x(\log x)^2},\qquad x\ge 2.
$$
The function $f$ is positive and decreasing for $x\ge 2$. Indeed,
$$
f'(x)=-\frac{\log x+2}{x^2(\log x)^3}<0
$$
for $x\ge 2$.

Therefore the convergence of the series follows from the convergence of the improper integral
$$
\int_2^\infty \frac{dx}{x(\log x)^2}.
$$
Using the substitution $u=\log x$, $du=dx/x$, we get
$$
\int_2^R \frac{dx}{x(\log x)^2}
=
\int_{\log 2}^{\log R}\frac{du}{u^2}
=
\left[-\frac{1}{u}\right]_{\log 2}^{\log R}
=
\frac{1}{\log 2}-\frac{1}{\log R}.
$$
Letting $R\to\infty$, we obtain
$$
\int_2^\infty \frac{dx}{x(\log x)^2}
=
\frac{1}{\log 2}<\infty.
$$
Hence, by the integral test,
$$
\sum_{n\ge 2}\frac{1}{n(\log n)^2}<+\infty.
$$
::

::ProblemBlock{number=2}
#problem
Compute
$$
\lim_{n\to+\infty}\int_0^1 \sin(nx)e^{-x^2}\,dx.
$$
Justify your answer.

#proof
Let
$$
I_n=\int_0^1 \sin(nx)e^{-x^2}\,dx.
$$
We show that $I_n\to 0$.

Set $g(x)=e^{-x^2}$. Then $g\in C^1[0,1]$. Integrating by parts with
$$
dv=\sin(nx)\,dx,
\qquad
v=-\frac{\cos(nx)}{n},
$$
we get
$$
I_n
=
\left[-\frac{g(x)\cos(nx)}{n}\right]_0^1
+
\frac{1}{n}\int_0^1 g'(x)\cos(nx)\,dx.
$$
Therefore
$$
|I_n|
\le
\frac{|g(1)|+|g(0)|}{n}
+
\frac{1}{n}\int_0^1 |g'(x)|\,dx.
$$
Since $g(0)=1$, $g(1)=e^{-1}$, and $g'(x)=-2xe^{-x^2}$ is integrable on $[0,1]$, the right-hand side is bounded by $C/n$ for some constant $C$ independent of $n$. Hence
$$
\lim_{n\to+\infty} I_n=0.
$$
Thus
$$
\boxed{\lim_{n\to+\infty}\int_0^1 \sin(nx)e^{-x^2}\,dx=0.}
$$
::

::ProblemBlock{number=3}
#problem
Assume that $f\in C^1(\mathbb{R})$ and
$$
\lim_{|x|\to+\infty}\frac{f(x)}{|x|}=+\infty.
$$
Show that for any $p\in\mathbb{R}$, there exists $y\in\mathbb{R}$ such that
$$
f'(y)=p,
$$
that is, $f':\mathbb{R}\to\mathbb{R}$ is onto.

Hint: Consider $g(x)=f(x)-px$ and $\lim_{x\to\pm\infty}g(x)$.

#proof
Fix an arbitrary $p\in\mathbb{R}$ and define
$$
g(x)=f(x)-px.
$$
Then $g\in C^1(\mathbb{R})$ and
$$
g'(x)=f'(x)-p.
$$
We claim that
$$
\lim_{x\to\pm\infty} g(x)=+\infty.
$$

First, as $x\to+\infty$, we have $|x|=x$, so
$$
g(x)=x\left(\frac{f(x)}{x}-p\right).
$$
Since $f(x)/x\to+\infty$, it follows that $g(x)\to+\infty$.

Second, as $x\to-\infty$, we have $|x|=-x$, so
$$
g(x)=f(x)-px
=|x|\left(\frac{f(x)}{|x|}+p\right).
$$
Since $f(x)/|x|\to+\infty$, it again follows that $g(x)\to+\infty$.

Thus $g$ tends to $+\infty$ at both ends of the real line. Hence there exists $R>0$ such that
$$
g(x)>g(0)
$$
whenever $|x|\ge R$. Since $g$ is continuous on the compact interval $[-R,R]$, it attains a minimum at some point $y\in[-R,R]$. Because $g(x)>g(0)$ for $|x|\ge R$, this minimum is attained at an interior point of $(-R,R)$.

Therefore Fermat's theorem gives
$$
g'(y)=0.
$$
Since $g'(y)=f'(y)-p$, we get
$$
f'(y)=p.
$$
Because $p\in\mathbb{R}$ was arbitrary, $f'$ is onto $\mathbb{R}$.
::

::ProblemBlock{number=4}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State Stokes' Theorem.

<span style="display:inline-block; width:1em;"></span> **(b)** Evaluate the following integral:
$$
\int_{\partial D}\frac{x^3}{3}\,dy\wedge dz+\sin(yz)\,dy\wedge dz+x^{10}\,dx\wedge dz,
$$
where
$$
D=
\left\{(x,y,z):\frac{x^2}{4}+\frac{y^2}{9}+\frac{z^2}{16}<1\right\}.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Stokes' Theorem says the following. If $M$ is an oriented smooth manifold with boundary $\partial M$, and $\omega$ is a smooth differential form of degree one less than $\dim M$, then
$$
\int_{\partial M}\omega=\int_M d\omega,
$$
where $\partial M$ has the induced boundary orientation.

<span style="display:inline-block; width:1em;"></span> **(b)** Let
$$
\omega=\frac{x^3}{3}\,dy\wedge dz+\sin(yz)\,dy\wedge dz+x^{10}\,dx\wedge dz.
$$
By Stokes' Theorem,
$$
\int_{\partial D}\omega=\int_D d\omega.
$$
Now
$$
d\left(\frac{x^3}{3}\,dy\wedge dz\right)
=x^2\,dx\wedge dy\wedge dz.
$$
Also,
$$
d\left(\sin(yz)\,dy\wedge dz\right)=0,
$$
because differentiating $\sin(yz)$ only produces $dy$ and $dz$ terms, which wedge to zero with $dy\wedge dz$. Finally,
$$
d\left(x^{10}\,dx\wedge dz\right)=0,
$$
because $dx\wedge dx=0$.

Therefore
$$
d\omega=x^2\,dx\wedge dy\wedge dz.
$$
Hence
$$
\int_{\partial D}\omega=\int_D x^2\,dV.
$$

Now change variables
$$
x=2u,
\qquad
 y=3v,
\qquad
 z=4w.
$$
Then $D$ is obtained from the unit ball
$$
B=\bigl\{(u,v,w):u^2+v^2+w^2<1\bigr\},
$$
and the Jacobian is
$$
|J|=2\cdot 3\cdot 4=24.
$$
Thus
$$
\int_D x^2\,dV
=
\int_B (2u)^2\cdot 24\,du\,dv\,dw
=
96\int_B u^2\,du\,dv\,dw.
$$
By symmetry,
$$
\int_B u^2\,du\,dv\,dw
=
\frac{1}{3}\int_B (u^2+v^2+w^2)\,du\,dv\,dw.
$$
In spherical coordinates,
$$
\int_B (u^2+v^2+w^2)\,du\,dv\,dw
=
\int_B r^2\,dV
=
4\pi\int_0^1 r^4\,dr
=
\frac{4\pi}{5}.
$$
Therefore
$$
\int_B u^2\,du\,dv\,dw
=
\frac{4\pi}{15}.
$$
It follows that
$$
\int_{\partial D}\omega
=
96\cdot \frac{4\pi}{15}
=
\frac{128\pi}{5}.
$$
Thus, with the standard outward boundary orientation,
$$
\boxed{\int_{\partial D}\frac{x^3}{3}\,dy\wedge dz+\sin(yz)\,dy\wedge dz+x^{10}\,dx\wedge dz=\frac{128\pi}{5}.}
$$
::

::ProblemBlock{number=5}
#problem
Prove that $\sin(\sqrt{x})$ is uniformly continuous on $[0,\infty)$.

#proof
Let
$$
f(x)=\sin(\sqrt{x}),
\qquad x\in[0,\infty).
$$
We use the fact that $\sin t$ is Lipschitz with constant $1$ on $\mathbb{R}$:
$$
|\sin a-\sin b|\le |a-b|
$$
for all $a,b\in\mathbb{R}$.

For $x,y\ge 0$, we have
$$
|f(x)-f(y)|
=
|\sin(\sqrt{x})-\sin(\sqrt{y})|
\le
|\sqrt{x}-\sqrt{y}|.
$$
Also,
$$
|\sqrt{x}-\sqrt{y}|^2
\le
|x-y|.
$$
Indeed, assuming $x\ge y$, this becomes
$$
(\sqrt{x}-\sqrt{y})^2
=x+y-2\sqrt{xy}
\le x-y,
$$
which is equivalent to $y\le\sqrt{xy}$, true because $x\ge y\ge 0$.

Thus
$$
|f(x)-f(y)|\le \sqrt{|x-y|}.
$$
Given $\varepsilon>0$, choose
$$
\delta=\varepsilon^2.
$$
If $|x-y|<\delta$, then
$$
|f(x)-f(y)|
\le
\sqrt{|x-y|}
<
\varepsilon.
$$
Therefore $\sin(\sqrt{x})$ is uniformly continuous on $[0,\infty)$.
::

::ProblemBlock{number=6}
#problem
Let
$$
f_n(x)=\frac{nx}{1+n^2x^3}.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Prove $f_n(x)\to 0$ as $n\to\infty$ pointwise on $[0,\infty)$.

<span style="display:inline-block; width:1em;"></span> **(b)** Prove or disprove $f_n(x)\to 0$ as $n\to\infty$ uniformly on $[0,\infty)$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** If $x=0$, then
$$
f_n(0)=0
$$
for every $n$, so $f_n(0)\to 0$.

Now fix $x>0$. Then
$$
f_n(x)=\frac{nx}{1+n^2x^3}.
$$
Dividing numerator and denominator by $n^2x^3$, we get
$$
f_n(x)
=
\frac{1/(nx^2)}{1/(n^2x^3)+1}.
$$
As $n\to\infty$, the numerator tends to $0$ and the denominator tends to $1$. Therefore
$$
f_n(x)\to 0.
$$
Hence $f_n\to 0$ pointwise on $[0,\infty)$.

<span style="display:inline-block; width:1em;"></span> **(b)** The convergence is not uniform. We show that
$$
\sup_{x\in[0,\infty)} f_n(x)
$$
does not tend to $0$.

For $x>0$, compute
$$
f_n'(x)
=
\frac{n(1+n^2x^3)-nx(3n^2x^2)}{(1+n^2x^3)^2}
=
\frac{n(1-2n^2x^3)}{(1+n^2x^3)^2}.
$$
Thus the critical point is determined by
$$
1-2n^2x^3=0,
$$
so
$$
x_n=2^{-1/3}n^{-2/3}.
$$
At this point,
$$
n^2x_n^3=\frac{1}{2}.
$$
Therefore
$$
f_n(x_n)
=
\frac{nx_n}{1+n^2x_n^3}
=
\frac{n\cdot 2^{-1/3}n^{-2/3}}{1+1/2}
=
\frac{2^{2/3}}{3}n^{1/3}.
$$
In particular,
$$
f_n(x_n)\to+\infty.
$$
Thus
$$
\sup_{x\in[0,\infty)}|f_n(x)|
\ge f_n(x_n)
\to+\infty,
$$
so the supremum cannot tend to $0$. Therefore $f_n\to 0$ pointwise but not uniformly on $[0,\infty)$.
::

::ProblemBlock{number=7}
#problem
Let $(X,d)$ be a metric space and $E\subset X$ be a compact set. Prove that $E$ is closed.

#proof
We prove that $X\setminus E$ is open.

Let $x\in X\setminus E$. We claim that
$$
d(x,E):=\inf\{d(x,y):y\in E\}>0.
$$
Suppose instead that $d(x,E)=0$. Then for each $n\in\mathbb{N}$, there exists $y_n\in E$ such that
$$
d(x,y_n)<\frac{1}{n}.
$$
Since $E$ is compact, the sequence $\{y_n\}$ has a convergent subsequence $\{y_{n_k}\}$ with limit $y\in E$. But
$$
d(x,y)
\le
 d(x,y_{n_k})+d(y_{n_k},y).
$$
Letting $k\to\infty$, we get
$$
d(x,y)=0.
$$
Therefore $x=y\in E$, contradicting $x\notin E$.

Hence $d(x,E)>0$. Let
$$
r=\frac{1}{2}d(x,E)>0.
$$
If $z\in B(x,r)$ and $z\in E$, then
$$
d(x,E)\le d(x,z)<r=\frac{1}{2}d(x,E),
$$
which is impossible. Thus
$$
B(x,r)\subset X\setminus E.
$$
Therefore $X\setminus E$ is open, so $E$ is closed.
::

::ProblemBlock{number=8}
#problem
Let $f(x,y)$ be a function on the unit disc
$$
D=\{(x,y):x^2+y^2<1\}
$$
with $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ existing for all $(x,y)\in D$. Prove or disprove each statement.

<span style="display:inline-block; width:1em;"></span> **(a)** If $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ are bounded on $D$, then $f$ is continuous on $D$.

<span style="display:inline-block; width:1em;"></span> **(b)** If $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ are continuous on $D$, then $f$ is differentiable on $D$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The statement is true.

Assume that $f_x$ and $f_y$ are bounded on $D$. Then there exists $M>0$ such that
$$
|f_x(x,y)|\le M,
\qquad
|f_y(x,y)|\le M
$$
for all $(x,y)\in D$.

Fix $(a,b)\in D$. Since $D$ is open, there exists $\rho>0$ such that the closed square
$$
[a-\rho,a+\rho]\times[b-\rho,b+\rho]
$$
is contained in $D$.

For $(x,y)$ in this square, write
$$
f(x,y)-f(a,b)
=
\bigl(f(x,y)-f(a,y)\bigr)+\bigl(f(a,y)-f(a,b)\bigr).
$$
For the first term, apply the one-variable Mean Value Theorem to the function $s\mapsto f(s,y)$ on the segment from $a$ to $x$. Since $|f_x|\le M$, we get
$$
|f(x,y)-f(a,y)|\le M|x-a|.
$$
Similarly, applying the Mean Value Theorem to $t\mapsto f(a,t)$ gives
$$
|f(a,y)-f(a,b)|\le M|y-b|.
$$
Therefore
$$
|f(x,y)-f(a,b)|\le M(|x-a|+|y-b|).
$$
This tends to $0$ as $(x,y)\to(a,b)$. Thus $f$ is continuous at $(a,b)$. Since $(a,b)$ was arbitrary, $f$ is continuous on $D$.

<span style="display:inline-block; width:1em;"></span> **(b)** The statement is true.

Assume $f_x$ and $f_y$ are continuous on $D$. We prove differentiability at an arbitrary point $(a,b)\in D$.

Because $D$ is open, for all sufficiently small $(h,k)$ the line segments used below remain inside $D$. Write
$$
\begin{aligned}
f(a+h,b+k)-f(a,b)
&=\bigl(f(a+h,b+k)-f(a,b+k)\bigr)\\
&\quad+\bigl(f(a,b+k)-f(a,b)\bigr).
\end{aligned}
$$
By the one-variable Mean Value Theorem, for some $\theta_1,\theta_2\in(0,1)$,
$$
f(a+h,b+k)-f(a,b+k)
=
f_x(a+\theta_1h,b+k)h
$$
and
$$
f(a,b+k)-f(a,b)
=
f_y(a,b+\theta_2k)k.
$$
Therefore
$$
\begin{aligned}
&f(a+h,b+k)-f(a,b)-f_x(a,b)h-f_y(a,b)k\\
&=\bigl(f_x(a+\theta_1h,b+k)-f_x(a,b)\bigr)h
+\bigl(f_y(a,b+\theta_2k)-f_y(a,b)\bigr)k.
\end{aligned}
$$
Since $f_x$ and $f_y$ are continuous at $(a,b)$, both differences in parentheses tend to $0$ as $(h,k)\to(0,0)$. Hence
$$
\frac{f(a+h,b+k)-f(a,b)-f_x(a,b)h-f_y(a,b)k}{\sqrt{h^2+k^2}}
\to 0.
$$
Thus $f$ is differentiable at $(a,b)$, with differential
$$
Df(a,b)(h,k)=f_x(a,b)h+f_y(a,b)k.
$$
Since $(a,b)$ was arbitrary, $f$ is differentiable on $D$.
::

::ProblemBlock{number=9}
#problem
Let $1<p,q<\infty$ satisfy
$$
\frac{1}{p}+\frac{1}{q}=1.
$$
Prove:

<span style="display:inline-block; width:1em;"></span> **(a)** For any $x,y\in(0,\infty)$,
$$
xy\le \frac{x^p}{p}+\frac{y^q}{q}.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** If $f$ and $g$ are in $L^p[a,b]$ and $L^q[a,b]$, respectively, then $f(x)g(x)$ is Lebesgue integrable and
$$
\int_a^b f(x)g(x)\,dx
\le
\left(\int_a^b |f(x)|^p\,dx\right)^{1/p}
\left(\int_a^b |g(x)|^q\,dx\right)^{1/q}.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** This is Young's inequality. Since $1/p+1/q=1$, the weighted arithmetic-geometric mean inequality gives, for positive numbers $A,B$,
$$
A^{1/p}B^{1/q}\le \frac{A}{p}+\frac{B}{q}.
$$
Taking
$$
A=x^p,
\qquad
B=y^q,
$$
we get
$$
A^{1/p}B^{1/q}=xy.
$$
Therefore
$$
xy\le \frac{x^p}{p}+\frac{y^q}{q}.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** We prove the stronger Holder inequality
$$
\int_a^b |f(x)g(x)|\,dx
\le
\left(\int_a^b |f(x)|^p\,dx\right)^{1/p}
\left(\int_a^b |g(x)|^q\,dx\right)^{1/q}.
$$
This will imply the stated inequality because
$$
\int_a^b f(x)g(x)\,dx\le \int_a^b |f(x)g(x)|\,dx.
$$

Let
$$
\|f\|_p=\left(\int_a^b |f(x)|^p\,dx\right)^{1/p},
\qquad
\|g\|_q=\left(\int_a^b |g(x)|^q\,dx\right)^{1/q}.
$$
If $\|f\|_p=0$ or $\|g\|_q=0$, then $f=0$ almost everywhere or $g=0$ almost everywhere, so the result is immediate.

Assume now that $\|f\|_p>0$ and $\|g\|_q>0$. Define
$$
F(x)=\frac{|f(x)|}{\|f\|_p},
\qquad
G(x)=\frac{|g(x)|}{\|g\|_q}.
$$
By part **(a)**,
$$
F(x)G(x)\le \frac{F(x)^p}{p}+\frac{G(x)^q}{q}
$$
for almost every $x\in[a,b]$. Integrating, we obtain
$$
\int_a^b F(x)G(x)\,dx
\le
\frac{1}{p}\int_a^b F(x)^p\,dx
+
\frac{1}{q}\int_a^b G(x)^q\,dx.
$$
But
$$
\int_a^b F(x)^p\,dx=1,
\qquad
\int_a^b G(x)^q\,dx=1.
$$
Therefore
$$
\int_a^b F(x)G(x)\,dx
\le
\frac{1}{p}+\frac{1}{q}=1.
$$
Multiplying by $\|f\|_p\|g\|_q$, we get
$$
\int_a^b |f(x)g(x)|\,dx
\le
\|f\|_p\|g\|_q.
$$
This proves that $fg\in L^1[a,b]$ and gives
$$
\int_a^b f(x)g(x)\,dx
\le
\left(\int_a^b |f(x)|^p\,dx\right)^{1/p}
\left(\int_a^b |g(x)|^q\,dx\right)^{1/q}.
$$
::
