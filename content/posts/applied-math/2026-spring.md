# 2026 Spring Qualifying Exam in Applied Mathematics (AI-generated)

## Part A

::ProblemBlock{number=A1}
#problem
For $\dot u=f(u)$, $u(0)=u_0$, state existence/uniqueness and smooth dependence; prove blowup of $|u(t)|$ if the maximal right endpoint $\beta<\infty$; prove global existence under $|f(u)|\le a+b|u|$.
#proof
If $f\in C^1(\mathbb{R}^n)$, then for each $u_0$ there is a unique maximal solution. The flow is $C^1$ in $t$ and $u_0$; if $f\in C^k$, the flow is correspondingly $C^k$ in initial data.

If $\beta<\infty$ and $|u(t)|$ remained bounded as $t\uparrow\beta$, then $u(t)$ would stay in a compact set where $f$ is Lipschitz and bounded. Starting from times $t_j\uparrow\beta$, the local existence theorem would extend the solution a uniform positive time beyond $t_j$, hence beyond $\beta$, contradiction. Thus $|u(t)|$ is unbounded as $t\uparrow\beta$.

If $|f(u)|\le a+b|u|$, then
$$
|u(t)|\le |u_0|+\int_0^t(a+b|u(s)|)\,ds.
$$
For finite $T$, Gronwall gives a finite bound on $[0,T]$. Therefore no finite-time blowup is possible. The same argument backward in time gives existence for all $t\in\mathbb{R}$.
::

::ProblemBlock{number=A2}
#problem
Use center manifold theory to determine local asymptotic stability of the origin for
$$
\dot x=y+ax^3,
\qquad
\dot y=-y+bx^2+xy^2.
$$
#proof
The linearization is
$$
\begin{pmatrix}0&1\\0&-1\end{pmatrix},
$$
with eigenvalues $0$ and $-1$. The center eigenspace is tangent to $y=0$. Let the center manifold be
$$
y=h(x)=c_2x^2+c_3x^3+O(x^4).
$$
The invariance equation is
$$
h'(x)(h(x)+ax^3)=-h(x)+bx^2+xh(x)^2.
$$
To order $x^2$, the left side has no $x^2$ term, while the right side is $(-c_2+b)x^2$, so $c_2=b$. To order $x^3$, the right side gives $-c_3x^3$, while the left side still has no $x^3$ term, so $c_3=0$. Thus
$$
h(x)=bx^2+O(x^4).
$$
The reduced flow is
$$
\dot x=h(x)+ax^3=bx^2+ax^3+O(x^4).
$$
If $b\ne0$, the leading term $bx^2$ has the same sign on both sides of the origin, so the origin is not locally asymptotically stable. If $b=0$, then
$$
\dot x=ax^3+O(x^4).
$$
The origin is locally asymptotically stable precisely when $a<0$; unstable when $a>0$; and higher-order analysis is needed when $a=b=0$ from the displayed terms, though the given leading nonlinearities give no attracting term. Hence, from the computed normal form, stability occurs for $b=0$ and $a<0$.
::

