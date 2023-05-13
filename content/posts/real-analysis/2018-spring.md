# 2018 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $f\in L^2(\mathbb{R})$, and let $(\alpha_n)_{n=1}^\infty$, $(\beta_n)_{n=1}^\infty$ be sequences of real numbers such that $\alpha_n\neq 0$ for all $n=1,2,\ldots$ and $\sum_{n=1}^\infty \frac{|\beta_n|}{|\alpha_n|^{1/2}}<\infty$. Show that $\lim_{n\to\infty}\beta_n f(\alpha_nx)=0$ for almost all $x\in\mathbb{R}$.

#proof
We consider 
$$
\int_\R \sum_{n=1}^\infty \beta_n^2f(\alpha_n x)^2 dx=\sum_{n=1}^\infty \frac{\beta_n^2}{\alpha_n}\int_\R f(x)^2 dx.
$$
Since $\sum_{n=1}^\infty \frac{|\beta_n|}{|\alpha_n|^{1/2}}<\infty$, we have 
$\sum_{n=1}^\infty \frac{\beta_n^2}{\alpha_n}<\infty$. So the function $\sum_{n=1}^\infty \beta_n^2f(\alpha_n x)^2$ is almost everywhere finite, and the conclusion follows. 
::

::ProblemBlock{number=2}
#problem
Let $g_k,g\in L^1(\mathbb{R})$ and assume that $g_k\to g$ in $L^1(\mathbb{R})$ as $k\to \infty$. Let $(\alpha_k)_{k=1}^\infty$ be a bounded sequence in $\mathbb{R}$, and let $f_k(x):=g_k(x+\alpha_k)$, $k=1,2,\ldots$. Prove that the sequence of function $(f_k)_{k=1}^\infty$ has a subsequence that converges in $L^1(\mathbb{R})$, almost everywhere, and in measure.

#proof
The sequence $\{\alpha_k\}$ has a convergent subsequence. For the sake of simplicity, we assume that the subsequence is the sequence itself, and the limit is $\alpha$. Then we can prove that $f_k$ is convergent to $g(x+\alpha)$. Thus subsequence of $f_k$ is convergent to some $f$ in $L^1(\R)$ almost everywhere. 

In the above proof, we need to use the fact that 
$$
\lim_{h\to 0}\int_\R|g(x+h)-g(x)| dx=0.
$$
::

::ProblemBlock{number=3}
#problem
Let $f,g\in L^p(\mathbb{R}^n)$ for some $1<p<\infty$. Assume that for every $0<t<\infty$,
$$
m(\{ x\in\mathbb{R}^n : |g(x)|>t \}) \leq \frac1t \int_{\{x\in\mathbb{R}^n : |g(x)|>t \}} |f(x)|\, dx,
$$
where $m$ is the Lebesgue measure. Show that
$$
\|g\|_{L^p(\mathbb{R}^n)} \leq p'\|f\|_{L^p(\mathbb{R}^n)} \qquad \frac1p + \frac1{p'} = 1.
$$

#proof
We have
$$
\frac 1p\int|g|^p=\int_0^\infty t^{p-1} m(\{ x\in\mathbb{R}^n : |g(x)|>t \}) dt\leq 
\int_0^\infty\int t^{p-2} f(x) 1_{\{x\in\mathbb{R}^n : |g(x)|>t \}}=\frac{1}{p-1}\int g(x)^{p-1} f(x) dx.
$$
By [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality), we have
$$
\left|\int g(x)^{p-1} f(x) dx\right|\leq \left(\int g(x)^pdx\right)^{\frac{p-1}p}\left(\int f(x)^p\right)^{1/p}.
$$
The theorem follows. 
::

::ProblemBlock{number=4}
#problem
Let $f\in L^1(\mathbb{R})$ be such that
$$
\int_E f(y)\, dy = 0
$$
for all Lebesgue measurable sets $E\subset \mathbb{R}$ with $m(E)=\pi$. Prove or disprove that $f(x)=0$ for almost all $x\in \mathbb{R}$.

