# 2016 Spring Qualifying Exam in Complex Analysis

::ProblemBlock{number=1}
#problem

Show that
$$
\sum_{n=1}^{\infty}\frac1{z^2+n^2}
$$
defines a meromorphic function on $\mathbb C$.

#proof

The possible poles occur at
$$
z=\pm in,\qquad n=1,2,\ldots.
$$
On any compact set avoiding these points, for large $n$ we have
$$
\left|\frac1{z^2+n^2}\right|\le \frac{C}{n^2}.
$$
Thus the series converges uniformly on compact subsets of
$$
\mathbb C\setminus\{\pm in:n\ge1\}.
$$
Hence it defines a holomorphic function there. At each point $\pm in$, only one summand has a pole, and that pole is simple. Therefore the sum is meromorphic on $\mathbb C$.
::

::ProblemBlock{number=2}
#problem

Show that for a positive integer $n\ge1$,
$$
\int_0^\infty\frac{dx}{x^{2n}+1}
=\frac{\pi}{2n\sin(\pi/(2n))}.
$$

#proof

Use the standard formula
$$
\int_0^\infty\frac{x^{a-1}}{1+x^b}\,dx
=\frac{\pi}{b}\csc\left(\frac{a\pi}{b}\right),
\qquad 0<a<b.
$$
Here $a=1$ and $b=2n$, so
$$
\int_0^\infty\frac{dx}{x^{2n}+1}
=\frac{\pi}{2n}\csc\left(\frac{\pi}{2n}\right)
=\frac{\pi}{2n\sin(\pi/(2n))}.
$$
::

::ProblemBlock{number=3}
#problem

For non-integers $\alpha,\beta,\gamma$, find the radius of convergence of
$$
\sum_{n=0}^{\infty}
\frac{\alpha(\alpha+1)\cdots(\alpha+n-1)\beta(\beta+1)\cdots(\beta+n-1)}
{n!\gamma(\gamma+1)\cdots(\gamma+n-1)}
z^n.
$$

#proof

Let $c_n$ be the coefficient of $z^n$. Then
$$
\left|\frac{c_{n+1}}{c_n}\right|
=
\left|
\frac{(\alpha+n)(\beta+n)}{(n+1)(\gamma+n)}
\right|
\to1.
$$
Therefore the radius of convergence is
$$
1.
$$
::

::ProblemBlock{number=4}
#problem

Let $f$ be entire.

<span style="display:inline-block; width:1em;"></span> **(a)** If
$$
|f(z)|\le M(1+|z|^n)
$$
on $\mathbb C$, prove that $f$ is a polynomial of degree at most $n$.

<span style="display:inline-block; width:1em;"></span> **(b)** If
$$
\lim_{|z|\to\infty}|f(z)|=\infty,
$$
prove that $f$ is a polynomial.

#proof

<span style="display:inline-block; width:1em;"></span> **(a)** By Cauchy's estimates,
$$
|f^{(k)}(0)|\le \frac{k!\max_{|z|=R}|f(z)|}{R^k}
\le \frac{k!M(1+R^n)}{R^k}.
$$
If $k>n$, letting $R\to\infty$ gives
$$
f^{(k)}(0)=0.
$$
Thus all Taylor coefficients above degree $n$ vanish, so $f$ is a polynomial of degree at most $n$.

<span style="display:inline-block; width:1em;"></span> **(b)** Consider
$$
g(w)=f(1/w).
$$
The condition $|f(z)|\to\infty$ as $|z|\to\infty$ means
$$
|g(w)|\to\infty
$$
as $w\to0$. Thus $g$ has a pole at $0$. Therefore $f$ has a pole at infinity, and an entire function with a pole at infinity is a polynomial.
::

::ProblemBlock{number=5}
#problem

Find all entire holomorphic functions $f$ such that
$$
\operatorname{Im}f(z)=y^2-x^2,
\qquad z=x+iy.
$$

#proof

Observe that
$$
-iz^2=-i(x^2-y^2+2ixy)=2xy+i(y^2-x^2).
$$
Thus
$$
\operatorname{Im}(-iz^2)=y^2-x^2.
$$
If $f$ has the same imaginary part as $-iz^2$, then
$$
f(z)+iz^2
$$
is entire and real-valued. A real-valued holomorphic function is constant. Therefore
$$

f(z)=-iz^2+C,\qquad C\in\mathbb R.

$$
::

::ProblemBlock{number=6}
#problem

Prove or disprove: there exists a family $\{f_n\}$ of holomorphic functions on $D(0,2)$ such that
$$
f_n\to \overline z^{\,3}
$$
uniformly on the compact set
$$
\{z:|z|=1\text{ or }|z|=1/2\}.
$$

#proof

No such family exists.

If $f_n$ is holomorphic on $D(0,2)$, then
$$
\int_{|z|=1} z^2f_n(z)\,dz=0.
$$
If $f_n\to \overline z^{\,3}$ uniformly on $|z|=1$, then
$$
z^2f_n(z)\to z^2\overline z^{\,3}.
$$
On $|z|=1$, $\overline z=1/z$, so
$$
z^2\overline z^{\,3}=z^2z^{-3}=z^{-1}.
$$
Therefore
$$
0=\lim_{n\to\infty}\int_{|z|=1}z^2f_n(z)\,dz
=\int_{|z|=1}\frac{dz}{z}
=2\pi i,
$$
a contradiction.
::

::ProblemBlock{number=7}
#problem

Construct a conformal map from
$$
D_1=\{z=x+iy\in D(0,1):y>x\}
$$
onto
$$
D_2=\{z\in\mathbb C:|z|>1\}.
$$

#proof

Rotate the domain by setting
$$
w=e^{-i\pi/4}z.
$$
Then $D_1$ becomes the upper half of the unit disk:
$$
\{|w|<1,\operatorname{Im}w>0\}.
$$
The map
$$
\eta=\frac{1+w}{1-w}
$$
maps this half-disk to the first quadrant. Squaring maps the first quadrant to the upper half-plane:
$$
\xi=\eta^2.
$$
Finally,
$$
\Phi(\xi)=\frac{\xi+i}{\xi-i}
$$
maps the upper half-plane to the exterior of the unit disk.

Thus one conformal map is
$$

\Phi(z)=
\frac{
\left(\frac{1+e^{-i\pi/4}z}{1-e^{-i\pi/4}z}\right)^2+i
}{
\left(\frac{1+e^{-i\pi/4}z}{1-e^{-i\pi/4}z}\right)^2-i
}.

$$
::

::ProblemBlock{number=8}
#problem

Let $f:U\to U$ be holomorphic, where $U$ is the upper half-plane. Prove that
$$
|f'(i)|\le |f(i)|
$$
and give an example where equality holds.

#proof

The Schwarz-Pick lemma for the upper half-plane gives
$$
|f'(z)|\le \frac{\operatorname{Im}f(z)}{\operatorname{Im}z}.
$$
At $z=i$, this becomes
$$
|f'(i)|\le \operatorname{Im}f(i).
$$
Since
$$
\operatorname{Im}f(i)\le |f(i)|,
$$
we obtain
$$
|f'(i)|\le |f(i)|.
$$

Equality holds for example when
$$
f(z)=az,
\qquad a>0.
$$
Then $f:U\to U$,
$$
f'(i)=a,
\qquad
|f(i)|=|ai|=a.
$$
::
