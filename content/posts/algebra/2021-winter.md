# 2021 Winter Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $G$ be finite and $H\triangleleft G$. Prove that

$$
n_p(G/H)\leq n_p(G).
$$

#proof
If $P$ is a Sylow $p$-subgroup of $G$, then $P\cap H$ is a Sylow $p$-subgroup of $H$ because $H$ is normal. Hence

$$
PH/H\cong P/(P\cap H)
$$

has order equal to the full $p$-part of $|G/H|$, so it is a Sylow $p$-subgroup of $G/H$.

Conversely, let $Q/H$ be a Sylow $p$-subgroup of $G/H$. Choose a Sylow $p$-subgroup $P$ of the inverse image $Q$ and then a Sylow $p$-subgroup of $G$ containing $P$. Its image in $G/H$ is $Q/H$. Thus the map

$$
\operatorname{Syl}_p(G)\to\operatorname{Syl}_p(G/H),
\qquad
P\mapsto PH/H,
$$

is surjective. The cardinality of the target is therefore at most that of the source.
::

::ProblemBlock{number=2}
#problem
Can $S_5$ act transitively on a set of cardinality $14$?

#proof
No. If a finite group acts transitively on a set of size $14$, orbit-stabilizer gives

$$
|S_5|=14\,|\operatorname{Stab}(x)|.
$$

But $|S_5|=120$ is not divisible by $14$. Equivalently, $S_5$ has no subgroup of index $14$. Hence no such transitive action exists.
::

::ProblemBlock{number=3}
#problem
Let $R$ be a PID and suppose $f=gh$, where $g$ and $h$ are relatively prime. Prove that

$$
R/(f)\cong R/(g)\times R/(h).
$$

#proof
Relative primality means $(g)+(h)=R$. The Chinese remainder theorem gives

$$
R/((g)\cap(h))\cong R/(g)\times R/(h).
$$

For comaximal ideals, the intersection equals the product, so

$$
(g)\cap(h)=(g)(h)=(gh)=(f).
$$

Substitution gives the desired isomorphism.
::

::ProblemBlock{number=4}
#problem
Let $R$ be an integral domain with fraction field $F$. Suppose a monic $p(x)\in R[x]$ factors as

$$
p(x)=q(x)r(x)
$$

in $F[x]$, where $q,r$ are monic of smaller positive degree and at least one is not in $R[x]$. Prove that $R$ is not a UFD.

#proof
Assume toward a contradiction that $R$ is a UFD. A monic polynomial is primitive. Gauss's lemma for a UFD says that a factorization of a primitive polynomial in its fraction field can be rescaled to a factorization in $R[x]$ by primitive polynomials. Because $p,q,r$ are monic, their leading coefficients are already $1$. The rescaling units must therefore cancel without changing the monic factors, and Gauss's lemma implies

$$
q(x),r(x)\in R[x].
$$

This contradicts the hypothesis that at least one factor is not in $R[x]$. Therefore $R$ cannot be a UFD.
::

::ProblemBlock{number=5}
#problem
Suppose

$$
0\longrightarrow L\xrightarrow{\alpha}M\xrightarrow{\beta}N\longrightarrow0
$$

is exact and $e\in R$ satisfies $e^2=e$. Prove that

$$
0\longrightarrow eL\xrightarrow{\alpha}eM\xrightarrow{\beta}eN\longrightarrow0
$$

is exact.

#proof
The maps restrict because $\alpha(el)=e\alpha(l)$ and $\beta(em)=e\beta(m)$. The restricted $\alpha$ is injective because the original map is injective.

If $en\in eN$, choose $m\in M$ with $\beta(m)=n$. Then

$$
\beta(em)=e\beta(m)=en,
$$

so the restricted $\beta$ is surjective.

Finally, suppose $em\in eM$ and $\beta(em)=0$. Exactness of the original sequence gives $l\in L$ with $em=\alpha(l)$. Using $e^2=e$,

$$
em=e(em)=e\alpha(l)=\alpha(el).
$$

Thus the kernel of the restricted $\beta$ equals the image of the restricted $\alpha$, proving exactness.
::

::ProblemBlock{number=6}
#problem
Let $R$ be an integral domain and let $I$ be a principal ideal, viewed as an $R$-module. Prove that the only torsion element of

$$
I\otimes_R I
$$

is zero.

#proof
If $I=(0)$, the assertion is immediate. Otherwise write $I=(a)$ with $a\neq0$. Since $R$ is a domain, multiplication by $a$ gives an $R$-module isomorphism

