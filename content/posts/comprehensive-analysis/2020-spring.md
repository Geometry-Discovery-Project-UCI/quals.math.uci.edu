# 2020 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $E\subset \mathbb{R}$ be uncountable. Prove that $E$ has uncountably many limit points.

#proof
Let $E'$ denote the set of limit points of $E$. We prove by contradiction. Suppose that $E'$ is countable.

Every point of $E\setminus E'$ is an isolated point of $E$. Hence for each $x\in E\setminus E'$, there exists an open interval $I_x$ such that
$$
I_x\cap E=\{x\}.
$$
Choose rational numbers $p_x,q_x\in \mathbb{Q}$ such that
$$
x\in (p_x,q_x)\subset I_x.
$$
Then
$$
(p_x,q_x)\cap E=\{x\}.
$$
The assignment
$$
x\mapsto (p_x,q_x)
$$
is injective from $E\setminus E'$ into the countable set
$$
\{(p,q)\in \mathbb{Q}^2:p<q\}.
$$
Indeed, if two different points $x,y\in E\setminus E'$ were assigned the same rational interval $(p,q)$, then $(p,q)\cap E$ would contain both $x$ and $y$, contradicting $(p,q)\cap E=\{x\}$.

Thus $E\setminus E'$ is countable. Since $E'$ is countable by assumption, we get
$$
E=(E\setminus E')\cup (E\cap E')
$$
is countable, because it is contained in the union of two countable sets. This contradicts the assumption that $E$ is uncountable.

Therefore $E'$ must be uncountable.
::

::ProblemBlock{number=2}
#problem
Suppose that $X$ is a metric space and $K\subset X$ is compact. Prove that there are $a,b\in K$ that are as far apart as possible, that is,
$$
d(x,y)\le d(a,b)
$$
for all $x,y\in K$.

#proof
Consider the function
$$
F:K\times K\to \mathbb{R},\qquad F(x,y)=d(x,y).
$$
The function $F$ is continuous. Indeed, for $(x,y),(x',y')\in K\times K$, the triangle inequality gives
$$
|d(x,y)-d(x',y')|\le d(x,x')+d(y,y').
$$
Thus $F$ is continuous with respect to the product metric.

Since $K$ is compact, the product $K\times K$ is also compact. Therefore, by the extreme value theorem, $F$ attains its maximum on $K\times K$. Hence there exist $a,b\in K$ such that
$$
F(a,b)=\max_{(x,y)\in K\times K}F(x,y).
$$
Equivalently,
$$
d(a,b)=\max_{x,y\in K}d(x,y).
$$
Thus for every $x,y\in K$,
$$
d(x,y)\le d(a,b),
$$
as required.
::

::ProblemBlock{number=3}
#problem
Let $I(x)=1$ if $x\ge 0$ and $I(x)=0$ if $x<0$. Let
$$
\alpha(x):=\sum_{n=1}^{\infty}2^{-n}I(x-2^{-n}).
$$
Compute the Riemann-Stieltjes integral
$$
\int_0^1 x\,d\alpha.
$$

#proof
The function $\alpha$ is a nondecreasing step function. For each $n\in \mathbb{N}$, the term
$$
2^{-n}I(x-2^{-n})
$$
has a jump of size $2^{-n}$ at the point $x=2^{-n}$. Therefore $\alpha$ has jumps at
$$
2^{-1},2^{-2},2^{-3},\dots,
$$
and the jump size at $2^{-n}$ is $2^{-n}$.

For a step-function integrator, the Riemann-Stieltjes integral is the sum of the values of the integrand at the jump points times the corresponding jump sizes. Hence
$$
\int_0^1 x\,d\alpha
=
\sum_{n=1}^{\infty} 2^{-n}\cdot 2^{-n}.
$$
Thus
$$
\int_0^1 x\,d\alpha
=
\sum_{n=1}^{\infty}4^{-n}
=
\frac{1/4}{1-1/4}
=
\frac{1}{3}.
$$
Therefore
$$
\boxed{\int_0^1 x\,d\alpha=\frac{1}{3}}.
$$
::

