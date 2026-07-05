# 2016 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $\{a_n\}$ be a sequence of nonnegative real numbers satisfying
$$
a_{n+1}\le a_n+\frac{(-1)^n}{n},\qquad \forall n\in\mathbb{N}.
$$
Prove that the sequence $\{a_n\}$ converges.

#proof
We separate the sequence into its odd and even subsequences.

For $k\ge 1$, applying the hypothesis first with $n=2k-1$ and then with $n=2k$ gives
$$
a_{2k}\le a_{2k-1}-\frac{1}{2k-1}
$$
and
$$
a_{2k+1}\le a_{2k}+\frac{1}{2k}.
$$
Therefore
$$
a_{2k+1}
\le a_{2k-1}-\frac{1}{2k-1}+\frac{1}{2k}
= a_{2k-1}-\frac{1}{(2k-1)(2k)}.
$$
Hence the odd subsequence $\{a_{2k-1}\}$ is decreasing. Since every $a_n$ is nonnegative, this odd subsequence is bounded below by $0$. Thus it converges; say
$$
\lim_{k\to\infty} a_{2k-1}=L
$$
for some $L\ge 0$.

Now we show that the even subsequence has the same limit. From
$$
a_{2k}\le a_{2k-1}-\frac{1}{2k-1},
$$
we get
$$
\limsup_{k\to\infty} a_{2k}\le L.
$$
On the other hand, from
$$
a_{2k+1}\le a_{2k}+\frac{1}{2k},
$$
we get
$$
a_{2k}\ge a_{2k+1}-\frac{1}{2k}.
$$
Since $a_{2k+1}\to L$, it follows that
$$
\liminf_{k\to\infty} a_{2k}\ge L.
$$
Therefore
$$
\lim_{k\to\infty} a_{2k}=L.
$$
Both the odd and even subsequences converge to the same limit $L$, so the full sequence $\{a_n\}$ converges.
::

::ProblemBlock{number=2}
#problem
Let $f:\mathbb{R}^1\to\mathbb{R}^1$ be a continuous function. Assume that $f'(t)$ exists for all $t\in\mathbb{R}^1$. In general, $f'(t)$ does not have to be continuous. However, prove that the intermediate value property for $f'$ holds, that is, the range of $f'$ is connected.

#proof
We prove that $f'$ has the intermediate value property. Let $x<y$ and let $\lambda$ be a real number strictly between $f'(x)$ and $f'(y)$. We must show that there exists $c\in(x,y)$ such that
$$
f'(c)=\lambda.
$$

Define
$$
g(t)=f(t)-\lambda t.
$$
Then $g$ is continuous on $[x,y]$, differentiable on $(x,y)$, and
$$
g'(t)=f'(t)-\lambda.
$$

If $f'(x)<\lambda<f'(y)$, then
$$
g'(x)<0<g'(y).
$$
Since $g'(x)<0$, for sufficiently small $h>0$ we have
$$
g(x+h)<g(x),
$$
so $x$ cannot be a point where $g$ attains its minimum on $[x,y]$. Since $g'(y)>0$, for sufficiently small $h<0$ we have
$$
g(y+h)<g(y),
$$
so $y$ cannot be a point where $g$ attains its minimum. By compactness, $g$ attains a minimum on $[x,y]$, and the preceding argument shows that this minimum is attained at some interior point $c\in(x,y)$. By Fermat's theorem,
$$
g'(c)=0.
$$
Thus
$$
f'(c)-\lambda=0,
$$
so
$$
f'(c)=\lambda.
$$

If $f'(y)<\lambda<f'(x)$, the same argument is applied to a maximum of $g$ on $[x,y]$: now $g'(x)>0>g'(y)$, so neither endpoint can be the maximum, and Fermat's theorem again gives an interior point $c$ with $g'(c)=0$.

Therefore every value between $f'(x)$ and $f'(y)$ is also a value of $f'$. Hence the range of $f'$ is an interval, possibly a point or an unbounded interval, and is therefore connected.
::

::ProblemBlock{number=3}
#problem
Let $f(t)$ be a real-valued function that is continuous on $[0,1]$ and differentiable on $(0,1)$. Assume that $f(0)=0$ and
$$
|f'(t)|\le |f(t)|
$$
for all $t\in(0,1)$. Prove that $f(t)\equiv 0$.

