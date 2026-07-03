# 2023 Spring Qualifying Exam in Algebra

::ProblemBlock{number=1}
#problem
Prove that, up to isomorphism, there are two groups of order $14$.

#solution
Let $G$ be a group of order $14=2\cdot 7$. By Sylow's theorem, the number $n_7$ of Sylow $7$-subgroups satisfies
$$
n_7\equiv 1 \pmod 7
\qquad\text{and}\qquad
n_7\mid 2.
$$
Thus $n_7=1$. Hence the Sylow $7$-subgroup $P$ is normal in $G$.

Let $Q$ be a Sylow $2$-subgroup. Then
$$
P\simeq C_7,\qquad Q\simeq C_2,
$$
and since $P$ is normal, $G$ is a semidirect product
$$
G\simeq C_7\rtimes C_2.
$$
Such semidirect products are determined by homomorphisms
$$
C_2\longrightarrow \operatorname{Aut}(C_7).
$$
Now
$$
\operatorname{Aut}(C_7)\simeq (\mathbb Z/7\mathbb Z)^\times\simeq C_6.
$$
There are exactly two possible images of a homomorphism $C_2\to C_6$: the trivial subgroup and the unique subgroup of order $2$.

If the action is trivial, then
$$
G\simeq C_7\times C_2\simeq C_{14}.
$$
If the action is nontrivial, then the generator of $C_2$ acts on $C_7$ by inversion, giving
$$
G\simeq D_{14},
$$
the dihedral group of order $14$.

These two groups are not isomorphic: $C_{14}$ is abelian, while $D_{14}$ is nonabelian. Therefore, up to isomorphism, there are exactly two groups of order $14$.
::

::ProblemBlock{number=2}
#problem
Let $\mathbb C^*$ denote the group of nonzero complex numbers.

(a) How many group homomorphisms are there
$$
\phi:S_6\to \mathbb C^*?
$$

(b) How many group homomorphisms are there
$$
\phi:S_6\to \mathbb Z/3\mathbb Z?
$$

#solution
Since both $\mathbb C^*$ and $\mathbb Z/3\mathbb Z$ are abelian groups, any homomorphism from $S_6$ to either group factors through the abelianization of $S_6$.

For $n\ge 2$, the commutator subgroup of $S_n$ is $A_n$, so
$$
S_6^{\mathrm{ab}}
=
S_6/[S_6,S_6]
=
S_6/A_6
\simeq C_2.
$$

For part (a), homomorphisms $S_6\to \mathbb C^*$ correspond to homomorphisms
$$
C_2\to \mathbb C^*.
$$
The image of a generator of $C_2$ must be an element of $\mathbb C^*$ whose square is $1$. The only possibilities are
$$
1\qquad\text{and}\qquad -1.
$$
Thus there are exactly $2$ homomorphisms: the trivial homomorphism and the sign homomorphism followed by the inclusion $\{\pm 1\}\subset \mathbb C^*$.

For part (b), homomorphisms $S_6\to \mathbb Z/3\mathbb Z$ correspond to homomorphisms
$$
C_2\to \mathbb Z/3\mathbb Z.
$$
But $\mathbb Z/3\mathbb Z$ has no nontrivial element of order dividing $2$. Therefore only the trivial homomorphism exists.

Hence the answers are:
$$
\boxed{2}
\qquad\text{and}\qquad
\boxed{1}.
$$
::

::ProblemBlock{number=3}
#problem
Let $G$ be a group that contains no index $2$ subgroup. Show that every index $3$ subgroup in $G$ is normal. Do not assume that $G$ is finite.

#solution
Let $H\le G$ be a subgroup of index $3$. Consider the action of $G$ on the left cosets $G/H$ by left multiplication. This gives a homomorphism
$$
\varphi:G\to S_3.
$$
Because the action on $G/H$ is transitive, the image $\varphi(G)$ is a transitive subgroup of $S_3$.

The transitive subgroups of $S_3$ are $A_3$ and $S_3$. If
$$
\varphi(G)=S_3,
$$
then
$$
\varphi^{-1}(A_3)
$$
would be an index $2$ subgroup of $G$, since $A_3$ has index $2$ in $S_3$. This contradicts the assumption that $G$ has no index $2$ subgroup.

