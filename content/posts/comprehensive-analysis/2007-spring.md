# 2007 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Suppose $a_n>0$, and $\sum_{n=1}^{\infty} a_n$ diverges. Show that
$$
\sum_{n=1}^{\infty} \frac{a_n}{1+a_n}
$$
diverges.

#proof
We split into two cases.

First, suppose that $a_n\ge 1$ for infinitely many $n$. For each such $n$,
$$
\frac{a_n}{1+a_n}\ge \frac{1}{2}.
$$
Hence the terms of the series $\sum a_n/(1+a_n)$ do not even tend to $0$ along this subsequence, so the series diverges.

Second, suppose that $a_n<1$ for all sufficiently large $n$. Then for all sufficiently large $n$,
$$
1+a_n<2,
$$
and therefore
$$
\frac{a_n}{1+a_n}>\frac{a_n}{2}.
$$
Since $\sum a_n$ diverges, its tail also diverges. By comparison,
$$
\sum_{n=1}^{\infty} \frac{a_n}{1+a_n}
$$
diverges.

Thus in all cases $\sum a_n/(1+a_n)$ diverges.
::

::ProblemBlock{number=2}
#problem
Let $(a,b)$ be a nonempty open set in $\mathbb{R}$, and let $f$ be a function on $(a,b)$. Show that the following two definitions are equivalent:

<span style="display:inline-block; width:1em;"></span> **(a)** Let $x_0\in(a,b)$. The function $f$ is continuous at $x_0$ if for every $\varepsilon>0$ there exists $\delta>0$ such that for any $y\in(x_0-\delta,x_0+\delta)\cap(a,b)$,
$$
|f(y)-f(x_0)|<\varepsilon.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Let $x_0\in(a,b)$. The function $f$ is continuous at $x_0$ if for any sequence $\{y_n\}_{n=1}^{\infty}\subset(a,b)$ satisfying $\lim_{n\to\infty}y_n=x_0$, we have
$$
\lim_{n\to\infty} f(y_n)=f(x_0).
$$

#proof
We prove both implications.

<span style="display:inline-block; width:1em;"></span> **(a)** $\Rightarrow$ **(b)**. Assume $f$ is continuous at $x_0$ in the $\varepsilon$-$\delta$ sense. Let $\{y_n\}\subset(a,b)$ and suppose $y_n\to x_0$. Given $\varepsilon>0$, choose $\delta>0$ such that
$$
|y-x_0|<\delta \quad \Longrightarrow \quad |f(y)-f(x_0)|<\varepsilon.
$$
Since $y_n\to x_0$, there exists $N$ such that for all $n\ge N$,
$$
|y_n-x_0|<\delta.
$$
Therefore, for all $n\ge N$,
$$
|f(y_n)-f(x_0)|<\varepsilon.
$$
Thus $f(y_n)\to f(x_0)$.

<span style="display:inline-block; width:1em;"></span> **(b)** $\Rightarrow$ **(a)**. Assume the sequential condition holds. We prove the $\varepsilon$-$\delta$ condition by contradiction. Suppose $f$ is not continuous at $x_0$ in the $\varepsilon$-$\delta$ sense. Then there exists $\varepsilon_0>0$ such that for every $\delta>0$, there exists $y\in(a,b)$ with
$$
|y-x_0|<\delta
$$
and
$$
|f(y)-f(x_0)|\ge \varepsilon_0.
$$
For each $n\in\mathbb{N}$, choose $y_n\in(a,b)$ such that
$$
|y_n-x_0|<\frac{1}{n}
$$
and
$$
|f(y_n)-f(x_0)|\ge \varepsilon_0.
$$
Then $y_n\to x_0$, but $f(y_n)$ does not converge to $f(x_0)$, contradicting the sequential condition.

Therefore the two definitions are equivalent.
::

::ProblemBlock{number=3}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** Carefully state what it means for a sequence $(f_n)_{n\ge 1}$ of real-valued functions defined on an interval $I$ of $\mathbb{R}$ to converge uniformly on $I$.