#proof
Fix any $c\in(0,1)$. Let
$$
M=\max_{0\le t\le c}|f(t)|.
$$
The maximum exists because $f$ is continuous on the compact interval $[0,c]$.

We claim that $M=0$. Suppose instead that $M>0$. Choose $x\in[0,c]$ such that
$$
|f(x)|=M.
$$
Since $f(0)=0$ and $M>0$, we must have $x>0$. By the mean value theorem applied to $f$ on $[0,x]$, there exists $\xi\in(0,x)$ such that
$$
f(x)-f(0)=f'(\xi)x.
$$
Therefore
$$
M=|f(x)|=|f'(\xi)|x.
$$
Using the hypothesis,
$$
M\le x|f(\xi)|.
$$
Since $0<\xi<x\le c$, we have $|f(\xi)|\le M$ and $x\le c$. Hence
$$
M\le cM.
$$
But $0<c<1$ and $M>0$, so $M\le cM<M$, a contradiction.

Thus $M=0$. Hence $f(t)=0$ for all $t\in[0,c]$. Since $c\in(0,1)$ was arbitrary, $f(t)=0$ for all $t\in[0,1)$. Finally, continuity at $1$ gives
$$
f(1)=\lim_{t\to 1^-}f(t)=0.
$$
Therefore $f(t)\equiv 0$ on $[0,1]$.
::

::ProblemBlock{number=4}
#problem
Find, with justification, the value of the integral
$$
\lim_{n\to\infty}\int_1^\infty \frac{n\sin(x^2/n)}{x^4}\,dx.
$$

#proof
For each fixed $x\ge 1$,
$$
\lim_{n\to\infty}\frac{n\sin(x^2/n)}{x^4}
=\frac{1}{x^4}\lim_{n\to\infty} n\sin(x^2/n).
$$
Since
$$
\sin u\sim u
$$
as $u\to 0$, with $u=x^2/n$, we have
$$
n\sin(x^2/n)\to x^2.
$$
Thus the pointwise limit is
$$
\frac{x^2}{x^4}=\frac{1}{x^2}.
$$

We justify passing the limit through the integral. Since $|\sin u|\le |u|$ for all real $u$,
$$
\left|\frac{n\sin(x^2/n)}{x^4}\right|
\le \frac{n(x^2/n)}{x^4}
=\frac{1}{x^2}.
$$
The function $1/x^2$ is integrable on $[1,\infty)$. Therefore, by the dominated convergence theorem,
$$
\lim_{n\to\infty}\int_1^\infty \frac{n\sin(x^2/n)}{x^4}\,dx
=\int_1^\infty \frac{1}{x^2}\,dx.
$$
Finally,
$$
\int_1^\infty \frac{1}{x^2}\,dx
=\left[-\frac{1}{x}\right]_1^\infty
=1.
$$
Therefore the value of the limit is $1$.
::

::ProblemBlock{number=5}
#problem
Let $\{a_n\}$ be a sequence of real numbers. Prove that the sequence of functions $\{f_n\}$, $f_n:[0,1]\to\mathbb{R}$, defined by
$$
f_n(x)=\int_0^x e^{1+t^4}\sin^2(a_nt^5)\,dt
$$
has a subsequence that converges uniformly on $[0,1]$.

#proof
We use the Arzela-Ascoli theorem.

First, the functions $f_n$ are uniformly bounded. Since
$$
0\le \sin^2(a_nt^5)\le 1
$$
and
$$
e^{1+t^4}\le e^2
$$
for $t\in[0,1]$, we have
$$
0\le f_n(x)
\le \int_0^x e^{1+t^4}\,dt
\le \int_0^1 e^2\,dt
=e^2.
$$
Thus
$$
|f_n(x)|\le e^2
$$
for all $n$ and all $x\in[0,1]$.

Next, the functions $f_n$ are equicontinuous. If $x,y\in[0,1]$ and, without loss of generality, $x<y$, then
$$
|f_n(y)-f_n(x)|
=\left|\int_x^y e^{1+t^4}\sin^2(a_nt^5)\,dt\right|
\le \int_x^y e^2\,dt
=e^2|y-x|.
$$
This bound is independent of $n$, so the family $\{f_n\}$ is equicontinuous.

The interval $[0,1]$ is compact. Therefore, by the Arzela-Ascoli theorem, every uniformly bounded and equicontinuous sequence of real-valued functions on $[0,1]$ has a uniformly convergent subsequence. Hence $\{f_n\}$ has a subsequence that converges uniformly on $[0,1]$.
::

