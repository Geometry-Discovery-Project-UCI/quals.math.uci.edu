# 2023 Spring Real Analysis

::ProblemBlock{number=1}
#problem
 Let $(X, \mathcal{M}, \mu)$ be a measure space and let $f : X \to\mathbb{R}$ be a measurable function.


(a). Prove that, for any $r>1$, one has 
$$
\int |f|^rd\mu=r\int_0^\infty t^{r-1}\mu(\{x\in X \ : \ |f(x)|>t\})dt.
$$

(b). Suppose that $1\leq p<r<q<\infty$ and there is $C<\infty$ such that
$$
\mu(\{x\mid |f(x)|>\lambda\})\leq\frac{C}{\lambda^p+\lambda^q}
$$
for every $\lambda>0$.  Prove that $f\in L^r(\mu)$.


#proof
It is well-known that 
$$
\int_X |f(x)|^rd\mu =\int_0^\infty   \mu(\{x\mid |f(x)|^r>t\})dt=\int_0^\infty   \mu(\{x\mid |f(x)|>t^{1/r}\})dt.
$$
Thus (a) follows from change of variable $t=s^r$.

Using (a), we have
$$
\int_X |f(x)|^rd\mu\leq \int_0^\infty \frac{ Ct^{r-1}}{t^p+t^q}dt.
$$
Since $1\leq p<r<q<\infty$, we have
$$
\int_0^\infty \frac{ t^{r-1}}{t^p+t^q}dt=\int_0^1 \frac{ t^{r-1}}{t^p+t^q}dt+\int_1^\infty \frac{ t^{r-1}}{t^p+t^q}dt
\leq \int_0^1 t^{r-p-1} dt+\int_1^\infty t^{r-q-1} dt<\infty.
$$

::

::ProblemBlock{number=2}
#problem
Recall that the Cantor-Lebesgue function is the function $C:[0,1]\to [0,1]$ first defined on the Cantor set by setting $C(x)=\sum_{j=0}^\infty b_j2^{-j}$, where $b_j=\frac{a_j}{2}$ and $x=\sum_{j=0}^\infty a_j3^{-j}$, and then continuously extended to all of $[0,1]$ by setting it to be constant on the intervals deleted in the formation of the Cantor set.  Let $\mu_C$ be the Borel measure on $\mathbb{R}$ defined by
$$\mu_C([a,\,b)) = C(b)-C(a)$$
for all $a < b$. Prove that $\mu_C$ is not absolutely continuous with respect to Lebesgue measure.


#proof
An absolutely continuous function does not fluctuate on a set of measure zero. But a Cantor set is of measure zero.
 To see that the Cantor-Lebesgue  function is not absolutely continuous, we take  any $\eps>0$. Let the set of intervals $(a_k,b_k)$ covering the Cantor set but 
$$
\sum_k(b_k-a_k)<\eps.
$$
Then we get a contradiction since 
$$
\sum_k|f(b_k)-f(a_k)|=1
$$
is the total variation of the function.
::

::ProblemBlock{number=3}
#problem
Suppose that $f:\mathbb{R}\to \mathbb{R}$ is integrable and $g:\mathbb{R}\to \mathbb{R}$ is bounded and measurable.  Prove that
$$
\lim_{t\to 0}\int_{-\infty}^\infty g(x)\cdot [f(x)-f(x+t)]dx=0.
$$

#proof
We can prove an even stronger result
$$
\lim_{t\to 0}\int_{-\infty}^\infty |f(x)-f(x+t)|dx=0.
$$
The problem is similar to [Problem 5 of 2022 Fall Real Analysis Exam](/posts/real-analysis/2022-fall).
::

::ProblemBlock{number=4}
#problem
 Suppose that $f\in L^1([0,1])$ is nonnegative. Prove that 
$$
\lim_{n\to\infty}\int_0^1\sqrt[n]{f(x)} \, dx=m(\{x\in [0,1] \ : \  f(x)>0\}).
$$



#proof
We observe that for any $n$, 
$$
\sqrt[n]{f(x)} \leq \max(f(x),1)
$$
which is integrable. On the other hand, 
$$
\lim_{n\to\infty}\sqrt[n]{f(x)} =1
$$
if $f(x)>0$ and is equal to $0$ if $f(x)=0$. Thus the conclusion follows from the [Lebesgue dominant convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem). 

::

::ProblemBlock{number=5}
#problem
 Let $E \subseteq \mathbb{R}$ be a Lebesgue measurable set such that
$E + q \subseteq E$ for each $q \in \mathbb{Q}$. Prove that $m(E)=0$ or $m(E^c)=0$, where $m$ denotes Lebesgue measure.


#proof
If the measure of $E$ is positive, then by Lebesgue differentiation the density of $E$ in some interval is at least $\lambda$ very close to $1$. Using that translations by a dense set of this interval are contained in $E$, we see that this density lower bound holds in arbitrary sets. Then take $\lambda$ to $1$.
::

 

::ProblemBlock{number=6}
#problem
Fix a measure space $(X,\mathcal{M},\mu)$, $1\leq p<\infty$, and functions $f_n,f\in L^p(X)$ such that $f_n\to f$ almost everywhere.  Prove that the following two conditions are equivalent:

(a). $f_n\to f$ in $L^p(X)$.

(b). $\|f_n\|_{p}\to \|f\|_p$.
 



            

#proof
This problem is very similar to [Problem 1 of 2022 Fall Real Analysis Exam](/posts/real-analysis/2022-fall).
::
