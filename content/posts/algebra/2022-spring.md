# 2022 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
If $H$ has finite index in $G$, prove that $H$ contains a subgroup $N$ that is normal in $G$ and has finite index in $H$.

#proof
Let $G$ act by left multiplication on the finite set $G/H$. The resulting homomorphism

$$
\varphi:G\to\operatorname{Sym}(G/H)
$$

has kernel $N$ normal in $G$. Every element of $N$ fixes the coset $H$, so $N\leq H$. Moreover, $N$ has finite index in $G$ because the image of $\varphi$ is finite. Therefore

$$
[H:N]\leq[G:N]<\infty.
$$
::

::ProblemBlock{number=2}
#problem
Prove that there is no simple group of order $351$.

#proof
Since $351=3^3\cdot13$, Sylow's theorems give

$$
n_{13}\equiv1\pmod{13},
\qquad
n_{13}\mid27.
$$

Thus $n_{13}=1$ or $27$. The first case gives a normal Sylow subgroup. Suppose $n_{13}=27$. Distinct subgroups of order $13$ intersect trivially, so their nonidentity elements number

$$
27(13-1)=324.
$$

Only $351-324=27$ elements, including the identity, remain. A Sylow $3$-subgroup has order $27$, so it consists of exactly those remaining elements. Hence it is the unique Sylow $3$-subgroup and is normal. In either case the group has a nontrivial proper normal subgroup, so it is not simple.
::

::ProblemBlock{number=3}
#problem
If $M,N\triangleleft G$, prove that $G/(M\cap N)$ is isomorphic to a subgroup of $(G/M)\times(G/N)$.

#proof
Define

$$
\Phi:G\to(G/M)\times(G/N),
\qquad
g\mapsto(gM,gN).
$$

This is a homomorphism, and

$$
\ker\Phi=M\cap N.
$$

The first isomorphism theorem gives

$$
G/(M\cap N)\cong\operatorname{im}\Phi,
$$

and the image is a subgroup of $(G/M)\times(G/N)$.
::

::ProblemBlock{number=4}
#problem
Let $F$ be a field. For every nonzero ideal $I\triangleleft F[x]$, prove that

$$
F[x]/I\cong R_1\times\cdots\times R_n,
$$

where the ideals of each $R_i$ form a finite chain.

#proof
Because $F[x]$ is a PID, write

$$
I=(f),
\qquad
f=u\prod_{i=1}^n p_i^{e_i},
$$

where the $p_i$ are pairwise nonassociate irreducibles. The ideals $(p_i^{e_i})$ are pairwise comaximal, so the Chinese remainder theorem gives

$$
F[x]/(f)\cong\prod_{i=1}^n F[x]/(p_i^{e_i}).
$$

Set $R_i=F[x]/(p_i^{e_i})$. Ideals of $R_i$ correspond to ideals of $F[x]$ containing $(p_i^{e_i})$. Since $F[x]$ is a PID, these are exactly

$$
(p_i^{e_i})\subseteq(p_i^{e_i-1})\subseteq\cdots\subseteq(p_i)\subseteq F[x].
$$

Their images in $R_i$ form the finite chain

$$
(0)\subseteq(\overline p_i^{,e_i-1})\subseteq\cdots\subseteq(\overline p_i)\subseteq R_i,
$$

and there are no other ideals.
::

::ProblemBlock{number=5}
#problem
For each item, give an example or prove none exists.

**(a)** A prime ideal in a finite ring that is not maximal.

**(b)** A nonzero prime ideal in an integral domain that is not maximal.

#proof
**(a)** No such example exists. If $P$ is prime in a finite commutative ring $R$, then $R/P$ is a finite integral domain, hence a field. Therefore $P$ is maximal.

**(b)** Take $R=k[x,y]$ and $P=(x)$. Then

$$
R/P\cong k[y]
$$

is an integral domain, so $P$ is prime. It is not maximal because $k[y]$ is not a field. Also $P\neq(0)$.
::

::ProblemBlock{number=6}
#problem
Let $A$ and $B$ be finite abelian groups of orders $n$ and $m$. If $\gcd(n,m)\neq1$, prove that

$$
A\otimes_{\mathbb Z}B\neq0.
$$

