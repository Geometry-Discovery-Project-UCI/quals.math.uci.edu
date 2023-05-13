---
draft: true
---

# 2021 Winter Algebra

::ProblemBlock{number=1}
#problem
Assume $G$ is a finite group and $H$ is a normal subgroup of $G$. Recall that $n_p(G)$ is the number of Sylow $p$-subgroups of $G$. Prove that $n_p(G/H)\leq n_p(G)$.

#proof

::

::ProblemBlock{number=2}
#problem
Decide: Is it possible for the symmetric group $S_5$ to act transitively on a set of cardinality 14? Provide a proof to support your claim.

#proof

::

::ProblemBlock{number=3}
#problem
Let $R$ be a principal ideal domain. Suppose that $f,g,h\in R$ are such that $f=gh$ which $g$ and $h$ are relatively prime. Prove that
$$
R/(f)\cong R/(g)\times R/(h)
$$

#proof

::

::ProblemBlock{number=4}
#problem
Consider an integral domain $R$ and its corresponding field of fractions $F$. Assume $p(x)\in R[x]$ is a monic polynomial and that it is possible to write $p(x)$ as a product
$$
p(x) = q(x)r(x)
$$
where $q(x),r(x)\in F[x]$ are monic polynomials of degree smaller that $\deg(p(x))$ and at least one of $q(x)$, $r(x)$ is not in $R[x]$. Prove that $R$ is not a unique factorization domain.

#proof

::

::ProblemBlock{number=5}
#problem
Let $R$ be a commutative ring and let $e\in R$. For an $R$-module $M$, denote $eM = \{em : m\in M \}$, which is a submodule of $M$. If
$$
0 \to L \xrightarrow{\alpha} M \xrightarrow{\beta} N \to 0
$$
is an exact sequence of $R$-modules and $e=e^2$, prove that
$$
0 \to eL \xrightarrow{\alpha} eM \xrightarrow{\beta} eN \to 0
$$
is also an exact sequence.

#proof

::

::ProblemBlock{number=6}
#problem
Consider an integral domain $R$ and a principal ideal $I$ of $R$, whihc is viewed as an $R$-module. Let $M$ be the $R$-module $I\otimes_R I$. Prove that the only torsion element of $M$ is zero.

#proof

::
::ProblemBlock{number=7}
#problem
Recall that $\F_q$ denote the finite field with $q$ elements. Find a polynomial $p(x)\in\F_2[x]$ such that $\F_2[x]/(p(x))\cong \F_8$. Prove that your polynomial yields the desired isomorphism.

#proof

::

::ProblemBlock{number=8}
#problem
Consdier a subfield $F$ of the field of real numbers $\R$. Let $a\in F$ and $K=F(\sqrt[n]{a})$ where $\sqrt[n]{a}\in\R$ is an $n$-th root of $a$ in $\R$ and $n$ is odd. Assume $L$ is a Galoid extension of $F$ such that $L\subseteq K$. Prove that $L=F$.

__Remark__: The following theorems from the course may be useful:

(A) Assume $F$ is a field of characteristic 0 which contains all $n$-th roots of unity. Then the followng holds: If $a\in F$ and $b$ is an $n$-th root of $a$ then the extension $F(b)/F$ is cyclic of order dividing $n$.

(B) Assume $K/F$ is a Galois extension of fields and $F'/F$ is any finite extension of fields. Then $KF'/F'$ is a Galois extension and
$$
Gal(KF'/F')\cong Gal(K/K\cap F')
$$

#proof

::

::ProblemBlock{number=9}
#problem
Assume $A\in M_n(\C)$ is a matrix over the complex numbers such that all eigenvalues of $A$ are non-zero. Prove that $A$ has a square root in $M_n(\C)$, that is, there is a matrix $B\in M_n(\C)$ such that $A=B^2$.

__Remark__: It may be helpful to examine the Jordan form of the square of a Jordan cell.

#proof

::

::ProblemBlock{number=10}
#problem
Find a non-singular matrix $A\in M_n(\F_5)$ of smallest possible dimension $n$ such that $A^2+2I$ is its own inverse and $A$ is not a scalar multiple of $I$.

#proof

::