::ProblemBlock{number=4}
#problem
Let $f,g:[a,b]\to \mathbb{R}$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Prove that there is $\theta\in (a,b)$ such that
$$
(f(b)-f(a))g'(\theta)=(g(b)-g(a))f'(\theta).
$$

#proof
Define
$$
H(x)=(f(b)-f(a))g(x)-(g(b)-g(a))f(x).
$$
Since $f$ and $g$ are continuous on $[a,b]$ and differentiable on $(a,b)$, the function $H$ is continuous on $[a,b]$ and differentiable on $(a,b)$.

Compute
$$
H(b)-H(a)
=
(f(b)-f(a))(g(b)-g(a))-(g(b)-g(a))(f(b)-f(a))
=0.
$$
Hence
$$
H(a)=H(b).
$$
By Rolle's theorem, there exists $\theta\in (a,b)$ such that
$$
H'(\theta)=0.
$$
But
$$
H'(x)=(f(b)-f(a))g'(x)-(g(b)-g(a))f'(x).
$$
Therefore
$$
(f(b)-f(a))g'(\theta)-(g(b)-g(a))f'(\theta)=0,
$$
which is exactly
$$
(f(b)-f(a))g'(\theta)=(g(b)-g(a))f'(\theta).
$$
::

::ProblemBlock{number=5}
#problem
Let $\{f_n\}$ be a bounded sequence of convex functions on $[-2,2]$. Show that there is a subsequence $\{f_{n_k}\}$ that converges uniformly on $[-1,1]$.

Recall that a function $f$ is convex on an interval $I$ if for all $0\le \lambda\le 1$ and all $x,y\in I$, one has
$$
f(\lambda x+(1-\lambda)y)\le \lambda f(x)+(1-\lambda)f(y).
$$

#proof
Since the sequence $\{f_n\}$ is bounded on $[-2,2]$, there exists $C>0$ such that
$$
|f_n(x)|\le C
$$
for all $n$ and all $x\in [-2,2]$.

We first show that the family $\{f_n\}$ is equicontinuous on $[-1,1]$. Let $f$ be any convex function satisfying $|f(x)|\le C$ on $[-2,2]$. If $-1\le x<y\le 1$, then convexity implies that slopes of secant lines are monotone. In particular,
$$
\frac{f(x)-f(-2)}{x+2}
\le
\frac{f(y)-f(x)}{y-x}
\le
\frac{f(2)-f(y)}{2-y}.
$$
Since $x+2\ge 1$ and $2-y\ge 1$, and since $|f|\le C$, we obtain
$$
-2C\le \frac{f(y)-f(x)}{y-x}\le 2C.
$$
Therefore
$$
|f(y)-f(x)|\le 2C|y-x|
$$
for all $x,y\in [-1,1]$. Thus the family $\{f_n\}$ is uniformly bounded and equicontinuous on $[-1,1]$.

By the Arzela-Ascoli theorem, a uniformly bounded and equicontinuous family of real-valued functions on the compact metric space $[-1,1]$ has a uniformly convergent subsequence. Hence there exists a subsequence $\{f_{n_k}\}$ and a continuous function $f$ on $[-1,1]$ such that
$$
f_{n_k}\to f
$$
uniformly on $[-1,1]$.
::

::ProblemBlock{number=6}
#problem
Let $X$ denote the set of nondecreasing functions $f:[0,1]\to [0,1]$. We equip $X$ with the metric
$$
d(f,g)=\sup\{|f(x)-g(x)|:x\in [0,1]\}.
$$

(a) Prove that $(X,d)$ is complete.

(b) Prove that $(X,d)$ is not compact.

#proof
(a) Let $\{f_n\}$ be a Cauchy sequence in $(X,d)$. Then $\{f_n\}$ is Cauchy with respect to the supremum norm. Hence for each $x\in [0,1]$, the sequence $\{f_n(x)\}$ is Cauchy in $\mathbb{R}$. Since $\mathbb{R}$ is complete, the pointwise limit
$$
f(x)=\lim_{n\to\infty}f_n(x)
$$
exists for each $x\in [0,1]$.

