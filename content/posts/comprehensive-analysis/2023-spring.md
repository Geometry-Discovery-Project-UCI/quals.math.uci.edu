# 2023 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $A$ be an infinite closed subset of $\mathbb R^n$. Show that there exists a countable set whose closure is $A$.

#proof
Let $\mathcal B$ be the collection of all open balls in $\mathbb R^n$ whose centers have rational coordinates and whose radii are positive rational numbers. Since $\mathbb Q^n$ is countable and $\mathbb Q_{>0}$ is countable, the collection $\mathcal B$ is countable.

For each ball $B\in \mathcal B$ such that $B\cap A\neq \varnothing$, choose one point $x_B\in B\cap A$. Define
$$
D=\{x_B:B\in \mathcal B,\ B\cap A\neq \varnothing\}.
$$
Then $D$ is countable, because it is indexed by a subcollection of the countable set $\mathcal B$. Also $D\subset A$, and since $A$ is closed, we have
$$
\overline D\subset A.
$$
It remains to show that $A\subset \overline D$.

Let $a\in A$ and let $\varepsilon>0$. Choose $q\in \mathbb Q^n$ such that
$$
|q-a|<\frac{\varepsilon}{4}.
$$
Then choose a rational number $r>0$ such that
$$
|q-a|<r<\frac{\varepsilon}{2}.
$$
The ball $B(q,r)$ belongs to $\mathcal B$, and it intersects $A$ because $a\in A\cap B(q,r)$. Hence the construction gives a point $x_{B(q,r)}\in D\cap B(q,r)$. Therefore
$$
|x_{B(q,r)}-a|\le |x_{B(q,r)}-q|+|q-a|<r+\frac{\varepsilon}{4}<\frac{3\varepsilon}{4}<\varepsilon.
$$
Thus every neighborhood of $a$ contains a point of $D$, so $a\in \overline D$. Hence
$$
A\subset \overline D.
$$
Combining the two inclusions, we obtain
$$
\overline D=A.
$$
Therefore there exists a countable set whose closure is $A$.
::

::ProblemBlock{number=2}
#problem
Consider the sequence recursively defined by
$$
x_{n+1}=\frac{x_n^2+1}{2},\qquad n\ge 1,
$$
with
$$
x_1=0.
$$
Show that $\{x_n\}_{n\in\mathbb N}$ converges and determine its limit.

#proof
We first show that $0\le x_n<1$ for all $n\in\mathbb N$. This is true for $n=1$, since $x_1=0$. If $0\le x_n<1$, then
$$
0<\frac{x_n^2+1}{2}<1,
$$
so $0<x_{n+1}<1$. Thus by induction,
$$
0\le x_n<1
$$
for all $n$.

Next,
$$
x_{n+1}-x_n=\frac{x_n^2+1}{2}-x_n
=\frac{x_n^2-2x_n+1}{2}
=\frac{(1-x_n)^2}{2}\ge 0.
$$
Hence $\{x_n\}$ is increasing. Since it is increasing and bounded above by $1$, it converges. Let
$$
\lim_{n\to\infty}x_n=L.
$$
Passing to the limit in the recurrence gives
$$
L=\frac{L^2+1}{2}.
$$
Therefore
$$
2L=L^2+1,
$$
so
$$
(L-1)^2=0.
$$
Thus
$$
L=1.
$$
Therefore $\{x_n\}$ converges, and its limit is
$1$.
::

::ProblemBlock{number=3}
#problem
Show that the sum
$$
\sum_{n\in\mathbb N}\frac{n^2}{n^4+x^4}
$$
converges uniformly on $[-2,2]$ to a continuous function denoted by $f$. Give a formula for $f'(x)$ and prove that your formula is correct.

