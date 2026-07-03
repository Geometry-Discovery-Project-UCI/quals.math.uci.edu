# 2010 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Prove or disprove: There is a continuous real-valued function $f$ on the open unit ball $B$ in $\mathbb{R}^n$ such that the image $f(B)=\mathbb{N}$.

#proof
The statement is false.

The open unit ball
$$
B=\{x\in \mathbb{R}^n:\|x\|<1\}
$$
is connected. Indeed, it is convex, since if $x,y\in B$ and $0\le t\le 1$, then
$$
\|tx+(1-t)y\|\le t\|x\|+(1-t)\|y\|<1.
$$
Every convex subset of $\mathbb{R}^n$ is connected.

If $f:B\to \mathbb{R}$ is continuous, then $f(B)$ must be connected because the continuous image of a connected set is connected. However, $\mathbb{N}$ is not connected as a subset of $\mathbb{R}$. For example,
$$
\mathbb{N}
=
\bigl(\mathbb{N}\cap (-\infty,3/2)\bigr)
\cup
\bigl(\mathbb{N}\cap (3/2,\infty)\bigr)
$$
is a separation of $\mathbb{N}$ into two nonempty relatively open subsets.

Therefore no such continuous function exists.
::

::ProblemBlock{number=2}
#problem
Let $f:\mathbb{R}^n\to \mathbb{R}$ be twice continuously differentiable and assume that
$$
f(0)=0
\qquad\text{and}\qquad
\nabla f(0)=0.
$$
Consider the series
$$
\sum_{k=1}^{\infty} f\left(\frac{1}{k}x\right).
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Prove the series converges uniformly on any bounded set in $\mathbb{R}^n$.

<span style="display:inline-block; width:1em;"></span> **(b)** Determine whether the series is uniformly convergent on $\mathbb{R}^n$. If yes, prove it; if no, provide a counterexample.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Let $A\subset \mathbb{R}^n$ be bounded. Choose $R>0$ such that
$$
A\subset \{x\in \mathbb{R}^n:\|x\|\le R\}.
$$
Since $f\in C^2(\mathbb{R}^n)$, the second derivatives of $f$ are bounded on the compact ball $\overline{B_R(0)}$. By Taylor's theorem at $0$, using $f(0)=0$ and $\nabla f(0)=0$, there is a constant $C_R>0$ such that
$$
|f(z)|\le C_R\|z\|^2
$$
for all $\|z\|\le R$.

For $x\in A$ and $k\ge 1$, we have $\|x/k\|\le R$, so
$$
\left|f\left(\frac{x}{k}\right)\right|
\le
C_R\left\|\frac{x}{k}\right\|^2
\le
\frac{C_RR^2}{k^2}.
$$
Since
$$
\sum_{k=1}^{\infty} \frac{C_RR^2}{k^2}
$$
converges, the Weierstrass $M$-test implies that
$$
\sum_{k=1}^{\infty} f\left(\frac{x}{k}\right)
$$
converges uniformly on $A$. Hence the series converges uniformly on every bounded subset of $\mathbb{R}^n$.

<span style="display:inline-block; width:1em;"></span> **(b)** In general, the series need not converge uniformly on all of $\mathbb{R}^n$.

Take
$$
f(x)=\|x\|^2.
$$
Then $f\in C^2(\mathbb{R}^n)$, $f(0)=0$, and $\nabla f(0)=0$. The series becomes
$$
\sum_{k=1}^{\infty} f\left(\frac{x}{k}\right)
=
\sum_{k=1}^{\infty} \frac{\|x\|^2}{k^2}.
$$
For a tail of the series,
$$
\sum_{k=N+1}^{\infty} \frac{\|x\|^2}{k^2}
=
\|x\|^2\sum_{k=N+1}^{\infty}\frac{1}{k^2}.
$$
For every fixed $N$, the factor
$$
\sum_{k=N+1}^{\infty}\frac{1}{k^2}
$$
is positive. Therefore
$$
\sup_{x\in \mathbb{R}^n}
\sum_{k=N+1}^{\infty} \frac{\|x\|^2}{k^2}
=
+\infty.
$$
Thus the tails do not converge uniformly to $0$, so the series is not uniformly convergent on $\mathbb{R}^n$ in general.
::

