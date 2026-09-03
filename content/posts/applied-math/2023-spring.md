# 2023 Spring Qualifying Exam in Applied Mathematics (AI-generated)

## Part A
::ProblemBlock{number=A1}
#problem
Find a leading order boundary-layer solution of
$$
\varepsilon y''+\varepsilon(2-x)y'-y=-x^2,
\qquad y(0)=1,
\quad y(1)=0.
$$
#proof
The reduced outer equation is $-y=-x^2$, so $y_{out}=x^2$. It satisfies neither endpoint exactly, but because the highest derivative is multiplied by $\varepsilon$, endpoint layers are expected. The dominant layer balance is $\varepsilon y''-y=0$, so the layer scale is $x/\sqrt\varepsilon$ at $0$ and $(1-x)/\sqrt\varepsilon$ at $1$.

At $x=0$, put $X=x/\sqrt\varepsilon$. The layer correction satisfies $Y''-Y=0$ and must decay as $X\to\infty$, so $Y=Ae^{-X}$. Since $y_{out}(0)=0$ and $y(0)=1$, $A=1$.

At $x=1$, put $Z=(1-x)/\sqrt\varepsilon$. The decaying correction is $Be^{-Z}$. Since $y_{out}(1)=1$ and $y(1)=0$, $B=-1$. Hence
$$
\boxed{y(x)\sim x^2+e^{-x/\sqrt\varepsilon}-e^{-(1-x)/\sqrt\varepsilon}.}
$$
::

::ProblemBlock{number=A2}
#problem
For
$$
\dot x=px+x^3+y\sin x,
\qquad
\dot y=-y-2x^2,
$$
determine local asymptotic stability of $(0,0)$ for each $p$ and classify the bifurcation at $p=0$.
#proof
The linearization is
$$
\begin{pmatrix}p&0\\0&-1\end{pmatrix}.
$$
Thus the origin is hyperbolic for $p\ne0$: stable for $p<0$ and unstable for $p>0$.

At $p=0$, the center variable is $x$ and the stable variable is $y$. Seek $y=h(x,p)$. To leading order, the stable equation gives
$$
0=-h-2x^2+\cdots,
\qquad h(x,p)=-2x^2+\cdots.
$$
On the center manifold,
$$
\dot x=px+x^3+h\sin x=px+x^3+(-2x^2)(x)+\cdots=px-x^3+\cdots.
$$
This is a supercritical pitchfork normal form. The origin is locally asymptotically stable for $p<0$, unstable for $p>0$, and at $p=0$ the reduced equation $\dot x=-x^3$ is asymptotically stable along the center direction while the transverse direction is stable. Hence the origin is also locally asymptotically stable at $p=0$, though not exponentially stable.
::

::ProblemBlock{number=A3}
#problem
Show that
$$
\dot x=x+y-x(2x^2+3y^2),
\qquad
\dot y=-x+y-y(2x^2+3y^2)
$$
has at least one periodic orbit, and discuss stability.
#proof
Use polar coordinates. The radial equation is
$$
\dot r=\frac{x\dot x+y\dot y}{r}=r-r(2x^2+3y^2)=r\{1-r^2(2\cos^2\theta+3\sin^2\theta)\}.
$$
Thus $\dot r>0$ for $r$ sufficiently small and $\dot r<0$ for $r$ sufficiently large. The angular equation satisfies $\dot\theta=-1$. Hence there is a trapping annulus containing no equilibrium. By the Poincare--Bendixson theorem, a periodic orbit exists.

Because the vector field points outward on the inner boundary and inward on the outer boundary, the periodic orbit obtained by trapping is expected to be locally asymptotically stable.
::

## Part B
::ProblemBlock{number=B1}
#problem
For the midpoint method, derive the error equation, order, stability criterion, and absolute stability region.
#proof
The method is
$$
k_1=hf(t_n,w_n),
\qquad
w_{n+1}=w_n+h f(t_n+h/2,w_n+k_1/2).
$$
Taylor expansion shows agreement with the exact solution through terms of order $h^2$, hence local error $O(h^3)$ and global order $2$.

Let $e_n=y(t_n)-w_n$. Subtracting the numerical update from the exact integral form gives
$$
e_{n+1}=e_n+h\{f(t_n+h/2,y(t_n)+k_1^*/2)-f(t_n+h/2,w_n+k_1/2)\}+\tau_{n+1},
$$
where $\tau_{n+1}=O(h^3)$ is the consistency error. Lipschitz continuity gives stability by discrete Gronwall.

For $y'=\lambda y$, $z=h\lambda$,
$$
R(z)=1+z+\frac{z^2}{2}.
$$
Thus
$$
\boxed{\mathcal S=\{z\in\mathbb{C}: |1+z+z^2/2|\le1\}.}
$$
::

