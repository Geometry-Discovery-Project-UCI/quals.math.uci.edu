# 2007 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $\mathbb Q$ be the field of rational numbers. Find a field $F$ such that $\operatorname{Gal}(F/\mathbb Q)=D_8$, the dihedral group with $8$ elements. Prove your answer.

#proof
Let
$$
F=\mathbb Q(\sqrt[4]{2},i),
$$
the splitting field over $\mathbb Q$ of $x^4-2$. Put $\alpha=\sqrt[4]{2}$. By Eisenstein's criterion at $2$, $x^4-2$ is irreducible over $\mathbb Q$, so $[\mathbb Q(\alpha):\mathbb Q]=4$. Since $\mathbb Q(\alpha)\subset \mathbb R$, it does not contain $i$; hence $[F:\mathbb Q]=8$.

Define automorphisms $r,s\in\operatorname{Gal}(F/\mathbb Q)$ by
$$
r(\alpha)=i\alpha,\qquad r(i)=i,
$$
and
$$
s(\alpha)=\alpha,\qquad s(i)=-i.
$$
Then $r^4=s^2=1$, and
$$
srs(\alpha)=s(r(\alpha))=s(i\alpha)=-i\alpha=r^{-1}(\alpha),
$$
with the same equality on $i$. Thus $srs=r^{-1}$. The eight automorphisms
$$
1,r,r^2,r^3,s,sr,sr^2,sr^3
$$
are distinct. Since $[F:\mathbb Q]=8$, they form the full Galois group. Therefore
$$
\operatorname{Gal}(F/\mathbb Q)\cong
\langle r,s\mid r^4=s^2=1,\ srs=r^{-1}\rangle=D_8.
$$
::

::ProblemBlock{number=2}
#problem
Let $\mathbb F_q$ denote the finite field of $q$ elements. Show that
$$
|SL_n(\mathbb F_q)|=q^{n(n-1)/2}\prod_{i=2}^n(q^i-1)
$$
and
$$
|PSL_n(\mathbb F_q)|=\frac{1}{(n,q-1)}q^{n(n-1)/2}\prod_{i=2}^n(q^i-1).
$$

#proof
An invertible matrix is obtained by choosing an ordered basis of $\mathbb F_q^n$. The first column has $q^n-1$ choices; after $j$ independent columns have been chosen, the next column has $q^n-q^j$ choices. Hence
$$
|GL_n(\mathbb F_q)|=\prod_{j=0}^{n-1}(q^n-q^j).
$$
The determinant map $GL_n(\mathbb F_q)\to\mathbb F_q^\times$ is surjective and has kernel $SL_n(\mathbb F_q)$. Therefore
$$
|SL_n(\mathbb F_q)|=\frac{1}{q-1}\prod_{j=0}^{n-1}(q^n-q^j).
$$
Factoring $q^j$ from the $j$th factor and rearranging gives
$$
|SL_n(\mathbb F_q)|
=q^{0+1+\cdots+(n-1)}\prod_{i=2}^n(q^i-1)
=q^{n(n-1)/2}\prod_{i=2}^n(q^i-1).
$$

The center of $SL_n(\mathbb F_q)$ consists of the scalar matrices $\lambda I$ satisfying $\lambda^n=1$. Since $\mathbb F_q^\times$ is cyclic of order $q-1$, this center has $(n,q-1)$ elements. As $PSL_n=SL_n/Z(SL_n)$, division by this number gives the second formula.
::

::ProblemBlock{number=3}
#problem
Let $p$ be an odd positive integer. Show that if $n$ is an integer such that $p$ divides $n^2+1$, then
$$
p\equiv1\pmod 4.
$$

#proof
Write $p=\prod_j q_j^{e_j}$ with the $q_j$ odd primes. Since $q_j\mid n^2+1$, we have $n^2\equiv-1\pmod{q_j}$. In particular, $q_j\nmid n$, and the residue class of $n$ in $\mathbb F_{q_j}^{\times}$ has order exactly $4$: its square is $-1\ne1$, while its fourth power is $1$. Lagrange's theorem therefore gives
$$
4\mid(q_j-1),
$$
so every $q_j\equiv1\pmod4$. Consequently every prime power $q_j^{e_j}\equiv1\pmod4$, and hence $p\equiv1\pmod4$.
::

::ProblemBlock{number=4}
#problem
Let $M$ be an $8\times8$ matrix with entries in $\mathbb Q$, with minimal polynomial
$$
(x^4+1)(x+1)^2.
$$

