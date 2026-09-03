# 2025 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $G$ be a finite group and let $H$ be a maximal subgroup of $G$. Prove that the number of elements of $G$ contained in every conjugate of $H$ is at most

$$
(|H|-1)[G:H]+1.
$$

#proof
The elements contained in every conjugate of $H$ form the core

$$
C=\bigcap_{g\in G}gHg^{-1}.
$$

In particular, $C\subseteq H$, so $|C|\leq |H|$. Put $r=[G:H]$. Since $H$ is proper, $r\geq2$.

If $|H|=1$, then $|C|=1=(|H|-1)r+1$. If $|H|\geq2$, then

$$
(|H|-1)r+1\geq2(|H|-1)+1=2|H|-1\geq |H|\geq |C|.
$$

Thus in all cases the required bound holds.
::

::ProblemBlock{number=2}
#problem
Give an example of a semidirect product of two cyclic groups of odd order that is not abelian.

#proof
Let

$$
G=\langle a,b\mid a^7=b^3=1,\ bab^{-1}=a^2\rangle.
$$

Because $2^3\equiv1\pmod7$, the map $a\mapsto a^2$ defines an automorphism of order $3$ of $C_7$. Hence

$$
G\cong C_7\rtimes C_3.
$$

Both cyclic factors have odd order. The product is not abelian because $a^2\neq a$, and therefore

$$
bab^{-1}=a^2\neq a.
$$
::

::ProblemBlock{number=3}
#problem
Let $G$ be finite, let $p$ divide $|G|$, and let $O_p$ be the intersection of all Sylow $p$-subgroups of $G$. Prove that $O_p$ is normal in $G$ and contains every normal $p$-subgroup of $G$.

#proof
Conjugation by any $g\in G$ permutes the Sylow $p$-subgroups. Therefore

$$
gO_pg^{-1}
=g\left(\bigcap_{P\in\operatorname{Syl}_p(G)}P\right)g^{-1}
=\bigcap_{P\in\operatorname{Syl}_p(G)}gPg^{-1}
=O_p.
$$

Thus $O_p\triangleleft G$.

Now let $N\triangleleft G$ be a $p$-subgroup, and let $P$ be any Sylow $p$-subgroup. Since $N$ is normal, $NP$ is a subgroup. It is a $p$-group because

$$
|NP|=\frac{|N||P|}{|N\cap P|}
$$

is a power of $p$. The maximality of the Sylow subgroup $P$ therefore implies $NP=P$, so $N\subseteq P$. This holds for every Sylow $p$-subgroup, and hence $N\subseteq O_p$.
::

::ProblemBlock{number=4}
#problem
Let $R$ be a commutative ring with identity and let $I\triangleleft R$ satisfy $R/I\cong\mathbb Z[i]$.

**(a)** Prove that if $J$ is a maximal ideal containing $I$, then $R/J$ is finite.

**(b)** Find distinct maximal ideals $J_0,J_1$ containing $I$ such that $R/J_0\cong R/J_1$.

#proof
Fix a quotient map

$$
\pi:R\longrightarrow R/I\cong\mathbb Z[i].
$$

The correspondence theorem identifies ideals of $R$ containing $I$ with ideals of $\mathbb Z[i]$.

**(a)** Let $M=\pi(J)$. Then $M$ is a maximal ideal of $\mathbb Z[i]$. It is nonzero because $(0)$ is not maximal in $\mathbb Z[i]$. Choose $0\neq z\in M$. The additive group $\mathbb Z[i]/(z)$ is finite of order $N(z)=z\overline z$. Since

$$
\mathbb Z[i]/M
$$

is a quotient of $\mathbb Z[i]/(z)$, it is finite. Finally,

$$
R/J\cong\mathbb Z[i]/M,
$$

so $R/J$ is finite.

**(b)** The Gaussian primes $2+i$ and $2-i$ are not associates, and both have norm $5$. Thus

$$
M_0=(2+i),
\qquad
M_1=(2-i)
$$

are distinct maximal ideals and

$$
\mathbb Z[i]/M_0\cong\mathbb F_5\cong\mathbb Z[i]/M_1.
$$

Set $J_j=\pi^{-1}(M_j)$. Then $J_0$ and $J_1$ have all the required properties.
::

::ProblemBlock{number=5}
#problem
Let $R$ be a commutative ring, let $f\in R$, and let $R_f=S^{-1}R$ for $S=\{1,f,f^2,\ldots\}$. Prove that

$$
R_f\cong R[t]/(tf-1).
$$

#proof
Define a homomorphism

$$
\Phi:R[t]\longrightarrow R_f
$$

by $\Phi(r)=r/1$ for $r\in R$ and $\Phi(t)=1/f$. It is surjective because every element $a/f^n$ equals $\Phi(at^n)$. Also $tf-1\in\ker\Phi$, so $\Phi$ induces a surjective map

$$
\overline\Phi:R[t]/(tf-1)\longrightarrow R_f.
$$

Conversely, define

$$
\Psi:R_f\longrightarrow R[t]/(tf-1),
\qquad
\Psi\left(\frac{a}{f^n}\right)=\overline{at^n}.
$$

This is well defined. Indeed, if $a/f^n=b/f^m$, then $f^k(f^ma-f^nb)=0$ for some $k$. In the quotient, $tf=1$, so multiplying that equality by $t^{m+n+k}$ gives $at^n=bt^m$. Direct calculation shows that $\Psi$ is a ring homomorphism and that $\Psi$ and $\overline\Phi$ are inverse maps. Hence the rings are isomorphic.
::