::ProblemBlock{number=A3}
#problem
Find a leading order composite solution of
$$
\varepsilon y''+x^2y'-y=0,
\qquad y(0)=1,
\quad y(1)=2.
$$
#proof
The reduced outer equation is
$$
x^2y'-y=0,
$$
so
$$
\frac{y'}y=\frac1{x^2},
\qquad
 y=C e^{-1/x}.
$$
The reduced equation is singular at $x=0$, and the right boundary gives
$$
2=Ce^{-1},
\qquad C=2e.
$$
Thus
$$
y_{out}=2e^{1-1/x}.
$$
As $x\downarrow0$, $y_{out}\to0$, so the left boundary condition $y(0)=1$ requires a boundary layer. Balance $\varepsilon y''-y=0$ near $x=0$, giving the scale $X=x/\sqrt\varepsilon$. The layer correction is $Ae^{-X}$, and $A=1$. Therefore
$$
\boxed{y_c(x)=2e^{1-1/x}+e^{-x/\sqrt\varepsilon}.}
$$
This satisfies the left condition to leading order and the right condition up to an exponentially small layer contribution.
::

## Part B
::ProblemBlock{number=B1}
#problem
For the leap-frog scheme $y_{n+1}=y_{n-1}+2\Delta t f(t_n,y_n)$, derive the error equation, order, starting values, and stability domain.
#proof
Let $e_n=y(t_n)-y_n$. Subtracting the scheme from the exact identity gives
$$
e_{n+1}=e_{n-1}+2h\{f(t_n,y(t_n))-f(t_n,y_n)\}+\tau_{n+1},
$$
where
$$
\tau_{n+1}=y(t_{n+1})-y(t_{n-1})-2hy'(t_n)=O(h^3).
$$
The $O(h^3)$ local error and zero-stable two-step structure give global order $2$. Starting values $y_0,y_1$ must be generated with at least second-order accuracy, for example using a second-order Runge--Kutta method for $y_1$.

For $y'=\lambda y$, $z=h\lambda$, the recurrence is
$$
\xi^{2}-2z\xi-1=0.
$$
The absolute stability domain consists of those $z$ for which both roots satisfy the multistep root condition. On the imaginary axis the method is stable for $z=i\eta$ with $|\eta|\le1$, and the stability region is the corresponding interval on the imaginary axis:
$$
\boxed{\mathcal S=\{i\eta: |\eta|\le1\}.}
$$
::

::ProblemBlock{number=B2}
#problem
For
$$
A=\begin{pmatrix}1&0\\0&1\\0&1\end{pmatrix},
\qquad b=(1,2,3)^T,
$$
find an SVD, the minimum-norm least squares solution, and prove basic singular-value norm inequalities.
#proof
The columns are orthogonal with norms $1$ and $\sqrt2$. Thus singular values are $\sqrt2$ and $1$. Take
$$
v_1=e_2,
\quad u_1=\frac1{\sqrt2}(0,1,1)^T;
\qquad
v_2=e_1,
\quad u_2=(1,0,0)^T.
$$
This gives an SVD $A=U\Sigma V^T$. The least squares solution satisfies
$$
A^TAx=A^Tb.
$$
Here
$$
A^TA=\begin{pmatrix}1&0\\0&2\end{pmatrix},
\qquad
A^Tb=\begin{pmatrix}1\\5\end{pmatrix},
$$
so
$$
\boxed{x=(1,5/2)^T.}
$$
For any matrix, $\left\lVert A\right\rVert_2=\max_{\left\lVert x\right\rVert=1}\left\lVert Ax\right\rVert=\sigma_{\max}$ by the SVD. If $Ax=\lambda x$ with $\left\lVert x\right\rVert=1$, then $|\lambda|=\left\lVert Ax\right\rVert\le\sigma_{\max}$. For nonsingular $A$, applying this to $A^{-1}$ gives $1/\min|\lambda_k|\le1/\sigma_{\min}$, hence $\sigma_{\min}\le\min|\lambda_k|$.
::

::ProblemBlock{number=B3}
#problem
Analyze the quotient $q_k=v^Tx_{k+1}/v^Tx_k$ for $x_{k+1}=Ax_k$ when $A$ is diagonalizable.
#proof
Write
$$
x_k=A^kx_0=\sum_i\alpha_i\lambda_i^k u_i.
$$
Then
$$
q_k=\frac{\sum_i\alpha_i(v^Tu_i)\lambda_i^{k+1}}{\sum_i\alpha_i(v^Tu_i)\lambda_i^k}.
$$
If $v^Tu_1\ne0$ and $\alpha_1\ne0$, divide numerator and denominator by $\alpha_1(v^Tu_1)\lambda_1^k$ to get $q_k\to\lambda_1$.

If $v\perp u_1$ but $v^Tu_2\ne0$ and $|\lambda_2|>|\lambda_3|$, the same argument starts with the second term and gives $q_k\to\lambda_2$.

If the first two relevant terms are present, then
$$
q_k=\lambda_1+C\left(\frac{\lambda_2}{\lambda_1}\right)^k+o\left(\left|\frac{\lambda_2}{\lambda_1}\right|^k\right),
$$
for an explicit constant $C$ depending on $\alpha_i$ and $v^Tu_i$. Thus
$$
\lim_{k\to\infty}(q_k-\lambda_1)\left(\frac{\lambda_1}{\lambda_2}\right)^k=C.
$$
::

## Part C
::ProblemBlock{number=C1}
#problem
For $L(x,v)=\frac12e^xv^2-e^{-x}$, compute the Hamiltonian, Hamiltonian system, Hamilton--Jacobi equation, and separated solutions.
#proof
The momentum is $p=L_v=e^xv$, so $v=e^{-x}p$. The Hamiltonian is
$$
H=pv-L=\frac12e^{-x}p^2+e^{-x}=e^{-x}\left(1+\frac12p^2\right).
$$
Hamilton's equations are
$$
\dot x=e^{-x}p,
\qquad
\dot p=e^{-x}\left(1+\frac12p^2\right).
$$
The Hamilton--Jacobi equation is
$$
S_t+e^{-x}\left(1+\frac12S_x^2\right)=0.
$$
For $S=\phi(x)-\alpha t$,
$$
e^{-x}\left(1+\frac12(\phi')^2\right)=\alpha.
$$
Thus
$$
\phi'(x)=\pm\sqrt{2(\alpha e^x-1)},
$$
and
$$
\boxed{S(t,x)=\pm\int^x\sqrt{2(\alpha e^s-1)}\,ds-\alpha t.}
$$
::

::ProblemBlock{number=C2}
#problem
Use the direct method for
$$
I(u)=\int_\Omega\left(\frac1p|\nabla u|^p+F(u)\right)dx
$$
over the admissible set with trace $g$ and mean zero; prove weak closedness and existence when $F$ is convex.
#proof
The direct method takes a minimizing sequence, proves boundedness in $W^{1,p}$, extracts a weakly convergent subsequence using reflexivity, proves the limit is admissible, and uses weak lower semicontinuity to pass to the limit.

If $u_j\rightharpoonup u$ in $W^{1,p}$ and each $u_j$ has trace $g$, continuity of the trace operator gives the trace of $u$ equal to $g$. Also the functional $u\mapsto\int_\Omega u$ is continuous linear, so $\int u=0$. Hence the admissible set is weakly sequentially closed.

The gradient term is convex and weakly lower semicontinuous. If $F$ is convex, then $u\mapsto\int F(u)$ is weakly lower semicontinuous under the stated growth assumptions. Coercivity follows from the $p$-gradient term together with the trace and mean constraints and Poincare-type inequalities. Therefore $I$ attains its minimum.
::

::ProblemBlock{number=C3}
#problem
For maps $u:\Omega\to\mathbb{R}^N$ with $|u|^2=1$, derive the harmonic map equation into the sphere and simplify when $N=2$, $u=(\cos\theta,\sin\theta)$.
#proof
Introduce a Lagrange multiplier for the constraint. The first variation of
$$
\frac12\int|\nabla u|^2
$$
with constraint $|u|^2=1$ gives
$$
-\Delta u=\lambda u.
$$
Dot with $u$:
$$
-u\cdot\Delta u=\lambda |u|^2=\lambda.
$$
Since $u\cdot u=1$, differentiating gives $u\cdot u_i=0$, and differentiating again gives
$$
u\cdot\Delta u=-|\nabla u|^2.
$$
Thus
$$
\lambda=|\nabla u|^2,
\qquad
\boxed{-\Delta u=|\nabla u|^2u.}
$$
For $u=(\cos\theta,\sin\theta)$,
$$
\nabla u=(-\sin\theta,\cos\theta)\nabla\theta,
\quad |\nabla u|^2=|\nabla\theta|^2.
$$
Substitution shows the normal components cancel, leaving
$$
\boxed{\Delta\theta=0.}
$$
::
