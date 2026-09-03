# 2003 Winter Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $\mathbb F_p$ denote the field with $p$ elements. Prove:

(a) $\mathbb F_2[x]/(x^3+x+1)$ is a field.

(b) $\mathbb F_3[x]/(x^3+x+1)$ is not a field.

#proof
A cubic over a field is reducible exactly when it has a root.

(a) In $\mathbb F_2$,
$$
f(0)=1,
\qquad
f(1)=1+1+1=1.
$$
Thus $f$ has no root and is irreducible. Therefore its quotient is a field.

(b) In $\mathbb F_3$,
$$
f(1)=1+1+1=0.
$$
Thus $x-1$ divides $f$, so the quotient has zero divisors and is not a field.
::

::ProblemBlock{number=2}
#problem
Let $G$ be a finite group. The exam defines a character $\varphi$ of $G$ to be a homomorphism $\varphi:G\to\mathbb C^*$. Prove that the following are equivalent:

(a) Every element of $G$ is conjugate to its inverse.

(b) Every character of $G$ is real-valued.

#proof
With the definition printed in the problem, only one implication is valid. If $g$ is conjugate to $g^{-1}$, then any homomorphism $\varphi:G\to\mathbb C^*$ satisfies
$$
\varphi(g)=\varphi(g^{-1})=\varphi(g)^{-1}.
$$
Because $G$ is finite, $\varphi(g)$ is a root of unity, and its inverse is its complex conjugate. Hence $\varphi(g)$ is real, proving (a)$\Rightarrow$(b).

The converse is false for one-dimensional characters. For example, $A_7$ is perfect, so every homomorphism $A_7\to\mathbb C^*$ is trivial and therefore real-valued. However, a $7$-cycle in $A_7$ is not conjugate in $A_7$ to its inverse: the $S_7$-class of $7$-cycles splits into two $A_7$-classes, and inversion interchanges them because $-1$ is not a quadratic residue modulo $7$.

The standard correct theorem uses all irreducible complex characters: every element is conjugate to its inverse if and only if every irreducible character is real-valued. Indeed, character values satisfy $\chi(g^{-1})=\overline{\chi(g)}$, and irreducible characters separate conjugacy classes. Thus the printed definition makes the requested equivalence incorrect.
::

::ProblemBlock{number=3}
#problem
Let $p$ be prime, let $V$ have dimension $p$ over $\mathbb Q$, and let $T:V\to V$ satisfy $T^p=I$. Find all possible rational canonical forms for $T$ and the characteristic polynomial of each.

#proof
Over $\mathbb Q$,
$$
x^p-1=(x-1)\Phi_p(x),
$$
where $\Phi_p$ is irreducible of degree $p-1$. The polynomial $x^p-1$ is squarefree, so $T$ is semisimple as a $\mathbb Q[x]$-module.

If $p>2$, the dimension equation is
$$
a+(p-1)b=p,
$$
where $a$ is the number of $(x-1)$ blocks and $b$ the number of $\Phi_p$ companion blocks. The only possibilities are
$$
(a,b)=(p,0)\quad\text{or}\quad(1,1).
$$
Thus the forms and characteristic polynomials are
$$
I_p,qquad \chi_T(x)=(x-1)^p,
$$
or
$$
[1]\oplus C(\Phi_p),
\qquad
\chi_T(x)=(x-1)\Phi_p(x)=x^p-1.
$$

If $p=2$, then $x^2-1=(x-1)(x+1)$ and the possibilities are
$$
I_2,qquad -I_2,qquad\operatorname{diag}(1,-1),
$$
with characteristic polynomials $(x-1)^2$, $(x+1)^2$, and $x^2-1$, respectively.
::

::ProblemBlock{number=4}
#problem
Let $UT(n,\mathbb F_p)$ be the group of upper triangular $n\times n$ matrices over $\mathbb F_p$ with all diagonal entries equal to $1$. Let $G$ be a $p$-group of order $n$. Show that $G$ is isomorphic to a subgroup of $UT(n,\mathbb F_p)$.

