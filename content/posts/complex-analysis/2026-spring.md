# 2023 Spring Qualifying Exam in Complex Analysis 

::ProblemBlock{number=1}
#problem
Prove or disprove that there exists a holomorphic function
$$
F:\{z\in\mathbb{C}:|z|>3\}\longrightarrow\mathbb{C}
$$
such that
$$
F'(z)=\frac{z^3+1}{(z+1)(z+2)}-\frac{7z-10}{z^2+1}.
$$

#solution
Such a holomorphic function does exist.

Let
$$
h(z)=\frac{z^3+1}{(z+1)(z+2)}-\frac{7z-10}{z^2+1}.
$$
Since
$$
z^3+1=(z+1)(z^2-z+1),
$$
we have
$$
\frac{z^3+1}{(z+1)(z+2)}
=
\frac{z^2-z+1}{z+2}
=
z-3+\frac{7}{z+2}.
$$
Thus
$$
h(z)=z-3+\frac{7}{z+2}-\frac{7z-10}{z^2+1}.
$$
The poles of this rational function are $-2$, $i$, and $-i$, all of which lie inside the circle $|z|=3$.

The residue at $z=-2$ is
$$
\operatorname{Res}(h,-2)=7.
$$
The sum of the residues of $(7z-10)/(z^2+1)$ at $i$ and $-i$ is $7$, because the coefficient of $1/z$ in its Laurent expansion at infinity is $7$. Therefore
$$
\operatorname{Res}(h,i)+\operatorname{Res}(h,-i)=-7.
$$
Hence the sum of all residues inside $|z|=3$ is
$$
7-7=0.
$$
Consequently, for every $R>3$,
$$
\int_{|z|=R}h(z)\,dz=0.
$$
Every closed curve in the domain $\{z:|z|>3\}$ has winding number equal to an integer multiple of the winding number of such a circle. Therefore every period of $h$ on this domain is zero. By the primitive criterion, $h$ has a holomorphic primitive on $\{z:|z|>3\}$.

Equivalently, one can see this directly from the Laurent expansion at infinity. For $|z|>3$,
$$
\frac{7}{z+2}
=
\frac{7}{z}\sum_{m=0}^{\infty}\left(-\frac{2}{z}\right)^m,
$$
and
$$
\frac{7z-10}{z^2+1}
=
\left(\frac{7}{z}-\frac{10}{z^2}\right)
\sum_{m=0}^{\infty}\left(-\frac{1}{z^2}\right)^m.
$$
The coefficient of $z^{-1}$ in the first series is $7$, while that in the second series is also $7$, so these coefficients cancel in $h$. Therefore the Laurent series of $h$ contains no $z^{-1}$ term and can be integrated term by term to produce the desired holomorphic function $F$.
#remark
An explict expression of $F$ is
$$
F(z)
=
\frac{z^2}{2}
-3z
+7\log\left(1+\frac{2}{z}\right)
-\frac{7+10i}{2}\log\left(1-\frac{i}{z}\right)
-\frac{7-10i}{2}\log\left(1+\frac{i}{z}\right)
+C.
$$
::

::ProblemBlock{number=2}
#problem
Let $f$ be a holomorphic function on
$$
\mathbb{D}=\{z\in\mathbb{C}:|z|<1\}
$$
such that $f(0)=0$ and $f(z)\neq0$ whenever $z\neq0$. Let $n\in\mathbb{N}$. Prove that there exists a holomorphic function $g$ on $\mathbb{D}$ such that
$$
g(z)^n=f(z^n)
$$
for every $z\in\mathbb{D}$.

#proof
Since $f$ has no zeros in $\mathbb{D}\setminus\{0\}$, the point $0$ is the only zero of $f$. Let $m\ge1$ be its order. Then
$$
f(w)=w^m h(w),
$$
where $h$ is holomorphic and nonvanishing on $\mathbb{D}$.

Because $\mathbb{D}$ is simply connected and $h$ has no zeros, $h$ has a holomorphic logarithm. Thus there exists a holomorphic function $H$ on $\mathbb{D}$ such that
$$
h(w)=e^{H(w)}.
$$
For $z\in\mathbb{D}$,
$$
f(z^n)=z^{nm}h(z^n)=z^{nm}e^{H(z^n)}.
$$
Define
$$
g(z)=z^m\exp\left(\frac{H(z^n)}{n}\right).
$$
Then $g$ is holomorphic on $\mathbb{D}$ and
$$
g(z)^n
=
z^{mn}e^{H(z^n)}
=
f(z^n).
$$
Therefore the required holomorphic function exists.
::

