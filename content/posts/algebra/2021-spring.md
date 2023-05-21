# 2021 Spring Algebra

::ProblemBlock{number=1}
#problem
(a) Let $G$ be a group of order $n$. Prove that $G$ is isomorphic to a subgroup of $S_n$.

(b) Is every group of order 6 necessarily isomorphic to a subgroup of $A_6$? Explain

#proof
(a)  Given any group action of $G$ on a set $X$, we have an injective group homomorphism $G\to S_X$. If we consider the group action of $G$ acting on itself by left multiplication, $(g,h)\mapsto gh$, we deduce that there is an injective group homomorphism from $G$ to $S_n$, and the image of $G$ under this map is a subgroup of $S_n$ isomorphic to $G$.

(b) Consider the cyclic group of order 6. We claim that no subgroup of $A_6$ is isomorphic to this group. (There is a subgroup isomorphic to $S_3$, so this is the only possible example.) The only elements in $S_6$ of order 6 are either 6-cycles or 3,2-cycles, and neither such element is even.

::

::ProblemBlock{number=2}
#problem
Let $G$ denote a finite group with identity element $e$. Assume $n>1$ is a fixed integer for which $x^ny^N=(xy)^n$ for all $x,y\in G$.

(a) Prove that such an $n>1$ always exists.

(b) Define
$$
G^{(n)} = \{ x^n : x\in G \} \quad \text{ and }\quad G_{(n)} = \{ x\in G : x^n=e \}
$$
Prove that the index of $G_{(n)}$ in $G$ is equal to the order of $G^{(n)}$.

#proof
(a) We may certainly assume $G$ is not trivial, otherwise any value of $n>1$ will work. In this case, $n= |G|>1$ is a mulitple of the order of every element in $G$, so that
$$
x^ny^n = e\cdot e = e = (xy)^n
$$
for all $x,y\in G$.

(b) Let $\phi:G\to G$ be the function defined by $\phi(x)=x^n$. It follows from the choice of $n$ that this is a group homomorphism. It is clear from the choice of $\phi$ that it has kernel $\ker\phi= G_{(n)}$ and image $\phi(G) = G^{(n)}$. From the First Isomorphism Theorem we have
$$
G^{(n)} = \phi(G) \cong G/\ker(\phi) = G/G_{(n)}
$$
from which it follows that
$$
|G^{(n)}| = |G/G_{(n)}| = [G:G_{(n)}]
$$

::

::ProblemBlock{number=3}
#problem
(a) Define what it means for an integral domain $R$ to be a Euclidean domain.

(b) Prove that $\mathbb{Z}[i]$ is a Euclidean domain.

#proof
(a) The integral domain $R$ is _Euclidean_ if there exists a function $d:R\setminus\{0\}\to \mathbb{Z}_{\geq0}$ satisfying the following property:
$$
\forall f,g\in R \text{ with } g\neq 0 \text{ there exists } q,r\in R \text{ such that } f=gq+r \text{ and either } r=0 \text{ or } d(r)<d(g)
$$

(b) We have a norm function on $\mathbb{Z}[i]$ defined by $N(a+bi)=a^2+b^2$. We note that this norm is multiplicative. We show that if $a+bi,c+di\in\mathbb{Z}[i]$ with $c+di\neq 0$, then there exist $q,r\in \mathbb{Z}[i]$ with
$$
a+bi = q(c+di)+r
$$
where $r=0$ or $0<N(r)<N(c+di)=c^2+d^2$. Then main idea is to divide in $\mathbb{Q}(i)$. We have
$$
\frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{c^2+d^2} = \frac{ac+bd}{c^2+d^2} + i\frac{bc-ad}{c^2+d^2}
$$
Let $\alpha$ be the nearest integer to $\frac{ac+bd}{c^2+d^2}$ and $\beta$ be the nearest integer to $\frac{bc-ad}{c^2+d^2}$. So
$$
\alpha+\beta i-\left( \frac{ac+bd}{c^2+d^2} + i\frac{bc-ad}{c^2+d^2} \right) = \gamma+\delta i
$$
where $|\gamma|,|\delta|\leq 1/2$. Let 
$$
r = (a+bi)-(\alpha+\beta i)(c+di) = (\gamma+\delta i)(c+di)
$$
Note that 
$$
N(r) = N(\gamma+\delta i)N(c+di) = (\gamma^2+\delta^2)N(c+di)\leq \frac12 N(c+di)
$$
This completes the proof.

