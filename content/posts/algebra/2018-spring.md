# 2018 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Classify the groups of order $2018=2\cdot1009$. You may assume that $1009$ is prime.

#proof
Let $p=1009$ and let $G$ have order $2p$. By Sylow's theorems, the number $n_p$ of Sylow $p$-subgroups satisfies
$$
n_p\equiv1\pmod p,\qquad n_p\mid2.
$$
Thus $n_p=1$, so the Sylow $p$-subgroup $P$ is normal and cyclic. If $Q$ is a Sylow $2$-subgroup, then $P\cap Q=1$ and $|PQ|=2p$, so
$$
G\cong C_p\rtimes_\varphi C_2.
$$
The homomorphism $\varphi:C_2\to\operatorname{Aut}(C_p)$ sends the generator of $C_2$ to an automorphism of order dividing $2$. Since
$$
\operatorname{Aut}(C_p)\cong C_{p-1},
$$
there are exactly two possibilities: the trivial automorphism and inversion.

For the trivial action, $G\cong C_p\times C_2\cong C_{2p}$. For inversion, $G$ is the dihedral group
$$
D_{2p}=\langle r,s\mid r^p=s^2=1,\ srs^{-1}=r^{-1}\rangle.
$$
Consequently, up to isomorphism, the two groups of order $2018$ are
$$
C_{2018}\quad\text{and}\quad D_{2018}.
$$
::

::ProblemBlock{number=2}
#problem
Let $P$ be a group of order $p^r$, where $p$ is prime.

(a) Prove that $Z(P)\ne1$.

(b) Prove that $P$ is solvable.

#proof
(a) Let $P$ act on itself by conjugation. The class equation is
$$
|P|=|Z(P)|+\sum_i[P:C_P(x_i)],
$$
where the $x_i$ represent the noncentral conjugacy classes. Every index in the sum is a positive power of $p$ and is therefore divisible by $p$. Hence $p$ divides $|Z(P)|$. Since the identity lies in the center, this implies $|Z(P)|\ge p$, so $Z(P)\ne1$.

(b) We use induction on $r$. The assertion is clear for $r=0,1$. By part (a), $Z(P)$ contains a subgroup $N$ of order $p$. It is central and therefore normal. The quotient $P/N$ is a smaller $p$-group, so it is solvable by induction. Also $N$ is cyclic, hence abelian and solvable. An extension of a solvable group by a solvable group is solvable; therefore $P$ is solvable.
::

::ProblemBlock{number=3}
#problem
Let $\mathfrak m\subset R=\mathbb Z[x_1,\ldots,x_n]$ be a maximal ideal. Prove that $R/\mathfrak m$ is a finite field.

#proof
Set $K=R/\mathfrak m$. Maximality of $\mathfrak m$ makes $K$ a field, and the images of $x_1,\ldots,x_n$ generate $K$ as a ring over the image of $\mathbb Z$.

We first show that $K$ has positive characteristic. If $\operatorname{char}K=0$, then $\mathbb Z$ embeds in $K$. Since $K$ is a field, it contains $\mathbb Q$. The generalized Zariski lemma says that if a field is finitely generated as an algebra over an integral domain $A$, then $A$ must be a field after inverting finitely many elements. Applied to $A=\mathbb Z$, this would imply that
$$
\mathbb Z[1/N]
$$
is a field for some nonzero integer $N$, which is impossible: a prime not dividing $N$ is not invertible in this ring. Thus $\operatorname{char}K=p$ for some prime $p$.

It follows that $K$ is a field finitely generated as an algebra over the finite field $\mathbb F_p$. By Zariski's lemma, $K$ is a finite algebraic extension of $\mathbb F_p$. Hence
$$
|K|=p^{[K:\mathbb F_p]}<\infty.
$$
Therefore $R/\mathfrak m$ is a finite field.
::

::ProblemBlock{number=4}
#problem
Let $R$ be a UFD in which every ideal is finitely generated. Suppose that for every nonzero $a,b\in R$, a greatest common divisor $d=\gcd(a,b)$ can be written
$$
d=ra+sb
$$
for some $r,s\in R$. Prove that $R$ is a PID.

