# 2013 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Show that the sequence $\{a_n\}_{n=1}^{\infty}$ defined recursively by
$$
a_1>\frac{3}{2}, \qquad a_n=\sqrt{3a_{n-1}-2}, \qquad n\ge 2,
$$
converges and find its limit.

#proof
Let
$$
\phi(x)=\sqrt{3x-2}.
$$
The fixed points of $\phi$ satisfy
$$
L=\sqrt{3L-2},
$$
so
$$
L^2-3L+2=0,
$$
and hence
$$
L=1 \quad \text{or} \quad L=2.
$$
Since $a_1>3/2$, all terms are greater than $1$. Indeed, if $a_{n-1}>1$, then
$$
a_n=\sqrt{3a_{n-1}-2}>1.
$$
Also,
$$
\phi(x)-x
=
\sqrt{3x-2}-x
=
\frac{3x-2-x^2}{\sqrt{3x-2}+x}
=
-\frac{(x-1)(x-2)}{\sqrt{3x-2}+x}.
$$
Thus, for $1<x<2$, we have $\phi(x)>x$, and for $x>2$, we have $\phi(x)<x$. Moreover, $\phi(x)<2$ when $x<2$, and $\phi(x)>2$ when $x>2$.

If $3/2<a_1<2$, then $\{a_n\}$ is increasing and bounded above by $2$. If $a_1=2$, then $a_n=2$ for all $n$. If $a_1>2$, then $\{a_n\}$ is decreasing and bounded below by $2$. In every case, $\{a_n\}$ converges.

Let $\lim_{n\to\infty}a_n=L$. Passing to the limit in
$$
a_n=\sqrt{3a_{n-1}-2}
$$
gives
$$
L=\sqrt{3L-2}.
$$
Since every term is greater than $1$, the limit must be the fixed point $2$, not $1$. Therefore
$$
\lim_{n\to\infty}a_n=2.
$$
::

::ProblemBlock{number=2}
#problem
Show that the series
$$
\sum_{n=1}^{\infty}\frac{x\sin(n^2x)}{n^2}
$$
converges pointwise to a continuous function on $\mathbb{R}$.

#proof
For each fixed $x\in\mathbb{R}$, we have
$$
\left|\frac{x\sin(n^2x)}{n^2}\right|
\le
\frac{|x|}{n^2}.
$$
Since
$$
\sum_{n=1}^{\infty}\frac{|x|}{n^2}
$$
converges, the given series converges absolutely, hence pointwise, for every fixed $x\in\mathbb{R}$.

It remains to show that the limit function is continuous. Let $R>0$. On the compact interval $[-R,R]$,
$$
\left|\frac{x\sin(n^2x)}{n^2}\right|
\le
\frac{R}{n^2}.
$$
Because
$$
\sum_{n=1}^{\infty}\frac{R}{n^2}<\infty,
$$
the Weierstrass $M$-test implies that the series converges uniformly on $[-R,R]$. Each function
$$
x\mapsto \frac{x\sin(n^2x)}{n^2}
$$
is continuous, so the uniform limit on $[-R,R]$ is continuous on $[-R,R]$.

Since every point of $\mathbb{R}$ lies in some interval $[-R,R]$, the pointwise limit is continuous on all of $\mathbb{R}$.
::

::ProblemBlock{number=3}
#problem
Prove the following integral test. Assume that $f$ is a positive and decreasing function on $(0,\infty)$. Then the series
$$
\sum_{n=1}^{\infty} f(n)
$$
converges if and only if the sequence $\{I_n\}$ is bounded, where
$$
I_n=\int_1^n f(x)\,dx.
$$

#proof
Since $f$ is decreasing, for every integer $k\ge 1$ and every $x\in[k,k+1]$, we have
$$
f(k+1)\le f(x)\le f(k).
$$
Therefore
$$
f(k+1)
\le
\int_k^{k+1}f(x)\,dx
\le
f(k).
$$
Summing from $k=1$ to $n-1$ gives
$$
\sum_{k=2}^{n}f(k)
\le
\int_1^n f(x)\,dx
\le
\sum_{k=1}^{n-1}f(k).
$$

First assume that $\sum_{n=1}^{\infty}f(n)$ converges. Then the partial sums on the right are bounded, so
$$
I_n=\int_1^n f(x)\,dx
$$
is bounded.

Conversely, assume that $\{I_n\}$ is bounded. Then there exists $C>0$ such that
$$
\int_1^n f(x)\,dx\le C
$$
for all $n$. From the inequality above,
$$
\sum_{k=2}^{n}f(k)\le I_n\le C.
$$
Thus the partial sums of $\sum_{k=2}^{\infty}f(k)$ are bounded. Since all terms are positive, the partial sums are increasing, so the series converges. Adding the single term $f(1)$ does not affect convergence. Hence
$$
\sum_{n=1}^{\infty}f(n)
$$
converges.
::

