# 2022 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Suppose $a_{m,n}$ is a positive number for each $m,n\in \mathbb{N}$. Is it true that
$$
\limsup_{m\to\infty}\left(\limsup_{n\to\infty} a_{m,n}\right)
=
\limsup_{n\to\infty}\left(\limsup_{m\to\infty} a_{m,n}\right)?
$$
Prove or give a counterexample.

#proof
It is not true in general.

Define
$$
a_{m,n}=
\begin{cases}
1, & n\ge m,\\
\frac{1}{m}, & n<m.
\end{cases}
$$
Then $a_{m,n}>0$ for all $m,n\in\mathbb{N}$.

Fix $m$. If $n\ge m$, then $a_{m,n}=1$. Hence
$$
\limsup_{n\to\infty} a_{m,n}=1
$$
for every fixed $m$. Therefore
$$
\limsup_{m\to\infty}\left(\limsup_{n\to\infty} a_{m,n}\right)
=
\limsup_{m\to\infty} 1
=1.
$$

On the other hand, fix $n$. If $m>n$, then
$$
a_{m,n}=\frac{1}{m}.
$$
The finitely many values with $m\le n$ do not affect the limit superior as $m\to\infty$. Thus
$$
\limsup_{m\to\infty} a_{m,n}=0
$$
for every fixed $n$. Therefore
$$
\limsup_{n\to\infty}\left(\limsup_{m\to\infty} a_{m,n}\right)
=
\limsup_{n\to\infty} 0
=0.
$$

Thus the two sides are $1$ and $0$, respectively, so they are not equal.
::

::ProblemBlock{number=2}
#problem
Let $f:\mathbb{R}\to\mathbb{R}$ be a continuous positive function, and define $F:\mathbb{R}^3\to\mathbb{R}^3$ by
$$
F(x,y,z)=
\left(
\int_0^x f(t)\,dt,
\int_0^{x+y} f(t)\,dt,
\int_0^{x+y+z} f(t)\,dt
\right).
$$
Prove that $F$ is locally, that is, restricted to a sufficiently small neighborhood of any point in $\mathbb{R}^3$, a $C^1$ diffeomorphism.

#proof
Let
$$
G(s)=\int_0^s f(t)\,dt.
$$
Since $f$ is continuous, $G$ is $C^1$ and
$$
G'(s)=f(s).
$$
Then
$$
F(x,y,z)=\bigl(G(x),G(x+y),G(x+y+z)\bigr).
$$
Therefore $F$ is $C^1$.

We compute its Jacobian matrix:
$$
DF(x,y,z)
=
\begin{pmatrix}
 f(x) & 0 & 0\\
 f(x+y) & f(x+y) & 0\\
 f(x+y+z) & f(x+y+z) & f(x+y+z)
\end{pmatrix}.
$$
This matrix is lower triangular, so
$$
\det DF(x,y,z)
=
f(x)f(x+y)f(x+y+z).
$$
Since $f$ is positive everywhere,
$$
f(x)f(x+y)f(x+y+z)>0.
$$
Hence
$$
\det DF(x,y,z)\neq 0
$$
at every point $(x,y,z)\in\mathbb{R}^3$.

By the inverse function theorem, for every point $(x_0,y_0,z_0)\in\mathbb{R}^3$, there exists a neighborhood $U$ of $(x_0,y_0,z_0)$ such that $F|_U$ is a $C^1$ diffeomorphism from $U$ onto its image.
::

::ProblemBlock{number=3}
#problem
Let $\{f_n\}_{n\in\mathbb{N}}$ be a sequence of continuously differentiable functions on $[0,1]$ such that
$$
|f_n'(x)|\le x^{-1/2022}
$$
for $x\neq 0$, and
$$
\int_0^1 f_n(x)\,dx=2022
$$
for each $n\in\mathbb{N}$. Prove that the sequence has a subsequence $\{f_{n_k}\}$ that converges uniformly on $[0,1]$.

#proof
We prove that $\{f_n\}$ is uniformly bounded and equicontinuous, and then apply the Arzela-Ascoli theorem.

