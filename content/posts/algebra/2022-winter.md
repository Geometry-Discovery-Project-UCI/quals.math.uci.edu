# 2022 Winter Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $H\triangleleft G$. Prove that multiplication of left cosets,

$$
(aH)(bH)=abH,
$$

is well defined.

#proof
Suppose $aH=a'H$ and $bH=b'H$. Then $a'=ah_1$ and $b'=bh_2$ for some $h_1,h_2\in H$. Since $H$ is normal, $b^{-1}h_1b\in H$. Therefore

$$
a'b'=ah_1bh_2
=ab(b^{-1}h_1b)h_2\in abH.
$$

Thus $a'b'H=abH$, so the product does not depend on the chosen representatives.
::

::ProblemBlock{number=2}
#problem
Let $n\geq5$, and assume that $A_n$ is the only nontrivial proper normal subgroup of $S_n$. If $H\leq S_n$ satisfies

$$
1<[S_n:H]<n,
$$

prove that $H=A_n$.

#proof
Let $m=[S_n:H]$. The action of $S_n$ on the $m$ left cosets of $H$ gives a homomorphism

$$
\varphi:S_n\to S_m.
$$

Its kernel $K$ is normal in $S_n$ and is contained in $H$. The map cannot be injective because

$$
|S_n|=n!>m!=|S_m|
$$

when $m<n$. It is not trivial because the coset action is transitive on more than one coset. Hence $K$ is a nontrivial proper normal subgroup, so the given result implies $K=A_n$. Thus $A_n\leq H$. Since $A_n$ has index $2$ and $H$ is proper, necessarily $H=A_n$.
::

::ProblemBlock{number=3}
#problem
Prove that every group $G$ of order $12$ is a semidirect product $H\rtimes K$ of proper nontrivial subgroups.

#proof
Let $n_3$ be the number of Sylow $3$-subgroups. Then $n_3=1$ or $4$.

If $n_3=1$, the Sylow $3$-subgroup $H$ is normal. Let $K$ be any Sylow $2$-subgroup, of order $4$. Then $H\cap K=1$ and

$$
|HK|=\frac{|H||K|}{|H\cap K|}=12,
$$

so $G=H\rtimes K$.

If $n_3=4$, the four Sylow $3$-subgroups contain eight distinct nonidentity elements. Only three nonidentity elements remain. Every Sylow $2$-subgroup has order $4$, so its three nonidentity elements must be precisely those remaining elements. Thus the Sylow $2$-subgroup $H$ is unique and normal. If $K$ is a Sylow $3$-subgroup, then again $H\cap K=1$ and $HK=G$. Hence $G=H\rtimes K$ in this case as well.
::

::ProblemBlock{number=4}
#problem
Suppose $(M-\lambda I)v\neq0$ but $(M-\lambda I)^2v=0$. Prove that $M$ is not diagonalizable.

#proof
Put

$$
w=(M-\lambda I)v.
$$

Then $w\neq0$ and $(M-\lambda I)w=0$, so $w$ is an eigenvector with eigenvalue $\lambda$. The vector $v$ is a generalized eigenvector of rank $2$.

If $M$ were diagonalizable, then so would $M-\lambda I$. For a diagonalizable operator $T$, one has

$$
\ker T^2=\ker T,
$$

as is immediate from a diagonal representation. But here $v\in\ker(M-\lambda I)^2$ while $v\notin\ker(M-\lambda I)$, a contradiction. Thus $M$ is not diagonalizable.
::

::ProblemBlock{number=5}
#problem
Let $I$ be a prime ideal of $R$. If $R/I$ satisfies the descending chain condition on ideals, prove that $I$ is maximal.

#proof
The quotient $D=R/I$ is an integral domain. It is also Artinian by the descending-chain hypothesis. Let $0\neq a\in D$. The chain

$$
(a)\supseteq(a^2)\supseteq(a^3)\supseteq\cdots
$$

stabilizes, so $(a^n)=(a^{n+1})$ for some $n$. Hence $a^n=a^{n+1}b$ for some $b\in D$, and

$$
a^n(1-ab)=0.
$$

Since $D$ is a domain and $a\neq0$, we get $ab=1$. Thus every nonzero element of $D$ is invertible, so $D$ is a field. Therefore $I$ is maximal.
::

::ProblemBlock{number=6}
#problem
Let

$$
S=\{f(x)\in\mathbb Q[x]:f(0)\in\mathbb Z\}.
$$

Prove that $x\in S$ cannot be expressed as a product of irreducible elements.

#proof
The units of $S$ are exactly $1$ and $-1$. Indeed, a unit of $\mathbb Q[x]$ is a nonzero rational constant, and both it and its reciprocal lie in $S$ only when they are $\pm1$.