::ProblemBlock{number=3}
#problem
Consider the matrix-valued function
$$
f(M)=M^3,
\qquad
M\in \mathbb{R}^{n\times n}.
$$
Is this function differentiable? If yes, what is its derivative? Justify your answer.

#proof
Yes, $f$ is differentiable.

Let $H\in \mathbb{R}^{n\times n}$. Then
$$
f(M+H)-f(M)
=
(M+H)^3-M^3.
$$
Expanding, we get
$$
(M+H)^3
=
M^3+M^2H+MHM+HM^2+MH^2+HMH+H^2M+H^3.
$$
Therefore
$$
f(M+H)-f(M)
=
M^2H+MHM+HM^2+MH^2+HMH+H^2M+H^3.
$$
The terms that are linear in $H$ are
$$
M^2H+MHM+HM^2.
$$
Define
$$
Df(M)[H]=M^2H+MHM+HM^2.
$$
This map is linear in $H$.

It remains to check that the remaining terms are $o(\|H\|)$. Using any matrix norm compatible with multiplication, we have
$$
\|MH^2+HMH+H^2M+H^3\|
\le
\|M\|\|H\|^2+\|H\|\|M\|\|H\|+\|H\|^2\|M\|+\|H\|^3.
$$
Thus
$$
\|MH^2+HMH+H^2M+H^3\|
\le
3\|M\|\|H\|^2+\|H\|^3.
$$
Dividing by $\|H\|$ gives
$$
\frac{\|MH^2+HMH+H^2M+H^3\|}{\|H\|}
\le
3\|M\|\|H\|+\|H\|^2
\to 0
$$
as $\|H\|\to 0$.

Hence $f$ is differentiable at every $M$, and its derivative is
$$
Df(M)[H]=M^2H+MHM+HM^2.
$$
::

::ProblemBlock{number=4}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State the Contraction Mapping Theorem, also called the Banach Fixed Point Theorem, for maps of a complete metric space into itself.

<span style="display:inline-block; width:1em;"></span> **(b)** Prove the theorem you stated in part **(a)**.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The Contraction Mapping Theorem states:

Let $(X,d)$ be a nonempty complete metric space. Suppose $T:X\to X$ is a contraction, meaning that there exists a constant $0<c<1$ such that
$$
d(Tx,Ty)\le c\,d(x,y)
$$
for all $x,y\in X$. Then $T$ has a unique fixed point $x^*\in X$, meaning
$$
T(x^*)=x^*.
$$
Moreover, for any starting point $x_0\in X$, the sequence
$$
x_{n+1}=T(x_n)
$$
converges to $x^*$.

<span style="display:inline-block; width:1em;"></span> **(b)** Choose any $x_0\in X$ and define
$$
x_{n+1}=T(x_n)
$$
for $n\ge 0$. Since $T$ is a contraction,
$$
d(x_{n+1},x_n)
=
d(Tx_n,Tx_{n-1})
\le
c\,d(x_n,x_{n-1}).
$$
By induction,
$$
d(x_{n+1},x_n)\le c^n d(x_1,x_0).
$$
If $m>n$, then by the triangle inequality,
$$
d(x_m,x_n)
\le
\sum_{j=n}^{m-1} d(x_{j+1},x_j)
\le
\sum_{j=n}^{m-1} c^j d(x_1,x_0)
\le
\frac{c^n}{1-c}d(x_1,x_0).
$$
Since $0<c<1$, the right-hand side tends to $0$ as $n\to\infty$. Therefore $\{x_n\}$ is a Cauchy sequence. Because $X$ is complete, there exists $x^*\in X$ such that
$$
x_n\to x^*.
$$

We now prove that $x^*$ is a fixed point. Since $T$ is Lipschitz, it is continuous. Hence
$$
T(x^*)
=
T\left(\lim_{n\to\infty}x_n\right)
=
\lim_{n\to\infty}T(x_n)
=
\lim_{n\to\infty}x_{n+1}
=
x^*.
$$
Thus $x^*$ is a fixed point.

