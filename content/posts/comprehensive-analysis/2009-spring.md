# 2009 Spring Comprehensive in Analysis

::ProblemBlock{number=1}
#problem
Let $f:\mathbb{R}\to\mathbb{R}$ be a continuous function which satisfies
$$
f(x+y)=f(x)f(y)
$$
for all $x,y\in\mathbb{R}$. Prove the following statements:

<span style="display:inline-block; width:1em;"></span> **(a)** If $f$ is positive at one point of $\mathbb{R}$, then $f$ is positive at every point of $\mathbb{R}$.

<span style="display:inline-block; width:1em;"></span> **(b)** If $f$ is differentiable at one point of $\mathbb{R}$, then $f$ is differentiable at every point of $\mathbb{R}$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** First note that
$$
f(0)=f(0+0)=f(0)^2,
$$
so $f(0)=0$ or $f(0)=1$.

Suppose that $f$ is positive at one point, say $f(x_0)>0$. Then $f$ is not identically zero, so $f(0)\ne 0$, and hence
$$
f(0)=1.
$$
For any $x\in\mathbb{R}$,
$$
f(x)=f\left(\frac{x}{2}+\frac{x}{2}\right)=f\left(\frac{x}{2}\right)^2\ge 0.
$$
It remains to rule out the possibility that $f(x)=0$ for some $x$. If $f(x)=0$, then for every $t\in\mathbb{R}$,
$$
f(t)=f(x+(t-x))=f(x)f(t-x)=0,
$$
so $f$ would be identically zero. This contradicts $f(x_0)>0$. Therefore
$$
f(x)>0
$$
for every $x\in\mathbb{R}$.

<span style="display:inline-block; width:1em;"></span> **(b)** If $f$ is identically zero, then it is differentiable everywhere. Thus assume $f$ is not identically zero. Then, as above, $f(0)=1$, and $f(x)>0$ for every $x\in\mathbb{R}$.

Assume that $f$ is differentiable at some point $a\in\mathbb{R}$. Since $f(a)>0$, the limit
$$
\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
$$
exists. But
$$
f(a+h)=f(a)f(h),
$$
so
$$
\frac{f(a+h)-f(a)}{h}
=
f(a)\frac{f(h)-1}{h}.
$$
Since $f(a)\ne 0$, it follows that
$$
L:=\lim_{h\to 0}\frac{f(h)-1}{h}
$$
exists.

Now let $x\in\mathbb{R}$ be arbitrary. Then
$$
\frac{f(x+h)-f(x)}{h}
=
\frac{f(x)f(h)-f(x)}{h}
=
f(x)\frac{f(h)-1}{h}.
$$
Letting $h\to 0$ gives
$$
f'(x)=f(x)L.
$$
Thus $f$ is differentiable at every point of $\mathbb{R}$.
::

::ProblemBlock{number=2}
#problem
Let $f_n$, $n=1,2,\dots$, and $f$ be Riemann integrable real-valued functions defined on $[0,1]$. For each of the following statements, determine whether the statement is true or not; prove your claims:

<span style="display:inline-block; width:1em;"></span> **(a)** If
$$
\lim_{n\to\infty}\int_0^1 |f_n(x)-f(x)|\,dx=0,
$$
then
$$
\lim_{n\to\infty}\int_0^1 |f_n(x)-f(x)|^2\,dx=0.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** If
$$
\lim_{n\to\infty}\int_0^1 |f_n(x)-f(x)|^2\,dx=0,
$$
then
$$
\lim_{n\to\infty}\int_0^1 |f_n(x)-f(x)|\,dx=0.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The statement is false.

Let $f(x)=0$ on $[0,1]$, and define
$$
f_n(x)=
\begin{cases}
 n, & 0\le x\le \frac{1}{n^2},\\
 0, & \frac{1}{n^2}<x\le 1.
\end{cases}
$$
Each $f_n$ is Riemann integrable. Then
$$
\int_0^1 |f_n(x)-f(x)|\,dx
=
\int_0^{1/n^2} n\,dx
=
\frac{1}{n}\to 0.
$$
However,
$$
\int_0^1 |f_n(x)-f(x)|^2\,dx
=
\int_0^{1/n^2} n^2\,dx
=
1
$$
for every $n$. Therefore the second limit is not $0$.

<span style="display:inline-block; width:1em;"></span> **(b)** The statement is true.

