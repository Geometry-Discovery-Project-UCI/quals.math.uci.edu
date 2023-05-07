---
draft: true
---

# 2019 Spring Algebra

::ProblemBlock{number=1}
#problem
Does the symmetric group $S_5$ contain a subgroup isomorphic to:

(a) The dihedral group $D_8$ with 8 elements?

(b) The quaternion group $Q_8$ with 8 elements?

#proof

::

::ProblemBlock{number=2}
#problem
Supppose $A$ is a finitely generated abelian group, $B$ a subgroup of $A$, and $C=A/B$. Prove that if $C$ is torsion free then the isomorphism classes of $B$ and $C$ determine the isomorphism class of $A$ uniquely. Give a counterexample that shows the isomorphism class of $A$ may not be uniquely determined if $C$ has a non-trivial torsion.

#proof

::

::ProblemBlock{number=3}
#problem
For a group $G$, let $G_1:= G$ and let $G_{n+1}:=[G,G_n]$. We say $G$ is nilpotent if $G_N=1$ for some $N$. Prove that if $G$ is a $p$-group, i.e. $|G|=p^r$ for some prime $p$, then $G$ is nilpotent.

(Recall that if $H$, $K$ are subgroups of $G$ then $[H,K]=\langle [h,k] : h\in H \text{ and } k\in K\rangle$ where $[h,k]=h^{-1}k^{-1}hk$.)

#proof

::

::ProblemBlock{number=4}
#problem
Throughout this question we assume that $R$ is a commutative ring with 1.

(a) Let $A$ be a multiplicative subset of $R$ (that is, $0\notin A$ and $ab\in A$ whenever $a,b\in A$). Consider an ideal $P$ of $R$ such that $P\cap A=\emptyset$, and $P$ is maxiimal with this property (that is, $P'\cap A\neq\emptyset$ whenever $P'\supsetneq P$ is an ideal of $R$). Prove that $P$ is a prime ideal of $R$.

(b) Recall that
$$
\mathfrak{N}(R) = \{ r\in R : r^n=0 \text{ for some } n\in\Z^+\}
$$
is an ideal of $R$, called the nilradical of $R$. (Do not prove that $\mathfrak{N}(R)$ is an ideal!). Prove that the following are equivalent:

(i) $R$ has exactly one prime ideal.

(ii) Every element of $R$ is either nilpotent (that is, an element of $\mathfrak{N}(R)$) or a unit.

(iii) $R/\mathfrak{N}(R)$ is a field.

#proof

::

::ProblemBlock{number=5}
#problem
Recall that the ring $\Z[i]$ of Gaussian integers has a Euclidean norm.

(a) Prove that for every ideal $I\neq 0$ of $\Z[i]$, the quotient $\Z[i]/I$ is a finite ring.

(b) Identify what is $\Z[i]/(1+i)$.

#proof

::

::ProblemBlock{number=6}
#problem
Assume $n$ is a squarefree integer, i.e. $n$ is a product of distinct primes. Prove that the primitive $n$-th roots of unity constitute a basis of the cyclotomic field $\Q(\zeta_n)$ over $\Q$. (Here "basis" is meant in the sense of vector spaces.)

#proof

::
::ProblemBlock{number=7}
#problem
Calculate the number of primitive elements of $\F_{27}$ over $\F_3$. Recall that if $K/F$ is a field extension then $\alpha\in K$ is called a primitive element of $K$ over $F$ if and only if $K=F(\alpha)$.

#proof

::

::ProblemBlock{number=8}
#problem
Let $K/F$ be a Galois algebraic extension with not proper intermediate fields. Prove that $[K:F]$ is prime.

#proof

::

::ProblemBlock{number=9}
#problem
Let $V$ be a vector space over the field $\Q$ of rational numbers of dimension at most $p-2$ where $p$ is a prime. Let $T$ be a linear operator on $V$ such that $T^p=I$. Show that $T=I$.

#proof

::

::ProblemBlock{number=10}
#problem
Consider $n\times n$ matrices $A$, $B$ over $\C$ such that the following are satisfied:

(i) $A$, $B$ are nilpotent with the same nilpotency index (recall the nilpotency index of a matrix $X$ is the smallest number $k$ such that $X^k=0$).

(ii) $rank(A)=rank(B)$

(iii) $rank(A^2)=rank(B^2)$

Prove the following:

(a) If $n>9$ then $A$, $B$ may be non-similar.

(b) If $n\leq 9$ then $A$, $B$ are similar.

#proof

::