# 2025 Spring Qualifying Exam in Applied Mathematics (AI-generated)

## Part A

::ProblemBlock{number=A1}
#problem
Find a leading order multiple scales expansion for
$$
y''+y+\varepsilon(y+y^3)=0,\qquad y(0)=1,\quad y'(0)=0,
$$
where $0<\varepsilon\ll1$, and compare it with the unperturbed solution.
#proof
Let $T=\varepsilon t$ and seek $y(t)=y_0(t,T)+\varepsilon y_1(t,T)+\cdots$. Then
$$
\frac{d}{dt}=\partial_t+\varepsilon\partial_T,
\qquad
\frac{d^2}{dt^2}=\partial_t^2+2\varepsilon\partial_t\partial_T+O(\varepsilon^2).
$$
At order $1$,
$$
y_{0tt}+y_0=0,
$$
so write
$$
y_0=r(T)\cos(t+\theta(T)).
$$
At order $\varepsilon$,
$$
y_{1tt}+y_1=-2y_{0tT}-y_0-y_0^3.
$$
Put $\psi=t+\theta(T)$. Since $y_0=r\cos\psi$,
$$
-2y_{0tT}=2r'\sin\psi+2r\theta'\cos\psi,
$$
and
$$
y_0+y_0^3=r\cos\psi+r^3\cos^3\psi
=\left(r+\frac{3r^3}{4}\right)\cos\psi+\frac{r^3}{4}\cos3\psi.
$$
The resonant forcing terms are the coefficients of $\sin\psi$ and $\cos\psi$. To avoid secular growth in $y_1$, impose
$$
2r'=0,
\qquad
2r\theta'-r-\frac{3r^3}{4}=0.
$$
Thus $r$ is constant and
$$
\theta'=\frac12+\frac{3r^2}{8}.
$$
The initial data give $r(0)=1$ and $\theta(0)=0$, hence $r\equiv1$ and $\theta(T)=\frac78T$. Therefore
$$
\boxed{y(t)\sim \cos\left(t+\frac78\varepsilon t\right).}
$$
The unperturbed equation $y''+y=0$ with the same data has solution $y(t)=\cos t$. Thus the perturbation mainly changes the frequency from $1$ to $1+7\varepsilon/8$ at leading multiple-scales order, while keeping the amplitude equal to $1$.
::

::ProblemBlock{number=A2}
#problem
Let $\dot u=Au$, where $A$ is a real hyperbolic constant matrix.
<span style="display:inline-block; width:1em;"></span> **(a)** Define $e^{At}$ and show that $u(t)=e^{At}u_0$.
<span style="display:inline-block; width:1em;"></span> **(b)** Relate eigenvalues and eigenspaces to long-time dynamics, and decompose solutions into stable and unstable parts.
<span style="display:inline-block; width:1em;"></span> **(c)** For $\dot u=Au+g(t)$ with $g$ continuous and bounded on $\mathbb{R}$, show that there is a unique bounded solution.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** The matrix exponential is
$$
e^{At}=\sum_{k=0}^\infty \frac{t^kA^k}{k!}.
$$
This series converges for every $t$ and satisfies
$$
\frac{d}{dt}e^{At}=Ae^{At},\qquad e^{A0}=I.
$$
Therefore $u(t)=e^{At}u_0$ satisfies $\dot u=Ae^{At}u_0=Au$ and $u(0)=u_0$. Uniqueness for linear ODEs gives the desired formula.

<span style="display:inline-block; width:1em;"></span> **(b)** Since $A$ is hyperbolic, no eigenvalue has real part zero. Let $E^s$ be the direct sum of generalized eigenspaces with $\operatorname{Re}\lambda<0$, and let $E^u$ be the corresponding sum for $\operatorname{Re}\lambda>0$. Then
$$
\mathbb{R}^n=E^s\oplus E^u.
$$
Write $u_0=u_0^s+u_0^u$. Then
$$
u(t)=e^{At}u_0^s+e^{At}u_0^u=:v_s(t)+v_u(t).
$$
On $E^s$, the exponential decays as $t\to\infty$, so $v_s(t)\to0$ as $t\to\infty$. On $E^u$, the exponential decays backward in time, so $v_u(t)\to0$ as $t\to-\infty$. This proves the decomposition and describes the long-time dynamics.