Therefore
$$
\varphi(G)=A_3.
$$
The group $A_3$ acts transitively on the three cosets, and this action is regular. Hence the stabilizer in $A_3$ of any coset is trivial.

Now $H$ is exactly the stabilizer in $G$ of the coset $H$. Since the stabilizer in the image is trivial, we get
$$
H=\ker(\varphi).
$$
Therefore $H$ is the kernel of a group homomorphism, so $H$ is normal in $G$.
::

::ProblemBlock{number=4}
#problem
Are the following isomorphic as rings? Prove your answer.
$$
\mathbb R[x]/(x^3)
\qquad\text{and}\qquad
\mathbb R[x]/(x^3-8).
$$

#solution
They are not isomorphic.

In the ring
$$
\mathbb R[x]/(x^3),
$$
the class of $x$ is nonzero and nilpotent, since
$$
x^3=0.
$$
Thus $\mathbb R[x]/(x^3)$ has a nonzero nilpotent element.

Now consider
$$
\mathbb R[x]/(x^3-8).
$$
Over $\mathbb R$,
$$
x^3-8=(x-2)(x^2+2x+4).
$$
The factors $x-2$ and $x^2+2x+4$ are relatively prime in $\mathbb R[x]$, and $x^2+2x+4$ is irreducible over $\mathbb R$ because its discriminant is
$$
2^2-4\cdot 1\cdot 4=-12<0.
$$
By the Chinese remainder theorem,
$$
\mathbb R[x]/(x^3-8)
\simeq
\mathbb R[x]/(x-2)\times \mathbb R[x]/(x^2+2x+4)
\simeq
\mathbb R\times \mathbb C.
$$
The ring $\mathbb R\times \mathbb C$ has no nonzero nilpotent elements, because both $\mathbb R$ and $\mathbb C$ are fields.

Being reduced is preserved under ring isomorphism. Since $\mathbb R[x]/(x^3)$ has a nonzero nilpotent element and $\mathbb R[x]/(x^3-8)$ does not, the two rings are not isomorphic.
::

::ProblemBlock{number=5}
#problem
Recall that a non-unit, nonzero element $\pi$ in a ring $R$ is called prime if $\pi\mid rs$ implies $\pi\mid r$ or $\pi\mid s$. Assume $R$ is a PID and $\pi_1\ne \pi_2$ are two distinct prime elements in $R$, and that $\pi_1$ is not a unit multiple of $\pi_2$. Prove there exist $a,b\in R$ such that
$$
a\pi_1+b\pi_2=1.
$$

#solution
Since $R$ is a PID, the ideal generated by $\pi_1$ and $\pi_2$ is principal. Thus there exists $d\in R$ such that
$$
(\pi_1,\pi_2)=(d).
$$
Then $d$ divides both $\pi_1$ and $\pi_2$.

Because $\pi_1$ is prime, it is irreducible. Therefore any divisor of $\pi_1$ is either a unit or an associate of $\pi_1$. Hence $d$ is either a unit or an associate of $\pi_1$.

Suppose $d$ were not a unit. Then $d$ would be an associate of $\pi_1$. Since $d\mid \pi_2$, this would imply
$$
\pi_1\mid \pi_2.
$$
Because $\pi_2$ is prime, hence irreducible, this would force $\pi_1$ and $\pi_2$ to be associates, contradicting the hypothesis.

Therefore $d$ must be a unit. Hence
$$
(\pi_1,\pi_2)=R.
$$
So $1\in (\pi_1,\pi_2)$, which means there exist $a,b\in R$ such that
$$
a\pi_1+b\pi_2=1.
$$
::

::ProblemBlock{number=6}
#problem
Let $A\in M_{7\times 7}(\mathbb C)$ denote a matrix satisfying
$$
A^2=0.
$$
What is the largest possible rank that $A$ can have? Justify your answer.

#solution
Since
$$
A^2=0,
$$
we have
$$
\operatorname{im}(A)\subseteq \ker(A).
$$
Let
$$
r=\operatorname{rank}(A).
$$
By rank-nullity,
$$
\dim \ker(A)=7-r.
$$
Since $\operatorname{im}(A)\subseteq \ker(A)$, we get
$$
r\le 7-r.
$$
Thus
$$
2r\le 7,
$$
so
$$
r\le 3.
$$

