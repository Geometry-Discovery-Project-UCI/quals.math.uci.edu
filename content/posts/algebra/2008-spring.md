# 2008 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Compute the following.

(a) If $G$ is cyclic of order $20$, how many automorphisms does it have?

(b) How many homomorphisms are there from $\mathbb Z$ to $S_n$?

(c) If $g$ has order $25$, what is the order of $g^{10}$?

#proof
(a) An automorphism of a cyclic group is determined by the image of a generator, which may be any generator. Thus the number is
$$
\varphi(20)=20\left(1-\frac12\right)\left(1-\frac15\right)=8.
$$

(b) A homomorphism $\mathbb Z\to S_n$ is uniquely determined by the arbitrary image of $1$. Hence there are
$$
|S_n|=n!
$$
homomorphisms.

(c) In general, $|g^k|=|g|/\gcd(|g|,k)$. Therefore
$$
|g^{10}|=\frac{25}{\gcd(25,10)}=5.
$$
::

::ProblemBlock{number=2}
#problem
Show that if $|G|=2pq$, where $p,q$ are odd primes not necessarily distinct, then $G$ is not simple.

#proof
If $p=q$, then the number of Sylow $p$-subgroups divides $2$ and is congruent to $1$ modulo the odd prime $p$. It is therefore $1$, so the Sylow $p$-subgroup is normal.

Now suppose $p<q$. The number $n_q$ divides $2p$ and is congruent to $1$ modulo $q$. If $n_q=1$, we are done. Otherwise $n_q=2p$. Distinct Sylow $q$-subgroups intersect trivially, so they contribute
$$
2p(q-1)
$$
nonidentity elements. Thus only $2p-1$ other nonidentity elements remain.

If the Sylow $p$-subgroup were not normal, then $n_p\ge p+1$, because $n_p\equiv1\pmod p$. Its distinct conjugates would contribute at least
$$
(p+1)(p-1)=p^2-1
$$
nonidentity elements. But for odd $p$,
$$
p^2-1>2p-1,
$$
a contradiction. Hence $n_p=1$. In every case $G$ has a nontrivial proper normal subgroup.
::

::ProblemBlock{number=3}
#problem
Factor $x^4+1$ and find its splitting field when the ground field is:

(a) $\mathbb Q$;

(b) $\mathbb F_2$;

(c) $\mathbb R$.

#proof
(a) Over $\mathbb Q$, $x^4+1=\Phi_8(x)$ is irreducible. Its roots are the primitive eighth roots of unity, and its splitting field is
$$
\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2),
$$
of degree $4$.

(b) In characteristic $2$,
$$
x^4+1=x^4-1=(x+1)^4.
$$
It already splits over $\mathbb F_2$, though with a repeated root.

(c) Over $\mathbb R$,
$$
x^4+1=(x^2+\sqrt2x+1)(x^2-\sqrt2x+1).
$$
Both quadratics have nonreal roots, and the splitting field over $\mathbb R$ is $\mathbb C$.
::

::ProblemBlock{number=4}
#problem
In $R=\mathbb Z[X,Y]$, determine whether each ideal is prime and whether it is maximal:
$$
(X,Y),\quad(3X,Y),\quad(X^2+1,Y),\quad(5,X^2+1,Y).
$$

#proof
For $(X,Y)$, the quotient is $\mathbb Z$, a domain but not a field. Hence the ideal is prime but not maximal.

For $(3X,Y)$, the quotient is
$$
\mathbb Z[X]/(3X),
$$
which has the nonzero zero divisors $3$ and $X$. Hence the ideal is neither prime nor maximal.

For $(X^2+1,Y)$, the quotient is
$$
\mathbb Z[X]/(X^2+1)\cong\mathbb Z[i],
$$
a domain but not a field. Thus the ideal is prime but not maximal.

For $(5,X^2+1,Y)$, the quotient is
$$
\mathbb F_5[X]/(X^2+1).
$$
Since $X^2+1=(X-2)(X+2)$ over $\mathbb F_5$, the quotient is not a domain. Hence the ideal is neither prime nor maximal.
::

::ProblemBlock{number=5}
#problem
Let $K$ be the splitting field of $X^{49}-1$ over $\mathbb Q$. Determine the number of fields $F$ with
$$
\mathbb Q\subseteq F\subseteq K.
$$

#proof
The splitting field is
$$
K=\mathbb Q(\zeta_{49}).
$$
Its Galois group is
$$
(\mathbb Z/49\mathbb Z)^*,
$$
which is cyclic of order
$$
\varphi(49)=42.
$$
A cyclic group has exactly one subgroup for every divisor of its order. The positive divisors of $42$ are
$$
1,2,3,6,7,14,21,42,
$$
so there are eight subgroups. By Galois correspondence, there are exactly eight intermediate fields, including both endpoints.
::