#proof
Yes, $f(x)=0$ a.e..

Let $\sigma<\pi$ be a positive number. Let $x\in R$. Consider $E=[x,x+\sigma]\cup [a,a+\pi-\sigma]$, where $a$ is chosen so that the two intervals don't intersect. Then $m(E)=\pi$. From 
$$
\int_x^{x+a} f(y)dy+\int_a^{a+\pi-\sigma}f(y) dy=0,
$$
by taking derivative with respect to $x$, we get
$f(x)=f(x+\sigma)$. Since both $x$ and $\sigma$ are arbitrary, we conclude that $f$ is a constant function. But since $f\in L^1(\R)$, we conclude that $f(x)=0$ almost everywhere. 
::

::ProblemBlock{number=5}
#problem
Let $\mu$ be a positive finite Borel measure on $[0,1]$ and let $\varphi:[0,1]\to [0,1]$ be continuous. Assume that $\mu(\varphi^{-1}(E))=0$ for every Borel set $E\subset [0,1]$ with $\mu(E)=0$. Show that there is a Borel measurable function $f:[0,1]\to[0,\infty)$ such that 
$$
\int_0^1 g(\varphi(x))\, d\mu(x) = \int_0^1 g(x)f(x) \, d\mu(x)\tag{1}
$$
for all continuous $g:[0,1]\to\mathbb{R}$.

#proof
Let $\nu$ be the measure such that $\nu(E)=\mu(\varphi^{-1}(E))$. Then by assumption, $\nu\ll \mu$. By 
[Radon–Nikodym theorem](https://en.wikipedia.org/wiki/Radon–Nikodym_theorem), there is a function $f$ such that 
$$
\mu(\varphi^{-1}(E))=\nu(E)=\int_E f(x) d\mu(x).
$$
The above equation is equivalent to that (1) is valid for all characteristic function $g$. By taking limit, the equation must be true for all continuous functions.
::

::ProblemBlock{number=6}
#problem
Let $f\in L^p([0,1])$ for some $1\leq p<\infty$. Compute
$$
\lim_{n\to\infty} \left( n^{p-1}\sum_{k=0}^{n-1}\left(\int_{k/n}^{(k+1)/n} |f(y)|\, dy\right)^p\right)^{1/p}.
$$

#proof
The limit is equal to $\|f\|_{L^p([0,1])}$.

First, we observe that by using the [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality), we have 
$$
n^{p-1} \int_{k/n}^{(k+1)/n} |f(y)|\, dy\leq \int_{k/n}^{(k+1)/n} |f(y)|^p\, dy.
$$
Thus 
$$
\left( n^{p-1}\sum_{k=0}^{n-1}\left(\int_{k/n}^{(k+1)/n} |f(y)|\, dy\right)^p\right)^{1/p}\leq \|f\|_{L^p([0,1])}.
$$

Next, let $g$ be a Riemann integrable function. Then we have 
$$
n^{p-1}\left(\int_{k/n}^{(k+1)/n} |g(y)|\, dy\right)^p\geq n^{-1}\left(\min_{[k/n,(k+1)/n]}|g(y)|\right)^p.
$$
Summing over $n$ and taking limit, we get
$$
\lim_{n\to\infty} \left( n^{p-1}\sum_{k=0}^{n-1}\left(\int_{k/n}^{(k+1)/n} |g(y)|\, dy\right)^p\right)^{1/p}
\geq \|g\|_{L^p([0,1])}.
$$

Finally, for any $\eps>0$, we let $g$ be Riemann integrable so that $\|f-g\|_{L^p([0,1])}<\eps$. Thw we have 
$$
\lim_{n\to\infty} \left( n^{p-1}\sum_{k=0}^{n-1}\left(\int_{k/n}^{(k+1)/n} |f(y)-g(y)|\, dy\right)^p\right)^{1/p}\leq \|f-g\|_{L^p([0,1])}<\eps.
$$
A method of approximation can be used here to complete the proof.
::