<span style="display:inline-block; width:1em;"></span> **(b)** Prove or disprove: If $(f_n)_{n\ge 1}$ is a sequence of real-valued functions defined on a metric space $X$, and if this sequence converges uniformly on $X$, then the sequence $(g_n)_{n\ge 1}$, defined by
$$
g_n(x)=\arctan(f_n(x)),
$$
also converges uniformly on $X$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The sequence $(f_n)$ converges uniformly on $I$ to a function $f:I\to\mathbb{R}$ if for every $\varepsilon>0$, there exists $N\in\mathbb{N}$ such that for all $n\ge N$ and all $x\in I$,
$$
|f_n(x)-f(x)|<\varepsilon.
$$
Equivalently,
$$
\sup_{x\in I}|f_n(x)-f(x)|\to 0.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** The statement is true.

Assume $f_n\to f$ uniformly on $X$. Since
$$
\frac{d}{dt}\arctan t=\frac{1}{1+t^2},
$$
the mean value theorem implies that for all real numbers $s,t$,
$$
|\arctan s-\arctan t|\le |s-t|.
$$
Therefore, for every $x\in X$,
$$
|g_n(x)-\arctan(f(x))|
=
|\arctan(f_n(x))-\arctan(f(x))|
\le
|f_n(x)-f(x)|.
$$
Taking suprema over $x\in X$, we get
$$
\sup_{x\in X}|g_n(x)-\arctan(f(x))|
\le
\sup_{x\in X}|f_n(x)-f(x)|.
$$
The right-hand side tends to $0$, so $g_n\to \arctan\circ f$ uniformly on $X$.
::

::ProblemBlock{number=4}
#problem
Let $X$ be a metric space. Prove or disprove:

<span style="display:inline-block; width:1em;"></span> **(a)** The intersection of finitely many dense subsets of $X$ is dense in $X$.

<span style="display:inline-block; width:1em;"></span> **(b)** The intersection of finitely many open dense subsets of $X$ is open and dense in $X$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The statement is false.

Let $X=\mathbb{R}$ with the usual metric. The set $\mathbb{Q}$ of rational numbers is dense in $\mathbb{R}$, and the set $\mathbb{R}\setminus\mathbb{Q}$ of irrational numbers is also dense in $\mathbb{R}$. However,
$$
\mathbb{Q}\cap(\mathbb{R}\setminus\mathbb{Q})=\varnothing,
$$
which is not dense in $\mathbb{R}$. Thus the intersection of finitely many dense subsets need not be dense.

<span style="display:inline-block; width:1em;"></span> **(b)** The statement is true.

Let $G_1,\dots,G_m$ be open dense subsets of $X$. Their intersection
$$
G=\bigcap_{j=1}^m G_j
$$
is open because finite intersections of open sets are open.

It remains to prove that $G$ is dense. Let $U$ be any nonempty open subset of $X$. Since $G_1$ is dense, $U\cap G_1$ is nonempty. Also $U\cap G_1$ is open. Since $G_2$ is dense,
$$
U\cap G_1\cap G_2
$$
is nonempty and open. Continuing inductively, we obtain
$$
U\cap G_1\cap\cdots\cap G_m\neq\varnothing.
$$
Thus every nonempty open set $U$ intersects $G$, so $G$ is dense in $X$.
::

::ProblemBlock{number=5}
#problem
Let $f:\mathbb{R}^{n\times n}\to\mathbb{R}$ be defined through
$$
f(A)=e^{A^2},
$$
where $A$ is an $n\times n$ matrix. Show that $f$ is differentiable and compute its derivative.

#proof
As the statement gives $f:\mathbb{R}^{n\times n}\to\mathbb{R}$, the expression $A^2$ must be interpreted as a scalar. We interpret it as the squared Euclidean, or Frobenius, norm
$$
A^2=\|A\|_F^2=\sum_{i,j}A_{ij}^2.
$$
Thus
$$
f(A)=e^{\|A\|_F^2}.
$$
Let $H\in\mathbb{R}^{n\times n}$. We use the Frobenius inner product
$$
\langle A,H\rangle_F=\sum_{i,j}A_{ij}H_{ij}.
$$
Then
$$
\|A+H\|_F^2
=
\|A\|_F^2+2\langle A,H\rangle_F+\|H\|_F^2.
$$
Therefore
$$
f(A+H)
=
e^{\|A\|_F^2}e^{2\langle A,H\rangle_F+\|H\|_F^2}.
$$
Since $e^s=1+s+o(s)$ as $s\to 0$, and since
$$
2\langle A,H\rangle_F+\|H\|_F^2=O(\|H\|_F),
$$
we get
$$
f(A+H)
=
e^{\|A\|_F^2}
\left(1+2\langle A,H\rangle_F+\|H\|_F^2+o(\|H\|_F)\right).
$$
Hence
$$
f(A+H)-f(A)
=
2e^{\|A\|_F^2}\langle A,H\rangle_F+o(\|H\|_F).
$$
Therefore $f$ is differentiable at $A$, and its derivative is the linear map
$$
Df(A)[H]=2e^{\|A\|_F^2}\langle A,H\rangle_F.
$$
Equivalently, the gradient is
$$
\nabla f(A)=2e^{\|A\|_F^2}A.
$$
::

