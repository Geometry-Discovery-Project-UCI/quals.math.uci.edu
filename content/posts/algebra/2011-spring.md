# 2011 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $p$ be an odd prime. Prove that $\mathbb Q(e^{2\pi i/p})$ contains a unique quadratic extension of $\mathbb Q$. For which $p$ is this quadratic field contained in $\mathbb R$?

#proof
Let $K=\mathbb Q(\zeta_p)$. Then
$$
\operatorname{Gal}(K/\mathbb Q)\cong(\mathbb Z/p\mathbb Z)^*,
$$
which is cyclic of order $p-1$. A quadratic subfield corresponds to a subgroup of index $2$, and a cyclic group has exactly one such subgroup. Thus $K$ contains a unique quadratic extension of $\mathbb Q$.

The index-$2$ subgroup consists of the squares in $(\mathbb Z/p\mathbb Z)^*$. The quadratic field is contained in the maximal real subfield exactly when complex conjugation belongs to this subgroup. Complex conjugation corresponds to $-1$, which is a square modulo $p$ exactly when
$$
p\equiv1\pmod4.
$$
Thus the quadratic field is real precisely for $p\equiv1\pmod4$. More explicitly, the unique field is
$$
\mathbb Q\left(\sqrt{(-1)^{(p-1)/2}p}\right).
$$
::

::ProblemBlock{number=2}
#problem
Prove that
$$
(2,3-\sqrt{-5})
$$
is a maximal ideal in $\mathbb Z[\sqrt{-5}]$.

#proof
Define
$$
\phi:\mathbb Z[\sqrt{-5}]\longrightarrow\mathbb F_2,
\qquad
\phi(a+b\sqrt{-5})=\overline{a+b}.
$$
This is a ring homomorphism because the proposed image of $\sqrt{-5}$ is $1$, and
$$
1^2=1=-5
$$
in $\mathbb F_2$. It is surjective. Its kernel consists of elements with $a+b$ even.

The generators $2$ and $3-\sqrt{-5}$ lie in the kernel. Conversely, modulo their ideal we have $2=0$ and $\sqrt{-5}=3=1$, so every element of the kernel vanishes. Therefore
$$
\ker\phi=(2,3-\sqrt{-5}).
$$
The quotient is $\mathbb F_2$, a field, so the ideal is maximal.
::

::ProblemBlock{number=3}
#problem
A ring $R$ is Noetherian if every strictly increasing chain of ideals is finite. Prove that every ideal of a Noetherian ring is finitely generated, and prove that $\mathbb Z$ is Noetherian.

#proof
Let $I$ be an ideal of a Noetherian ring. If $I$ were not finitely generated, choose $a_1\in I$, and after choosing $a_1,\ldots,a_n$, choose
$$
a_{n+1}\in I\setminus(a_1,\ldots,a_n).
$$
Then
$$
(a_1)\subsetneq(a_1,a_2)\subsetneq(a_1,a_2,a_3)\subsetneq\cdots
$$
would be an infinite strictly increasing chain, a contradiction. Hence every ideal is finitely generated.

Every ideal of $\mathbb Z$ is principal, so it is finitely generated. Equivalently, in any ascending chain of ideals, the union is an ideal $(d)$; once $d$ belongs to one term, that term equals the union and the chain stabilizes. Thus $\mathbb Z$ is Noetherian.
::

::ProblemBlock{number=4}
#problem
Let $G$ be the Galois group of $x^6-27$ over $\mathbb Q$. Describe every element through its action on generators of the splitting field, and identify $G$ abstractly.

#proof
The positive real sixth root of $27$ is $\sqrt3$. The roots are
$$
\sqrt3\,\zeta_6^k,
\qquad 0\le k<6.
$$
Since
$$
\zeta_6=\frac{1+i\sqrt3}{2},
$$
the splitting field is
$$
L=\mathbb Q(\sqrt3,i).
$$
The two quadratic fields $\mathbb Q(\sqrt3)$ and $\mathbb Q(i)$ are distinct, so $[L:\mathbb Q]=4$.

Every automorphism independently chooses the signs of $\sqrt3$ and $i$. Thus the four automorphisms are
$$
\begin{array}{c|cc}
&\sqrt3&i\\ \hline
1&\sqrt3&i\\
\sigma&-\sqrt3&i\\
\tau&\sqrt3&-i\\
\sigma\tau&-\sqrt3&-i
\end{array}
$$
and both $\sigma$ and $\tau$ have order $2$ and commute. Therefore
$$
G\cong C_2\times C_2.
$$
::

::ProblemBlock{number=5}
#problem
Prove that if $|G|=5\cdot7\cdot11$, then $|Z(G)|$ is divisible by $7$.

#proof
The number of Sylow $7$-subgroups satisfies
$$
n_7\equiv1\pmod7,
\qquad n_7\mid55.
$$
The only possibility is $n_7=1$. Let $P$ be the unique Sylow $7$-subgroup, so $P\trianglelefteq G$ and $P\cong C_7$.

Conjugation gives a homomorphism
$$
G\longrightarrow\operatorname{Aut}(P),
$$
whose image has order dividing both $|G|=385$ and
$$
|\operatorname{Aut}(C_7)|=6.
$$
These integers are relatively prime, so the image is trivial. Hence $P\subseteq Z(G)$, and therefore $7$ divides $|Z(G)|$.
::

::ProblemBlock{number=6}
#problem
Describe all maximal ideals in
$$
A=\mathbb Z[X]/(3X).
$$

#proof
Maximal ideals of $A$ correspond to maximal ideals $M$ of $\mathbb Z[X]$ containing $(3X)$. Such an $M$ is prime, so from $3X\in M$ we get either $3\in M$ or $X\in M$.

