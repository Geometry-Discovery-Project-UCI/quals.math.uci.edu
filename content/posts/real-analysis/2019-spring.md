# 2019 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $f_n$ be a sequence of functions in $L^\infty([0,1])$ that converge to a function $f\in L^\infty([0,1])$ in $L^2([0,1])$. Prove, or disprove by example, that:

(a) $f_n$ converge to $f$ in $L^1([0,1])$.

(b) $f_n$ converge to $f$ in $L^3([0,1])$.

#proof
(a) is true. It follows from the Cauchy inequality
$$
\|f_n-f\|_{L^1}\leq \|f_n-f\|_{L^2}.
$$

(b) is not true. For example, let $f_n(x)=n^{5/12}$ for $x\in [0,1/n]$. Then $\{f_n\}$ is convergent to $0$ in $L^2([0,1])$ but not is convergent in $L^3([0,1])$.
::

::ProblemBlock{number=2}
#problem
(a) Show that any sequence $f_n$ of non-negative integrable functions on $[0,1]$ with
$$
\int_0^1 f_n^3 \, dx \leq \frac1{n^2}
$$
must converge to zero almost everywhere.

(b) Is there a sequence $g_n$ of non-negative integrable functions on $[0,1]$ satisfying
$$
\int_0^1 g_n^3 \, dx \to 0
$$
which does not converge to zero almost everywhere? Explain.

#proof
(a). Since
$$
\int_0^1(\sum_{n=1}^\infty f_n^3) dx\leq\sum_{n=1}^\infty \frac{1}{n^2}<\infty,
$$
$\sum f_n^3$ must be almost everywhere finite. Hence for almost all $x\in [0,1]$, $f_n(x)\to 0$ as $n\to\infty$.

(b). We consider intervals $I_{k,j}=[j/2^k, (j+1)/2^k]$. Let $1_{I_{k,j}}$ be the characteristic function of 
$I_{k,j}$. Write any $n$ uniquely as $n=2^k+j$, where $0\leq j< 2^k$. Then as $n\to\infty$, we have $k\to\infty$. Let $f_n = 1_{I_{k,j}}$. Then $\int f_n^3\to 0$. However, $f_n$ doesn't tend to zero almost everywhere. 
::

::ProblemBlock{number=3}
#problem
Assume that $\nu$ and $\mu$ are two finite positive measures on a measure space $(X,\mathcal M)$. Prove that $\nu$ is absolutely continuous with respect to $\mu$ if and only if $\lim_{n\to\infty} (\nu-n\mu)_+=0$.

#proof
If $\lim_{n\to\infty} (\nu-n\mu)_+=0$, then for any $E$ with $\mu(E)=0$, we must have 
$$
\nu(E)=\lim_{n\to\infty} (\nu-n\mu)(E)\leq \lim_{n\to\infty} (\nu-n\mu)_+(E)=0.
$$
Hence $\nu\ll \mu$.

