 2025 Spring Real Analysis

::ProblemBlock{number=1}
#problem
Let $(X,\mathcal A,\mu)$ be a measure space and let $f\in L^1(X,\mu)$.
Show that
$$
\int_E |f|\,d\mu \to 0
\quad \text{as} \quad
\mu(E)\to 0.
$$

#proof
Since $f\in L^1(X,\mu)$, we have
$$
\int_X |f|\,d\mu<\infty.
$$
Fix $\varepsilon>0$. Because $|f|$ is integrable, there exists $M>0$ such
that
$$
\int_{\{|f|>M\}} |f|\,d\mu<\frac{\varepsilon}{2}.
$$
Now for any measurable set $E\in\mathcal A$, we split
$$
\int_E |f|\,d\mu
=
\int_{E\cap \{|f|\le M\}} |f|\,d\mu
+
\int_{E\cap \{|f|>M\}} |f|\,d\mu.
$$
On the set $\{|f|\le M\}$, we have $|f|\le M$, so
$$
\int_{E\cap \{|f|\le M\}} |f|\,d\mu
\le
M\mu(E).
$$
Also,
$$
\int_{E\cap \{|f|>M\}} |f|\,d\mu
\le
\int_{\{|f|>M\}} |f|\,d\mu
<
\frac{\varepsilon}{2}.
$$
Therefore,
$$
\int_E |f|\,d\mu
\le
M\mu(E)+\frac{\varepsilon}{2}.
$$
Choose
$$
\delta=\frac{\varepsilon}{2M}.
$$
Then whenever $\mu(E)<\delta$, we have
$$
M\mu(E)<\frac{\varepsilon}{2}.
$$
Hence
$$
\int_E |f|\,d\mu
<
\varepsilon.
$$
Thus
$$
\int_E |f|\,d\mu \to 0
\quad \text{as} \quad
\mu(E)\to 0.
$$
::

::ProblemBlock{number=2}
#problem
Let $(X,\mathcal A,\mu)$ be a measure space and let $\{f_n\}_{n=1}^\infty$
be a sequence of nonnegative functions in $L^1(X,\mu)$. Let
$f\in L^1(X,\mu)$. If
$$
f_n \to f
$$
pointwise almost everywhere on $X$, show that
$$
\lim_{n\to\infty}
\left(
\|f_n-f\|_{L^1(X,\mu)}
-
\int_X (f_n-f)\,d\mu
\right)
=0.
$$



#proof
Since $f_n\ge 0$ for every $n$ and $f_n\to f$ pointwise almost everywhere,
we have
$$
f\ge 0
$$
almost everywhere on $X$.

For real numbers $a,b$, we have
$$
|a-b|-(a-b)=2(b-a)^+,
$$
where
$$
(b-a)^+=\max\{b-a,0\}.
$$
Applying this with $a=f_n(x)$ and $b=f(x)$, we get
$$
|f_n(x)-f(x)|-(f_n(x)-f(x))
=
2(f(x)-f_n(x))^+.
$$
Therefore,
$$
\|f_n-f\|_{L^1(X,\mu)}
-
\int_X (f_n-f)\,d\mu
=
2\int_X (f-f_n)^+\,d\mu.
$$

Now, since $f_n\to f$ almost everywhere,
$$
(f-f_n)^+\to 0
$$
almost everywhere. Also, because $f_n\ge 0$ and $f\ge 0$ almost everywhere,
we have
$$
0\le (f-f_n)^+\le f.
$$
Since $f\in L^1(X,\mu)$, the [Dominated Convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem) gives
$$
\int_X (f-f_n)^+\,d\mu\to 0.
$$
Therefore,
$$
\lim_{n\to\infty}
\left(
\|f_n-f\|_{L^1(X,\mu)}
-
\int_X (f_n-f)\,d\mu
\right)
=0.
$$
::

::ProblemBlock{number=3}
#problem
Let $f\in L^1(\mathbb R)$ satisfy
$$
\limsup_{\varepsilon\to 0}
\int_{\mathbb R}\int_{\mathbb R}
\frac{|f(x)||f(y)|}{(x-y)^2+\varepsilon^2}\,dx\,dy
<\infty.
$$
Show that $f=0$ almost everywhere.

#proof
Let
$$
h(x)=|f(x)|.
$$
Then $h\in L^1(\mathbb R)$ and $h\ge 0$. We will show that if $h$ is not
zero almost everywhere, then
$$
\int_{\mathbb R}\int_{\mathbb R}
\frac{h(x)h(y)}{(x-y)^2+\varepsilon^2}\,dx\,dy
\to\infty
$$
as $\varepsilon\to 0$, which contradicts the hypothesis.