::ProblemBlock{number=B2}
#problem
Describe the SVD and solve the SVD/pseudoinverse problem for
$$
A=\begin{pmatrix}2&3\\2&-3\\1&0\end{pmatrix}.
$$
#proof
The SVD is $A=U\Sigma V^T$, where $U,V$ are orthogonal and $\Sigma$ contains the singular values. Here
$$
A^TA=\begin{pmatrix}9&0\\0&18\end{pmatrix}.
$$
Thus the singular values are $3$ and $3\sqrt2$. A convenient $V$ swaps the order if one wants decreasing singular values. In fact the columns of $A$ are orthogonal, so the right singular vectors are the coordinate axes and the left singular vectors are normalized columns:
$$
u_1=\frac13(2,2,1)^T,
\qquad
u_2=\frac1{3\sqrt2}(3,-3,0)^T.
$$
The pseudoinverse is
$$
\boxed{A^\dagger=(A^TA)^{-1}A^T=\begin{pmatrix}2/9&2/9&1/9\\1/6&-1/6&0\end{pmatrix}.}
$$
For $b=(3,0,3)^T$,
$$
x=A^\dagger b=\begin{pmatrix}1\\1/2\end{pmatrix}.
$$
::

::ProblemBlock{number=B3}
#problem
Prove $p(\lambda)$ is an eigenvalue of $p(A)$; use Gershgorin to discuss the symmetric matrix with zero row sums and nonpositive off-diagonal structure.
#proof
If $Av=\lambda v$, then
$$
p(A)v=\sum_j c_jA^jv=\sum_j c_j\lambda^jv=p(\lambda)v.
$$
Thus $p(\lambda)$ is an eigenvalue of $p(A)$.

For the Gershgorin part, the hypotheses imply each Gershgorin disk is centered at $a_{ii}=\sum_{j\ne i}|a_{ij}|$ with radius the same number, so every disk lies in the closed right half-plane. Since the matrix is symmetric, all eigenvalues are real, hence nonnegative. Also the zero row-sum condition gives $A\mathbf 1=0$, so $0$ is an eigenvalue. If the graph associated to nonzero off-diagonal entries is connected, the nullspace is exactly $\operatorname{span}\{\mathbf1\}$; in general its dimension equals the number of connected components.
::

## Part C
::ProblemBlock{number=C1}
#problem
Find weak minima for $\int_0^1(t\dot x+\dot x^2)dt$ and for $\int_0^b(x^2+\dot x^2)dt$ with $x(0)=0$, $x(b)=B$.
#proof
For (a), $L=t v+v^2$, so $L_v=t+2v$ and Euler--Lagrange gives $d(t+2\dot x)/dt=0$, hence $\ddot x=-1/2$. Without endpoint conditions, extremals form a family. Since $L_{vv}=2>0$, any extremal satisfying the imposed admissible endpoint conditions is a weak minimum.

For (b), Euler--Lagrange gives
$$
\frac d{dt}(2\dot x)-2x=0,
\qquad
\ddot x-x=0.
$$
With $x(0)=0$, $x(b)=B$,
$$
\boxed{x(t)=B\frac{\sinh t}{\sinh b}.}
$$
Since $L_{vv}=2>0$ and the second variation is
$$
\int_0^b(\eta^2+\dot\eta^2)dt>0
$$
for nonzero admissible variations, this extremal is a strict weak minimum.
::

::ProblemBlock{number=C2}
#problem
For $L(t,x,v)=\frac12v^2-vx$, find the Hamiltonian, solve Hamilton's equations, and solve the Hamilton--Jacobi equation.
#proof
The momentum is $p=L_v=v-x$, so $v=p+x$. Hence
$$
H=pv-L=p(p+x)-\left(\frac12(p+x)^2-x(p+x)\right)=\frac12p^2+px+\frac12x^2.
$$
Hamilton's equations are
$$
\dot x=p+x,
\qquad
\dot p=-(p+x).
$$
Thus $x+p$ is constant, say $C$, so $\dot x=C$ and $x=Ct+D$, $p=C-x$.

The Hamilton--Jacobi equation is
$$
u_t+\frac12u_x^2+xu_x+\frac12x^2=0,
$$
or
$$
u_t+\frac12(u_x+x)^2=0.
$$
A complete integral is
$$
\boxed{u(t,x;\alpha)=\alpha x-\frac12(\alpha+x)^2t}
$$
locally, with the usual interpretation that more general solutions follow from characteristics.
::

::ProblemBlock{number=C3}
#problem
Under $|F''|\le\lambda_1$, prove any Euler--Lagrange solution minimizes
$$
I(u)=\int_\Omega\left(\frac12|\nabla u|^2+F(u)\right)dx.
$$
#proof
Let $u=u_0+v$. Taylor expansion and the Euler--Lagrange equation give
$$
I(u)-I(u_0)=\frac12\int_\Omega |\nabla v|^2+F''(u_0+\theta v)v^2\,dx.
$$
Since $F''\ge-\lambda_1$ and $\int |\nabla v|^2\ge\lambda_1\int v^2$,
$$
I(u)-I(u_0)\ge\frac12\int_\Omega |\nabla v|^2-\lambda_1v^2\,dx\ge0.
$$
Thus $u_0$ is a minimizer.
::