::

::ProblemBlock{number=4}
#problem
Does there exist a ring $R$ (commutative, with unity) such that its underlying additive group $(R,+)$ is isomorphic to $\mathbb{Q}/\mathbb{Z}$? Prove your answer.

#proof
The answer is no. Notice that $\mathbb{Q}/\mathbb{Z}$ is a torsion abelian group with elements of every possible finite order. If a ring $R$ has characteristic 0, then $1\in R$ is a non-torsion element. On the other hand, if $R$ has characteristic $n>0$, then every element of $R$ is $n$-torsion because
$$
n\cdot x = (n\cdot 1)x = 0x = 0
$$
In either case, the characteristic of $R$ prohibits its underlying additive group from being isomorphic to $\mathbb{Q}/\mathbb{Z}$.

::

::ProblemBlock{number=5}
#problem
Let $R$ be a commutative ring.

(a) Assume that every ideal of $R$ is finitely generated. Prove that, for every countably infinite chain $I_1\subseteq I_2\subseteq I_3\subseteq\cdots$ of ideals in $R$, there exists an integer $N>0$ such that $I_n=I_{n+1}$ for all $n\geq N$.

(b) Give an example of a chain of ideals in a PID $R$ which contains 5 distinct ideals:
$$
I_1\subsetneq I_2 \subsetneq I_3\subsetneq I_4\subsetneq I_5
$$

#proof
(a) First suppose that every ideal of $R$ is finitely generated, and consider a chain of ideals $I_1\subseteq I_2\subseteq\cdots$. Then union $I = \bigcup I_n$ is also an ideal of $R$, and thus has the form $I=(a_1,\ldots,a_m)$ for a finite list of generators $a_i\in R$. Because each $a_i\in I=\bigcup I_n$, there exists $N$ such that $a_1,\ldots,a_m\in I_N$. Then for each $n\geq N$ we have
$$
I_n\subseteq I=(a_1,\ldots,a_m)\subseteq I_N\subseteq I_n
$$
So $I_N=I_n$ for all $n\geq N$.

(b) If we take $R=\mathbb{C}[x]$, then we may take the following chain of ideals as an example:
$$
(x^5)\subsetneq (x^4)\subsetneq (x^3)\subsetneq (x^2)\subsetneq (x)
$$

::

::ProblemBlock{number=6}
#problem
Assume $\alpha\in \mathbb{C}$ is algebraic over $\mathbb{Q}$ and assume $\alpha\neq 0$. Prove that there exists a polynomial $f(x)\in\mathbb{Q}[x]$ such that $f(\alpha)=\alpha^{-1}$.

#proof
Fix a polynomial $p(x)\in\mathbb{Q}[x]$ of minimal degree $n\geq 1$ such that $p(\alpha)=0$. Writing $p(x) = \sum_{i=0}^n c_ix^i$, we have
$$
c_n\alpha^n+\cdots+c_1\alpha + co = 0
$$
Because $p$ has minimal degree, we must have $c_0\neq 0$, otherwise we could divide by the lowest power of $\alpha$ in the polynomial above to reduce the degree. Multiplying by $\alpha^{-1}$ and rearranging, we have
$$
c_n\alpha^{n-1} + \cdots + c_1 = -c_0\alpha^{-1}
$$
Thus $f(x) = -c_0^{-1}\sum_{i=1}^n c_ix^{i-1}$ is a suitable polynomial.

