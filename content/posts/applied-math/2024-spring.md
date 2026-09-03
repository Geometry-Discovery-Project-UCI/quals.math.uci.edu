# 2024 Spring Qualifying Exam in Applied Mathematics (AI-generated)

## Part A

::ProblemBlock{number=A1}
#problem
Find a leading order multiple-scales expansion for
$$
y''+y+\varepsilon\left(\frac13(y')^3-y'\right)=0,
\qquad y(0)=0,
\quad y'(0)=1.
$$
#proof
Let $T=\varepsilon t$ and write $y_0=r(T)\sin(t+\theta(T))$. At order $1$, $y_{0tt}+y_0=0$. At order $\varepsilon$,
$$
y_{1tt}+y_1=-2y_{0tT}-\frac13 y_{0t}^3+y_{0t}.
$$
Put $\psi=t+\theta$. Then $y_{0t}=r\cos\psi$ and
$$
-2y_{0tT}=-2r'\cos\psi+2r\theta'\sin\psi.
$$
Also
$$
-\frac13r^3\cos^3\psi+r\cos\psi=\left(r-\frac{r^3}{4}\right)\cos\psi-\frac{r^3}{12}\cos3\psi.
$$
The resonant terms vanish if
$$
-2r'+r-\frac{r^3}{4}=0,
\qquad 2r\theta'=0.
$$
Hence $\theta$ is constant and
$$
2\frac{dr}{dT}=r-\frac{r^3}{4}.
$$
With $r(0)=1$, this gives
$$
r(T)=\frac{2}{\sqrt{1+3e^{-T}}}.
$$
Thus
$$
\boxed{y(t)\sim \frac{2\sin t}{\sqrt{1+3e^{-\varepsilon t}}}.}
$$
The amplitude slowly increases from $1$ to $2$, while the leading phase remains $t$.
::

::ProblemBlock{number=A2}
#problem
Define a Lyapunov function and prove a strong Lyapunov function excludes periodic orbits. Then analyze
$$
\dot x=-y-2x^3,
\qquad
\dot y=2x+py-y^3-4x^2y
$$
using $V(x,y)=2x^2+y^2$.
#proof
A $C^1$ function $V$ is a Lyapunov function if $\dot V=\nabla V\cdot f$ has a fixed sign along trajectories; it is strong if the sign is strict away from equilibria. A periodic orbit would force $V$ to return to its initial value, contradicting strict monotonicity. Therefore a strong Lyapunov function excludes periodic orbits.

Here
$$
\dot V=4x\dot x+2y\dot y
=2py^2-8x^4-2y^4-8x^2y^2.
$$
If $p\le0$, then $\dot V\le0$, with equality only at the origin, so there are no periodic orbits.

If $0<p<1$, the origin is repelling because the linearization has trace $p>0$ and positive determinant. On the ellipse $V=1$, the negative quartic terms dominate and one checks $\dot V<0$. Thus trajectories starting in a suitable annulus are trapped: the inner boundary repels and the outer ellipse points inward. By the Poincare--Bendixson theorem, the annulus contains a periodic orbit.
::

::ProblemBlock{number=A3}
#problem
For
$$
\dot x=px+x^2-xy,
\qquad
\dot y=x-y+2x^2,
$$
compute the linearization, find the center-manifold flow near $p=0$, classify the bifurcation, and determine local asymptotic stability of the origin.
#proof
The linearization is
$$
D f(0,0)=\begin{pmatrix}p&0\\1&-1\end{pmatrix}.
$$
At $p=0$ the eigenvalues are $0$ and $-1$, so the origin is nonhyperbolic and has a one-dimensional center manifold. Put $z=y-x$. Then
$$
\dot x=px-xz,
$$
and the $z$ equation has the form
$$
\dot z=-z-px+x^2+O(3).
$$
On the center manifold $z=h(x,p)=-px+x^2+O(3)$. Substitution gives
$$
\boxed{\dot x=px+p x^2-x^3+O(4).}
$$
Thus the origin changes stability at $p=0$; the reduced dynamics has the pitchfork-type cubic saturation shown above. Since the transverse eigenvalue stays near $-1$, the origin is locally asymptotically stable for $p<0$, unstable for $p>0$, and nonhyperbolic at $p=0$.
::

## Part B

::ProblemBlock{number=B1}
#problem
Analyze the implicit trapezoidal method
$$
y_{n+1}=y_n+\frac h2(f(x_n,y_n)+f(x_{n+1},y_{n+1})).
$$
#proof
The method is the trapezoidal quadrature rule applied to $y'=f(x,y)$, so its local truncation error is $O(h^3)$ and the global order is $2$. It is convergent under the standard one-step assumptions: consistency, Lipschitz continuity in $y$, and solvability of the implicit equation for small $h$.

For $y'=\lambda y$, $z=h\lambda$, the method gives
$$
y_{n+1}=y_n+\frac z2(y_n+y_{n+1}),
$$
so
$$
R(z)=\frac{1+z/2}{1-z/2}.
$$
A method is A-stable if $|R(z)|\le1$ whenever $\operatorname{Re}z\le0$. Since
$$
|1+z/2|\le |1-z/2|\quad(\operatorname{Re}z\le0),
$$
the trapezoidal method is A-stable.
::

::ProblemBlock{number=B2}
#problem
For full-column-rank $A\in\mathbb{R}^{m\times n}$, prove $A^TA$ is symmetric positive definite, derive the least squares solution, and compute $A^\dagger$ for
$$
A=\begin{pmatrix}1&1\\1&2\\1&0\end{pmatrix}.
$$
#proof
Symmetry is clear. If $x\ne0$, then full column rank gives $Ax\ne0$, so
$$
x^TA^TAx=\left\lVert Ax\right\rVert^2>0.
$$
Thus $A^TA$ is positive definite. The least squares solution satisfies
$$
A^T(Ax-b)=0,
\qquad
x=(A^TA)^{-1}A^Tb.
$$
For the given matrix,
$$
A^TA=\begin{pmatrix}3&3\\3&5\end{pmatrix},
\qquad
(A^TA)^{-1}=\frac16\begin{pmatrix}5&-3\\-3&3\end{pmatrix}.
$$
Therefore
$$
\boxed{A^\dagger=(A^TA)^{-1}A^T=\frac16\begin{pmatrix}2&-1&5\\0&3&-3\end{pmatrix}.}
$$
::

::ProblemBlock{number=B3}
#problem
For
$$
A=\begin{pmatrix}20&0.1&0\\0.1&20&0\\0&0&1\end{pmatrix},
$$
define the power method, explain slow convergence, and choose a useful shift.
#proof
The power method iterates $x_{k+1}=Ax_k/\left\lVert Ax_k\right\rVert$ and estimates the dominant eigenvalue by the Rayleigh quotient. The leading $2\times2$ block has eigenvalues $20.1$ and $19.9$, so the eigenvalues are $20.1,19.9,1$. The convergence factor is about $19.9/20.1$, close to $1$, hence slow.

Apply the power method to $A-\sigma I$. Choosing $\sigma=10.45$ gives transformed eigenvalues $9.65,9.45,-9.45$. The eigenvalue corresponding to $20.1$ is dominant, and the convergence factor improves to $9.45/9.65$.
::

## Part C

::ProblemBlock{number=C1}
#problem
For $M=\{x\in C^1([1,2]):x(1)=1,x(2)=2\}$, verify that $x_*(t)=3-2/t$ is a weak and strong minimum of
$$
I(x)=\int_1^2(\dot x+t^2\dot x^2)\,dt.
$$
#proof
The Euler--Lagrange equation is
$$
\frac d{dt}(1+2t^2\dot x)=0.
$$
For $x_*(t)=3-2/t$, $\dot x_*=2/t^2$, so $1+2t^2\dot x_*=5$, a constant. The endpoints are also satisfied.

For any admissible $x=x_*+\eta$, $\eta(1)=\eta(2)=0$. The first variation vanishes, and the exact difference is
$$
I(x)-I(x_*)=\int_1^2 t^2\dot\eta^2\,dt\ge0.
$$
Thus $x_*$ is a global strong minimum, hence also a weak minimum.
::

::ProblemBlock{number=C2}
#problem
For $L(t,x,v)=e^{-x}\sqrt{1+v^2}$, find the Hamiltonian and solve the Hamilton--Jacobi equation.
#proof
The momentum is
$$
p=L_v=e^{-x}\frac{v}{\sqrt{1+v^2}}.
$$
Solving for $v$ gives $v=pe^x/\sqrt{1-p^2e^{2x}}$. Therefore
$$
H=pv-L=-e^{-x}\sqrt{1-p^2e^{2x}}.
$$
The Hamilton--Jacobi equation is
$$
u_t-e^{-x}\sqrt{1-e^{2x}u_x^2}=0.
$$
With $u=\Phi(x)-\alpha t$,
$$
(\Phi')^2=e^{-2x}-\alpha^2e^{-4x}.
$$
Thus a separated solution is
$$
\boxed{u(t,x;\alpha)=-\alpha t\pm\int^x e^{-s}\sqrt{1-\alpha^2e^{-2s}}\,ds.}
$$
Hamilton's system follows from $\dot x=H_p$, $\dot p=-H_x$.
::

::ProblemBlock{number=C3}
#problem
Find the flaw in Riemann's proof of Dirichlet's principle and give examples supporting it.
#proof
The flaw is that bounded sequences in infinite-dimensional spaces need not have strongly convergent subsequences. For example, $u_k(x)=\sin(kx)$ is bounded in $L^2(0,2\pi)$ but has no strongly convergent subsequence.

The direct method fixes this by using weak compactness in a reflexive space, weak closedness of the admissible set, coercivity, and weak lower semicontinuity of the functional. These hypotheses allow a minimizing sequence to converge weakly to an admissible limit and allow the inequality
$$
I(u)\le\liminf I(u_k)
$$
to pass the minimum to the limit.
::