::ProblemBlock{number=3}
#problem
Find all entire functions $f$ such that
$$
|f(z)|\le e^{|z|}
$$
for every $z\in\mathbb{C}$, and
$$
f(m+in)=0
$$
for all $m,n\in\mathbb{N}$.

#solution
The only such entire function is
$$
f\equiv0.
$$

Suppose, toward a contradiction, that $f$ is not identically zero. If $f$ vanishes at $0$, let $s$ be the order of the zero at $0$ and write
$$
f(z)=z^s g(z),
$$
where $g$ is entire and $g(0)\neq0$. If $f(0)\neq0$, take $s=0$ and $g=f$.

For $r\ge1$ and $|z|=r$,
$$
|g(z)|=\frac{|f(z)|}{|z|^s}\le \frac{e^r}{r^s}\le e^r.
$$
Let $N_g(r)$ denote the number of zeros of $g$ in $|z|\le r$, counted with multiplicity. Jensen's formula gives
$$
\sum_{|a_j|<r}\log\frac{r}{|a_j|}
=
\frac{1}{2\pi}\int_0^{2\pi}\log|g(re^{it})|\,dt-
\log|g(0)|,
$$
where $\{a_j\}$ are the zeros of $g$.
Therefore
$$
\sum_{|a_j|<r}\log\frac{r}{|a_j|}
\le
r-\log|g(0)|.
$$
Every zero satisfying $|a_j|\le r/2$ contributes at least $\log2$, so
$$
N_g(r/2)\log2\le r-\log|g(0)|.
$$
Thus
$$
N_g(r/2)=O(r).
$$

On the other hand, for sufficiently large $r$, every point
$$
m+in,
\qquad
1\le m,n\le \frac{r}{4\sqrt2},
$$
has modulus at most $r/2$. Hence $g$ has at least
$$
\left\lfloor\frac{r}{4\sqrt2}\right\rfloor^2
$$
zeros in $|z|\le r/2$. This grows on the order of $r^2$, contradicting $N_g(r/2)=O(r)$.

Therefore $f$ must be identically zero.
::

::ProblemBlock{number=4}
#problem
Let $f$ be an entire function. Suppose there exist constants $C>0$ and $N\ge0$, and a sequence $R_k\to+\infty$, such that for every $k$,
$$
\max_{|z|=R_k}|f(z)|\le CR_k^N.
$$
Prove that $f$ is a polynomial of degree at most $N$.

#proof
Let $m$ be any integer satisfying $m>N$. By Cauchy's estimate on the circle $|z|=R_k$,
$$
|f^{(m)}(0)|
\le
\frac{m!}{R_k^m}\max_{|z|=R_k}|f(z)|.
$$
Using the assumed bound,
$$
|f^{(m)}(0)|
\le
m!C R_k^{N-m}.
$$
Since $m>N$ and $R_k\to\infty$,
$$
R_k^{N-m}\to0.
$$
Therefore
$$
f^{(m)}(0)=0
$$
for every integer $m>N$.

The Taylor series of $f$ about $0$ is
$$
f(z)=\sum_{m=0}^{\infty}\frac{f^{(m)}(0)}{m!}z^m.
$$
All coefficients with $m>N$ vanish, so this series is a polynomial. Its degree is at most $\lfloor N\rfloor$, and hence at most $N$.
::

::ProblemBlock{number=5}
#problem
Let $M>0$ and let $\mathcal{F}$ be the family of holomorphic functions on $\mathbb{D}$ such that for every $0<r<1$,
$$
\frac{1}{2\pi}\int_0^{2\pi}|f(re^{it})|^2\,dt\le M.
$$
Prove that $\mathcal{F}$ is a normal family.

#proof
By Montel's theorem, it is enough to prove that $\mathcal{F}$ is locally uniformly bounded.