$$
R\longrightarrow I,
\qquad
r\mapsto ra.
$$

Consequently

$$
I\otimes_R I\cong R\otimes_R R\cong R.
$$

The module $R$ over itself is torsion-free because $R$ is an integral domain. Therefore $I\otimes_R I$ has no nonzero torsion.
::

::ProblemBlock{number=7}
#problem
Find $p(x)\in\mathbb F_2[x]$ such that

$$
\mathbb F_2[x]/(p(x))\cong\mathbb F_8,
$$

and prove the claim.

#proof
Take

$$
p(x)=x^3+x+1.
$$

It has no root in $\mathbb F_2$, since $p(0)=1$ and $p(1)=1$. A cubic over a field is reducible if and only if it has a root, so $p$ is irreducible. Therefore the quotient is a field, and as a three-dimensional vector space over $\mathbb F_2$ it has

$$
2^3=8
$$

elements. The finite field of order $8$ is unique up to isomorphism, giving the result.
::

::ProblemBlock{number=8}
#problem
Let $F\subseteq\mathbb R$, let $a\in F$, let $n$ be odd, and let

$$
K=F(\sqrt[n]{a})
$$

using the real $n$th root. If $L/F$ is Galois and $L\subseteq K$, prove that $L=F$.

#proof
Put $b=\sqrt[n]{a}$ and let $F'=F(\mu_n)$, where $\mu_n$ is the group of $n$th roots of unity. The extension

$$
K'=F'(b)/F'
$$

is cyclic of order dividing the odd integer $n$. Let $E=LF'$. Base change of the Galois extension $L/F$ shows that $E/F'$ is Galois, and it is a subextension of $K'/F'$. Hence

$$
Q=\operatorname{Gal}(E/F')
$$

has odd order.

Complex conjugation $c$ acts on the cyclic radical group by inversion: an automorphism sending $b$ to $\zeta b$ is carried by conjugation to the automorphism sending $b$ to $\zeta^{-1}b$. Thus $c\tau c^{-1}=\tau^{-1}$ for $\tau\in Q$. On the other hand, $L\subseteq\mathbb R$, so $c$ fixes $L$ pointwise. Since $E=LF'$, this implies that conjugation by $c$ acts trivially on $Q$. Therefore every $\tau\in Q$ satisfies

$$
\tau=\tau^{-1}.
$$

An odd-order group has no nonidentity element of order $2$, so $Q$ is trivial. Hence $LF'=F'$, so $L\subseteq F'$. The standard radical-intersection lemma for a real pure extension of odd exponent gives

$$
F(b)\cap F(\mu_n)=F.
$$

Indeed, the same conjugation-and-inversion argument applied to the normal closure shows that every element of the intersection is fixed by the radical group and hence lies in $F$. Since $L$ lies in both fields, it follows that $L=F$.
::

::ProblemBlock{number=9}
#problem
Let $A\in M_n(\mathbb C)$ have no zero eigenvalue. Prove that $A$ has a square root in $M_n(\mathbb C)$.

#proof
Put $A$ in Jordan form. It is enough to construct a square root of each Jordan block

$$
J=\lambda I+N,
$$

where $\lambda\neq0$ and $N$ is nilpotent. Choose $\mu\in\mathbb C$ with $\mu^2=\lambda$. If the block has size $s$, define

$$
B=\mu\sum_{k=0}^{s-1}
\binom{1/2}{k}\left(\frac N\lambda\right)^k.
$$

Because $N^s=0$, this is a finite sum. The formal binomial identity $(1+z)^{1/2}{}^2=1+z$, truncated modulo $z^s$, gives

$$
B^2=\lambda I+N=J.
$$

Taking the block diagonal sum of these square roots and conjugating back from Jordan form produces a matrix $B$ with $B^2=A$.
::

::ProblemBlock{number=10}
#problem
Find a nonsingular, nonscalar matrix $A\in M_n(\mathbb F_5)$ of the smallest possible dimension such that $A^2+2I$ is its own inverse.

#proof
Dimension $1$ is impossible because every $1\times1$ matrix is scalar. In dimension $2$, take

$$
A=\begin{pmatrix}0&2\\1&0\end{pmatrix}.
$$

Then $A$ is nonscalar and

$$
A^2=2I.
$$

Thus

$$
A^2+2I=4I=-I
$$

in characteristic $5$, and $(-I)^{-1}=-I$. Also $\det A=-2=3\neq0$, so $A$ is nonsingular. Therefore the smallest possible dimension is $n=2$.
::
