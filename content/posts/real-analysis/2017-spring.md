# 2017 Spring Real Analysis

::ProblemBlock{number=1}
#problem
There are five separate statements listed below. For each, say whether it is true or false. For true statement cite an appropriate theorem or give a justification. For false statements provide counterexamples.

If $E_n$ is a sequence of measurable sets in a measure space $(X,\mu)$ such that $\mu(E_n)\to 0$, and $f:X\to \mathbb{R}$ is measurable, is it true that you can conclude that $\int_{E_n} f\, d\mu \to 0$ if

(a) $f\geq 0$;

(b) $E_n$ are nested and decreasing;

(c) $X=\mathbb{R}^n$ and $f$ is continuous;

(d) $X=\mathbb{R}^n$ and $f$ is locally integrable;

(e) $f\in L^1(X,\mu)$.

#proof
(a). is not true. Let $f(x)=n\cdot 1_{E_n}$. Then $\int_{E_n} f\, d\mu \to \infty$;

(b). is not true. Let $X=[0,1]$; $f(x)=1/x$, and let $E_n=[0,1/n]$;

(c). is not true, see the above counterexample;

(d). is not true. Let $f(x)=\|x\|$. Let $x_n\to\infty$ be a sequence of $\R^n$. Let $E_n=B_{x_n}(r_n)$ for 
some appropriate $r_n$;

(e). is true. It follows from [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem).
::

::ProblemBlock{number=2}
#problem
Consider Lebesgue measure on the real line.

Let $X\subset \mathbb{R}$ be a measurable subset, and consider a sequence of real measurable function $f_n$. Suppose that $f_n\to 0$ a.e. in $X$. If $\int_X f_n^4\, dx \leq 1$, is it true that
$$
\lim_{n\to\infty} \int_X |f_n|\, dx = 0
$$
if

(a) $X=[0,1]$;

(b) $X=\mathbb{R}$.

Prove or give a counterexample.

#proof
(a). is true. For any $\eps>0$, there is a measurable set $E$ with $\mu(E)<\eps$ and $f_n\to 0$ uniformly 
on $E^c$. By [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality), we have
$$
\int_E|f_n|dx\leq\left(\int_E|f_n|^4dx\right)^{1/4}\cdot\mu(E_n)^{3/4}\leq \eps^{3/4}.
$$
Then
$$
\int_{[0,1]}|f_n|\leq \int_{E^c} |f_n|dx+ \eps^{3/4}.
$$
Letting $n\to\infty$, we get
$$
\int_{[0,1]}|f_n|\leq 2\eps,
$$
completing the proof.

(b). This is not true. Let $f_n=1_{[n,n+1]}$. Then $f_n\to 0$ almost everywhere, and $\int_\R f_n^4 dx=1$. But 
$\int_\R |f_n|dx =1$. 
::

::ProblemBlock{number=3}
#problem
Let $f$ be a measurable function on $[0,1]$. Assume that for any $t\geq 0$, $m\{|f|\geq t\}\leq \frac1{t^2}$. Show that $f\in L^1([0,1])$.