Fix $0<\rho<1$, and choose $r$ such that
$$
\rho<r<1.
$$
For $|z|\le\rho$, Cauchy's integral formula gives
$$
f(z)
=
\frac{1}{2\pi}\int_0^{2\pi}
\frac{f(re^{it})re^{it}}{re^{it}-z}\,dt.
$$
Therefore
$$
|f(z)|
\le
\frac{1}{2\pi}\int_0^{2\pi}
|f(re^{it})|\frac{r}{|re^{it}-z|}\,dt.
$$
Since
$$
|re^{it}-z|\ge r-|z|\ge r-\rho,
$$
we obtain
$$
|f(z)|
\le
\frac{r}{r-\rho}
\frac{1}{2\pi}\int_0^{2\pi}|f(re^{it})|\,dt.
$$
By the Cauchy-Schwarz inequality,
$$
\frac{1}{2\pi}\int_0^{2\pi}|f(re^{it})|\,dt
\le
\left(
\frac{1}{2\pi}\int_0^{2\pi}|f(re^{it})|^2\,dt
\right)^{1/2}
\le
\sqrt M.
$$
Hence
$$
|f(z)|\le \frac{r\sqrt M}{r-\rho}
$$
for every $f\in\mathcal{F}$ and every $|z|\le\rho$.

Thus $\mathcal{F}$ is uniformly bounded on each compact subset of $\mathbb{D}$. By Montel's theorem, $\mathcal{F}$ is a normal family.
::

::ProblemBlock{number=6}
#problem
Let $u$ be a real-valued harmonic function on $\mathbb{D}$ satisfying
$$
|u|<1
$$
and
$$
u(0)=0.
$$
Prove that
$$
|\nabla u(0)|\le\frac{4}{\pi},
$$
and show that the constant $4/\pi$ is sharp by providing an example that achieves the bound.

#proof
Fix $0<r<1$. By the Poisson formula on the disk of radius $r$,
$$
u(x+iy)
=
\frac{1}{2\pi}\int_0^{2\pi}
P_{(x+iy)/r}(e^{it})u(re^{it})\,dt.
$$
Differentiating at the origin gives
$$
u_x(0)
=
\frac{1}{\pi r}\int_0^{2\pi}u(re^{it})\cos t\,dt
$$
and
$$
u_y(0)
=
\frac{1}{\pi r}\int_0^{2\pi}u(re^{it})\sin t\,dt.
$$
Let $e=(\cos\alpha,\sin\alpha)$ be a unit vector. Then
$$
D_eu(0)
=
\frac{1}{\pi r}\int_0^{2\pi}
u(re^{it})\cos(t-\alpha)\,dt.
$$
Since $|u|<1$,
$$
|D_eu(0)|
\le
\frac{1}{\pi r}\int_0^{2\pi}|\cos(t-\alpha)|\,dt
=
\frac{4}{\pi r}.
$$
Taking the supremum over all unit vectors $e$ gives
$$
|\nabla u(0)|\le\frac{4}{\pi r}.
$$
Letting $r\to1^-$, we obtain
$$
|\nabla u(0)|\le\frac{4}{\pi}.
$$

To show sharpness, consider
$$
H(z)=\frac{1+z}{1-z}.
$$
This maps $\mathbb{D}$ conformally onto the right half-plane. The principal logarithm is holomorphic there, and
$$
-\frac{\pi}{2}
<
\operatorname{Im}\log H(z)
<
\frac{\pi}{2}.
$$
Define
$$
u(z)=\frac{2}{\pi}\operatorname{Im}\log\left(\frac{1+z}{1-z}\right).
$$
Then $u$ is real-valued and harmonic on $\mathbb{D}$, $|u|<1$, and $u(0)=0$.

Moreover,
$$
\left.\frac{d}{dz}\log\left(\frac{1+z}{1-z}\right)\right|_{z=0}=2.
$$
It follows from the Cauchy-Riemann equations that
$$
u_x(0)=0,
\qquad
u_y(0)=\frac{4}{\pi}.
$$
Hence
$$
|\nabla u(0)|=\frac{4}{\pi}.
$$
Therefore the constant $4/\pi$ is sharp.
::

::ProblemBlock{number=7}
#problem
Use contour integration to prove that for every $a\in\mathbb{C}\setminus i\mathbb{Z}$,
$$
\sum_{n=-\infty}^{\infty}\frac{1}{n^2+a^2}
=
\frac{\pi}{a}\coth(\pi a).
$$

