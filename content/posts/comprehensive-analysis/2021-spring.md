# 2021 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $E\subset \mathbb{R}$ be an uncountable set. Prove that the set of limit points of $E$ is also uncountable.

#proof
Let $E'$ denote the set of limit points of $E$. We prove that $E'$ is uncountable.

First we show that the set of isolated points of $E$ is countable. A point $x\in E$ is isolated in $E$ if there is an open interval $I_x$ such that
$$
I_x\cap E=\{x\}.
$$
For each isolated point $x\in E$, choose rational numbers $p_x<q_x$ such that
$$
x\in (p_x,q_x)\subset I_x.
$$
Then
$$
(p_x,q_x)\cap E=\{x\}.
$$
The pair $(p_x,q_x)$ determines $x$ uniquely, because if two different isolated points $x,y\in E$ had the same rational interval $(p,q)$, then $(p,q)\cap E$ would contain both $x$ and $y$, which is impossible.

Thus the isolated points of $E$ inject into the countable set
$$
\{(p,q)\in \mathbb{Q}^2:p<q\},
$$
so the isolated points of $E$ form a countable set.

Now every point of $E$ is either isolated in $E$ or is a limit point of $E$. Hence
$$
E\subset E'\cup I,
$$
where $I$ is the countable set of isolated points of $E$. If $E'$ were countable, then $E'\cup I$ would be countable, and therefore $E$ would be countable, contradicting the assumption that $E$ is uncountable.

Therefore $E'$ is uncountable.
::

::ProblemBlock{number=2}
#problem
Consider a sequence of real numbers $\{a_n\}_{n\in\mathbb{N}}$ given by
$$
a_n=
\frac{1^{\sqrt{2}}+2^{\sqrt{2}}+3^{\sqrt{2}}+\cdots+n^{\sqrt{2}}}{n^{\sqrt{2}+1}}.
$$
Does it converge? If yes, find $\lim_{n\to\infty} a_n$.

#proof
Let $\alpha=\sqrt{2}$. Then
$$
a_n=\frac{\sum_{k=1}^n k^\alpha}{n^{\alpha+1}}.
$$
Rewrite this as
$$
a_n=\frac{1}{n}\sum_{k=1}^n \left(\frac{k}{n}\right)^\alpha.
$$
This is the right-endpoint Riemann sum for the continuous function
$$
\phi(x)=x^\alpha
$$
on $[0,1]$. Therefore
$$
\lim_{n\to\infty} a_n
=
\int_0^1 x^\alpha\,dx.
$$
Since $\alpha=\sqrt{2}$, we get
$$
\int_0^1 x^{\sqrt{2}}\,dx
=
\left.\frac{x^{\sqrt{2}+1}}{\sqrt{2}+1}\right|_0^1
=
\frac{1}{\sqrt{2}+1}.
$$
Hence the sequence converges and
$$
\lim_{n\to\infty} a_n=\frac{1}{\sqrt{2}+1}.
$$
::

::ProblemBlock{number=3}
#problem
Let $K$ be a nonempty compact metric space with metric $d$, and suppose $f:K\to K$ obeys
$$
d(f(x),f(y))<d(x,y)
$$
for all distinct $x,y\in K$. Prove that there is a unique $x_0\in K$ with $f(x_0)=x_0$.

#proof
Define
$$
\varphi(x)=d(x,f(x)),\qquad x\in K.
$$
Since $f$ strictly decreases distances, it is continuous. Indeed, if $x_n\to x$, then for $x_n\ne x$,
$$
d(f(x_n),f(x))<d(x_n,x)\to 0,
$$
so $f(x_n)\to f(x)$. Therefore $\varphi$ is continuous on the compact space $K$.

By compactness, $\varphi$ attains its minimum at some $x_0\in K$. We claim that $\varphi(x_0)=0$.

