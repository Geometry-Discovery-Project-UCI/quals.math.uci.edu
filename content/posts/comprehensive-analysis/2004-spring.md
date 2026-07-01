# 2004 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $y=(y_1,y_2)$ be a function of $x$, defined by the system of equations
$$
\begin{cases}
xy_1^2+y_2-y_1y_2=1,\\
x^2+y_1^2y_2=2.
\end{cases}
$$
Compute $dy_1/dx$ at the point where $x=y_1=y_2=1$. Justify the existence of
this derivative.

#proof
Define
$$
F_1(x,y_1,y_2)=xy_1^2+y_2-y_1y_2-1
$$
and
$$
F_2(x,y_1,y_2)=x^2+y_1^2y_2-2.
$$
Then the system is
$$
F_1(x,y_1,y_2)=0,
\qquad
F_2(x,y_1,y_2)=0.
$$
At $(x,y_1,y_2)=(1,1,1)$, the Jacobian matrix with respect to $(y_1,y_2)$ is
$$
\begin{pmatrix}
\frac{\partial F_1}{\partial y_1} & \frac{\partial F_1}{\partial y_2}\\
\frac{\partial F_2}{\partial y_1} & \frac{\partial F_2}{\partial y_2}
\end{pmatrix}_{(1,1,1)}
=
\begin{pmatrix}
2xy_1-y_2 & 1-y_1\\
2y_1y_2 & y_1^2
\end{pmatrix}_{(1,1,1)}
=
\begin{pmatrix}
1 & 0\\
2 & 1
\end{pmatrix}.
$$
Its determinant is
$$
1\ne0.
$$
Therefore, by the implicit function theorem, $y_1$ and $y_2$ are differentiable
functions of $x$ near this point.

Differentiate the two equations with respect to $x$. From the first equation,
$$
y_1^2+x2y_1y_1'+y_2'-y_1'y_2-y_1y_2'=0.
$$
At $(x,y_1,y_2)=(1,1,1)$, this becomes
$$
1+2y_1'+y_2'-y_1'-y_2'=0,
$$
so
$$
1+y_1'=0.
$$
Thus
$$
y_1'=-1.
$$

Therefore
$$
\boxed{\frac{dy_1}{dx}=-1.}
$$
::

::ProblemBlock{number=2}
#problem
Suppose
$$
f(x)=\sum_{n=0}^{\infty}a_nx^n,
$$
and assume that this series converges whenever $0\le x\le 2$.

<span style="display:inline-block; width:1em;"></span> **(a)**
 Prove that the series
$$
\sum_{n=0}^{\infty}a_nx^n
$$
converges for $x=-3/2$.

<span style="display:inline-block; width:1em;"></span> **(b)**
Prove that there exists a constant $C$ such that
$$
|a_n|<C\left(\frac23\right)^n
$$
for any $n\ge0$.

<span style="display:inline-block; width:1em;"></span> **(c)**
 Prove that there exists a constant $C'$ such that
$$
|f^{(n)}(1)|\le C'2^n n!
$$
for any $n\ge0$.
 

#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
Since the series converges at $x=2$, its terms tend to $0$. Hence
$$
a_n2^n\to0.
$$
In particular, there exists $C_1>0$ such that
$$
|a_n|2^n\le C_1
$$
for all $n$. Therefore
$$
|a_n|\left(\frac32\right)^n
\le
C_1\left(\frac34\right)^n.
$$
Since
$$
\sum_{n=0}^{\infty}\left(\frac34\right)^n
$$
converges, the series
$$
\sum_{n=0}^{\infty}a_n\left(-\frac32\right)^n
$$
converges absolutely. Hence it converges.

<br>

<span style="display:inline-block; width:1em;"></span> **(b)**
Since the series converges at $x=3/2$, we have
$$
a_n\left(\frac32\right)^n\to0.
$$
Thus the sequence
$$
\left\{a_n\left(\frac32\right)^n\right\}_{n=0}^{\infty}
$$
is bounded. Hence there exists $C>0$ such that
$$
|a_n|\left(\frac32\right)^n\le C
$$
for all $n$. Therefore
$$
|a_n|\le C\left(\frac23\right)^n.
$$
Increasing $C$ if necessary, we may write
$$
|a_n|<C\left(\frac23\right)^n.
$$

<br>

