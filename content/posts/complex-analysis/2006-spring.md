# 2006 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem
Prove or disprove that there exists an analytic function $f$ in $D(0,1)$ such that
$$
f(1/n)=f(-1/n)=\frac1{n^3}
$$
for all $n=1,2,3,\ldots$.

#proof
No such function exists.

The equalities
$$
f(1/n)=f(-1/n)
$$
imply, by the identity theorem, that
$$
f(z)=f(-z)
$$
on the unit disk. Hence $f$ is even, so
$$
f(z)=h(z^2)
$$
for some holomorphic function $h$ near $0$.

Then
$$
h(1/n^2)=1/n^3.
$$
Let $w_n=1/n^2$. Then $w_n\to 0$ and
$$
h(w_n)=w_n^{3/2}.
$$
Thus $h(0)=0$ and
$$
\frac{h(w_n)}{w_n}=\frac1n\to 0,
$$
so $h'(0)=0$. Hence $h(w)=O(w^2)$ near $0$. But
$$
\frac{h(w_n)}{w_n^2}=n\to\infty,
$$
contradicting $h(w)=O(w^2)$. Therefore no such analytic function exists.
::

::ProblemBlock{number=2}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** State Liouville's theorem.

<span style="display:inline-block; width:1em;"></span> **(b)** Prove Liouville's theorem by calculating
$$
\int_{|z|=R}\frac{f(z)}{(z-a)(z-b)}\,dz
$$
and taking $R\to\infty$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Liouville's theorem says that every bounded entire function is constant.

<span style="display:inline-block; width:1em;"></span> **(b)** Let $f$ be bounded and entire, say $|f(z)|\leq M$. For $R$ large enough that $a$ and $b$ lie inside $|z|=R$, the residue theorem gives
$$
\int_{|z|=R}\frac{f(z)}{(z-a)(z-b)}\,dz
=2\pi i\left(\frac{f(a)}{a-b}+\frac{f(b)}{b-a}\right)
=2\pi i\frac{f(a)-f(b)}{a-b}.
$$
On the other hand, on $|z|=R$,
$$
\left|\frac{f(z)}{(z-a)(z-b)}\right|
\leq \frac{M}{(R-|a|)(R-|b|)}.
$$
Multiplying by the length $2\pi R$, the integral tends to $0$ as $R\to\infty$.

Therefore
$$
2\pi i\frac{f(a)-f(b)}{a-b}=0,
$$
so $f(a)=f(b)$ for arbitrary $a,b$. Hence $f$ is constant.
::

::ProblemBlock{number=3}
#problem
The Bernoulli polynomials $\phi_n(z)$ are defined by
$$
\frac{e^{tz}-1}{e^t-1}
=\sum_{n=1}^{\infty}\frac{\phi_n(z)}{n!}t^{n-1}.
$$
Prove:

<span style="display:inline-block; width:1em;"></span> **(i)** $\phi_n(z+1)-\phi_n(z)=nz^{n-1}$.

<span style="display:inline-block; width:1em;"></span> **(ii)**
$$
\frac{\phi_{n+1}(n+1)}{n+1}=1+2^n+3^n+\cdots+n^n.
$$

#proof
<span style="display:inline-block; width:1em;"></span> **(i)** Using the generating function,
$$
\sum_{n=1}^{\infty}\frac{\phi_n(z+1)-\phi_n(z)}{n!}t^{n-1}
=\frac{e^{t(z+1)}-e^{tz}}{e^t-1}
=e^{tz}.
$$
But
$$
e^{tz}=\sum_{m=0}^{\infty}\frac{z^m}{m!}t^m.
$$
Comparing the coefficient of $t^{n-1}$ gives
$$
\frac{\phi_n(z+1)-\phi_n(z)}{n!}
=\frac{z^{n-1}}{(n-1)!},
$$
so
$$
\phi_n(z+1)-\phi_n(z)=nz^{n-1}.
$$

<span style="display:inline-block; width:1em;"></span> **(ii)** Apply part **(i)** with $n+1$ in place of $n$:
$$
\phi_{n+1}(k+1)-\phi_{n+1}(k)=(n+1)k^n.
$$
Sum this from $k=1$ to $n$:
$$
\phi_{n+1}(n+1)-\phi_{n+1}(1)
=(n+1)\sum_{k=1}^{n}k^n.
$$
From the generating function, $\phi_{n+1}(1)=0$ for the relevant normalization in this identity. Hence
$$
\frac{\phi_{n+1}(n+1)}{n+1}
=\sum_{k=1}^{n}k^n
=1+2^n+\cdots+n^n.
$$
::