#proof
It is enough to prove that every nonzero ideal is principal. Let
$$
I=(a_1,\ldots,a_m)
$$
be a nonzero finitely generated ideal. Define successively
$$
d_2=\gcd(a_1,a_2),\qquad d_k=\gcd(d_{k-1},a_k)\quad(3\le k\le m).
$$
The hypothesis implies
$$
(a_1,a_2)=(d_2).
$$
Indeed, $d_2$ divides $a_1$ and $a_2$, while the Bezout expression for $d_2$ gives the reverse inclusion. Inductively,
$$
(a_1,\ldots,a_k)=(d_{k-1},a_k)=(d_k).
$$
Thus $I=(d_m)$ is principal. The zero ideal is also principal, so every ideal of $R$ is principal and $R$ is a PID.
::

::ProblemBlock{number=5}
#problem
Classify all finite abelian groups $G$ such that
$$
G\otimes_{\mathbb Z}(\mathbb Z/9\mathbb Z)\cong G.
$$

#proof
For every abelian group $G$,
$$
G\otimes_{\mathbb Z}(\mathbb Z/9\mathbb Z)\cong G/9G.
$$
If $G$ is finite and $G/9G\cong G$, equality of orders gives $|9G|=1$, so $9G=0$. Conversely, if $9G=0$, then $G/9G=G$, and the required isomorphism holds.

By the classification of finite abelian groups, the finite abelian groups annihilated by $9$ are precisely
$$
G\cong(\mathbb Z/3\mathbb Z)^a\oplus(\mathbb Z/9\mathbb Z)^b,
$$
where $a,b$ are arbitrary nonnegative integers. This includes the trivial group when $a=b=0$.
::

::ProblemBlock{number=6}
#problem
Let $F$ be a field, and let $A$ and $B$ be nonsingular $3\times3$ matrices over $F$. Suppose that
$$
B^{-1}AB=2A.
$$

(a) Find the characteristic of $F$.

(b) If $n$ is a positive or negative integer not divisible by $3$, prove that $\operatorname{tr}(A^n)=0$.

(c) Prove that the characteristic polynomial of $A$ is $X^3-a$ for some $a\in F$.

#proof
(a) Taking determinants gives
$$
\det A=\det(2A)=2^3\det A=8\det A.
$$
Because $A$ is nonsingular, $\det A\ne0$, so $8=1$ in $F$. Hence $7=0$, and therefore
$$
\operatorname{char}F=7.
$$

(b) For every integer $n$, including negative $n$ because $A$ is invertible,
$$
B^{-1}A^nB=2^nA^n.
$$
Taking traces yields
$$
(1-2^n)\operatorname{tr}(A^n)=0.
$$
In characteristic $7$, the element $2$ has multiplicative order $3$, since $2^3=8=1$ and neither $2$ nor $2^2$ equals $1$. Thus $2^n\ne1$ whenever $3\nmid n$, and so $\operatorname{tr}(A^n)=0$.

(c) Similar matrices have the same characteristic polynomial, so $A$ and $2A$ do. Write
$$
p_A(X)=X^3+c_2X^2+c_1X+c_0.
$$
Then
$$
p_{2A}(X)=\det(XI-2A)=2^3p_A(X/2)
=X^3+2c_2X^2+4c_1X+8c_0.
$$
Since $8=1$ and $p_{2A}=p_A$, comparison of coefficients gives
$$
c_2=2c_2,\qquad c_1=4c_1.
$$
Thus $c_2=0$ and $3c_1=0$. Since the characteristic is $7$, also $c_1=0$. Therefore
$$
p_A(X)=X^3+c_0=X^3-a
$$
with $a=-c_0\in F$ (in fact $a=\det A$).
::

::ProblemBlock{number=7}
#problem
Let $K$ be a field and let $A$ be an $n\times n$ matrix over $K$. Suppose that $f\in K[x]$ is irreducible and $f(A)=0$. Show that $\deg f$ divides $n$.

#proof
Let $V=K^n$, and make $V$ a $K[x]$-module by defining
$$
x\cdot v=Av.
$$
Because $f(A)=0$, the action factors through $K[x]/(f)$. Since $f$ is irreducible,
$$
L=K[x]/(f)
$$
is a field, so $V$ becomes an $L$-vector space. If $m=\dim_LV$, then the tower formula for vector-space dimensions gives
$$
n=\dim_KV=\dim_LV\,[L:K]=m\deg f.
$$
Hence $\deg f\mid n$.
::

::ProblemBlock{number=8}
#problem
Let $F$ be a field and let $f(x)\in F[x]$ be irreducible. Suppose that $E$ is a splitting field for $f$ over $F$ and that both $\alpha$ and $\alpha+1$ are roots of $f$.

