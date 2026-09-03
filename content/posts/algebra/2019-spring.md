# 2019 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Does $S_5$ contain a subgroup isomorphic to **(a)** $D_8$ or **(b)** $Q_8$?

#proof
**(a)** Yes. The permutations

$$
r=(1234),
\qquad
s=(24)
$$

fix $5$ and satisfy $r^4=s^2=1$ and $srs=r^{-1}$. Hence they generate a subgroup isomorphic to $D_8$.

**(b)** No. If $Q_8$ embedded in $S_5$, its action on five letters would decompose into orbits whose sizes divide $8$. Faithfulness requires an orbit of size $4$ or $8$; size $8$ is impossible, so it would give a faithful embedding into $S_4$. An order-$8$ subgroup of $S_4$ is Sylow and is isomorphic to $D_8$, not $Q_8$. Therefore no such embedding exists.
::

::ProblemBlock{number=2}
#problem
Let $A$ be finitely generated abelian, $B\leq A$, and $C=A/B$.

Prove that if $C$ is torsion-free, the isomorphism classes of $B$ and $C$ determine that of $A$. Give a counterexample when $C$ has torsion.

#proof
A finitely generated torsion-free abelian group is free, so $C\cong\mathbb Z^r$. Free modules are projective, and therefore the exact sequence

$$
0\to B\to A\to C\to0
$$

splits. Hence

$$
A\cong B\oplus C,
$$

which is determined by the two isomorphism classes.

For a counterexample, take $B\cong C\cong\mathbb Z/2\mathbb Z$. Both

$$
A_1=\mathbb Z/4\mathbb Z
\qquad\text{and}\qquad
A_2=\mathbb Z/2\mathbb Z\oplus\mathbb Z/2\mathbb Z
$$

contain a subgroup isomorphic to $B$ with quotient isomorphic to $C$, but $A_1$ and $A_2$ are not isomorphic.
::

::ProblemBlock{number=3}
#problem
Define $G_1=G$ and $G_{n+1}=[G,G_n]$. Prove that every finite $p$-group is nilpotent.

#proof
We use induction on $|G|$. A nontrivial finite $p$-group has nontrivial center. If $G=Z(G)$, then $G_2=1$. Otherwise, $G/Z(G)$ is a smaller $p$-group and is nilpotent by induction. Suppose its lower central series reaches the identity after $c$ steps. Then

$$
G_{c+1}\subseteq Z(G).
$$

Consequently

$$
G_{c+2}=[G,G_{c+1}]=1.
$$

Thus the lower central series of $G$ terminates, and $G$ is nilpotent.
::

::ProblemBlock{number=4}
#problem
Let $R$ be commutative with identity.

**(a)** Let $S$ be multiplicatively closed and let $P$ be maximal among ideals disjoint from $S$. Prove that $P$ is prime.

**(b)** If $N(R)$ is the nilradical, prove the equivalence of:

1. $R$ has exactly one prime ideal.
2. Every element is nilpotent or a unit.
3. $R/N(R)$ is a field.

#proof
**(a)** Suppose $ab\in P$ but $a,b\notin P$. By maximality, both $P+(a)$ and $P+(b)$ meet $S$. Choose

$$
s=p+ra\in S,
\qquad
t=q+ub\in S
$$

with $p,q\in P$. Expanding $st$ shows that every term lies in $P$, including $ruab$, so $st\in P$. But $st\in S$, contradicting $P\cap S=\varnothing$. Hence $P$ is prime.

**(b)** Suppose there is exactly one prime ideal $P$. Since the nilradical is the intersection of all prime ideals, $P=N(R)$. It is also the unique maximal ideal. If $r$ is not nilpotent, then $r\notin P$. Hence $(r)$ is contained in no maximal ideal, so $(r)=R$ and $r$ is a unit. This proves 1 implies 2.

If 2 holds, every nonzero class in $R/N(R)$ is represented by a nonnilpotent element and is therefore a unit. Thus the quotient is a field, proving 2 implies 3.

If $R/N(R)$ is a field, it has only one prime ideal, namely zero. Every prime ideal of $R$ contains $N(R)$, and the correspondence theorem then shows that $N(R)$ is the unique prime ideal of $R$. Thus 3 implies 1.
::

::ProblemBlock{number=5}
#problem
Recall that $\mathbb Z[i]$ is Euclidean.

**(a)** Prove that $\mathbb Z[i]/I$ is finite for every nonzero ideal $I$.

**(b)** Identify $\mathbb Z[i]/(1+i)$.

#proof
**(a)** Since $\mathbb Z[i]$ is a PID, write $I=(\alpha)$ with $\alpha\neq0$. Multiplication by $\alpha$ identifies $I$ as a sublattice of index

$$
|N(\alpha)|=|\alpha\overline\alpha|
$$

in the rank-two lattice $\mathbb Z[i]$. Therefore the quotient has $|N(\alpha)|$ elements and is finite.

**(b)** The norm of $1+i$ is $2$, so the quotient has two elements. The map

$$
\mathbb Z[i]\to\mathbb F_2,
\qquad
a+bi\mapsto a+b\pmod2
$$

has kernel $(1+i)$. Hence

$$
\mathbb Z[i]/(1+i)\cong\mathbb F_2.
$$
::