Let
$$
h_n(x)=f_n(x)-f(x).
$$
By the Cauchy-Schwarz inequality,
$$
\int_0^1 |h_n(x)|\,dx
\le
\left(\int_0^1 |h_n(x)|^2\,dx\right)^{1/2}
\left(\int_0^1 1^2\,dx\right)^{1/2}.
$$
Since
$$
\left(\int_0^1 1^2\,dx\right)^{1/2}=1,
$$
we have
$$
\int_0^1 |f_n(x)-f(x)|\,dx
\le
\left(\int_0^1 |f_n(x)-f(x)|^2\,dx\right)^{1/2}.
$$
The right-hand side tends to $0$ by assumption. Hence
$$
\lim_{n\to\infty}\int_0^1 |f_n(x)-f(x)|\,dx=0.
$$
::

::ProblemBlock{number=3}
#problem
Suppose that $f:\mathbb{R}^3\to\mathbb{R}^3$ is the vector-valued function defined by
$$
f(x,y,z)=\left(x+y^2+100z,\ x+3y-100z,\ e^{-z+100y^2}\right)
$$
for all $(x,y,z)\in\mathbb{R}^3$.

<span style="display:inline-block; width:1em;"></span> **(a)** Compute the determinant of the Jacobian matrix of $f$ at the point $(0,0,0)$.

<span style="display:inline-block; width:1em;"></span> **(b)** Is there an open neighborhood of $(0,0,0)$ such that $f$ is one-to-one in this neighborhood? If your answer is yes, give the reason and find an explicit example of an open neighborhood of $(0,0,0)$ on which $f$ is one-to-one.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The Jacobian matrix is
$$
Df(x,y,z)=
\begin{pmatrix}
1 & 2y & 100\\
1 & 3 & -100\\
0 & 200y e^{-z+100y^2} & -e^{-z+100y^2}
\end{pmatrix}.
$$
At $(0,0,0)$ this becomes
$$
Df(0,0,0)=
\begin{pmatrix}
1 & 0 & 100\\
1 & 3 & -100\\
0 & 0 & -1
\end{pmatrix}.
$$
Therefore
$$
\det Df(0,0,0)=-3.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Yes. Since
$$
\det Df(0,0,0)=-3\ne 0,
$$
the inverse function theorem implies that $f$ is one-to-one on some open neighborhood of $(0,0,0)$.

We now give an explicit neighborhood. Let
$$
U=\{(x,y,z)\in\mathbb{R}^3: |y|<1/20001\}.
$$
Suppose $(x,y,z),(X,Y,Z)\in U$ and
$$
f(x,y,z)=f(X,Y,Z).
$$
Comparing the three components gives
$$
x-X+(y^2-Y^2)+100(z-Z)=0,
$$
$$
x-X+3(y-Y)-100(z-Z)=0,
$$
and, since the exponential function is one-to-one,
$$
-(z-Z)+100(y^2-Y^2)=0.
$$
Thus
$$
z-Z=100(y^2-Y^2).
$$
Subtracting the second equation from the first equation gives
$$
y^2-Y^2-3(y-Y)+200(z-Z)=0.
$$
Using $z-Z=100(y^2-Y^2)$, we obtain
$$
20001(y^2-Y^2)-3(y-Y)=0.
$$
Since
$$
y^2-Y^2=(y+Y)(y-Y),
$$
we get
$$
\bigl(20001(y+Y)-3\bigr)(y-Y)=0.
$$
But $|y|<1/20001$ and $|Y|<1/20001$, so
$$
|20001(y+Y)|<2.
$$
Hence $20001(y+Y)-3\ne 0$, and therefore
$$
y-Y=0.
$$
Then $z-Z=100(y^2-Y^2)=0$, and the first equation gives $x-X=0$. Thus
$$
(x,y,z)=(X,Y,Z).
$$
Therefore $f$ is one-to-one on the explicit open neighborhood $U$ of $(0,0,0)$.
::

::ProblemBlock{number=4}
#problem
Let $f:[a,b]\to\mathbb{R}$ be a real-valued function defined on a closed bounded interval $[a,b]\subset\mathbb{R}$. We define the graph of $f$ to be the set $\Gamma_f$ of points $(x,y)\in\mathbb{R}^2$ such that $x\in[a,b]$ and $y=f(x)$.

Prove or disprove: The function $f$ is continuous on $[a,b]$ if and only if the set $\Gamma_f$ is a closed subset of $\mathbb{R}^2$.

#proof
The statement is false as written. One implication is true, but the converse is false.

First suppose $f$ is continuous on $[a,b]$. Let $(x_n,f(x_n))$ be a sequence in $\Gamma_f$ converging to $(x,y)\in\mathbb{R}^2$. Since $x_n\in[a,b]$ and $[a,b]$ is closed, we have $x\in[a,b]$. By continuity,
$$
f(x_n)\to f(x).
$$
But also $f(x_n)\to y$. Hence $y=f(x)$, so $(x,y)\in\Gamma_f$. Thus $\Gamma_f$ is closed.

