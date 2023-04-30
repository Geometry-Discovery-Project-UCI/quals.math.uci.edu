# 2023 Winter Real Analysis

::ProblemBlock{number=1}
#problem
 Consider a measure space $(X,\mathcal A,\mu)$ and a sequence of measurable sets $E_n$, $n\in\mathbb N$
            such that
$$
            \sum_{n=1}^\infty\mu(E_n)<\infty. 
$$ 
Show that almost every $x\in X$ is an element of at most finitely many
                $E_n$'s.

#proof
Let $1_{E_n}$ be the characteristic function of $E_n$. Then
the condition is equivalent to
$$
        \int_X\sum_{n=1}^\infty 1_{E_n}\leq \sum_{n=1}^\infty \mu(E_n) < \infty. 
$$
 Thus the function $\sum_{n=1}^\infty
            1_{E_n}$ is almost everywhere finite and hence the result is proved.  
::

::ProblemBlock{number=2}
#problem
Let $(X,\mathfrak B,\mu)$ be a $\sigma$-finite measure  space and
                    let $f : X → [0,\infty)$ be measurable. Let
                    $E:=\{(x,y)\in X\times[0,\infty)\mid  y\leq f(x)\}$.
                    Assign the Lebesgue measure $m$ on $[0, \infty)$. Prove that $E$ is a measurable set on
                    $X \times [0, \infty)$ with respect to the product measure $\mu\times m$ and that
$$
                    (\mu\times m)(E)=\int_X fd\mu.
$$

#proof
To see that $E$ is measurable, let  $h(x, y) := f(x) -y$. Then $h$ is
                measurable, being the composition of $f$ and the subtraction function. Since
                $E = h^{-1}([0,\infty))$, it follows that $E$ is measurable.
                Now, by [Tonelli's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem#Tonelli's_theorem), one has
$$
                (\mu\times m)(E)=\int m(E_x) d\mu(x),
$$
where $E_x=\{y\in [0,\infty)\mid (x,y)\in E\} =[0,f(x)]$.
                So $m(E_x)=f(x)$ and the result follows.
#remark
Is the above proof hard to understand? Think harder to understand the beauty and the insight there. 
::

::ProblemBlock{number=3}
#problem
Suppose that $(X,\mathcal B,\mu)$ and $(Y,\mathcal C,\nu)$
                    are measure spaces and $\Phi: X\to Y$ is a measurable map.
                    Moreover, assume that for any measurable set $E\subset Y$, we
                    have
$$
                    \nu(E)=\mu(\Phi^{-1}(E)).
$$
Then for any measurable function $f: Y\to\mathbb C$, prove that $f\in L^1(\nu)$
                    if and only if $f\circ\Phi\in L^1(\mu)$, in which case,
$$
                    \int_Y f d\nu=\int_X(f\circ\Phi) d\mu.
$$

