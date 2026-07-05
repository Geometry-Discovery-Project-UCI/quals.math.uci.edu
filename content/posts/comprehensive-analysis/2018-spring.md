# 2018 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $E\subset \mathbb{R}$ be uncountable. Prove that there exists $x\in \mathbb{R}$ such that
$$
E\cap (-\infty,x)\quad \text{and}\quad E\cap (x,\infty)
$$
are both uncountable.

#proof
Suppose, toward a contradiction, that no such $x$ exists. Then for every $x\in \mathbb{R}$, at least one of
$$
E\cap (-\infty,x), \qquad E\cap (x,\infty)
$$
is countable.

For $q\in \mathbb{Q}$, define
$$
A=\{q\in \mathbb{Q}: E\cap (-\infty,q) \text{ is countable}\}
$$
and
$$
B=\{q\in \mathbb{Q}: E\cap (q,\infty) \text{ is countable}\}.
$$
By the assumption, $\mathbb{Q}=A\cup B$. Also $A\cap B=\emptyset$, because if $q\in A\cap B$, then
$$
E\subset \bigl(E\cap (-\infty,q)\bigr)\cup \{q\}\cup \bigl(E\cap (q,\infty)\bigr),
$$
which would make $E$ countable.

Both $A$ and $B$ are nonempty. Indeed, if $A=\emptyset$, then $B=\mathbb{Q}$, so for every rational $q$, the set $E\cap (q,\infty)$ is countable. Since every point of $E$ lies in $(q,\infty)$ for some rational $q$, we get
$$
E=\bigcup_{q\in \mathbb{Q}} \bigl(E\cap (q,\infty)\bigr),
$$
a countable union of countable sets, contradiction. Similarly, $B\neq \emptyset$.

The set $A$ is downward closed in $\mathbb{Q}$, and $B$ is upward closed in $\mathbb{Q}$. Moreover, every element of $A$ is smaller than every element of $B$; otherwise, if $b<a$ with $b\in B$ and $a\in A$, then $b\in A$ by downward closure of $A$, contradicting $A\cap B=\emptyset$.

Let
$$
\alpha=\sup A=\inf B.
$$
Choose rational sequences $a_n\in A$ and $b_n\in B$ such that
$$
a_n\uparrow \alpha, \qquad b_n\downarrow \alpha.
$$
Then
$$
E\cap (-\infty,\alpha)\subset \bigcup_{n=1}^{\infty} \bigl(E\cap (-\infty,a_n)\bigr),
$$
so $E\cap (-\infty,\alpha)$ is countable. Similarly,
$$
E\cap (\alpha,\infty)\subset \bigcup_{n=1}^{\infty} \bigl(E\cap (b_n,\infty)\bigr),
$$
so $E\cap (\alpha,\infty)$ is countable. Therefore
$$
E\subset \bigl(E\cap (-\infty,\alpha)\bigr)\cup \{\alpha\}\cup \bigl(E\cap (\alpha,\infty)\bigr)
$$
is countable, a contradiction.

Hence there exists $x\in \mathbb{R}$ such that both $E\cap (-\infty,x)$ and $E\cap (x,\infty)$ are uncountable.
::

::ProblemBlock{number=2}
#problem
Let $(a_n)_{n\in \mathbb{N}}$ be a bounded sequence of real numbers and let $f:[-1,1]\to \mathbb{R}$ be given by
$$
f(x)=
\begin{cases}
a_n, & x=1/n,\ n\in \mathbb{N},\\
0, & \text{otherwise}.
\end{cases}
$$
Find a necessary and sufficient condition on $(a_n)$ for each item below so that $f$ is:

<span style="display:inline-block; width:1em;"></span> **(a)** continuous at $0$,

<span style="display:inline-block; width:1em;"></span> **(b)** differentiable at $0$,

<span style="display:inline-block; width:1em;"></span> **(c)** Riemann integrable on $[-1,1]$.

For part **(c)**, do not simply quote the theorem that a bounded function with countably many discontinuities is Riemann integrable.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Since $f(0)=0$, continuity at $0$ means
$$
\lim_{x\to 0} f(x)=0.
$$
Along the sequence $x=1/n$, this requires
$$
\lim_{n\to \infty} a_n=0.
$$
Thus $a_n\to 0$ is necessary.

