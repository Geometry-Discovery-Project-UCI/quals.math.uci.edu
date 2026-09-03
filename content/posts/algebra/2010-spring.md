# 2010 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Classify all groups of order $44$ up to isomorphism, indicating which are abelian.

#proof
Let $G$ have order $44=4\cdot11$. Sylow's theorems give
$$
n_{11}\equiv1\pmod{11},\qquad n_{11}\mid4,
$$
so the Sylow $11$-subgroup $N\cong C_{11}$ is normal. By Schur--Zassenhaus, $G$ is a semidirect product
$$
C_{11}\rtimes H,
$$
where $H$ has order $4$, so $H\cong C_4$ or $C_2\times C_2$.

Since
$$
\operatorname{Aut}(C_{11})\cong C_{10},
$$
the image of the action $H\to C_{10}$ has order at most $2$.

If $H=C_4$, there are two actions up to isomorphism: the trivial action and the action in which a generator of $C_4$ acts by inversion. If $H=C_2\times C_2$, there are again two actions up to isomorphism: the trivial action and a nontrivial action onto the unique subgroup of order $2$ in $C_{10}$. All nonzero homomorphisms from $C_2^2$ to $C_2$ are equivalent under $\operatorname{Aut}(C_2^2)$.

Thus the four groups are
$$
C_{44},
$$
$$
C_{11}\times C_2\times C_2\cong C_{22}\times C_2,
$$
$$
C_{11}\rtimes C_4
\quad\text{with a generator of $C_4$ acting by inversion},
$$
and
$$
(C_{11}\rtimes C_2)\times C_2\cong D_{22}\times C_2.
$$
The first two are abelian, and the last two are nonabelian.
::

::ProblemBlock{number=2}
#problem
Determine whether each statement is true or false.

(a) $\{1,(12)\}$ is normal in $S_5$.

(b) The center $Z(G)$ is normal in every group $G$.

(c) The map $\theta(g)=g^2$ is a homomorphism from every group to itself.

#proof
(a) False. Conjugating $(12)$ by $(23)$ gives $(13)$, which is not in the subgroup.

(b) True. If $z\in Z(G)$ and $g\in G$, then $gzg^{-1}=z$, so the center is invariant under conjugation.

(c) False. In general,
$$
(gh)^2=ghgh
$$
need not equal $g^2h^2$. For example, this fails for suitable noncommuting elements of $S_3$.
::

::ProblemBlock{number=3}
#problem
Let $R=\mathbb Z[\sqrt{-5}]$.

(a) Show that $R$ is not a UFD.

(b) Factor the ideal $(6)$ into prime ideals of $R$.

#proof
(a) In $R$,
$$
6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5}).
$$
Use the norm
$$
N(a+b\sqrt{-5})=a^2+5b^2.
$$
There are no elements of norm $2$ or $3$. It follows by norm multiplicativity that $2$, $3$, and $1\pm\sqrt{-5}$ are irreducible. Their norms show that no factor from one decomposition is associate to a factor in the other. Thus factorization is not unique.

(b) Put
$$
\mathfrak p_2=(2,1+\sqrt{-5}),
$$
$$
\mathfrak p_3=(3,1+\sqrt{-5}),
\qquad
\overline{\mathfrak p}_3=(3,1-\sqrt{-5}).
$$
Each quotient is respectively $\mathbb F_2$ or $\mathbb F_3$, so these ideals are maximal and prime. Reduction of $x^2+5$ modulo $2$ gives $(x+1)^2$, while reduction modulo $3$ gives $(x-1)(x+1)$. Consequently
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

::ProblemBlock{number=4}
#problem
For every positive integer $n$, prove that
$$
f(x)=x^{2^n}+8x+13
$$
is irreducible over $\mathbb Q$.

#proof
Irreducibility is unchanged by translation, so consider
$$
f(x+1)=(x+1)^{2^n}+8(x+1)+13.
$$
Every intermediate binomial coefficient
$$
\binom{2^n}{k},\qquad0<k<2^n,
$$
is even. Thus every nonleading coefficient of $f(x+1)$ is divisible by $2$. Its constant term is
$$
1+8+13=22,
$$
which is not divisible by $4$. Hence $f(x+1)$ is Eisenstein at $2$, so it is irreducible over $\mathbb Q$. Therefore $f(x)$ is irreducible as well.
::

::ProblemBlock{number=5}
#problem
Let $T$ be nilpotent on an $n$-dimensional vector space. Show that $T^n=0$.

#proof
The minimal polynomial of a nilpotent operator is $x^r$ for some positive integer $r$. Its degree is at most $n$, so $r\le n$. Therefore
$$
T^n=T^rT^{n-r}=0.
$$
Equivalently, in Jordan form every nilpotent block has size at most $n$.
::

::ProblemBlock{number=6}
#problem
Construct the character table of the dihedral group $D_8$ of order $8$.

