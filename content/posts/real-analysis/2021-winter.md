# 2021 Winter Real Analysis

::ProblemBlock{number=1}
#problem
(a) Give an example of a sequence $\{f_n\}_n$ of Lebesgue measurable functions on $[0,1]$ that does not converge to zero almost everywhere, but nonetheless
$$
\int_0^1 f_n^{10}\, dx \to 0
$$

(b) Is there such an example if one assumes that
$$
\int_0^1 f_n^{10}\, dx \leq \frac{1}{n^{10}}
$$
Give an example or prove there isn't one.

#proof
This is very similar to [Problem 4 of 2023 Winter Real Analysis Exam](/posts/real-analysis/2023-winter/),or 
[Problem 2 of 2014 Spring Real Analysis Exam](/posts/real-analysis/2014-spring/).
::

::ProblemBlock{number=2}
#problem
(a) Give an example of a measure $\mu$ on the unit interval that differs from Lebesgue measure such that:

(i) $\mu([0,1])=1$;

(ii) Every Borel set is $\mu$-measurable;

(iii) If $x\in[0,1]$, then $\mu(\{x\})=0$;

(iv) If $(a,b)\subseteq [0,1]$ and $a\neq b$ then $\mu((a,b))\neq 0$.

(b) Show that for all measures $\mu$ on the unit interval satisfying properties (i-iv) there is a measure $\nu$ on the unit square $[0,1]\times[0,1]$ such that

(i) $\nu([0,1]\times[0,1])=1$;

(ii) Every Borel set is $\nu$-measurable;

(iii) If $(x,y)\in[0,1]\times[0,1]$ then $\nu(\{(x,y)\})=0$;

(iv) For $A\subseteq [0,1]$
$$
\nu(A\times [0,1]) = \mu(A).
$$
Define the measure and prove it has properties (i-iv).

#proof
For (a), we take any positive continuous function $f(x)$ such that
$$
\int_0^1 f(x) dx=1.
$$
Then the measure $\mu(E)=\int_E f(x) dx$ satisfies all the requirements.

For (b), we take 
$$
\nu(E)=\iint_E f(x) dxdy.
$$
::

::ProblemBlock{number=3}
#problem
Let $(X,\mathcal{A},\mu)$ and $(Y,\mathcal{B},\nu)$ be the measure spaces given by given by:

- $X=Y=[0,1]$;
- $\mathcal{A}=\mathcal{B}=\mathcal{B}_{[0,1]}$, the Borel $\sigma$-algebra of $[0,1]$;
- $\mu = \mu_L$ (Lebesgue measure) and $\nu$ is the counting measure.

Consider the product measure space $(X\times Y,\sigma(\mathcal{A}\times\mathcal{B}))$ and a subset of it defined by $E = \{(x,y)\in X\times Y : x=y \}$. Then show that

(a) $E\in \sigma(\mathcal{A}\times\mathcal{B})$;

(b) $\int_X \{ \int_Y \mathbf{1}_E\, d\nu \} \, d\mu \neq \int_Y  \{ \int_X \mathbf{1}_E\, d\mu \}\, d\nu$;

(c) Why is Tonelli's theorem not applicable?

#proof
(a). Since
$$
E=\bigcap_{j=1}^\infty \{(x,y)\mid |x-y|<j^{-1}\}
$$
is the countable intersection of open sets, it is measurable.

(b) We have 
$$
\int_X \{ \int_Y \mathbf{1}_E\, d\nu \} \, d\mu =\int_X 1d\mu=1,
$$
but 
$$
\int_Y  \{ \int_X \mathbf{1}_E\, d\mu \}\, d\nu=\int_Y 0d\nu=0.
$$
So they are not equal.

(c).This is because with respect to the counting measure, $Y$ is not $\sigma$-finite. 
::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ and $(Y,\mathcal{B},\nu)$ be $\sigma$-finite measure spaces, and consider the product measure space $(X\times Y,\sigma(\mathcal{A}\times\mathcal{B}),\mu\times\nu)$. Let $f$ be a real-valued, $\mathcal{A}$-measurable and $\mu$-integrable function on $X$ and $g$ a real-valued, $\mathcal{B}$-measurable and $\nu$-integrable function on $Y$. Consider the real-valued function on $X\times Y$ given by $h(x,y)=f(x)g(y)$. Show that $h$ is a $\sigma(\mathcal{A}\times\mathcal{B})$-measurable and $\mu\times\nu$-integrable function on $X\times Y$, and
$$
\int_{X\times Y} h\, d(\mu\times\nu) = \left\{ \int_X f\, d\mu\right\}\left\{ \int_Y g\, d\nu\right\}.
$$

#proof
This follows from approximating both $f$ and $g$ by simple functions. 
::

