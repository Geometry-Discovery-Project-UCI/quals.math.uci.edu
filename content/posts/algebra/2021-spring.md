---
draft: true
---

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
(a) 

::

::ProblemBlock{number=8}
#problem


#proof

::

::ProblemBlock{number=9}
#problem


#proof

::

::ProblemBlock{number=10}
#problem


#proof

::