Every positive-degree divisor of $x$ in $S$ has degree $1$ and therefore has the form $cx$ with $c\in\mathbb Q^\times$. But for every integer $n\geq2$,

$$
cx=n\left(\frac cnx\right),
$$

and both factors lie in $S$ and are nonunits. Thus no positive-degree divisor of $x$ is irreducible.

If $x$ were a finite product of irreducibles, the sum of their degrees would be $1$, so one factor would have positive degree. That factor would be a positive-degree divisor of $x$, contradicting the preceding paragraph. Hence no factorization into irreducibles exists.
::

::ProblemBlock{number=7}
#problem
Determine the structure, as a product of cyclic groups, of the unit group of

$$
\mathbb F_5[x]/(x^3+1).
$$

#proof
Over $\mathbb F_5$,

$$
x^3+1=(x+1)(x^2-x+1).
$$

The quadratic factor is irreducible because its discriminant is

$$
(-1)^2-4=-3=2,
$$

which is not a square modulo $5$. The Chinese remainder theorem gives

$$
\mathbb F_5[x]/(x^3+1)
\cong\mathbb F_5\times\mathbb F_{25}.
$$

The multiplicative group of a finite field is cyclic, so the unit group is

$$
\mathbb F_5^\times\times\mathbb F_{25}^\times
\cong C_4\times C_{24}.
$$
::

::ProblemBlock{number=8}
#problem
Let $\zeta_n$ be a primitive $n$th root of unity.

**(a)** Give an explicit bijection between $\operatorname{Gal}(\mathbb Q(\zeta_n)/\mathbb Q)$ and $(\mathbb Z/n\mathbb Z)^\times$.

**(b)** Find the degree of

$$
\mathbb Q(\zeta_{11}+zeta_{11}^3+zeta_{11}^4+zeta_{11}^5+zeta_{11}^9)
$$

over $\mathbb Q$.

#proof
**(a)** The bijection sends $a\in(\mathbb Z/n\mathbb Z)^\times$ to the automorphism

$$
\sigma_a(\zeta_n)=\zeta_n^a.
$$

**(b)** The exponents $\{1,3,4,5,9\}$ are the nonzero quadratic residues modulo $11$. Put

$$
\eta=\zeta_{11}+zeta_{11}^3+zeta_{11}^4+zeta_{11}^5+zeta_{11}^9.
$$

The subgroup of quadratic residues, of order $5$, fixes $\eta$. A nonresidue sends it to the sum $\eta'$ over the five nonresidues. Since

$$
\eta+\eta'=-1
$$

and the classical quadratic Gauss-period calculation gives

$$
\eta\eta'=3,
$$

the two periods are the roots of $x^2+x+3$, whose discriminant is $-11$. Thus

$$
\eta=\frac{-1+\sqrt{-11}}2
$$

up to the choice of square root. It is not rational, so its orbit has size $2$ and

$$
[\mathbb Q(\eta):\mathbb Q]=2.
$$
::

::ProblemBlock{number=9}
#problem
For each item, give an example or prove none exists.

**(a)** Finite-order elements $a,b$ in a group such that $ab$ has infinite order.

**(b)** A surjective group homomorphism $\mathbb Q\to\mathbb Z$.

**(c)** A real $3\times3$ matrix $M$ satisfying $M^2=-I_3$.

**(d)** Fields $F\subseteq E\subseteq K$ such that $K/E$ and $E/F$ are Galois but $K/F$ is not.

#proof
**(a)** In the infinite dihedral group

$$
D_\infty=\langle a,b\mid a^2=b^2=1\rangle,
$$

both $a$ and $b$ have order $2$, while $ab$ has infinite order.

**(b)** No. The image of the divisible group $(\mathbb Q,+)$ under a homomorphism is divisible, while the only divisible subgroup of $\mathbb Z$ is $0$. More explicitly, if $\varphi(1)=k$, then $k=n\varphi(1/n)$ for every $n$, so $k$ is divisible by every positive integer and must be zero. It follows that $\varphi$ is the zero map.

**(c)** No. Taking determinants would give

$$
(\det M)^2=\det(-I_3)=-1,
$$

which is impossible over $\mathbb R$.

**(d)** Take

$$
\mathbb Q\subset\mathbb Q(\sqrt2)\subset\mathbb Q(\sqrt[4]{2}).
$$

Both successive extensions are quadratic and therefore Galois. The top extension over $\mathbb Q$ is not normal because it does not contain the conjugate $i\sqrt[4]{2}$ of $\sqrt[4]{2}$.
::