Moreover, because $\{f_n\}$ is Cauchy in the supremum norm, the convergence is uniform. Indeed, for every $\varepsilon>0$, there exists $N$ such that if $m,n\ge N$, then
$$
\sup_{x\in [0,1]}|f_n(x)-f_m(x)|<\varepsilon.
$$
Letting $m\to\infty$, we get
$$
\sup_{x\in [0,1]}|f_n(x)-f(x)|\le \varepsilon
$$
for all $n\ge N$. Thus $f_n\to f$ uniformly.

Since each $f_n$ takes values in $[0,1]$, the limit $f$ also takes values in $[0,1]$. Also, if $x\le y$, then
$$
f_n(x)\le f_n(y)
$$
for every $n$. Passing to the limit gives
$$
f(x)\le f(y).
$$
Thus $f$ is nondecreasing, so $f\in X$. Therefore every Cauchy sequence in $X$ converges to an element of $X$, and $(X,d)$ is complete.

(b) We construct a sequence in $X$ with no convergent subsequence. For $n\ge 2$, define
$$
f_n(x)=
\begin{cases}
0, & 0\le x<\frac{1}{2}+\frac{1}{n},\\
1, & \frac{1}{2}+\frac{1}{n}\le x\le 1.
\end{cases}
$$
Each $f_n$ is nondecreasing and takes values in $[0,1]$, so $f_n\in X$.

If $m\ne n$, then the jump points
$$
\frac{1}{2}+\frac{1}{m}
\quad\text{and}\quad
\frac{1}{2}+\frac{1}{n}
$$
are different. Assume for example that
$$
\frac{1}{2}+\frac{1}{m}<\frac{1}{2}+\frac{1}{n}.
$$
Choose $x$ strictly between these two numbers. Then one of $f_m(x),f_n(x)$ equals $1$ and the other equals $0$. Hence
$$
d(f_m,f_n)=1.
$$
Therefore no subsequence of $\{f_n\}$ is Cauchy, and hence no subsequence converges.

In a compact metric space, every sequence has a convergent subsequence. Since the sequence $\{f_n\}$ has no convergent subsequence, $(X,d)$ is not compact.
::

::ProblemBlock{number=7}
#problem
Let
$$
B_R(0)=\{(x_1,x_2,\dots,x_n)\in \mathbb{R}^n:x_1^2+x_2^2+\cdots+x_n^2\le R^2\}
$$
be the ball of radius $R$ in $n$-dimensional Euclidean space. Compute the volume of $B_R(0)$.

#proof
Let $V_n(R)$ denote the volume of the $n$-dimensional ball of radius $R$. By scaling, we have
$$
V_n(R)=R^nV_n(1).
$$
Thus it remains to compute $V_n(1)$.

The standard formula for the volume of the unit ball in $\mathbb{R}^n$ is
$$
V_n(1)=\frac{\pi^{n/2}}{\Gamma\left(\frac{n}{2}+1\right)}.
$$
Therefore
$$
V_n(R)=\frac{\pi^{n/2}}{\Gamma\left(\frac{n}{2}+1\right)}R^n.
$$