Finally, suppose $y^*$ is another fixed point. Then
$$
d(x^*,y^*)
=
d(Tx^*,Ty^*)
\le
c\,d(x^*,y^*).
$$
Since $0<c<1$, this implies
$$
d(x^*,y^*)=0.
$$
Therefore $x^*=y^*$, so the fixed point is unique.
::

::ProblemBlock{number=5}
#problem
Assume $\{a_n\}_{n=1}^{\infty}$ is a monotonically decreasing sequence of positive numbers. Prove that
$$
\sum_{n=1}^{\infty} a_n
$$
converges if and only if
$$
\sum_{j=1}^{\infty} 2^j a_{2^j}
$$
converges.

#proof
This is Cauchy's condensation test.

Since $\{a_n\}$ is decreasing and positive, for each $j\ge 1$ and each integer $n$ satisfying
$$
2^j+1\le n\le 2^{j+1},
$$
we have
$$
a_n\le a_{2^j}.
$$
Therefore
$$
\sum_{n=2^j+1}^{2^{j+1}} a_n
\le
2^j a_{2^j}.
$$
It follows that
$$
\sum_{n=1}^{2^{N+1}} a_n
=
a_1+\sum_{j=0}^{N}\sum_{n=2^j+1}^{2^{j+1}}a_n
\le
a_1+\sum_{j=0}^{N}2^j a_{2^j}.
$$
Thus if
$$
\sum_{j=1}^{\infty}2^j a_{2^j}
$$
converges, then
$$
\sum_{n=1}^{\infty}a_n
$$
also converges.

Conversely, for $j\ge 1$ and
$$
2^{j-1}+1\le n\le 2^j,
$$
we have
$$
a_n\ge a_{2^j}.
$$
There are $2^{j-1}$ terms in this block, so
$$
\sum_{n=2^{j-1}+1}^{2^j} a_n
\ge
2^{j-1}a_{2^j}.
$$
Equivalently,
$$
2^j a_{2^j}
\le
2\sum_{n=2^{j-1}+1}^{2^j} a_n.
$$
Hence, if $\sum_{n=1}^{\infty}a_n$ converges, then
$$
\sum_{j=1}^{\infty}2^j a_{2^j}
\le
2\sum_{j=1}^{\infty}\sum_{n=2^{j-1}+1}^{2^j} a_n
\le
2\sum_{n=1}^{\infty}a_n
<\infty.
$$
Therefore the two series converge or diverge together.
::

::ProblemBlock{number=6}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** Give an example of a function $f:\mathbb{R}^2\to \mathbb{R}$ such that the first partial derivatives
$$
\frac{\partial f}{\partial x}
\qquad\text{and}\qquad
\frac{\partial f}{\partial y}
$$
exist at each point of $\mathbb{R}^2$, but $f$ is not continuous on $\mathbb{R}^2$.

<span style="display:inline-block; width:1em;"></span> **(b)** Assume that $U$ is open in $\mathbb{R}^2$ and $f:U\to \mathbb{R}$ is a function such that the first partial derivatives
$$
\frac{\partial f}{\partial x}
\qquad\text{and}\qquad
\frac{\partial f}{\partial y}
$$
exist and are bounded on $U$. Prove $f$ is continuous at each point of $U$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Define
$$
f(x,y)=
\begin{cases}
\dfrac{xy}{x^2+y^2}, & (x,y)\ne (0,0),\\[6pt]
0, & (x,y)=(0,0).
\end{cases}
$$
At every point $(x,y)\ne (0,0)$, this function is differentiable, so both partial derivatives exist.

At $(0,0)$, we compute the partial derivatives directly:
$$
\frac{\partial f}{\partial x}(0,0)
=
\lim_{h\to 0}\frac{f(h,0)-f(0,0)}{h}
=
\lim_{h\to 0}\frac{0-0}{h}
=
0,
$$
and
$$
\frac{\partial f}{\partial y}(0,0)
=
\lim_{h\to 0}\frac{f(0,h)-f(0,0)}{h}
=
\lim_{h\to 0}\frac{0-0}{h}
=
0.
$$
Thus both first partial derivatives exist everywhere.

