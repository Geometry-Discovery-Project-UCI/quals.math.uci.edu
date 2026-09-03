# 2013 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $G$ be a group of order $2pq$, where $p$ and $q$ are odd primes, not necessarily distinct. Show that $G$ is solvable.

#proof
If $p=q$, then $|G|=2p^2$ has only two distinct prime divisors. Burnside's $p^aq^b$ theorem implies that $G$ is solvable.

Suppose $p\ne q$. Then $|G|$ is square-free. A standard square-free-order theorem states that every finite group of square-free order is metacyclic: it has a cyclic normal subgroup with cyclic quotient. Briefly, its Sylow subgroups are cyclic, and the Sylow congruences, applied successively from the largest prime downward, produce a cyclic normal Hall subgroup; the remaining cyclic Sylow factors act on it by conjugation. Hence there is a normal cyclic subgroup $N\trianglelefteq G$ such that $G/N$ is cyclic.

Both $N$ and $G/N$ are abelian, so
$$
G'\subseteq N
$$
and $G''=1$. Thus $G$ is solvable. This covers both cases.
::

::ProblemBlock{number=2}
#problem
Give and justify examples of:

(a) a prime ideal that is not maximal;

(b) two commutative rings with isomorphic additive groups that are not isomorphic as rings;

(c) a UFD that is not a PID.

#proof
(a) The ideal $(0)$ is prime in $\mathbb Z$ because $\mathbb Z$ is a domain, but it is not maximal because $\mathbb Z$ is not a field.

(b) Take
$$
R_1=\mathbb F_4,
\qquad R_2=\mathbb F_2\times\mathbb F_2.
$$
Both additive groups are isomorphic to $C_2\times C_2$. But $R_1$ is a field, whereas $R_2$ has nonzero zero divisors, so the rings are not isomorphic.

(c) For any field $k$, the polynomial ring $k[x,y]$ is a UFD by Gauss's lemma. It is not a PID because the ideal $(x,y)$ is not principal.
::

::ProblemBlock{number=3}
#problem
(a) For which $n\in\mathbb N$ does $S_n$ contain a subgroup isomorphic to $\mathbb Z/7\mathbb Z$?

(b) For which $n$ does $S_n$ contain a subgroup isomorphic to $\mathbb Z/14\mathbb Z$?

#proof
(a) An element of order $7$ must contain a $7$-cycle, so it requires at least seven letters. Conversely, a $7$-cycle generates such a subgroup. Thus the answer is
$$
n\ge7.
$$

(b) A permutation of order $14$ must have disjoint cycle lengths whose least common multiple is $14$. The smallest possible support is a disjoint $7$-cycle and $2$-cycle, using nine letters. Their product has order $14$. No permutation on fewer than nine letters can contain both factors $7$ and $2$ in its order. Thus the answer is
$$
n\ge9.
$$
::

::ProblemBlock{number=4}
#problem
Let $R=S\times T$, where $S,T$ are commutative rings with identity.

(a) Prove that every ideal of $R$ is $I\times J$ for ideals $I\trianglelefteq S$ and $J\trianglelefteq T$.

(b) Describe the prime and maximal ideals of $R$.

#proof
(a) Let $K\trianglelefteq S\times T$ and define
$$
I=\{s\in S:(s,0)\in K\},
\qquad J=\{t\in T:(0,t)\in K\}.
$$
These are ideals. If $(s,t)\in K$, multiplication by the idempotents $(1,0)$ and $(0,1)$ shows that $(s,0),(0,t)\in K$. Thus $K\subseteq I\times J$, and the reverse inclusion follows by addition. Hence $K=I\times J$.

(b) If $P$ is prime, then
$$
(1,0)(0,1)=(0,0)\in P,
$$
so $P$ contains $(1,0)$ or $(0,1)$. It follows that every prime ideal has one of the forms
$$
\mathfrak p\times T
\quad\text{or}\quad
S\times\mathfrak q,
$$
where $\mathfrak p$ is prime in $S$ or $\mathfrak q$ is prime in $T$. Conversely, these ideals are prime because the corresponding quotients are $S/\mathfrak p$ and $T/\mathfrak q$. Similarly, the maximal ideals are exactly
$$
\mathfrak m\times T
\quad\text{and}\quad
S\times\mathfrak n,
$$
with $\mathfrak m,\mathfrak n$ maximal in the respective factors.
::

::ProblemBlock{number=5}
#problem
Let $f(x)\in\mathbb Q[x]$ be an irreducible cubic, and let $G_f$ be the Galois group of its splitting field.

(a) Prove that if $f$ has exactly one real root, then $G_f\cong S_3$.

(b) Find an irreducible cubic whose roots generate the cubic subextension of $\mathbb Q(\zeta_7)/\mathbb Q$.

#proof
(a) Irreducibility makes $G_f$ a transitive subgroup of $S_3$, so it is $A_3$ or $S_3$. The two nonreal roots are interchanged by complex conjugation, while the real root is fixed. Thus $G_f$ contains a transposition and cannot be $A_3$. Therefore $G_f=S_3$.