Suppose, toward a contradiction, that $h$ is not zero almost everywhere. Then
there exist $\delta>0$ and $R>0$ such that the set
$$
E=\{x\in[-R,R]:h(x)>\delta\}
$$
has positive measure. Hence, for every $\varepsilon>0$,
$$
\int_{\mathbb R}\int_{\mathbb R}
\frac{h(x)h(y)}{(x-y)^2+\varepsilon^2}\,dx\,dy
\ge
\delta^2
\int_E\int_E
\frac{1}{(x-y)^2+\varepsilon^2}\,dx\,dy.
$$

We claim that
$$
\int_E\int_E
\frac{1}{(x-y)^2+\varepsilon^2}\,dx\,dy
\to\infty
$$
as $\varepsilon\to0$.

Indeed, by [Tonelli's theorem](https://en.wikipedia.org/wiki/Fubini%27s_theorem#Tonelli's_theorem) and the change of variables $s=x-y$,
$$
\int_E\int_E
\frac{1}{(x-y)^2+\varepsilon^2}\,dx\,dy
=
\int_{\mathbb R}
\frac{|E\cap(E-s)|}{s^2+\varepsilon^2}\,ds.
$$
Since $\mathbf 1_E\in L^1(\mathbb R)$, translations are continuous in
$L^1$. Therefore
$$
|E\cap(E-s)|\to |E|
$$
as $s\to0$. Since $|E|>0$, there exists $\eta>0$ such that whenever
$|s|<\eta$,
$$
|E\cap(E-s)|\ge \frac{|E|}{2}.
$$
Thus
$$
\int_{\mathbb R}
\frac{|E\cap(E-s)|}{s^2+\varepsilon^2}\,ds
\ge
\frac{|E|}{2}
\int_{-\eta}^{\eta}
\frac{1}{s^2+\varepsilon^2}\,ds.
$$
But
$$
\int_{-\eta}^{\eta}
\frac{1}{s^2+\varepsilon^2}\,ds
=
\frac{2}{\varepsilon}\arctan\left(\frac{\eta}{\varepsilon}\right),
$$
which tends to $+\infty$ as $\varepsilon\to0$. Hence
$$
\int_E\int_E
\frac{1}{(x-y)^2+\varepsilon^2}\,dx\,dy
\to\infty.
$$

Therefore,
$$
\int_{\mathbb R}\int_{\mathbb R}
\frac{h(x)h(y)}{(x-y)^2+\varepsilon^2}\,dx\,dy
\to\infty,
$$
contradicting the assumption that the limsup is finite. Thus $h=0$ almost
everywhere, which means
$$
f=0
$$
almost everywhere.
::

::ProblemBlock{number=4}
#problem
Prove that the function
$$
f(x)=\sin(x)\cos\left(\frac{1}{\sqrt{x}}\right)
$$
is absolutely continuous on $(0,1)$.

#proof
Define
$$
f(0)=0.
$$
We will show that this extension is absolutely continuous on $[0,1]$.
This will imply that $f$ is absolutely continuous on $(0,1)$.

For $x\in(0,1)$, differentiating gives
$$
f'(x)
=
\cos(x)\cos\left(\frac{1}{\sqrt{x}}\right)
+
\frac{\sin(x)}{2x^{3/2}}
\sin\left(\frac{1}{\sqrt{x}}\right).
$$
Indeed,
$$
\frac{d}{dx}\cos\left(\frac{1}{\sqrt{x}}\right)
=
\frac{1}{2x^{3/2}}\sin\left(\frac{1}{\sqrt{x}}\right).
$$
Therefore,
$$
|f'(x)|
\le
1+\frac{|\sin(x)|}{2x^{3/2}}.
$$
Since $|\sin(x)|\le x$ for $x>0$, we get
$$
|f'(x)|
\le
1+\frac{x}{2x^{3/2}}
=
1+\frac{1}{2\sqrt{x}}.
$$
But
$$
\int_0^1 \left(1+\frac{1}{2\sqrt{x}}\right)\,dx<\infty.
$$
Hence
$$
f'\in L^1(0,1).
$$

Now, for $0<a<x<1$, the ordinary fundamental theorem of calculus gives
$$
f(x)-f(a)=\int_a^x f'(t)\,dt.
$$
Letting $a\to0^+$, we have
$$
f(a)=\sin(a)\cos\left(\frac{1}{\sqrt a}\right)\to0,
$$
because $|\sin(a)|\le a$. Also, since $f'\in L^1(0,1)$,
$$
\int_a^x f'(t)\,dt\to \int_0^x f'(t)\,dt.
$$
Therefore,
$$
f(x)=\int_0^x f'(t)\,dt.
$$

