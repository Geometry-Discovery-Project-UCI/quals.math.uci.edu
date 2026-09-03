# 2006 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
(a) Give an example of an infinite group in which every element has finite order.

(b) Prove that
$$
f(x)=1+\frac{x}{1!}+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}\in\mathbb Q[x]
$$
has no multiple roots in $\mathbb C$.

(c) State Lagrange's theorem.

#proof
(a) One example is the additive group
$$
\mathbb Q/\mathbb Z.
$$
It is infinite, but every element $a/b+\mathbb Z$ has finite order dividing $b$.

(b) We have
$$
f'(x)=1+\frac{x}{1!}+\cdots+\frac{x^{n-1}}{(n-1)!}
$$
and therefore
$$
f(x)-f'(x)=\frac{x^n}{n!}.
$$
If $\alpha$ were a multiple root, then $f(\alpha)=f'(\alpha)=0$, so the displayed identity would give $\alpha^n=0$, hence $\alpha=0$. But $f(0)=1$, a contradiction. Thus $f$ has no multiple root.

(c) If $G$ is a finite group and $H\le G$, then
$$
|G|=[G:H]|H|.
$$
In particular, the order of every subgroup of $G$, and hence the order of every element of $G$, divides $|G|$.
::

::ProblemBlock{number=2}
#problem
Let $L$ be the splitting field of $x^4-2$ over $\mathbb Q$.

(a) Find $[L:\mathbb Q]$.

(b) Describe $\operatorname{Gal}(L/\mathbb Q)$ both as an abstract group and as a set of automorphisms.

#proof
Let $\alpha=\sqrt[4]{2}$. The roots are $\alpha,-\alpha,i\alpha,-i\alpha$, so
$$
L=\mathbb Q(\alpha,i).
$$
Eisenstein's criterion at $2$ shows that $x^4-2$ is irreducible, hence $[\mathbb Q(\alpha):\mathbb Q]=4$. Since $\mathbb Q(\alpha)$ is real, it does not contain $i$, and therefore
$$
[L:\mathbb Q]=8.
$$

Every automorphism is determined by sending $\alpha$ to any of its four roots and $i$ to either $i$ or $-i$. Define
$$
r(\alpha)=i\alpha,\quad r(i)=i,
\qquad
s(\alpha)=\alpha,\quad s(i)=-i.
$$
Then $r^4=s^2=1$ and $srs=r^{-1}$. The eight automorphisms are
$$
r^j\quad\text{and}\quad sr^j,\qquad 0\le j\le3.
$$
Thus
$$
\operatorname{Gal}(L/\mathbb Q)\cong D_8.
$$
::

::ProblemBlock{number=3}
#problem
For which primes $p$ can one find a nonzero homomorphism
$$
\mathbb Z[i]\longrightarrow\mathbb Z/p\mathbb Z?
$$

#proof
Any nonzero ring homomorphism to the field $\mathbb F_p$ sends $1$ to $1$. It is therefore determined by the image $a$ of $i$, which must satisfy
$$
a^2=-1\quad\text{in }\mathbb F_p.
$$
For an odd prime $p$, this is possible exactly when $-1$ is a quadratic residue modulo $p$, equivalently when
$$
p\equiv1\pmod4.
$$
For $p=2$, the element $a=1$ satisfies $a^2=-1=1$ in $\mathbb F_2$. Hence such a homomorphism exists exactly for
$$
p=2\quad\text{or}\quad p\equiv1\pmod4.
$$
Explicitly, whenever $a^2\equiv-1\pmod p$, the map is $m+ni\mapsto m+na\pmod p$.
::

::ProblemBlock{number=4}
#problem
(a) Prove that every group of order $185$ is abelian.

(b) How many groups of order $185$ are there, up to isomorphism?

#proof
Since $185=5\cdot37$, Sylow's theorems give
$$
n_{37}\equiv1\pmod{37},\quad n_{37}\mid5,
$$
so $n_{37}=1$. Also
$$
n_5\equiv1\pmod5,\quad n_5\mid37.
$$
The only divisors of $37$ are $1$ and $37$, and $37\not\equiv1\pmod5$, so $n_5=1$. Thus both Sylow subgroups $P$ and $Q$ are normal. Their intersection is trivial and, for $p\in P$, $q\in Q$, the commutator $[p,q]$ lies in both $P$ and $Q$, hence is $1$. Therefore
$$
G=P\times Q\cong C_5\times C_{37}\cong C_{185}.
$$
In particular, every such group is abelian, and there is exactly one isomorphism class.
::

::ProblemBlock{number=5}
#problem
Let $A,B,N$ be submodules of a module $M$ and suppose that $N\subseteq A\cap B$. Prove that there exist natural homomorphisms
$$
\varphi:A/N\to M/B,
\qquad
\psi:B/N\to M/A
$$
such that $\ker\varphi\cong\ker\psi$.

#proof
Define
$$
\varphi(a+N)=a+B,
\qquad
\psi(b+N)=b+A.
$$
These maps are well-defined because $N\subseteq B$ for $\varphi$ and $N\subseteq A$ for $\psi$. Their kernels are
$$
\ker\varphi=\{a+N:a\in A\cap B\}=(A\cap B)/N
$$
and
$$
\ker\psi=\{b+N:b\in A\cap B\}=(A\cap B)/N.
$$
Thus the kernels are naturally isomorphic; indeed, both are canonically the same quotient module.
::

::ProblemBlock{number=6}
#problem
Determine, as a direct product of cyclic groups, the group of units of
$$
\mathbb F_5[x]/(x^3-1).
$$

