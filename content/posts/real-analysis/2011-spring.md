# 2011 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Suppose $f$ and $g$ are real-valued $\mu_L$-measurable functions on $\R$, such that (1) $f$ is $\mu_L$-integrable, and (2) $g$ belongs to $\mathcal C_0(\R)$. For $c>0$ define $g_c(t) = g(ct)$. Prove that

(a) $\lim_{c\to\infty}\int_\R fg_c\, d\mu_L =0$, and

(b) $\lim_{c\to 0} \int_\R fg_c\, d\mu_L = g(0)\int_\R f\, d\mu_L$.

#proof
Assume that ${\rm supp}\, (g)\subset [-R, R]$ for some number $R>0$. Then 
$$
\int_\R fg_c\, d\mu_L =\int_{[-\frac Rc, \frac Rc]} f(t) g(ct) d\mu_L.
$$
Thus we have 
$$
\left|\int_\R fg_c\, d\mu_L \right|\leq C \int_{[-\frac Rc, \frac Rc]} |f(t)| d\mu_L,
$$
where $C=\max |g|$. 
The result follows from the [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem).

On the other hand, for any $\eps>0$, there is an $N>0$ such that 
$$
\int_{|t|>N}|f(t)| d\mu_L<\eps.
$$
For such an $N$, if $c$ is small enough, we have $|g(ct)-g(0)|<\eps$ for all $|t|<N$. Thus
$$
\left|\int_\R f(g_c-g(0))\, d\mu_L \right|\leq \eps \int_{[-N,N]}|f(t)|d\mu_L+2C\eps,
$$
completing the proof. 
::

::ProblemBlock{number=2}
#problem
Suppose $\mu$ and $\nu$ are $\sigma$-finite measures on a measurable space $(X,\mathcal{A})$, such that $\nu\leq \mu$ and $\nu\ll\mu-\nu$. Prove that
$$
\mu\left(\left\{ x\in X : \frac{d\nu}{d\mu}=1 \right\} \right) = 0.
$$

#proof
Let 
$$
f=\frac{d\nu}{d(\mu-\nu)},\quad g=\frac{d\nu}{d\mu}.
$$
Then for any measurable set $E$, we have 
$$
\nu(E)=\int_E gd\mu=\int_E fd(\mu-nu)=\int_E fd\mu-\int_E fd\nu=\int_Efd\mu-\int_E fgd\mu.
$$
Let $E$ be the set over which $g=1$. Then we have 
$$
\mu(E)=\int_E fd\mu-\int_E fgd\mu=0.
$$
::

::ProblemBlock{number=3}
#problem
Prove that the Gamma function
$$
\Gamma(x) = \int_{(0,\infty)} t^{x-1}e^{-t}\, \mu_L(dt)
$$
is well defined and continuous for $x>0$.

#proof
This improper integral has two singularities. If $x>0$, then $t^{x-1}$ is integrable at $0$. On the other hand, if $x\gg 1$, $t^{x-1}\leq e^{-\frac 12t}$. So the function is also integrable at $\infty$.
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
This is the same as [Problem 3 of 2021 Winter Real Analysis Exam](/posts/real-analysis/2021-winter/).
::

::ProblemBlock{number=5}
#problem
Suppose $f\in \mathcal C^1[0,1]$ (that is, $f$ is coninuous and continuously differentiable on $[0,1]$), $f(0)=f(1)$, and $f>f'$ everywhere.

(a) Prove that $f>0$ everywhere.

(b) Prove that
$$
\int_{(0,1)} \frac{f^2}{f-f'}\, d\mu_L \geq \int_{(0,1)} f\, d\mu_L.
$$

[Hint: Apply Cauchy-Schwarz (or Hölder) Inequality to the product of $h$ and $g$, where $h = \sqrt{f-f'}$, and $g=f/h$.]{.text-cyan-700}

#proof
By assumption, we know that $e^{-t} f(t)$ is monotonically decreasing. Thus $f(0)>e^{-1} f(1)=e^{-1} f(0)$. As a result, we must have $f(1)=f(0)>0$. Hence $e^{-t} f(t)>e^{-1} f(1)>0$. This proves the positivity of $f$. 

Using the Cauchy inequality, we have 
$$
\left(\int_{(0,1)} f\, d\mu_L\right)^2\leq \int_{(0,1)} (f-f') d\mu_L\cdot \int_{(0,1)} \frac{f^2}{f-f'}\, d\mu_L.
$$
The theorem is proved by observing that 
$$
\int_{(0,1)} (f-f') d\mu_L=\int_{(0,1)} fd\mu_L.
$$
::

::ProblemBlock{number=6}
#problem
Suppose $(f_n)_{n=1}^\infty$ is a sequence of measurable functions on $[0,1]$. For $x\in [0,1]$ define $h(x) = \#\{ n : f_n(x)=0 \}$ (the number of indices $n$ for which $f_n(x)=0$). Assuming that $h<\infty$ everywhere, prove that the function $h$ is measurable.

#proof
Let $E_n =\{ x: f_n(x)=0 \}$ for all $n$. Since $f_n$ is measurable, so is $E_n$. Note that 
$$
h=\sum_n 1_{E_n}.
$$
so it has to be measurable.
::