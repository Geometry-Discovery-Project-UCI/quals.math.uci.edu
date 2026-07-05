# 2019 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $G \subset \mathbb{R}^2$ be an open set and suppose that
$$
[0,1]\times [0,1] \subseteq G.
$$
Show that there exists $\epsilon>0$ such that
$$
[0,1+\epsilon]\times [0,1] \subseteq G.
$$

#proof
Let
$$
K=[0,1]\times [0,1].
$$
Then $K$ is compact and $K\subseteq G$. Since $G$ is open, for every $p\in K$ there is a radius $r_p>0$ such that
$$
B(p,r_p)\subseteq G.
$$
The balls $B(p,r_p/2)$ form an open cover of $K$. By compactness, there are points $p_1,\ldots,p_N\in K$ such that
$$
K\subseteq \bigcup_{i=1}^N B(p_i,r_{p_i}/2).
$$
Set
$$
\delta=\min_{1\le i\le N}\frac{r_{p_i}}{2}>0.
$$
We claim that every point whose distance from $K$ is less than $\delta$ belongs to $G$. Indeed, if $q$ satisfies $\operatorname{dist}(q,K)<\delta$, choose $p\in K$ such that $\|q-p\|<\delta$. Choose $i$ with $p\in B(p_i,r_{p_i}/2)$. Then
$$
\|q-p_i\|\le \|q-p\|+\|p-p_i\|<\delta+\frac{r_{p_i}}{2}\le r_{p_i},
$$
so $q\in B(p_i,r_{p_i})\subseteq G$.

Now choose
$$
\epsilon=\frac{\delta}{2}.
$$
If $(x,y)\in [0,1+\epsilon]\times [0,1]$, then either $x\in [0,1]$, in which case $(x,y)\in K$, or $x\in (1,1+\epsilon]$, in which case
$$
\operatorname{dist}((x,y),K)\le \|(x,y)-(1,y)\|=x-1\le \epsilon<\delta.
$$
Therefore $(x,y)\in G$ in all cases. Hence
$$
[0,1+\epsilon]\times [0,1]\subseteq G.
$$
::

::ProblemBlock{number=2}
#problem
Let $\{f_n\}_{n\ge 1}$ and $\{g_n\}_{n\ge 1}$ be two sequences of functions defined on $[0,1]$ such that $f_n$ converges uniformly to $f$, and $g_n$ converges uniformly to $g$ on $[0,1]$. Does it follow that $f_ng_n$ converges uniformly to $fg$? Explain your answer.

#proof
No, not in this generality. The issue is that the limiting functions need not be bounded, because no continuity or boundedness assumption is given.

Define
$$
f(x)=\begin{cases}
\frac{1}{x},&0<x\le 1,\\
0,&x=0,
\end{cases}
$$
and set
$$
f_n=f
$$
for every $n$. Then $f_n\to f$ uniformly, since $f_n=f$ identically.

Now define
$$
g_n(x)=\frac{1}{n}
$$
for every $x\in [0,1]$. Then $g_n\to 0$ uniformly on $[0,1]$. Hence $g=0$, so
$$
fg=0.
$$
However,
$$
f_n(x)g_n(x)=\frac{f(x)}{n}
=\begin{cases}
\frac{1}{nx},&0<x\le 1,\\
0,&x=0.
\end{cases}
$$
This sequence does not converge uniformly to $0$. Indeed, for each fixed $n$ and for every $M>0$, choosing $0<x<1/(nM)$ gives
$$
\left|f_n(x)g_n(x)\right|=\frac{1}{nx}>M.
$$
Thus the functions $f_ng_n$ are unbounded on $[0,1]$, so they cannot converge uniformly to the zero function.

Therefore uniform convergence of $f_n$ and $g_n$ alone does not imply uniform convergence of $f_ng_n$ to $fg$.
::

::ProblemBlock{number=3}
#problem
A metric $d$ on a space $X$ is called an ultrametric if the triangle inequality is replaced by the following stronger property: for all $x,y,z\in X$, we have
$$
d(x,z)\le \max(d(x,y),d(y,z)).
$$
Let $(X,d)$ be an ultrametric space. Prove the following:

<span style="display:inline-block; width:1em;"></span> **(1)** 
 If $B$ is an open ball in $X$, then any point in $B$ is a center of $B$. Recall that an open ball is a set of the form
$$
B(x;r):=\{y\in X:d(x,y)<r\};
$$
$x$ is referred to as a center of the ball.

<span style="display:inline-block; width:1em;"></span> **(2)** 
 Every open ball in $X$ is both open and closed.

