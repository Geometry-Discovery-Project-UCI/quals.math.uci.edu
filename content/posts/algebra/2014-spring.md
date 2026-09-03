# 2014 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
(a) Is $\mathbb Z/30\mathbb Z\times\mathbb Z/48\mathbb Z$ isomorphic to $\mathbb Z/24\mathbb Z\times\mathbb Z/60\mathbb Z$?

(b) Let $N=561$ and let $b\in\mathbb Z$ satisfy $\gcd(b,N)=1$. Prove that
$$
b^{N-1}\equiv1\pmod N.
$$

#proof
(a) No. The exponent of the first group is
$$
\operatorname{lcm}(30,48)=240,
$$
whereas the exponent of the second is
$$
\operatorname{lcm}(24,60)=120.
$$
The exponent is an isomorphism invariant, so the groups are not isomorphic.

(b) Factor
$$
561=3\cdot11\cdot17.
$$
Because $b$ is relatively prime to $561$, Fermat's little theorem applies modulo each of these primes. Moreover,
$$
2\mid560,qquad10\mid560,qquad16\mid560.
$$
Thus
$$
b^{560}\equiv1\pmod3,
\qquad b^{560}\equiv1\pmod{11},
\qquad b^{560}\equiv1\pmod{17}.
$$
The three primes are pairwise relatively prime, so the Chinese remainder theorem gives
$$
b^{560}\equiv1\pmod{561}.
$$
::

::ProblemBlock{number=2}
#problem
Show that
$$
\mathbb Q\bigl(\sqrt{2+\sqrt2}\bigr)
$$
is a cyclic quartic extension of $\mathbb Q$.

#proof
Let
$$
\alpha=\sqrt{2+\sqrt2}.
$$
Then $\sqrt2=\alpha^2-2$, and therefore
$$
(\alpha^2-2)^2=2.
$$
Thus $\alpha$ is a root of
$$
f(x)=x^4-4x^2+2.
$$
This polynomial is Eisenstein at $2$, so it is irreducible and
$$
[\mathbb Q(\alpha):\mathbb Q]=4.
$$

Put $\beta=\sqrt{2-\sqrt2}$. Since
$$
\alpha\beta=\sqrt{(2+\sqrt2)(2-\sqrt2)}=\sqrt2,
$$
we have $\beta=\sqrt2/\alpha\in\mathbb Q(\alpha)$. Hence all four roots
$$
\pm\alpha,\quad\pm\beta
$$
of $f$ lie in $\mathbb Q(\alpha)$, so the extension is Galois.

There is an automorphism $\sigma$ with $\sigma(\alpha)=\beta$. It sends
$$
\sqrt2=\alpha^2-2
$$
to $-\sqrt2$, and consequently
$$
\sigma(\beta)=\sigma(\sqrt2/\alpha)=-\sqrt2/\beta=-\alpha.
$$
Thus
$$
\alpha\mapsto\beta\mapsto-\alpha\mapsto-\beta\mapsto\alpha,
$$
so $\sigma$ has order $4$. The Galois group has order $4$ and contains an element of order $4$, hence it is cyclic.
::

::ProblemBlock{number=3}
#problem
A commutative ring with identity $R$ is local if it has a unique maximal ideal $M$. Prove that
$$
R^*=R\setminus M.
$$

#proof
A unit cannot belong to any proper ideal, so $R^*\subseteq R\setminus M$.

Conversely, suppose $r$ is not a unit. Then the principal ideal $(r)$ is proper and is contained in some maximal ideal. Since $R$ has only one maximal ideal, $(r)\subseteq M$, so $r\in M$. Thus every element outside $M$ is a unit, proving
$$
R^*=R\setminus M.
$$
::

::ProblemBlock{number=4}
#problem
Let $F$ be a field. Prove that $F[x^2,x^3]$ is not a UFD.

#proof
The units of $F[x^2,x^3]$ are precisely the nonzero constants. Both $x^2$ and $x^3$ are irreducible in this ring. Indeed, every nonconstant element has lowest nonzero exponent at least $2$. A factorization of $x^2$ into two nonunits would therefore have lowest exponent at least $4$, and a factorization of $x^3$ into two nonunits would have lowest exponent at least $4$, both impossible.

Now
$$
x^6=(x^2)^3=(x^3)^2.
$$
These are factorizations into irreducibles. The elements $x^2$ and $x^3$ are not associates because their quotient $x$ is not a unit and does not even belong to the ring. Hence factorization is not unique, so $F[x^2,x^3]$ is not a UFD.
::

::ProblemBlock{number=5}
#problem
Prove that no group of order $351$ is simple.