Suppose instead that
$$
\varphi(x_0)=d(x_0,f(x_0))>0.
$$
Then $x_0\ne f(x_0)$. Applying the strict contraction property to the distinct points $x_0$ and $f(x_0)$ gives
$$
d(f(x_0),f(f(x_0)))<d(x_0,f(x_0)).
$$
That is,
$$
\varphi(f(x_0))<\varphi(x_0),
$$
which contradicts the fact that $x_0$ minimizes $\varphi$. Hence
$$
\varphi(x_0)=0,
$$
and therefore
$$
f(x_0)=x_0.
$$

It remains to prove uniqueness. If $x_0$ and $y_0$ are two fixed points and $x_0\ne y_0$, then
$$
d(x_0,y_0)=d(f(x_0),f(y_0))<d(x_0,y_0),
$$
which is impossible. Thus the fixed point is unique.
::

::ProblemBlock{number=4}
#problem
Let $f(x)$ be a continuous function on $[0,1]$. Prove that
$$
\lim_{h\to 0^+}\int_0^1 \frac{h}{h^2+x^2}f(x)\,dx=\frac{\pi}{2}f(0).
$$

#proof
For $h>0$, make the change of variables $x=hu$. Then $dx=h\,du$, and
$$
\frac{h}{h^2+x^2}\,dx
=
\frac{h}{h^2+h^2u^2}h\,du
=
\frac{1}{1+u^2}\,du.
$$
Therefore
$$
\int_0^1 \frac{h}{h^2+x^2}f(x)\,dx
=
\int_0^{1/h}\frac{f(hu)}{1+u^2}\,du.
$$
Equivalently,
$$
\int_0^{1/h}\frac{f(hu)}{1+u^2}\,du
=
\int_0^\infty \frac{f(hu)\mathbf{1}_{[0,1/h]}(u)}{1+u^2}\,du.
$$
For each fixed $u\ge 0$, as $h\to 0^+$ we have $hu\to 0$, so by continuity of $f$,
$$
f(hu)\mathbf{1}_{[0,1/h]}(u)\to f(0).
$$
Also, since $f$ is continuous on $[0,1]$, it is bounded. Let
$$
|f(x)|\le M\qquad 0\le x\le 1.
$$
Then
$$
\left|\frac{f(hu)\mathbf{1}_{[0,1/h]}(u)}{1+u^2}\right|
\le
\frac{M}{1+u^2},
$$
and
$$
\int_0^\infty \frac{M}{1+u^2}\,du<\infty.
$$
By the dominated convergence theorem,
$$
\lim_{h\to 0^+}\int_0^1 \frac{h}{h^2+x^2}f(x)\,dx
=
\int_0^\infty \frac{f(0)}{1+u^2}\,du.
$$
Finally,
$$
\int_0^\infty \frac{1}{1+u^2}\,du
=
\left.\arctan u\right|_0^\infty
=
\frac{\pi}{2}.
$$
Hence
$$
\lim_{h\to 0^+}\int_0^1 \frac{h}{h^2+x^2}f(x)\,dx
=
\frac{\pi}{2}f(0).
$$
::

::ProblemBlock{number=5}
#problem
Let $K$ be a compact metric space, and let $\{f_n\}_{n\in\mathbb{N}}$ be a uniformly bounded equicontinuous family of functions $K\to\mathbb{R}$. For each $n\in\mathbb{N}$, define $g_n:K\to\mathbb{R}$ by
$$
g_n(x)=\max\{f_1(x),\ldots,f_n(x)\}.
$$
Prove that the sequence $\{g_n\}_{n\in\mathbb{N}}$ converges uniformly.

#proof
Since the family $\{f_n\}$ is equicontinuous, each $f_n$ is continuous. Therefore each
$$
g_n(x)=\max\{f_1(x),\ldots,f_n(x)\}
$$
is continuous on $K$.

