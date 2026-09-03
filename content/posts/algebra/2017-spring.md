# 2017 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Suppose $G$ is a group of order $80$. Prove that $G$ is not simple.

#proof
Since $80=2^4\cdot5$, Sylow's theorems give
$$
n_5\equiv1\pmod5,\qquad n_5\mid16.
$$
Thus $n_5=1$ or $16$. If $n_5=1$, the unique Sylow $5$-subgroup is normal.

Suppose $n_5=16$. Distinct Sylow $5$-subgroups intersect trivially, so their nonidentity elements account for
$$
16(5-1)=64
$$
elements of $G$. Exactly $16$ elements remain, including the identity. Every Sylow $2$-subgroup has order $16$ and contains no nonidentity element of order $5$, so it must be precisely this remaining set. Hence the Sylow $2$-subgroup is unique and normal. In either case $G$ has a nontrivial proper normal subgroup, so it is not simple.
::

::ProblemBlock{number=2}
#problem
Prove that the additive group $\mathbb R/\mathbb Z$ is isomorphic to the multiplicative group
$$
\{z\in\mathbb C:|z|=1\}.
$$

#proof
Define
$$
\phi:\mathbb R\longrightarrow S^1,\qquad \phi(t)=e^{2\pi it}.
$$
Then $\phi(s+t)=\phi(s)\phi(t)$, so $\phi$ is a homomorphism. It is surjective because every element of the unit circle is $e^{2\pi it}$ for some $t\in\mathbb R$, and
$$
\ker\phi=\mathbb Z.
$$
The first isomorphism theorem therefore gives
$$
\mathbb R/\mathbb Z\cong S^1.
$$
::

::ProblemBlock{number=3}
#problem
Let $R$ be an integral domain. A nonzero nonunit $p\in R$ is prime if $p\mid ab$ implies $p\mid a$ or $p\mid b$, and it is irreducible if $p=ab$ implies that $a$ or $b$ is a unit.

(a) Show that every prime element is irreducible.

(b) Show that in a UFD every irreducible element is prime.

#proof
(a) Suppose $p$ is prime and $p=ab$. Since $p\mid ab$, primality gives $p\mid a$ or $p\mid b$. If $p\mid a$, write $a=pc$. Then
$$
p=ab=pcb.
$$
Cancellation in the domain gives $1=cb$, so $b$ is a unit. Similarly, if $p\mid b$, then $a$ is a unit. Hence $p$ is irreducible.

(b) Let $p$ be irreducible in a UFD and suppose $p\mid ab$. Then $ab=pc$. Factor $a,b,c$ into irreducibles. Uniqueness of factorization implies that the irreducible $p$ is associate to a factor occurring in the factorization of $a$ or of $b$. Hence $p\mid a$ or $p\mid b$, so $p$ is prime.
::

::ProblemBlock{number=4}
#problem
Let $G$ and $H$ be finite abelian groups whose orders are relatively prime. Show that
$$
G\otimes_{\mathbb Z}H=0.
$$

#proof
Let $m=|G|$ and $n=|H|$. For every pure tensor $g\otimes h$,
$$
m(g\otimes h)=(mg)\otimes h=0,
$$
and similarly $n(g\otimes h)=0$. Choose integers $r,s$ with $rm+sn=1$. Then
$$
g\otimes h=(rm+sn)(g\otimes h)=0.
$$
Pure tensors generate the tensor product, so $G\otimes_{\mathbb Z}H=0$.
::

::ProblemBlock{number=5}
#problem
Let
$$
D_8=\langle r,s\mid r^4=s^2=1,\ srs=r^{-1}\rangle
$$
be the dihedral group of order $8$.

(a) Compute its center.

(b) Compute its commutator subgroup.

(c) Compute its conjugacy classes.

#proof
(a) A rotation $r^k$ commutes with $s$ exactly when $r^k=r^{-k}$, or $2k\equiv0\pmod4$. No reflection commutes with $r$. Thus
$$
Z(D_8)=\{1,r^2\}.
$$

(b) The defining relation gives
$$
[s,r]=srs^{-1}r^{-1}=r^{-2}=r^2.
$$
Also $D_8/\langle r^2\rangle$ is abelian. Hence
$$
[D_8,D_8]=\langle r^2\rangle=\{1,r^2\}.
$$

(c) The conjugacy classes are
$$
\{1\},\quad\{r^2\},\quad\{r,r^3\},\quad
\{s,r^2s\},\quad\{rs,r^3s\}.
$$
They have total size $1+1+2+2+2=8$.
::

::ProblemBlock{number=6}
#problem
Let $R$ be a commutative ring with identity and let $M$ be an $R$-module. Show that if $M\oplus M$ is finitely generated as an $R$-module, then $M$ is finitely generated.