#proof
Let $B=B(x;r)$ be an open ball, and let $y\in B$. Thus
$$
d(x,y)<r.
$$
We prove that
$$
B(x;r)=B(y;r).
$$
First let $z\in B(x;r)$. Then $d(x,z)<r$. By the ultrametric inequality,
$$
d(y,z)\le \max(d(y,x),d(x,z))<r.
$$
Hence $z\in B(y;r)$. Therefore
$$
B(x;r)\subseteq B(y;r).
$$
Conversely, if $z\in B(y;r)$, then $d(y,z)<r$, so again by the ultrametric inequality,
$$
d(x,z)\le \max(d(x,y),d(y,z))<r.
$$
Thus $z\in B(x;r)$, and hence
$$
B(y;r)\subseteq B(x;r).
$$
Therefore $B(x;r)=B(y;r)$. This proves that every point of $B$ is a center of $B$.

Now we show that every open ball is closed. Let $B=B(x;r)$ and let $y\notin B$. Then
$$
d(x,y)\ge r.
$$
We claim that
$$
B(y;r)\subseteq X\setminus B(x;r).
$$
If not, then there exists $z\in B(y;r)\cap B(x;r)$. Then
$$
d(y,z)<r
$$
and
$$
d(x,z)<r.
$$
By the ultrametric inequality,
$$
d(x,y)\le \max(d(x,z),d(z,y))<r,
$$
contradicting $d(x,y)\ge r$. Hence $B(y;r)$ is contained in the complement of $B(x;r)$. Therefore every point of $X\setminus B(x;r)$ has an open neighborhood contained in $X\setminus B(x;r)$, so $X\setminus B(x;r)$ is open. Thus $B(x;r)$ is closed.

Since $B(x;r)$ is an open ball, it is open by definition. Therefore every open ball in an ultrametric space is both open and closed.
::

::ProblemBlock{number=4}
#problem
Let $E\subset \mathbb{R}$. Show that if every continuous function $f:E\to \mathbb{R}$ attains its maximum on $E$, i.e.,
$$
\sup_{x\in E} f(x)=f(a)
$$
for some $a\in E$, then $E$ is compact.

#proof
We prove that $E$ is closed and bounded. Since compactness in $\mathbb{R}$ is equivalent to being closed and bounded, this will prove the result.

First suppose that $E$ is unbounded. Define
$$
h(x)=\frac{|x|}{1+|x|},\qquad x\in E.
$$
This function is continuous on $E$ and satisfies
$$
0\le h(x)<1
$$
for every $x\in E$. Since $E$ is unbounded, there is a sequence $x_n\in E$ such that $|x_n|\to \infty$. Therefore
$$
h(x_n)=\frac{|x_n|}{1+|x_n|}\to 1.
$$
Thus
$$
\sup_{x\in E}h(x)=1,
$$
but $h(x)<1$ for every $x\in E$. Hence $h$ does not attain its maximum on $E$, contradicting the hypothesis. Therefore $E$ must be bounded.

Next suppose that $E$ is not closed. Then there exists a point
$$
x_0\in \overline{E}\setminus E.
$$
Define
$$
h(x)=\frac{1}{1+|x-x_0|},\qquad x\in E.
$$
This function is continuous on $E$. Since $x_0\in \overline{E}$, there exists a sequence $x_n\in E$ such that $x_n\to x_0$. Hence
$$
h(x_n)=\frac{1}{1+|x_n-x_0|}\to 1.
$$
Therefore
$$
\sup_{x\in E}h(x)=1.
$$
But $x_0\notin E$, so $|x-x_0|>0$ for every $x\in E$, and hence
$$
h(x)<1
$$
for every $x\in E$. Thus $h$ does not attain its maximum on $E$, again contradicting the hypothesis. Therefore $E$ is closed.

So $E$ is closed and bounded in $\mathbb{R}$. By the Heine-Borel theorem, $E$ is compact.
::

::ProblemBlock{number=5}
#problem
Suppose that $f:[0,1]\to \mathbb{R}$ is a function. Prove that $f$ is continuously differentiable if and only if: for every $\epsilon>0$, there are open intervals $I_1,\ldots,I_n$ such that
$$
[0,1]\subseteq I_1\cup \cdots \cup I_n
$$
and such that, for each $j=1,\ldots,n$ and each $a,b,c,d\in I_j\cap [0,1]$ with $a\ne b$ and $c\ne d$, we have
$$
\left|
\frac{f(a)-f(b)}{a-b}
-
\frac{f(c)-f(d)}{c-d}
\right|
\le \epsilon.
$$

#proof
First suppose that $f$ is continuously differentiable on $[0,1]$. Since $f'$ is continuous on the compact interval $[0,1]$, it is uniformly continuous. Hence, for every $\epsilon>0$, there exists $\delta>0$ such that
$$
|u-v|<\delta
\quad \Longrightarrow \quad
|f'(u)-f'(v)|<\epsilon.
$$
Choose finitely many open intervals $I_1,\ldots,I_n$ covering $[0,1]$, each with length less than $\delta$.