::ProblemBlock{number=6}
#problem
Let $M$ be a module over a commutative ring $R$, and let $N\subseteq M$ be a submodule. If $N$ and $M/N$ are finitely generated, prove that $M$ is finitely generated.

#proof
Choose generators $n_1,\ldots,n_r$ of $N$. Let

$$
m_1+N,\ldots,m_s+N
$$

generate $M/N$. We claim that

$$
n_1,\ldots,n_r,m_1,\ldots,m_s
$$

generate $M$. Given $m\in M$, its coset can be written as

$$
m+N=a_1(m_1+N)+\cdots+a_s(m_s+N).
$$

Therefore $m-\sum a_jm_j\in N$, so it is an $R$-linear combination of the $n_i$. Thus $m$ is an $R$-linear combination of the displayed finite set, proving that $M$ is finitely generated.
::

::ProblemBlock{number=7}
#problem
Let $A$ be a matrix over $\mathbb F_3$ satisfying

$$
A^4=A^2+I.
$$

Prove that $A$ is diagonalizable over $\mathbb F_{81}$.

#proof
The minimal polynomial of $A$ divides

$$
h(x)=x^4-x^2-1\in\mathbb F_3[x].
$$

Put $y=x^2$. The polynomial $y^2-y-1$ is irreducible over $\mathbb F_3$, so its two roots lie in $\mathbb F_9$. Every element of $\mathbb F_9^\times$ is a square in $\mathbb F_{81}^\times$: the latter group is cyclic of order $80$, and its subgroup $\mathbb F_9^\times$ of order $8$ is generated by the tenth power of a generator, which is a square. Therefore both roots of $y^2-y-1$ have square roots in $\mathbb F_{81}$, and $h$ splits there.

It remains to check that $h$ has no repeated root. In characteristic $3$,

$$
h'(x)=4x^3-2x=x^3+x=x(x^2+1).
$$

The value $x=0$ is not a root of $h$. If $x^2=-1$, then

$$
h(x)=x^4-x^2-1=1+1-1=1\neq0.
$$

Thus $\gcd(h,h')=1$, so $h$ is separable. The minimal polynomial of $A$ therefore splits into distinct linear factors over $\mathbb F_{81}$, which proves that $A$ is diagonalizable over that field.
::

::ProblemBlock{number=8}
#problem
Let $K/F$ be Galois with $\operatorname{Gal}(K/F)\cong S_3$.

**(a)** Describe the diagram of intermediate fields and label the degrees.

**(b)** How many intermediate fields $E$, with $F\subseteq E\subseteq K$, are Galois over $F$?

#proof
The subgroups of $S_3$ are the trivial subgroup, $S_3$, the unique subgroup $A_3$ of order $3$, and three subgroups of order $2$ generated by transpositions.

By the Galois correspondence, $A_3$ corresponds to one field $E_2$ with

$$
[E_2:F]=2,
\qquad
[K:E_2]=3.
$$

The three order-$2$ subgroups correspond to three distinct fields $E_{3,1},E_{3,2},E_{3,3}$ satisfying

$$
[E_{3,j}:F]=3,
\qquad
[K:E_{3,j}]=2.
$$

Together with the endpoints $F$ and $K$, these are all intermediate fields.

An intermediate extension $E/F$ is Galois exactly when the corresponding subgroup is normal in $S_3$. The normal subgroups are

$$
\{1\},\qquad A_3,\qquad S_3.
$$

Thus, including the endpoints as the question does, exactly three intermediate fields are Galois over $F$: $F$, $E_2$, and $K$. If only strict intermediate fields are counted, the answer is one.
::

::ProblemBlock{number=9}
#problem
Let $F$ have characteristic $p>0$, and suppose

$$
f(x)=x^p-\beta\in F[x]
$$

has no root in $F$. Prove that $f$ is irreducible over $F$.

#proof
Let $\alpha$ be a root in an algebraic closure. In characteristic $p$,

$$
x^p-\beta=(x-\alpha)^p,
$$

so $\alpha$ is the only root of $f$. Let $m(x)$ be the minimal polynomial of $\alpha$ over $F$. Since $m$ divides $f$, over the algebraic closure it has the form

$$
m(x)=(x-\alpha)^d
$$

for some $1\leq d\leq p$. If $d<p$, then the coefficient of $x^{d-1}$ in $m$ is $-d\alpha$. Because $d$ is nonzero in $F$, this coefficient being in $F$ would imply $\alpha\in F$. That would make $\alpha$ a root of $f$ in $F$, contrary to the hypothesis. Therefore $d=p$, so the minimal polynomial of $\alpha$ has the same degree as $f$. Hence $f$ is irreducible.
::

::ProblemBlock{number=10}
#problem
Let $\alpha\neq-1$ be a root of $x^5+1\in\mathbb Q[x]$. Is $\mathbb Q(\alpha)/\mathbb Q$ Galois?

#proof
We have

$$
x^5+1=(x+1)(x^4-x^3+x^2-x+1)=(x+1)\Phi_{10}(x).
$$

Since $\alpha\neq-1$, it is a root of the cyclotomic polynomial $\Phi_{10}$. Thus $\alpha$ is a primitive tenth root of unity and

$$
\mathbb Q(\alpha)=\mathbb Q(\zeta_{10}).
$$

Every cyclotomic extension of $\mathbb Q$ is Galois: it is the splitting field of $x^{10}-1$ in characteristic zero. Therefore $\mathbb Q(\alpha)/\mathbb Q$ is Galois. Its Galois group is

$$
(\mathbb Z/10\mathbb Z)^\times\cong C_4.
$$
::