For completeness, we recall why this formula holds. The Gaussian integral gives
$$
\int_{\mathbb{R}^n}e^{-\|x\|^2}\,dx=\pi^{n/2}.
$$
Using polar coordinates in $\mathbb{R}^n$, the same integral is
$$
\int_0^{\infty} e^{-r^2}S_{n-1}r^{n-1}\,dr,
$$
where $S_{n-1}$ is the surface area of the unit sphere in $\mathbb{R}^n$. Since
$$
\int_0^{\infty} e^{-r^2}r^{n-1}\,dr
=
\frac{1}{2}\Gamma\left(\frac{n}{2}\right),
$$
we get
$$
\pi^{n/2}=S_{n-1}\frac{1}{2}\Gamma\left(\frac{n}{2}\right).
$$
Thus
$$
S_{n-1}=\frac{2\pi^{n/2}}{\Gamma\left(\frac{n}{2}\right)}.
$$
The volume of the unit ball is
$$
V_n(1)=\int_0^1 S_{n-1}r^{n-1}\,dr
=
\frac{S_{n-1}}{n}
=
\frac{2\pi^{n/2}}{n\Gamma\left(\frac{n}{2}\right)}.
$$
Using
$$
\Gamma\left(\frac{n}{2}+1\right)=\frac{n}{2}\Gamma\left(\frac{n}{2}\right),
$$
this becomes
$$
V_n(1)=\frac{\pi^{n/2}}{\Gamma\left(\frac{n}{2}+1\right)}.
$$
Hence
$$
\boxed{V_n(R)=\frac{\pi^{n/2}}{\Gamma\left(\frac{n}{2}+1\right)}R^n}.
$$
::

::ProblemBlock{number=8}
#problem
For any bounded real-valued Riemann integrable function $u\in \mathcal{R}([a,b])$, define the $L^2$-norm of $u$ by
$$
\|u\|_2=\left(\int_a^b |u(x)|^2\,dx\right)^{1/2}.
$$

Prove the following.

(a) If $f,g\in \mathcal{R}([a,b])$, then
$$
\left|\int_a^b f(x)g(x)\,dx\right|
\le
\|f\|_2\|g\|_2.
$$

(b) If $f,g,h\in \mathcal{R}([a,b])$, then
$$
\|f-h\|_2\le \|f-g\|_2+\|g-h\|_2.
$$

#proof
(a) This is the Cauchy-Schwarz inequality for the Riemann integral. If $\|g\|_2=0$, then
$$
\int_a^b |g(x)|^2\,dx=0,
$$
so $g=0$ except possibly on a set of measure zero, and hence
$$
\int_a^b f(x)g(x)\,dx=0.
$$
The inequality is then trivial. Similarly, the case $\|f\|_2=0$ is trivial.

Assume now that $\|g\|_2>0$. For every real number $\lambda$, we have
$$
0\le \int_a^b (f(x)-\lambda g(x))^2\,dx.
$$
Expanding gives
$$
0\le \int_a^b f(x)^2\,dx
-2\lambda\int_a^b f(x)g(x)\,dx
+\lambda^2\int_a^b g(x)^2\,dx.
$$
This quadratic polynomial in $\lambda$ is nonnegative for all $\lambda\in \mathbb{R}$. Therefore its discriminant is nonpositive:
$$
4\left(\int_a^b f(x)g(x)\,dx\right)^2
-4\left(\int_a^b f(x)^2\,dx\right)
\left(\int_a^b g(x)^2\,dx\right)
\le 0.
$$
Hence
$$
\left(\int_a^b f(x)g(x)\,dx\right)^2
\le
\left(\int_a^b f(x)^2\,dx\right)
\left(\int_a^b g(x)^2\,dx\right).
$$
Taking square roots gives
$$
\left|\int_a^b f(x)g(x)\,dx\right|
\le
\|f\|_2\|g\|_2.
$$

(b) Let
$$
F=f-g,
\qquad
G=g-h.
$$
Then
$$
f-h=F+G.
$$
Using part (a), we get
$$
\begin{aligned}
\|F+G\|_2^2
&=\int_a^b (F(x)+G(x))^2\,dx\\
&=\int_a^b F(x)^2\,dx+2\int_a^b F(x)G(x)\,dx+\int_a^b G(x)^2\,dx\\
&\le \|F\|_2^2+2\|F\|_2\|G\|_2+\|G\|_2^2\\
&=(\|F\|_2+\|G\|_2)^2.
\end{aligned}
$$
Taking square roots, we obtain
$$
\|F+G\|_2\le \|F\|_2+\|G\|_2.
$$
Therefore
$$
\|f-h\|_2\le \|f-g\|_2+\|g-h\|_2.
$$
::