#proof
Write
$$
D_8=\langle r,s\mid r^4=s^2=1,\ srs=r^{-1}\rangle.
$$
Its conjugacy classes are
$$
\{1\},\quad\{r^2\},\quad\{r,r^3\},
\quad\{s,r^2s\},\quad\{rs,r^3s\}.
$$
There are four linear characters because the abelianization is $C_2\times C_2$, and one two-dimensional character from the geometric action on the square. The table is
$$
\begin{array}{c|rrrrr}
&1&r^2&\{r,r^3\}&\{s,r^2s\}&\{rs,r^3s\}\\ \hline
\chi_1&1&1&1&1&1\\
\chi_2&1&1&1&-1&-1\\
\chi_3&1&1&-1&1&-1\\
\chi_4&1&1&-1&-1&1\\
\chi_5&2&-2&0&0&0
\end{array}
$$
The squared degrees sum to $4+4=8$, so the table is complete.
::

::ProblemBlock{number=7}
#problem
Determine whether each quotient is a field:
$$
\mathbb F_2[x]/(x^3+x+1),
\qquad
\mathbb F_3[x]/(x^3+x+1).
$$

#proof
Over $\mathbb F_2$, the cubic has no root:
$$
f(0)=1,qquad f(1)=1.
$$
A cubic is reducible if and only if it has a root, so the polynomial is irreducible and the quotient is a field, namely $\mathbb F_8$.

Over $\mathbb F_3$,
$$
f(1)=1+1+1=0.
$$
Thus the polynomial is reducible and its ideal is not maximal. The quotient is not a field.
::

::ProblemBlock{number=8}
#problem
List one representative of each similarity class of matrices $A\in GL_2(\mathbb C)$ such that $A$ is similar to $A^{-1}$.

#proof
The Jordan form must be unchanged when every nonzero eigenvalue is replaced by its reciprocal. The complete list is
$$
I_2,qquad -I_2,qquad
\begin{bmatrix}1&0\\0&-1\end{bmatrix},
$$
$$
J_2(1),qquad J_2(-1),
$$
and the family
$$
\begin{bmatrix}\lambda&0\\0&\lambda^{-1}\end{bmatrix},
\qquad
\lambda\in\mathbb C^*\setminus\{1,-1\},
$$
where parameters $\lambda$ and $\lambda^{-1}$ represent the same class. The scalar and mixed-sign cases cover the self-reciprocal eigenvalues, while the last family covers a distinct reciprocal pair. A nontrivial Jordan block at $1$ or $-1$ is similar to its inverse because changing the nonzero superdiagonal entry does not change its Jordan type. Hence every listed matrix works, and the Jordan classification shows that none are missing.
::

::ProblemBlock{number=9}
#problem
Determine the splitting field and Galois group of $x^4-2$ over $\mathbb Q$. Give the subgroup and subfield lattices, identifying fixed fields.

#proof
Let $a=\sqrt[4]{2}$. The roots are $a,ia,-a,-ia$, so the splitting field is
$$
K=\mathbb Q(a,i).
$$
The polynomial is Eisenstein at $2$, giving $[\mathbb Q(a):\mathbb Q]=4$, and $i$ is not in the real field $\mathbb Q(a)$. Thus $[K:\mathbb Q]=8$.

Define
$$
r(a)=ia,\quad r(i)=i,
\qquad
s(a)=a,\quad s(i)=-i.
$$
Then
$$
r^4=s^2=1,qquad srs=r^{-1},
$$
so
$$
G=\operatorname{Gal}(K/\mathbb Q)\cong D_8.
$$

The complete subgroup--fixed-field correspondence is
$$
\begin{array}{c|c}
H&K^H\\ \hline
G&\mathbb Q\\
\langle r\rangle&\mathbb Q(i)\\
\langle r^2,s\rangle&\mathbb Q(\sqrt2)\\
\langle r^2,rs\rangle&\mathbb Q(\sqrt{-2})\\
\langle r^2\rangle&\mathbb Q(\sqrt2,i)\\
\langle s\rangle&\mathbb Q(a)\\
\langle r^2s\rangle&\mathbb Q(ia)\\
\langle rs\rangle&\mathbb Q((1+i)a)\\
\langle r^3s\rangle&\mathbb Q((1-i)a)\\
\{1\}&K
\end{array}
$$
The subgroup lattice has $G$ at the top; its three order-$4$ subgroups are $\langle r\rangle$, $\langle r^2,s\rangle$, and $\langle r^2,rs\rangle$. The first contains $\langle r^2\rangle$; the second contains $\langle r^2\rangle,\langle s\rangle,\langle r^2s\rangle$; and the third contains $\langle r^2\rangle,\langle rs\rangle,\langle r^3s\rangle$. All order-$2$ subgroups contain $1$. The subfield lattice is the reverse of these inclusions.
::

::ProblemBlock{number=10}
#problem
Find one representative of each similarity class of rational matrices with characteristic polynomial
$$
x^5+x^3.
$$

#proof
Factor
$$
x^5+x^3=x^3(x^2+1).
$$
The factor $x^2+1$ is irreducible over $\mathbb Q$ and occurs once. The $x$-primary part has total multiplicity $3$, whose possible partitions are $(3)$, $(2,1)$, and $(1,1,1)$. Thus there are exactly three classes. With
$$
C=\begin{bmatrix}0&-1\\1&0\end{bmatrix},
$$
representatives are
$$
J_3(0)\oplus C,
$$
$$
J_2(0)\oplus[0]\oplus C,
$$
and
$$
[0]\oplus[0]\oplus[0]\oplus C.
$$
Their distinct invariant-factor data show that they are pairwise nonsimilar and exhaustive.
::
