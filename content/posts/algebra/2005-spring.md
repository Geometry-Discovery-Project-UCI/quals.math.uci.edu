# 2005 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $\mathbb C^*$ be the multiplicative group of nonzero complex numbers, and let $H_n$ be its subgroup of $n$th roots of unity. Give an explicit isomorphism
$$
\mathbb C^*/H_n\cong\mathbb C^*.
$$

#proof
Define
$$
\Phi:\mathbb C^*/H_n\longrightarrow\mathbb C^*,
\qquad
\Phi(zH_n)=z^n.
$$
If $zH_n=wH_n$, then $z/w\in H_n$, so $(z/w)^n=1$ and $z^n=w^n$; hence the map is well-defined. It is a homomorphism and is injective because $z^n=1$ exactly when $z\in H_n$. It is surjective because every nonzero complex number has an $n$th root. Thus $\Phi$ is an isomorphism.
::

::ProblemBlock{number=2}
#problem
Suppose $G$ is a group of order $n$ and $F$ is a field. Prove that $G$ is isomorphic to a subgroup of $GL_n(F)$.

#proof
Let $V$ be the $n$-dimensional $F$-vector space with basis $\{e_g:g\in G\}$. For $h\in G$, define
$$
\rho(h)e_g=e_{hg}
$$
and extend linearly. Each $\rho(h)$ permutes the basis, so $\rho(h)\in GL(V)\cong GL_n(F)$, and
$$
\rho(h_1h_2)=\rho(h_1)\rho(h_2).
$$
If $\rho(h)$ is the identity, then $e_h=\rho(h)e_1=e_1$, so $h=1$. Thus $\rho$ is injective, giving the required embedding. This is the left regular representation.
::

::ProblemBlock{number=3}
#problem
Let $\mathbb F_p$ denote the field with $p$ elements. Decide whether each ring is a field.

(a) $\mathbb F_2[x]/(x^3+x+1)$.

(b) $\mathbb F_3[x]/(x^3+x+1)$.

#proof
A quotient $F[x]/(f)$ is a field exactly when $f$ is irreducible over $F$. A cubic is reducible exactly when it has a root.

(a) At the two elements of $\mathbb F_2$,
$$
f(0)=1,
\qquad
f(1)=1+1+1=1.
$$
Thus the cubic has no root and is irreducible. The quotient is a field, in fact $\mathbb F_8$.

(b) In $\mathbb F_3$,
$$
f(1)=1+1+1=0.
$$
Thus $x-1$ divides the polynomial, so the quotient is not a field.
::

::ProblemBlock{number=4}
#problem
Let $R=\mathbb Z[\sqrt{-5}]$.

(a) Show that $R$ is not a UFD.

(b) Factor the principal ideal $(6)$ as a product of prime ideals of $R$.

#proof
The norm is
$$
N(a+b\sqrt{-5})=a^2+5b^2.
$$
In $R$,
$$
6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5}).
$$
There is no element of norm $2$ or $3$, as is immediate from $a^2+5b^2=2$ or $3$. Hence $2$ and $3$ are irreducible. The elements $1\pm\sqrt{-5}$ have norm $6$ and cannot factor into nonunits, since such a factorization would require a factor of norm $2$ or $3$. Thus they too are irreducible. The two factorizations are not equivalent up to units and order; the only units are $\pm1$. Therefore $R$ is not a UFD.

For the ideal factorization, put
$$
\mathfrak p_2=(2,1+\sqrt{-5}),
$$
$$
\mathfrak p_3=(3,1+\sqrt{-5}),
\qquad
\overline{\mathfrak p}_3=(3,1-\sqrt{-5}).
$$
The quotients by each of these ideals are isomorphic to $\mathbb F_2$ or $\mathbb F_3$, so the ideals are maximal and hence prime. The prime $2$ ramifies and $3$ splits:
$$
(2)=\mathfrak p_2^2,
\qquad
(3)=\mathfrak p_3\overline{\mathfrak p}_3.
$$
These identities can be checked by multiplying the displayed ideals, or by factoring $x^2+5$ modulo $2$ and $3$. Consequently,
$$
(6)=\mathfrak p_2^2\mathfrak p_3\overline{\mathfrak p}_3.
$$
::

::ProblemBlock{number=5}
#problem
Classify the groups of order $12$ up to isomorphism.