::
::ProblemBlock{number=7}
#problem
Let $K$ denote a splitting field of $(x^2-2)(x^2+3)$ over $\mathbb{Q}$

(a) Determine the degree of $K/\mathbb{Q}$. Briefly justify your answer.

(b) Write out the elements in $Gal(K/\mathbb{Q})$. (To receive full credit, explain how you know that the elements you write down are actually automorphisms.)

(c) Write out the intermediate fields between $K$ and $\mathbb{Q}$, and for each intermediate field, list the subgroup of $Gal(K/\mathbb{Q})$ to which it corresponds. (No justification is necessary for this part.)

#proof
(a) The four roots of this polynoial are $\pm\sqrt{2}$, $\pm\sqrt{-3}$. It's clear that the tower $\mathbb{Q}\subseteq\mathbb{Q}(\sqrt{2})\subseteq\mathbb{Q}(\sqrt{2},\sqrt{-3})$ consists of two extensions of degree 2 (because the middle field is real and the top field is not real, we know that the second field extension is not degree 1). Thus the degree is 4.

(b) These correspond to the four possibilities $\sqrt{2}\mapsto \pm\sqrt{2}$ and $\sqrt{-3}\mapsto \pm\sqrt{-3}$. Because automorphisms must send roots of a polynomial to other roots of a polynomial, these are the only possibilities, and because we know the extension is Galois (being a splitting field over a characteristic zero field) and of degree 4, we know there are exactly 4 automorphisms, and hence each of these possibilities is indeed an automorphism.

(c) Name these four possibilities $\rho_{++},\rho_{+-},\rho_{-+},\rho_{--}$ (so $\rho_{++}$ is the identity map). We have

- $\mathbb{Q}$ corresponds to $\{\rho_{++},\rho_{+-},\rho_{-+},\rho_{--}\}$
- $\mathbb{Q}(\sqrt{2},\sqrt{-3})$ corresponds to $\{\rho_{++}\}$
- $\mathbb{Q}(\sqrt{2})$ corresponds to $\{\rho_{++},\rho_{+-}\}$
- $\mathbb{Q}(\sqrt{-3})$ corresponds to $\{\rho_{++},\rho_{-+}\}$
- $\mathbb{Q}(\sqrt{-6})$ corresponds to $\{\rho_{++},\rho_{--}\}$

::

::ProblemBlock{number=8}
#problem
Let $p$ be a prime and $m$ be a positive integer satisfying $1<m<p$. Let $K/F$ be a Galois extension where $[K:F]=mp^n$ where $n$ is a positive integer. Prove that there is a subfield $E$ of $K$ containing $F$ with $F\subsetneq E\subsetneq K$ such that $E/F$ is Galois.

#proof
Let $G = Gal(K/F)$ and let $E$ be a subfield of $K$ containing $F$. Let $H$ be the subgroup of $G$ corresponding to $E$ under the Galois correspondence. Then $E/F$ is Galois if and only if $H$ is normal in $G$. Therefore, we need only show that $G$ contains a proper non-trivial normal subgroup. That is, $G$ is not simple.

Let $n_p$ be the number of Sylow $p$-subgroups of $G$. By the Sylow Theorems, $n_p|m$ and $n_p\equiv 1 \mod p$. Since $p>m$, $n_p=1$. Since $G$ has a unique Sylow $p$-subgroup, this subgroup in normal in $G$. The fixed field $E$ of this subgroup satisfies $F\subsetneq E\subsetneq K$ and $E/F$ Galois.

::

::ProblemBlock{number=9}
#problem
Determine the number of isomorphism classes of $\F_3[x]$-modules of order 9. Include a full justification of your claim.

#proof
An $\F_3[x]$-module is a vector space $V$ over $\F_3$ together with a linear transformation $T:V\to V$. (The linear transformation comes from the action of $x$ on $V$.) The order of the $\F_3[x]$-module is $|V|$. So in our case, $V$ is a 2-dimensional vector space over $\F_3$.