However, $f$ is not continuous at $(0,0)$. Along the line $y=x$,
$$
f(x,x)
=
\frac{x^2}{2x^2}
=
\frac12
$$
for $x\ne 0$, while $f(0,0)=0$. Hence
$$
\lim_{x\to 0} f(x,x)=\frac12\ne 0=f(0,0).
$$
So $f$ is not continuous on $\mathbb{R}^2$.

<span style="display:inline-block; width:1em;"></span> **(b)** Let $(a,b)\in U$. Since $U$ is open, there is $r>0$ such that the closed rectangle
$$
[a-r,a+r]\times [b-r,b+r]
$$
is contained in $U$.

Assume
$$
\left|\frac{\partial f}{\partial x}\right|\le M
\qquad\text{and}\qquad
\left|\frac{\partial f}{\partial y}\right|\le M
$$
on $U$. Let $(x,y)$ be close enough to $(a,b)$ so that the horizontal and vertical line segments used below remain inside the rectangle. Then
$$
f(x,y)-f(a,b)
=
\bigl(f(x,y)-f(a,y)\bigr)
+
\bigl(f(a,y)-f(a,b)\bigr).
$$
By the one-variable Mean Value Theorem applied in the $x$-direction,
$$
|f(x,y)-f(a,y)|
\le
M|x-a|.
$$
By the one-variable Mean Value Theorem applied in the $y$-direction,
$$
|f(a,y)-f(a,b)|
\le
M|y-b|.
$$
Therefore
$$
|f(x,y)-f(a,b)|
\le
M|x-a|+M|y-b|.
$$
The right-hand side tends to $0$ as $(x,y)\to(a,b)$. Hence $f$ is continuous at $(a,b)$. Since $(a,b)$ was arbitrary, $f$ is continuous at every point of $U$.
::

::ProblemBlock{number=7}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State the Implicit Function Theorem from $\mathbb{R}^{n+m}\to \mathbb{R}^n$.

<span style="display:inline-block; width:1em;"></span> **(b)** Show that the system
$$
\begin{cases}
x^2+y^2+e^u+ye^v=1,\\
u^2-v^2+y+e^{xy}=0
\end{cases}
$$
defines functions $u=u(x,y)$ and $v=v(x,y)$ in a neighborhood of $(x,y)=(0,0)$ such that $(x,y,u(x,y),v(x,y))$ is a solution of the system with
$$
u(0,0)=0
\qquad\text{and}\qquad
v(0,0)=1.
$$

<span style="display:inline-block; width:1em;"></span> **(c)** Compute the gradient $\nabla v$ at $(x,y)=(0,0)$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** One form of the Implicit Function Theorem is as follows.

Let $F:\mathbb{R}^m\times \mathbb{R}^n\to \mathbb{R}^n$ be continuously differentiable near $(a,b)$, where $a\in\mathbb{R}^m$ and $b\in\mathbb{R}^n$. Suppose
$$
F(a,b)=0
$$
and the $n\times n$ matrix
$$
D_zF(a,b)
$$
of partial derivatives with respect to the second group of variables $z\in\mathbb{R}^n$ is invertible. Then there are neighborhoods $V$ of $a$ and $W$ of $b$ and a unique continuously differentiable function
$$
\varphi:V\to W
$$
such that
$$
\varphi(a)=b
$$
and
$$
F(x,\varphi(x))=0
$$
for all $x\in V$. Moreover,
$$
D\varphi(x)
=
-\bigl(D_zF(x,\varphi(x))\bigr)^{-1}D_xF(x,\varphi(x)).
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Define $F:\mathbb{R}^4\to \mathbb{R}^2$ by
$$
F(x,y,u,v)
=
\begin{pmatrix}
x^2+y^2+e^u+ye^v-1\\
u^2-v^2+y+e^{xy}
\end{pmatrix}.
$$
At the point $(0,0,0,1)$,
$$
F(0,0,0,1)
=
\begin{pmatrix}
0+0+1+0-1\\
0-1+0+1
\end{pmatrix}
=
\begin{pmatrix}
0\\
0
\end{pmatrix}.
$$
Now compute the Jacobian with respect to the unknowns $(u,v)$:
$$
D_{(u,v)}F(x,y,u,v)
=
\begin{pmatrix}
e^u & ye^v\\
2u & -2v
\end{pmatrix}.
$$
At $(0,0,0,1)$ this becomes
$$
D_{(u,v)}F(0,0,0,1)
=
\begin{pmatrix}
1 & 0\\
0 & -2
\end{pmatrix}.
$$
Its determinant is
$$
-2\ne 0.
$$
Therefore the matrix is invertible. By the Implicit Function Theorem, there exist neighborhoods of $(0,0)$ and $(0,1)$ and unique $C^1$ functions
$$
u=u(x,y),
\qquad
v=v(x,y),
$$
with
$$
u(0,0)=0,
\qquad
v(0,0)=1,
$$
such that the given system is satisfied.