#proof
We first observe that 
$$
\int^\infty_{1/2}\{|f|\geq \frac 12\}dt\leq \int_{1/2}^\infty \frac{1}{t^2} dt=2.
$$
On the other hand, by [Fubini's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem), we have 
$$
\int^\infty_{1/2}\{|f|\geq \frac 12\}dt=\int_{1/2}^\infty\int_0^11_{|f|\geq 1/2}dxdt
=\int_0^1\int_{1/2}^\infty 1_{|f|\geq 1/2}dt dx=\int_0^1 (|f(x)|-\frac 12)dx.
$$
The theorem is proved by combining the above two inequalities.
::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ be a $\sigma$-finite measure space with $\mu(X)=\infty$.

(a) Prove that there exist $\{B_n\}_{n\in\mathbb{N}}\subset\mathcal{A}$, disjoint, such that $1\leq \mu(B_n)<\infty$ for all $n\in\mathbb{N}$ and $X = \bigcup_{n\in\mathbb{N}} B_n$.

(b) Prove that there exists an $\mathcal{A}$-measurable real-valued funtion $f$ on $X$ such that $f\notin L^1$ but $f\in L^p$ for all $p\in (1,\infty)$.

#proof
Write 
$$
X=\bigcup_{j=1}^\infty X_j
$$
such that $\mu(X_j)<\infty$. Replacing $X_j$ by $X_j\backslash \cup_{i<j} X_i$ is needed, we may assume that all $X_j$ are disjoint. 

Let $a_j=\mu(X_j)$. Then $\sum a_j=\infty$. Therefore there is a subsequence $\{j_k\}$ of $\N$ such that 
$$
\sum_{i=j_k+1}^{j_{k+1}} a_i\geq 1.
$$
We take 
$$
B_n=\bigcup_{i=j_n+1}^{j_{n+1}} X_i.
$$
Then $B_n$ satisfies the requirement. 

(b). Define a function $f(x)$ such that $f(x)=(n\cdot\mu(B_n))^{-1}$ if $x\in B_n$. Then
$$
\int_X f(x) d\mu=\sum_{n=1}^\infty\frac 1n=\infty
$$
is not integrable. 
But for any $p>1$, 
$$
\int_X f(x)^p d\mu=\sum_{n=1}^\infty\frac{1}{n^p}\cdot\frac{1}{\mu(B_n)^{p-1}}\leq \sum_{n=1}^\infty\frac{1}{n^p}<\infty.
$$
::

::ProblemBlock{number=5}
#problem
Let $(X,\mathcal{A},\mu)$ be a measure space. Show that

(a) $L^1(X,\mathcal{A},\mu)\cap L^\infty(X,\mathcal{A},\mu) = \bigcap_{p\in[1,\infty]} L^p(X,\mathcal{A},\mu)$;

(b) It is not always true that $L^1(X,\mathcal{A},\mu)\cup L^\infty(X,\mathcal{A},\mu) \supset \bigcap_{p\in(1,\infty)} L^p(X,\mathcal{A},\mu)$.

#proof
(a). We just need to prove that, if a function is in both $L^1$ and $L^\infty$, then it is in $L^p$. But an $L^\infty$ function is (essentially) bounded. Thus
$$
\int_X |f|^p d\mu\leq C\int_X|f|d\mu<\infty.
$$
This completes the proof.

(b). is not true. Let $X=[0,\infty)$ with respect to the Lebesgue measure. Let $f(x)=\log x^{-1}$ for $x<1$, 
and $f(x)=1/x$ for $x\geq 1$. Then $f\in L^p$ for all $p\in (1,\infty)$, but $f$ is neither in $L^1$ nor in $L^\infty$.
::

::ProblemBlock{number=6}
#problem
Let $U$ be open in $\mathbb{R}^2$. Show that $U$ is equal to the union of pairwise disjoint open balls and a set of Lebesgue measure zero.

Hint: First show there are disjoint open balls $B_i\subset U$ with $m(\bigcup_{i=1}^\infty B_i) > \frac{m(U)}{5}$.

#proof
Let $U_1=U$. Without loss of generality, we assume that $m(U)=1$.
By [Vitali covering lemma (see the infinite version)](https://en.wikipedia.org/wiki/Vitali_covering_lemma), 
there are disjoint open balls $B^1_i\subset U_1$ with $m(\bigcup_{i=1}^\infty B^1_i) > \frac{m(U_1)}{5}$. Let  $U_2=U_1\backslash \bigcup_{i=1}^\infty B_i$. Using the Vitali covering lemma on $U_2$, 
there are disjoint open balls $B^2_i\subset U_2$ with $m(\bigcup_{i=1}^\infty B^k_i) > \frac{m(U_2)}{5}$.
Inductively, we can define $U_k$. 

By construction, 
$m(U_k)\leq \frac 45 m(U_{k-1})$. Thus 
$$
m(\bigcup_{k=1}^\infty \bigcup_{i=1}^\infty B^k_i)\geq \frac 15+\frac 45\cdot\frac 15+\left(\frac 45\right)^2\cdot\frac 15+\cdots =1.
$$
This completes the proof.
::