The sequence $\{g_n\}$ is pointwise increasing, because
$$
g_{n+1}(x)=\max\{g_n(x),f_{n+1}(x)\}\ge g_n(x).
$$
Since the family $\{f_n\}$ is uniformly bounded, there exists $M>0$ such that
$$
|f_n(x)|\le M
$$
for all $n$ and all $x\in K$. Hence
$$
-M\le g_n(x)\le M.
$$
Thus for each $x\in K$, the increasing bounded sequence $\{g_n(x)\}$ converges. Define
$$
g(x)=\lim_{n\to\infty} g_n(x)=\sup_{n\ge 1} f_n(x).
$$

We next prove that $g$ is continuous. Let $\varepsilon>0$. By equicontinuity, there exists $\delta>0$ such that whenever $d(x,y)<\delta$,
$$
|f_n(x)-f_n(y)|<\varepsilon
$$
for every $n$. For such $x,y$, we have
$$
f_n(x)\le f_n(y)+\varepsilon\le g(y)+\varepsilon
$$
for every $n$. Taking the supremum over $n$ gives
$$
g(x)\le g(y)+\varepsilon.
$$
By symmetry,
$$
g(y)\le g(x)+\varepsilon.
$$
Therefore
$$
|g(x)-g(y)|\le \varepsilon,
$$
so $g$ is continuous.

Now $g_n$ is an increasing sequence of continuous functions on compact $K$, and it converges pointwise to the continuous function $g$. By Dini's theorem, the convergence is uniform.

For completeness, we recall the proof of the needed form of Dini's theorem. For $\varepsilon>0$, let
$$
E_n=\{x\in K:g(x)-g_n(x)\ge \varepsilon\}.
$$
Each $E_n$ is closed, and the sets are decreasing:
$$
E_{n+1}\subset E_n.
$$
Since $g_n(x)\to g(x)$ for every $x$, we have
$$
\bigcap_{n=1}^\infty E_n=\varnothing.
$$
By compactness, a decreasing sequence of nonempty compact sets cannot have empty intersection. Hence $E_N=\varnothing$ for some $N$. Thus for all $n\ge N$ and all $x\in K$,
$$
0\le g(x)-g_n(x)<\varepsilon.
$$
This proves uniform convergence.
::

::ProblemBlock{number=6}
#problem
Consider the function $f:\mathbb{R}^2\to\mathbb{R}$,
$$
f(x,y)=
\begin{cases}
0, & \text{if }(x,y)=(0,0),\\
\dfrac{xy^3}{x^2+y^4}, & \text{otherwise}.
\end{cases}
$$

(a) Show that $f$ is continuous.

(b) Show that the partial derivatives $\dfrac{\partial f}{\partial x}$ and $\dfrac{\partial f}{\partial y}$ exist at every point $(x,y)\in\mathbb{R}^2$.

(c) Is $f:\mathbb{R}^2\to\mathbb{R}$ differentiable? Explain your answer.

#proof
Away from $(0,0)$, the function is a quotient of smooth functions with nonzero denominator, so it is continuous and has partial derivatives there. The only point requiring special attention is $(0,0)$.

(a) We prove continuity at $(0,0)$. For $(x,y)\ne (0,0)$,
$$
|f(x,y)|
=
\frac{|x||y|^3}{x^2+y^4}.
$$
Using
$$
2|x|y^2\le x^2+y^4,
$$
we get
$$
|x||y|^3
=
(|x|y^2)|y|
\le
\frac{x^2+y^4}{2}|y|.
$$
Therefore
$$
|f(x,y)|\le \frac{|y|}{2}.
$$
As $(x,y)\to (0,0)$, the right-hand side tends to $0$. Hence
$$
\lim_{(x,y)\to(0,0)} f(x,y)=0=f(0,0),
$$
so $f$ is continuous at $(0,0)$. Therefore $f$ is continuous on $\mathbb{R}^2$.

