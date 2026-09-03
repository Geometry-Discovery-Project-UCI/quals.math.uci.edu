# 2000 Winter Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let a finite group $G$ act on a finite set $S$. For $g\in G$ and $s\in S$, put
$$
S^g=\{s:g(s)=s\},
\qquad
G_s=\{g:g(s)=s\}.
$$

(a) Prove $\sum_{s\in S}|G_s|=\sum_{g\in G}|S^g|$.

(b) Prove Burnside's formula
$$
|G|\,|S/G|=\sum_{g\in G}|S^g|.
$$

#proof
Count the set of pairs $(g,s)$ satisfying $g(s)=s$. Counting first by $s$ gives the first sum, while counting first by $g$ gives the second. This proves (a).

For each orbit $O$ and $s\in O$, orbit-stabilizer gives $|G_s|=|G|/|O|$. Therefore
$$
\sum_{s\in O}|G_s|=|G|.
$$
Summing over all orbits and using (a) proves Burnside's formula.
::

::ProblemBlock{number=2}
#problem
Let $T$ be a linear operator on an $n$-dimensional vector space over an arbitrary field. Show that some matrix of $T$ has at least $n(n-1)/2$ zero entries.

#proof
Put $T$ in rational canonical form. If its companion blocks have sizes $m_1,\ldots,m_r$, a companion block of size $m$ has possible nonzero entries only in its $m-1$ subdiagonal positions and its $m$ last-column positions. Thus the whole block-diagonal matrix has at most
$$
\sum_{j=1}^r(2m_j-1)=2n-r\le2n-1
$$
possibly nonzero entries. It consequently has at least
$$
n^2-(2n-1)=(n-1)^2
$$
zero entries. For $n\ge2$,
$$
(n-1)^2\ge\frac{n(n-1)}2,
$$
and the assertion is immediate for $n=1$.
::

::ProblemBlock{number=3}
#problem
Let $V_n$ be the complex polynomials of degree at most $n$, with $n>0$. Prove that the differentiation operator $D=d/dx$ is not diagonalizable.

#proof
The operator is nilpotent because $D^{n+1}=0$, but it is not the zero operator because $D(x)=1$. If a nilpotent operator were diagonalizable, all its eigenvalues would be $0$, so its diagonal form would be the zero matrix and the operator itself would be zero. This contradiction proves that $D$ is not diagonalizable.
::

::ProblemBlock{number=4}
#problem
Let $H\triangleleft G$ have prime order $p$, where $G$ is finite and $p$ is the smallest prime dividing $|G|$. Prove that $H\subseteq Z(G)$.

#proof
Conjugation gives a homomorphism
$$
G\longrightarrow\operatorname{Aut}(H).
$$
Since $H\cong C_p$, its automorphism group has order $p-1$. The order of the image divides both $|G|$ and $p-1$. Any prime divisor of a nontrivial image would therefore divide $|G|$ and be smaller than $p$, contradicting the minimality of $p$. Hence the image is trivial. Every element of $G$ centralizes $H$, so $H\subseteq Z(G)$.
::

::ProblemBlock{number=5}
#problem
A subgroup $G$ of $(\mathbb R^2,+)$ is called discrete if it has no limiting points. Show that every discrete noncyclic subgroup is a lattice; that is, it is isomorphic to $\mathbb Z\oplus\mathbb Z$.

#proof
Discreteness implies that there is a shortest nonzero vector $u\in G$. The subgroup $G\cap\mathbb Ru$ is cyclic: if it contained an element not in $\mathbb Zu$, subtracting a suitable integer multiple of $u$ would produce a shorter nonzero vector on the same line.

Because $G$ is not cyclic, choose an element outside $\mathbb Ru$. Orthogonally project $G$ onto a line perpendicular to $u$. Discreteness implies that the nonzero projected lengths have a positive minimum; choose $v\in G$ attaining it. For any $g\in G$, subtract an integer multiple of $v$ so that the remaining projection has absolute value smaller than that of $v$. Minimality forces that projection to be zero. The remainder lies in $G\cap\mathbb Ru=\mathbb Zu$. Thus
$$
g=mu+nv
$$
for integers $m,n$. Since $u,v$ are linearly independent over $\mathbb R$, this expression is unique. Hence
$$
G=\mathbb Zu\oplus\mathbb Zv\cong\mathbb Z^2.
$$
::