#proof
There are exactly five isomorphism classes. The two abelian groups are
$$
C_{12},
\qquad
C_6\times C_2\cong C_3\times C_2\times C_2.
$$
The three nonabelian groups are
$$
D_{12}=\langle r,s\mid r^6=s^2=1, srs=r^{-1}\rangle,
$$
$$
A_4,
$$
and the dicyclic group
$$
\operatorname{Dic}_3
=\langle a,b\mid a^3=1, b^4=1, b^2\text{ central}, bab^{-1}=a^{-1}\rangle,
$$
equivalently the nontrivial semidirect product $C_3\rtimes C_4$ in which a generator of $C_4$ acts by inversion.

To see completeness, Sylow's theorem gives $n_3=1$ or $4$. If $n_3=4$, conjugation on the four Sylow $3$-subgroups identifies the group with $A_4$. If $n_3=1$, the normal subgroup $C_3$ is acted on by a Sylow $2$-subgroup of order $4$. The Sylow $2$-subgroup is either $C_4$ or $C_2\times C_2$, and the action on $C_3$ is either trivial or has image $C_2=\operatorname{Aut}(C_3)$. These possibilities yield precisely the four groups in the list other than $A_4$ (with the trivial $C_4$ action giving $C_{12}$ and the trivial $V_4$ action giving $C_6\times C_2$). The listed groups are distinguished by commutativity, their numbers of elements of order $2$, and whether their Sylow $3$-subgroup is normal.
::

::ProblemBlock{number=6}
#problem
Let $M$ be a matrix over $\mathbb Q$ with characteristic polynomial
$$
(x+1)^2x^4
$$
and minimal polynomial
$$
(x+1)^2x^2.
$$

(a) Find $\operatorname{tr}(M)$ and $\det(M)$.

(b) How many distinct conjugacy classes of such matrices are there under conjugation by $GL_6(\mathbb Q)$?

(c) Write down a $6\times6$ rational matrix having these polynomials.

#proof
The eigenvalues are $-1$ with algebraic multiplicity $2$ and $0$ with algebraic multiplicity $4$. Hence
$$
\operatorname{tr}(M)=-2,
\qquad
\det(M)=0.
$$

The $(x+1)$-primary component must be one block $J_2(-1)$. On the $x$-primary component, the largest nilpotent block has size $2$, and the partitions of $4$ with largest part exactly $2$ are
$$
2+2\quad\text{and}\quad2+1+1.
$$
Thus there are exactly two conjugacy classes, represented by
$$
J_2(-1)\oplus J_2(0)\oplus J_2(0)
$$
and
$$
J_2(-1)\oplus J_2(0)\oplus[0]\oplus[0].
$$
Either displayed block-diagonal matrix answers part (c).
::

::ProblemBlock{number=7}
#problem
Suppose $p$ is prime and $L/K$ is a field extension of degree $p$.

(a) Prove that if $K=\mathbb Q$, then $L/K$ is separable.

(b) Prove that if $K=\mathbb F_p$, then $L/K$ is separable.

(c) Give an example of a degree-$p$ extension that is not separable.

#proof
(a) Every algebraic extension of a characteristic-zero field is separable. Indeed, an irreducible polynomial in characteristic zero cannot have zero derivative, so it has no repeated roots. Thus $L/\mathbb Q$ is separable.

(b) Every finite field is perfect because its Frobenius map is injective and hence surjective. Therefore every finite algebraic extension of $\mathbb F_p$, including $L$, is separable.

(c) Let
$$
K=\mathbb F_p(t),
\qquad
L=K(\alpha),
\qquad
\alpha^p=t.
$$
The element $t$ is not a $p$th power in $K$, so $x^p-t$ is irreducible and $[L:K]=p$. Its derivative is zero, and over an algebraic closure
$$
x^p-t=(x-\alpha)^p.
$$
Thus $L/K$ is purely inseparable.
::

::ProblemBlock{number=8}
#problem
Let $K$ be the splitting field over $\mathbb Q$ of $x^8-1$.

(a) Find $[K:\mathbb Q]$.

(b) Describe $G=\operatorname{Gal}(K/\mathbb Q)$ both abstractly and as a set of automorphisms.

(c) Find all subgroups of $G$ and the corresponding fixed fields.

#proof
Let $\zeta=\zeta_8=e^{2\pi i/8}$. Then
$$
K=\mathbb Q(\zeta)=\mathbb Q(i,\sqrt2),
\qquad
[K:\mathbb Q]=\varphi(8)=4.
$$
Every automorphism is
$$
\sigma_a(\zeta)=\zeta^a,
\qquad a\in(\mathbb Z/8\mathbb Z)^\times=\{1,3,5,7\}.
$$
Thus
$$
G\cong(\mathbb Z/8\mathbb Z)^\times\cong C_2\times C_2.
$$