::ProblemBlock{number=5}
#problem
$g(x):\mathbb{R}\to\mathbb{R}$ is a measurable function and $O$ is non-empty open subset of $\mathbb{R}$. Let $h(t)=t\sin(t)$. Define
$$
f(x) = \inf\{t\geq 0 : h(t)g(x)\in O \}.
$$
Show that $f(x)$ is a real-valued measurable function.

#proof
We write $\R=\{g(x)=0\}\cup \{g(x)\neq 0\}=E_1\cup E_2$. Then on $E_1$, $f(x)=0$ if $0\in O$ and $f(x)=\infty$ if $0\not\in O$. In either case, $f(x)$ is measurable on $E_1$.

We then only need to prove that $f(x)$ is measurable on $E_2$. If $0\in O$, then $f(x)=0$ and is measurable. So for the rest of the proof, we assume that $0\not\in O$.
 Write
$$
O=\bigcup_{j=1}^\infty (a_{2j}, a_{2j+1})
$$
as disjoint union of open intervals. Then 
$$
f(x)=\inf_{j\in \N}\inf \{t\geq 0\mid h(t)=a_j/g(x)\}.
$$
So it suffices to prove that 
$$
r(x)=r_j(x)=\inf \{t\geq 0\mid h(t)=a_j/g(x)\}
$$
is a measurable function. 

Let $b_0=0$ and $b_j>0$ be a sequence of real numbers such that on $(b_{2j}, b_{2j+1})$ $h(t)$ is increasing and on 
$(b_{2j+1}, b_{2j+2})$ $h(t)$ is decreasing. Let 
$p_{ji}(x)=a_j/g(x)\cdot 1_{(b_i,b_{i+1})}$ for all $i\geq 0$. Note that $a_j/g(x)$ is never zero. Define
$r_{ji}(x)=\infty$ if $h(t)=p_{ji}(x)$ has no solution and $r_{ji}(x)=t$ if $h(t)=p_{ji}(x)$. Then $r_{ji}(x)$ are measurable functions. Since $r_j(x)=\inf_{i} r_{ji}(x)$, it must be measurable. 
 This completes the proof.
::

::ProblemBlock{number=6}
#problem
$\{f_n\}_{n\geq 1}$ is a sequence of real valued function in $L^2([0,1])$. Suppose that for any $g\in L^2([0,1])$,
$$
\sup_{n\geq 1} \int_{[0,1]} f_ng\, dx < +\infty
$$
Prove that
$$
\sup_{n\geq 1} \|f_n\|_{L^2([0,1])} < +\infty
$$
(You may NOT simply quote the Banach-Steinhaus Theorem or the Uniform Boundedness Principle.)

#proof
For any $m\in\mathbb N$, let
$$
A_m=\{g\in L^2([0,1])\mid \left|\int_{[0,1]}f_n gdx\right|\leq m\|g\|_{L^2([0,1])}\quad {\rm for}\,\,{\rm  any } \,\,n\}.
$$
By assumption, we have
$$
\bigcup_{m=1}^\infty A_m =L^2([0,1]).
$$
Since $L^2([0,1])$ is a complete metric space, it is of second category. By the [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem), at lease one of $A_m$ must be of second category. Thus for such an $m$, $A_m$ is dense on a ball $B_h(r)$ for some $h\in L^2([0,1])$ and some $r>0$. By continuity. we know that  for any $g\in B_h(r)$, we have 
$$
\left|\int_{[0,1]} f_ng\, dx\right|\leq m\|g\|_{L^2([0,1])},\qquad n\in \N.
$$
Now let $g\in L^2([0,1])$. Write $g=h+\lambda g_1$ for some $g_1\in B_h(r)$ with $\|g_1-h\|_{L^2([0,1])}=r/2$.
Then 
$$
\left|\int_{[0,1]}f_n gdx\right|\leq \left|\int_{[0,1]}f_n hdx\right|+r \left|\int_{[0,1]}f_n g_1dx\right|
\leq m\|g\|_{L^2([0,1])}+(C+m)\|h\|_{L^2([0,1])},
$$
where $C$ is defined to be
$$
\left|\int_{[0,1]}f_n hdx\right|\leq C\|h\|_{L^2([0,1])}.
$$
Replacing $g$ by $Ag$ for $A\gg 0$, we get 
$$
A\left|\int_{[0,1]}f_n gdx\right|
\leq Am\|g\|_{L^2([0,1])}+(C+m)\|h\|_{L^2([0,1])}.
$$
Letting $A\to\infty$, we shall get
$$
\left|\int_{[0,1]}f_n gdx\right|
\leq m\|g\|_{L^2([0,1])},
$$
which implies the theorem. 
::