Fix $j$ and take $a,b,c,d\in I_j\cap [0,1]$ with $a\ne b$ and $c\ne d$. By the mean value theorem, there exist points $\xi$ between $a$ and $b$, and $\eta$ between $c$ and $d$, such that
$$
\frac{f(a)-f(b)}{a-b}=f'(\xi)
$$
and
$$
\frac{f(c)-f(d)}{c-d}=f'(\eta).
$$
Since $a,b,c,d$ all lie in the same interval $I_j$, the points $\xi$ and $\eta$ also lie in $I_j\cap [0,1]$. The length of $I_j$ is less than $\delta$, so
$$
|\xi-\eta|<\delta.
$$
Therefore
$$
\left|
\frac{f(a)-f(b)}{a-b}
-
\frac{f(c)-f(d)}{c-d}
\right|
=
|f'(\xi)-f'(\eta)|<\epsilon.
$$
This proves the required local oscillation condition for difference quotients.

Conversely, assume the stated condition. We first prove that $f$ is differentiable. Fix $x\in [0,1]$. Let $\epsilon>0$. By the hypothesis, there is a finite open cover $I_1,\ldots,I_n$ satisfying the stated condition with this $\epsilon$. Choose $I_j$ with $x\in I_j$. Since $I_j$ is open, there exists $\delta>0$ such that
$$
(x-\delta,x+\delta)\cap [0,1]\subseteq I_j\cap [0,1].
$$
For $u,v\in (x-\delta,x+\delta)\cap [0,1]$ with $u\ne x$ and $v\ne x$, apply the hypothesis with
$$
a=u,\qquad b=x,\qquad c=v,\qquad d=x.
$$
We get
$$
\left|
\frac{f(u)-f(x)}{u-x}
-
\frac{f(v)-f(x)}{v-x}
\right|
\le \epsilon.
$$
Thus the difference quotients
$$
\frac{f(u)-f(x)}{u-x}
$$
form a Cauchy family as $u\to x$ within $[0,1]$. Since $\mathbb{R}$ is complete, the limit exists. Therefore $f'(x)$ exists, with the usual one-sided interpretation at the endpoints $0$ and $1$.

It remains to prove that $f'$ is continuous. Let $\epsilon>0$. Choose a finite open cover $I_1,\ldots,I_n$ satisfying the hypothesis with this $\epsilon$. Fix $j$. If $x,y\in I_j\cap [0,1]$, then for $u\to x$ and $v\to y$ with $u\ne x$, $v\ne y$, the hypothesis gives
$$
\left|
\frac{f(u)-f(x)}{u-x}
-
\frac{f(v)-f(y)}{v-y}
\right|
\le \epsilon.
$$
Passing to the limit as $u\to x$ and $v\to y$, we obtain
$$
|f'(x)-f'(y)|\le \epsilon.
$$
Now fix $x_0\in [0,1]$. Choose $I_j$ with $x_0\in I_j$. Since $I_j$ is open, there exists $\rho>0$ such that
$$
(x_0-\rho,x_0+\rho)\cap [0,1]\subseteq I_j\cap [0,1].
$$
For every $y\in (x_0-\rho,x_0+\rho)\cap [0,1]$, the previous estimate gives
$$
|f'(y)-f'(x_0)|\le \epsilon.
$$
Thus $f'$ is continuous at $x_0$. Since $x_0$ was arbitrary, $f'$ is continuous on $[0,1]$. Hence $f$ is continuously differentiable.
::

::ProblemBlock{number=6}
#problem
Let $T:U\to V$ belong to $C^2(U)$, where $U$ and $V$ are open sets in $\mathbb{R}^2$. Assume the determinant of the matrix of first derivatives of $T$ is the constant function $1$. Denote the variables in $U$ by $(x_1,x_2)$ and the variables in $V$ by $(y_1,y_2)$. Recall that, for any differential form $\omega$ on $V$, $\omega_T$ denotes the differential form on $U$ obtained by change of variables using $T$.

<span style="display:inline-block; width:1em;"></span> **(a)** Show that if $\omega=dy_1\wedge dy_2$, then $\omega_T=dx_1\wedge dx_2$.

<span style="display:inline-block; width:1em;"></span> **(b)** Let $\eta=y_1dy_2$. Show that
$$
d(x_1dx_2-\eta_T)=0.
$$