<span style="display:inline-block; width:1em;"></span> **(c)** We differentiate the two identities
$$
x^2+y^2+e^{u(x,y)}+y e^{v(x,y)}-1=0
$$
and
$$
u(x,y)^2-v(x,y)^2+y+e^{xy}=0.
$$

First differentiate the first equation with respect to $x$:
$$
2x+e^u u_x+ye^v v_x=0.
$$
At $(x,y)=(0,0)$, with $u(0,0)=0$ and $v(0,0)=1$, this gives
$$
u_x(0,0)=0.
$$
Differentiate the second equation with respect to $x$:
$$
2u u_x-2v v_x+y e^{xy}=0.
$$
At $(0,0)$ this gives
$$
-2v_x(0,0)=0,
$$
so
$$
v_x(0,0)=0.
$$

Next differentiate the first equation with respect to $y$:
$$
2y+e^u u_y+e^v+ye^v v_y=0.
$$
At $(0,0)$ this gives
$$
u_y(0,0)+e=0,
$$
so
$$
u_y(0,0)=-e.
$$
Differentiate the second equation with respect to $y$:
$$
2u u_y-2v v_y+1+x e^{xy}=0.
$$
At $(0,0)$ this gives
$$
-2v_y(0,0)+1=0.
$$
Therefore
$$
v_y(0,0)=\frac12.
$$
Hence
$$
\nabla v(0,0)=\left(v_x(0,0),v_y(0,0)\right)
=
\left(0,\frac12\right).
$$
::

::ProblemBlock{number=8}
#problem
Apply the Divergence Theorem in $\mathbb{R}^n$ to evaluate the following integral:
$$
\int_E \frac{y^2}{\sqrt{x^2+4y^2+4z^2}}\,d\sigma,
$$
where
$$
E=\{(x,y,z)\in \mathbb{R}^3:2^{-1}x^2+y^2+z^2=1\}
$$
is an ellipsoid in $\mathbb{R}^3$ and $d\sigma$ is the area element on $E$.

#proof
Let
$$
D=\{(x,y,z)\in \mathbb{R}^3:2^{-1}x^2+y^2+z^2\le 1\}
$$
be the solid ellipsoid bounded by $E$. Define
$$
\Phi(x,y,z)=2^{-1}x^2+y^2+z^2.
$$
Then
$$
\nabla \Phi=(x,2y,2z),
$$
so on $E$ the outward unit normal is
$$
\nu
=
\frac{(x,2y,2z)}{\sqrt{x^2+4y^2+4z^2}}.
$$

Choose the vector field
$$
F(x,y,z)=\left(0,\frac{y}{2},0\right).
$$
Then on $E$,
$$
F\cdot \nu
=
\left(0,\frac{y}{2},0\right)\cdot
\frac{(x,2y,2z)}{\sqrt{x^2+4y^2+4z^2}}
=
\frac{y^2}{\sqrt{x^2+4y^2+4z^2}}.
$$
Therefore the desired integral is the flux integral
$$
\int_E F\cdot \nu\,d\sigma.
$$
By the Divergence Theorem,
$$
\int_E F\cdot \nu\,d\sigma
=
\int_D \operatorname{div}F\,dV.
$$
Since
$$
\operatorname{div}F
=
\frac{\partial}{\partial y}\left(\frac{y}{2}\right)
=
\frac12,
$$
we get
$$
\int_D \operatorname{div}F\,dV
=
\frac12 \operatorname{Vol}(D).
$$
The ellipsoid $D$ has semiaxes
$$
\sqrt{2},\quad 1,\quad 1,
$$
so
$$
\operatorname{Vol}(D)
=
\frac{4\pi}{3}\sqrt{2}.
$$
Hence
$$
\int_E \frac{y^2}{\sqrt{x^2+4y^2+4z^2}}\,d\sigma
=
\frac12\cdot \frac{4\pi\sqrt{2}}{3}
=
\frac{2\pi\sqrt{2}}{3}.
$$
::