#proof
For $x\in [-2,2]$, we have
$$
0\le \frac{n^2}{n^4+x^4}\le \frac{n^2}{n^4}=\frac{1}{n^2}.
$$
Since
$$
\sum_{n=1}^{\infty}\frac{1}{n^2}
$$
converges, the Weierstrass $M$-test implies that
$$
\sum_{n=1}^{\infty}\frac{n^2}{n^4+x^4}
$$
converges uniformly on $[-2,2]$. Each function
$$
u_n(x)=\frac{n^2}{n^4+x^4}
$$
is continuous on $[-2,2]$. Therefore the uniform limit
$$
f(x)=\sum_{n=1}^{\infty}\frac{n^2}{n^4+x^4}
$$
is continuous on $[-2,2]$.

Now compute the derivative of each term:
$$
u_n'(x)=\frac{d}{dx}\left(\frac{n^2}{n^4+x^4}\right)
=-\frac{4n^2x^3}{(n^4+x^4)^2}.
$$
For $x\in [-2,2]$,
$$
|u_n'(x)|
=\frac{4n^2|x|^3}{(n^4+x^4)^2}
\le \frac{4n^2\cdot 8}{n^8}
=\frac{32}{n^6}.
$$
Since
$$
\sum_{n=1}^{\infty}\frac{32}{n^6}
$$
converges, the Weierstrass $M$-test implies that the derivative series
$$
\sum_{n=1}^{\infty}u_n'(x)
$$
converges uniformly on $[-2,2]$.

Also, the original series converges at $x=0$, since
$$
\sum_{n=1}^{\infty}u_n(0)=\sum_{n=1}^{\infty}\frac{1}{n^2}<\infty.
$$
By the theorem on term-by-term differentiation of a series of continuously differentiable functions, the sum $f$ is differentiable on $[-2,2]$ in the sense of one-sided derivatives at the endpoints and ordinary derivatives in the interior, and for $x\in (-2,2)$,
$$
f'(x)=\sum_{n=1}^{\infty}u_n'(x).
$$
Thus
$$
\boxed{
f'(x)=\sum_{n=1}^{\infty}-\frac{4n^2x^3}{(n^4+x^4)^2}
}
$$
for $x\in (-2,2)$. The uniform convergence of the derivative series is exactly what justifies differentiating the series term by term.
::

::ProblemBlock{number=4}
#problem
Let $f,g:[0,1]\to [0,\infty)$ be continuous functions satisfying
$$
\sup_{0\le x\le 1}f(x)=\sup_{0\le x\le 1}g(x).
$$
Prove that there exists $x_0\in [0,1]$ such that
$$
f(x_0)=g(x_0).
$$

#proof
Let
$$
M=\sup_{0\le x\le 1}f(x)=\sup_{0\le x\le 1}g(x).
$$
Since $f$ and $g$ are continuous on the compact interval $[0,1]$, both functions attain their maximum values. Thus there exist $a,b\in [0,1]$ such that
$$
f(a)=M
$$
and
$$
g(b)=M.
$$

Assume, for contradiction, that there is no $x_0\in [0,1]$ such that $f(x_0)=g(x_0)$. Then the continuous function
$$
h(x)=f(x)-g(x)
$$
has no zero on $[0,1]$. Since $[0,1]$ is connected and $h$ is continuous, $h$ must have one sign everywhere. Hence either
$$
f(x)>g(x)\qquad \text{for all }x\in [0,1],
$$
or
$$
f(x)<g(x)\qquad \text{for all }x\in [0,1].
$$

If $f(x)>g(x)$ for all $x$, then at the point $b$ where $g(b)=M$, we get
$$
f(b)>g(b)=M,
$$
which contradicts $\sup f=M$.

If $f(x)<g(x)$ for all $x$, then at the point $a$ where $f(a)=M$, we get
$$
g(a)>f(a)=M,
$$
which contradicts $\sup g=M$.

Both cases are impossible. Therefore there must exist $x_0\in [0,1]$ such that
$$
f(x_0)=g(x_0).
$$
::

::ProblemBlock{number=5}
#problem
Let $\{b_n\}$ be a monotonic increasing sequence of positive numbers and suppose
$$
\lim_{n\to\infty}b_n=+\infty.
$$
Show that, if
$$
\sum_{n=1}^{\infty}a_n
$$
converges, then
$$
\lim_{n\to\infty}\frac{a_1b_1+\cdots+a_nb_n}{b_n}=0.
$$