#proof
By considering positive and negative parts of the real and imaginary parts of $f$, it suffices
                to consider the case that $f : Y → [0,\infty)$. If $f = \chi_E$ for a measurable set $E$, then the
                result
                is clear by the assumption on $\Phi$. The case of simple functions follows. For a general
                $f : Y → [0,\infty)$, write $f$ as an increasing limit of simple functions and apply the [Monotone
                convergence theorem](https://en.wikipedia.org/wiki/Monotone_convergence_theorem).
::

::ProblemBlock{number=4}
#problem
 Let $f_k\in L^1([0,1])$ for $k\geq 1$ (with respect to Lebesgue measure),
                        and assume that $\lim_{k\to\infty} \|f_k\|_{L^1([0,1])}=0$.

(a). Show that a subsequence of $\{f_k\}^\infty_{k=1}$ tends to zero almost everywhere.

(b). Show by example that the sequence $\{f_k\}^\infty_{k=1}$ does not necessarily tend to zero
                        almost everywhere.

#proof
We shall be able to choose a subsequence $\{k_j\}$ such that
$$
                \sum_{j=1}^\infty \|f_{k_j}\|_{L^1}<\infty. 
$$ 
Then we are in the same situation as in  [Problem 2 of 2014 Spring Real Analysis Exam](/posts/real-analysis/2014-spring/), and we can use the
                    method there
                    to complete the proof.


For part (b), use
                        the usual typewriter example (characteristic functions of intervals of length $1/k$ wrapping
                        around the interval).
#remark
Some elaboration of the typewriter function. 
For any $k\geq 2$, define
$g_k(x)= 1$ if $\sum_{i=1}^k i^{-1}\leq x\leq \sum_{i=1}^{k+1} i^{-1}$ and $0$ otherwise. 
Let
$$
f_k(x)=\sum_{n=0}^\infty g_k(x+n).
$$
Then it is easy to verify that 
$$
\int_0^1 f_k(x) dx=\frac 1k\to 0.
$$
On the other hand, we can verify that there are infinite many pairs of real numbers $(k,n)$ such that 
$$
\sum_{i=1}^k\frac 1i\leq x+n\leq\sum_{i=1}^{k+1}\frac 1i
$$
for any $x\in [0,1]$. Therefore for any $x$, $f_k(x)$ is not convergent as $k\to\infty$.
::

::ProblemBlock{number=5}
#problem
Let $1 < p < q <\infty$ and $n\in\mathbb N$.

(a). Show that the inclusions $L^p(\R^n)\subset L^q(\R^n)$ and $L^q(\R^n)\subset L^p(\R^n)$ are
                        both false.
                    

(b).
                        Show that, for any $r\in (p,q)$, we have $L^p(\R^n)\cap L^q(\R^n)\subset L^r(\R^n)$,
                        and
                        furthermore that for $f\in L^p(\R^n)\cap L^q(\R^n)$ we have
$$
                        \|f\|_r\leq \|f\|_p^\alpha\cdot\|f\|_q^{1-\alpha},
$$
where
$$
\alpha=\frac{p(q-r)}{r(q-p)}.
$$

#proof
For part (a), functions $|x|^{-n/p}\chi_{\R^n\backslash B_1}$ and $|x|^{-n/q}\chi_{B_1}$ do the trick.

For part (b), without loss of generality, we assume that $f$ is a nonnegative function. We shall seek positive
        numbers
        $a,b$ such that
$$
        f^r\leq af^p+bf^q,
$$
which is equivalent to
$$
        f^{r-p}\leq a+b(f^{r-p})^{\frac{q-p}{r-p}}.
$$
Let
$$
        K=\frac{q-p}{q-r},\quad L=\frac{q-p}{r-p}.
$$
Then $K,L$ are conjugate numbers, that is, $1/K+1/L=1$. By [Young's inequality](https://en.wikipedia.org/wiki/Young%27s_inequality_for_products), 
       
$$
        f^{r-p}\leq\frac 1K+\frac 1L (f^{r-p})^L=\frac 1K+\frac 1Lf^{q-p}.
$$
Therefore we get
$$
        f^r\leq\frac 1Kf^p+\frac 1L f^q.
$$
If we replace $f$ by $\eps f$ for some positive number $\eps$, we get
$$
        \eps^r f^r\leq\frac{\eps^p}{K} f^p+\frac{\eps^q}{L} f^q.
$$
Taking integration on both sides, we get

$$
A_r^r \leq \frac{\eps^{p-r}}{K} A_p^p + \frac{\eps^{q-r}}{L} A_q^q, \qquad\qquad\qquad\qquad \qquad\qquad(1)
$$

where $A_s=\|f\|_s$. In order to get the optimal $\eps$, we take the derivative of the above right side
        with respect to $\eps$ to get
$$
        (p-r)\frac{\eps^{p-r-1}}{K}A_p^p+(q-r)\frac{\eps^{q-r-1}}{L}A_q^q=0.
$$
We can simplify the above to get
$$
        \eps^q A_q^q=\eps^pA_p^p.
$$
Thus for such a choice of $\eps$, from (1) we get
$$
        A_r^r\leq \eps^{p-r}A_p^p=A_p^{\alpha r}\cdot A_q^{(1-\alpha)r}.
$$
The theorem is thus proved.
#remark
A probably better way is to use the [Hölder's inequality](https://en.wikipedia.org/wiki/Hölder%27s_inequality){.text-cyan-800} directly. We can write the inequality we want to prove as
$$
\int f^r\leq\left(\int f^p\right)^{\frac{q-r}{q-p}}\cdot \left(\int f^q\right)^{\frac{r-p}{q-p}}
=\left(\int f^p\right)^{1/K}\cdot \left(\int f^q\right)^{1/L}.
$$
Then since 
$$
\frac{p}{K}+\frac{q}{L}=r,
$$
the inequality follows. 

However, our method actually *proves* the Hölder's inequality. Let $f,g$ be two nonnegative functions. By Young's inequality, we know that 
$$
fg\leq \frac 1p f^p+\frac 1q f^q.
$$
it follows that 
$$
\int fg\leq \frac 1p \int f^p+\frac 1q \int f^q.
$$
Replacing $f$ by $\eps f$ and $g$ by $\eps^{-1} g$, we get
$$
\int fg\leq \frac{\eps^p}p \int f^p+\frac{\eps^{-q}}q \int f^q.
$$
The Hölder's inequality is obtained by minimizing the above right side with respect to $\eps$. 
::

 

::ProblemBlock{number=6}
#problem

Let $p\in (1,\infty)$. Suppose that $\{f_n\}$ converges weakly to $f\in L^p$, that is, assume that
$$
                \lim_{n\to\infty}\int_0^1 f_n g dx=\int_0^1 fg dx
$$
for all $g\in L^q([0,1])$, where $q=p/(p-1)$.

(a). Show that
$$
                \|f\|_{L^p([0,1])}\leq \liminf_{n\to\infty}\|f_n\|_{L^p([0,1])}.
$$
           
(b). Give an example where the inequality in part (a) is strict.
            

#proof
Let $g=f|f|^{p-2}$. Then
$$
        \int_0^1|g|^q dx=\int_0^1|f|^p dx<\infty. 
$$ 
Using $g$ as a test function, we have
$$
\int_0^1|f|^p dx=\lim_{n\to\infty}\int_0^1 f_n f|f|^{p-2} dx. 
$$
 Using Holder inequality, we have 
$$
 \int_0^1 f_n
            f|f|^{p-2} dx\leq \|f_n\|_{L^p([0,1])}\cdot
            \|f|f|^{p-2}\|_{L^q([0,1])}=\|f_n\|_{L^p([0,1])}\cdot\|f\|_{L^p([0,1])}^{p/q}. 
$$
We obtain part (a) by combining the above two expressions. <br><br>

Let $p=2$ and $f_n=\sin nx$. Then $f_n$ is weakly convergent to $0$ by the
           [Riemann-Lebesgue lemma](https://en.wikipedia.org/wiki/Riemann–Lebesgue_lemma), providing strict inequality in part (a).
::