::ProblemBlock{number=6}
#problem
Suppose $G$ is finite and $H\ne G$ is a subgroup containing every proper subgroup $K\ne G$ of $G$.

(a) Prove that $|G|$ is a prime power.

(b) Prove that if $G$ is abelian, then $G$ is cyclic.

#proof
(a) If two distinct primes $p,q$ divided $|G|$, every Sylow subgroup would be proper and hence contained in $H$. Thus $|H|$ would be divisible by the full prime-power part of $|G|$ for every prime divisor. It would follow that $|G|\mid|H|$, impossible because $H$ is proper. Therefore only one prime divides $|G|$, so $|G|$ is a prime power.

(b) In fact, the conclusion follows without assuming commutativity. Choose $g\in G\setminus H$. If $\langle g\rangle$ were proper, the hypothesis would force $\langle g\rangle\subseteq H$, contradicting $g\notin H$. Hence $\langle g\rangle=G$, so $G$ is cyclic.
::

::ProblemBlock{number=7}
#problem
Find all prime ideals of $\mathbb Z\times\mathbb Z$.

#proof
Prime ideals in a product $R\times S$ are exactly
$$
P\times S
\quad\text{or}\quad
R\times Q,
$$
where $P$ and $Q$ are prime in the corresponding factors. The prime ideals of $\mathbb Z$ are $(0)$ and $(p)$ for rational primes $p$. Hence the complete list is
$$
(0)\times\mathbb Z,
\qquad(p)\times\mathbb Z,
\qquad\mathbb Z\times(0),
\qquad\mathbb Z\times(p),
$$
where $p$ ranges over all rational primes.
::

::ProblemBlock{number=8}
#problem
Let $S$ be the set of $6\times6$ rational matrices whose characteristic polynomial is $x^6-x^2$ and whose minimal polynomial is $x^5-x$.

(a) Show that all matrices in $S$ are similar.

(b) Give an example.

(c) Find the nullity of $(A^2+I)^2$ for $A\in S$.

#proof
Factor
$$
x^6-x^2=x^2(x-1)(x+1)(x^2+1)
$$
and
$$
x^5-x=x(x-1)(x+1)(x^2+1).
$$
The minimal polynomial is square-free. Therefore every primary component is semisimple. The characteristic polynomial forces two one-dimensional zero blocks and one block for each of $x-1$, $x+1$, and $x^2+1$. Thus the rational canonical data are unique, proving (a).

(b) One representative is
$$
A=\operatorname{diag}\left(0,0,1,-1,
\begin{bmatrix}0&-1\\1&0\end{bmatrix}\right).
$$

(c) On the $x^2+1$ primary component, $A^2+I=0$, while on the $0$, $1$, and $-1$ primary components it is invertible. The $x^2+1$ component has dimension $2$, so
$$
\dim\ker(A^2+I)^2=2.
$$
::

::ProblemBlock{number=9}
#problem
Show that the quaternion group $Q_8$ is not a semidirect product of two proper subgroups.

#proof
Every nontrivial subgroup of $Q_8$ contains its unique element of order $2$, namely $-1$. Thus any two nontrivial subgroups have nontrivial intersection.

In an internal semidirect product $Q_8=HN$ with $H,N$ proper, one factor is normal and one must have
$$
H\cap N=1.
$$
This is impossible if both factors are nontrivial. If one factor is trivial, the other would have to be all of $Q_8$, contrary to properness. Hence no such semidirect decomposition exists.
::

::ProblemBlock{number=10}
#problem
Let $F$ be algebraically closed. Find all monic separable polynomials $f(x)\in F[x]$ whose zero set is closed under multiplication.

#proof
Let $S$ be the finite set of roots. If $S\cap F^*$ is nonempty, it is a finite multiplicatively closed subset of a group. Repeated powers show that it contains $1$ and inverses, so it is a finite subgroup of $F^*$. Every finite subgroup of a field's multiplicative group is cyclic, so
$$
S\cap F^*=\mu_n(F)
$$
for some $n$ not divisible by $\operatorname{char}F$.

The set may include or omit $0$. Hence the nonconstant possibilities are
$$
x,
\qquad x^n-1,
\qquad x(x^n-1),
$$
with $n\ge1$ and, in positive characteristic, $\operatorname{char}F\nmid n$. Conversely, all these polynomials are monic and separable and have multiplicatively closed root sets. If constant polynomials are included, $f=1$ is the additional case.
::