The complete subgroup/fixed-field correspondence is
$$
\{1\}\longleftrightarrow K,
$$
$$
\langle\sigma_7\rangle\longleftrightarrow\mathbb Q(\sqrt2),
$$
$$
\langle\sigma_5\rangle\longleftrightarrow\mathbb Q(i),
$$
$$
\langle\sigma_3\rangle\longleftrightarrow\mathbb Q(\sqrt{-2}),
$$
and
$$
G\longleftrightarrow\mathbb Q.
$$
Indeed, $\sigma_7$ is complex conjugation, $\sigma_5$ fixes $i=\zeta^2$, and $\sigma_3$ fixes $\sqrt{-2}=i\sqrt2$.
::

::ProblemBlock{number=9}
#problem
Let $f(x)\in\mathbb Z[x]$ have degree $5$. Consider:

(i) $f$ has no roots in $\mathbb Q$;

(ii) modulo $11$, $f\equiv g_2g_3$, where $g_2,g_3$ are irreducible of degrees $2,3$;

(iii) modulo $17$, $f\equiv h_1h_4$, where $h_1,h_4$ are irreducible of degrees $1,4$.

For each assertion, prove it or give a counterexample:

(a) (i) implies that $f$ is irreducible over $\mathbb Q$.

(b) (ii) implies irreducibility.

(c) (iii) implies irreducibility.

(d) (i) and (ii) imply irreducibility.

(e) (i) and (iii) imply irreducibility.

(f) (ii) and (iii) imply irreducibility.

#proof
(a) False. A product of an irreducible quadratic and an irreducible cubic over $\mathbb Q$ is reducible but can have no rational root. For example,
$$
(x^2+1)(x^3+x+4)
$$
has no rational root but is reducible.

(b) False. The factorization pattern $2+3$ is itself compatible with a rational factorization of degrees $2$ and $3$. The same example works: modulo $11$, both $x^2+1$ and $x^3+x+4$ are irreducible, while their product is reducible over $\mathbb Q$.

(c) False. Choose any monic irreducible quartic $h_4\in\mathbb F_{17}[x]$, lift it to a monic $H_4\in\mathbb Z[x]$, and take $f=xH_4$. Then $f$ is reducible over $\mathbb Q$ and has the required $1+4$ factorization modulo $17$.

(d) False. Again,
$$
f=(x^2+1)(x^3+x+4)
$$
has no rational root, and its two factors remain irreducible modulo $11$, but $f$ is reducible over $\mathbb Q$.

(e) True. A proper rational factorization of a degree-$5$ polynomial compatible with the squarefree factorization pattern $1+4$ modulo $17$ must have factor degrees $1$ and $4$. It would therefore give a rational linear factor, contrary to (i). Hence $f$ is irreducible.

(f) True. A proper rational factor must have degree $2$ or $3$ by (ii), but must have degree $1$ or $4$ by (iii). No proper degree satisfies both restrictions, so $f$ is irreducible.
::

::ProblemBlock{number=10}
#problem
Determine whether each statement is true or false, with justification.

(a) $\mathbb Z/20\mathbb Z\times\mathbb Z/6\mathbb Z$ and $\mathbb Z/12\mathbb Z\times\mathbb Z/10\mathbb Z$ are isomorphic.

(b) $(\mathbb Z/12\mathbb Z)^\times\cong\mathbb Z/4\mathbb Z$.

(c) Every UFD is a PID.

(d) For every commutative ring $R$, every subring of $R$ is an ideal of $R$.

(e) For every commutative ring $R$, every ideal of $R$ is a subring of $R$.

(f) For every commutative ring with identity, every prime ideal is maximal.

#proof
(a) True. Decomposing into primary cyclic factors gives
$$
C_{20}\times C_6
\cong C_4\times C_5\times C_2\times C_3
\cong C_{12}\times C_{10}.
$$

(b) False. The units are $1,5,7,11$, and every nonidentity unit has order $2$. Thus
$$
(\mathbb Z/12\mathbb Z)^\times\cong C_2\times C_2,
$$
not $C_4$.

(c) False. The ring $k[x,y]$ is a UFD, but the ideal $(x,y)$ is not principal, so it is not a PID.

(d) False. The subring $\mathbb Z\subset\mathbb Q$ is not an ideal of $\mathbb Q$.

(e) True under the usual convention that a subring need not contain the identity of $R$. An ideal is an additive subgroup, and if $a,b\in I$, then $ab\in I$ because $a\in R$ and $b\in I$.

(f) False. The ideal $(0)$ is prime in $\mathbb Z$ but is not maximal.
::
