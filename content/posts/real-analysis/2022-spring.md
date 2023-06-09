# 2022 Spring Real Analysis

::ProblemBlock{number=1}
#problem
In a topological space $X$, a subset $E\subset X$ 
             is called a $G_\delta$ set if it can be written as the 
             countable intersection of open sets. 
             Consider a map $f : X → Y$ between metric spaces $X$ and $Y$. Prove that 
$$
        C(f)=\{x\in X\mid f \text{ is continuous at } x \}
$$
is a $G_\delta$ subset of $X$.

#proof
Let $x\in E$, we define the jumping $\delta(x)$ of $f$ at $x$ by
$$
            \delta(x)=\lim_{a\to 0} {\rm osc}\, f(x)|_{[x-a,x+a]},
$$
where ${\rm osc}f(x)_{[a,b]}$ is the oscillation of $f(x)$ on the given interval, given 
by
$$
{\rm osc}f(x)_{[a,b]}=\sup f_{[a,b]}-\inf f_{[a,b]}.
$$
$f$ is continous at $x$ if and only if $\delta(x)=0$. 

For any $N>0$, the set 
$$
U_N=\{x\mid \exists\,\delta>0 \, s.t. \,{\rm osc}f_{[x-\delta,x+\delta]}\}<\frac 1N
$$
must be an open set. Thus
$$
C(f)=\bigcap_{N=1}^\infty U_N
$$
is a $G_\delta$ subset of $\R$.
::

::ProblemBlock{number=2}
#problem
Let $E\subset \R$ be a Lebesgue measurable set of finite Lebesgue measure. Suppose further that $f : E\to\R$ is a Lebesgue measurable function satisfying the following condition:
$$
\forall \eps>0, \exists \delta>0\,\,  s.t. \int_F|f|dm\leq\eps  \text{ whenever } E\supset F \text{ with }  m(F)\leq\delta.
$$
Prove that $f\in L^1(E,m)$.
#proof
We just need to prove that, for any $\delta>0$, there exist finitely many disjoint subsets $F_1,\cdots, F_r$ of $E$ such that $m(F_i)<\delta$. We prove this by induction. By continuity of the Lebesgue measure, there exists
an $a$ such that 
$m(E\cap (-\infty, a))=m(E)/2$. Thus we can write $E$ as disjoint union 
$$
E=E\cap (-\infty, a)\bigcup E\cap [a,\infty),
$$
with $m(E\cap (-\infty, a))=m(E\cap [a,\infty))=m(E)/2$.

Inductively,  for any $k\geq 1$, we can find $F_1,\cdots, F_{2^k}$ such that 
$m(F_i)=m(E)/2^k$. 

Now we choose $\delta$ small enough such that $\delta<1/2^k$ and for that $\delta$, 
$$
\int_F|f| dm<1
$$
whenever $m(F)<\delta<1/2^k$.
Since $m(F_i)<\delta$, we must have
$$
\int_{F_i} |f| dm<1
$$
for all $i$. 
 Thus we have
$$
\int_E |f| dm\leq\sum_{i=1}^{2^k} \int_{F_i} |f| dm<2^k
$$
is integrable.
::

::ProblemBlock{number=3}
#problem
 Suppose that $(X, \mathfrak B, \mu)$  is a finite measure space. Define a pseudometric $d$  on $\mathfrak B$  by setting 
 $$
 d(A, B) := \mu(A\triangle B),
 $$
where $A\triangle  B$ denotes the symmetric difference of $A$ and $B$, that is, 
$$
A\triangle  B=(A\backslash B)\cup(B\backslash A).
$$
The relation $d(A,B) = 0$ defines an equivalence relation $\sim_\mu$  on $\mathfrak B$. We denote the equivalence class of $A$ by $[A]_\mu$. The pseudometric $d$ induces a metric on the set of equivalence classes by setting $d([A]_\mu,[B]_\mu) = d(A,B)$. Prove that the resulting metric space, that is, the set of $\sim_\mu$-equivalence classes with the aforementioned metric, is complete.
#proof
We define
$$
A=\bigcap_{i=1}^\infty\bigcup_{j\geq i}E_j,\quad B=\bigcup_{i=1}^\infty\bigcap_{j\geq i}E_j.
$$
Then it is not hard to prove that 
$$
\limsup_{i\to\infty}1_{E_i}=1_A,\quad \liminf_{i\to\infty}1_{E_i}=1_B.
$$
Observe that 
we can write 
$$
d(A,B)=\int_X|1_A-1_B| d\mu.
$$
Let $\{E_j\}$ be a Cauchy sequence. Then for any $\eps>0$, we have
$$
\int_X|1_{E_i}-1_{E_j}| d\mu<\eps\tag{1}
$$
if $i,j\gg 0$. Let $i_k$ be a subsequence of $\N$ such that 
$$
\lim_{k\to\infty}1_{E_{i_k}}=1_A,
$$
then taking limit with respect to the sequence, from (1), we shall get 
$$
\int_X|1_{A}-1_{E_j}| d\mu\leq \eps.
$$
This proves that the sequence $\{E_j\}$ is convergent to $A$, proving the completeness of the metric space.
#remark
Similar method would lead $\{E_j\}$  being convergent to $B$. In fact, we shall have $d(A,B)=0$ by taking $i\to\infty, j\to\infty$ in (1). 
::