::ProblemBlock{number=6}
#problem
Let $f$ be a continuous function on $[0,1]$, and let
$$
S_n=\frac{1}{n}\sum_{k=1}^n f\left(\frac{k}{n}\right),
\qquad n=1,2,3,\dots.
$$
Show that:

<span style="display:inline-block; width:1em;"></span> **(a)** $\{S_n\}$ is a convergent sequence.

<span style="display:inline-block; width:1em;"></span> **(b)** $\lim_{n\to\infty}S_n>0$ if $f(x)\ge 0$ for all $x\in[0,1]$, and $f(x_0)>0$ for some $x_0\in[0,1]$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Since $f$ is continuous on the compact interval $[0,1]$, it is Riemann integrable and uniformly continuous.

The number $S_n$ is the right-endpoint Riemann sum for $f$ on the uniform partition
$$
0,\frac{1}{n},\frac{2}{n},\dots,1.
$$
We prove directly that
$$
S_n\to\int_0^1 f(x)\,dx.
$$
Let $\omega(\delta)$ be the modulus of continuity of $f$:
$$
\omega(\delta)=\sup\{|f(x)-f(y)|:x,y\in[0,1], |x-y|\le\delta\}.
$$
Since $f$ is uniformly continuous, $\omega(\delta)\to 0$ as $\delta\to 0^+$.

For $x\in[(k-1)/n,k/n]$, we have
$$
\left|x-\frac{k}{n}\right|\le\frac{1}{n},
$$
so
$$
\left|f(x)-f\left(\frac{k}{n}\right)\right|\le \omega\left(\frac{1}{n}\right).
$$
Therefore
$$
\left|S_n-\int_0^1 f(x)\,dx\right|
\le
\sum_{k=1}^n\int_{(k-1)/n}^{k/n}
\left|f\left(\frac{k}{n}\right)-f(x)\right|\,dx
\le
\omega\left(\frac{1}{n}\right).
$$
The right-hand side tends to $0$. Hence $S_n$ converges, and
$$
\lim_{n\to\infty}S_n=\int_0^1 f(x)\,dx.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Suppose $f(x)\ge 0$ for all $x\in[0,1]$, and $f(x_0)>0$ for some $x_0\in[0,1]$. By continuity, there exists a closed subinterval $J\subset[0,1]$ of positive length and a constant $c>0$ such that
$$
f(x)\ge c
$$
for all $x\in J$.

Hence
$$
\int_0^1 f(x)\,dx
\ge
\int_J f(x)\,dx
\ge
c|J|>0.
$$
From part **(a)**,
$$
\lim_{n\to\infty}S_n=\int_0^1 f(x)\,dx>0.
$$
::

::ProblemBlock{number=7}
#problem
Suppose that $f$ is continuous for $x\ge 0$, $f(0)=0$, $f'(x)$ exists and is monotonically increasing for $x\ge 0$. Show that
$$
g(x)=\frac{f(x)}{x},\qquad x>0,
$$
is monotonically increasing.

#proof
Let $0<a<b$. By the mean value theorem applied to $f$ on $[0,a]$, there exists $c\in(0,a)$ such that
$$
\frac{f(a)-f(0)}{a-0}=f'(c).
$$
Since $f(0)=0$, this gives
$$
\frac{f(a)}{a}=f'(c).
$$
By the mean value theorem applied to $f$ on $[a,b]$, there exists $d\in(a,b)$ such that
$$
\frac{f(b)-f(a)}{b-a}=f'(d).
$$
Because $c<d$ and $f'$ is monotonically increasing,
$$
f'(c)\le f'(d).
$$
Therefore
$$
\frac{f(a)}{a}\le \frac{f(b)-f(a)}{b-a}.
$$
Multiplying by $a(b-a)>0$, we get
$$
(b-a)f(a)\le a(f(b)-f(a)).
$$
Thus
$$
bf(a)\le af(b),
$$
and hence
$$
\frac{f(a)}{a}\le \frac{f(b)}{b}.
$$
Since $0<a<b$ were arbitrary, $g(x)=f(x)/x$ is monotonically increasing on $(0,\infty)$.
::

