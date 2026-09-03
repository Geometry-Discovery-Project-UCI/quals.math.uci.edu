# 2001 Spring Qualifying Exam in Algebra (AI-generated)

::ProblemBlock{number=1}
#problem
Let $G\le S_n$ have order $(n-1)!$. Let $S_n$ act by left multiplication on $S_n/G$.

(a) Explain how this action gives a homomorphism $h:S_n\to S_n$.

(b) If $K=\ker h$, show that $K\subseteq G$.

(c) Assuming $K=\{1\}$, explain how $h$ identifies $G$ with $S_{n-1}$.

(d) Prove that $K=\{1\}$. You may assume $n>5$ and that $A_n$ is simple.

#proof
(a) The index of $G$ is
$$
[S_n:G]=\frac{n!}{(n-1)!}=n.
$$
Thus $S_n/G$ has $n$ elements. After labeling them $1,\ldots,n$, left multiplication gives a permutation of these labels and hence a homomorphism
$$
h:S_n\to\operatorname{Sym}(S_n/G)\cong S_n.
$$

(b) If $k\in K$, then $k$ fixes every coset, in particular the coset $G$. Thus $kG=G$, which means $k\in G$. Hence $K\subseteq G$.

(c) If $K=1$, then $h$ is injective and, because domain and codomain both have order $n!$, it is an automorphism. The subgroup $G$ is the stabilizer of its own coset in the coset action, so $h(G)$ is a point stabilizer in $S_n$. Every point stabilizer is isomorphic to $S_{n-1}$.

(d) The subgroup $K$ is normal in $S_n$. Now $K\cap A_n\triangleleft A_n$, so simplicity gives $K\cap A_n=1$ or $A_n$. The latter is impossible because $K\subseteq G$ and
$$
|G|=(n-1)!<\frac{n!}{2}=|A_n|.
$$
Thus $K\cap A_n=1$. The quotient map $S_n\to S_n/A_n$ restricts injectively to $K$, so $|K|\le2$. A normal subgroup of order $2$ would be central, but $Z(S_n)=1$ for $n>2$. Therefore $K=1$.
::

::ProblemBlock{number=2}
#problem
Let $p_1<p_2$ be primes and let $|G|=p_1p_2$.

(a) Show that $G$ is a semidirect product of a subgroup $H$ of order $p_1$ and a normal subgroup $N$ of order $p_2$.

(b) If $p_1\nmid(p_2-1)$, show that the product is direct and $G$ is abelian.

(c) If $p_1\mid(p_2-1)$, construct a nonabelian group of order $p_1p_2$.

#proof
(a) Sylow's theorem gives
$$
n_{p_2}\equiv1\pmod{p_2},
\qquad
n_{p_2}\mid p_1.
$$
Since $p_1<p_2$, this forces $n_{p_2}=1$. Let $N$ be the normal Sylow $p_2$-subgroup, and let $H$ be a Sylow $p_1$-subgroup. Then $N\cap H=1$ and $|NH|=|G|$, so
$$
G=N\rtimes H.
$$

(b) We have $N\cong C_{p_2}$ and
$$
\operatorname{Aut}(N)\cong C_{p_2-1}.
$$
The action homomorphism $H\to\operatorname{Aut}(N)$ must be trivial if $p_1\nmid p_2-1$. Hence $G=N\times H\cong C_{p_1p_2}$.

(c) If $p_1\mid p_2-1$, the cyclic group $\mathbb F_{p_2}^*$ has an element $a$ of order $p_1$. Let $C_{p_1}$ act on the additive group of $\mathbb F_{p_2}$ by multiplication by $a$. The semidirect product
$$
\mathbb F_{p_2}\rtimes C_{p_1}
$$
has order $p_1p_2$ and is nonabelian because the action is nontrivial.
::

::ProblemBlock{number=3}
#problem
Let $\rho$ be a complex representation of a finite group $G$ on $\mathbb C^d$.

