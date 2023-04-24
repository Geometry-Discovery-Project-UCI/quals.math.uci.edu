# 2014 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $A$ be a subset of $\mathbb R$ of positive Lebesgue measure. Prove that there exists $k,n\in\mathbb N$
            and $x,y\in A$ with $|x-y|=k/2^n$.

#proof
 For any $k,n\in\mathbb N$, define
$$
        B_{k,n}=\{x+\frac{k}{2^n}\mid x\in A\}.
$$
If the statement is not true, then for any $k\neq 0$, we have $B_{k,n}\cap A=\emptyset$. Moreover, if
            $k_1/2^{n_1}\neq k_2/2^{n_2}$,
            then $B_{k_1, n_1}\cap B_{k_2,n_2}\neq\emptyset$. Let $(a,b)$ be an
            interval such that $\lambda((a,b)\cap A)>0$. Then for any $|k|< 2^n$, we must have
$$
                \lambda((a-1,b+1)\cap B_{k,n})\geq \lambda((a,b)\cap A)>0.
$$
Since
$$
                \sum_{k<2^n} \lambda((a-1,b+1)\cap B_{k,n})\leq \lambda ((a-1,b+1))=b-a+2,
$$ 
we get a 
                contradiction. This is because 
                     the left side of the above is no less than infinitely many sum of the same positive number
                    $\lambda((a,b)\cap A)$.
::

::ProblemBlock{number=2}
#problem
Either prove or give a counterexample: if a sequence of functions $f_n$ on a measure
                                space
                                $(X,\mu)$ satisfies
$$
                            \int_X|f_n| d\mu\leq \frac{1}{n^2},
$$
then $f_n\to 0$ almost everywhere.

#proof
For any $i$ define
$$
E_i=\{x\mid \limsup_{n\to\infty} |f_n(x)|\geq \frac 1i\}.
$$
Then if $x\in E_i$, for any $N\in\mathbb N$, we must have
$$
                        \sum_{n=N+1}^\infty |f_n(x)|\geq \frac 1i.
$$
As a result, we have
$$
                        \frac{\lambda(E_i)}{i}\leq\sum_{n=N+1}^\infty\int_{E_i} |f_n| d\mu\leq
                        \sum_{n=N+1}^\infty\frac{1}{n^2}\leq\frac 1N.
$$
In particular, this implies that $\lambda(E_i)=0$ for any $i$. Thus we have
$$
                        \lambda \left(\bigcup_{i=1}^\infty E_i\right)=0.
$$
Hence for almost all $x$, $\lim_{n\to\infty} f(x)=0$.
::

::ProblemBlock{number=3}
#problem
Let $f\in L^4([a,b])$, and let
$$
                            F(x)=\int_a^x f(t) dt.
$$
Show that
$$
                            \lim_{h\to 0^+}\frac{F(x+h)-F(x)}{h^{3/4}}=0
$$
for all $x\in (a,b)$.

#proof
Using Hölder's Inequality, we have  
$$
                        |F(x+h)-F(x)|=\left|\int_x^{x+h} f(t) dt\right|\leq \left(\int_x^{x+h}|f(t)|^4
                        dt\right)^{1/4}\cdot \left(\int_x^{x+h} dt\right)^{3/4}.
$$
Thus we have
$$
                        \frac{|F(x+h)-F(x)|}{h^{3/4}}
                        \leq \left(\int_x^{x+h}|f(t)|^4
                        dt\right)^{1/4}=\left(\int_a^b|f(t)|^4\,I_{[x,x+h](t)}
                        dt\right)^{1/4},
$$
where $I_{[x,x+h]}(t)$ is the characteristic function of the interval $[x,x+h]$ which is $1$ on
                        the interval and $0$ outside.
Since for fixed $x$, we have
$$
                        \lim_{h\to 0^+} |f(t)|^4\,I_{[x,x+h]}(t)=0