Conversely, assume $a_n\to 0$. Let $\varepsilon>0$. Choose $N$ such that $|a_n|<\varepsilon$ for all $n\ge N$. If $|x|<1/N$, then either $x$ is not of the form $1/n$, in which case $f(x)=0$, or $x=1/n$ with $n>N$, in which case $|f(x)|=|a_n|<\varepsilon$. Therefore $f$ is continuous at $0$.

So $f$ is continuous at $0$ if and only if
$$
a_n\to 0.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Since $f(0)=0$, differentiability at $0$ means that
$$
\lim_{x\to 0}\frac{f(x)-f(0)}{x}=
\lim_{x\to 0}\frac{f(x)}{x}
$$
exists. For $x$ not of the form $1/n$, the quotient is $0$. For $x=1/n$, the quotient is
$$
\frac{f(1/n)}{1/n}=n a_n.
$$
Therefore differentiability at $0$ requires
$$
n a_n\to 0.
$$

Conversely, if $n a_n\to 0$, then for $x\to 0$, the quotient $f(x)/x$ is either $0$ or equals $n a_n$ for some large $n$. Hence
$$
\lim_{x\to 0}\frac{f(x)}{x}=0.
$$
Thus $f$ is differentiable at $0$, and $f'(0)=0$.

So $f$ is differentiable at $0$ if and only if
$$
n a_n\to 0.
$$

<span style="display:inline-block; width:1em;"></span> **(c)** Since $(a_n)$ is assumed bounded, $f$ is Riemann integrable on $[-1,1]$ for every such bounded sequence $(a_n)$. Thus there is no additional condition beyond boundedness.

We prove this directly. Let
$$
M=\sup_{n\in \mathbb{N}} |a_n|<\infty.
$$
If $M=0$, then $f\equiv 0$ and there is nothing to prove. Assume $M>0$.

Let $\varepsilon>0$. Choose $N$ so large that
$$
\frac{2M}{N}<\frac{\varepsilon}{2}.
$$
All points $1/n$ with $n>N$ lie in $[0,1/N]$. The contribution of this interval to any upper oscillation estimate is at most
$$
2M\cdot \frac{1}{N}<\frac{\varepsilon}{2}.
$$
The remaining exceptional points
$$
1,\frac12,\dots,\frac1N
$$
are finitely many. Around them choose finitely many open intervals whose total length is less than
$$
\frac{\varepsilon}{4M}.
$$
Refine a partition so that these intervals and $[0,1/N]$ are unions of subintervals of the partition. On the complement of these intervals, $f=0$, so the oscillation is $0$. On the chosen intervals, the oscillation is at most $2M$. Hence for this partition $P$,
$$
U(P,f)-L(P,f)<\varepsilon.
$$
Therefore $f$ is Riemann integrable.

Moreover, the same construction gives upper sums arbitrarily close to $0$ and lower sums arbitrarily close to $0$, so the integral is
$$
\int_{-1}^{1} f(x)\,dx=0.
$$
::

::ProblemBlock{number=3}
#problem
Let $f:[0,1]\to [0,1]$ be convex. Prove that the arclength of the graph of $f$ is at most $3$.

Recall that $f$ is convex if
$$
f(\lambda x+(1-\lambda)y)\le \lambda f(x)+(1-\lambda)f(y)
$$
for any $x,y\in [0,1]$ and $\lambda\in [0,1]$.

#proof
Let
$$
0=x_0<x_1<\cdots <x_m=1
$$
be a partition of $[0,1]$. The polygonal length of the graph along this partition is
$$
\sum_{i=1}^m \sqrt{(x_i-x_{i-1})^2+\bigl(f(x_i)-f(x_{i-1})\bigr)^2}.
$$
Using
$$
\sqrt{u^2+v^2}\le u+|v| \qquad (u\ge 0),
$$
we get
$$
\sum_{i=1}^m \sqrt{(x_i-x_{i-1})^2+\bigl(f(x_i)-f(x_{i-1})\bigr)^2}
\le
\sum_{i=1}^m (x_i-x_{i-1})+
\sum_{i=1}^m |f(x_i)-f(x_{i-1})|.
$$
The first sum is $1$. It remains to bound the second sum.

For a convex function, the secant slopes over consecutive intervals are nondecreasing. Indeed, if $x_{i-1}<x_i<x_{i+1}$, convexity implies
$$
\frac{f(x_i)-f(x_{i-1})}{x_i-x_{i-1}}
\le
\frac{f(x_{i+1})-f(x_i)}{x_{i+1}-x_i}.
$$
Hence the increments $f(x_i)-f(x_{i-1})$ can change sign at most once: first they may be nonpositive, and afterwards they may be nonnegative.