The converse is false. Take $[a,b]=[0,1]$ and define
$$
f(x)=
\begin{cases}
0, & x=0,\\
1/x, & 0<x\le 1.
\end{cases}
$$
This function is not continuous at $0$.

We show that its graph is closed. Suppose $(x_n,f(x_n))\in\Gamma_f$ and
$$
(x_n,f(x_n))\to (x,y)\in\mathbb{R}^2.
$$
If $x>0$, then eventually $x_n>0$, and continuity of $1/x$ on $(0,1]$ gives
$$
y=1/x=f(x).
$$
If $x=0$, then it is impossible to have a subsequence with $x_n>0$ and $x_n\to 0$, because then $f(x_n)=1/x_n\to\infty$, contradicting the convergence of $f(x_n)$ to the finite number $y$. Therefore, for all sufficiently large $n$, $x_n=0$, and hence $y=0=f(0)$.

Thus every convergent sequence in the graph has its limit in the graph, so $\Gamma_f$ is closed. Hence a closed graph does not imply continuity in this setting.
::

::ProblemBlock{number=5}
#problem
Prove that the set $\mathbb{N}$ of all positive integers has the same cardinality as the Cartesian product $\mathbb{N}\times\mathbb{N}$.

In other words, construct an explicit example of a one-to-one map of $\mathbb{N}$ onto $\mathbb{N}\times\mathbb{N}$.

#proof
Every positive integer $n$ can be written uniquely in the form
$$
n=2^{i-1}(2j-1),
$$
where $i,j\in\mathbb{N}$. Indeed, $2^{i-1}$ is the largest power of $2$ dividing $n$, and $2j-1$ is the remaining odd factor.

Define
$$
\varphi:\mathbb{N}\to\mathbb{N}\times\mathbb{N}
$$
by
$$
\varphi\left(2^{i-1}(2j-1)\right)=(i,j).
$$
This is well-defined because the factorization above is unique.

The map is one-to-one: if
$$
\varphi(n)=\varphi(m)=(i,j),
$$
then
$$
n=2^{i-1}(2j-1)=m.
$$
The map is onto: given any $(i,j)\in\mathbb{N}\times\mathbb{N}$, the number
$$
n=2^{i-1}(2j-1)
$$
is a positive integer and satisfies
$$
\varphi(n)=(i,j).
$$
Therefore $\mathbb{N}$ and $\mathbb{N}\times\mathbb{N}$ have the same cardinality.
::

::ProblemBlock{number=6}
#problem
Suppose that $f:[a,b]\to\mathbb{R}$ is continuously differentiable on the closed interval $[a,b]\subset\mathbb{R}$, and suppose that $g:[a,b]\to\mathbb{R}$ is a monotonic function such that
$$
g(a)=f(a)
\qquad\text{and}\qquad
 g(b)=f(b).
$$
Prove or disprove: There exists a constant $M$ such that
$$
|f(x)-g(x)|\le M|b-a|
$$
for all $x\in[a,b]$.

#proof
The statement is true, assuming $a<b$.

Since $f\in C^1[a,b]$, the derivative $f'$ is continuous on $[a,b]$, so
$$
C:=\max_{t\in[a,b]}|f'(t)|<\infty.
$$
For any $x\in[a,b]$, the mean value theorem gives
$$
|f(x)-f(a)|\le C|x-a|\le C|b-a|.
$$
Because $g$ is monotonic and $g(a)=f(a)$, $g(b)=f(b)$, the value $g(x)$ lies between $g(a)$ and $g(b)$. Hence
$$
|g(x)-g(a)|\le |g(b)-g(a)|=|f(b)-f(a)|.
$$
Again by the mean value theorem,
$$
|f(b)-f(a)|\le C|b-a|.
$$
Therefore
$$
|g(x)-f(a)|\le C|b-a|.
$$
Now
$$
|f(x)-g(x)|
\le
|f(x)-f(a)|+|g(x)-f(a)|
\le
2C|b-a|.
$$
Thus the desired estimate holds with
$$
M=2\max_{t\in[a,b]}|f'(t)|.
$$
::

::ProblemBlock{number=7}
#problem
Define a sequence $(a_1,a_2,\dots,a_n,\dots)$ recursively by setting
$$
a_1=1,
\qquad
 a_2=3,
\qquad
 a_{n+2}=\frac{a_{n+1}+2a_n}{3},\quad n\ge 1.
$$
Prove that the sequence $(a_n)$ converges, and compute its limit.