#proof
Let
$$
(a_1,b_1),\ldots,(a_t,b_t)
$$
generate $M\oplus M$. For any $m\in M$, express
$$
(m,0)=\sum_{j=1}^t r_j(a_j,b_j).
$$
Comparing first coordinates gives
$$
m=\sum_{j=1}^t r_ja_j.
$$
Thus $a_1,\ldots,a_t$ generate $M$, so $M$ is finitely generated.
::

::ProblemBlock{number=7}
#problem
(a) Find $f(x)\in\mathbb Q[x]$ whose splitting field has Galois group $\mathbb Z/2\mathbb Z$.

(b) Find $g(x)\in\mathbb Q[x]$ whose splitting field has Galois group $S_3$.

(c) Find $h(x)\in\mathbb Q[x]$ whose splitting field has Galois group $\mathbb Z/2\mathbb Z\times S_3$.

#proof
(a) Take
$$
f(x)=x^2-2.
$$
Its splitting field is $\mathbb Q(\sqrt2)$, a quadratic extension, so its Galois group is $C_2$.

(b) Take
$$
g(x)=x^3-2.
$$
It is irreducible by Eisenstein's criterion. Its discriminant is $-108$, which is not a square in $\mathbb Q$. Hence the Galois group of its splitting field is $S_3$.

(c) Let
$$
h(x)=(x^2-2)(x^3-2).
$$
The splitting field $L$ of $x^3-2$ has Galois group $S_3$ and has a unique quadratic subfield, namely $\mathbb Q(\sqrt{-3})$. Therefore
$$
L\cap\mathbb Q(\sqrt2)=\mathbb Q.
$$
The two Galois extensions are linearly disjoint, so the splitting field of $h$ has Galois group
$$
\operatorname{Gal}(L/\mathbb Q)\times
\operatorname{Gal}(\mathbb Q(\sqrt2)/\mathbb Q)
\cong S_3\times C_2.
$$
::

::ProblemBlock{number=8}
#problem
Suppose $F$ is a perfect field and $f(x)\in F[x]$ is nonconstant. Show that $F[x]/(f)$ is a direct product of fields if and only if $f$ is separable.

#proof
The perfectness assumption is necessary: without it, an irreducible inseparable polynomial gives a quotient that is a field although the polynomial is not separable.

Factor
$$
f=u\prod_{i=1}^r p_i^{e_i},
$$
where $u\in F^*$ and the $p_i$ are distinct monic irreducibles. By the Chinese remainder theorem,
$$
F[x]/(f)\cong\prod_{i=1}^r F[x]/(p_i^{e_i}).
$$
This is a product of fields exactly when every $e_i=1$: if $e_i>1$, the class of $p_i$ is a nonzero nilpotent in the corresponding factor; if $e_i=1$, every factor $F[x]/(p_i)$ is a field.

Over a perfect field every irreducible polynomial is separable, so $f$ is separable exactly when it has no repeated irreducible factor, that is, exactly when every $e_i=1$. This proves the equivalence.
::

::ProblemBlock{number=9}
#problem
Let $p$ be prime.

(a) Show that all matrices $A\in GL_2(\mathbb F_p)$ of order exactly $p$ have the same characteristic polynomial, and find it.

(b) Show that they all have the same minimal polynomial, and find it.

#proof
Since $A^p=I$ and the characteristic is $p$,
$$
A^p-I=(A-I)^p=0.
$$
Thus the minimal polynomial of $A$ divides
$$
x^p-1=(x-1)^p.
$$
The only eigenvalue is $1$, so the characteristic polynomial of the $2\times2$ matrix is
$$
\chi_A(x)=(x-1)^2.
$$

The minimal polynomial has degree at most $2$ and is a positive power of $x-1$. It cannot equal $x-1$, because that would imply $A=I$, whose order is $1$, not $p$. Therefore
$$
m_A(x)=(x-1)^2.
$$
::

::ProblemBlock{number=10}
#problem
Let $K=\mathbb F_3(\sqrt2)$ and let $f(x)=x^4+1\in\mathbb F_3[x]$.

(a) Show that $K$ is the splitting field of $f$.

(b) Find a generator $\alpha$ of $K^*$.

(c) Express the roots of $f$ in terms of $\alpha$.

#proof
Let $t=\sqrt2$, so $t^2=2=-1$ in $\mathbb F_3$. The polynomial $x^2+1$ has no root in $\mathbb F_3$, so $K=\mathbb F_9$.

Set
$$
\alpha=1+t.
$$
Then
$$
\alpha^2=1+2t+t^2=2t=-t,
$$
and hence
$$
\alpha^4=t^2=2=-1,
\qquad
\alpha^8=1.
$$
Therefore $\alpha$ has order $8$, so it generates the cyclic group $K^*$.

The roots of $x^4+1$ satisfy $x^4=-1=\alpha^4$. They are exactly the odd powers
$$
\alpha,\quad\alpha^3,\quad\alpha^5,\quad\alpha^7.
$$
They all lie in $K$, and $f$ has no root in $\mathbb F_3$, so $K$ is its splitting field.
::