First, for $0\le x<y\le 1$, we have
$$
|f_n(y)-f_n(x)|
\le
\int_x^y |f_n'(t)|\,dt
\le
\int_x^y t^{-1/2022}\,dt.
$$
Since
$$
\int_x^y t^{-1/2022}\,dt
=
\frac{2022}{2021}\left(y^{2021/2022}-x^{2021/2022}\right),
$$
we get
$$
|f_n(y)-f_n(x)|
\le
\frac{2022}{2021}\left(y^{2021/2022}-x^{2021/2022}\right).
$$
Because the function $u\mapsto u^{2021/2022}$ is Holder continuous on $[0,1]$, we also have
$$
y^{2021/2022}-x^{2021/2022}
\le
(y-x)^{2021/2022}.
$$
Thus
$$
|f_n(y)-f_n(x)|
\le
\frac{2022}{2021}|y-x|^{2021/2022}.
$$
This estimate is independent of $n$, so $\{f_n\}$ is equicontinuous on $[0,1]$.

Next we prove uniform boundedness. For any $x\in[0,1]$,
$$
f_n(x)
=
\int_0^1 f_n(x)\,dt
=
\int_0^1 f_n(t)\,dt+
\int_0^1 \bigl(f_n(x)-f_n(t)\bigr)\,dt.
$$
Using the hypothesis $\int_0^1 f_n(t)\,dt=2022$, we obtain
$$
|f_n(x)|
\le
2022+
\int_0^1 |f_n(x)-f_n(t)|\,dt.
$$
From the derivative estimate, for any $x,t\in[0,1]$,
$$
|f_n(x)-f_n(t)|
\le
\int_{\min\{x,t\}}^{\max\{x,t\}} s^{-1/2022}\,ds
\le
\int_0^1 s^{-1/2022}\,ds
=
\frac{2022}{2021}.
$$
Hence
$$
|f_n(x)|\le 2022+\frac{2022}{2021}
$$
for all $x\in[0,1]$ and all $n$.

Therefore $\{f_n\}$ is uniformly bounded and equicontinuous on the compact interval $[0,1]$. By the Arzela-Ascoli theorem, there exists a subsequence $\{f_{n_k}\}$ that converges uniformly on $[0,1]$.
::

::ProblemBlock{number=4}
#problem
Is
$$
f(x)=\sum_{n=2}^{\infty}\left(\frac{x}{\ln n}\right)^n
$$
continuous on $(-\infty,+\infty)$? Explain.

#proof
Yes, $f$ is continuous on $\mathbb{R}$.

Fix $R>0$. We prove that the series converges uniformly on the compact interval $[-R,R]$. For $|x|\le R$,
$$
\left|\left(\frac{x}{\ln n}\right)^n\right|
\le
\left(\frac{R}{\ln n}\right)^n.
$$
Consider the numerical series
$$
\sum_{n=2}^{\infty}\left(\frac{R}{\ln n}\right)^n.
$$
By the root test,
$$
\limsup_{n\to\infty}
\left[\left(\frac{R}{\ln n}\right)^n\right]^{1/n}
=
\lim_{n\to\infty}\frac{R}{\ln n}
=0<1.
$$
Therefore
$$
\sum_{n=2}^{\infty}\left(\frac{R}{\ln n}\right)^n
$$
converges.

By the Weierstrass $M$-test,
$$
\sum_{n=2}^{\infty}\left(\frac{x}{\ln n}\right)^n
$$
converges uniformly and absolutely on $[-R,R]$. Each function
$$
x\mapsto \left(\frac{x}{\ln n}\right)^n
$$
is continuous, so the uniform limit on $[-R,R]$ is continuous on $[-R,R]$.

Since $R>0$ was arbitrary, $f$ is continuous at every real number. Hence $f$ is continuous on $(-\infty,+\infty)$.
::

::ProblemBlock{number=5}
#problem
Let $X$ be a compact metric space, and suppose that the sequence $\{f_n\}$ in $C(X)$ decreases pointwise to a continuous function $f\in C(X)$; that is,
$$
f_n(x)\ge f_{n+1}(x)
$$
for each $n$ and $x$, and
$$
f_n(x)\to f(x)
$$
for each $x\in X$. Prove that the convergence is actually uniform on $X$.

#proof
Define
$$
g_n(x)=f_n(x)-f(x).
$$
Since $f_n$ and $f$ are continuous, each $g_n$ is continuous on $X$. Also,
$$
g_n(x)\ge 0
$$
for all $x\in X$, because $f_n(x)$ decreases to $f(x)$. Moreover,
$$
g_n(x)\ge g_{n+1}(x)
$$
for all $x\in X$, and
$$
g_n(x)\to 0
$$
pointwise on $X$.