(a) What is the characteristic polynomial of $M$?

(b) What are the trace and determinant of $M$?

(c) How many conjugacy classes are there of matrices in $GL_8(\mathbb Q)$ with this minimal polynomial? Write down one matrix from each conjugacy class.

#proof
The polynomial $f(x)=x^4+1=\Phi_8(x)$ is irreducible over $\mathbb Q$, and it is relatively prime to $x+1$. If the characteristic polynomial is
$$
f(x)^a(x+1)^b,
$$
the minimal polynomial forces $a\ge1$ and $b\ge2$, while the dimension gives $4a+b=8$. The only possibility is $a=1$, $b=4$. Thus
$$
\chi_M(x)=(x^4+1)(x+1)^4.
$$

The coefficient of $x^7$ in this monic polynomial is $4$. Since that coefficient equals $-\operatorname{tr}(M)$,
$$
\operatorname{tr}(M)=-4.
$$
Also, because the dimension is even, the constant term is $\det(M)$, so
$$
\det(M)=1.
$$

For the $f$-primary part, the dimension is $4$ and the minimal polynomial is $f$, so it consists of the single companion block $C(f)$. The $(x+1)$-primary part has dimension $4$, and its largest Jordan block has size exactly $2$. The partitions of $4$ whose largest part is $2$ are
$$
2+2\qquad\text{and}\qquad2+1+1.
$$
Hence there are exactly two conjugacy classes. Representatives are
$$
C(x^4+1)\oplus J_2(-1)\oplus J_2(-1)
$$
and
$$
C(x^4+1)\oplus J_2(-1)\oplus[-1]\oplus[-1],
$$
where
$$
C(x^4+1)=
\begin{pmatrix}
0&0&0&-1\\
1&0&0&0\\
0&1&0&0\\
0&0&1&0
\end{pmatrix},
\qquad
J_2(-1)=
\begin{pmatrix}-1&1\\0&-1\end{pmatrix}.
$$
::

::ProblemBlock{number=5}
#problem
Prove that $\mathbb Z[\sqrt{-2}]$ is a Euclidean domain with respect to the norm
$$
N(a+b\sqrt{-2})=a^2+2b^2.
$$

#proof
The norm is multiplicative because
$$
N(z)=z\overline z.
$$
Let $\alpha,\beta\in\mathbb Z[\sqrt{-2}]$ with $\beta\ne0$, and write
$$
\frac{\alpha}{\beta}=x+y\sqrt{-2},\qquad x,y\in\mathbb Q.
$$
Choose integers $m,n$ such that $|x-m|\le\frac12$ and $|y-n|\le\frac12$, and put $q=m+n\sqrt{-2}$ and $r=\alpha-\beta q$. Then
$$
\frac{N(r)}{N(\beta)}
=N\left(\frac{\alpha}{\beta}-q\right)
=(x-m)^2+2(y-n)^2
\le\frac14+\frac12=\frac34<1.
$$
Thus $\alpha=\beta q+r$ with either $r=0$ or $N(r)<N(\beta)$. This is the Euclidean division property, so $\mathbb Z[\sqrt{-2}]$ is Euclidean.
::

::ProblemBlock{number=6}
#problem
Prove that no group of order $105$ is simple.

#proof
Let $G$ have order $105=3\cdot5\cdot7$. By Sylow's theorems, the number $n_7$ of Sylow $7$-subgroups satisfies
$$
n_7\equiv1\pmod7,qquad n_7\mid15,
$$
so $n_7=1$ or $15$. Similarly,
$$
n_5\equiv1\pmod5,qquad n_5\mid21,
$$
so $n_5=1$ or $21$. If either number is $1$, the corresponding Sylow subgroup is normal and $G$ is not simple.

If both are larger than $1$, the $15$ distinct Sylow $7$-subgroups contribute $15(7-1)=90$ nonidentity elements, and the $21$ distinct Sylow $5$-subgroups contribute $21(5-1)=84$ nonidentity elements. Distinct subgroups of prime order intersect only in the identity, so this would give at least $90+84=174$ nonidentity elements in a group having only $104$. This is impossible. Therefore $G$ is not simple.
::

::ProblemBlock{number=7}
#problem
Let $F$ be a finite field and let $K$ be a finite extension of $F$. Show that both the norm map and the trace map from $K$ to $F$ are surjective. Is the same statement true if $K$ and $F$ are number fields?