Thus the extension of $f$ to $[0,1]$ satisfies
$$
f(x)=f(0)+\int_0^x f'(t)\,dt
$$
with $f'\in L^1(0,1)$. Hence $f$ is absolutely continuous on $[0,1]$.
In particular, $f$ is absolutely continuous on $(0,1)$.
::

::ProblemBlock{number=5}
#problem
Let $\{f_n\}_{n=1}^\infty\subset L^p(\mathbb R)$ and
$f\in L^p(\mathbb R)$ satisfy
$$
f_n \rightharpoonup f
\quad \text{weakly in } L^p(\mathbb R)
$$
and
$$
\liminf_{n\to\infty}\|f_n\|_{L^p}=\|f\|_{L^p}.
$$

<span style="display:inline-block; width:4em;"></span> <b>(i)</b> If $1<p<\infty$, prove that
$$
\liminf_{n\to\infty}\|f_n-f\|_{L^p}=0.
$$

<span style="display:inline-block; width:4em;"></span> <b>(ii)</b>  If $p=1$, prove or disprove that
$$
\liminf_{n\to\infty}\|f_n-f\|_{L^1}=0.
$$
 

#proof
 We first prove <strong> (i) </strong>.
If $f=0$, 
then
$$
\liminf_{n\to\infty}\|f_n-f\|_{L^p}=\liminf_{n\to\infty}\|f_n\|_{L^p}=0.
$$

Now assume $f\ne0$. Suppose, for contradiction, that
$$
\liminf_{n\to\infty}\|f_n-f\|_{L^p}>0.
$$
Then there exists $\varepsilon>0$ such that, for a subsequence,
$$
\|f_{n_k}-f\|_{L^p}\ge \varepsilon
$$
for all sufficiently large $k$.

Set
$$
a_k=\frac{f_{n_k}}{\|f_{n_k}\|_{L^p}},
\qquad
a=\frac{f}{\|f\|_{L^p}}.
$$
Then
$$
\|a_k\|_{L^p}=1,
\qquad
\|a\|_{L^p}=1.
$$
Moreover, since $\|f_{n_k}\|_{L^p}\to\|f\|_{L^p}$ and
$f_{n_k}\rightharpoonup f$, we have
$$
a_k\rightharpoonup a
\quad \text{weakly in } L^p(\mathbb R).
$$

Also, the assumption $\|f_{n_k}-f\|_{L^p}\ge \varepsilon$ implies that,
for some $\varepsilon_0>0$,
$$
\|a_k-a\|_{L^p}\ge \varepsilon_0
$$
for all sufficiently large $k$.

Since $1<p<\infty$, the space $L^p(\mathbb R)$ is uniformly convex. Hence
there exists $\delta>0$ such that whenever
$$
\|u\|_{L^p}=\|v\|_{L^p}=1
$$
and
$$
\|u-v\|_{L^p}\ge \varepsilon_0,
$$
we have
$$
\left\|\frac{u+v}{2}\right\|_{L^p}\le 1-\delta.
$$
Applying this to $u=a_k$ and $v=a$, we get
$$
\left\|\frac{a_k+a}{2}\right\|_{L^p}\le 1-\delta
$$
for all sufficiently large $k$.

But since $a_k\rightharpoonup a$, we have
$$
\frac{a_k+a}{2}\rightharpoonup a.
$$
By weak lower semicontinuity of the norm,
$$
\|a\|_{L^p}
\le
\liminf_{k\to\infty}
\left\|\frac{a_k+a}{2}\right\|_{L^p}
\le
1-\delta.
$$
This contradicts $\|a\|_{L^p}=1$. Therefore,
$$
\liminf_{n\to\infty}\|f_n-f\|_{L^p}=0.
$$

This proves <strong> (i) </strong>.

Now we disprove <strong> (ii) </strong>. Let $p=1$. Define the Rademacher functions
$r_n$ on $[0,1]$ by setting $r_n=1$ on the first half of each dyadic interval
of length $2^{-(n-1)}$ and $r_n=-1$ on the second half. Extend $r_n$ by $0$
outside $[0,1]$.

Then
$$
r_n \rightharpoonup 0
\quad \text{weakly in } L^1(\mathbb R).
$$
Indeed, if $\varphi\in L^\infty(\mathbb R)$, then
$\varphi\mathbf 1_{[0,1]}\in L^1([0,1])$. Approximate
$\varphi\mathbf 1_{[0,1]}$ in $L^1$ by a dyadic step function $\psi$. For
$n$ sufficiently large,
$$
\int_{\mathbb R} \psi(x)r_n(x)\,dx=0,
$$
because $r_n$ has average zero on each dyadic interval on which $\psi$ is
constant. Hence
$$
\int_{\mathbb R}\varphi(x)r_n(x)\,dx\to0.
$$
Thus $r_n\rightharpoonup0$ in $L^1(\mathbb R)$.