::ProblemBlock{number=8}
#problem
Consider cubic polynomials of the form
$$
f(x)=x^3+ax^2+bx+c,
$$
where $a,b,c$ are real quantities. Note that when $a=0$, $b=-1$, and $c=0$, the equation $f(x)=0$ has three distinct real solutions, namely $u=1$, $v=-1$, and $w=0$. Use the Inverse Function Theorem to show that when the coefficients $(a,b,c)$ are sufficiently near $(0,-1,0)$, then the solutions $u,v,w$ of the equation
$$
x^3+ax^2+bx+c=0
$$
can be expressed as continuously differentiable functions of the coefficients $a,b,c$.

#proof
Although the problem says to use the Inverse Function Theorem, the standard equivalent tool here is the Implicit Function Theorem, which follows from the Inverse Function Theorem.

Define
$$
\Phi(x,a,b,c)=x^3+ax^2+bx+c.
$$
At $(a,b,c)=(0,-1,0)$, the equation becomes
$$
x^3-x=x(x-1)(x+1)=0,
$$
so the roots are $1$, $-1$, and $0$.

We compute
$$
\frac{\partial \Phi}{\partial x}(x,a,b,c)=3x^2+2ax+b.
$$
At the three base roots, we have
$$
\frac{\partial \Phi}{\partial x}(1,0,-1,0)=2,
$$
$$
\frac{\partial \Phi}{\partial x}(-1,0,-1,0)=2,
$$
and
$$
\frac{\partial \Phi}{\partial x}(0,0,-1,0)=-1.
$$
All three values are nonzero.

By the Implicit Function Theorem, there exist neighborhoods of $(0,-1,0)$ and continuously differentiable functions
$$
u(a,b,c),\qquad v(a,b,c),\qquad w(a,b,c)
$$
such that
$$
u(0,-1,0)=1,
$$
$$
v(0,-1,0)=-1,
$$
and
$$
w(0,-1,0)=0,
$$
and
$$
\Phi(u(a,b,c),a,b,c)=0,
$$
$$
\Phi(v(a,b,c),a,b,c)=0,
$$
$$
\Phi(w(a,b,c),a,b,c)=0.
$$
Shrinking the neighborhood of $(0,-1,0)$ if necessary, the three values $u(a,b,c)$, $v(a,b,c)$, and $w(a,b,c)$ remain in disjoint neighborhoods of $1$, $-1$, and $0$, respectively. Hence they are three distinct real roots of the cubic.

A cubic polynomial has at most three real roots. Therefore, for $(a,b,c)$ sufficiently near $(0,-1,0)$, all three solutions can be expressed as continuously differentiable functions of $a,b,c$.
::

::ProblemBlock{number=9}
#problem
Let $X$ be a metric space. A function $f:X\to\mathbb{R}$ is called lower semi-continuous if
$$
f^{-1}((\alpha,\infty))
$$
is open for any $\alpha\in\mathbb{R}$. Show that
$$
\liminf_{n\to\infty} f(x_n)\ge f(x_0)
$$
whenever $x_n$ is a sequence in $X$ with $\lim_{n\to\infty}x_n=x_0$, if $f$ is lower semi-continuous.

#proof
Let $\alpha<f(x_0)$. Then
$$
x_0\in f^{-1}((\alpha,\infty)).
$$
Since $f$ is lower semi-continuous, the set
$$
U=f^{-1}((\alpha,\infty))
$$
is open in $X$.

Because $x_n\to x_0$ and $U$ is an open set containing $x_0$, there exists $N\in\mathbb{N}$ such that for all $n\ge N$,
$$
x_n\in U.
$$
Therefore, for all $n\ge N$,
$$
f(x_n)>\alpha.
$$
It follows that
$$
\liminf_{n\to\infty}f(x_n)\ge \alpha.
$$
Since this holds for every $\alpha<f(x_0)$, we conclude that
$$
\liminf_{n\to\infty}f(x_n)\ge f(x_0).
$$
::