::ProblemBlock{number=6}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** Let $\{K_\alpha\}$ be a family of connected subsets of a metric space $M$ such that any two sets from the family have nonempty intersection. Prove that the union
$$
\bigcup_\alpha K_\alpha
$$
is connected.

<span style="display:inline-block; width:1em;"></span> **(b)** Let $\{K_\alpha\}$ be a family of path connected subsets of a metric space $M$ such that any two sets from the family have nonempty intersection. Is it true that the union
$$
\bigcup_\alpha K_\alpha
$$
is path connected?

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Let
$$
K=\bigcup_\alpha K_\alpha.
$$
Suppose, for contradiction, that $K$ is disconnected. Then there exist disjoint nonempty sets $A$ and $B$, separated in the relative topology of $K$, such that
$$
K=A\cup B.
$$
For each $\alpha$, the set $K_\alpha$ is connected and is contained in $K=A\cup B$. Therefore $K_\alpha$ must be contained entirely in $A$ or entirely in $B$.

Choose one index $\alpha_0$. Without loss of generality, suppose
$$
K_{\alpha_0}\subset A.
$$
Now take any $\beta$. By hypothesis,
$$
K_{\alpha_0}\cap K_\beta\neq\emptyset.
$$
Since $K_{\alpha_0}\subset A$, the set $K_\beta$ meets $A$. But $K_\beta$ is connected and must lie entirely in either $A$ or $B$. Since it meets $A$, it cannot lie in $B$. Hence
$$
K_\beta\subset A.
$$
Because $\beta$ was arbitrary, every $K_\beta$ is contained in $A$. Hence
$$
K=\bigcup_\beta K_\beta\subset A,
$$
which contradicts the fact that $B$ is nonempty. Therefore $K$ is connected.

<span style="display:inline-block; width:1em;"></span> **(b)** Yes, the union is path connected.

Let
$$
K=\bigcup_\alpha K_\alpha.
$$
Take any two points $p,q\in K$. Then there exist indices $\alpha$ and $\beta$ such that
$$
p\in K_\alpha,
\qquad
q\in K_\beta.
$$
By hypothesis,
$$
K_\alpha\cap K_\beta\neq\emptyset.
$$
Choose a point
$$
r\in K_\alpha\cap K_\beta.
$$
Since $K_\alpha$ is path connected, there is a path in $K_\alpha$ from $p$ to $r$. Since $K_\beta$ is path connected, there is a path in $K_\beta$ from $r$ to $q$. Concatenating these two paths gives a path from $p$ to $q$ lying entirely in
$$
K_\alpha\cup K_\beta\subset K.
$$
Thus any two points of $K$ can be joined by a path in $K$, so $K$ is path connected.
::

::ProblemBlock{number=7}
#problem
Let $M$ be a compact metric space, and let $\epsilon>0$. Show that there exists $n\in\mathbb{N}$ such that every set of $n$ distinct points in $M$ contains at least two points with distance between them less than $\epsilon$.

#proof
Because $M$ is compact, the open cover
$$
\{B(x,\epsilon/2):x\in M\}
$$
has a finite subcover. Thus there exist points $x_1,\dots,x_N\in M$ such that
$$
M\subset \bigcup_{j=1}^N B(x_j,\epsilon/2).
$$
Set
$$
n=N+1.
$$
Now take any set of $n$ distinct points in $M$. Since these $n=N+1$ points are covered by only $N$ balls, the pigeonhole principle implies that two of the points, say $p$ and $q$, lie in the same ball $B(x_j,\epsilon/2)$.

Therefore
$$
d(p,q)\le d(p,x_j)+d(x_j,q)<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon.
$$
Hence every set of $n$ distinct points in $M$ contains at least two points whose distance is less than $\epsilon$.
::

::ProblemBlock{number=8}
#problem
Let $U\subset\mathbb{R}^2$ be the region enclosed by the curve
$$
\gamma(t)=(3t^2-t^3,6t-2t^2),\qquad t\in[0,3].
$$
Find the area of $U$.

#proof
Write
$$
x(t)=3t^2-t^3,
\qquad
 y(t)=6t-2t^2.