#proof
Let
$$
F(z)=\frac{\pi\cot(\pi z)}{z^2+a^2}.
$$
For a positive integer $N$, let $\Gamma_N$ be the positively oriented square with vertices
$$
\left(N+\frac12\right)(\pm1\pm i).
$$
For sufficiently large $N$, the square contains the poles $z=ia$ and $z=-ia$, as well as the integers $-N,-N+1,\ldots,N$.

On $\Gamma_N$, the function $\cot(\pi z)$ is uniformly bounded independently of $N$. Also,
$$
|z^2+a^2|\ge cN^2
$$
for all sufficiently large $N$ and some constant $c>0$. Since the length of $\Gamma_N$ is $O(N)$,
$$
\left|\int_{\Gamma_N}F(z)\,dz\right|=O\left(\frac1N\right)\to0.
$$

At an integer $n$, the residue of $\pi\cot(\pi z)$ is $1$, so
$$
\operatorname{Res}(F,n)=\frac{1}{n^2+a^2}.
$$
At $z=ia$,
$$
\operatorname{Res}(F,ia)
=
\frac{\pi\cot(\pi ia)}{2ia}.
$$
Using
$$
\cot(iw)=-i\coth(w),
$$
we get
$$
\operatorname{Res}(F,ia)
=
-\frac{\pi}{2a}\coth(\pi a).
$$
Similarly,
$$
\operatorname{Res}(F,-ia)
=
-\frac{\pi}{2a}\coth(\pi a).
$$
Therefore the sum of these two residues is
$$
-\frac{\pi}{a}\coth(\pi a).
$$

By the residue theorem,
$$
\int_{\Gamma_N}F(z)\,dz
=
2\pi i
\left(
\sum_{n=-N}^{N}\frac{1}{n^2+a^2}
-
\frac{\pi}{a}\coth(\pi a)
\right).
$$
Letting $N\to\infty$, the contour integral tends to zero. Hence
$$
\sum_{n=-\infty}^{\infty}\frac{1}{n^2+a^2}
=
\frac{\pi}{a}\coth(\pi a).
$$
::

::ProblemBlock{number=8}
#problem
Find the number of zeros of the polynomial
$$
P(z)=z^8-3z^5-z^3+1
$$
in the unit disk $\mathbb{D}$.

#solution
We first show that $P$ has no zeros on $|z|=1$.

Suppose $|z|=1$ and $P(z)=0$. Then
$$
3z^5=z^8-z^3+1,
$$
so
$$
3=|z^8-z^3+1|
\le
|z^8|+|z^3|+1
=3.
$$
Equality holds in the triangle inequality. Since each of the three terms $z^8$, $-z^3$, and $1$ has modulus $1$, they must all have the same argument. Therefore
$$
z^8=1
$$
and
$$
z^3=-1.
$$
Since
$$
z=\frac{z^9}{z^8}=\frac{(z^3)^3}{z^8}=-1,
$$
we must have $z=-1$. But
$$
P(-1)=1+3+1+1=6,
$$
a contradiction. Thus $P$ has no zeros on the unit circle.

For $\varepsilon>0$, define
$$
P_\varepsilon(z)
=
z^8-(3+\varepsilon)z^5-z^3+1.
$$
On $|z|=1$,
$$
|z^8-z^3+1|\le3<3+\varepsilon
=
|(3+\varepsilon)z^5|.
$$
By Rouché's theorem, $P_\varepsilon$ and $-(3+\varepsilon)z^5$ have the same number of zeros in $\mathbb{D}$. Hence $P_\varepsilon$ has exactly five zeros in $\mathbb{D}$, counted with multiplicity.

Now consider the continuous family
$$
P_t(z)=z^8-(3+t\varepsilon)z^5-z^3+1,
\qquad 0\le t\le1.
$$
For $t>0$, the same strict Rouché estimate shows that $P_t$ has no zeros on $|z|=1$. For $t=0$, this was proved above. Thus no zero crosses the unit circle as $t$ varies from $1$ to $0$. By the argument principle, the number of zeros inside $\mathbb{D}$ remains constant.

Therefore $P=P_0$ has exactly $5$
zeros in the unit disk, counted with multiplicity.
::