#proof
Choose a prime $p$ dividing both $|A|$ and $|B|$. By the structure theorem for finite abelian groups, both $A$ and $B$ have quotients isomorphic to $\mathbb Z/p\mathbb Z$. Thus there are surjections

$$
A\twoheadrightarrow\mathbb Z/p\mathbb Z,
\qquad
B\twoheadrightarrow\mathbb Z/p\mathbb Z.
$$

Right exactness of tensor products produces a surjection

$$
A\otimes B\twoheadrightarrow
(\mathbb Z/p\mathbb Z)\otimes(\mathbb Z/p\mathbb Z)
\cong\mathbb Z/p\mathbb Z.
$$

The target is nonzero, so $A\otimes B$ is nonzero.
::

::ProblemBlock{number=7}
#problem
Classify all $\mathbb Z[i]$-modules having $16$ elements.

#proof
The Gaussian integers form a PID. Since $2=-i(1+i)^2$, the only Gaussian prime that can occur in a module of cardinality a power of $2$ is

$$
\pi=1+i,
$$

whose norm is $2$. The structure theorem for finite modules over a PID says that every such module is a direct sum

$$
\bigoplus_j\mathbb Z[i]/(\pi^{\lambda_j}).
$$

Since $|\mathbb Z[i]/(\pi^r)|=2^r$, cardinality $16=2^4$ requires $\sum_j\lambda_j=4$. The five partitions of $4$ give exactly five isomorphism classes:

$$
\mathbb Z[i]/(\pi^4),
$$

$$
\mathbb Z[i]/(\pi^3)\oplus\mathbb Z[i]/(\pi),
$$

$$
\mathbb Z[i]/(\pi^2)\oplus\mathbb Z[i]/(\pi^2),
$$

$$
\mathbb Z[i]/(\pi^2)\oplus
(\mathbb Z[i]/(\pi))^2,
$$

and

$$
(\mathbb Z[i]/(\pi))^4.
$$
::

::ProblemBlock{number=8}
#problem
Suppose an irreducible degree-$7$ polynomial over $\mathbb Q$ has a cyclic Galois group. Prove that this group has order $7$.

#proof
Let $K$ be the splitting field, let $G=\operatorname{Gal}(K/\mathbb Q)$, and let $\alpha$ be a root. Irreducibility gives

$$
[\mathbb Q(\alpha):\mathbb Q]=7.
$$

The subgroup

$$
H=\operatorname{Gal}(K/\mathbb Q(\alpha))
$$

therefore has index $7$ in $G$. Because $G$ is cyclic, $H$ is normal. The Galois correspondence then shows that $\mathbb Q(\alpha)/\mathbb Q$ is Galois. Consequently it contains all conjugates of $\alpha$, hence all roots of the polynomial. It is therefore already the splitting field $K$. Thus

$$
|G|=[K:\mathbb Q]=7.
$$
::

::ProblemBlock{number=9}
#problem
Let $p\equiv1\pmod N$, where $p$ is prime and $N\geq2$. If $x^N-a$ is irreducible over $\mathbb F_p$, prove that its splitting field has degree $N$ over $\mathbb F_p$.

#proof
Because $N\mid p-1$, the cyclic group $\mathbb F_p^\times$ contains all $N$th roots of unity. Let $\alpha$ be a root of $x^N-a$. Irreducibility gives

$$
[\mathbb F_p(\alpha):\mathbb F_p]=N.
$$

Every root of $x^N-a$ has the form $\zeta\alpha$, where $\zeta^N=1$. Since every such $\zeta$ already lies in $\mathbb F_p$, all roots lie in $\mathbb F_p(\alpha)$. Thus this field is the splitting field and has degree $N$.
::

::ProblemBlock{number=10}
#problem
Suppose $[K:F]=5$. If $\alpha\in K$ is a root of a quadratic polynomial in $F[x]$, prove that $\alpha\in F$.

#proof
The minimal polynomial of $\alpha$ over $F$ divides a quadratic, so

$$
[F(\alpha):F]\leq2.
$$

On the other hand, the tower law gives

$$
5=[K:F]=[K:F(\alpha)]\,[F(\alpha):F],
$$

so $[F(\alpha):F]$ divides $5$. The only positive integer dividing $5$ and at most $2$ is $1$. Hence $F(\alpha)=F$, so $\alpha\in F$.
::