This bound is achievable. For example, take a nilpotent Jordan matrix with three Jordan blocks of size $2$ and one Jordan block of size $1$:
$$
A=
J_2(0)\oplus J_2(0)\oplus J_2(0)\oplus J_1(0).
$$
Then $A^2=0$ and each $J_2(0)$ contributes rank $1$, so
$$
\operatorname{rank}(A)=3.
$$
Therefore the largest possible rank is
$$
\boxed{3}.
$$
::

::ProblemBlock{number=7}
#problem
Consider the rational numbers $\mathbb Q$ as a $\mathbb Z$-module. Is $\mathbb Q$ a finitely generated $\mathbb Z$-module? Prove your answer.

#solution
No. The $\mathbb Z$-module $\mathbb Q$ is not finitely generated.

Suppose, for contradiction, that $\mathbb Q$ were generated as a $\mathbb Z$-module by finitely many rational numbers
$$
q_1,\dots,q_n.
$$
Write
$$
q_i=\frac{a_i}{b_i},
$$
where $a_i\in \mathbb Z$ and $b_i\in \mathbb Z_{>0}$. Let
$$
B=\operatorname{lcm}(b_1,\dots,b_n).
$$
Then every integer linear combination of the $q_i$ has denominator dividing $B$. More explicitly, every element of the subgroup generated by $q_1,\dots,q_n$ lies in
$$
\frac{1}{B}\mathbb Z.
$$
But
$$
\frac{1}{B+1}\in \mathbb Q
$$
does not lie in $\frac{1}{B}\mathbb Z$, since there is no integer $m$ such that
$$
\frac{1}{B+1}=\frac{m}{B}.
$$
Thus $q_1,\dots,q_n$ cannot generate all of $\mathbb Q$.

Therefore $\mathbb Q$ is not finitely generated as a $\mathbb Z$-module.
::

::ProblemBlock{number=8}
#problem
Find the Galois group of
$$
f(x)=(x^3-2)(x^2+3)
$$
over $\mathbb Q$. Justify your answer.

#solution
Let
$$
\alpha=\sqrt[3]{2}
\qquad\text{and}\qquad
\zeta_3=e^{2\pi i/3}.
$$
The splitting field of $x^3-2$ over $\mathbb Q$ is
$$
\mathbb Q(\alpha,\zeta_3).
$$
The roots of $x^2+3$ are
$$
\pm \sqrt{-3}.
$$
But
$$
\mathbb Q(\sqrt{-3})=\mathbb Q(\zeta_3),
$$
because
$$
\zeta_3=\frac{-1+\sqrt{-3}}{2}.
$$
Therefore the splitting field of
$$
(x^3-2)(x^2+3)
$$
is still
$$
K=\mathbb Q(\alpha,\zeta_3).
$$

Now $x^3-2$ is irreducible over $\mathbb Q$ by Eisenstein's criterion at $2$, so
$$
[\mathbb Q(\alpha):\mathbb Q]=3.
$$
Also $\mathbb Q(\alpha)\subset \mathbb R$, while $\zeta_3\notin \mathbb R$, so
$$
\zeta_3\notin \mathbb Q(\alpha).
$$
Thus
$$
[K:\mathbb Q]=[\mathbb Q(\alpha,\zeta_3):\mathbb Q]=6.
$$

The Galois group acts faithfully on the three roots of $x^3-2$, so it embeds into $S_3$. Since the splitting field has degree $6$, the Galois group has order $6$. Hence it is all of $S_3$:
$$
\operatorname{Gal}(K/\mathbb Q)\simeq S_3.
$$
Therefore the Galois group of $f(x)$ over $\mathbb Q$ is
$$
\boxed{S_3}.
$$
::

::ProblemBlock{number=9}
#problem
(a) Let $K\subset \mathbb C$ and assume $K$ is a finite Galois extension of $\mathbb Q$. Let
$$
\tau:\mathbb C\to \mathbb C
$$
denote complex conjugation. Prove that
$$
\tau(K)=K.
$$

(b) Assume further that
$$
\operatorname{Gal}(K/\mathbb Q)\simeq \mathbb Z/4\mathbb Z.
$$
Prove that
$$
i\notin K.
$$