<span style="display:inline-block; width:1em;"></span> **(c)**
From part **(b)**, there exists $C>0$ such that
$$
|a_m|\le C\left(\frac23\right)^m.
$$
Since $1$ lies inside the radius of convergence, termwise differentiation is
valid at $x=1$. Thus
$$
f^{(n)}(1)
=
\sum_{m=n}^{\infty}
a_m\frac{m!}{(m-n)!}.
$$
Therefore
$$
|f^{(n)}(1)|
\le
C\sum_{m=n}^{\infty}
\left(\frac23\right)^m
\frac{m!}{(m-n)!}.
$$
Write $m=n+j$. Then
$$
|f^{(n)}(1)|
\le
C\left(\frac23\right)^n
\sum_{j=0}^{\infty}
\left(\frac23\right)^j
\frac{(n+j)!}{j!}.
$$
Since
$$
\frac{(n+j)!}{j!}
=
n!\binom{n+j}{n},
$$
we get
$$
|f^{(n)}(1)|
\le
C\left(\frac23\right)^n n!
\sum_{j=0}^{\infty}
\binom{n+j}{n}
\left(\frac23\right)^j.
$$
Using
$$
\sum_{j=0}^{\infty}\binom{n+j}{n}r^j
=
\frac1{(1-r)^{n+1}},
\qquad |r|<1,
$$
with $r=2/3$, we obtain
$$
\sum_{j=0}^{\infty}
\binom{n+j}{n}
\left(\frac23\right)^j
=
3^{n+1}.
$$
Hence
$$
|f^{(n)}(1)|
\le
C\left(\frac23\right)^n n! 3^{n+1}
=
3C2^n n!.
$$
Taking
$$
C'=3C,
$$
we get
$$
|f^{(n)}(1)|\le C'2^n n!.
$$
::

::ProblemBlock{number=3}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
Define a contractive mapping. State the Contractive Mapping Principle.

<span style="display:inline-block; width:1em;"></span> **(b)**
 For $f\in C([1,2])$, define $Tf\in C([1,2])$ by setting
$$
Tf(x)=2x+1+\int_1^x \frac{f(t)}{t}\,dt
$$
for $x\in[1,2]$. Prove that $T$ is a contractive mapping on $C([1,2])$.

<span style="display:inline-block; width:1em;"></span> **(c)**
 Use the Contractive Mapping Principle to prove that the system of
equations
$$
\begin{cases}
xf'(x)=f(x)+2x,\\
f(1)=3
\end{cases}
$$
has a unique solution on $[1,2]$.
 

#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
A mapping $T:X\to X$ on a metric space $(X,d)$ is called contractive if there
exists a constant $0\le q<1$ such that
$$
d(Tx,Ty)\le qd(x,y)
$$
for all $x,y\in X$.

The Contractive Mapping Principle says that if $(X,d)$ is a complete metric
space and $T:X\to X$ is contractive, then $T$ has a unique fixed point. That is,
there exists a unique $x\in X$ such that
$$
Tx=x.
$$

<br>

<span style="display:inline-block; width:1em;"></span> **(b)**
We use the sup norm
$$
\|f\|_\infty=\sup_{x\in[1,2]}|f(x)|
$$
on $C([1,2])$. For $f,g\in C([1,2])$,
$$
|Tf(x)-Tg(x)|
=
\left|
\int_1^x \frac{f(t)-g(t)}{t}\,dt
\right|.
$$
Thus
$$
|Tf(x)-Tg(x)|
\le
\|f-g\|_\infty\int_1^x \frac1t\,dt
\le
(\log 2)\|f-g\|_\infty.
$$
Taking the supremum over $x\in[1,2]$ gives
$$
\|Tf-Tg\|_\infty
\le
(\log 2)\|f-g\|_\infty.
$$
Since
$$
\log 2<1,
$$
$T$ is a contractive mapping.

<br>

<span style="display:inline-block; width:1em;"></span> **(c)**
Since $C([1,2])$ is complete under the sup norm and $T$ is contractive, the
Contractive Mapping Principle implies that $T$ has a unique fixed point
$f\in C([1,2])$.

The fixed point condition $Tf=f$ means
$$
f(x)=2x+1+\int_1^x \frac{f(t)}{t}\,dt.
$$
Putting $x=1$, we get
$$
f(1)=3.
$$
Differentiating the equation gives
$$
f'(x)=2+\frac{f(x)}{x}.
$$
Therefore
$$
xf'(x)=f(x)+2x.
$$
Hence the fixed point is a solution of the system.

Conversely, any solution of the system satisfies
$$
f'(x)=2+\frac{f(x)}{x}.
$$
Integrating from $1$ to $x$ gives
$$
f(x)-f(1)=2(x-1)+\int_1^x \frac{f(t)}{t}\,dt.
$$
Since $f(1)=3$, this becomes
$$
f(x)=2x+1+\int_1^x \frac{f(t)}{t}\,dt.
$$
Thus any solution is a fixed point of $T$. Since the fixed point is unique, the
solution is unique.
::

::ProblemBlock{number=4}
#problem
State and prove the Intermediate Value Theorem in one variable.

#proof
**Intermediate Value Theorem.**
Let $f:[a,b]\to\mathbb R$ be continuous. If $y$ is between $f(a)$ and $f(b)$,
then there exists $c\in[a,b]$ such that
$$
f(c)=y.
$$