(a) Show that $\rho$ is conjugate to a unitary representation.

(b) Show that every eigenvalue of a unitary operator has absolute value $1$.

(c) If $\chi$ is the character of $\rho$, prove that $|\chi(g)|\le d$ for all $g$, and that equality implies $\chi(g)=\varepsilon d$ for a root of unity $\varepsilon$.

#proof
(a) Begin with any Hermitian inner product $(\ ,\ )$ and average it:
$$
\langle v,w\rangle_G
=\frac1{|G|}\sum_{g\in G}(\rho(g)v,\rho(g)w).
$$
This is positive definite and $G$-invariant. Choosing an orthonormal basis for it makes every $\rho(g)$ unitary. Relative to the original basis, this is simultaneous conjugation.

(b) If $Uv=\lambda v$ and $v\ne0$, then
$$
\|v\|=\|Uv\|=\|\lambda v\|=|\lambda|\|v\|,
$$
so $|\lambda|=1$.

(c) Let $\lambda_1,\ldots,\lambda_d$ be the eigenvalues of $\rho(g)$. Then
$$
|\chi(g)|=|\lambda_1+\cdots+\lambda_d|
\le\sum_j|\lambda_j|=d.
$$
Equality in the triangle inequality occurs only when all $\lambda_j$ have the same argument, so they are all equal to some $\varepsilon$. Since $g$ has finite order, $\varepsilon$ is a root of unity. Hence $\chi(g)=\varepsilon d$.
::

::ProblemBlock{number=4}
#problem
Let $G$ have order $n$, let $r$ be its number of conjugacy classes, let $s$ be its number of irreducible complex representations, and let their degrees be $d_1,ldots,d_s$.

(a) State the numerical relations among these numbers.

(b) Give the character table of $S_3$.

(c) Use (a) to prove that every irreducible representation of an abelian group is one-dimensional.

#proof
(a) The fundamental relations are
$$
r=s
$$
and
$$
d_1^2+\cdots+d_s^2=n.
$$

(b) On the conjugacy classes represented by $1,(12),(123)$, the character table is
$$
\begin{array}{c|ccc}
&1&(12)&(123)\\ \hline
\chi_{\mathrm{triv}}&1&1&1\\
\chi_{\mathrm{sgn}}&1&-1&1\\
\chi_{\mathrm{std}}&2&0&-1
\end{array}.
$$

(c) If $G$ is abelian, every element is its own conjugacy class, so $r=n$. Hence $s=n$. Since every $d_i\ge1$ and
$$
\sum_{i=1}^n d_i^2=n,
$$
each $d_i=1$.
::

::ProblemBlock{number=5}
#problem
Let $\mathbb F_q$ have characteristic $p$ and put $\alpha=[\mathbb F_q:\mathbb F_p]$.

(a) Express $q$ in terms of $p$ and $\alpha$.

(b) Show that every extension of $\mathbb F_p$ is separable.

(c) Show that $\mathbb F_q/\mathbb F_p$ is Galois and that all fields with $q$ elements are isomorphic.

(d) Find an automorphism of order $\alpha$ and conclude that the Galois group is cyclic of order $\alpha$.

#proof
(a) As an $\alpha$-dimensional vector space over $\mathbb F_p$,
$$
q=p^\alpha.
$$

(b) Frobenius $x\mapsto x^p$ is injective and hence surjective on every finite field. Thus finite fields are perfect, so their algebraic extensions are separable.

(c) Every element of $\mathbb F_q$ satisfies
$$
x^q-x=0.
$$
This polynomial has derivative $-1$ and its $q$ roots are precisely the elements of $\mathbb F_q$. Thus $\mathbb F_q$ is its splitting field over $\mathbb F_p$ and is Galois. In an algebraic closure, the roots of $x^q-x$ form the unique field with $q$ elements, proving uniqueness up to isomorphism.

