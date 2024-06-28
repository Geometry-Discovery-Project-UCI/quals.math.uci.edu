 2024 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Assume that $f\in L^2(\mathbb R)$. Let $F(x)=\int_0^x f(t) dt$. Show that
$$
\lim_{x\to\infty}\frac{F(x)}{\sqrt x}=0.
$$

#proof
Let $A>0$ be any positive  number. Then for $x$ large enough
$$
\begin{split}
&|F(x)|\leq \left|\int_0^A f(t) dt\right|+\int_A^x|f(t)| dt\\
&\leq \left|\int_0^A f(t) dt\right|+\sqrt{x-A}\cdot\sqrt{\int_A^xf(t)^2 dt}\\
&\leq \left|\int_0^A f(t) dt\right|+\sqrt{x-A}\cdot\sqrt{\int_A^\infty f(t)^2 dt}.
\end{split}
$$
Since $f\in L^2(\R)$, for any $\eps>0$, there exists an $A$ such that 
$$
\int_A^\infty f(t)^2 dt<\eps.
$$
Thus 
$$
|F(x)|\leq \left|\int_0^A f(t) dt\right|+\sqrt\eps\cdot \sqrt{x-A}
$$
Since $A$ is fixed, we conclude that 
$$
\limsup_{x\to\infty}\left|\frac{F(x)}{x}\right|\leq \sqrt\eps
$$
for any $\eps>0$. This completes the proof. 
::

::ProblemBlock{number=2}
#problem
Suppose that $f(x)$ and $\{ f_n(x)\}_{n\geq 1}$ are nonnegative integrable functions on $\mathbb R$. Assume further that 
$$
\lim_{n\to\infty} f_n(x)=f(x)\,\,\,a.e.\,\,\,{\rm and }\,\,\, \lim_{n\to\infty}\int_{\mathbb R} f_n(x) dx
=\int_{\mathbb R} f(x) dx.
$$
Prove that for any measureable set $E\subset \mathbb R$,
$$
\lim_{n\to\infty}\int_E f_n(x) dx=\int_E f(x) dx.
$$