Now set
$$
f=\mathbf 1_{[0,1]},
\qquad
f_n=\mathbf 1_{[0,1]}+r_n.
$$
Then
$$
f_n\rightharpoonup f
\quad \text{weakly in } L^1(\mathbb R).
$$
Also, on $[0,1]$, the function $f_n$ is equal to $2$ on half of the interval
and $0$ on the other half. Therefore
$$
\|f_n\|_{L^1}=1
$$
for every $n$, while
$$
\|f\|_{L^1}=1.
$$
Hence
$$
\liminf_{n\to\infty}\|f_n\|_{L^1}=\|f\|_{L^1}.
$$
However,
$$
\|f_n-f\|_{L^1}
=
\|r_n\|_{L^1}
=
1
$$
for every $n$. Thus
$$
\liminf_{n\to\infty}\|f_n-f\|_{L^1}=1\ne0.
$$

Therefore, the statement is false when $p=1$.
::

 

::ProblemBlock{number=6}
#problem
 <b>(a)</b> Construct a non-decreasing function $f$ on $[0,1]$ such that
$f'(x)=0$ for almost every $x\in[0,1]$ and
$$
f(1)-f(0)=1.
$$

 <b>(b)</b>  Let $E\subset[0,1]$ be a set of Lebesgue measure $0$. Construct a
non-decreasing function $f$ on $[0,1]$ such that $f'(x)$ does not exist at
every point $x\in E$.

<br>


#proof
 <b>(a)</b>
Let $f$ be the Cantor function on $[0,1]$.

Recall that the [Cantor function](https://en.wikipedia.org/wiki/Cantor_function) is non-decreasing, satisfies
$$
f(0)=0
\qquad\text{and}\qquad
f(1)=1,
$$
and is constant on every connected component of the complement of the Cantor
set $C$.

Since the Cantor set has Lebesgue measure $0$, the complement $[0,1]\setminus C$
has full measure. For every $x\in [0,1]\setminus C$, there exists an open
interval containing $x$ on which $f$ is constant. Therefore
$$
f'(x)=0
$$
for every $x\in [0,1]\setminus C$. Hence
$$
f'(x)=0
$$
for almost every $x\in[0,1]$. Also,
$$
f(1)-f(0)=1-0=1.
$$
This proves <b>(a)</b>.

<br>

<b>(b)</b>
Since $E$ has Lebesgue measure $0$, for each $n\in\mathbb N$ there exists an
open set $G_n\subset\mathbb R$ such that
$$
E\subset G_n
$$
and
$$
|G_n|<2^{-2n}.
$$
Define
$$
f(x)=\sum_{n=1}^{\infty} 2^n \int_0^x \mathbf 1_{G_n}(t)\,dt,
\qquad x\in[0,1].
$$
Each function
$$
x\mapsto \int_0^x \mathbf 1_{G_n}(t)\,dt
$$
is non-decreasing. Hence $f$ is non-decreasing.

Also, for $x\in[0,1]$,
$$
0\le 2^n \int_0^x \mathbf 1_{G_n}(t)\,dt
\le
2^n |G_n|
<
2^n 2^{-2n}
=
2^{-n}.
$$
Since
$$
\sum_{n=1}^{\infty}2^{-n}<\infty,
$$
the series defining $f$ converges uniformly on $[0,1]$. Thus $f$ is a finite
non-decreasing function on $[0,1]$.

Now fix $x\in E$. Since $E\subset G_n$ for every $n$, we have
$$
x\in G_n
$$
for every $n$. Since each $G_n$ is open, for every $N\in\mathbb N$ there
exists $\delta_N>0$ such that
$$
(x-\delta_N,x+\delta_N)\subset \bigcap_{n=1}^N G_n.
$$
Therefore, if $0<h<\delta_N$ and $x+h\le1$, then
$$
\int_x^{x+h}\mathbf 1_{G_n}(t)\,dt=h
$$
for every $1\le n\le N$. Hence
$$
f(x+h)-f(x)
=
\sum_{n=1}^{\infty}2^n\int_x^{x+h}\mathbf 1_{G_n}(t)\,dt
\ge
\sum_{n=1}^N 2^n h.
$$
Dividing by $h>0$, we get
$$
\frac{f(x+h)-f(x)}{h}
\ge
\sum_{n=1}^N 2^n.
$$
Since $N$ is arbitrary,
$$
\lim_{h\to0^+}\frac{f(x+h)-f(x)}{h}=+\infty.
$$
Thus the derivative of $f$ at $x$ cannot exist as a finite number.

Since $x\in E$ was arbitrary, $f'(x)$ does not exist at every point
$x\in E$. This proves <b>(b)</b>.
::