Assume, without loss of generality, that
$$
f(a)<y<f(b).
$$
Define
$$
S=\{x\in[a,b]:f(x)\le y\}.
$$
Then $S$ is nonempty because $a\in S$, and $S$ is bounded above by $b$. Let
$$
c=\sup S.
$$
We claim that
$$
f(c)=y.
$$

First suppose $f(c)<y$. By continuity of $f$ at $c$, there exists $\delta>0$
such that if $|x-c|<\delta$, then
$$
f(x)<y.
$$
In particular, for some $x>c$ with $x\in[a,b]$, we have $f(x)<y$. Thus
$x\in S$, contradicting the fact that $c$ is an upper bound of $S$.

Now suppose $f(c)>y$. By continuity of $f$ at $c$, there exists $\delta>0$
such that if $|x-c|<\delta$, then
$$
f(x)>y.
$$
Then no point of $(c-\delta,c]$ belongs to $S$, contradicting the fact that
$c=\sup S$.

Therefore neither $f(c)<y$ nor $f(c)>y$ is possible. Hence
$$
f(c)=y.
$$
This proves the theorem.
::

::ProblemBlock{number=5}
#problem
Suppose $A$ is a subset of a complete metric space $(M,d)$, and $f$ is a
uniformly continuous $M$-valued function defined on $A$. Prove that there
exists a uniformly continuous function
$$
g:\overline A\to M
$$
such that
$$
g|_A=f.
$$

#proof
Let $x\in\overline A$. Choose a sequence $\{x_n\}$ in $A$ such that
$$
x_n\to x.
$$
Since $\{x_n\}$ is Cauchy and $f$ is uniformly continuous, the sequence
$\{f(x_n)\}$ is Cauchy in $M$. Because $M$ is complete, $\{f(x_n)\}$ converges.

Define
$$
g(x)=\lim_{n\to\infty}f(x_n).
$$
We must show that this definition is independent of the sequence chosen. Suppose
$\{x_n\}$ and $\{y_n\}$ are two sequences in $A$ such that
$$
x_n\to x,
\qquad
y_n\to x.
$$
Then
$$
d(x_n,y_n)\to0.
$$
By uniform continuity of $f$,
$$
d(f(x_n),f(y_n))\to0.
$$
Hence the two limits are equal. Therefore $g$ is well-defined.

If $x\in A$, we may take the constant sequence $x_n=x$, and then
$$
g(x)=f(x).
$$
Thus
$$
g|_A=f.
$$

It remains to show that $g$ is uniformly continuous. Let $\varepsilon>0$.
Since $f$ is uniformly continuous, there exists $\eta>0$ such that if
$a,b\in A$ and
$$
d(a,b)<\eta,
$$
then
$$
d(f(a),f(b))<\varepsilon.
$$
Let
$$
\delta=\frac{\eta}{3}.
$$
If $x,y\in\overline A$ and
$$
d(x,y)<\delta,
$$
choose sequences $\{x_n\}$ and $\{y_n\}$ in $A$ with
$$
x_n\to x,
\qquad
y_n\to y.
$$
For sufficiently large $n$,
$$
d(x_n,x)<\delta
\qquad\text{and}\qquad
d(y_n,y)<\delta.
$$
Then
$$
d(x_n,y_n)
\le
d(x_n,x)+d(x,y)+d(y,y_n)
<
3\delta
=
\eta.
$$
Therefore
$$
d(f(x_n),f(y_n))<\varepsilon.
$$
Letting $n\to\infty$, we get
$$
d(g(x),g(y))\le\varepsilon.
$$
Thus $g$ is uniformly continuous on $\overline A$.
::

 
::ProblemBlock{number=6}
#problem
Suppose $f:[a,b]\to\mathbb R$ is Riemann integrable on $[a,b]$, and assume
that there exists a positive constant $c$ such that
$$
f(x)\ge c
$$
for all $x\in[a,b]$. Prove that $1/f$ is Riemann integrable.

#proof
Since $f$ is Riemann integrable on $[a,b]$, it is bounded. Hence there exists
$M>0$ such that
$$
c\le f(x)\le M
$$
for all $x\in[a,b]$.

The function
$$
\phi(t)=\frac1t
$$
is continuous on the compact interval $[c,M]$. Therefore $\phi$ is uniformly
continuous on $[c,M]$.

A standard theorem says that if $f$ is Riemann integrable and $\phi$ is
continuous on an interval containing the range of $f$, then $\phi\circ f$ is
Riemann integrable. Applying this theorem to $\phi(t)=1/t$, we get that
$$
\frac1f=\phi\circ f
$$
is Riemann integrable on $[a,b]$.
#remark
This can be generalized to the improper integral case.
::

