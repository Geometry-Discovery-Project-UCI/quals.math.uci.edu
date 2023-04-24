# 2022 Spring Real Analysis

::ProblemBlock{number=1}
#problem
In a topological space $X$, a subset $E\subset X$ is called a $G_\delta$ set if it can be written as the countable intersection of open sets. Consider a map $f:X\to Y$ between metric spaces $X$ and $Y$. Prove that
$$
C(f) = \{ x\in X : f \text{ is continuous at } x\}
$$
is a $G_\delta$ subset of $X$.

#proof

::

::ProblemBlock{number=2}
#problem
Let $E\subset\mathbb{R}$ be a Lebesgue measurable set of finite Lebesgue measure. Suppose further that $f:E\to\mathbb{R}$ is a Lebesgue measurable function satisfying the following condition:
$$
\forall\varepsilon>0\, \exists\delta>0 \text{ s.t. } \int_F |f|\, dm \leq\varepsilon \text{ whenever } E\supset F\in\mathcal{L} \text{ with } m(F)\leq\delta
$$
Prove that $f\in L^1(E,m)$.

#proof

::

::ProblemBlock{number=3}
#problem
Suppose that $(X,\mathcal{B},\mu)$ is a finite measure space. Define a pseudometric $d$ on $\mathcal{B}$ by setting
$$
d(A,B) := \mu(A\triangle B)
$$
where $A\triangle B$ denotes the symmetric difference of $A$ and $B$, that is,
$$
A\triangle B = (A\setminus B)\cup (B\setminus A)
$$
The relation $d(A,B)=0$ defines an equivalence relation $\tilde_\mu$ on $\mathcal{B}$. We denote the equivalence class of $A$ by $[A]_\mu$. The pseudometric $d$ induces a metric on the set of equivalence classes by setting $d([A]_\mu,[B]_\mu) = d(A,B)$. Prove that the resulting metric space, that is, the set of $\tilde_\mu$-equivalence classes with the aformentioned metric, is complete.

#proof

::

::ProblemBlock{number=4}
#problem
Does there exist a Lebesgue measurable subset $E\subset[0,1]$ such that $m(E\cap[0,a])=\frac{a}2$ for all $a\in[0,1]$? Justify your answer.

#proof

::

::ProblemBlock{number=5}
#problem
Suppose that $f_n:[0,1]\to[0,\infty)$ is a sequence of measurable functions such that $||f_n||_2\leq 1$ for all $n\in\mathbb{N}$. Further suppose that $f_n\to f$ a.e. Prove that:

(a) $f\in L^2[0,1]$

(b) $f_n\to f$ in $L^1[0,1]$

#proof

::

::ProblemBlock{number=6}
#problem
Let $f\in L^4[0,1]$ be such that $||f||_4\leq 2||f||_2$. Show that $||f||_2\leq 4||f||_1$.

#proof

::