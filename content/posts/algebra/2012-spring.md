# 2012 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Recall that the exponent of a group is the least positive integer $n$ such that $g^n=1$ for every group element.

(a) Compute the exponent of $(\mathbb Z/77\mathbb Z)^*$.

(b) Compute the exponent of $S_5$.

#proof
(a) By the Chinese remainder theorem,
$$
(\mathbb Z/77\mathbb Z)^*
\cong(\mathbb Z/7\mathbb Z)^*\times(\mathbb Z/11\mathbb Z)^*
\cong C_6\times C_{10}.
$$
Its exponent is therefore
$$
\operatorname{lcm}(6,10)=30.
$$

(b) The order of a permutation is the least common multiple of its cycle lengths. The exponent of $S_5$ is consequently
$$
\operatorname{lcm}(1,2,3,4,5)=60.
$$
Each of the needed prime-power factors is realized by a cycle type in $S_5$, so no smaller exponent works.
::

::ProblemBlock{number=2}
#problem
Fix a prime $p$. For positive integers $m,n$, let $f(m,n)$ be the number of nonzero ring homomorphisms
$$
\mathbb F_{p^m}\longrightarrow\mathbb F_{p^n}.
$$

(a) Find $f(m,6)$.

(b) Find $f(6,n)$.

#proof
A nonzero homomorphism between fields is injective. The field $\mathbb F_{p^n}$ contains a copy of $\mathbb F_{p^m}$ exactly when $m\mid n$. When it does, that subfield is unique, and its $m$ embeddings are the Frobenius maps
$$
x\longmapsto x^{p^j},
\qquad 0\le j<m.
$$
Therefore
$$
f(m,6)=
\begin{cases}
m,&m\mid6,\\
0,&m\nmid6,
\end{cases}
$$
and
$$
f(6,n)=
\begin{cases}
6,&6\mid n,\\
0,&6\nmid n.
\end{cases}
$$
::

::ProblemBlock{number=3}
#problem
Show that a group with exactly three elements of order $2$ is not simple.

#proof
Let $X$ be the set of the three involutions. Conjugation preserves element order, so it defines a homomorphism
$$
\phi:G\longrightarrow S_X\cong S_3.
$$
If $G$ were simple, then $\ker\phi$ would be either $1$ or $G$. If the kernel were $G$, all three involutions would be central, and each of their order-$2$ subgroups would be a nontrivial proper normal subgroup, a contradiction.

Thus a simple $G$ would embed in $S_3$. But the only simple subgroups of $S_3$ are cyclic of prime order, and none has exactly three involutions; $S_3$ itself is not simple. This contradiction proves that $G$ is not simple.
::

::ProblemBlock{number=4}
#problem
List all ideals in
$$
A=\mathbb Q[x]/(x^3-x^2-x+1).
$$

#proof
Factor
$$
x^3-x^2-x+1=(x-1)^2(x+1).
$$
Ideals of $A$ correspond to ideals $(d)$ of the PID $\mathbb Q[x]$ containing the defining ideal, equivalently to monic divisors $d$ of $(x-1)^2(x+1)$. Hence the complete list is
$$
A,\quad
(\overline{x-1}),\quad
(\overline{(x-1)^2}),\quad
(\overline{x+1}),\quad
(\overline{(x-1)(x+1)}),\quad
(0).
$$
The first and last correspond to the divisors $1$ and $(x-1)^2(x+1)$, respectively.
::

::ProblemBlock{number=5}
#problem
Let
$$
L=\mathbb Q(\sqrt[6]{-3}).
$$
Show that $L/\mathbb Q$ is Galois and that
$$
\operatorname{Gal}(L/\mathbb Q)\cong S_3.
$$

#proof
Let $\alpha^6=-3$. The polynomial $x^6+3$ is Eisenstein at $3$, so
$$
[L:\mathbb Q]=6.
$$
Put $\beta=\alpha^2$, so $\beta^3=-3$, and observe that
$$
\alpha^3=\sqrt{-3}.
$$
Consequently
$$
\zeta_3=\frac{-1+\sqrt{-3}}2\in L.
$$
Thus $L$ contains all roots
$$
\beta,\quad \zeta_3\beta,\quad \zeta_3^2\beta
$$
of $x^3+3$. Conversely, $\alpha$ can be recovered inside its splitting field because $\alpha^2=\beta$ and $\alpha^3=\sqrt{-3}$, for example
$$
\alpha=\frac{\alpha^3}{\alpha^2}=\frac{\sqrt{-3}}{\beta}.
$$
Hence $L$ is the splitting field of the separable polynomial $x^3+3$, so it is Galois.

The irreducible cubic $x^3+3$ has one real root and two nonreal roots. Its Galois group is therefore a transitive subgroup of $S_3$ containing complex conjugation, a transposition. It must be $S_3$. Equivalently, its order is already $[L:\mathbb Q]=6$, so
$$
\operatorname{Gal}(L/\mathbb Q)\cong S_3.
$$
::

::ProblemBlock{number=6}
#problem
Give and justify the complex character table of the quaternion group $Q_8$.

#proof
The conjugacy classes of $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ are
$$
\{1\},\quad\{-1\},\quad\{\pm i\},\quad\{\pm j\},\quad\{\pm k\}.
$$
Since
$$
Q_8/\{\pm1\}\cong C_2\times C_2,
$$
there are four one-dimensional characters. The sum-of-squares formula then leaves one irreducible character of degree $2$. The table is
$$
\begin{array}{c|rrrrr}
&1&-1&\{\pm i\}&\{\pm j\}&\{\pm k\}\\ \hline
\chi_1&1&1&1&1&1\\
\chi_2&1&1&1&-1&-1\\
\chi_3&1&1&-1&1&-1\\
\chi_4&1&1&-1&-1&1\\
\chi_5&2&-2&0&0&0
\end{array}
$$
The rows are pairwise orthonormal, and their squared degrees total
$$
4\cdot1^2+2^2=8,
$$
so these are all irreducible characters.
::