::ProblemBlock{number=6}
#problem
Show that $A_6$ has no subgroup of index $5$.

#proof
If $H\le A_6$ had index $5$, the action on the five left cosets would give a homomorphism
$$
A_6\to S_5.
$$
The action is transitive and hence nontrivial. Since $A_6$ is simple, its kernel would be trivial. This would embed a group of order
$$
|A_6|=360
$$
into $S_5$, which has order $120$, an impossibility. Therefore no such subgroup exists.
::

::ProblemBlock{number=7}
#problem
Let $A\in O_n(\mathbb R)$ have determinant $-1$. Show that $-1$ is an eigenvalue. Give an example showing this can fail without the determinant condition.

#proof
All complex eigenvalues of a real orthogonal matrix have absolute value $1$. Nonreal eigenvalues occur in conjugate pairs, each pair having product $1$. The real eigenvalues are $1$ or $-1$. Since the product of all eigenvalues is $\det A=-1$, an odd number of the real eigenvalues must equal $-1$. In particular, $-1$ is an eigenvalue.

Without the determinant hypothesis, the rotation
$$
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
$$
is orthogonal with determinant $1$ and eigenvalues $i,-i$, so it has no eigenvalue $-1$.
::

::ProblemBlock{number=8}
#problem
Show that $SU(2)$ has exactly seven complex representations of dimension $5$, and write them in terms of irreducible representations.

#proof
Every representation of a compact group is completely reducible. Let $V_d$ be the unique irreducible $SU(2)$-representation of dimension $d$. Decompositions of a $5$-dimensional representation correspond to partitions of $5$, giving exactly
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
V_3\oplus V_1^{\oplus2},
$$
$$
V_2^{\oplus2}\oplus V_1,
$$
$$
V_2\oplus V_1^{\oplus3},
$$
and
$$
V_1^{\oplus5}.
$$
Uniqueness of irreducible decomposition makes them pairwise nonisomorphic.
::

::ProblemBlock{number=9}
#problem
Let $R=\mathbb Z[\sqrt{-5}]$.

(a) Show that $R$ is not a UFD.

(b) Factor $(6)$ into prime ideals.

#proof
Using $N(a+b\sqrt{-5})=a^2+5b^2$,
$$
6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})
$$
gives two inequivalent factorizations into irreducibles. The needed irreducibility follows because the norm equations $a^2+5b^2=2$ and $a^2+5b^2=3$ have no solutions. Thus $R$ is not a UFD.

Put
$$
\mathfrak p_2=(2,1+\sqrt{-5}),
$$
$$
\mathfrak p_3=(3,1+\sqrt{-5}),
\qquad
\overline{\mathfrak p}_3=(3,1-\sqrt{-5}).
$$
Then
$$
(2)=\mathfrak p_2^2,
\qquad
(3)=\mathfrak p_3\overline{\mathfrak p}_3,
$$
and hence
$$
(6)=\mathfrak p_2^2\mathfrak p_3\overline{\mathfrak p}_3.
$$
The displayed ideals are prime because their quotients are $\mathbb F_2$ or $\mathbb F_3$.
::

::ProblemBlock{number=10}
#problem
Determine the direct-sum structure of the abelian group generated by $x,y,z$ with relations
$$
7x+5y+2z=0,
$$
$$
10x+8y+2z=0,
$$
$$
13x+11y+2z=0.
$$

#proof
The relation matrix
$$
\begin{pmatrix}7&5&2\\10&8&2\\13&11&2\end{pmatrix}
$$
has rank $2$, the gcd of its entries is $1$, and the gcd of its $2\times2$ minors is $6$. Its Smith normal form is therefore
$$
\operatorname{diag}(1,6,0).
$$
Consequently the group is
$$
\mathbb Z\oplus\mathbb Z/6\mathbb Z.
$$
::

