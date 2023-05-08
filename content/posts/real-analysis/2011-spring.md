---
draft: true
---

# 2011 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Suppose $f$ and $g$ are real-valued $\mu_L$-measurable functions on $\R$, such that (1) $f$ is $\mu_L$-integrable, and (2) $g$ belongs to $C_0(\R)$. For $c>0$ define $g_c(t) = g(ct)$. Prove that

(a) $\lim_{c\to\infty}\int_\R fg_c\, d\mu_L =0$, and

(b) $\lim_{c\to 0} \int_\R fg_c\, d\mu_L = g(0)\int_\R f\, d\mu_L$.

#proof

::

::ProblemBlock{number=2}
#problem
Suppose $\mu$ and $\nu$ are $\sigma$-finite measures on a measurable space $(X,\mathcal{A})$, such that $\nu\leq \mu$ and $\nu\ll\mu-\nu$. Prove that
$$
\mu\left(\left\{ x\in X : \frac{d\nu}{d\mu}=1 \right\} \right) = 0.
$$

#proof

::

::ProblemBlock{number=3}
#problem
Prove that the Gamma function
$$
\Gamma(x) = \int_{(0,\infty)} t^{x-1}e^{-t}\, \mu_L(dt)
$$
is well defined and continuous for $x>0$.

#proof

::

::ProblemBlock{number=4}
#problem
Let $(X,\mathcal{A},\mu)$ and $(Y,\mathcal{B},\nu)$ be the measure spaces given by

- $X = Y = [0,1]$.
- $\mathcal{A}=\mathcal{B}=\mathcal{B}_{[0,1]}$ the Borel $\sigma$-algebra of $[0,1]$.
- $\mu=\mu_L$, and $\nu$ is the counting measure.

Consider the product measurable space $(X\times Y,\sigma(\mathcal{A}\times\mathcal{B}))$, and its subset $E = \{(x,y)\in X\times Y : x=y\}\subset X\times Y$.

(a) Show that $E \in \sigma(\mathcal{A}\times\mathcal{B})$.

(b) Show that $\int_X \left\{ \int_Y \mathbf{1}_E\, d\nu\right\} \, d\mu \neq \int_Y\left\{ \int_X \mathbf{1}_E\, d\mu\right\} \, d\nu$.

(c) Explain why Tonelli's Theorem is not applicable.

#proof

::

::ProblemBlock{number=5}
#problem
Suppose $f\in C^1[0,1]$ (that is, $f$ is coninuous and continuously differentiable on [0,1]), $f(0)=f(1)$, and $f>f'$ everywhere.

(a) Prove that $f>0$ everywhere.

(b) Prove that
$$
\int_{(0,1)} \frac{f^2}{f-f'}\, d\mu_L \geq \int_{(0,1)} f\, d\mu_L.
$$

Hint: Apply Cauchy-Schwarz (or Hölder) Inequality to the product of $h$ and $g$, where $h = \sqrt{f-f'}$, and $g=f/h$.

#proof

::

::ProblemBlock{number=6}
#problem
Suppose $(f_n)_{n=1}^\infty$ is a sequence of measurable functions on $[0,1]$. For $x\in [0,1]$ define $h(x) = \#\{ n : f_n(x)=0 \}$ (the number of indices $n$ for which $f_n(x)=0$). Assuming that $h<\infty$ everywhere, prove that the function $h$ is measurable.

#proof

::