#proof
By [Fatou's Lemma](https://en.wikipedia.org/wiki/Fatou%27s_lemma), we have
$$
\int_E f(x) dx\leq \liminf_{n\to\infty}\int_E f_n(x) dx. 
$$ 
Thus for any subsequence $\{n_k\}$ of $\mathbb N$ we have 
$$
\int_E f(x) dx\leq \lim_{k\to\infty}\int_E f_{n_k}(x) dx. 
$$ 
On the other hand, using the Fatou's Lemma again, we have 
$$
\int_{\R\backslash E} f(x) dx\leq  \liminf_{k\to\infty} \int_{\R\backslash E}f_{n_k}(x) dx.
$$ 
Thus we have 
$$
\int_\R f(x) dx =\int_E f(x) dx+ \int_{\R\backslash E} f(x) dx
\leq \lim_{k\to\infty}\int_E f_{n_k}(x) dx+ \liminf_{k\to\infty} \int_{\R\backslash E}f_{n_k}(x) dx.
$$
 The above righ side is equal to
 $$
\liminf_{k\to\infty} \int_{\R}f_{n_k}(x) dx=\lim_{n\to\infty} \int_{\R}f_{n}(x) dx=\int_\R f(x) dx.
 $$
 Since  equality must be valid for all the above inequalities, we have 
$$
\int_E f(x) dx= \lim_{k\to\infty}\int_E f_{n_k}(x) dx
$$ 
for any subsequence. This completes the proof. 
::

::ProblemBlock{number=3}
#problem
Let $f: [0,1]\to\mathbb R$ be non-decreasing. Recalling that this assumption implies that $f'(x)$ exists 
for almost all $x\in[0,1]$ (with respect to Lebesgue measure $dx$). Prove that
$$
\int_0^1 f'(x) dx\leq f(1)-f(0).
$$

#proof
Define 
$$
f_n(x)=n\left(f(x+\frac 1n)-f(x)\right)
$$
for any $n\in\N$ (if $x+1/n>1$, then we define $f(x+1/n)=f(1)$). Then $f_n(x)$ are nonnegarive and 
$$
\lim_{n\to\infty} f_n(x)=f'(x)
$$
almost everywhere.

We also have 
$$
\int_0^1 f_n(x) dx=n\int_0^1 \left(f(x+\frac 1n)-f(x)\right) dx=n\left(\int_1^{1+1/n} f(x) dx-\int_0^{1/n} f(x) dx\right)\leq f(1)-f(0). 
$$
Thus the problem follows from the [Fatou's Lemma](https://en.wikipedia.org/wiki/Fatou%27s_lemma)
$$
\int_0^1 f'(x) dx\leq \liminf_{n\to\infty} \int_0^1f_n(x) dx\leq f(1)-f(0).
$$
::

::ProblemBlock{number=4}
#problem
Suppose that $(X,\mathfrak B,\mu)$ is a measure space and $f: X\to\mathbb R$ and $g: X\to\R$
are integrable. For each $t\in\R$, set 
$$
A_t:=\{x\in X\mid f(x)>t\}
$$
and 
$$
B_t:=\{x\in X\mid g(x)>t)\}.
$$ 

**Part a:** Assume that $(X,\mathfrak B,\mu)$ is $\sigma$-finite. Prove that 
$$
\int_X|f-g| d\mu=\int_{-\infty}^\infty\mu(A_t\Delta B_t) dt.
$$
Here, for subsets $C$ and $D$ of a set $Y$,
$$
C\Delta D:=(C\backslash D) \cup (D\backslash C)
$$
denotes their symmetric difference. 

**Part b:** Show that the conclusion of part (a) holds even if $(X,\mathfrak B,\mu)$ is not $\sigma$-finite.

#proof
Let
$$
X_1=\{x\mid  f(x)>g(x)\},\qquad X_2=\{x\mid  f(x)<g(x)\},\qquad X_3=\{x\mid f(x)=g(x)\}.
$$
Then 
$$
\int_X |f-g| d\mu=\int_{X_1} (f-g) d\mu+ \int_{X_2} (g-f) d\mu.
$$
Let $X'=X_1\cup X_2$. If we restrict the measure $\mu$ to $X'$, then since $f,g$ are integrable, $X'$ is $\sigma$-finite. This answers Part b of the problem. 

Let $1_E$ be the characterisic function with respect to a set $E$. Then on $X_1$
$$
f(x)-g(x)=\int^\infty_{-\infty} 1_{A_t\backslash B_t}(x) dt.
$$
Then by [Tonelli's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem#Tonelli's_theorem) (which does need $\sigma$-finiteness), we have 
$$
\int_{X_1} (f-g) d\mu=\int_{X_1} \int^\infty_{-\infty} 1_{A_t\backslash B_t}(x) dt\,d\mu=
\int^\infty_{-\infty} \int_{X_1} 1_{A_t\backslash B_t}(x) d\mu,dt=\int_{-\infty}^\infty \mu(A_t\backslash B_t) dt.
$$
Similarly, we have 
$$
\int_{X_2} (g-f) d\mu= \int_{-\infty}^\infty \mu(B_t\backslash A_t) dt.
$$
Combininig the above equalities we get the conclusion.
::

::ProblemBlock{number=5}
#problem
For $x\in\R$ and $t>0$, let 
$$
\rho(x):=\max\{1-|x|,0\}
$$ 
and 
$$
\rho_t(x):=t\rho(tx).
$$

**Part a:** Let $u$ be a continuous function on $\R$ that vanishes outside of a compact set. Prove that 
the functions 
$$
u_t(x):=\int_\R\rho_t(x-y)u(y) dy
$$ 
converge uniformly to $u$ on $\R$ as $t\to\infty$.

**Part b:** Let $u\in L^p(\R)$ for some $p\in[1,\infty)$. Prove that the functions 
$$
u_t(x):=\int_\R \rho_t(x-y) u(y)
dy
$$ 
converge to $u$ in $L^p(\R)$ as $t\to\infty$.

#proof
 We first observe that, for any $x\in\R$, 
 $$
\int_\R \rho_t(x-y) dy=\int_\R\rho(y) dy=1.
 $$
 Thus we have the following identity
 $$
(u_t-u)(x)=\int_\R\rho_t(x-y)(u(y)-u(x)) dy.
 $$
 To prove Part a, we note that since $u$ is continuous with compact support, then $u$ is uniformly continuous. As a result, for any $\eps>0$, there is a $\delta>0$ such that $|u(x)-u(y)|<\eps$ whenever $|x-y|<\delta$. For such a $\delta$, we choose $t$ large enough so that if $|x-y|\geq\delta$, then $\rho_t(x-y)=0$. Thus
 $$
|u_t(x)-u(x)|\leq \int_\R \rho_t(x-y)\,\eps dy=\eps,
 $$
 completing the proof. 

To prove Part b, we take any $\eps>0$. Then we can find a smooth function $v$ with compact support so that
$$
\|u-v\|_{L^p}<\eps.
$$
Let $A=\max_{x\in\R} |v'(x)|$. Then $A$ is a finite number that may depend on $\eps$. We estimate 
$$
|v_t(x)-v(x)|\leq \int_\R\rho_t(x-y)|v(y)-v(x)| dy\leq A\int_\R\rho_t(x-y)|x-y| dy\leq CA/t
$$
for some constant $C>0$ independent to $\eps$. For $t$ large enough, this implies that 
$$
\|v_t-v\|_{L^p}\leq\eps.
$$

Finally, by [Young's convolution inequality](https://en.wikipedia.org/wiki/Young%27s_convolution_inequality), we have
$$
\|u_t-v_t\|_{L^p}\leq \|u-v\|_{L^p}.
$$
Thus by the triangle inequality, we have 
$$
\|u_t-u\|_{L^p}\leq 3\eps
$$
and the conclusion follows. 
#remark
The specific expression of function $\rho$ is not important. The result holds true for any nonnegative continuous function with compact support such that 
$$
\int_\R\rho(x) dx=1.
$$
::

 

::ProblemBlock{number=6}
#problem
Suppose $E\subset \R$ is a (Lebesgue) measurable subset. For all $x\in\R$, define 
$$
d(x,E)=\inf_{y\in E}|x-y|.
$$
Prove that for a.e. $x\in E$,
$$
\lim_{y\to 0}\frac{d(x+y,E)}{|y|}=0.
$$

#proof
We assume that $m(E)>0$. 
Let $x\in E$ be a fixed point. 
We assume that $y>0$ without loss of generaly. Let $r_y={\rm dist(x+y,E)}$. Then 
$$
(E\cap [x-y,x+y])\cap (x+y-r_y, x+y]=\emptyset.
$$
As a result, we have 
$$
m(E\cap [x-y,x+y])+r_y\leq 2y.
$$
Thus 
$$
\limsup_{y\to 0} \frac{m(E\cap [x-y,x+y])}{2y}+\limsup_{y\to 0}\frac{r_y}{2y}\leq 1.
$$
By the [Lebesgue's density theorem](https://en.wikipedia.org/wiki/Lebesgue%27s_density_theorem), for almost all $x\in E$,
$$
\limsup_{y\to 0} \frac{m(E\cap [x-y,x+y])}{2y}=1.
$$
The result follows. 
::