If $X\in M$, then $M/(X)$ is maximal in $\mathbb Z[X]/(X)\cong\mathbb Z$, so
$$
M=(X,p)
$$
for some rational prime $p$.

If $3\in M$, then $M/(3)$ is maximal in $\mathbb F_3[X]$, so
$$
M=(3,f(X)),
$$
where $f$ is a monic irreducible polynomial over $\mathbb F_3$.

Taking the images of these ideals in $A$ gives the complete list. The overlap $(X,3)$ appears in both families when $p=3$ and $f=X$.
::

::ProblemBlock{number=7}
#problem
Let $F$ have characteristic $p>0$ and define
$$
\phi:F\to F,
\qquad \phi(x)=x^p.
$$

(a) Show that $\phi$ is a field homomorphism.

(b) Show that it is an automorphism when $F$ is finite.

(c) Give a field for which it is not an automorphism.

#proof
(a) In characteristic $p$, the binomial coefficients $\binom pk$ vanish for $0<k<p$, so
$$
(x+y)^p=x^p+y^p.
$$
Also $(xy)^p=x^py^p$ and $1^p=1$. Thus $\phi$ is a field homomorphism.

(b) Every field homomorphism is injective. If $F$ is finite, an injective self-map is surjective, so $\phi$ is an automorphism.

(c) Take $F=\mathbb F_p(t)$. The element $t$ is not a $p$th power in this rational function field, so Frobenius is not surjective and hence not an automorphism.
::

::ProblemBlock{number=8}
#problem
Suppose $A$ is an $n\times n$ complex matrix with minimal polynomial $(x-\lambda)^n$.

(a) Find the Jordan form of $A$.

(b) Find the Jordan form of $A^2$ when $\lambda\ne0$.

(c) Find the Jordan form of $A^2$ when $\lambda=0$.

#proof
(a) The exponent $n$ in the minimal polynomial says that the largest Jordan block for $\lambda$ has size $n$. Since the whole matrix has size $n$, there is only one block:
$$
A\sim J_n(\lambda).
$$

(b) Write $A=\lambda I+N$, where $N=J_n(0)$. Then
$$
A^2-\lambda^2I=N(2\lambda I+N).
$$
When $\lambda\ne0$, the second factor is invertible and commutes with $N$. Consequently the kernels of powers of $A^2-\lambda^2I$ have the same dimensions as those of $N$, so there is one Jordan block of size $n$:
$$
A^2\sim J_n(\lambda^2).
$$

(c) Now $A=N=J_n(0)$, so $A^2$ moves each standard basis vector two positions along the Jordan chain. The odd- and even-indexed vectors form two chains of lengths
$$
\left\lceil\frac n2\right\rceil
\quad\text{and}\quad
\left\lfloor\frac n2\right\rfloor.
$$
Thus
$$
A^2\sim J_{\lceil n/2\rceil}(0)
\oplus J_{\lfloor n/2\rfloor}(0),
$$
omitting the zero-size block when $n=1$.
::

::ProblemBlock{number=9}
#problem
Let $V=\mathbb C[S_3]$, with $S_3$ acting on the group-basis elements by conjugation.

(a) Give the character table of $S_3$.

(b) Find the character of $V$.

(c) Decompose it into irreducibles.

#proof
(a) For classes $1,(12),(123)$, the table is
$$
\begin{array}{c|rrr}
&1&(12)&(123)\\ \hline
\chi_{\mathrm{triv}}&1&1&1\\
\chi_{\mathrm{sgn}}&1&-1&1\\
\chi_{\mathrm{std}}&2&0&-1
\end{array}
$$

(b) Conjugation permutes the basis $S_3$. The trace at $g$ is the number of group elements fixed by conjugation by $g$, namely $|C_{S_3}(g)|$. These centralizer orders are $6,2,3$, so
$$
\chi_V=(6,2,3).
$$

(c) Taking character inner products, using class sizes $1,3,2$, gives multiplicities
$$
\langle\chi_V,\chi_{\mathrm{triv}}\rangle=3,
\quad
\langle\chi_V,\chi_{\mathrm{sgn}}\rangle=1,
\quad
\langle\chi_V,\chi_{\mathrm{std}}\rangle=1.
$$
Hence
$$
\chi_V=3\chi_{\mathrm{triv}}+
\chi_{\mathrm{sgn}}+\chi_{\mathrm{std}}.
$$
::

::ProblemBlock{number=10}
#problem
Determine whether each statement is true or false.

(a) If every finitely generated subgroup of $G$ is cyclic, then $G$ is cyclic.

(b) If $G$ is nonabelian, then $Z(G)$ is properly contained in some abelian subgroup.

(c) Two $3\times3$ complex matrices with the same minimal and characteristic polynomials are similar.

(d) If $F$ is a finite extension of $\mathbb Q$ in $\mathbb C$ and $F\not\subseteq\mathbb R$, then $[F:\mathbb Q]$ is even.

(e) If a commutative ring with identity has a unique prime ideal, then it is a field.

#proof
(a) False. Every finitely generated subgroup of the additive group $\mathbb Q$ is cyclic, but $\mathbb Q$ itself is not cyclic.

(b) True. Choose $g\notin Z(G)$. Then $\langle Z(G),g\rangle$ is abelian and properly contains $Z(G)$.

(c) True. In dimension $3$, the characteristic polynomial and the largest invariant factor, which is the minimal polynomial, uniquely determine all invariant factors.

(d) False. Let $\alpha=\zeta_3\sqrt[3]{2}$, a nonreal root of $x^3-2$. Then
$$
F=\mathbb Q(\alpha)\not\subseteq\mathbb R,
$$
but $[F:\mathbb Q]=3$.

(e) False. The ring $\mathbb Z/4\mathbb Z$ has the unique prime ideal $(2)$ but is not a field.
::