::ProblemBlock{number=4}
#problem
Let $f:\mathbb{R}\to\mathbb{R}$ be continuous and satisfy
$$
\lim_{|x|\to\infty}f(x)=0.
$$
Prove or disprove: $f$ is uniformly continuous on $\mathbb{R}$.

#proof
The statement is true.

Let $\varepsilon>0$. Since
$$
\lim_{|x|\to\infty}f(x)=0,
$$
there exists $R>0$ such that
$$
|f(x)|<\frac{\varepsilon}{2}
$$
whenever $|x|>R$.

Because $f$ is continuous on the compact interval $[-R-1,R+1]$, it is uniformly continuous there. Hence there exists $\delta_0>0$ such that if $x,y\in[-R-1,R+1]$ and
$$
|x-y|<\delta_0,
$$
then
$$
|f(x)-f(y)|<\varepsilon.
$$
Let
$$
\delta=\min\{1,\delta_0\}.
$$
Suppose $|x-y|<\delta$.

If at least one of $|x|$ and $|y|$ is at most $R$, then both $x$ and $y$ lie in $[-R-1,R+1]$, so
$$
|f(x)-f(y)|<\varepsilon.
$$
If both $|x|>R$ and $|y|>R$, then
$$
|f(x)-f(y)|\le |f(x)|+|f(y)|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
$$
Therefore $f$ is uniformly continuous on $\mathbb{R}$.
::

::ProblemBlock{number=5}
#problem
Let $f$ be an increasing function on $[0,1]$. Let $D(f)$ denote the set of all discontinuity points of $f$ on $[0,1]$. Prove that $D(f)$ is at most countable.

#proof
We prove the result for points in $(0,1)$; the two endpoints can add at most two more points.

For $x\in(0,1)$, since $f$ is increasing, the one-sided limits
$$
f(x-)=\lim_{t\uparrow x}f(t),
\qquad
f(x+)=\lim_{t\downarrow x}f(t)
$$
exist. Also
$$
f(x-)\le f(x)\le f(x+).
$$
Thus $f$ is discontinuous at $x$ only if
$$
f(x-)<f(x+).
$$
For each interior discontinuity point $x$, choose a rational number $q_x$ such that
$$
f(x-)<q_x<f(x+).
$$
This is possible because $\mathbb{Q}$ is dense in $\mathbb{R}$.

We claim that different discontinuity points give different rationals. Indeed, if $x<y$, then by monotonicity,
$$
f(x+)\le f(y-).
$$
Therefore the intervals
$$
(f(x-),f(x+))
\quad \text{and} \quad
(f(y-),f(y+))
$$
are disjoint. Hence $q_x\ne q_y$.

Thus the map
$$
x\mapsto q_x
$$
from the set of interior discontinuities into $\mathbb{Q}$ is injective. Since $\mathbb{Q}$ is countable, the set of interior discontinuities is countable. Adding the endpoints, $D(f)$ is at most countable.
::

::ProblemBlock{number=6}
#problem
Evaluate the integral
$$
\int_{S^2} z^4y^2\,d\sigma,
$$
where
$$
S^2=\{(x,y,z)\in\mathbb{R}^3:x^2+y^2+z^2=1\}
$$
and $d\sigma$ is the area element on $S^2$.

#proof
Use spherical coordinates on the unit sphere:
$$
x=\sin\phi\cos\theta,
\qquad
 y=\sin\phi\sin\theta,
\qquad
 z=\cos\phi,
$$
where $0\le \theta\le 2\pi$ and $0\le \phi\le \pi$. The area element is
$$
d\sigma=\sin\phi\,d\phi\,d\theta.
$$
Therefore
$$
\int_{S^2} z^4y^2\,d\sigma
=
\int_0^{2\pi}\int_0^{\pi}
\cos^4\phi\,\sin^2\phi\,\sin^2\theta\,\sin\phi\,d\phi\,d\theta.
$$
Thus
$$
\int_{S^2} z^4y^2\,d\sigma
=
\left(\int_0^{2\pi}\sin^2\theta\,d\theta\right)
\left(\int_0^{\pi}\cos^4\phi\sin^3\phi\,d\phi\right).
$$
The first integral is
$$
\int_0^{2\pi}\sin^2\theta\,d\theta=\pi.
$$
For the second integral, put $u=\cos\phi$. Then $du=-\sin\phi\,d\phi$ and
$$
\sin^3\phi\,d\phi
=
(1-\cos^2\phi)\sin\phi\,d\phi.
$$
Hence
$$
\int_0^{\pi}\cos^4\phi\sin^3\phi\,d\phi
=
\int_{-1}^{1}u^4(1-u^2)\,du.
$$
Therefore
$$
\int_{-1}^{1}u^4(1-u^2)\,du
=
2\int_0^1(u^4-u^6)\,du
=
2\left(\frac15-\frac17\right)
=
\frac{4}{35}.
$$
Thus
$$
\int_{S^2} z^4y^2\,d\sigma
=
\pi\cdot \frac{4}{35}
=
\frac{4\pi}{35}.
$$
::