::ProblemBlock{number=7}
#problem
For $x=(x_1,\dots,x_n)\in\mathbb R^n$, define
$$
|x|=\left(\sum_{i=1}^n x_i^2\right)^{1/2}.
$$
Suppose $f$ maps $\mathbb R^n$ onto $\mathbb R^n$ in such a way that
$$
|f(x)-f(y)|\ge |x-y|
$$
for any $x,y\in\mathbb R^n$. Suppose $A$ is an open subset of $\mathbb R^n$.
Prove that $f(A)$ is open.

#proof
First, $f$ is injective. Indeed, if
$$
f(x)=f(y),
$$
then
$$
0=|f(x)-f(y)|\ge |x-y|,
$$
so
$$
x=y.
$$
Since $f$ is also onto, $f$ is bijective. Let
$$
g=f^{-1}:\mathbb R^n\to\mathbb R^n.
$$
For $u,v\in\mathbb R^n$, write
$$
u=f(x),
\qquad
v=f(y).
$$
Then
$$
|g(u)-g(v)|
=
|x-y|
\le
|f(x)-f(y)|
=
|u-v|.
$$
Therefore $g=f^{-1}$ is Lipschitz continuous, hence continuous.

Now let $A\subset\mathbb R^n$ be open. Since
$$
f(A)=g^{-1}(A),
$$
and $g$ is continuous, $g^{-1}(A)$ is open. Hence
$$
f(A)
$$
is open.
::

::ProblemBlock{number=8}
#problem
Suppose $U$ is an open subset of $\mathbb R$ containing a point $x_0$. Let
$f$ and $g$ be real-valued functions defined on $U$ such that $g$ is continuous,
$f$ is differentiable, and
$$
f(x_0)=0.
$$
Prove that the product $fg$ is differentiable at $x_0$.

#proof
Since $f(x_0)=0$, we have
$$
(fg)(x_0)=f(x_0)g(x_0)=0.
$$
For $x\ne x_0$,
$$
\frac{(fg)(x)-(fg)(x_0)}{x-x_0}
=
\frac{f(x)g(x)}{x-x_0}.
$$
Since $f(x_0)=0$, this becomes
$$
\frac{(fg)(x)-(fg)(x_0)}{x-x_0}
=
\frac{f(x)-f(x_0)}{x-x_0}g(x).
$$
As $x\to x_0$,
$$
\frac{f(x)-f(x_0)}{x-x_0}\to f'(x_0),
$$
because $f$ is differentiable at $x_0$, and
$$
g(x)\to g(x_0),
$$
because $g$ is continuous at $x_0$. Therefore
$$
\lim_{x\to x_0}
\frac{(fg)(x)-(fg)(x_0)}{x-x_0}
=
f'(x_0)g(x_0).
$$
Thus $fg$ is differentiable at $x_0$, and
$$
(fg)'(x_0)=f'(x_0)g(x_0).
$$
::

::ProblemBlock{number=9}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
 State the Heine-Borel Theorem for subsets of $\mathbb R$.

<span style="display:inline-block; width:1em;"></span> **(b)**
Construct a sequence $(x_n)_{n\in\mathbb N}$ of real numbers as
follows: set
$$
x_0=1,
$$
and let
$$
x_{n+1}=x_n+e^{-x_n}-1
$$
for $n\ge0$. Does the sequence $(x_n)$ converge? If it does, compute
$$
\lim_{n\to\infty}x_n.
$$
 

#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
The Heine-Borel Theorem says that a subset $K\subset\mathbb R$ is compact if
and only if $K$ is closed and bounded.

<br>

<span style="display:inline-block; width:1em;"></span> **(b)**
We first show that $x_n>0$ for all $n$. Define
$$
h(x)=x+e^{-x}-1.
$$
Then
$$
h(0)=0
$$
and
$$
h'(x)=1-e^{-x}>0
$$
for $x>0$. Hence
$$
h(x)>0
$$
for every $x>0$. Since
$$
x_{n+1}=h(x_n),
$$
and $x_0=1>0$, it follows by induction that
$$
x_n>0
$$
for all $n$.

Next, since $x_n>0$, we have
$$
e^{-x_n}<1.
$$
Therefore
$$
x_{n+1}
=
x_n+e^{-x_n}-1
<
x_n.
$$
Thus $(x_n)$ is decreasing. Since $x_n>0$, it is bounded below by $0$.
Therefore $(x_n)$ converges. Let
$$
L=\lim_{n\to\infty}x_n.
$$
Then $L\ge0$. Passing to the limit in
$$
x_{n+1}=x_n+e^{-x_n}-1,
$$
we get
$$
L=L+e^{-L}-1.
$$
Thus
$$
e^{-L}=1,
$$
so
$$
L=0.
$$
Therefore
$$
\boxed{\lim_{n\to\infty}x_n=0.}
$$
::