We need to prove that
$$
\sup_{x\in X} g_n(x)\to 0.
$$
Suppose not. Then there exists $\varepsilon>0$ such that for every $N$ there is some $n\ge N$ with
$$
\sup_{x\in X} g_n(x)\ge \varepsilon.
$$
Since $g_n$ is continuous and $X$ is compact, $g_n$ attains its maximum. Thus we can choose a subsequence $n_k\to\infty$ and points $x_k\in X$ such that
$$
g_{n_k}(x_k)\ge \varepsilon.
$$

By compactness of $X$, after passing to a further subsequence, we may assume
$$
x_k\to x_0\in X.
$$
Since $g_n(x_0)\to 0$, choose $N_0$ such that
$$
g_{N_0}(x_0)<\frac{\varepsilon}{2}.
$$
By continuity of $g_{N_0}$, for all sufficiently large $k$,
$$
g_{N_0}(x_k)<\varepsilon.
$$
Also, for all sufficiently large $k$, we have $n_k\ge N_0$. Since $g_n$ decreases in $n$,
$$
g_{n_k}(x_k)\le g_{N_0}(x_k)<\varepsilon,
$$
which contradicts
$$
g_{n_k}(x_k)\ge \varepsilon.
$$
Therefore
$$
\sup_{x\in X} g_n(x)\to 0.
$$
This means
$$
\sup_{x\in X}|f_n(x)-f(x)|\to 0,
$$
so $f_n\to f$ uniformly on $X$.
::

::ProblemBlock{number=6}
#problem
Let
$$
v(x,y)=\left(\frac{x}{x^2+y^2},\frac{y}{x^2+y^2}\right):\mathbb{R}^2\setminus\{(0,0)\}\to\mathbb{R}^2.
$$
Let
$$
D=\{(x,y):(x-2)^2+y^2<9\}
$$
be the disc in $\mathbb{R}^2$ centered at $(2,0)$ and radius $3$. Let $n=n(x,y)$ be the unit outer normal vector to $\partial D$ at $(x,y)\in\partial D$. Compute
$$
\int_{\partial D} v\cdot n\,ds.
$$

#proof
The vector field is
$$
v(x,y)=\frac{(x,y)}{x^2+y^2}.
$$
It is smooth away from the origin. For $(x,y)\neq (0,0)$,
$$
\nabla\cdot v
=
\frac{\partial}{\partial x}\left(\frac{x}{x^2+y^2}\right)
+
\frac{\partial}{\partial y}\left(\frac{y}{x^2+y^2}\right).
$$
Computing gives
$$
\frac{\partial}{\partial x}\left(\frac{x}{x^2+y^2}\right)
=
\frac{y^2-x^2}{(x^2+y^2)^2},
$$
and
$$
\frac{\partial}{\partial y}\left(\frac{y}{x^2+y^2}\right)
=
\frac{x^2-y^2}{(x^2+y^2)^2}.
$$
Hence
$$
\nabla\cdot v=0
$$
away from the origin.

The disc $D$ contains the origin, because the distance from $(0,0)$ to the center $(2,0)$ is $2<3$. Let $B_\varepsilon$ be the disc of radius $\varepsilon$ centered at the origin, with $\varepsilon>0$ so small that $B_\varepsilon\subset D$. Apply the divergence theorem to the annular region
$$
\Omega=D\setminus \overline{B_\varepsilon}.
$$
Since $\nabla\cdot v=0$ on $\Omega$,
$$
0=\int_\Omega \nabla\cdot v\,dA
=
\int_{\partial D} v\cdot n\,ds+
\int_{\partial B_\varepsilon} v\cdot n_\Omega\,ds,
$$
where $n_\Omega$ is the outward normal for the annular region.

On the inner boundary $\partial B_\varepsilon$, the outward normal for $\Omega$ points toward the origin, so
$$
n_\Omega=-\frac{(x,y)}{\varepsilon}.
$$
On $\partial B_\varepsilon$,
$$
v(x,y)=\frac{(x,y)}{\varepsilon^2},
$$
so
$$
v\cdot n_\Omega
=
\frac{(x,y)}{\varepsilon^2}\cdot \left(-\frac{(x,y)}{\varepsilon}\right)
=-\frac{1}{\varepsilon}.
$$
Since $ds=\varepsilon\,d\theta$ on $\partial B_\varepsilon$,
$$
\int_{\partial B_\varepsilon} v\cdot n_\Omega\,ds
=
\int_0^{2\pi} \left(-\frac{1}{\varepsilon}\right)\varepsilon\,d\theta
=-2\pi.
$$
Therefore
$$
0=\int_{\partial D} v\cdot n\,ds-2\pi,
$$
and hence
$$
\int_{\partial D} v\cdot n\,ds=2\pi.
$$
::