::ProblemBlock{number=7}
#problem
Let $f$ be a bounded function on $[a,b]$. Prove or disprove each statement.

<span style="display:inline-block; width:1em;"></span> **(a)** If $f(x)^2$ is integrable on $[a,b]$, then $f$ is integrable.

<span style="display:inline-block; width:1em;"></span> **(b)** If $f(x)^3$ is integrable on $[a,b]$, then $f$ is integrable.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The statement is false.

For example, on $[a,b]$, define
$$
f(x)=
\begin{cases}
1, & x\in\mathbb{Q},\\
-1, & x\notin\mathbb{Q}.
\end{cases}
$$
Then
$$
f(x)^2=1
$$
for all $x\in[a,b]$, so $f^2$ is Riemann integrable. However, every interval contains both rational and irrational numbers, so on every subinterval the supremum of $f$ is $1$ and the infimum of $f$ is $-1$. Hence the upper integral of $f$ is $b-a$ and the lower integral of $f$ is $-(b-a)$. Therefore $f$ is not Riemann integrable.

<span style="display:inline-block; width:1em;"></span> **(b)** The statement is true.

Let
$$
g(x)=f(x)^3.
$$
By assumption, $g$ is Riemann integrable. Since $f$ is bounded, $g$ is bounded. The function
$$
\phi(t)=\sqrt[3]{t}
$$
is continuous on every compact interval. By the standard theorem that a continuous function composed with a Riemann integrable function is Riemann integrable, $\phi\circ g$ is Riemann integrable. But
$$
(\phi\circ g)(x)=\sqrt[3]{f(x)^3}=f(x).
$$
Therefore $f$ is Riemann integrable on $[a,b]$.
::

::ProblemBlock{number=8}
#problem
Let $f(x)$ be a twice differentiable function on $[-1,1]$ such that
$$
f(0)=0
$$
and
$$
f(1)=-f(-1).
$$
Prove that there exists $x_0\in(-1,1)$ such that
$$
f''(x_0)=0.
$$

#proof
Apply the Mean Value Theorem to $f$ on the interval $[-1,0]$. There exists $c\in(-1,0)$ such that
$$
f'(c)=\frac{f(0)-f(-1)}{0-(-1)}=-f(-1).
$$
Since $f(1)=-f(-1)$, this gives
$$
f'(c)=f(1).
$$
Now apply the Mean Value Theorem to $f$ on $[0,1]$. There exists $d\in(0,1)$ such that
$$
f'(d)=\frac{f(1)-f(0)}{1-0}=f(1).
$$
Therefore
$$
f'(c)=f'(d).
$$
Since $f$ is twice differentiable, $f'$ is continuous on $[c,d]$ and differentiable on $(c,d)$. By Rolle's Theorem applied to $f'$ on $[c,d]$, there exists $x_0\in(c,d)\subset(-1,1)$ such that
$$
f''(x_0)=0.
$$
::

::ProblemBlock{number=9}
#problem
Let $C[0,1]$ be the metric space consisting of all continuous functions on $[0,1]$ with metric
$$
d(f,g)=\max\{|f(x)-g(x)|:x\in[0,1]\}.
$$
Let $h$ be a differentiable function on $\mathbb{R}$ with
$$
|h'(x)|\le \frac12
$$
for all $x\in\mathbb{R}$. Define $T:C[0,1]\to C[0,1]$ by
$$
T(f)(x)=(h\circ f)(x)
$$
for all $x\in[0,1]$ and $f\in C[0,1]$. Prove that $T$ has a unique fixed point in $C[0,1]$.

#proof
First, if $f\in C[0,1]$, then $h\circ f$ is continuous, so $T(f)\in C[0,1]$. Thus $T$ maps $C[0,1]$ into itself.

For $f,g\in C[0,1]$ and $x\in[0,1]$, the Mean Value Theorem applied to $h$ gives
$$
|h(f(x))-h(g(x))|\le \frac12 |f(x)-g(x)|.
$$
Taking the maximum over $x\in[0,1]$, we get
$$
d(Tf,Tg)
=
\max_{x\in[0,1]}|h(f(x))-h(g(x))|
\le
\frac12\max_{x\in[0,1]}|f(x)-g(x)|
=
\frac12 d(f,g).
$$
Thus $T$ is a contraction with contraction constant $1/2$.

The metric space $C[0,1]$ with the sup metric is complete. Therefore, by the Banach Fixed Point Theorem, $T$ has a unique fixed point in $C[0,1]$.
::