(b) Away from $(0,0)$, both partial derivatives exist because the function is smooth there. At $(0,0)$, we compute directly:
$$
\frac{\partial f}{\partial x}(0,0)
=
\lim_{h\to 0}\frac{f(h,0)-f(0,0)}{h}
=
\lim_{h\to 0}\frac{0}{h}=0,
$$
and
$$
\frac{\partial f}{\partial y}(0,0)
=
\lim_{h\to 0}\frac{f(0,h)-f(0,0)}{h}
=
\lim_{h\to 0}\frac{0}{h}=0.
$$
Thus both partial derivatives exist at every point of $\mathbb{R}^2$.

(c) The function is not differentiable at $(0,0)$. If $f$ were differentiable at $(0,0)$, then since both partial derivatives at $(0,0)$ are $0$, the derivative would be the zero linear map. Thus we would need
$$
\frac{f(x,y)}{\sqrt{x^2+y^2}}\to 0
$$
as $(x,y)\to(0,0)$.

But along the curve $x=y^2$ with $y>0$, we have
$$
f(y^2,y)
=
\frac{y^2y^3}{y^4+y^4}
=
\frac{y}{2}.
$$
Also,
$$
\sqrt{x^2+y^2}
=
\sqrt{y^4+y^2}
=
y\sqrt{1+y^2}.
$$
Therefore
$$
\frac{f(y^2,y)}{\sqrt{y^4+y^2}}
=
\frac{\frac{y}{2}}{y\sqrt{1+y^2}}
=
\frac{1}{2\sqrt{1+y^2}}
\to \frac12.
$$
This is not $0$. Hence $f$ is not differentiable at $(0,0)$, and therefore $f$ is not differentiable as a function on all of $\mathbb{R}^2$.
::

::ProblemBlock{number=7}
#problem
Prove that the function
$$
f:\mathbb{R}^2\to\mathbb{R},\qquad
f(x,y)=\sin\left(\sqrt{x^2+|\sin y|}\right)
$$
is uniformly continuous on $\mathbb{R}^2$.

#proof
Let
$$
F(x,y)=\sqrt{x^2+|\sin y|}.
$$
Since $|\sin A-\sin B|\le |A-B|$, it is enough to prove that $F$ is uniformly continuous on $\mathbb{R}^2$.

Observe that
$$
F(x,y)=\sqrt{x^2+\left(\sqrt{|\sin y|}\right)^2}.
$$
The Euclidean norm is $1$-Lipschitz, so for any $(x,y),(u,v)\in\mathbb{R}^2$,
$$
|F(x,y)-F(u,v)|
\le
\sqrt{(x-u)^2+
\left(\sqrt{|\sin y|}-\sqrt{|\sin v|}\right)^2}.
$$
For nonnegative numbers $a,b$, we have
$$
|\sqrt{a}-\sqrt{b}|\le \sqrt{|a-b|}.
$$
Thus
$$
\left|\sqrt{|\sin y|}-\sqrt{|\sin v|}\right|
\le
\sqrt{\left||\sin y|-|\sin v|\right|}
\le
\sqrt{|\sin y-\sin v|}
\le
\sqrt{|y-v|}.
$$
Therefore
$$
|F(x,y)-F(u,v)|
\le
\sqrt{(x-u)^2+|y-v|}.
$$

Let $\varepsilon>0$. Choose $\delta>0$ such that
$$
\sqrt{\delta^2+\delta}<\varepsilon.
$$
If
$$
\sqrt{(x-u)^2+(y-v)^2}<\delta,
$$
then $|x-u|<\delta$ and $|y-v|<\delta$, so
$$
|F(x,y)-F(u,v)|<\varepsilon.
$$
Thus $F$ is uniformly continuous.

Finally,
$$
|f(x,y)-f(u,v)|
=
\left|\sin(F(x,y))-\sin(F(u,v))\right|
\le
|F(x,y)-F(u,v)|.
$$
Hence $f$ is uniformly continuous on $\mathbb{R}^2$.
::

::ProblemBlock{number=8}
#problem
Let $f(x)$ be a twice differentiable function satisfying
$$
\lim_{x\to 0}\frac{f(x)}{x}=a.
$$
Does the series
$$
\sum_{n=1}^\infty (-1)^n f\left(\frac{1}{n}\right)
$$
converge? Does it converge absolutely? How does the answer depend on $a$?

