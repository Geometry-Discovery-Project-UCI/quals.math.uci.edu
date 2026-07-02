# 2006 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Prove or disprove: the Euclidean plane $\R^2$ can be expressed as the countable union of straight lines.

#proof
The statement is false. Suppose that
$$
  \R^2=\bigcup_{n=1}^\infty L_n,
$$
where each $L_n$ is a straight line. Each line has one direction, and there are only countably many directions among the $L_n$. Choose a line $L$ whose direction is not equal to the direction of any $L_n$.

Then $L$ intersects each $L_n$ in at most one point. Hence
$$
  L\cap \bigcup_{n=1}^\infty L_n
  = \bigcup_{n=1}^\infty (L\cap L_n)
$$
is countable. But $L$ itself is uncountable. This is a contradiction. Therefore the union of the $L_n$ cannot be all of $\R^2$.
::

::ProblemBlock{number=2}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
Determine whether
$$
  \sum_{n=1}^\infty \sin(n^{-2})\cos(n^{-1})
$$
is convergent.

<span style="display:inline-block; width:1em;"></span> **(b)**
 Suppose that $f\in BUC^2(\R,\R)$, so that $f,f',f''$ are bounded and uniformly continuous, and assume $f(0)=f'(0)=0$. Analyze the convergence of
$$
  \sum_{n=1}^\infty f\!\left(\frac{x}{n}\right).
$$
 


#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
The series is absolutely convergent. Indeed,
$$
  \left|\sin(n^{-2})\cos(n^{-1})\right|\leq n^{-2},
$$
because $|\sin t|\leq |t|$ and $|\cos t|\leq 1$. Since $\sum n^{-2}$ converges, the given series converges absolutely.

<span style="display:inline-block; width:1em;"></span> **(b)**
 Let $M=\Vert f''\Vert_\infty$. Since $f(0)=f'(0)=0$, Taylor's formula with integral remainder gives
$$
  f(t)=\int_0^t (t-s)f''(s)\,ds.
$$
Thus
$$
  |f(t)|\leq \frac{M}{2}t^2
$$
for all $t\in\R$. Therefore, for each fixed $x\in\R$,
$$
  \left|f\!\left(\frac{x}{n}\right)\right|
  \leq \frac{M x^2}{2n^2}.
$$
Hence
$$
  \sum_{n=1}^\infty f\!\left(\frac{x}{n}\right)
$$
converges absolutely for every $x\in\R$.

Moreover, if $|x|\leq R$, then
$$
  \left|f\!\left(\frac{x}{n}\right)\right|
  \leq \frac{M R^2}{2n^2}.
$$
By the Weierstrass $M$-test, the series converges uniformly and absolutely on every bounded interval.

On the whole real line, the convergence is not uniform unless $f\equiv 0$. Indeed, if $f$ is not identically zero, then
$$
  \sup_{x\in\R}\left|f\!\left(\frac{x}{n}\right)\right|
  =\sup_{t\in\R}|f(t)|>0
$$
for every $n$, so the terms do not converge uniformly to zero. Hence the series cannot converge uniformly on $\R$.
::

::ProblemBlock{number=3}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
 Carefully state one of the following: the Bolzano-Weierstrass theorem or the Heine-Borel theorem.

<span style="display:inline-block; width:1em;"></span> **(b)**
 Let $x_0>y_0>0$ and define
$$
  x_{n+1}=\frac{x_n+y_n}{2},\qquad y_{n+1}=\sqrt{x_ny_n}.
$$
Do the sequences have limits? If so, what can be said about them?


#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
Bolzano-Weierstrass theorem: every bounded sequence of real numbers has a convergent subsequence.

Heine-Borel theorem:
A subset of $\mathbb{R}$
 is compact if and only if it is closed and bounded.

<span style="display:inline-block; width:1em;"></span> **(b)**
 Since $x_0>y_0>0$, both sequences remain positive. By the arithmetic-geometric mean inequality,
$$
  x_{n+1}=\frac{x_n+y_n}{2}\geq \sqrt{x_ny_n}=y_{n+1}.
$$
Thus $x_n\geq y_n$ for all $n\geq 1$.

Also,
$$
  x_{n+1}=\frac{x_n+y_n}{2}\leq x_n,
$$
so $(x_n)$ is decreasing, and
$$
  y_{n+1}=\sqrt{x_ny_n}\geq y_n,