::ProblemBlock{number=7}
#problem
Suppose
$$
0\longrightarrow A\xrightarrow{u}B\xrightarrow{v}C\longrightarrow0
$$
is an exact sequence of modules over a commutative ring $R$. Show that if $A$ and $C$ are finitely generated, then $B$ is finitely generated.

#proof
Let $a_1,\ldots,a_r$ generate $A$, and let $c_1,\ldots,c_s$ generate $C$. Choose $b_j\in B$ with $v(b_j)=c_j$. We claim that
$$
u(a_1),\ldots,u(a_r),b_1,\ldots,b_s
$$
generate $B$.

For $b\in B$, write
$$
v(b)=\sum_{j=1}^s r_jc_j.
$$
Then
$$
v\left(b-\sum_jr_jb_j\right)=0.
$$
By exactness, the expression in parentheses lies in $\operatorname{im}u$ and is therefore a linear combination of the $u(a_i)$. This proves the claim.
::

::ProblemBlock{number=8}
#problem
Which of the following matrices are similar over $\mathbb Q$? Which are similar over $\mathbb C$?
$$
A=\begin{bmatrix}1&0\\0&1\end{bmatrix},
\quad
B=\begin{bmatrix}1&1\\0&1\end{bmatrix},
\quad
C=\begin{bmatrix}1&-1\\0&1\end{bmatrix},
\quad
D=\begin{bmatrix}0&1\\1&0\end{bmatrix}.
$$

#proof
The matrices $B$ and $C$ are similar over $\mathbb Q$; for example, conjugating $B$ by $\operatorname{diag}(-1,1)$ changes the superdiagonal entry from $1$ to $-1$. Both have characteristic polynomial $(x-1)^2$ and minimal polynomial $(x-1)^2$.

The matrix $A$ has minimal polynomial $x-1$, so it is not similar to $B$ or $C$. The matrix $D$ has characteristic polynomial $x^2-1$, so it is not similar to any of the first three. Thus the only nontrivial similarity is
$$
B\sim C.
$$
This classification is the same over $\mathbb Q$ and over $\mathbb C$.
::

::ProblemBlock{number=9}
#problem
Answer each item with justification.

(a) If $g,h$ both have finite order in a group, must $gh$ have finite order?

(b) Does $\mathbb Z/2\mathbb Z\times\mathbb Z/4\mathbb Z$ have exactly two subgroups of index $2$?

(c) Is $S_4$ solvable?

(d) If $M,N$ are nonzero modules over a commutative ring $R$, must $M\otimes_RN$ be nonzero?

(e) Are $\mathbb Q(\sqrt7)$ and $\mathbb Q(\sqrt{11})$ isomorphic as fields?

#proof
(a) False. In the infinite dihedral group, two reflections have order $2$, but their product can be a rotation of infinite order.

(b) False. Index-$2$ subgroups are kernels of nonzero homomorphisms to $C_2$. Since
$$
\operatorname{Hom}(C_2\times C_4,C_2)\cong C_2\times C_2,
$$
there are three nonzero homomorphisms and three distinct index-$2$ subgroups.

(c) True. One has a normal series
$$
1\trianglelefteq V_4\trianglelefteq A_4\trianglelefteq S_4
$$
with abelian factors.

(d) False. For example,
$$
(\mathbb Z/2\mathbb Z)\otimes_{\mathbb Z}(\mathbb Z/3\mathbb Z)=0.
$$

(e) No. A field isomorphism fixes $\mathbb Q$. If $\sqrt7=a+b\sqrt{11}$ with $a,b\in\mathbb Q$, squaring forces $2ab=0$ and then yields no rational solution to the remaining equation. Hence the two quadratic fields are not equal and therefore not isomorphic over $\mathbb Q$.
::

::ProblemBlock{number=10}
#problem
For each item, give an example or explain why none exists.

(a) A group in which the set of squares is not a subgroup.

(b) An element of order $15$ in some $GL_n(\mathbb Q)$.

(c) A field extension of $\mathbb R$ of degree $4$.

(d) A commutative ring with identity that is not a field and has exactly one prime ideal.

(e) A nonprincipal ideal in $\mathbb Z[\sqrt{-13}]$.

#proof
(a) In $A_4$, every $3$-cycle is a square, while the nonidentity double transpositions are not squares. The product of suitable $3$-cycles is a double transposition, so the set of squares is not closed under multiplication.

(b) Let $A$ be the companion matrix of the cyclotomic polynomial $\Phi_{15}(x)$. It is an $8\times8$ rational matrix whose eigenvalues are primitive fifteenth roots of unity. Hence $A$ has order $15$.

(c) No such extension exists. The field $\mathbb R$ is real closed, and its algebraic closure $\mathbb C$ has degree $2$. Every finite extension of $\mathbb R$ therefore has degree $1$ or $2$.

(d) The ring $\mathbb Z/4\mathbb Z$ is not a field and has exactly one prime ideal, namely $(2)$.

(e) Consider
$$
I=(2,1+\sqrt{-13}).
$$
The quotient is $\mathbb F_2$, so $I$ has index $2$. If $I=(a+b\sqrt{-13})$ were principal, its index would be
$$
|a^2+13b^2|=2.
$$
This Diophantine equation has no integer solution. Hence $I$ is nonprincipal.
::