#proof
Since $\sum_{n=1}^{\infty}a_n$ converges, the tails
$$
r_k=\sum_{j=k}^{\infty}a_j
$$
are well-defined and satisfy
$$
r_k\to 0.
$$
Also,
$$
a_k=r_k-r_{k+1}.
$$
Therefore
$$
\sum_{k=1}^n a_kb_k
=\sum_{k=1}^n b_k(r_k-r_{k+1}).
$$
Using summation by parts, we get
$$
\sum_{k=1}^n b_k(r_k-r_{k+1})
=b_1r_1+\sum_{k=2}^n (b_k-b_{k-1})r_k-b_nr_{n+1}.
$$
Hence
$$
\frac{\sum_{k=1}^n a_kb_k}{b_n}
=\frac{b_1r_1}{b_n}
+\frac{1}{b_n}\sum_{k=2}^n (b_k-b_{k-1})r_k
-r_{n+1}.
$$

We estimate the three terms. Since $b_n\to\infty$,
$$
\frac{b_1r_1}{b_n}\to 0.
$$
Also,
$$
r_{n+1}\to 0.
$$
It remains to handle the middle term.

Let $\varepsilon>0$. Since $r_k\to 0$, choose $N$ such that
$$
|r_k|<\varepsilon
$$
for all $k\ge N$. Then for $n\ge N$,
$$
\left|\frac{1}{b_n}\sum_{k=2}^n (b_k-b_{k-1})r_k\right|
\le
\frac{1}{b_n}\sum_{k=2}^{N-1}(b_k-b_{k-1})|r_k|
+\frac{\varepsilon}{b_n}\sum_{k=N}^n(b_k-b_{k-1}).
$$
The first term on the right tends to $0$ because it has a fixed numerator and $b_n\to\infty$. For the second term,
$$
\sum_{k=N}^n(b_k-b_{k-1})=b_n-b_{N-1}\le b_n,
$$
so it is at most $\varepsilon$. Therefore the middle term tends to $0$.

Thus all three terms tend to $0$, and we conclude that
$$
\lim_{n\to\infty}\frac{a_1b_1+\cdots+a_nb_n}{b_n}=0.
$$
::

::ProblemBlock{number=6}
#problem
Let $f$ be a real-valued continuous function on $[0,1]$ that is differentiable on $(0,1)$. Assume
$$
\sup_{0<x<1}|f'(x)|=M<\infty.
$$
Show that for all $n\in\mathbb N$,
$$
\left|
\frac{1}{n}\sum_{j=0}^{n-1}f(j/n)-\int_0^1 f(x)\,dx
\right|
\le \frac{M}{n}.
$$

#proof
For each $j=0,1,\dots,n-1$, write
$$
I_j=\left[\frac{j}{n},\frac{j+1}{n}\right].
$$
Then
$$
\frac{1}{n}\sum_{j=0}^{n-1}f(j/n)-\int_0^1 f(x)\,dx
=
\sum_{j=0}^{n-1}\int_{j/n}^{(j+1)/n}\left(f(j/n)-f(x)\right)\,dx.
$$
For $x\in I_j$, the mean value theorem gives
$$
|f(x)-f(j/n)|\le M\left|x-\frac{j}{n}\right|.
$$
Therefore
$$
\left|\int_{j/n}^{(j+1)/n}\left(f(j/n)-f(x)\right)\,dx\right|
\le
\int_{j/n}^{(j+1)/n}M\left(x-\frac{j}{n}\right)\,dx.
$$
The integral on the right is
$$
M\int_{j/n}^{(j+1)/n}\left(x-\frac{j}{n}\right)\,dx
=\frac{M}{2n^2}.
$$
Summing over $j=0,1,\dots,n-1$, we obtain
$$
\left|
\frac{1}{n}\sum_{j=0}^{n-1}f(j/n)-\int_0^1 f(x)\,dx
\right|
\le
n\cdot \frac{M}{2n^2}
=
\frac{M}{2n}
\le \frac{M}{n}.
$$
This proves the desired estimate.
::