#proof
The left regular representation embeds $G$ in $GL_n(\mathbb F_p)$ by permutation matrices. Now
$$
|GL_n(\mathbb F_p)|
=(p^n-1)(p^n-p)\cdots(p^n-p^{n-1}).
$$
The exact power of $p$ dividing this order is
$$
p^{0+1+\cdots+(n-1)}=p^{n(n-1)/2}.
$$
On the other hand, an element of $UT(n,\mathbb F_p)$ is determined freely by its $n(n-1)/2$ entries above the diagonal, so
$$
|UT(n,\mathbb F_p)|=p^{n(n-1)/2}.
$$
Hence $UT(n,\mathbb F_p)$ is a Sylow $p$-subgroup of $GL_n(\mathbb F_p)$. The embedded image of $G$ is a $p$-subgroup, so it is contained in a conjugate of this Sylow subgroup. Conjugating the embedding places $G$ inside $UT(n,\mathbb F_p)$.
::

::ProblemBlock{number=5}
#problem
Let $V$ be a vector space and $T:V\to V$ linear.

(a) If $\dim V<\infty$, prove that $T$ is onto if and only if it is one-to-one.

(b) Give examples showing that both implications fail when $\dim V=\infty$.

#proof
(a) Rank-nullity gives
$$
\dim V=\dim\ker T+\dim\operatorname{im}T.
$$
Thus $\ker T=0$ exactly when $\dim\operatorname{im}T=\dim V$, which is exactly when $T$ is surjective.

(b) Let $V$ have countable basis $e_1,e_2,\ldots$. The right shift
$$
R(e_j)=e_{j+1}
$$
is injective but not surjective because $e_1$ is not in its image. The left shift
$$
L(e_1)=0,
\qquad
L(e_{j+1})=e_j
$$
is surjective but not injective. Thus both implications can fail.
::

::ProblemBlock{number=6}
#problem
Let $N$ be a submodule of an $R$-module $M$. Prove that $N$ is a direct summand of $M$ if and only if there is an endomorphism $f:M\to M$ such that $f^2=f$ and $f(M)=N$.

#proof
If $M=N\oplus P$, define the projection
$$
f(n+p)=n.
$$
Then $f^2=f$ and $f(M)=N$.

Conversely, suppose $f^2=f$ and $f(M)=N$. For every $m\in M$,
$$
m=f(m)+(m-f(m)),
$$
where $f(m)\in N$ and
$$
f(m-f(m))=f(m)-f^2(m)=0.
$$
Thus $M=N+\ker f$. If $x\in N\cap\ker f$, write $x=f(y)$. Then
$$
x=f(y)=f^2(y)=f(x)=0.
$$
Therefore $M=N\oplus\ker f$, so $N$ is a direct summand.
::

::ProblemBlock{number=7}
#problem
Show that $SU(2)$ has exactly seven complex representations of dimension $5$, up to isomorphism, and write them in terms of its irreducible representations. You may use that $SU(2)$ has exactly one irreducible representation of each positive dimension.

#proof
Because $SU(2)$ is compact, every finite-dimensional complex representation is completely reducible. Let $V_d$ denote its unique irreducible representation of dimension $d$. Isomorphism classes of $5$-dimensional representations therefore correspond exactly to partitions of $5$. The seven partitions give
$$
V_5,
$$
$$
V_4\oplus V_1,
$$
$$
V_3\oplus V_2,
$$
$$
V_3\oplus V_1\oplus V_1,
$$
$$
V_2\oplus V_2\oplus V_1,
$$
$$
V_2\oplus V_1\oplus V_1\oplus V_1,
$$
and
$$
V_1^{\oplus5}.
$$
These are pairwise nonisomorphic by uniqueness of irreducible decomposition, so there are exactly seven.
::

::ProblemBlock{number=8}
#problem
Let $R=\mathbb Z[\sqrt{-5}]$.

(a) Show that $R$ is not a UFD.

(b) Factor $(6)$ as a product of prime ideals in $R$.

#proof
The norm is $N(a+b\sqrt{-5})=a^2+5b^2$. The equality
$$
6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})
$$
gives two inequivalent factorizations into irreducibles. Indeed, the norm equations $a^2+5b^2=2$ and $a^2+5b^2=3$ have no solutions, proving the necessary irreducibility statements. Hence $R$ is not a UFD.