#proof
Since
$$
\lim_{x\to 0}\frac{f(x)}{x}=a
$$
exists and is finite, we must have
$$
f(0)=0.
$$
Moreover,
$$
f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}{x}=a.
$$
Because $f$ is twice differentiable at $0$, Taylor's formula with Peano remainder gives
$$
f(x)=f(0)+f'(0)x+\frac12 f''(0)x^2+o(x^2)
$$
as $x\to0$. Hence
$$
f(x)=ax+O(x^2)
$$
as $x\to0$.

Putting $x=1/n$, we obtain
$$
f\left(\frac1n\right)=\frac{a}{n}+O\left(\frac{1}{n^2}\right).
$$
Therefore
$$
(-1)^n f\left(\frac1n\right)
=
a\frac{(-1)^n}{n}+O\left(\frac{1}{n^2}\right).
$$
The alternating harmonic series
$$
\sum_{n=1}^\infty \frac{(-1)^n}{n}
$$
converges, and the series
$$
\sum_{n=1}^\infty O\left(\frac{1}{n^2}\right)
$$
converges absolutely. Hence
$$
\sum_{n=1}^\infty (-1)^n f\left(\frac1n\right)
$$
converges for every value of $a$.

Now consider absolute convergence. Since
$$
f\left(\frac1n\right)=\frac{a}{n}+O\left(\frac1{n^2}\right),
$$
if $a\ne 0$, then
$$
\left|f\left(\frac1n\right)\right|\sim \frac{|a|}{n},
$$
so
$$
\sum_{n=1}^\infty \left|f\left(\frac1n\right)\right|
$$
diverges by comparison with the harmonic series.

If $a=0$, then
$$
f\left(\frac1n\right)=O\left(\frac1{n^2}\right),
$$
so
$$
\sum_{n=1}^\infty \left|f\left(\frac1n\right)\right|
$$
converges by comparison with $\sum 1/n^2$.

Thus the original alternating series always converges. It converges absolutely if and only if $a=0$.
::

::ProblemBlock{number=9}
#problem
Let $U\subset \mathbb{R}^2$ be a region bounded by parabolas $y=x^2$ and $x=y^2$. Evaluate
$$
\int_{\partial U} (y+x^{2021})\,dx+(2023x-e^{2022y})\,dy,
$$
where the boundary $\partial U$ is oriented counterclockwise.

#proof
Let
$$
P(x,y)=y+x^{2021},
\qquad
Q(x,y)=2023x-e^{2022y}.
$$
By Green's theorem,
$$
\int_{\partial U} P\,dx+Q\,dy
=
\iint_U \left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\,dA.
$$
We compute
$$
\frac{\partial Q}{\partial x}=2023
$$
and
$$
\frac{\partial P}{\partial y}=1.
$$
Therefore
$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=2022.
$$
Hence
$$
\int_{\partial U} (y+x^{2021})\,dx+(2023x-e^{2022y})\,dy
=2022\operatorname{Area}(U).
$$

The curves $y=x^2$ and $x=y^2$ intersect at $(0,0)$ and $(1,1)$. On $0\le x\le 1$, the region $U$ is described by
$$
x^2\le y\le \sqrt{x}.
$$
Thus
$$
\operatorname{Area}(U)
=
\int_0^1 (\sqrt{x}-x^2)\,dx.
$$
Compute
$$
\int_0^1 \sqrt{x}\,dx=\frac23
$$
and
$$
\int_0^1 x^2\,dx=\frac13.
$$
Therefore
$$
\operatorname{Area}(U)=\frac23-\frac13=\frac13.
$$
So the integral is
$$
2022\cdot \frac13=674.
$$
Hence
$$
\int_{\partial U} (y+x^{2021})\,dx+(2023x-e^{2022y})\,dy=674.
$$
::