::ProblemBlock{number=7}
#problem
Suppose $f:\mathbb R\to \mathbb R$ is continuous at $x=0$ and satisfies
$$
\lim_{x\to 0}\frac{f(2x)-f(x)}{x}=m.
$$
Show that
$$
f'(0)=m.
$$

#proof
Define, for $y\neq 0$,
$$
q(y)=\frac{f(2y)-f(y)}{y}.
$$
By assumption,
$$
q(y)\to m
$$
as $y\to 0$.

For $x\neq 0$, use a dyadic telescoping sum:
$$
f(x)-f(0)=\sum_{k=0}^{\infty}\left(f\left(\frac{x}{2^k}\right)-f\left(\frac{x}{2^{k+1}}\right)\right).
$$
This identity holds because the finite partial sums telescope to
$$
f(x)-f\left(\frac{x}{2^N}\right),
$$
and $f(x/2^N)\to f(0)$ by continuity at $0$.

Now set
$$
y=\frac{x}{2^{k+1}}.
$$
Then
$$
f\left(\frac{x}{2^k}\right)-f\left(\frac{x}{2^{k+1}}\right)
=f(2y)-f(y)=yq(y).
$$
Thus
$$
\frac{f(x)-f(0)}{x}
=\sum_{k=0}^{\infty}\frac{1}{2^{k+1}}q\left(\frac{x}{2^{k+1}}\right).
$$
Subtracting $m$ gives
$$
\frac{f(x)-f(0)}{x}-m
=\sum_{k=0}^{\infty}\frac{1}{2^{k+1}}\left(q\left(\frac{x}{2^{k+1}}\right)-m\right).
$$

Let $\varepsilon>0$. Since $q(y)\to m$ as $y\to 0$, choose $\delta>0$ such that
$$
|q(y)-m|<\varepsilon
$$
whenever $0<|y|<\delta$. If $0<|x|<\delta$, then for every $k\ge 0$,
$$
0<\left|\frac{x}{2^{k+1}}\right|<\delta.
$$
Therefore
$$
\left|\frac{f(x)-f(0)}{x}-m\right|
\le
\sum_{k=0}^{\infty}\frac{1}{2^{k+1}}\varepsilon
=\varepsilon.
$$
Hence
$$
\lim_{x\to 0}\frac{f(x)-f(0)}{x}=m.
$$
Therefore $f'(0)$ exists and
$$
f'(0)=m.
$$
::

::ProblemBlock{number=8}
#problem
Let $f,g:\mathbb R\to\mathbb R$ be smooth functions with
$$
f(0)=0
$$
and
$$
f'(0)\neq 0.
$$
Consider the equation
$$
f(x)=tg(x),\qquad t\in\mathbb R.
$$
Show that there exists $\varepsilon>0$ such that on the interval $|t|<\varepsilon$, there is a unique smooth solution $x(t)$ to the above equation with $x(0)=0$. Then calculate $x'(0)$ and $x''(0)$.

#proof
Define
$$
F(x,t)=f(x)-tg(x).
$$
Then
$$
F(0,0)=f(0)-0\cdot g(0)=0.
$$
Also,
$$
F_x(x,t)=f'(x)-tg'(x),
$$
so
$$
F_x(0,0)=f'(0)\neq 0.
$$
By the implicit function theorem, there exists $\varepsilon>0$ and a unique smooth function $x(t)$ defined for $|t|<\varepsilon$ such that
$$
x(0)=0
$$
and
$$
F(x(t),t)=0.
$$
Equivalently,
$$
f(x(t))=tg(x(t)).
$$

Now differentiate
$$
f(x(t))=tg(x(t))
$$
with respect to $t$. We get
$$
f'(x(t))x'(t)=g(x(t))+tg'(x(t))x'(t).
$$
Setting $t=0$ and using $x(0)=0$, we obtain
$$
f'(0)x'(0)=g(0).
$$
Hence
$$
\boxed{x'(0)=\frac{g(0)}{f'(0)}}.
$$