#proof
Over $\mathbb F_5$,
$$
x^3-1=(x-1)(x^2+x+1).
$$
The discriminant of $x^2+x+1$ is $1-4=-3=2$ in $\mathbb F_5$, and $2$ is not a square modulo $5$. Thus the quadratic factor is irreducible. By the Chinese remainder theorem,
$$
\mathbb F_5[x]/(x^3-1)
\cong \mathbb F_5\times\mathbb F_{25}.
$$
Taking unit groups gives
$$
\left(\mathbb F_5[x]/(x^3-1)\right)^\times
\cong\mathbb F_5^\times\times\mathbb F_{25}^\times.
$$
The multiplicative group of every finite field is cyclic, so
$$
\left(\mathbb F_5[x]/(x^3-1)\right)^\times
\cong C_4\times C_{24}.
$$
::

::ProblemBlock{number=7}
#problem
Suppose that $A$ is a $3\times3$ matrix over $\mathbb C$, is not diagonalizable, and satisfies $\operatorname{tr}(A)=3$ and $\det(A)=1$.

(a) List all possibilities for the characteristic polynomial of $A$.

(b) List all possibilities for the minimal polynomial of $A$.

(c) List all possibilities for the Jordan canonical form of $A$.

#proof
Because $A$ is not diagonalizable, its characteristic polynomial has a repeated root. Let the repeated eigenvalue be $\lambda$ and the remaining eigenvalue be $\mu$. The trace and determinant conditions give
$$
2\lambda+\mu=3,
\qquad
\lambda^2\mu=1.
$$
Eliminating $\mu$ yields
$$
\lambda^2(3-2\lambda)=1,
$$
or
$$
2\lambda^3-3\lambda^2+1=(\lambda-1)^2(2\lambda+1)=0.
$$
Thus either all three eigenvalues are $1$, or the repeated eigenvalue is $-1/2$ and the third is $4$. The possible characteristic polynomials are therefore
$$
(x-1)^3
\quad\text{and}\quad
(x+\tfrac12)^2(x-4).
$$

For $(x-1)^3$, non-diagonalizability permits the minimal polynomials
$$
(x-1)^2\quad\text{or}\quad(x-1)^3.
$$
For the other characteristic polynomial, both eigenvalues must occur and non-diagonalizability forces a size-two block for $-1/2$, so the minimal polynomial is
$$
(x+\tfrac12)^2(x-4).
$$

Accordingly, the possible Jordan forms are
$$
J_2(1)\oplus[1],
\qquad
J_3(1),
\qquad
J_2(-\tfrac12)\oplus[4].
$$
::

::ProblemBlock{number=8}
#problem
Let $q$ be a prime power and $n$ a positive integer.

(a) Prove that $\varphi(x)=x^q$ is an automorphism of $\mathbb F_{q^n}$ that fixes $\mathbb F_q$.

(b) Prove that $\varphi$ generates $\operatorname{Gal}(\mathbb F_{q^n}/\mathbb F_q)$.

#proof
In characteristic $p$, raising to the $q$th power is a field homomorphism because $q$ is a power of $p$. It is injective, hence bijective on the finite field $\mathbb F_{q^n}$. Every $a\in\mathbb F_q$ satisfies $a^q=a$, so $\varphi$ fixes $\mathbb F_q$.

For $k\ge1$, the fixed points of $\varphi^k$ satisfy $x^{q^k}=x$. If $0<k<n$, this equation has at most $q^k<q^n$ roots, so $\varphi^k$ is not the identity. On the other hand, every element of $\mathbb F_{q^n}$ satisfies $x^{q^n}=x$, so $\varphi^n=1$. Thus $\varphi$ has order $n$.

The extension has degree $n$ and is Galois, so its Galois group has order $n$. Since $\langle\varphi\rangle$ already has $n$ elements,
$$
\operatorname{Gal}(\mathbb F_{q^n}/\mathbb F_q)=\langle\varphi\rangle.
$$
::

::ProblemBlock{number=9}
#problem
For each statement, answer true or false and justify the answer.

(a) Every Euclidean domain is a principal ideal domain.

(b) For every commutative ring $R$ with identity, every subring of $R$ is an ideal of $R$.

(c) For every commutative ring $R$ with identity, every maximal ideal of $R$ is a prime ideal of $R$.

(d) If $G$ is a group, $H\triangleleft G$, and $K\triangleleft H$, then $K\triangleleft G$.

#proof
(a) True. If $I\ne0$ is an ideal, choose a nonzero $d\in I$ of least Euclidean value. Division of any $a\in I$ by $d$ gives $a=qd+r$ with either $r=0$ or the Euclidean value of $r$ smaller than that of $d$. Since $r=a-qd\in I$, minimality forces $r=0$. Thus $I=(d)$.

(b) False. The subring $\mathbb Z\subset\mathbb Q$ is not an ideal: $1\in\mathbb Z$ but $(1/2)\cdot1\notin\mathbb Z$.

(c) True. If $M$ is maximal, then $R/M$ is a field, hence an integral domain. Therefore $M$ is prime.

(d) False. Let $G=S_4$, let
$$
H=V_4=\{1,(12)(34),(13)(24),(14)(23)\},
$$
and let $K=\{1,(12)(34)\}$. Since $H$ is abelian, $K\triangleleft H$, and $H\triangleleft S_4$. But conjugation in $S_4$ sends $(12)(34)$ to the other double transpositions, so $K$ is not normal in $G$.
::