::ProblemBlock{number=9}
#problem
For any domain $\Omega\subset\mathbb{C}$, let $\operatorname{Aut}(\Omega)$ denote the class of automorphisms of $\Omega$, that is, invertible conformal maps from $\Omega$ to itself. Let
$$
\Omega=\mathbb{D}\setminus\left\{\frac12,\frac{i}{2}\right\}.
$$

<span style="display:inline-block; width:1em;"></span> **(a)** Show that every $f\in\operatorname{Aut}(\Omega)$ extends uniquely to a function $\widetilde f\in\operatorname{Aut}(\mathbb{D})$, and explain why $\widetilde f$ must map the set of punctures
$$
\left\{\frac12,\frac{i}{2}\right\}
$$
onto itself.

<span style="display:inline-block; width:1em;"></span> **(b)** Find $\operatorname{Aut}(\Omega)$ explicitly. Justify your answer.

#solution
<span style="display:inline-block; width:1em;"></span> **(a)** Let $f\in\operatorname{Aut}(\Omega)$. Since $f(\Omega)\subset\mathbb{D}$, the function $f$ is bounded near each puncture. Therefore the isolated singularities at $1/2$ and $i/2$ are removable. Hence $f$ extends to a holomorphic map
$$
\widetilde f:\mathbb{D}\to\mathbb{D}.
$$
The extension is unique by the identity theorem.

The inverse map $f^{-1}:\Omega\to\Omega$ is also bounded and therefore extends holomorphically to a map
$$
\widetilde{f^{-1}}:\mathbb{D}\to\mathbb{D}.
$$
On $\Omega$,
$$
\widetilde{f^{-1}}\circ\widetilde f
=
\operatorname{id}
$$
and
$$
\widetilde f\circ\widetilde{f^{-1}}
=
\operatorname{id}.
$$
By the identity theorem, both identities hold on all of $\mathbb{D}$. Thus $\widetilde f$ is an automorphism of $\mathbb{D}$.

Let
$$
S=\left\{\frac12,\frac{i}{2}\right\}.
$$
Since $f$ maps $\Omega=\mathbb{D}\setminus S$ bijectively onto itself, its extension cannot map a point of $S$ into $\Omega$. Otherwise, applying the extended inverse would imply that a point of $\Omega$ has a preimage in $S$, contradicting the fact that $f^{-1}$ maps $\Omega$ into $\Omega$. Therefore
$$
\widetilde f(S)\subset S.
$$
Since $\widetilde f$ is bijective, we have
$$
\widetilde f(S)=S.
$$

<span style="display:inline-block; width:1em;"></span> **(b)** Put
$$
a=\frac12,
\qquad
b=\frac{i}{2}.
$$
An automorphism of $\mathbb{D}$ preserving the set $\{a,b\}$ either fixes both points or interchanges them.

If an automorphism fixes both $a$ and $b$, then it is the identity. Indeed, after conjugating by a disk automorphism sending $a$ to $0$, it becomes a disk automorphism fixing $0$ and another nonzero interior point. An automorphism fixing $0$ has the form
$$
z\mapsto e^{i\theta}z,
$$
and fixing a nonzero point forces $e^{i\theta}=1$.

It remains to find the automorphism interchanging $a$ and $b$. For $c\in\mathbb{D}$, define
$$
\psi_c(z)=\frac{z-c}{1-\overline c z}.
$$
Then $\psi_c$ is a disk automorphism sending $c$ to $0$. Set
$$
\lambda
=
\frac{\psi_b(a)}{\psi_a(b)}
=
\frac{-15+8i}{17}.
$$
Since
$$
|\lambda|=1,
$$
the map
$$
\phi
=
\psi_b^{-1}\circ(\lambda\psi_a)
$$
is an automorphism of $\mathbb{D}$. By construction,
$$
\phi(a)=b
$$
and
$$
\phi(b)=a.
$$
A simplification gives
$$
\phi(z)
=
\frac{5iz+2-2i}{2(1+i)z-5i}.
$$

There can be at most one automorphism interchanging $a$ and $b$, because the composition of any two such automorphisms fixes both points and is therefore the identity. Consequently,
$$
\operatorname{Aut}(\Omega)
=
\left\{
\operatorname{id},
\left.z\mapsto\frac{5iz+2-2i}{2(1+i)z-5i}\right.
\right\}.
$$
::

