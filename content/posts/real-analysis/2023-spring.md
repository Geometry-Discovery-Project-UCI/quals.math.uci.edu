# 2023 Winter Real Analysis

::ProblemBlock{number=1}
#problem
 Consder a measure space $(X,\mathcal A,\mu)$ and a sequence of measurable sets $E_n$, $n\in\mathbb N$
            such that
$$
            \sum_{n=1}^\infty\mu(E_n)<\infty. 
$$ 
Show that almost every $x\in X$ is an element of at most fintely many
                $E_n$'s

#proof
The condition is equivalent to
$$
        \int_X\sum_{n=1}^\infty 1_{E_n}\leq \sum_{n=1}^\infty \mu(E_n) < \infty. 
$$
 Thus the function $\sum_{n=1}^\infty
            1_{E_n}$ is almost everywhere finite and hence the result is proved.  
::

::ProblemBlock{number=2}
#problem
Let $(X,B,\mu)$ be a $\sigma$-finite measure space and
                    let $f : X → [0,\infty)$ be measurable. Let
                    $E:=\{(x,y)\in X\times[0,\infty)\mid : y\leq f(x)\}$.
                    Assign the Lebesgue measure $m$ on $[0, \infty)$. Prove that $E$ is a measurable set on
                    $X \times [0, \infty)$ with respect to the product measure $\mu\times m$ and that
$$
                    (\mu\times m)(E)=\int_X fd\mu.
$$

#proof
To see that $E$ is measurable, let $g(x, y) := (f(x), y)$ and $h(x, y) := f(x) -y$. Then $g$ is
                measurable, whence so is $h$, being the composition of $g$ and the subtraction function. Since
                $E = h^{-1}([0,\infty))$, it follows that $E$ is measurable.
                Now, by Tonelli's theorem, one has
$$
                (\mu\times m)(E)=\int m(E_x) d\nu(x),
$$
where $E_x=\{y\in [0,\infty)\mid (x,y)\in E\} =[0,f(x)]$.
                So $m(E_x)=f(x)$ and the result follows.
::

::ProblemBlock{number=3}
#problem
Suppose that $(X,\mathcal B,\mu)$ and $(Y,\mathcal C,\nu)$
                    are measure spaces and $\Phi: X\to Y$ is a measurable map.
                    Moreover, assume that for any measurable set $E\subset Y$, we
                    have
                    \[
                    \nu(E)=\mu(f^{-1}(E)).
                    \]
                    Then for any measurable function $f: Y\to\mathbb R$, prove that $f\in L^1(\nu)$
                    if and only if $f\circ\Phi\in L^1(\mu)$, in which case,
$$
                    \int_Y f d\nu=\int_X(f\circ\Phi) d\mu.
$$

#proof
By considering positive and negative parts of the real and imaginary parts of $f$, it suffices
                to consider the case that $f : Y → [0,\infty)$. If $f = \chi_E$ for a measurable set $E$, then the
                result
                is clear by the assumption on $\Phi$. The case of simple functions follows. For a general
                $f : Y → [0,\infty)$, write $f$ as an increasing limit of simple functions and apply the Monotone
                Convergence Theorem.
::

::ProblemBlock{number=4}
#problem
Let $f$ be a real-valued function of bounded variation on $[a,b]$. Suppose $f$ is absolutely continuous on $[a+\eta,b]$ for every $\eta\in (0,b-a)$. Show that $f$ is absolutely continuous on $[a,b]$.

#proof
We write $f$ as $f=f_1-f_2$, where $f_j$ ($j=1,2$) are monotonic increasign fuctions, and for any $\eta>0$, these two functions are absolutely continuous on $[a+\eta,b]$. Since in addtion, $f_j$ are continuous at $a$, the total variaton of the functions on $[a,a+\eta]$ would be small for small $\eta$. Thus $f_j$ are absolutely continuous on $[a,b]$.
::

::ProblemBlock{number=5}
#problem
Let $\mathcal A$ be a collection of pairwise disjoint subsets of a $\sigma$-finite measure space, each of positive measure. Show that $\mathcal A$ is at most countable.

#proof
We just need to prove that the number of subsets of measure greater than $\eps>0$ is coutable. If the total measure of the space is finite, then this number is finite. If the space is $\sigma$-finite, then this number is at most countable.
::

::ProblemBlock{number=6}
#problem
Let $(X,\mathcal M,\mu)$ be a complete measure space and let $f$ be a nonnegative integrable function on $X$. Let $b(t)=\mu\{ x\in X\mid f(x)\geq t\}$. Show that:

$$
\int_X fd\mu=\int_0^\infty b(t)dt.
$$

#proof
Let

$$
E_t=\{ x\in X\mid f(x)\geq t\}
$$

Then

$$
b(t)=\mu(E_t)=\int_X 1_{E_t}
$$

Using [Fubini's Theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem), we have:

$$
\int_0^\infty b(t) dt=\int_0^\infty\int_X 1_{E_t}\,d\mu \, dt=\int_X \int_0^\infty 1_{E_t}d\mu\, dt=\int_X fd\mu.
::