Therefore, for this partition, the total variation along the partition is at most the amount by which $f$ decreases plus the amount by which $f$ increases. Since $0\le f\le 1$, this gives
$$
\sum_{i=1}^m |f(x_i)-f(x_{i-1})|\le 2.
$$
Thus every polygonal approximation to the graph has length at most
$$
1+2=3.
$$
Taking the supremum over all partitions, the arclength of the graph of $f$ is at most $3$.
::

::ProblemBlock{number=4}
#problem
Suppose that $f:[a,b]\to \mathbb{R}$ is a function. We say that $f$ is absolutely continuous if, for every $\varepsilon>0$, there is $\delta>0$ such that whenever $(x_i,y_i)$, $i=1,\dots,k$, is a finite sequence of disjoint subintervals of $[a,b]$ with
$$
\sum_{i=1}^k (y_i-x_i)<\delta,
$$
we have
$$
\sum_{i=1}^k |f(y_i)-f(x_i)|<\varepsilon.
$$
We say that $f$ is of bounded variation if there is $M>0$ such that, whenever
$$
P=\{a=x_0,x_1,\dots,x_n=b\}
$$
is a partition of $[a,b]$, we have
$$
\sum_{i=1}^n |f(x_i)-f(x_{i-1})|\le M.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Suppose that $f$ is $C^1$. Prove that $f$ is absolutely continuous.

<span style="display:inline-block; width:1em;"></span> **(b)** Suppose that $f$ is absolutely continuous. Prove that $f$ is of bounded variation.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Since $f\in C^1([a,b])$, the derivative $f'$ is continuous on the compact interval $[a,b]$. Hence $f'$ is bounded. Let
$$
M=\sup_{x\in [a,b]} |f'(x)|<\infty.
$$
If $M=0$, then $f$ is constant and is absolutely continuous. Assume $M>0$.

Let $\varepsilon>0$ and choose
$$
\delta=\frac{\varepsilon}{M}.
$$
If $(x_i,y_i)$, $i=1,\dots,k$, are disjoint subintervals with
$$
\sum_{i=1}^k (y_i-x_i)<\delta,
$$
then by the mean value theorem,
$$
|f(y_i)-f(x_i)|\le M(y_i-x_i).
$$
Therefore
$$
\sum_{i=1}^k |f(y_i)-f(x_i)|
\le
M\sum_{i=1}^k (y_i-x_i)
<
M\delta
=
\varepsilon.
$$
Thus $f$ is absolutely continuous.

<span style="display:inline-block; width:1em;"></span> **(b)** Assume $f$ is absolutely continuous. Apply the definition with $\varepsilon=1$. Then there exists $\delta>0$ such that for every finite disjoint family of subintervals with total length less than $\delta$, the corresponding sum of absolute changes of $f$ is less than $1$.

Choose an integer $N$ so large that
$$
\frac{b-a}{N}<\delta.
$$
Divide $[a,b]$ into $N$ subintervals
$$
a=t_0<t_1<\cdots<t_N=b
$$
with
$$
t_j-t_{j-1}<\delta
$$
for each $j$.

Now let
$$
P=\{a=x_0<x_1<\cdots <x_m=b\}
$$
be any partition of $[a,b]$. Refine $P$ by adding the points $t_0,t_1,\dots,t_N$. Refining a partition can only increase the sum
$$
\sum |f(x_i)-f(x_{i-1})|,
$$
so it is enough to bound the variation on the refined partition.

Inside each interval $[t_{j-1},t_j]$, the subintervals of the refined partition are disjoint and have total length $t_j-t_{j-1}<\delta$. Hence the sum of the corresponding absolute changes of $f$ is less than $1$. Summing over $j=1,\dots,N$, we get
$$
\sum_{i=1}^m |f(x_i)-f(x_{i-1})|\le N.
$$
Thus $f$ is of bounded variation, with variation at most $N$.
::

::ProblemBlock{number=5}
#problem
Let $f:X\to Y$ be a continuous function, where $X$ and $Y$ are metric spaces. Show that $f(K)$ is compact whenever $K\subset X$ is compact.

You must give a proof and cannot simply quote the theorem.