::ProblemBlock{number=4}
#problem
Let $f$ be analytic and satisfy
$$
|f(z)|\leq 100|z|^{-2}
$$
in the strip
$$
\alpha_1\leq \operatorname{Re}z\leq \alpha_2.
$$
Prove that
$$
h(x)=\int_{-\infty}^{\infty}f(x+iy)\,dy
$$
is constant for $x\in[\alpha_1,\alpha_2]$.

#proof
Let $x_1,x_2\in[\alpha_1,\alpha_2]$. Integrate $f$ around the rectangle with vertical sides $x=x_1$ and $x=x_2$ and horizontal sides $y=\pm R$. Since $f$ is analytic, the contour integral is $0$.

The horizontal integrals tend to $0$ as $R\to\infty$, because
$$
|f(x+iR)|\leq \frac{100}{|x+iR|^2}=O(R^{-2})
$$
uniformly for $x\in[\alpha_1,\alpha_2]$.

Letting $R\to\infty$ leaves
$$
\int_{-\infty}^{\infty}f(x_2+iy)\,dy
-
\int_{-\infty}^{\infty}f(x_1+iy)\,dy
=0.
$$
Thus $h(x_2)=h(x_1)$, so $h$ is constant.
::

::ProblemBlock{number=5}
#problem
Evaluate
$$
\int_0^\infty \frac{\sin^2 x}{x^2}\,dx.
$$

#proof
The standard identity
$$
\int_0^\infty \left(\frac{\sin ax}{x}\right)^2\,dx=\frac{\pi a}{2},
\qquad a>0,
$$
with $a=1$ gives
$$
\displaystyle
\int_0^\infty \frac{\sin^2 x}{x^2}\,dx=\frac{\pi}{2}.
$$
::

::ProblemBlock{number=6}
#problem
Prove or disprove: there exists a sequence of analytic polynomials $p_n(z)$ such that
$$
p_n(z)\to \overline z^{\,4}
$$
uniformly for $|z|=1$.

#proof
No such sequence exists.

On $|z|=1$,
$$
\overline z^{\,4}=z^{-4}.
$$
If $p_n\to z^{-4}$ uniformly on $|z|=1$, then
$$
\int_{|z|=1}p_n(z)z^3\,dz
\to
\int_{|z|=1}z^{-4}z^3\,dz
=\int_{|z|=1}\frac{1}{z}\,dz
=2\pi i.
$$
But each $p_n(z)z^3$ is a polynomial, so
$$
\int_{|z|=1}p_n(z)z^3\,dz=0.
$$
This contradiction proves that no such sequence exists.
::

::ProblemBlock{number=7}
#problem
Let $f$ be analytic in $D(0,1)$ and continuous on $\overline{D(0,1)}$. Assume
$$
|f(z)|=|e^z|
$$
for all $|z|=1$. Find all such $f$.

#proof
Set
$$
g(z)=\frac{f(z)}{e^z}.
$$
Then $g$ is analytic in the disk, continuous on the closed disk, and
$$
|g(z)|=1
$$
on $|z|=1$.

Thus $g$ is an inner function belonging to the disk algebra. Such functions are precisely finite Blaschke products multiplied by a unimodular constant. Therefore
$$
g(z)=c\prod_{j=1}^{m}\frac{z-a_j}{1-\overline{a_j}z},
$$
where $|c|=1$ and $|a_j|<1$.

Hence all solutions are
$$

f(z)=e^z c\prod_{j=1}^{m}\frac{z-a_j}{1-\overline{a_j}z},
\qquad |c|=1,\ |a_j|<1.
$$
The empty product is allowed.
::

::ProblemBlock{number=8}
#problem
Let $f$ be entire and suppose
$$
f(z+1)=f(z)
$$
and
$$
|f(z)|\leq e^{|z|}
$$
for all $z\in\mathbb C$. Prove that $f$ is constant.

#proof
Since $f$ has period $1$, define its Fourier coefficients by
$$
c_n(y)=\int_0^1 f(x+iy)e^{-2\pi in(x+iy)}\,dx.
$$
By Cauchy's theorem and periodicity, these coefficients are independent of $y$.

For $n<0$, let $y\to+\infty$. Since
$$
|f(x+iy)|\leq e^{|x+iy|}\leq e^{C+y},
$$
while
$$
|e^{-2\pi in(x+iy)}|=e^{2\pi n y},
$$
the product tends to $0$ because $2\pi n+1<0$. Hence $c_n=0$ for $n<0$.

For $n>0$, let $y\to-\infty$. The same estimate gives $c_n=0$ for $n>0$.

Thus all nonzero Fourier coefficients vanish, so $f$ is equal to its constant coefficient. Therefore $f$ is constant.
::