On the other hand, if $\nu\ll \mu$, then by [Radon–Nikodym theorem](https://en.wikipedia.org/wiki/Radon–Nikodym_theorem), there is an integrable function $f$ such that 
$$
\nu(E)=\int_E fd\mu
$$
for any measurable set $E$. Thus 
$$
(\nu-n\mu)_+(E)=\int_E (f-n)_+d\mu.
$$
Since $(f-n)_+\leq|f|$ is integrable, we have 
$$
\lim_{n\to\infty} \int_E (f-n)_+d\mu=0
$$
by the [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem).
::

::ProblemBlock{number=4}
#problem
We say a function $f:[-1,1]\to \mathbb{R}$ is convex if
$$
f(tx+(1-t)y) \leq tf(x) + (1-t)f(y)\tag{1}
$$
for all $t\in[0,1]$ and $x,y\in [-1,1]$.

(a) Let $f(x)$ be a $\mathcal C^1$ convex function on $[-1,1]$. Show that $f''$ exists Lebesgue almost everywhere.

(b) Does there exist a $\mathcal C^1$ convex function $f$ on $[-1,1]$ such that $f''$ equals zero almost everywhere, but $f$ is not linear? Either construct or prove it is impossible.

#proof
We assume that $x<y$. From (1), we have 
$$
\frac{f(tx+(1-t)y)-f(y)}{t}\leq f(x)-f(y).
$$
Then we have 
$$
f'(y)(x-y)=\lim_{t\to 0^+} \frac{f(tx+(1-t)y)-f(y)}{t}\leq f(x)-f(y).
$$
Thus 
$$
f'(y)\geq\frac{f(y)-f(x)}{y-x}.
$$
Similarly, we have
$$
f'(x)(y-x)=\lim_{t\to 1^-} \frac{f(tx+(1-t)y)-f(x)}{1-t}\leq f(y)-f(x),
$$
and hence 
$$
f'(x)\leq \frac{f(y)-f(x)}{y-x}.
$$
As a result, we have $f'(x)\leq f'(y)$ whenever $x<y$, i.e., $f'$ is monotonically increasing. As a monotonic function, its derivative exists almost everywhere. This proves (a).

Let $g(x)$ be a singular function, that is, $g$ is strictly monotonically increasing function whose derivative 
is zero almost everywhere. Let $f(x)=\int_0^x g(t) dt$. Then $f$ is $\mathcal C^1$ convex and $f''$ equals 
to zero almost everywhere. 
::

::ProblemBlock{number=5}
#problem
Let $f\in L^1(\mathbb{R})$ and let $g$ be the 1-periodic function on $\mathbb{R}$ with $g(x) = 1-2x$ for $0\leq x<1$. Show that
$$
\lim_{t\to\infty} \int_\mathbb{R} f(x)g(x\sqrt{t}) \, dx = 0.
$$

#proof
We observe that 
$$
\int_0^1 g(x) dx=0.
$$
Then the anti-derivative function 
$$
G(x)=\int_0^x g(t) dt
$$
is a $1$-periodic function. For any $\eps>0$, let $h(x)\in\mathcal C_0^\infty(\R)$ such that 
$$
\int_\R |f(x)-h(x)| dx<\eps.
$$
Using integration by parts, we obtain
$$
\int_\R h(x) g(x\sqrt t) dx=-\frac{1}{\sqrt t}\int_\R h'(x) G(x\sqrt t) dx.
$$
Since $G$ is periodic, and $h'(x)$ is a function with compact support, we have
$$
\lim_{t\to\infty} \left(-\frac{1}{\sqrt t}\int_\R h'(x) G(x\sqrt t) dx\right)=0.
$$
Thus for $t\gg 0$, we must have 
$$
\left|-\frac{1}{\sqrt t}\int_\R h'(x) G(x\sqrt t) dx\right|<\eps.
$$
Since $|g|\leq 1$, by combining the above, we get 
$$
\left|\int_\R h(x) g(x\sqrt t) dx\right|<2\eps
$$
for $t\gg 0$, completing the proof.
::

::ProblemBlock{number=6}
#problem
Let $f$ be a twice continuously differentiable function on $\mathbb{R}$ with compact support. Show that
$$
\|f'\|_{L^2(\mathbb{R})} \leq \frac12 \left(\|f\|_{L^2(\mathbb{R})} + \|f''\|_{L^2(\mathbb{R})}\right).
$$

#proof
Since $f$ is of compact support, we have 
$$
\int_\R (f(x) f'(x))' dx=0,
$$
from which we conclude that 
$$
\int_\R f'(x)^2 dx=-\int_\R f(x) f''(x) dx\leq \|f\|_{L^2(\mathbb{R})}\cdot \|f''\|_{L^2(\mathbb{R})}.
$$
Therefore, we have 
$$
\|f'\|_{L^2(\mathbb{R})}\leq \sqrt{\|f\|_{L^2(\mathbb{R})}}\cdot
\sqrt{\|f''\|_{L^2(\mathbb{R})}}\leq \frac12 \left(\|f\|_{L^2(\mathbb{R})} + \|f''\|_{L^2(\mathbb{R})}\right).
$$
::