#proof
Let $\{V_\alpha\}_{\alpha\in A}$ be an open cover of $f(K)$ in $Y$. Then
$$
f(K)\subset \bigcup_{\alpha\in A} V_\alpha.
$$
For each $\alpha$, the preimage $f^{-1}(V_\alpha)$ is open in $X$ because $f$ is continuous. Also,
$$
K\subset \bigcup_{\alpha\in A} f^{-1}(V_\alpha).
$$
Thus $\{f^{-1}(V_\alpha)\}_{\alpha\in A}$ is an open cover of $K$.

Since $K$ is compact, there exist finitely many indices $\alpha_1,\dots,\alpha_m$ such that
$$
K\subset \bigcup_{j=1}^m f^{-1}(V_{\alpha_j}).
$$
Applying $f$, we get
$$
f(K)
\subset
\bigcup_{j=1}^m V_{\alpha_j}.
$$
Therefore every open cover of $f(K)$ has a finite subcover. Hence $f(K)$ is compact.
::

::ProblemBlock{number=6}
#problem
In a metric space $X$, with metric $d$, let $E$ be a nonempty subset of $X$. Define $f_E:X\to \mathbb{R}$ by
$$
f_E(x)=\inf\{d(x,y):y\in E\}
$$
for each $x\in X$. Prove:

<span style="display:inline-block; width:1em;"></span> **(a)** $f_E$ is uniformly continuous on $X$.

<span style="display:inline-block; width:1em;"></span> **(b)** $\overline{E}=\{x\in X:f_E(x)=0\}$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** We prove the stronger estimate
$$
|f_E(x)-f_E(z)|\le d(x,z)
$$
for all $x,z\in X$.

Fix $x,z\in X$. For every $y\in E$, the triangle inequality gives
$$
d(x,y)\le d(x,z)+d(z,y).
$$
Taking the infimum over $y\in E$ gives
$$
f_E(x)\le d(x,z)+f_E(z).
$$
Thus
$$
f_E(x)-f_E(z)\le d(x,z).
$$
Interchanging $x$ and $z$ gives
$$
f_E(z)-f_E(x)\le d(x,z).
$$
Hence
$$
|f_E(x)-f_E(z)|\le d(x,z).
$$
Therefore $f_E$ is Lipschitz with constant $1$, and hence uniformly continuous on $X$.

<span style="display:inline-block; width:1em;"></span> **(b)** First suppose $x\in \overline{E}$. Then every ball centered at $x$ meets $E$. Hence for every $\varepsilon>0$, there exists $y\in E$ such that
$$
d(x,y)<\varepsilon.
$$
Therefore
$$
0\le f_E(x)\le d(x,y)<\varepsilon.
$$
Since this holds for every $\varepsilon>0$, we get $f_E(x)=0$.

Conversely, suppose $f_E(x)=0$. Then for every $\varepsilon>0$, by the definition of infimum, there exists $y\in E$ such that
$$
d(x,y)<\varepsilon.
$$
Thus every ball centered at $x$ meets $E$, so $x\in \overline{E}$.

Therefore
$$
\overline{E}=\{x\in X:f_E(x)=0\}.
$$
::

::ProblemBlock{number=7}
#problem
Let $f:I\to \mathbb{R}$ be continuous, where
$$
I=[a_1,b_1]\times \cdots \times [a_n,b_n]\subset \mathbb{R}^n.
$$
Show that
$$
g(x_1,\dots,x_{n-1})=
\int_{a_n}^{b_n} f(x_1,\dots,x_{n-1},x_n)\,dx_n
$$
is continuous on
$$
[a_1,b_1]\times \cdots \times [a_{n-1},b_{n-1}]\subset \mathbb{R}^{n-1}.
$$

#proof
Let
$$
J=[a_1,b_1]\times \cdots \times [a_{n-1},b_{n-1}].
$$
Since $I$ is compact and $f$ is continuous on $I$, the function $f$ is uniformly continuous on $I$.

Let $\varepsilon>0$. If $b_n=a_n$, then $g\equiv 0$, so $g$ is continuous. Assume $b_n>a_n$. By uniform continuity, there exists $\delta>0$ such that whenever
$$
(x,t),(y,t)\in I
$$
and
$$
\|x-y\|<\delta,
$$
we have
$$
|f(x,t)-f(y,t)|<\frac{\varepsilon}{b_n-a_n}.
$$
Here $x,y\in J$ and $t\in [a_n,b_n]$.