<span style="display:inline-block; width:1em;"></span> **(c)** Let $P^s$ and $P^u$ be the spectral projections onto $E^s$ and $E^u$. A bounded solution, if it exists, must be
$$
\boxed{u_*(t)=\int_{-\infty}^t e^{A(t-s)}P^s g(s)\,ds-\int_t^\infty e^{A(t-s)}P^u g(s)\,ds.}
$$
The first integral converges because $e^{A(t-s)}P^s$ decays when $t-s\to\infty$, and the second converges because $e^{A(t-s)}P^u$ decays when $t-s\to-\infty$. Differentiating under the integral sign gives
$$
\dot u_*=Au_*+P^sg+P^ug=Au_*+g.
$$
Boundedness follows from the exponential decay estimates and boundedness of $g$.

For uniqueness, suppose $u_1,u_2$ are bounded solutions. Their difference $w=u_1-u_2$ solves $\dot w=Aw$. If $w(0)$ has a nonzero unstable component, then $w(t)$ is unbounded as $t\to\infty$; if it has a nonzero stable component, then $w(t)$ is unbounded as $t\to-\infty$. Since $w$ is bounded on all of $\mathbb{R}$, both components are zero, so $w\equiv0$. Thus the bounded solution is unique.

::

::ProblemBlock{number=A3}
#problem
For
$$
\dot x=px-2y^2+xy-x^2,
\qquad
\dot y=x-y-y^2,
$$
compute the linearization, construct the center manifold near the origin for $p\approx0$, classify the bifurcation, and determine when the origin is locally asymptotically stable.
#proof
The linearization at $(0,0)$ is
$$
\begin{pmatrix}\dot x\\ \dot y\end{pmatrix}
=\begin{pmatrix}p&0\\1&-1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}+\text{higher order terms}.
$$
At $p=0$ the eigenvalues are $0$ and $-1$, so there is a one-dimensional center direction and a one-dimensional stable direction.

For a center manifold with parameter $p$, write
$$
y=h(x,p)=x+a x^2+bpx+O(|x|^3+|p||x|^2+p^2|x|).
$$
The coefficient of $x$ is $1$ because the center eigenspace at $p=0$ satisfies $y=x$. The invariance equation is
$$
h_x(x,p)\dot x=x-h-y^2.
$$
Using $y=h(x,p)$ in the $x$ equation gives, to second order,
$$
\dot x=px-2x^2+x^2-x^2+O(3)=px-2x^2+O(3).
$$
Thus the reduced flow is
$$
\boxed{\dot x=px-2x^2+\text{higher order terms}.}
$$
This is the normal form of a transcritical-type exchange of equilibria. The reduced equilibria are
$$
x=0,
\qquad
x=\frac p2+O(p^2).
$$
The derivative of the reduced vector field at $x=0$ is $p$. Since the transverse eigenvalue remains near $-1$, the origin is locally asymptotically stable for $p<0$ and unstable for $p>0$. At $p=0$, the reduced equation is $\dot x=-2x^2+O(x^3)$, so the origin is semistable, not locally asymptotically stable in a two-sided neighborhood.
::

## Part B

::ProblemBlock{number=B1}
#problem
For Heun's method
$$
k_1=hf(t_n,y_n),\quad k_2=hf(t_n+h,y_n+k_1),\quad
 y_{n+1}=y_n+\frac12(k_1+k_2),
$$
determine the local and global orders, discuss stability, and determine the absolute stability region.
#proof
Taylor expansion gives
$$
k_1=hf,
\qquad
k_2=h\{f+h(f_t+f_yf)\}+O(h^3).
$$
Thus
$$
y_{n+1}=y_n+hf+\frac{h^2}{2}(f_t+f_yf)+O(h^3),
$$
which agrees with the exact Taylor expansion through $h^2$. Therefore the local truncation error is $O(h^3)$ and the global error is $O(h^2)$.

For stability on a finite time interval, one assumes $f$ is Lipschitz in $y$ and sufficiently smooth. Then the one-step map is Lipschitz with constant $1+Ch$, so the global error satisfies a discrete Gronwall inequality.

For absolute stability, apply the method to $y'=\lambda y$, $z=h\lambda$. Then
$$
k_1=zy_n,
\qquad
k_2=z(1+z)y_n,
$$
so
$$
y_{n+1}=\left(1+z+\frac{z^2}{2}\right)y_n.
$$
Hence
$$
\boxed{\mathcal S=\left\{z\in\mathbb{C}:\left|1+z+\frac{z^2}{2}\right|\le1\right\}.}
$$
This is the absolute stability region of Heun's method.
::