::ProblemBlock{number=7}
#problem
Let $\{a_n\}_{n=1}^{\infty}$ and $\{b_n\}_{n=1}^{\infty}$ be two sequences of real numbers such that
$$
\lim_{n\to\infty} a_n=a,
\qquad
\lim_{n\to\infty} b_n=b.
$$
Prove that
$$
\lim_{n\to\infty}
\frac{a_1b_n+a_2b_{n-1}+\cdots+a_nb_1}{n}
=ab.
$$

#proof
Write
$$
a_k=a+\alpha_k,
\qquad
b_k=b+\beta_k,
$$
where
$$
\alpha_k\to 0,
\qquad
\beta_k\to 0.
$$
Then
$$
\frac{1}{n}\sum_{k=1}^n a_k b_{n+1-k}
=
\frac{1}{n}\sum_{k=1}^n (a+\alpha_k)(b+\beta_{n+1-k}).
$$
Expanding,
$$
\frac{1}{n}\sum_{k=1}^n a_k b_{n+1-k}
=
ab
+
\frac{a}{n}\sum_{k=1}^n \beta_{n+1-k}
+
\frac{b}{n}\sum_{k=1}^n \alpha_k
+
\frac{1}{n}\sum_{k=1}^n \alpha_k\beta_{n+1-k}.
$$

Since $\alpha_k\to 0$ and $\beta_k\to 0$, their Cesaro means also converge to $0$:
$$
\frac{1}{n}\sum_{k=1}^n \alpha_k\to 0,
\qquad
\frac{1}{n}\sum_{k=1}^n \beta_k\to 0.
$$
Therefore the second and third terms tend to $0$.

It remains to show that
$$
\frac{1}{n}\sum_{k=1}^n \alpha_k\beta_{n+1-k}\to 0.
$$
The sequences $\{\alpha_k\}$ and $\{\beta_k\}$ are bounded, say
$$
|\alpha_k|\le C,
\qquad
|\beta_k|\le C
$$
for all $k$.

Let $\varepsilon>0$. Choose $N$ such that
$$
|\alpha_k|<\varepsilon
\quad\text{and}\quad
|\beta_k|<\varepsilon
$$
whenever $k\ge N$.

For a fixed $n$, in the sum
$$
\sum_{k=1}^n \alpha_k\beta_{n+1-k},
$$
all terms except possibly those with $k<N$ or $n+1-k<N$ have both indices at least $N$. There are at most $2N$ exceptional terms. Hence
$$
\left|\frac{1}{n}\sum_{k=1}^n \alpha_k\beta_{n+1-k}\right|
\le
\frac{2N C^2}{n}+\varepsilon C.
$$
Taking $n\to\infty$ gives
$$
\limsup_{n\to\infty}
\left|\frac{1}{n}\sum_{k=1}^n \alpha_k\beta_{n+1-k}\right|
\le
\varepsilon C.
$$
Since $\varepsilon>0$ is arbitrary, this term tends to $0$.

Thus
$$
\lim_{n\to\infty}
\frac{a_1b_n+a_2b_{n-1}+\cdots+a_nb_1}{n}
=ab.
$$
::

::ProblemBlock{number=8}
#problem
Let $f$ be a differentiable function on $\mathbb{R}$ such that
$$
\lim_{|x|\to\infty} f(x)=1.
$$
Prove that there is an $x_0\in\mathbb{R}$ such that
$$
f'(x_0)=0.
$$

#proof
If $f$ is constant, then $f'(x)=0$ for every $x$, and we are done.

Assume $f$ is not constant. Then there exists $x_1\in\mathbb{R}$ such that
$$
f(x_1)\neq 1.
$$

First suppose
$$
f(x_1)>1.
$$
Choose $\varepsilon>0$ such that
$$
1+\varepsilon<f(x_1).
$$
Since
$$
\lim_{|x|\to\infty} f(x)=1,
$$
there exists $R>0$ such that
$$
|f(x)-1|<\varepsilon
$$
whenever $|x|\ge R$. Hence for $|x|\ge R$,
$$
f(x)<1+\varepsilon<f(x_1).
$$
Thus the global maximum of $f$ is attained inside the compact interval $[-R,R]$. Since the values outside $[-R,R]$ are strictly less than $f(x_1)$, this maximum occurs at an interior point $x_0\in(-R,R)$. By Fermat's theorem,
$$
f'(x_0)=0.
$$