::ProblemBlock{number=9}
#problem
Let $f(x)$ be Riemann integrable on $[0,2\pi]$ and let
$$
g(t)=\int_0^{2\pi} f(x)\sin(tx)\,dx,
\qquad
t\in \mathbb{R}.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Prove $g(t)$ is uniformly continuous on $\mathbb{R}$.

<span style="display:inline-block; width:1em;"></span> **(b)** Prove
$$
\lim_{n\to\infty} g(n)=0.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Since $f$ is Riemann integrable on $[0,2\pi]$, it is bounded. Thus there is $M>0$ such that
$$
|f(x)|\le M
$$
for all $x\in [0,2\pi]$.

For $s,t\in \mathbb{R}$,
$$
|g(t)-g(s)|
\le
\int_0^{2\pi} |f(x)|\,|\sin(tx)-\sin(sx)|\,dx.
$$
Using
$$
|\sin A-\sin B|\le |A-B|,
$$
we get
$$
|\sin(tx)-\sin(sx)|
\le
|t-s|x.
$$
Therefore
$$
|g(t)-g(s)|
\le
M|t-s|\int_0^{2\pi}x\,dx
=
2\pi^2M|t-s|.
$$
Thus $g$ is Lipschitz on $\mathbb{R}$, and hence $g$ is uniformly continuous on $\mathbb{R}$.

<span style="display:inline-block; width:1em;"></span> **(b)** We prove the Riemann-integrable version of the Riemann-Lebesgue lemma for the special sequence of integers.

Let $\varepsilon>0$. Since $f$ is Riemann integrable on $[0,2\pi]$, there exists a step function $s$ such that
$$
\int_0^{2\pi} |f(x)-s(x)|\,dx<\frac{\varepsilon}{2}.
$$
Then for every $n$,
$$
\left|
\int_0^{2\pi} (f(x)-s(x))\sin(nx)\,dx
\right|
\le
\int_0^{2\pi} |f(x)-s(x)|\,dx
<
\frac{\varepsilon}{2}.
$$

Now write the step function in the form
$$
s(x)=\sum_{j=1}^m c_j \mathbf{1}_{[a_{j-1},a_j)}(x)
$$
for a partition
$$
0=a_0<a_1<\cdots<a_m=2\pi.
$$
Then
$$
\int_0^{2\pi} s(x)\sin(nx)\,dx
=
\sum_{j=1}^m c_j\int_{a_{j-1}}^{a_j}\sin(nx)\,dx.
$$
For each interval,
$$
\int_{a_{j-1}}^{a_j}\sin(nx)\,dx
=
\frac{\cos(na_{j-1})-\cos(na_j)}{n},
$$
so
$$
\left|
\int_{a_{j-1}}^{a_j}\sin(nx)\,dx
\right|
\le
\frac{2}{n}.
$$
Hence
$$
\left|
\int_0^{2\pi} s(x)\sin(nx)\,dx
\right|
\le
\frac{2}{n}\sum_{j=1}^m |c_j|
\to 0
$$
as $n\to\infty$.

Therefore, for all sufficiently large $n$,
$$
\left|
\int_0^{2\pi} s(x)\sin(nx)\,dx
\right|
<
\frac{\varepsilon}{2}.
$$
Combining the two estimates, for all sufficiently large $n$,
$$
|g(n)|
\le
\left|
\int_0^{2\pi} (f(x)-s(x))\sin(nx)\,dx
\right|
+
\left|
\int_0^{2\pi} s(x)\sin(nx)\,dx
\right|
<
\varepsilon.
$$
Thus
$$
\lim_{n\to\infty}g(n)=0.
$$
::