The classification of modules over a PID applied to the case of $\F_3[x]$ (which is a PID) says
$$
V \cong \F_3[x]/(a_1(x))\oplus\cdots\oplus \F_3[x]/(a_m(x))
$$
where each $a_i(x)\in\F_3[x]$ is a monic polynomial of degree at least 1 and $a_i(x)|a_{i+1}(x)$ for $i=1,\ldots,m-1$. These $a_i(x)$ are the invariant factors of the $\F_3[x]$-module. Moreover, two such modules are isomorphic if and only if they have the same factors.

It is clear that $|\F_3[x]/(f(x))|=3^{\deg f(x)}$. For example, note that $1,x,\ldots,x^{\deg f(x)-1}$ is a basis for this quotient vector space. Therefore, we need only list the possible invariant factors for which $\deg(a_1(x)\cdots a_m(x)=2$. There are two possibilities:

- $m=1$ and $a_i(x)$ is a monic polynomial of degree 2. There are 9 such polynomials. (You do not have to list them.)
- $m=2$. In this case $a_1(x)$ and $a_2(x)$ are linear polynomials. Since $a_1(x)|a_2(x)$ they must be the same linear polynomial. There are 3 possibilities since there are 3 monic linear polynomials in $\F_3[x]$.

Thus there are 12 such $\F_3[x]$-modules up to isomorphism.

::

::ProblemBlock{number=10}
#problem
Let $m,n$ be positive integers and let $d= gcd(m,n)$. Prove that 
$$
\Z/n\Z \otimes_\Z \Z/m\Z \cong \Z/d\Z
$$

#proof
__Solution 1:__

The tensor product is a $\Z$-module, a finite abelian group. Since 1 is a generator for $\Z/n\Z$ and 1 is a generator for $\Z/m\Z$, we see that $1\otimes 1$ is a generating set for $\Z/n\Z\otimes_\Z \Z/m\Z$. So this tensor product is a cyclic group.

We now show that the order of this group divides $d$. We have
$$
n\cdot(1\otimes 1) = n\cdot 1\otimes 1 = 0\otimes 1 = 0
$$
and also
$$
m\cdot(1\otimes 1) = 1\otimes m\cdot 1 = 1\otimes 0 = 0
$$
Therefore the order of this cyclic group divides $n$ and divides $m$, so it divides $\gcd(m,n)=d$.

To show that $\Z/n\Z\otimes_\Z\Z/m\Z \cong \Z/d\Z$ we show that there is a surjective $\Z$-module homomorphism from $\Z/n\Z\otimes_\Z\Z/m\Z$ to $\Z/d\Z$. We know that $\Z$-module homomorphisms from $\Z/n\Z\otimes_\Z\Z/m\Z$ to $\Z/d\Z$ correspond to $\Z$-bilinear maps 
$$
B:\Z/n\Z\otimes_\Z\Z/m\Z \to \Z/d\Z
$$

Therefore, we need only construct such a map. Let $B(x,y)=xy\mod d$. We need to check that $B(ax_1+x_2,y)=aB(x_1,y)+B(x_2,y)$ and that $B(x,ay_1+y_2) = aB(x,y_1)+B(x,y_2)$. Checking each claim is straightforward. For example,
$$
B(ax_1+x_2,y) = ax_1y + x_2y \mod d
$$
$$
aB(x_1,y)+B(x_2,y) = ax_1y\mod d + x_2y\mod d
$$

__Solution 2:__

If $M$ is an $R$-module, we always have $M\otimes_R(R/I) \cong M/IM$, so it suffices to show that the principal ideal $(m)$ in $\Z/n\Z$ is equal to the principal ideal $(d)$. Since $d|m$, the inclusion $(m)\subseteq (d)$ is clear. For the converse direction, notice that $am+bn=d$ for some integers $a,b$, so $(d)\subseteq (m)$.

::