#proof
Write $F=\mathbb F_q$ and $K=\mathbb F_{q^m}$. The multiplicative group $K^\times$ is cyclic of order $q^m-1$, and
$$
N_{K/F}(a)=a^{1+q+\cdots+q^{m-1}}=a^{(q^m-1)/(q-1)}.
$$
If $g$ generates $K^\times$, then $N(g)$ has order $q-1$, so it generates $F^\times$. Together with $N(0)=0$, this proves that the norm is surjective.

The trace is an $F$-linear map $K\to F$. Finite fields are perfect, so $K/F$ is separable, and the trace pairing is nondegenerate. In particular, the trace map is not the zero map. A nonzero linear map into the one-dimensional $F$-space $F$ is surjective.

For number fields, the trace is still surjective as a map of fields: since the characteristic is zero,
$$
\operatorname{Tr}_{K/F}(1)=[K:F]\ne0,
$$
so the $F$-linear trace map is nonzero and therefore onto. The norm need not be onto. For example, for $K=\mathbb Q(i)$ and $F=\mathbb Q$,
$$
N_{K/F}(a+bi)=a^2+b^2
$$
is nonnegative under the real embedding, so $-1$ is not a norm. Thus the corresponding assertion for both maps is false for number fields.
::

::ProblemBlock{number=8}
#problem
Let $R$ be a commutative ring with identity, and let $A,B$ be $n\times n$ matrices over $R$.

(a) Assume either $A$ or $B$ is invertible. Show that the characteristic polynomials of $AB$ and $BA$ are equal.

(b) For arbitrary $A$ and $B$, show that the characteristic polynomials of $AB$ and $BA$ are equal.

#proof
If $A$ is invertible, then
$$
BA=A^{-1}(AB)A,
$$
so $AB$ and $BA$ are similar. If $B$ is invertible, the analogous identity is $AB=B^{-1}(BA)B$. This proves (a).

For (b), work first in the polynomial ring $R[t]$. The block matrices
$$
\begin{pmatrix}I&tA\\B&I\end{pmatrix}
\quad\text{and}\quad
\begin{pmatrix}I&0\\-B&I\end{pmatrix}
$$
give, by block elimination,
$$
\det(I-tAB)=\det(I-tBA).
$$
Equivalently, one may use the general identity $\det(I+XY)=\det(I+YX)$ over any commutative ring. Both sides are polynomials in $t$. Multiplying by $x^n$ and substituting $t=x^{-1}$ yields
$$
\det(xI-AB)=\det(xI-BA)
$$
as polynomials in $R[x]$. Hence the characteristic polynomials are equal without any invertibility assumption.
::

::ProblemBlock{number=9}
#problem
Let $G$ be a finite cyclic $p$-group and let $\rho:G\to\operatorname{Aut}(V)$ be a representation on a finite-dimensional vector space $V$ over a field of characteristic $p$. Assume that $\rho$ is irreducible. Prove that $\rho$ is trivial.

#proof
Let $g$ generate $G$, say $|G|=p^r$, and put $T=\rho(g)$. Then
$$
T^{p^r}=I.
$$
In characteristic $p$,
$$
x^{p^r}-1=(x-1)^{p^r},
$$
so $(T-I)^{p^r}=0$. Thus $T-I$ is nilpotent and has nonzero kernel. The fixed-point space
$$
V^G=\ker(T-I)
$$
is therefore nonzero. Because $G$ is abelian, $V^G$ is a $G$-invariant subspace. Irreducibility gives $V^G=V$. Hence $T=I$, and since $g$ generates $G$, every element of $G$ acts trivially.
::

::ProblemBlock{number=10}
#problem
Let $n$ be a positive integer. Prove that
$$
x^{4^n}+8x+13
$$
is irreducible over $\mathbb Q$.

#proof
Set $m=4^n=2^{2n}$ and translate the polynomial by $x\mapsto x+1$:
$$
g(x)=(x+1)^m+8(x+1)+13.
$$
Its constant term is $1+8+13=22$, which is divisible by $2$ but not by $4$. For $0<k<m$, every binomial coefficient $\binom{m}{k}$ is even because $m$ is a power of $2$. Thus every nonleading coefficient of $(x+1)^m$ is even; adding $8x+8+13$ preserves divisibility by $2$ of every nonleading coefficient. The leading coefficient is $1$.

Therefore $g(x)$ is Eisenstein at $2$, so it is irreducible over $\mathbb Q$. Translation by $1$ is an automorphism of $\mathbb Q[x]$, so the original polynomial is also irreducible.
::