#proof
Write
$$
T(x_1,x_2)=(T_1(x_1,x_2),T_2(x_1,x_2)).
$$
Then under the change of variables $T$, we have
$$
y_1=T_1(x_1,x_2),
\qquad
 y_2=T_2(x_1,x_2).
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Since $dy_1$ pulls back to $dT_1$ and $dy_2$ pulls back to $dT_2$, we get
$$
\omega_T=dT_1\wedge dT_2.
$$
Now
$$
dT_1=\frac{\partial T_1}{\partial x_1}dx_1+\frac{\partial T_1}{\partial x_2}dx_2
$$
and
$$
dT_2=\frac{\partial T_2}{\partial x_1}dx_1+\frac{\partial T_2}{\partial x_2}dx_2.
$$
Therefore
$$
dT_1\wedge dT_2
=
\left(
\frac{\partial T_1}{\partial x_1}\frac{\partial T_2}{\partial x_2}
-
\frac{\partial T_1}{\partial x_2}\frac{\partial T_2}{\partial x_1}
\right)dx_1\wedge dx_2.
$$
The coefficient is exactly $\det DT$. By hypothesis,
$$
\det DT=1.
$$
Hence
$$
\omega_T=dx_1\wedge dx_2.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Since
$$
\eta=y_1dy_2,
$$
we have
$$
d\eta=dy_1\wedge dy_2.
$$
Pullback commutes with exterior differentiation, so
$$
d(\eta_T)=(d\eta)_T=(dy_1\wedge dy_2)_T.
$$
By part **(a)**,
$$
(dy_1\wedge dy_2)_T=dx_1\wedge dx_2.
$$
Also,
$$
d(x_1dx_2)=dx_1\wedge dx_2.
$$
Therefore
$$
d(x_1dx_2-\eta_T)
=
d(x_1dx_2)-d(\eta_T)
=
dx_1\wedge dx_2-dx_1\wedge dx_2
=0.
$$
::

::ProblemBlock{number=7}
#problem
Let $f:[0,1]\to \mathbb{R}$ be continuous. Let
$$
m:=\min_{x\in [a,b]} f(x)
$$
and
$$
M:=\max_{x\in [a,b]} f(x).
$$
Show that for any $c\in [m,M]$, there exists a nondecreasing function $\alpha$ on $[0,1]$ such that
$$
\int_a^b f(x)\,d\alpha(x)=c.
$$

#proof
Assume $0\le a\le b\le 1$. Since $f$ is continuous on $[a,b]$, the intermediate value theorem implies that for every $c\in [m,M]$, there exists $t\in [a,b]$ such that
$$
f(t)=c.
$$
We will choose $\alpha$ to be a nondecreasing step function with a single jump of size $1$ at $t$.

If $t<b$, define
$$
\alpha(x)=\begin{cases}
0,&x\le t,\\
1,&x>t.
\end{cases}
$$
If $t=b$, define
$$
\alpha(x)=\begin{cases}
0,&x<b,\\
1,&x\ge b.
\end{cases}
$$
In either case, $\alpha$ is nondecreasing on $[0,1]$ and has exactly one jump of size $1$ at $t$, interpreted from the side that lies inside the interval of integration.

For a continuous function $f$, the Riemann-Stieltjes integral against a unit step at $t$ equals the value of the integrand at $t$. Hence
$$
\int_a^b f(x)\,d\alpha(x)=f(t).
$$
Since $f(t)=c$, we obtain
$$
\int_a^b f(x)\,d\alpha(x)=c.
$$
Thus such a nondecreasing function $\alpha$ exists.
::

::ProblemBlock{number=8}
#problem
Let $f:B\subset \mathbb{R}^n\to \mathbb{R}$ be a continuously differentiable map where $B$ is the open unit ball in $\mathbb{R}^n$ centered at the origin. Suppose
$$
\|\nabla f(x)\|\le 1
$$
for all $x\in B$. Show that
$$
|f(x)-f(y)|\le \|x-y\|
$$
for all $x,y\in B$.

#proof
Let $x,y\in B$. Since $B$ is convex, the line segment from $y$ to $x$ lies entirely in $B$. Define
$$
\gamma(t)=y+t(x-y),\qquad 0\le t\le 1.
$$
Then $\gamma(t)\in B$ for all $t\in [0,1]$.

Now define
$$
\varphi(t)=f(\gamma(t))=f(y+t(x-y)).
$$
Since $f$ is continuously differentiable, $\varphi$ is differentiable, and by the chain rule,
$$
\varphi'(t)=\nabla f(\gamma(t))\cdot (x-y).
$$
Therefore, by Cauchy's inequality and the hypothesis $\|\nabla f\|\le 1$,
$$
|\varphi'(t)|
\le
\|\nabla f(\gamma(t))\|\,\|x-y\|
\le
\|x-y\|.
$$
Thus
$$
|f(x)-f(y)|
=
|\varphi(1)-\varphi(0)|
=
\left|\int_0^1 \varphi'(t)\,dt\right|
\le
\int_0^1 |\varphi'(t)|\,dt
\le
\int_0^1 \|x-y\|\,dt
=
\|x-y\|.
$$
Hence
$$
|f(x)-f(y)|\le \|x-y\|
$$
for all $x,y\in B$.
::