#proof
We solve the recurrence. The characteristic equation is
$$
r^2=\frac{r+2}{3},
$$
or equivalently
$$
3r^2-r-2=0.
$$
Thus
$$
(3r+2)(r-1)=0,
$$
so the two roots are
$$
r=1
\qquad\text{and}\qquad
r=-\frac{2}{3}.
$$
Therefore the sequence has the form
$$
a_n=A+B\left(-\frac{2}{3}\right)^{n-1}.
$$
Using $a_1=1$ gives
$$
A+B=1.
$$
Using $a_2=3$ gives
$$
A-\frac{2}{3}B=3.
$$
Subtracting the first equation from the second gives
$$
-\frac{5}{3}B=2,
$$
so
$$
B=-\frac{6}{5}.
$$
Therefore
$$
A=1-B=\frac{11}{5}.
$$
Hence
$$
a_n=\frac{11}{5}-\frac{6}{5}\left(-\frac{2}{3}\right)^{n-1}.
$$
Since
$$
\left(-\frac{2}{3}\right)^{n-1}\to 0,
$$
the sequence converges and
$$
\lim_{n\to\infty}a_n=\frac{11}{5}.
$$
::

::ProblemBlock{number=8}
#problem
Let $f$ be a real-valued function defined on the real line.

<span style="display:inline-block; width:1em;"></span> **(a)** Prove or disprove: If $f$ is uniformly continuous on $\mathbb{R}$, then $f^2$ is uniformly continuous on $\mathbb{R}$.

<span style="display:inline-block; width:1em;"></span> **(b)** Prove or disprove: If $f$ is uniformly continuous on $\mathbb{R}$, then
$$
\frac{f^2}{1+f^2}
$$
is uniformly continuous on $\mathbb{R}$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The statement is false.

Take
$$
f(x)=x.
$$
Then $f$ is uniformly continuous on $\mathbb{R}$. However,
$$
f^2(x)=x^2
$$
is not uniformly continuous on $\mathbb{R}$. Indeed, let
$$
x_n=n,
\qquad
 y_n=n+\frac{1}{n}.
$$
Then
$$
|x_n-y_n|=\frac{1}{n}\to 0,
$$
but
$$
|x_n^2-y_n^2|
=
\left|n^2-\left(n+\frac{1}{n}\right)^2\right|
=
2+\frac{1}{n^2}
\to 2.
$$
This contradicts uniform continuity. Hence $f^2$ need not be uniformly continuous.

<span style="display:inline-block; width:1em;"></span> **(b)** The statement is true.

Define
$$
\Phi(t)=\frac{t^2}{1+t^2}.
$$
Then
$$
\Phi'(t)=\frac{2t}{(1+t^2)^2}.
$$
The derivative $\Phi'$ is bounded on $\mathbb{R}$; for example, there exists $L<\infty$ such that
$$
|\Phi'(t)|\le L
$$
for all $t\in\mathbb{R}$. By the mean value theorem,
$$
|\Phi(s)-\Phi(t)|\le L|s-t|
$$
for all $s,t\in\mathbb{R}$. Thus $\Phi$ is Lipschitz, hence uniformly continuous in a strong form.

Now suppose $f$ is uniformly continuous on $\mathbb{R}$. Given $\varepsilon>0$, choose $\delta>0$ such that
$$
|x-y|<\delta
\quad\Longrightarrow\quad
|f(x)-f(y)|<\frac{\varepsilon}{L}
$$
if $L>0$. If $L=0$, the conclusion is immediate. Then
$$
|x-y|<\delta
$$
implies
$$
\left|\frac{f(x)^2}{1+f(x)^2}-\frac{f(y)^2}{1+f(y)^2}\right|
=
|\Phi(f(x))-\Phi(f(y))|
\le
L|f(x)-f(y)|<\varepsilon.
$$
Therefore $f^2/(1+f^2)$ is uniformly continuous on $\mathbb{R}$.
::

::ProblemBlock{number=9}
#problem
Suppose $f$ is a Riemann integrable function on $[0,1]$. Prove that
$$
\lim_{n\to\infty}\int_0^1 x^n f(x)\,dx=0.
$$

#proof
Since $f$ is Riemann integrable on $[0,1]$, it is bounded. Thus there exists $M>0$ such that
$$
|f(x)|\le M
$$
for all $x\in[0,1]$.

Therefore
$$
\left|\int_0^1 x^n f(x)\,dx\right|
\le
\int_0^1 x^n |f(x)|\,dx
\le
M\int_0^1 x^n\,dx.
$$
Since
$$
\int_0^1 x^n\,dx=\frac{1}{n+1},
$$
we obtain
$$
\left|\int_0^1 x^n f(x)\,dx\right|
\le
\frac{M}{n+1}\to 0.
$$
Hence
$$
\lim_{n\to\infty}\int_0^1 x^n f(x)\,dx=0.
$$
::