$$
almost everywhere, by the [Lebesgue's Dominated Convergence Theorem](en.wikipedia.org/wiki/Dominated_convergence_theorem), we get
$$
                        \lim_{h\to 0^+} \frac{F(x+h)-F(x)}{h^{3/4}}=0.
$$
::

::ProblemBlock{number=4}
#problem
Assume that $f,g\in L^2(\R)$. define
$$
A(x)=\int_\R f(x-y)g(y) dy.
$$
Show that $A(x)\in\mathcal C(\R)$ and
$$
                            \lim_{|x|\to\infty} A(x)=0.
$$

#proof
Let $h$ be a small number, we then have
$$
                        A(x+h)=\int_\R f(x+h-y) g(y) dy=\int_\R f(x-y)g(y+h) dy
$$
by change of variable. Thus we have
$$
                        |A(x+h)-A(x)|\leq \int_\R |f(x-y)|g(y+h)-g(y)|dy.
$$
Using Cauchy inequality we obtain
$$
                        |A(x+h)-A(x)|\leq\sqrt{\int_\R|f(x-y)|^2 dy}\cdot
                        \sqrt{\int_\R|g(y+h)-g(y)|^2 dy}.
$$
Since $f\in L^2$, we have
$$
                        \int_\R|f(x-y)|^2 dy=\int_\R|f(y)|^2 dy\leq C
$$
for a constant $C>0$. Thus we have
$$
                        |A(x+h)-A(x)|\leq C \sqrt{\int_\R|g(y+h)-g(y)|^2 dy}.
$$
It remains to prove that
$$
                        \lim_{h\to 0} \int_\R|g(y+h)-g(y)|^2 dy=0.
$$
For any $\eps>0$, there exists an smooth function $\varphi(t)\in\mathcal C_0^\infty$ 
                        such that
$$
                        \int_\R|g(y)-\varphi(y)|^2 dy<\eps. 
$$ 
For any $h$, we shall also have
$$
                            \int_\R|g(y+h)-\varphi(y+h)|^2 dy<\eps
$$ 
by the  change variable formula. Since $\varphi$ is a
                            smooth function with compact support, its derivative is bounded by a constant $C$. 
                            Assume
                            that the support of $\varphi$ is contained in $[-R,R]$.
                             If we choose $h$ small enough, we
                            have $$ \int_\R |\varphi(t+h)-\varphi(t)|^2 dt\leq CRh^2.$$ 
                            By triangle inequality, we have
                            $$ \int_\R|g(y+h)-g(y)|^2 dy\leq 6\eps+3CRh^2$$ 
                        and this proves the continuity of $A(x)$.
                    
To prove that $A(x)$ tends to $0$ at infinity, we assume that $\eps>0$ be a small number. 
                    By the $L^2$ integrability of $f,g$, there exists an $R>0$ such that 
$$
                    \int_{|y|>R}(|f(y)|^2+|g(y)|^2)dy<\eps.
$$
Then for any $|x|>2R$, we have
$$
                 |A(x)|\leq \left|\int_{|y|\leq R} f(x-y)g(y) dy\right|+
                 \left|\int_{|y|> R} f(x-y)g(y) dy\right|.
$$
For the second term in the above right, we have
$$
                    \left|\int_{|y|> R} f(x-y)g(y) dy\right|\leq\sqrt{\int_\R|f(x-y)|^2 dy}\cdot\sqrt{\int_{|y|>R}|g(y)|^2dy}.
$$
Since
$$
                    \int_\R|f(x-y)|^2 dy=\int_\R|f(y)|^2 dy\leq C,
$$
we have
$$
                    \left|\int_{|y|> R} f(x-y)g(y) dy\right|\leq C\sqrt\eps.
$$
Similarly, we get the estimate of the first term by the following coversion:
$$
                    \left|\int_{|y|\leq R} f(x-y)g(y) dy\right|\leq \left|\int_{|x-y|>R} f(x-y)g(y) dy\right|.
$$
::

::ProblemBlock{number=5}
#problem
 Is it possible for a continuous function $f: [0,1]\to\mathbb R $ to

(a). Infinitely many strict local minima?

                                  

(b). uncountably many strict local minima?

#proof
For question (a), the function $y=\sin (1/x)$ is an example of
                                    infinitely many strictly local minima at $$x=(2k\pi-\pi/2)^{-1}.$$

It is not possible to have uncountably many strictly local minimal for a
                                    function. Let $a\in\R$ be a strictly local minimal point. Then there exists a
                                    number
                                    $\delta_a$ such that for any $a\neq x\in (a-\delta_a, a+\delta_a)$, we must have
                                    $f(x)>f(a)$. We assume $\delta_a$ is the maximal number such a property holds.
                                
Let $M$ be the set of strictly local minimal points. Let
$$
                                    M_n=\{x\mid \delta_x>\frac 1n\}\cap M.
$$
Then
$$
                                    \bigcup_{n=1}^\infty M_n=M.
$$
If $M$ is uncountable, then at lease on of $M_n$ must be uncountable, and hence
                                    infinite on some closed interval $[p,q]$. However, since for any
$a_1,a_2\in M_n$, we must have $|a_1-a_2|>1/n$, the number must be finite, this is a contradiction.
::

::ProblemBlock{number=6}
#problem
Let $A$ be the collection of functions $f\in L^1(X,\mu)$ such that $\|f\|_1=1$
                                    and
                                    $\int_X
                                    fd\mu=0$.
                                    Prove that for every $g\in L^\infty(X,\mu)$,
$$
                                    \sup_{f\in A}\,\int_X fgd\mu=\frac 12 ({\rm ess}\,\sup g-{\rm ess}\,\inf g).
$$


If you haven't seen ${\rm ess}\,\inf $, it is defined in a natural way, or else
                                    as
$$
                                    {\rm ess}\,\inf f= - {\rm ess}\,\sup (-f).
$$

#proof
We writre 
$F=f^+-f^-$ as the positive and negative part of $f$. Then we have
$$
\int_X f^+d\mu+ \int_X f^-d\mu=1,\quad \int_X f^+d\mu- \int_X f^-d\mu=0.
$$
Thus  we have
$$
\int_X f^+d\mu=\int_X f^-d\mu=\frac 12.
$$

As a result, we have
$$
\int_X fgd\mu\leq {\rm ess}\,\sup g\int_Xf^+d\mu-   {\rm ess}\,\inf g\int_Xf^-d\mu=
\frac 12 ({\rm ess}\,\sup g-{\rm ess}\,\inf g),
$$
and hence 
$$
\sup_{f\in A}\int_X fgd\mu\leq \frac 12 ({\rm ess}\,\sup g-{\rm ess}\,\inf g).
$$

To prove that the above  inequality is actually an equalty, we just need to let $f$ be Dirac delta functions 
on the maxiumal  and minimal points. 
::