Then for $x,y\in J$ with $\|x-y\|<\delta$,
$$
|g(x)-g(y)|
=
\left|
\int_{a_n}^{b_n} \bigl(f(x,t)-f(y,t)\bigr)\,dt
\right|.
$$
Hence
$$
|g(x)-g(y)|
\le
\int_{a_n}^{b_n} |f(x,t)-f(y,t)|\,dt
<
\int_{a_n}^{b_n} \frac{\varepsilon}{b_n-a_n}\,dt
=
\varepsilon.
$$
Thus $g$ is uniformly continuous on $J$, and in particular $g$ is continuous.
::

::ProblemBlock{number=8}
#problem
Suppose that $(X,d_X)$ and $(Y,d_Y)$ are metric spaces. We make $X\times Y$ into a metric space by equipping it with the metric
$$
d((x_1,y_1),(x_2,y_2)):=\max(d_X(x_1,x_2),d_Y(y_1,y_2)).
$$
Show that $X\times Y$ is connected if and only if both $X$ and $Y$ are connected.

#proof
Assume $X$ and $Y$ are nonempty, as is standard in this statement.

First suppose $X\times Y$ is connected. The projection maps
$$
\pi_X:X\times Y\to X,\qquad \pi_X(x,y)=x,
$$
and
$$
\pi_Y:X\times Y\to Y,\qquad \pi_Y(x,y)=y,
$$
are continuous. Indeed,
$$
d_X(\pi_X(x_1,y_1),\pi_X(x_2,y_2))
=d_X(x_1,x_2)
\le
\max(d_X(x_1,x_2),d_Y(y_1,y_2)),
$$
and similarly for $\pi_Y$.

The continuous image of a connected set is connected. Therefore $\pi_X(X\times Y)=X$ and $\pi_Y(X\times Y)=Y$ are connected.

Conversely, suppose $X$ and $Y$ are connected. Fix $y_0\in Y$. Then
$$
X\times \{y_0\}
$$
is connected, because it is homeomorphic to $X$.

For each $x\in X$, the set
$$
\{x\}\times Y
$$
is connected, because it is homeomorphic to $Y$. Moreover,
$$
\{x\}\times Y
$$
intersects $X\times \{y_0\}$ at the point $(x,y_0)$.

Therefore
$$
(X\times \{y_0\})\cup (\{x\}\times Y)
$$
is connected for each $x\in X$. Finally,
$$
X\times Y=\bigcup_{x\in X}\Bigl((X\times \{y_0\})\cup (\{x\}\times Y)\Bigr).
$$
This is a union of connected sets having the common connected subset $X\times \{y_0\}$. Hence $X\times Y$ is connected.

Thus $X\times Y$ is connected if and only if both $X$ and $Y$ are connected.
::

::ProblemBlock{number=9}
#problem
Let $\Sigma:[0,1]^2\to \mathbb{R}^3$ be the $2$-surface given by
$$
\Sigma(\theta,\phi)=
(\sin \pi\theta \cos 2\pi\phi,
\sin \pi\theta \sin 2\pi\phi,
\cos \pi\theta).
$$
Prove that
$$
\partial \Sigma=0.
$$

#proof
The boundary of the parameter square consists of four edges, with opposite orientations on opposite sides. For the surface $\Sigma$, these four boundary curves are obtained by setting
$$
\theta=0,
\qquad
\theta=1,
\qquad
\phi=0,
\qquad
\phi=1.
$$

First, if $\theta=0$, then
$$
\Sigma(0,\phi)=(0,0,1)
$$
for all $\phi\in [0,1]$. This is a constant curve, so it contributes zero to the boundary.

Second, if $\theta=1$, then
$$
\Sigma(1,\phi)=(0,0,-1)
$$
for all $\phi\in [0,1]$. This is also a constant curve, so it contributes zero to the boundary.

Now consider the two remaining edges. If $\phi=0$, then
$$
\Sigma(\theta,0)=(\sin \pi\theta,0,\cos \pi\theta).
$$
If $\phi=1$, then
$$
\Sigma(\theta,1)=(\sin \pi\theta\cos 2\pi,
\sin \pi\theta\sin 2\pi,
\cos \pi\theta)
=(\sin \pi\theta,0,\cos \pi\theta).
$$
Thus the edges $\phi=0$ and $\phi=1$ trace exactly the same curve. In the oriented boundary of the square, however, they occur with opposite orientations, so they cancel.

The two $\theta$-edges are constant and the two $\phi$-edges cancel. Therefore
$$
\partial \Sigma=0.
$$
::