Now suppose
$$
f(x_1)<1.
$$
Choose $\varepsilon>0$ such that
$$
1-\varepsilon>f(x_1).
$$
For sufficiently large $R$, whenever $|x|\ge R$ we have
$$
|f(x)-1|<\varepsilon,
$$
so
$$
f(x)>1-\varepsilon>f(x_1).
$$
Thus the global minimum of $f$ is attained inside $[-R,R]$, and it occurs at an interior point $x_0\in(-R,R)$. Again by Fermat's theorem,
$$
f'(x_0)=0.
$$

In all cases, there exists $x_0\in\mathbb{R}$ such that $f'(x_0)=0$.
::

::ProblemBlock{number=9}
#problem
Let $1<p,q<\infty$ with
$$
\frac{1}{p}+\frac{1}{q}=1.
$$

<span style="display:inline-block; width:1em;"></span> **(i)**  Prove that
$$
xy\le \frac{x^p}{p}+\frac{y^q}{q},
\qquad x,y>0.
$$

<span style="display:inline-block; width:1em;"></span> **(ii)**  Let $f(x)$ and $g(x)$ be bounded Riemann integrable real-valued functions on the unit ball $B_n\subset \mathbb{R}^n$. Prove Holder's inequality:
$$
\left|\int_{B_n} f(x)g(x)\,dx\right|
\le
\left(\int_{B_n}|f(x)|^p\,dx\right)^{1/p}
\left(\int_{B_n}|g(x)|^q\,dx\right)^{1/q}.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(i)** Fix $y>0$ and define
$$
\phi(x)=\frac{x^p}{p}+\frac{y^q}{q}-xy,
\qquad x>0.
$$
Then
$$
\phi'(x)=x^{p-1}-y.
$$
The critical point occurs when
$$
x^{p-1}=y,
$$
that is,
$$
x=y^{1/(p-1)}=y^{q-1}.
$$
At this point,
$$
x^p=y^q
$$
and
$$
xy=y^{q-1}y=y^q.
$$
Thus
$$
\phi(x)=\frac{y^q}{p}+\frac{y^q}{q}-y^q
=y^q\left(\frac{1}{p}+\frac{1}{q}-1\right)
=0.
$$
Since
$$
\phi''(x)=(p-1)x^{p-2}>0,
$$
this critical point is the global minimum. Hence
$$
\phi(x)\ge 0
$$
for all $x>0$, which is exactly
$$
xy\le \frac{x^p}{p}+\frac{y^q}{q}.
$$

<span style="display:inline-block; width:1em;"></span> **(ii)** Let
$$
A=\left(\int_{B_n}|f(x)|^p\,dx\right)^{1/p},
\qquad
B=\left(\int_{B_n}|g(x)|^q\,dx\right)^{1/q}.
$$
If $A=0$ or $B=0$, then the inequality is immediate. So assume
$$
A>0,
\qquad
B>0.
$$

Apply part (i) pointwise to
$$
X=\frac{|f(x)|}{A},
\qquad
Y=\frac{|g(x)|}{B}.
$$
Then
$$
\frac{|f(x)g(x)|}{AB}
\le
\frac{1}{p}\frac{|f(x)|^p}{A^p}
+
\frac{1}{q}\frac{|g(x)|^q}{B^q}.
$$
Integrating over $B_n$, we get
$$
\frac{1}{AB}\int_{B_n}|f(x)g(x)|\,dx
\le
\frac{1}{pA^p}\int_{B_n}|f(x)|^p\,dx
+
\frac{1}{qB^q}\int_{B_n}|g(x)|^q\,dx.
$$
By the definitions of $A$ and $B$,
$$
\frac{1}{AB}\int_{B_n}|f(x)g(x)|\,dx
\le
\frac{1}{p}+\frac{1}{q}
=1.
$$
Therefore
$$
\int_{B_n}|f(x)g(x)|\,dx\le AB.
$$
Finally,
$$
\left|\int_{B_n} f(x)g(x)\,dx\right|
\le
\int_{B_n}|f(x)g(x)|\,dx
\le AB.
$$
Thus
$$
\left|\int_{B_n} f(x)g(x)\,dx\right|
\le
\left(\int_{B_n}|f(x)|^p\,dx\right)^{1/p}
\left(\int_{B_n}|g(x)|^q\,dx\right)^{1/q}.
$$
::
