# 2021 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $m$ be the Lebesgue measure on $(\mathbb{R},\mathcal{L})$ and $\nu$ be the counting measure. Show that $\nu$ does not have a Lebesgue decomposition with respect to $m$.

#proof
Assume $\nu=\nu_1+\nu_2$ such that 
1. $\nu_1 \ll m$
2. $\nu_2\perp m$

Then by the Lebesgue decomposition theorem $\nu_2$ must be the counting measure plus a singular measure. Since $\nu$ is the counting measure it follows that $\nu_1$ has non-zero component which is a singular measure, which cannot be absolutely continuous with respect to the Lebesgue measure.

::

::ProblemBlock{number=2}
#problem
Let $E\subset \mathbb{R}$ be a (not necessarily measurable) set with $m^*(E)>0$, where $m^*$ is the Lebesgue outer measure given by
$$
m^*(E) = \inf\left\{ \sum_{n\in\mathbb{N}} l(I_n) : I_n \text{ is an open interval for }n\in\mathbb{N}\text{ and }E\subset\bigcup_{n\in\mathbb{N}} I_n \right\}
$$
and $l(I)$ denotes the length of an interval $I\subset\mathbb{R}$. Show that 
$$
\forall \alpha\in(0,1)\,\exists I, \text{ open interval. s.t. } m^*(E\cap I)>\alpha\, m(I).
$$

#proof
Assume there exists and $\alpha<1$ such that $m^*(E\cap I)\leq \alpha m(I)$ for all intervals $I$. Let $\varepsilon>0$ be small enough such that
$$
\sum_{n\in\mathbb{N}} l(I_n)-m^*(E) < \varepsilon \quad\text{ and }\quad \bigcup_{n=1}^\infty I_n \supset E.
$$
Then
$$
\sum_{n=1}^\infty m^*(E\cap I_n) \leq  \alpha \sum_{n=1}^\infty l(I_n) \leq \alpha (m^*(E)+\varepsilon).
$$
On the other hand, we have
$$
\sum_{n=1}^\infty m^*(E\cap I_n) = m^*(E\cap \bigcup_{n=1}^\infty I_n) = m^*(E).
$$
Then $m^*(E)\leq \alpha(m^*(E)+\varepsilon)$ and so $m^*(E)\leq \dfrac{\alpha\varepsilon}{1-\alpha}$. Letting $\varepsilon\to 0$ we get $m^*(E)=0$, a contradiction.
::

::ProblemBlock{number=3}
#problem
Let $(X,\mathcal{M},\mu)$ be a measure space and prove that there exists a function $f\in L^1(X,\mu)$ satisfying $\mu([f=0])=0$ if and only if $(X,\mathcal{M},\mu)$ is $\sigma$-finite.

#proof
Let
$$
A_n = \{ x : n<|f(x)|\leq n+1\}
$$
Then $\bigcup_{n=0}^\infty A_n \cup \{[f=0]\} = X$.
$$
\mu(A_n) = \int_X 1_{A_n} \leq \frac1n \int_X |f(x)|\, dx <\infty.
$$
Thus  if  $\mu([f=0])=0$, then $(X,\mathcal{M},\mu)$ is $\sigma$-finite.

On the other hand, if $(X,\mathcal{M},\mu)$ is $\sigma$-finite, we write 
$$
X=\bigcup_{n=1}^\infty X_n,
$$
where $\mu(X_n) < \infty$. Define 
$$
f(x)=\frac{1}{n^2}\cdot\min (1,\mu(X_n)^{-1})
$$
for $n\in \N$. Then $f\in L^1(X,\mu)$ with $\mu([f=0])=0$.
::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{M},\mu)$ be a probability space, that is, a measure space with $\mu(X)=1$. Let $f$ be a strictly positive $\mathcal{M}$-measurable function on $X$. Prove that
$$
1\leq \left( \int_X f\, d\mu\right)\left(\int_X \frac1f\, d\mu\right).
$$