$$
so $(y_n)$ is increasing. Since $y_0\leq y_n\leq x_n\leq x_0$, both sequences are bounded. Therefore both sequences converge. Let
$$
  x_n\to L,
  \qquad
  y_n\to M.
$$
Passing to the limit in the recurrence gives
$$
  L=\frac{L+M}{2},
$$
so $L=M$. Therefore both sequences converge to the same limit. This common limit is the arithmetic-geometric mean of $x_0$ and $y_0$.
 

::

::ProblemBlock{number=4}
#problem
Compute
$$
  \sum_{n=1}^\infty \frac{1}{2^{2n+1}n(2n-1)}.
$$

#proof
Let
$$
  S(t)=\sum_{n=1}^\infty \frac{t^{2n+1}}{n(2n-1)},
  \qquad |t|<1.
$$
The desired series is $S(1/2)$. Since
$$
  \frac{1}{n(2n-1)}=-\frac{1}{n}+\frac{2}{2n-1},
$$
we get
$$
\begin{aligned}
S(t)
&=-\sum_{n=1}^\infty \frac{t^{2n+1}}{n}
  +2\sum_{n=1}^\infty \frac{t^{2n+1}}{2n-1} \\
&=t\log(1-t^2)+2t^2\sum_{n=1}^\infty \frac{t^{2n-1}}{2n-1} \\
&=t\log(1-t^2)+2t^2\operatorname{arctanh}(t).
\end{aligned}
$$
Therefore
$$
\begin{aligned}
S\!\left(\frac12\right)
&=\frac12\log\left(1-\frac14\right)
  +\frac12\operatorname{arctanh}\left(\frac12\right) \\
&=\frac12\log\frac34+\frac12\cdot\frac12\log 3 \\
&=\frac34\log 3-\log 2.
\end{aligned}
$$
Here the Taylor expansion for $\operatorname{arctanh} t$ comes from 
$$
  \frac{1}{1-t^2}=1+t^2+t^4+t^6+\cdots.
$$
Thus
$$
  \boxed{\displaystyle \sum_{n=1}^\infty \frac{1}{2^{2n+1}n(2n-1)}
  =\frac34\log 3-\log 2.}
$$
::

::ProblemBlock{number=5}
#problem
Let $f:[a,b]\to\R$ be $C^2$. Suppose $f'$ is monotonically decreasing and $f'\geq m>0$ on $[a,b]$. Prove that
$$
  \left|\int_a^b \cos(f(x))\,dx\right|\leq \frac{4}{m}.
$$

#proof
Let
$$
I=\int_a^b \cos(f(x))\,dx.
$$
Since $f'(x)\ge m>0$ on $[a,b]$, $f$ is strictly increasing.