::ProblemBlock{number=B2}
#problem
Let $A\in\mathbb{R}^{m\times n}$ and $b\in\mathbb{R}^m$. Discuss least squares solvability, uniqueness, residual uniqueness, and find the minimum-norm solution for
$$
A=\begin{pmatrix}1&1&0\\1&0&1\end{pmatrix},
\qquad
b=\begin{pmatrix}1\\0\end{pmatrix}.
$$
#proof
A vector $x$ solves the least squares problem if and only if the residual $r=Ax-b$ is orthogonal to the column space of $A$:
$$
A^T(Ax-b)=0.
$$
These are the normal equations
$$
A^TAx=A^Tb.
$$
The solution is unique if and only if $\ker A=\{0\}$, equivalently $A$ has full column rank. The residual is always unique because $Ax$ is the orthogonal projection of $b$ onto $\mathcal R(A)$, and orthogonal projection onto a subspace is unique.

For the given matrix, solve $Ax=b$:
$$
x_1+x_2=1,
\qquad
x_1+x_3=0.
$$
There are infinitely many exact least squares solutions. Write
$$
x=(s,1-s,-s).
$$
Minimize
$$
\left\lVert x\right\rVert^2=s^2+(1-s)^2+s^2=3s^2-2s+1.
$$
The derivative is $6s-2$, so $s=1/3$. Therefore
$$
\boxed{x_*=\begin{pmatrix}1/3\\2/3\\-1/3\end{pmatrix}.}
$$
This is the minimum-norm least squares solution.
::

::ProblemBlock{number=B3}
#problem
<span style="display:inline-block; width:1em;"></span> **(a)** Prove that the nonzero eigenvalues of $BC$ and $CB$ are the same.
<span style="display:inline-block; width:1em;"></span> **(b)** For the tridiagonal matrix in the exam with $b_{n+1}=0$, show that at least one eigenvalue has multiplicity one.
<span style="display:inline-block; width:1em;"></span> **(c)** Perform one QR step without shift on $A=\begin{pmatrix}\cos\alpha&\sin\alpha\\ \sin\alpha&0\end{pmatrix}$.

#proof
<span style="display:inline-block; width:1em;"></span> **(a)** Suppose $BCv=\lambda v$ with $\lambda\neq0$. Then $Cv\neq0$, because otherwise $BCv=0$. Moreover
$$
CB(Cv)=C(BCv)=\lambda Cv.
$$
Thus $\lambda$ is an eigenvalue of $CB$. The converse is identical, replacing $B$ and $C$. Algebraic multiplicities agree from
$$
\det(\lambda I_m-BC)=\lambda^{m-n}\det(\lambda I_n-CB)
$$
when dimensions differ, with the natural interpretation.

<span style="display:inline-block; width:1em;"></span> **(b)** Since $b_{n+1}=0$, the matrix splits as a block diagonal matrix
$$
T=\begin{pmatrix}T_1&0\\0&T_2\end{pmatrix},
$$
where $T_1$ has size $n$ and $T_2$ has size $n+1$. Each block is an unreduced symmetric tridiagonal matrix, so every eigenvalue of each block is simple. If every eigenvalue of $T$ had multiplicity at least two, then every eigenvalue of $T_1$ would also have to be an eigenvalue of $T_2$, and conversely except for counting. But $T_2$ has one more eigenvalue than $T_1$. Since all eigenvalues inside each block are simple, at least one eigenvalue of the larger block cannot be shared. That eigenvalue appears with multiplicity one in $T$.

<span style="display:inline-block; width:1em;"></span> **(c)** Let $c=\cos\alpha$ and $s=\sin\alpha$. The first column of $A$ is $(c,s)^T$, which has norm $1$. A QR factorization can be obtained with
$$
Q=\begin{pmatrix}c&-s\\s&c\end{pmatrix}.
$$
Then
$$
R=Q^TA=\begin{pmatrix}1&cs\\0&-s^2\end{pmatrix}.
$$
One unshifted QR step gives
$$
A_1=RQ=\begin{pmatrix}1&cs\\0&-s^2\end{pmatrix}
\begin{pmatrix}c&-s\\s&c\end{pmatrix}
=\begin{pmatrix}c+cs^2&-s+c^2s\\-s^3&-cs^2\end{pmatrix}.
$$
Thus
$$
\boxed{A_1=\begin{pmatrix}c(1+s^2)&-s^3\\-s^3&-cs^2\end{pmatrix}.}
$$

::

## Part C