#proof
For any positive function $F>0$ we have
$$
\int_X\left(\sqrt{F}-\frac{1}{\sqrt{F}}\right)^2 \, d\mu \geq 0,
$$
that is
$$
\int_X F\, d\mu + \int_X\frac{1}{F}\, d\mu \geq 2.
$$
Let $F=\varepsilon f$. We have
$$
\varepsilon\int_X f\, d\mu + \frac{1}{\varepsilon}\int_X\frac{1}{f}\, d\mu \geq 2.
$$
By choosing
$$
\varepsilon = \sqrt{\frac{\int_X f^{-1}\, d\mu}{\int_X f\, d\mu}},
$$
we get
$$
\sqrt{\int_X f\, d\mu}\cdot \sqrt{\int_X f^{-1}\, d\mu} \geq 1,
$$
completing the proof.
#remark
See the remark of [Problem 5 of 2023 Winter Real Analysis Exam](/posts/real-analysis/2023-winter){.text-cyan-800} for the similar trick.
::

::ProblemBlock{number=5}
#problem
Suppose that $f\in L^1(\mathbb{R})$ and prove that
$$
\lim_{n\to+\infty} f(n^2x)=0 \quad \text{for a.e. } x\in\mathbb{R}.
$$

#proof
This problem is very similar to [Problem 5 of 2018 Fall Real Analysis Exam](/posts/real-analysis/2018-fall).

$\forall b>a>0$ we have
$$
\int_a^b f(n^2x)\, dx = \frac{1}{n^2}\int_{n^2a}^{n^2b} f(x)\, dx = \frac{1}{n^2}\int_0^\infty 1_{[n^2a,n^2b]}f(x)\, dx.
$$
Observe that
$$
\sum_{n=1}^\infty 1_{[n^2a,n^2b]}(x) = |\{ x : n^2a\leq x\leq n^2b\}| = \left| \left\{ x : \sqrt{\frac{x}{b}}\leq n\leq \sqrt{\frac{x}{a}} \right\} \right| \leq \sqrt{\frac{n}{b}}-\sqrt{\frac{n}{a}}+2 \leq C\sqrt{n}
$$
for some constant $C$. 
Thus
$$
\sum_{n=1}^\infty   \int_a^b f(n^2x)\, dx \leq \sum_{n=1}^\infty \frac{C\sqrt{n}}{n^2} \int_0^\infty f(x)\,  dx \leq C \sum_{n=1}^\infty \frac{1}{n^{3/2}} \int_0^\infty |f(x)|\, dx < \infty.
$$
In particular, for almost all $x\in(a,b)$, 
$$
\lim_{n\to+\infty} f(n^2x)=0.
$$
Since $a,b$ are arbitrary, the theorem is proved. 
::

::ProblemBlock{number=6}
#problem
Let $A$ and $B$ be two measurable subsets of $\mathbb{R}$ with finite measures and define
$$
f(x) = m((A-x)\cap B)
$$
for the Lebesgue measure $m$. Prove that
$$
\int_\mathbb{R} f(x)\, dx = m(B)\, m(A).
$$
justifying all the steps in your calculation.

#proof
Let $1_X$ be the characteristic function of a set $X$. Then the function $1_{A-x}(t) = 1_A(x+t)$.
$$
f(x) = m((A-x)\cap B) = \int_\mathbb{R} (1_{A-x}1_B)(t)\, dt = \int_\mathbb{R} 1_A(x+t)1_B(t)\, dt.
$$
Then
$$
\int_\mathbb{R} f(x)\, dx = \int_\mathbb{R}\int_\mathbb{R} 1_A(x+t)1_B(t)\, dt\, dx = \int_\mathbb{R} \left( 1_B(t)\, dt \int_\mathbb{R} 1_A(x+t)\, dx \right)
$$
by [Fubini's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem), and hence
$$
\int_\mathbb{R} f(x)\, dx = \int_\mathbb{R} 1_B(t)\, dt \int_\mathbb{R} 1_A(x)\, dx = m(A)\cdot m(B)
$$
by the change of variable formula.
::