#proof
Since $351=3^3\cdot13$, the number of Sylow $13$-subgroups satisfies
$$
n_{13}\equiv1\pmod{13},
\qquad n_{13}\mid27.
$$
Thus $n_{13}=1$ or $27$. If it is $1$, the Sylow $13$-subgroup is normal.

If $n_{13}=27$, the distinct Sylow $13$-subgroups contribute
$$
27(13-1)=324
$$
nonidentity elements. Exactly $27$ elements remain, including the identity. Every Sylow $3$-subgroup has order $27$ and contains no nonidentity element of order $13$, so it must equal this remaining set. It is therefore unique and normal. In either case the group is not simple.
::

::ProblemBlock{number=6}
#problem
Decide whether the following statement is true: if $H\trianglelefteq K$ and $K\trianglelefteq G$, then $H\trianglelefteq G$.

#proof
The statement is false. Let
$$
G=A_4,
\qquad K=\{1,(12)(34),(13)(24),(14)(23)\}\cong C_2\times C_2.
$$
The subgroup $K$ is normal in $A_4$. Let
$$
H=\langle(12)(34)\rangle.
$$
Since $K$ is abelian, $H\trianglelefteq K$. But conjugation by a $3$-cycle permutes the three order-$2$ subgroups of $K$, so $H$ is not normal in $A_4$. Normality is therefore not transitive.
::

::ProblemBlock{number=7}
#problem
Let $R$ be a commutative ring with identity and let $M$ be an ideal. Prove that $M$ is maximal if and only if $R/M$ is a field.

#proof
Ideals of $R/M$ correspond to ideals of $R$ containing $M$, via
$$
J\longmapsto J/M.
$$
If $M$ is maximal, the only ideals containing it are $M$ and $R$, so the quotient has only the ideals $0$ and $R/M$. A nonzero commutative ring with identity having no nontrivial ideals is a field: for $0\ne\overline r$, the ideal $(\overline r)$ is nonzero and hence is the whole ring, so $\overline r$ is invertible.

Conversely, if $R/M$ is a field, it has no proper nonzero ideals. Therefore there is no ideal strictly between $M$ and $R$, so $M$ is maximal.
::

::ProblemBlock{number=8}
#problem
Prove that two $3\times3$ matrices over a field are similar if and only if they have the same characteristic and minimal polynomials.

#proof
Similar matrices plainly have the same characteristic and minimal polynomials.

Conversely, similarity classes over a field are classified by invariant factors
$$
d_1\mid d_2\mid\cdots\mid d_r.
$$
Their product is the characteristic polynomial, and the largest one is the minimal polynomial. In dimension $3$, these two polynomials determine the whole list:

- If the minimal polynomial has degree $3$, it is the sole invariant factor and equals the characteristic polynomial.

- If it has degree $2$, there are exactly two invariant factors. The larger is the minimal polynomial $m$, and the other is the uniquely determined linear polynomial $c/m$, where $c$ is the characteristic polynomial.

- If it has degree $1$, the matrix is scalar, and its similarity class is uniquely determined.

Thus equal characteristic and minimal polynomials give equal invariant factors and hence similar matrices.
::

::ProblemBlock{number=9}
#problem
Define each of the following: group, ring, integral domain, module, and module homomorphism.

#proof
(a) A group is a set $G$ with an associative binary operation, an identity element, and an inverse for every element.

(b) A ring is an abelian group under addition equipped with an associative multiplication that distributes over addition. Under the convention used here, it also has a multiplicative identity.

(c) An integral domain is a nonzero commutative ring with identity and no zero divisors.

(d) An $R$-module is an abelian group $M$ with a scalar multiplication $R\times M\to M$ satisfying the usual distributive, associative, and identity axioms.

(e) An $R$-module homomorphism $\phi:M\to N$ is an additive map satisfying
$$
\phi(rm)=r\phi(m)
$$
for all $r\in R$ and $m\in M$.
::

::ProblemBlock{number=10}
#problem
Prove that every finite field is perfect.

#proof
Let $F$ be a finite field of characteristic $p$. The Frobenius map
$$
\operatorname{Fr}:F\longrightarrow F,
\qquad x\longmapsto x^p,
$$
is injective because $x^p=y^p$ implies $(x-y)^p=0$, hence $x=y$. An injective map from a finite set to itself is surjective. Therefore every element of $F$ is a $p$th power.

For a field of characteristic $p$, surjectivity of Frobenius is equivalent to perfection: an irreducible polynomial with zero derivative would be a polynomial in $x^p$, and taking $p$th roots of its coefficients would make it a $p$th power, contradicting irreducibility. Thus every irreducible polynomial over $F$ is separable, so every finite field is perfect.
::