Set
$$
\mathfrak p_2=(2,1+\sqrt{-5}),
$$
$$
\mathfrak p_3=(3,1+\sqrt{-5}),
\qquad
\overline{\mathfrak p}_3=(3,1-\sqrt{-5}).
$$
The quotients by these ideals are finite fields, so they are prime. Factoring $x^2+5$ modulo $2$ and $3$ gives
$$
(2)=\mathfrak p_2^2,
\qquad
(3)=\mathfrak p_3\overline{\mathfrak p}_3.
$$
Therefore
$$
(6)=\mathfrak p_2^2\mathfrak p_3\overline{\mathfrak p}_3.
$$
::

::ProblemBlock{number=9}
#problem
Let $\mathbb F_q$ have characteristic $p$.

(a) For positive $m$, prove
$$
\sum_{x\in\mathbb F_q}x^m=
\begin{cases}
-1,&q-1\mid m,\\
0,&q-1\nmid m.
\end{cases}
$$

(b) Let $n>d>0$, and let $f(x_1,\ldots,x_n)$ have total degree $d$ over $\mathbb F_q$. Prove that the number $N(f)$ of zeros of $f$ in $\mathbb F_q^n$ is divisible by $p$.

#proof
(a) Let $g$ generate $\mathbb F_q^*$. Then
$$
\sum_{x\in\mathbb F_q}x^m
=\sum_{j=0}^{q-2}g^{jm}.
$$
If $g^m\ne1$, this geometric sum is $0$. If $g^m=1$, it is $q-1=-1$ in $\mathbb F_q$. These cases are equivalent to $q-1\nmid m$ and $q-1\mid m$, respectively.

(b) For $a\in\mathbb F_q$, the expression $1-a^{q-1}$ is $1$ when $a=0$ and $0$ otherwise. Hence, in $\mathbb F_q$,
$$
N(f)=\sum_{x\in\mathbb F_q^n}\left(1-f(x)^{q-1}\right).
$$
The sum of the constant term is $q^n=0$ in $\mathbb F_q$. Expand $f^{q-1}$ into monomials. Every resulting monomial has total degree at most $d(q-1)<n(q-1)$. Therefore in each monomial some variable has exponent strictly less than $q-1$. Summing that monomial over all values of this variable gives $0$; this also holds when the exponent is $0$, because then the sum is $q=0$ in $\mathbb F_q$. Thus
$$
N(f)=0\quad\text{in }\mathbb F_q.
$$
Since $N(f)$ is an integer, this says precisely that $p\mid N(f)$.
::

::ProblemBlock{number=10}
#problem
For $R=\mathbb Z$, give examples of modules $M$ such that:

(a) $M$ is torsion-free and no linearly independent subset generates $M$.

(b) $M$ is free and has a maximal linearly independent subset $X$ that does not generate $M$.

#proof
(a) Take $M=\mathbb Q$ as a $\mathbb Z$-module. It is torsion-free. Any two nonzero rationals are $\mathbb Z$-linearly dependent: if $a/b$ and $c/d$ are nonzero, suitable nonzero integer multiples of them agree. Thus an independent subset has at most one element, and the cyclic subgroup generated by one rational is never all of $\mathbb Q$.

(b) Take $M=\mathbb Z$ and $X=\{2\}$. This set is linearly independent. It is maximal independent because adding any nonzero integer produces a two-element dependent set, while adding $0$ destroys independence. Yet $X$ generates only $2\mathbb Z$, not $\mathbb Z$.
::

::ProblemBlock{number=11}
#problem
Let $K$ be the splitting field over $\mathbb Q$ of
$$
(x^2-2x-1)(x^4-1).
$$
Determine its Galois group and all intermediate fields explicitly.

#proof
The roots of the first factor are $1\pm\sqrt2$, and the roots of the second are $1,-1,i,-i$. Therefore
$$
K=\mathbb Q(\sqrt2,i).
$$
The two quadratic fields $\mathbb Q(\sqrt2)$ and $\mathbb Q(i)$ are distinct, so $[K:\mathbb Q]=4$. Independently changing the signs of $\sqrt2$ and $i$ gives all four automorphisms. Hence
$$
\operatorname{Gal}(K/\mathbb Q)\cong C_2\times C_2.
$$
The complete list of intermediate fields is
$$
\mathbb Q,
\qquad
\mathbb Q(\sqrt2),
\qquad
\mathbb Q(i),
\qquad
\mathbb Q(\sqrt{-2}),
\qquad
\mathbb Q(\sqrt2,i).
$$
The three quadratic fields correspond to the three subgroups of order $2$.
::