#solution
For part (a), let $\alpha\in K$. Since $K/\mathbb Q$ is Galois, it is normal. Let $m_\alpha(x)\in \mathbb Q[x]$ be the minimal polynomial of $\alpha$ over $\mathbb Q$. Since $K/\mathbb Q$ is normal, $m_\alpha(x)$ splits completely over $K$.

Because $m_\alpha(x)$ has rational coefficients, its coefficients are fixed by complex conjugation. Therefore
$$
m_\alpha(\tau(\alpha))=\tau(m_\alpha(\alpha))=\tau(0)=0.
$$
So $\tau(\alpha)$ is another root of $m_\alpha(x)$. Since all roots of $m_\alpha(x)$ lie in $K$, we get
$$
\tau(\alpha)\in K.
$$
Thus
$$
\tau(K)\subseteq K.
$$
Applying the same argument to $\tau^{-1}=\tau$ gives the reverse inclusion, so
$$
\tau(K)=K.
$$

For part (b), suppose for contradiction that $i\in K$. By part (a), complex conjugation restricts to an automorphism of $K$ over $\mathbb Q$. Let
$$
c=\tau|_K\in \operatorname{Gal}(K/\mathbb Q).
$$
Since $i\in K$ and
$$
c(i)=-i,
$$
the automorphism $c$ is nontrivial. Also $c^2=1$, so $c$ has order $2$.

Now $\operatorname{Gal}(K/\mathbb Q)\simeq \mathbb Z/4\mathbb Z$ has a unique subgroup of order $2$, namely $\langle c\rangle$. Hence by the Galois correspondence, $K$ has a unique intermediate field of degree $2$ over $\mathbb Q$, namely
$$
K^{\langle c\rangle}.
$$

But since $i\in K$, the field
$$
\mathbb Q(i)
$$
is an intermediate field of degree $2$ over $\mathbb Q$. Therefore uniqueness forces
$$
\mathbb Q(i)=K^{\langle c\rangle}.
$$
This is impossible, because every element of $K^{\langle c\rangle}$ is fixed by complex conjugation and hence is real, while $\mathbb Q(i)$ is not contained in $\mathbb R$.

This contradiction shows that
$$
i\notin K.
$$
::

::ProblemBlock{number=10}
#problem
For each of the following, either give an example or state that no such example exists. Briefly explain your answers.

(a) A nontrivial finite abelian group $A$ such that
$$
A\otimes_{\mathbb Z} A
$$
is trivial.

(b) Two finite fields which are isomorphic as groups, meaning their underlying additive groups are isomorphic, but which are not isomorphic as rings.

#solution
For part (a), no such example exists.

Every finite abelian group decomposes as a direct sum of cyclic groups:
$$
A\simeq \bigoplus_j \mathbb Z/n_j\mathbb Z.
$$
If $A$ is nontrivial, then some $n_j>1$. Since tensor product distributes over direct sums,
$$
A\otimes_{\mathbb Z} A
$$
contains
$$
(\mathbb Z/n_j\mathbb Z)\otimes_{\mathbb Z}(\mathbb Z/n_j\mathbb Z)
$$
as a direct summand. But
$$
(\mathbb Z/n_j\mathbb Z)\otimes_{\mathbb Z}(\mathbb Z/n_j\mathbb Z)
\simeq
\mathbb Z/n_j\mathbb Z,
$$
which is nontrivial. Hence $A\otimes_{\mathbb Z} A$ cannot be trivial.

Therefore no nontrivial finite abelian group $A$ satisfies
$$
A\otimes_{\mathbb Z} A=0.
$$

For part (b), no such example exists.

A finite field has order $p^n$ for some prime $p$ and integer $n\ge 1$. Its underlying additive group is
$$
(\mathbb Z/p\mathbb Z)^n.
$$
Thus if two finite fields are isomorphic as additive groups, then they have the same characteristic $p$ and the same dimension $n$ over $\mathbb F_p$. Therefore they have the same cardinality
$$
p^n.
$$
But finite fields of the same cardinality are isomorphic as rings.

Therefore no two finite fields are isomorphic as additive groups but not isomorphic as rings.
::