(b) Put
$$
\theta=\zeta_7+\zeta_7^{-1}=2\cos(2\pi/7).
$$
Its conjugates are $\zeta_7^k+\zeta_7^{-k}$ for $k=1,2,3$, and a calculation from
$$
1+\zeta_7+\cdots+\zeta_7^6=0
$$
gives its minimal polynomial
$$
f(x)=x^3+x^2-2x-1.
$$
This cubic has no rational root and is therefore irreducible. The field $\mathbb Q(\theta)$ is the fixed field of complex conjugation in $\mathbb Q(\zeta_7)$, so it is the unique cubic subextension, and the roots of $f$ generate it.
::

::ProblemBlock{number=6}
#problem
Let $E$ be the splitting field of $x^{35}-1$ over $\mathbb F_2$.

(a) How many elements does $E$ have?

(b) How many subfields does $E$ have?

#proof
The splitting field is the smallest $\mathbb F_{2^m}$ whose multiplicative group contains the $35$th roots of unity. Thus $m$ is the multiplicative order of $2$ modulo $35$. We have
$$
\operatorname{ord}_5(2)=4,
\qquad \operatorname{ord}_7(2)=3,
$$
so
$$
\operatorname{ord}_{35}(2)=\operatorname{lcm}(4,3)=12.
$$
Therefore
$$
E=\mathbb F_{2^{12}}
$$
and $|E|=2^{12}=4096$.

The subfields of $\mathbb F_{2^{12}}$ are exactly $\mathbb F_{2^d}$ for positive divisors $d$ of $12$. Since the divisors are
$$
1,2,3,4,6,12,
$$
the field $E$ has six subfields, counting $\mathbb F_2$ and $E$ itself.
::

::ProblemBlock{number=7}
#problem
Let $V$ be an $n$-dimensional rational vector space and let $A\in\operatorname{End}_{\mathbb Q}(V)$. Suppose $A^7=I$ and $A$ has no nonzero fixed vectors. Show that $6\mid n$.

#proof
Factor
$$
x^7-1=(x-1)\Phi_7(x),
\qquad
\Phi_7(x)=x^6+x^5+\cdots+x+1.
$$
The operator $A-I$ is injective and hence invertible, because $V$ is finite-dimensional. From
$$
(A-I)\Phi_7(A)=A^7-I=0
$$
we conclude that $\Phi_7(A)=0$.

The cyclotomic polynomial $\Phi_7$ is irreducible over $\mathbb Q$. Therefore the action of $A$ makes $V$ a vector space over
$$
\mathbb Q[x]/(\Phi_7),
$$
which has degree $6$ over $\mathbb Q$. Hence
$$
n=6\dim_{\mathbb Q[x]/(\Phi_7)}V,
$$
so $6\mid n$.
::

::ProblemBlock{number=8}
#problem
Let $R$ be a commutative ring with identity and let $M_1,M_2$ be distinct maximal ideals. Show that
$$
(R/M_1)\otimes_R(R/M_2)=0.
$$

#proof
Distinct maximal ideals are comaximal, so choose
$$
a\in M_1,qquad b\in M_2,qquad a+b=1.
$$
For a pure tensor $u\otimes v$, balancedness gives
$$
u\otimes v=(a+b)(u\otimes v)=au\otimes v+u\otimes bv=0+0=0.
$$
Pure tensors generate the tensor product, so the entire tensor product is zero.
::

::ProblemBlock{number=9}
#problem
Suppose $K/F$ is Galois of degree $pq$, where $p<q$ are distinct primes. Show that $K$ has a subfield $L$, Galois over $F$, with $[L:F]=p$.

#proof
Let $G=\operatorname{Gal}(K/F)$, so $|G|=pq$. The number of Sylow $q$-subgroups satisfies
$$
n_q\equiv1\pmod q,
\qquad n_q\mid p.
$$
Since $p<q$, this forces $n_q=1$. Let $H$ be the unique Sylow $q$-subgroup. Then $H\trianglelefteq G$.

Set $L=K^H$. The Galois correspondence gives
$$
[L:F]=[G:H]=p.
$$
Because $H$ is normal, $L/F$ is Galois.
::

::ProblemBlock{number=10}
#problem
Let $G$ be a finite cyclic $p$-group and let
$$
\rho:G\to\operatorname{Aut}_F(V)
$$
be an irreducible finite-dimensional representation over a field $F$ of characteristic $p$. Prove that $\rho$ is trivial.

#proof
Let $g$ generate $G$ and suppose its order is $p^m$. Put $T=\rho(g)$. Then
$$
T^{p^m}=I.
$$
In characteristic $p$,
$$
(T-I)^{p^m}=T^{p^m}-I=0.
$$
Thus $T-I$ is nilpotent, so its kernel is nonzero. The subspace
$$
\ker(T-I)
$$
is invariant under $T$ and hence under the cyclic group $G$. Irreducibility forces it to be all of $V$. Therefore $T=I$, and since $g$ generates $G$, the representation is trivial.
::
