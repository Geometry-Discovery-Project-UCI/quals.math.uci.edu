# 2013 Spring Real Analysis

::ProblemBlock{number=1}
#problem
For each of (a) and (b) either prove or give a counterexample. Suppose that for every $n\in \N$, $f_n:X\to [0,1]$ is a $\mu$-measurable function, and
$$
\lim_{n\to\infty} \int f_n\, d\mu = 0.
$$
Then

(a) $f_n\to 0$ in measure;

(b) for $\mu$-almost all $x\in X$, $\lim_{n\to\infty} f_n(x)=0$.

#proof
I think we shall assume that $f_n\geq 0$, otherwise take $f_n=f$ whose average is zero would provide counterexample.

Assume that $f_n\geq 0$. Then (a). is correct, because for any $\eps>0$, 
$$
\eps\,\mu(\{x\mid f_n(x)>\eps\})\leq\int f_nd\mu\to 0.
$$

(b). is not correct. See [Problem 4 of 2023 Winter Real Analysis Exam](/posts/real-analysis/2023-winter/).
::

::ProblemBlock{number=2}
#problem
Let $f_n:\R\to\R$ be Borel measurable for every $n\in \N$. Define $E$ to be the set of points in $\R$ such that $\lim_{n\to\infty} f_n(x)$ exists and is finite. Show that $E$ is a Borel measurable set.

#proof
We can write 
$$
E=\bigcap_{j=1}^\infty\bigcup_{N=1}^\infty\bigcap_{n,m>N}\{x\mid |f_n(x)-f_m(x)|<j^{-1}\}
$$
so it is Borel.
::

::ProblemBlock{number=3}
#problem
Does there exist a nowhere dense subset of $[0,1]^2\subset\R^2$

(a) of Lebesgue measure greater than 9/10?

(b) of Lebesgue measure 1?

If yes, construct such a set, if no, prove why not.

#proof
(a). Let $F$ be a nowhere dense subset of $[0,1]$ with measure $9/10$. Then $F\times[0,1]$ would
give such an example. 
There are multiple ways to construct $F$. For example, let $\{\alpha_k\}$ be a sequence of positive numbers such that 
$$
1-\sum_{k=1}^\infty 2^k\alpha_k=\frac{9}{10}.
$$
Then $F$ can be inductively construct by removing $2^k$ open intervals in the middle of the $2^k$ intervals from the $(k-1)$-step.

(b). is not possible. Let $K$ be such a nowhere dense set with full measure. Then $\mu(\bar K)=1$, where $\bar k$ is the closure of $K$. By definition, $\bar K$ contains no interior point. In particular $\bar K\neq [0,1]^2$. But since $\bar K$ is a closed set, it must miss an open ball. Thus the measure of $\bar K$ can not be equal to $1$.
::

::ProblemBlock{number=4}
#problem
Let $\lambda\in (0,1)$, and $f\in L^1([0,1])$. Show that the integral
$$
F(x) = \int_0^x \frac{1}{(x-t)^\lambda}f(t)\, dt
$$
exists a.e. $x\in[0,1]$ and that $F\in L^1([0,1])$.

#proof
We have
$$
\int_0^1\left|\int_0^x \frac{1}{(x-t)^\lambda}f(t)\, dt\right| dx\leq \int_0^1 \int_0^x \frac{1}{(x-t)^\lambda}|f(t)|\, dt  dx
=\int_0^1|f(t)| \int_t^1\frac{1}{(x-t)^\lambda} dx
\, dt=\frac{1}{1-\lambda}
\int_0^1 t^{1-\lambda} |f(t)| dt<\infty.
$$
This completes the proof.
::

::ProblemBlock{number=5}
#problem
Show that for $g\in L^3([0,1])$, $f\in L^{3/2}([0,1])$
$$
\int_0^1 \cos(2\pi nx)g(x)f(x)\, dx \to 0
$$
as $n\to\infty$.

#proof
By [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality), $fg\in L^1([0,1])$. Then the result follows from the [Riemann–Lebesgue lemma](https://en.wikipedia.org/wiki/Riemann–Lebesgue_lemma). (See [Problem 1 of 2008 Fall Real Analysis Exam](/posts/real-analysis/2008-fall/).)

::

::ProblemBlock{number=6}
#problem
Assume that $f,f'\in L^1(\R)$. Let
$$
g(x) = \sum_{k=0}^\infty |f(x+k)|.
$$
Show that $g\in L^\infty(I)$ for any bounded interval $I$. [(Hint: First prove for intervals with length $\leq\frac12$.)]{.text-cyan-700}

#proof
We shall assume that $f$ is absolutely continuous.

We start with any open interval $(a,b)$  of length $\leq 1/2$.  Then since there is not overlapping, we have 
$$
\int_a^b|g(x)| dx\leq\int_\R |f(x)| dx\leq C<\infty.
$$
By [Intermediate value theorem](https://en.wikipedia.org/wiki/Intermediate_value_theorem), there is a $\xi\in (a,b)$ such that 
$|g(\xi)|\leq C(b-a)^{-1}$. By the fundamental theorem of calculus, we have 
$$
|g(x)-g(\xi)|\leq \int_\R|f'(x)| dx\leq C
$$
for all $x\in (a,b)$. 

For any interval of longer length, we can chop them small so that each small piece is of length $\leq 1/2$.
#remark
I am not sure if the condition of absolute continuity can be dropped. If we take a singular function whose derivative is a.e. $0$, then the condition of $f'$ becomes vacuous. In this case, $g(x)$ exists and is a.e. finite. But I don't know how to prove that it is bounded on bounded intervals. 
::