We use the identity
$$
(\sin f(x))'=f'(x)\cos(f(x)).
$$
Hence
$$
\cos(f(x))=\frac{1}{f'(x)}(\sin f(x))'.
$$
Therefore
$$
I=\int_a^b \frac{1}{f'(x)}(\sin f(x))'\,dx.
$$
Integrating by parts gives
$$
I=
\left[\frac{\sin f(x)}{f'(x)}\right]_a^b-
\int_a^b \sin f(x)
\left(\frac{1}{f'(x)}\right)'dx.
$$

Since $f'$ is monotonically decreasing and $f\in C^2$, we have
$$
f''(x)\le 0.
$$
Thus
$$
\left(\frac{1}{f'(x)}\right)'
=
-\frac{f''(x)}{(f'(x))^2}
\ge 0.
$$
Now, using $|\sin f(x)|\le 1$, we get
$$
|I|
\le
\left|
\frac{\sin f(b)}{f'(b)}
-
\frac{\sin f(a)}{f'(a)}
\right|
+
\int_a^b |\sin f(x)|
\left(\frac{1}{f'(x)}\right)'dx.
$$
Therefore
$$
|I|
\le
\frac{1}{f'(b)}+\frac{1}{f'(a)}
+
\int_a^b
\left(\frac{1}{f'(x)}\right)'dx.
$$
The last integral equals
$$
\int_a^b
\left(\frac{1}{f'(x)}\right)'dx
=
\frac{1}{f'(b)}-\frac{1}{f'(a)}.
$$
Hence
$$
|I|
\le
\frac{1}{f'(b)}+\frac{1}{f'(a)}
+
\frac{1}{f'(b)}-\frac{1}{f'(a)}
=
\frac{2}{f'(b)}.
$$
Since $f'(b)\ge m$, it follows that
$$
|I|\le \frac{2}{m}.
$$
In particular,
$$
\left|\int_a^b \cos(f(x))\,dx\right|
\le \frac{4}{m}.
$$
#remark
So in fact the bound is $2/m$.
::

::ProblemBlock{number=6}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
 Show that the system
$$
\begin{cases}
 x^2+y^2+xe^u+e^v=1,\\
 u^3+v^2+e^{xy}=2
\end{cases}
$$
defines functions $u(x,y)$ and $v(x,y)$ locally near $(0,0)$.

<span style="display:inline-block; width:1em;"></span> **(b)**
Compute $\nabla v(0,0)$.
 

#proof
At $(x,y)=(0,0)$, the system becomes
$$
  e^v=1,
  \qquad
  u^3+v^2+1=2.
$$
Thus $v=0$ and $u=1$.

Define
$$
  F_1(x,y,u,v)=x^2+y^2+xe^u+e^v-1,
$$
$$
  F_2(x,y,u,v)=u^3+v^2+e^{xy}-2.
$$
The Jacobian with respect to $(u,v)$ is
$$
  D_{(u,v)}F=\begin{pmatrix}
  xe^u & e^v\\
  3u^2 & 2v
  \end{pmatrix}.
$$
At $(x,y,u,v)=(0,0,1,0)$, this is
$$
  \begin{pmatrix}
  0&1\\
  3&0
  \end{pmatrix},
$$
whose determinant is $-3\neq 0$. Hence the implicit function theorem gives local functions $u(x,y)$ and $v(x,y)$.

To compute $\nabla v(0,0)$, differentiate the system implicitly. For the $x$-derivatives,
$$
  \begin{pmatrix}
  0&1\\
  3&0
  \end{pmatrix}
  \begin{pmatrix}
  u_x\\ v_x
  \end{pmatrix}
  =-
  \begin{pmatrix}
  F_{1x}\\ F_{2x}
  \end{pmatrix}_{(0,0,1,0)}.
$$
Now
$$
  F_{1x}=2x+e^u,
  \qquad
  F_{2x}=y e^{xy}.
$$
Thus at the base point,
$$
  \begin{pmatrix}
  0&1\\
  3&0
  \end{pmatrix}
  \begin{pmatrix}
  u_x\\ v_x
  \end{pmatrix}
  =-
  \begin{pmatrix}
  e\\ 0
  \end{pmatrix}.
$$
Therefore $v_x(0,0)=-e$.

Similarly, for the $y$-derivatives,
$$
  F_{1y}=2y,
  \qquad
  F_{2y}=x e^{xy},
$$
and both vanish at the base point. Hence $v_y(0,0)=0$. Therefore
$$
  \boxed{\nabla v(0,0)=(-e,0).}
$$
::

::ProblemBlock{number=7}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
 State the definition of uniform equicontinuity for a family $\{f_\alpha\}_{\alpha\in I}$ on a set $S\subset\R$.

<span style="display:inline-block; width:1em;"></span> **(b)**
 Determine whether
$$
  f_\alpha(x)=\frac{1}{1+e^{\alpha x}},
  \qquad x\in[0,1],\quad \alpha\in[1,\infty),
$$
is uniformly equicontinuous on $[0,1]$.
 

#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
 A family $\{f_\alpha\}_{\alpha\in I}$ of functions $f_\alpha:S\to\R$ is uniformly equicontinuous on $S$ if for every $\varepsilon>0$ there is a $\delta>0$ such that for all $\alpha\in I$ and all $x,y\in S$,
$$
  |x-y|<\delta
  \quad\Longrightarrow\quad
  |f_\alpha(x)-f_\alpha(y)|<\varepsilon.
$$
The same $\delta$ must work for every function in the family.

<span style="display:inline-block; width:1em;"></span> **(b)**
The family is not uniformly equicontinuous. We show that the definition fails with, for example, $\varepsilon=1/4$.

Let $\delta>0$ be arbitrary. Choose
$$
  y=\min\left\{\frac{\delta}{2},\frac12\right\}
  \quad\text{and}\quad
  \alpha=\frac{\log 3}{y}.
$$
Then $\alpha\geq 1$, $0<y<\delta$, and $y\in[0,1]$. Also
$$
  f_\alpha(0)=\frac12,
  \qquad
  f_\alpha(y)=\frac{1}{1+e^{\alpha y}}
  =\frac{1}{1+3}=\frac14.
$$
Therefore
$$
  |f_\alpha(0)-f_\alpha(y)|=\frac14.
$$
Since this happens for every $\delta>0$, the family is not uniformly equicontinuous on $[0,1]$.
::


::ProblemBlock{number=8}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
 Show that $O(n)$, the set of all real orthogonal $n\times n$ matrices, is compact.

<span style="display:inline-block; width:1em;"></span> **(b)**
Show that each tangent vector $M$ to $O(n)$ at the identity matrix is skew-symmetric.
 

#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
 We regard the space of real $n\times n$ matrices as $\R^{n^2}$. The set
$$
  O(n)=\{A\in M_n(\R):A^TA=I\}
$$
is closed because the map $A\mapsto A^TA$ is continuous and $\{I\}$ is closed.

Also, if $A\in O(n)$, then each column of $A$ has Euclidean norm $1$. Hence every entry of $A$ has absolute value at most $1$, so $O(n)$ is bounded in $\R^{n^2}$. By the Heine-Borel theorem, $O(n)$ is compact.

<span style="display:inline-block; width:1em;"></span> **(b)**
Let $M$ be a tangent vector to $O(n)$ at $I$. Then there exists a differentiable curve $A(t)$ in $O(n)$ such that
$$
  A(0)=I,
  \qquad
  A'(0)=M.
$$
Since $A(t)\in O(n)$,
$$
  A(t)^T A(t)=I.
$$
Differentiating with respect to $t$ gives
$$
  A'(t)^T A(t)+A(t)^TA'(t)=0.
$$
At $t=0$, this becomes
$$
  M^T+M=0.
$$
Thus $M^T=-M$, so $M$ is skew-symmetric.
::

::ProblemBlock{number=9}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)**
 State the method of Lagrange multipliers.

<span style="display:inline-block; width:1em;"></span> **(b)**
 Determine the maximum value on
$$
  S^{n-1}=\{x\in\R^n:\Vert x\Vert_2=1\}
$$
of
$$
  f(x)=\sum_{j=1}^n x_j.
$$
 

#proof
<span style="display:inline-block; width:1em;"></span> **(a)**
 Let $f,g_1,\dots,g_k$ be $C^1$ functions on an open set $U\subset\R^n$. Suppose $x_0\in U$ is a local maximum or minimum of $f$ subject to the constraints
$$
  g_1(x)=\cdots=g_k(x)=0.
$$
If the constraint gradients
$$
  \nabla g_1(x_0),\dots,\nabla g_k(x_0)
$$
are linearly independent, then there exist real numbers $\lambda_1,
\dots,\lambda_k$ such that
$$
  \nabla f(x_0)=\lambda_1\nabla g_1(x_0)+\cdots+\lambda_k\nabla g_k(x_0).
$$

<span style="display:inline-block; width:1em;"></span> **(b)**
Let 
$$
g(x)=\sum_{j=1}^n x_i^2-1.
$$
Then at the maximum point, which exists by compactness, we have
$$
\nabla f(x_0)=\lambda\nabla g(x_0)
$$
for some $\lambda$.
Therefore we have
$1=2\lambda(x_0)_i$ for all $1\leq i\leq n$. Since
$$
\sum_{j=1}^n (x_0)^2=1,
$$
we have $\lambda=\pm 1/2$. Thus
$$
x_0=\pm \left(\frac{1}{\sqrt n},\cdots,\frac{1}{\sqrt n}\right).
$$
Apprent the maximum value is obtained when $x=(1,\cdots,1)/\sqrt{n}$, which is $\sqrt n$.

#remark
Alternatively, we have a more elementary solution. 
By Cauchy's inequality,
$$
  f(x)=\sum_{j=1}^n x_j
  =\langle x,(1,1,\dots,1)\rangle
  \leq \Vert x\Vert_2\sqrt{n}.
$$
On the unit sphere, $\Vert x\Vert_2=1$, so
$$
  f(x)\leq \sqrt{n}.
$$
Equality holds exactly when $x$ is a positive scalar multiple of $(1,1,\dots,1)$. On the unit sphere this gives
$$
  x=\left(\frac1{\sqrt n},\dots,\frac1{\sqrt n}\right).
$$
Therefore the maximum value is
$$
  \boxed{\sqrt n}.
$$
Since $S^{n-1}$ is compact and $f$ is continuous, this maximum is indeed attained.

::