(d) The Frobenius automorphism
$$
\phi(x)=x^p
$$
fixes $\mathbb F_p$ and has order exactly $\alpha$: its $j$th power fixes at most $p^j<q$ elements for $0<j<\alpha$, while $\phi^\alpha(x)=x^q=x$. Hence
$$
\operatorname{Gal}(\mathbb F_q/\mathbb F_p)=\langle\phi\rangle\cong C_\alpha.
$$
::

::ProblemBlock{number=6}
#problem
Let $E(n)$ be Euler's totient function.

(a) Calculate $E(p^r)$ for prime $p$.

(b) If $R_1,R_2$ are rings, show that $(R_1\times R_2)^*=R_1^*\times R_2^*$.

(c) If $n=p_1^{r_1}\cdots p_k^{r_k}$, derive a formula for $E(n)$.

#proof
(a) Among the $p^r$ residue classes modulo $p^r$, exactly $p^{r-1}$ are divisible by $p$. Therefore
$$
E(p^r)=p^r-p^{r-1}=p^{r-1}(p-1).
$$

(b) A pair $(a,b)$ is invertible exactly when both components are invertible, in which case its inverse is $(a^{-1},b^{-1})$. Thus
$$
(R_1\times R_2)^*=R_1^*\times R_2^*.
$$

(c) The Chinese remainder theorem gives
$$
\mathbb Z/n\mathbb Z\cong\prod_{j=1}^k\mathbb Z/p_j^{r_j}\mathbb Z.
$$
Taking units and cardinalities, then using (a) and (b), yields
$$
E(n)=\prod_{j=1}^k p_j^{r_j-1}(p_j-1)
=n\prod_{j=1}^k\left(1-\frac1{p_j}\right).
$$
::

::ProblemBlock{number=7}
#problem
Find the Galois group of the splitting field over $\mathbb Q$ of $x^5-2$.

#proof
Let $\alpha=\sqrt[5]{2}$ and $\zeta=\zeta_5$. The roots are $\zeta^j\alpha$, so the splitting field is
$$
L=\mathbb Q(\alpha,\zeta).
$$
Eisenstein at $2$ gives $[\mathbb Q(\alpha):\mathbb Q]=5$, while $[\mathbb Q(\zeta):\mathbb Q]=4$. Their intersection has degree dividing both $5$ and $4$, so it is $\mathbb Q$. Hence
$$
[L:\mathbb Q]=20.
$$

Every automorphism has the form
$$
\sigma_{a,b}(\zeta)=\zeta^a,
\qquad
\sigma_{a,b}(\alpha)=\zeta^b\alpha,
$$
where $a\in(\mathbb Z/5\mathbb Z)^*$ and $b\in\mathbb Z/5\mathbb Z$. Thus
$$
\operatorname{Gal}(L/\mathbb Q)
\cong C_5\rtimes C_4,
$$
where $C_4\cong(\mathbb Z/5\mathbb Z)^*$ acts faithfully on $C_5$ by multiplication. This is the nonabelian Frobenius group of order $20$.
::

::ProblemBlock{number=8}
#problem
Prove that
$$
x^5-9x+2
$$
is irreducible over $\mathbb Q$.

#proof
Reduce modulo $7$:
$$
\overline f(x)=x^5-2x+2\in\mathbb F_7[x].
$$
The standard finite-field irreducibility criterion for a monic polynomial of prime degree $5$ says that $\overline f$ is irreducible exactly when
$$
x^{7^5}\equiv x\pmod{\overline f}
$$
and
$$
\gcd(\overline f,x^7-x)=1.
$$
Direct repeated-squaring computations give
$$
x^7\equiv5x^2+2x^3\pmod{\overline f},
$$
$$
\gcd(\overline f,5x^2+2x^3-x)=1,
$$
and
$$
x^{7^5}\equiv x\pmod{\overline f}.
$$
Hence $\overline f$ is irreducible in $\mathbb F_7[x]$. Gauss's lemma then implies that $f$ is irreducible over $\mathbb Q$.
::