::ProblemBlock{number=11}
#problem
Let $\mathbb F_q$ have characteristic $p$, and let $n>d>0$. Prove that
$$
x_1^d+x_2^d+\cdots+x_n^d=0
$$
has a nontrivial solution in $\mathbb F_q^n$.

#proof
For $k\ge0$,
$$
\sum_{x\in\mathbb F_q}x^k=
\begin{cases}
-1,&k>0\text{ and }q-1\mid k,\\
0,&\text{otherwise},
\end{cases}
$$
where the $k=0$ sum is $q=0$ in $\mathbb F_q$.

For $F=x_1^d+\cdots+x_n^d$, the number $N$ of zeros satisfies
$$
N=\sum_{x\in\mathbb F_q^n}(1-F(x)^{q-1})
$$
in $\mathbb F_q$. The constant sum is zero. Every monomial in $F^{q-1}$ has total degree $d(q-1)<n(q-1)$, so at least one variable exponent is less than $q-1$. Summing in that variable makes the monomial contribution zero. Thus $N=0$ in $\mathbb F_q$, meaning $p\mid N$. Since the zero vector is one solution, $N$ cannot equal $1$, and therefore a nonzero solution exists.
::

::ProblemBlock{number=12}
#problem
Let $R_1,R_2$ be polynomial rings in finitely many variables. Show that $R_1\times R_2$ is Noetherian.

#proof
By Hilbert's basis theorem, each $R_i$ is Noetherian (over its given Noetherian coefficient ring, in particular over a field). Every ideal $I$ of the product has the form
$$
I=I_1\times I_2,
$$
where $I_i$ is an ideal of $R_i$: multiply elements of $I$ by the idempotents $(1,0)$ and $(0,1)$ to separate their components. If $I_1=(a_1,\ldots,a_r)$ and $I_2=(b_1,\ldots,b_s)$, then $I$ is generated by
$$
(a_1,0),\ldots,(a_r,0),(0,b_1),\ldots,(0,b_s).
$$
Thus every ideal is finitely generated, so the product is Noetherian.
::

::ProblemBlock{number=13}
#problem
Determine the Galois group of $x^p-2$ over $\mathbb Q$, where $p$ is an odd prime.

#proof
Let $\alpha=\sqrt[p]{2}$ and $\zeta=\zeta_p$. The splitting field is
$$
L=\mathbb Q(\alpha,\zeta).
$$
Eisenstein at $2$ gives $[\mathbb Q(\alpha):\mathbb Q]=p$, while $[\mathbb Q(\zeta):\mathbb Q]=p-1$. Their intersection has degree dividing the coprime integers $p$ and $p-1$, hence is $\mathbb Q$. Therefore
$$
[L:\mathbb Q]=p(p-1).
$$
The automorphisms are
$$
\sigma_{a,b}(\zeta)=\zeta^a,
\qquad
\sigma_{a,b}(\alpha)=\zeta^b\alpha,
$$
with $a\in(\mathbb Z/p\mathbb Z)^*$ and $b\in\mathbb Z/p\mathbb Z$. Consequently,
$$
\operatorname{Gal}(L/\mathbb Q)
\cong C_p\rtimes(\mathbb Z/p\mathbb Z)^*
\cong C_p\rtimes C_{p-1},
$$
where the second factor acts faithfully by multiplication on $C_p$.
::

::ProblemBlock{number=14}
#problem
Let $n>0$. Prove that
$$
x^{4^n}+8x+13
$$
is irreducible over $\mathbb Q$.

#proof
Let $m=4^n$, a power of $2$, and translate by $1$:
$$
g(x)=(x+1)^m+8(x+1)+13.
$$
Every interior binomial coefficient $\binom{m}{k}$ is even because $m$ is a power of $2$. Hence every nonleading coefficient of $g$ is divisible by $2$. Its constant term is
$$
1+8+13=22,
$$
which is not divisible by $4$. Thus $g$ is Eisenstein at $2$. It is irreducible, and translation preserves irreducibility, so the original polynomial is irreducible.
::