To compute $x''(0)$, it is convenient to differentiate the equation
$$
\left(f'(x(t))-tg'(x(t))\right)x'(t)-g(x(t))=0.
$$
Differentiating once more gives
$$
\left(f''(x(t))-tg''(x(t))\right)(x'(t))^2
+\left(f'(x(t))-tg'(x(t))\right)x''(t)
-2g'(x(t))x'(t)=0.
$$
Set $t=0$ and use $x(0)=0$. Then
$$
f''(0)(x'(0))^2+f'(0)x''(0)-2g'(0)x'(0)=0.
$$
Therefore
$$
x''(0)=\frac{2g'(0)x'(0)-f''(0)(x'(0))^2}{f'(0)}.
$$
Substituting
$$
x'(0)=\frac{g(0)}{f'(0)},
$$
we get
$$
\boxed{
x''(0)=\frac{2g'(0)g(0)}{(f'(0))^2}-\frac{f''(0)(g(0))^2}{(f'(0))^3}
}.
$$
::

::ProblemBlock{number=9}
#problem
Compute the volume of the balls
$$
B_n(r)=\{x\in\mathbb R^n:x_1^2+x_2^2+\cdots+x_n^2\le r^2\},
$$
for $n=3$ and $n=4$.

#proof
For $n=3$, the ball $B_3(r)$ is the usual ball of radius $r$ in $\mathbb R^3$. Using spherical coordinates,
$$
dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta,
$$
where
$$
0\le \rho\le r,
\qquad
0\le \phi\le \pi,
\qquad
0\le \theta\le 2\pi.
$$
Thus
$$
\operatorname{Vol}(B_3(r))
=\int_0^{2\pi}\int_0^{\pi}\int_0^r \rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
$$
Therefore
$$
\operatorname{Vol}(B_3(r))
=\left(2\pi\right)\left(2\right)\left(\frac{r^3}{3}\right)
=\frac{4\pi r^3}{3}.
$$

For $n=4$, slice the $4$-dimensional ball by fixing the fourth coordinate, say $x_4=t$. For each $t\in[-r,r]$, the slice is a $3$-dimensional ball of radius
$$
\sqrt{r^2-t^2}.
$$
Hence
$$
\operatorname{Vol}(B_4(r))
=\int_{-r}^{r}\operatorname{Vol}\left(B_3\left(\sqrt{r^2-t^2}\right)\right)\,dt.
$$
Using the formula for $B_3$, we get
$$
\operatorname{Vol}(B_4(r))
=\int_{-r}^{r}\frac{4\pi}{3}(r^2-t^2)^{3/2}\,dt.
$$
Now substitute
$$
t=r\sin\theta,
$$
so that
$$
dt=r\cos\theta\,d\theta.
$$
As $t$ runs from $-r$ to $r$, $\theta$ runs from $-\pi/2$ to $\pi/2$. Thus
$$
\int_{-r}^{r}(r^2-t^2)^{3/2}\,dt
=r^4\int_{-\pi/2}^{\pi/2}\cos^4\theta\,d\theta.
$$
Since
$$
\int_{-\pi/2}^{\pi/2}\cos^4\theta\,d\theta=\frac{3\pi}{8},
$$
we obtain
$$
\int_{-r}^{r}(r^2-t^2)^{3/2}\,dt
=\frac{3\pi r^4}{8}.
$$
Therefore
$$
\operatorname{Vol}(B_4(r))
=\frac{4\pi}{3}\cdot \frac{3\pi r^4}{8}
=\frac{\pi^2r^4}{2}.
$$
Thus
$$
\boxed{\operatorname{Vol}(B_3(r))=\frac{4\pi r^3}{3}}
$$
and
$$
\boxed{\operatorname{Vol}(B_4(r))=\frac{\pi^2r^4}{2}}.
$$
::