(a) Show that $\operatorname{char}F\ne0$.

(b) Prove that there is an intermediate field $L$ such that $[E:L]=\operatorname{char}F$.

#proof
Because $\alpha$ and $\alpha+1$ have the same irreducible polynomial over $F$, the $F$-embedding
$$
F(\alpha)\longrightarrow E,\qquad \alpha\longmapsto\alpha+1,
$$
extends to an $F$-automorphism $\sigma$ of the splitting field $E$. Therefore
$$
\sigma^k(\alpha)=\alpha+k
$$
for every positive integer $k$.

(a) The group $\operatorname{Aut}_F(E)$ is finite, so $\sigma$ has finite order, say $m$. Then
$$
\alpha=\sigma^m(\alpha)=\alpha+m,
$$
and hence $m\cdot1_F=0$. Thus $F$ has positive characteristic, say $p$.

(b) The same equality shows that $p$ divides the order $m$ of $\sigma$. The cyclic group $\langle\sigma\rangle$ therefore contains a subgroup $H$ of order $p$. Let
$$
L=E^H=\{z\in E:\tau(z)=z\text{ for every }\tau\in H\}.
$$
Artin's fixed-field theorem gives
$$
[E:L]=|H|=p=\operatorname{char}F.
$$
::

::ProblemBlock{number=9}
#problem
Let $\mathbb F_q$ be a finite field and let $\alpha\in\mathbb F_q^*$. Let $K$ be a splitting field over $\mathbb F_q$ of
$$
X^{q+1}-\alpha.
$$
Prove that $[K:\mathbb F_q]=2$.

#proof
The norm map
$$
N_{\mathbb F_{q^2}/\mathbb F_q}:\mathbb F_{q^2}^*\longrightarrow\mathbb F_q^*,
\qquad z\longmapsto z^{q+1},
$$
is surjective. Indeed, the multiplicative groups are cyclic, and the image has order
$$
\frac{q^2-1}{\gcd(q^2-1,q+1)}=\frac{q^2-1}{q+1}=q-1.
$$
Choose $\beta\in\mathbb F_{q^2}^*$ with $\beta^{q+1}=\alpha$. Every root of $X^{q+1}-\alpha$ is $\beta\zeta$, where $\zeta^{q+1}=1$. All $(q+1)$st roots of unity lie in $\mathbb F_{q^2}$ because $q+1$ divides $q^2-1$. Thus the polynomial splits over $\mathbb F_{q^2}$, and $K\subseteq\mathbb F_{q^2}$.

The polynomial is separable because $q+1$ is not divisible by the characteristic. It has $q+1$ distinct roots, so it cannot split in the field $\mathbb F_q$, which has only $q$ elements. Therefore $K\ne\mathbb F_q$. Since the only possibilities inside the degree-two extension are degrees $1$ and $2$, we conclude that
$$
[K:\mathbb F_q]=2.
$$
::

::ProblemBlock{number=10}
#problem
For the alternating group $A_4$:

(a) Classify its conjugacy classes.

(b) Construct its character table.

#proof
(a) The identity forms one class. The three double transpositions
$$
(12)(34),\quad(13)(24),\quad(14)(23)
$$
form one conjugacy class. The eight $3$-cycles split into two conjugacy classes of size $4$ in $A_4$; a representative choice is
$$
C_3=[(123)],\qquad C_4=[(132)].
$$
Thus the class sizes are $1,3,4,4$.

(b) The normal Klein four subgroup $V_4$ gives
$$
A_4/V_4\cong C_3.
$$
Inflating the three irreducible characters of $C_3$ produces three one-dimensional characters of $A_4$. The fourth irreducible character is the three-dimensional standard representation obtained from the permutation representation on four letters after removing its invariant line. Let $\omega=e^{2\pi i/3}$. The character table is
$$
\begin{array}{c|rrrr}
&1&(12)(34)&(123)&(132)\\ \hline
\text{class size}&1&3&4&4\\
\chi_1&1&1&1&1\\
\chi_2&1&1&\omega&\omega^2\\
\chi_3&1&1&\omega^2&\omega\\
\chi_4&3&-1&0&0
\end{array}
$$
The sum of the squares of the degrees is
$$
1^2+1^2+1^2+3^2=12=|A_4|,
$$
so these are all the irreducible characters.
::