::ProblemBlock{number=6}
#problem
Let $n$ be squarefree. Prove that the primitive $n$th roots of unity form a basis of $\mathbb Q(\zeta_n)$ over $\mathbb Q$.

#proof
For a prime $p$, the primitive $p$th roots

$$
\zeta_p,\zeta_p^2,\ldots,\zeta_p^{p-1}
$$

form a basis of $\mathbb Q(\zeta_p)$: the only rational linear relation among all $p$ roots $1,\zeta_p,\ldots,\zeta_p^{p-1}$ is their sum, so deleting $1$ leaves $p-1$ independent elements.

Now write the odd part of the squarefree integer as $n=p_1\cdots p_r$. Cyclotomic fields of distinct prime conductors are linearly disjoint over $\mathbb Q$; this follows, for example, because their ramified-prime sets are disjoint. Therefore products of the displayed prime-level bases form a basis of

$$
\mathbb Q(\zeta_{p_1},\ldots,\zeta_{p_r})=\mathbb Q(\zeta_n).
$$

By the Chinese remainder theorem, these products are exactly the primitive $n$th roots, each occurring once. If $2\mid n$, then $n=2m$ with $m$ odd and $\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$; the primitive $2m$th roots are the negatives of the primitive $m$th roots. Thus the conclusion also holds in the even squarefree case. Their number is $\varphi(n)$, the field degree, so they form a basis.
::

::ProblemBlock{number=7}
#problem
How many primitive elements does $\mathbb F_{27}$ have over $\mathbb F_3$?

#proof
The subfields of $\mathbb F_{3^3}$ are $\mathbb F_{3^d}$ for divisors $d$ of $3$. The only proper subfield is therefore $\mathbb F_3$. An element generates $\mathbb F_{27}$ over $\mathbb F_3$ exactly when it is not in the proper subfield. Hence the number is

$$
27-3=24.
$$
::

::ProblemBlock{number=8}
#problem
Let $K/F$ be a Galois algebraic extension with no proper intermediate fields. Prove that $[K:F]$ is prime.

#proof
Choose $\alpha\in K\setminus F$. Since the extension is algebraic, $F(\alpha)/F$ is finite. The absence of proper intermediate fields forces $K=F(\alpha)$, so $K/F$ is finite.

By the Galois correspondence, subgroups of $G=\operatorname{Gal}(K/F)$ correspond to intermediate fields. Thus $G$ has no nontrivial proper subgroup. If $|G|$ were composite, Cauchy's theorem would give a subgroup of prime order strictly between $1$ and $G$. Therefore $|G|$ is prime. Since $[K:F]=|G|$, the degree is prime.
::

::ProblemBlock{number=9}
#problem
Let $V$ be a rational vector space with $\dim V\leq p-2$, where $p$ is prime. If $T^p=I$, prove that $T=I$.

#proof
The minimal polynomial of $T$ divides

$$
x^p-1=(x-1)\Phi_p(x).
$$

Over $\mathbb Q$, the cyclotomic polynomial $\Phi_p$ is irreducible and has degree $p-1$. If $T\neq I$, its minimal polynomial must contain $\Phi_p$, and would therefore have degree at least $p-1$. But the degree of a minimal polynomial is at most $\dim V\leq p-2$, a contradiction. Hence $T=I$.
::

::ProblemBlock{number=10}
#problem
Let $A,B\in M_n(\mathbb C)$ be nilpotent, with the same nilpotency index and satisfying

$$
\operatorname{rank}A=\operatorname{rank}B,
\qquad
\operatorname{rank}A^2=\operatorname{rank}B^2.
$$

Prove that **(i)** nonsimilar examples exist for $n>9$, while **(ii)** $A$ and $B$ are similar for $n\leq9$.

#proof
A nilpotent similarity class is determined by the partition of $n$ given by its Jordan block sizes. For a partition $\lambda=(\lambda_1,\ldots,\lambda_r)$,

$$
\operatorname{rank}A=sum_i\max(\lambda_i-1,0),
$$

$$
\operatorname{rank}A^2=sum_i\max(\lambda_i-2,0),
$$

and the nilpotency index is $\max\lambda_i$.

**(i)** In dimension $10$, the distinct partitions

$$
(4,4,2)
\qquad\text{and}\qquad
(4,3,3)
$$

both have nilpotency index $4$, rank $7$, and square-rank $4$. Their Jordan matrices are not similar. For every $n>10$, append $n-10$ blocks of size $1$ to both partitions. For $n=10$ use the displayed pair, so examples exist for every $n>9$.

**(ii)** Let $c_j$ be the number of blocks of size $j$. The three given invariants determine

$$
\sum c_j=n-\operatorname{rank}A,
$$

$$
\sum_{j\geq2}c_j=\operatorname{rank}A-\operatorname{rank}A^2,
$$

$$
\sum_{j\geq3}(j-2)c_j=\operatorname{rank}A^2,
$$

together with the largest $j$ for which $c_j\neq0$. For $n\leq9$, these data determine the $c_j$ uniquely: if the largest block is at most $4$, solve successively for $c_4,c_3,c_2,c_1$ from the displayed equations; if it is at least $5$, there is only one such block and the remaining total size is at most $4$, where the same equations determine the remainder. Therefore the Jordan partitions agree, and $A$ and $B$ are similar.
::