::ProblemBlock{number=C1}
#problem
Find the weak minimum of
$$
I(x)=\int_0^1 x(t)\sqrt{1+\dot x(t)^2}\,dt,
\qquad x(0)=1,
\quad x(1)=2.
$$
#proof
The Lagrangian $L=x\sqrt{1+v^2}$ is independent of $t$, so the Beltrami identity gives
$$
H=vL_v-L=-\frac{x}{\sqrt{1+v^2}}=-a.
$$
Thus
$$
\frac{x}{\sqrt{1+\dot x^2}}=a,
\qquad
\dot x^2=\frac{x^2}{a^2}-1.
$$
Integrating gives the catenary family
$$
x(t)=a\cosh\left(\frac{t-c}{a}\right).
$$
The constants $a>0$ and $c$ are determined by
$$
a\cosh\left(-\frac ca\right)=1,
\qquad
 a\cosh\left(\frac{1-c}{a}\right)=2.
$$
The problem statement says the constant need not be found explicitly. Along such an extremal, $x>0$ and
$$
L_{vv}=\frac{x}{(1+v^2)^{3/2}}>0.
$$
The strengthened Legendre condition holds, and the catenary extremal has no conjugate point for the minimizing branch connecting the endpoints. Hence the corresponding catenary is a weak local minimum.
::

::ProblemBlock{number=C2}
#problem
For a curve with a corner at $t=c$, prove the first Erdmann corner condition
$$
L_v(t,x,\dot x)|_{c^-}=L_v(t,x,\dot x)|_{c^+}.
$$
#proof
Let $x$ be a minimizing broken extremal, smooth on $[a,c)$ and $(c,b]$ and continuous at $c$. Vary the curve by $x_\epsilon=x+\epsilon\eta$, where $\eta(a)=\eta(b)=0$ but $\eta(c)$ is arbitrary. The first variation is
$$
\delta I=\int_a^c(L_x\eta+L_v\dot\eta)\,dt+
\int_c^b(L_x\eta+L_v\dot\eta)\,dt.
$$
Integrating by parts on each side gives
$$
\delta I=\int_a^c\left(L_x-\frac d{dt}L_v\right)\eta\,dt+
\int_c^b\left(L_x-\frac d{dt}L_v\right)\eta\,dt
+L_v(c^-)\eta(c)-L_v(c^+)\eta(c).
$$
The integral terms vanish because each smooth piece satisfies the Euler--Lagrange equation. Since $\eta(c)$ is arbitrary and $\delta I=0$ for a minimizer,
$$
L_v(c^-)-L_v(c^+)=0.
$$
This is exactly the first Erdmann corner condition.
::

::ProblemBlock{number=C3}
#problem
For
$$
L(x,v)=\sqrt{1+e^{2x}v^2},
$$
compute the Euler--Lagrange equation, Hamiltonian and Hamiltonian system, and a complete integral for the Hamilton--Jacobi equation.
#proof
We have
$$
L_v=\frac{e^{2x}v}{\sqrt{1+e^{2x}v^2}},
\qquad
L_x=\frac{e^{2x}v^2}{\sqrt{1+e^{2x}v^2}}.
$$
Thus the Euler--Lagrange equation is
$$
\frac d{dt}\left(\frac{e^{2x}\dot x}{\sqrt{1+e^{2x}\dot x^2}}\right)
-\frac{e^{2x}\dot x^2}{\sqrt{1+e^{2x}\dot x^2}}=0.
$$

Let
$$
p=\frac{e^{2q}v}{\sqrt{1+e^{2q}v^2}}.
$$
Solving gives
$$
v=\frac{e^{-q}p}{\sqrt{e^{2q}-p^2}},
\qquad |p|<e^q.
$$
The Hamiltonian is
$$
H(q,p)=pv-L= -\sqrt{1-e^{-2q}p^2}.
$$
Hence
$$
\dot q=H_p=\frac{e^{-2q}p}{\sqrt{1-e^{-2q}p^2}},
\qquad
\dot p=-H_q=-\frac{e^{-2q}p^2}{\sqrt{1-e^{-2q}p^2}}.
$$
Since $H$ is conserved, one may set $e^{-q}p=\beta$ constant in magnitude along energy levels and integrate the resulting first order system.

The Hamilton--Jacobi equation is
$$
u_t-\sqrt{1-e^{-2x}u_x^2}=0.
$$
Seek $u=\Phi(x)-\alpha t$. Then
$$
-\alpha-\sqrt{1-e^{-2x}(\Phi')^2}=0.
$$
Thus $\alpha<0$ and
$$
e^{-2x}(\Phi')^2=1-\alpha^2.
$$
For $|\alpha|\le1$,
$$
\Phi'(x)=\pm\sqrt{1-\alpha^2}\,e^x.
$$
Therefore a separated solution is
$$
\boxed{u(t,x;\alpha)=\pm\sqrt{1-\alpha^2}\,e^x-\alpha t,\qquad |\alpha|\le1.}
$$
::