$$
The curve starts and ends at the origin:
$$
\gamma(0)=\gamma(3)=(0,0).
$$
For $0<t<3$, we have
$$
y(t)=2t(3-t)>0
$$
and
$$
\frac{x(t)}{y(t)}=\frac{t}{2}.
$$
Thus the curve is one-to-one on $(0,3)$, so it is a simple closed curve except for the common endpoint. The area is the absolute value of the signed area
$$
\frac12\int_0^3 \bigl(x(t)y'(t)-y(t)x'(t)\bigr)\,dt.
$$

We compute
$$
x'(t)=6t-3t^2,
\qquad
 y'(t)=6-4t.
$$
Therefore
$$
x(t)y'(t)-y(t)x'(t)
=(3t^2-t^3)(6-4t)-(6t-2t^2)(6t-3t^2).
$$
Expanding,
$$
x(t)y'(t)-y(t)x'(t)
=-2t^4+12t^3-18t^2.
$$
Hence the signed area is
$$
\frac12\int_0^3(-2t^4+12t^3-18t^2)\,dt.
$$
Thus
$$
\frac12\int_0^3(-2t^4+12t^3-18t^2)\,dt
=\left[-\frac{t^5}{5}+\frac{3t^4}{2}-3t^3\right]_0^3
=-\frac{81}{10}.
$$
The negative sign means the curve is oriented clockwise. Therefore the area is
$\frac{81}{10}$.
::

::ProblemBlock{number=9}
#problem
Let $f:\mathbb{R}^2\to\mathbb{R}^1$ be a continuous function, and consider the function $F:\mathbb{R}^2\to\mathbb{R}^1$ given by
$$
F(x,y)=\int_{D_{x,y}} f(u,v)\,du\,dv,
\qquad
D_{x,y}=\{(u,v)\in\mathbb{R}^2\mid u^2+v^2\le x^2+y^2\}.
$$
Is $F(x,y)$ differentiable? If yes, find the differential $DF$.

#proof
Yes, $F$ is differentiable everywhere.

Let
$$
r=\sqrt{x^2+y^2}.
$$
The set $D_{x,y}$ is the closed disk centered at the origin with radius $r$. In polar coordinates,
$$
F(x,y)=\int_0^r\int_0^{2\pi} f(\rho\cos\theta,\rho\sin\theta)\rho\,d\theta\,d\rho.
$$
Define
$$
\Phi(r)=\int_0^{2\pi} f(r\cos\theta,r\sin\theta)\,d\theta.
$$
Since $f$ is continuous, $\Phi$ is continuous. Therefore the one-variable function
$$
A(r)=\int_0^r \rho\Phi(\rho)\,d\rho
$$
is differentiable and
$$
A'(r)=r\Phi(r).
$$
For $(x,y)\neq(0,0)$, the chain rule gives
$$
\frac{\partial F}{\partial x}(x,y)
=A'(r)\frac{x}{r}
=x\Phi(r),
$$
and similarly
$$
\frac{\partial F}{\partial y}(x,y)
=A'(r)\frac{y}{r}
=y\Phi(r).
$$
Thus, for $(x,y)\neq(0,0)$,
$$
DF_{(x,y)}(h,k)
=\Phi(r)(xh+yk),
$$
where
$$
\Phi(r)=\int_0^{2\pi} f(r\cos\theta,r\sin\theta)\,d\theta.
$$
Equivalently,
$$
\nabla F(x,y)
=\left(
 x\int_0^{2\pi} f(r\cos\theta,r\sin\theta)\,d\theta,
 y\int_0^{2\pi} f(r\cos\theta,r\sin\theta)\,d\theta
\right).
$$

It remains to check differentiability at the origin. Since $f$ is continuous, it is bounded on some disk centered at the origin. Thus for small $(x,y)$, with $r=\sqrt{x^2+y^2}$,
$$
|F(x,y)|
\le \pi r^2 \sup_{u^2+v^2\le r^2}|f(u,v)|.
$$
Hence
$$
\frac{|F(x,y)-F(0,0)|}{\sqrt{x^2+y^2}}
\le \pi r\sup_{u^2+v^2\le r^2}|f(u,v)|\to 0
$$
as $(x,y)\to(0,0)$. Therefore $F$ is differentiable at $(0,0)$ and
$$
DF_{(0,0)}=0.
$$

Combining the cases,
$$
DF_{(x,y)}(h,k)
=
\begin{cases}
\displaystyle (xh+yk)\int_0^{2\pi} f(r\cos\theta,r\sin\theta)\,d\theta,
& r=\sqrt{x^2+y^2}>0,\\
0,& (x,y)=(0,0).
\end{cases}
$$
::