::ProblemBlock{number=4}
#problem
 Does there exist a Lebesgue measurable subset $E \subset [0, 1]$ such that $m(E \cap [0, a]) = a/2$ for all $a \in [0, 1]$? Justify your answer.

#proof
Let
$$
f(x) =1_E(x) -\frac 12.
$$
Then by assumption, we have 
$$
\int_0^a f(x) dx=0
$$
for any $a\in[0,1]$. It follows that for any open interval $(a,b)$, we have
$$
\int_a^b f(x) dx=0.
$$
Thus over any open set $E$, the integration of $f(x)$ is zero. Hence over 
any measurable set the integration of $f$ is zero. Therefore $f$ is identically zero, a contradiction.
::

::ProblemBlock{number=5}
#problem
Suppose that $f_n : [0,1] → [0,\infty)$ is a sequence of measurable functions such that $\|f_n\|_2 \leq 1$ for all $n\in \mathbb N$. Further suppose that $f_n \to f$ a.e.. Prove that:

(i). $f\in L^2[0,1]$;

(ii). $f_n\to f$ in $L^1[0,1]$.

#proof
Part (i) is the lower semi-continuity of weak convergence. One of the ways to prove it is to use the [Egorov's theorem](https://en.wikipedia.org/wiki/Egorov%27s_theorem). For any $\eps$, there exists a measurable set $E$ with
$m(E)<\eps$ such that on $E^c$, the convergence $F_n\to f$ is uniform. It follows that 
$$
\int_{E^c} f^2=\lim_{n\to\infty} \int_{E^c} f_n^2\leq 1
$$
by assumption. Since $\eps$ is arbitrary, by [Levi's Monotone Convergence Theorems](http://mathonline.wikidot.com/levi-s-monotone-convergence-theorems), we get
$\|f\|_2\leq 1$.

To prove (ii), we let $\eps>0$ be a small number. Let $E$ be the set defined above, then since $f_n$ is uniformly convergent outside $E$, there exists an $n\gg 0$ such that 
$$
\int_{E^c}|f_n-f|<\eps.
$$
On the other hand, we have, by Cauchy inequality, that 
$$
\int_E|f_n-f|\leq\sqrt{\int_E |f_n-f|^2}\cdot\sqrt{m(E)}\leq (\|f_n\|_2+\|f\|_2) \sqrt{m(E)}\leq 2\sqrt{m(E)}<2\sqrt\eps.
$$
Combining the above two estimates, we obtain
$$
\int_{[0,1]} |f_n-f|\leq \eps+2\sqrt\eps.
$$
Since $\eps>0$ is arbitrary, we complete the proof.
::

::ProblemBlock{number=6}
#problem
 Let $f\in L^4[0,1]$ be such that $\|f\|_4\leq 2\|f\|_2$. Show that
 $\|f\|_2\leq 4\|f\|_1$.

#proof
Without loss of generality, we may assume that $\|f\|_2=1$. Thus the problem becomes: if $\|f\|_4\leq 2$, then $\|f\|_1\geq 1/4$.

By the AM-GM inequality , we know that, for any nonnegative number $x$, we have
$$
x\leq \frac 13+\frac 13+\frac{x^3}{3}=\frac 23+\frac{x^3}{3}.
$$
Replacing $x$ by $ax$ for any positive number $a$ to be determined later, we have
$$
x\leq\frac{2}{3a}+\frac{a^2}{3}x^3.
$$
Thus
$$
x^2\leq\frac{2}{3a}x+\frac{a^2}{3}x^4.
$$
Let $x=|f|$, and integrate. We have
$$
1=\int f^2\leq \frac{2}{3a}\|f\|_1+\frac{a^2}{3}\int f^4 \leq \frac{2}{3a}\|f\|_1+\frac{16a^2}{3}.
$$
Taking $a=1/4$, we get the desired estimate. 

#remark
Alternatively, we can use Hölder's inequality to get
$$
\int f^2=\int f^{2/3}\cdot f^{4/3}\leq \left(\int f\right)^{2/3}\cdot
\left(\int f^4\right)^{1/3}\leq \left(\int f\right)^{2/3}\cdot (2\|f\|_2)^{4/3}.
$$
The conclusion follows. 
::
