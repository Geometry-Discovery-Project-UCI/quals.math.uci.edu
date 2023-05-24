# Winter 2023 Algebra

::ProblemBlock{number=1}
#problem
(a) Let $G$ be a group and $Z(G)$ be the center of $G$. Prove that if $G/Z(G)$ is cyclic, then $G$ is abelian.

(b) Let $p$ be a prime. Prove that every group of order $p^2$ is abelian.

(c) Is it true that every group of order $p^3$ is abelian? Give a brief justification of your answer.

#proof
(a) Suppose $G/Z(G) = \langle x\rangle$. Let $a,b\in G$. Consider the natural projection homomorphism $\pi:G\to G/Z(G)$. We have $\pi(a)=x^k$ for some $k\in\Z$ and $\pi(b)=x^m$ for some $m\in\Z$. Therefore, $a=x^k\cdot z_1$ and $b=x^m\cdot z_2$ where $z_1,z_2\in Z(G)$. We see that
$$
ab = (x^k\cdot z_1)(x^m\cdot z_2) = (x^k\cdot x^m)(z_1z_2) = (x^m\cdot x^k)(z_2z_1) = (x^m\cdot z_2)(x^k\cdot z_1)=ba.
$$

(b) The center of a finite $p$-group is non-trivial. Therefore $|Z(G)|\in\{p,p^2\}$. In the second case, $G$ is abelian. Suppose $|Z(G)|=p$. We know that $Z(G)$ is normal in $G$. We have $|G/Z(G)|=p$. Since every group of order $p$ is cyclic, applying the first part shows that $G$ is abelian. (So in fact, $|Z(G)|=p$ is not possible.)

(c) No. Recall that $Aut(\Z/p\Z\times\Z/p\Z)\cong GL_2(\Z/p\Z)$, which has order $(p^2-1)(p^2-p)$. By Cauchy's theorem, $\Z/p\Z\times\Z/p\Z$ has an automorphism $y$ of order $p$. Consider $G = (\Z/p\Z\times\Z/p\Z)\rtimes_\varphi \Z/p\Z$ where $\varphi:\Z/p\Z\to Aut(\Z/p\Z\times \Z/p\Z)$ is define by sending a generator of $\Z/p\Z$ to $y$. Since $\varphi$ is a nontrivial homomorphism, this semidirect product is nonabelian.

::

::ProblemBlock{number=2}
#problem
(a) Let $R$ be an integral domain. Define what it means for $R$ to be a Euclidean domain.

(b) Let $F$ be a field. Prove that $F[x]$ is a Euclidean domain.

#proof
(a) A function $N:R\to \Z^+\cup\{0\}$ with $N(0)=0$ is called a norm on $R$. The integral domain $R$ is a Euclidean domain if there is a norm $N$ on $R$ such that for any two elements $a$ and $b$ of $R$ with $b\neq 0$ there exist elements $q$ and $r$ in $R$ with
$$
a = qb+r \text{ with } r=0 \text{ or } N(r)<N(b).
$$

(b) Suppose $a(x)$, $b(x)\in F[x]$ with $b(x)\neq 0$. We prove that there are $q(x)$, $r(x)\in F[x]$ such that
$$
a(x) = q(x)b(x)+r(x) \text{ with } r(x)=0 \text{ or } \deg(r(x))<\deg(b(x))
$$
If $a(x)=0$ then take $q(x)=r(x)=0$.

Assume $a(x)\neq 0$. We argue by induction on $n=\deg(a(x))$. Let $\deg(b(x))=m$. If $n<m$, take $q(x)=0$ and $r(x)=a(x)$. Suppose $n\geq m$. Write
$$
a(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0
$$
and
$$
b(x) = b_mx^m + b_{m-1}x^{m-1} + \cdots + b_1x + b_0
$$
Then the polynomial
$$
a'(x) = a(x) - \frac{a_n}{b_m}x^{n-m}b(x)
$$
is of degree less than $n$. By induction, there exist polynomials $q'(x)$, $r(x)\in F[x]$ with
$$
a'(x) = q'(x)b(x)+ r(x) \text{ with } r(x)=0 \text{ or } \deg(r(x))<\deg(b(x)).
$$
Let
$$
q(x) = q'(x) + \frac{a_n}{b_m}x^{n-m}.
$$
We have
$$
a(x) = q(x)b(x) + r(x) \text{ with } r(x)=0 \text{ or } \deg(r(x))<\deg(b(x)),
$$
completing the proof.

::

::ProblemBlock{number=3}
#problem
Let $G$ be a group of order $224=2^5\cdot 7$. Prove that $G$ has a subgroup of order 28.

#proof
By Sylow III, $n_7\equiv 1\mod 7$ and $n_7|32$. This implies $n_7\in\{1,8\}$. Let $P\in Syl_7(G)$. We divide the argument into two cases.

Suppose $n_7=8$. By Sylow III,
$$
n_7 = 8 = [G:N_G(P)].
$$
This implies $|N_G(P)| = |G|/8 = 28.

Suppose $n_7=1$. Then $P\trianglelefteq G$. Consider $\bar{G}=G/P$. Since $|\bar{G}|=2^5$, it contains a subgroup $\bar{H}$ of order 4. By the lattice isomorphism theorem for groups, there is a subgroup $H\leq G$ with $P\subseteq H$ of order $|P|\cdot|\bar{H}|=28. 

The only claim we need to justify here is that a group $G$ of order $p^n$ contains a subgroup of order $p^r$ for each $r$. We prove this by induction on $n$. For $n=1$ this statement is trivial. Suppose this is true for groups of order at most $p^{n-1}$. We know that the center of a nontrivial $p$-group is nontrivial. Applying Cauchy's theorem to $Z(G)$ shows that $G$ contains a normal subgroup $N$ of order $p$. By induction, $G/N$ contains a subgroup of order $p^{r-1}$. By the lattice isomorphism theorem for groups, there exists a subgroup of $G$ containing $N$ of order $p^r$. This completes the proof.

::

::ProblemBlock{number=4}
#problem
Let $R=\Z[\sqrt{-3}]$ and let $S=\Z[i]$. Prove that there is no ring homomorphism $\varphi:R\to S$ that takes the (mulitplicative) identity of $R$ to the (multiplicative) identity of $S$.

#proof
Suppose that $\varphi:R\to S$ is a ring homomorphism for which $\varphi(1)=1$. So $\varphi$ fixes every element of $\Z\subseteq R$.

We have $\varphi(\sqrt{-3}) = a+bi$ for some $a,b\in \Z$. We have
$$
\varphi(\sqrt{-3}\cdot(-\sqrt{-3})) = (a+bi)\cdot(-(a+bi)) = -(a^2-b^2+2abi)
$$
but we also have
$$
\varphi(\sqrt{-3}\cdot (-\sqrt{3}))=\varphi(-3)=-3.
$$
Therefore, we must have $a^2-b^2=3$ and $2ab=0$. We see that either $a=0$ or $b=0$, and that either way, there are no solutions to $a^2-b^2=3$.

::

::ProblemBlock{number=5}
#problem
Let $R$ be a commutative ring with identity $1\neq 0$. A module $N$ over a ring $R$ is __simple__ if it is nonzero and it has no proper nonzero submodules. Prove that an $R$-module $N$ is simple if and only if $N\cong R/M$ for a maximal ideal $M$ of $R$.

#proof
If $M$ is an ideal of $R$, then the submodules of $R/M$ are of the form $I/M$ for any ideal $I\supset M$. This makes it clear that $R/M$ is simple if and only if $M$ is maximal. In particulat, $R/M$ is simple for any maximal ideal $M$.

Conversely, suppose that $N$ is a simple module, and fix $0\neq x\in N$. The submodule $Rx$ of $N$ generated by $x$ is nonzero, so we must have $Rx=N$. By the freeness of the module $R$, the assignment $1\mapsto x$ extends to a homomorphism $\phi:R\to N$, which is surjective because its image is a submodule containing $x$. It following that $N\cong R/M$ where the ideal (submodule) $M$ is the kernel of $\phi$. By the discussion above, $M$ must be maximal.

::

::ProblemBlock{number=6}
#problem
Let $k$ be an algebraically closed field, and fix $\alpha,\beta\in k$. List all possible minimal polynomials $p(x)\in k[x]$ of $3\times 3$ matrices over $k$ whose eigenvalues are exactly $\alpha$ and $\beta$, and give an example of a matrix having each $p(x)$ as its minimal polynomial.

#proof
Let $A$ be a $3\times 3$ matrix over $k$ whose eigenvalues are $\alpha$ and $\beta$. The roots of its minimal polynomial must be exactly $\alpha$ and $\beta$, and its degree mst be at most 3. We have the following options:

- $p(x)=(x-\alpha)(x-\beta)$: This is satisfied by $\displaystyle A = \begin{pmatrix}
\alpha && \\ & \beta & \\ && \beta \\
\end{pmatrix}$.

- $p(x)=(x-\alpha)^2(x-\beta)$: This is satisfied by $\displaystyle A = \begin{pmatrix}
\alpha & 1 & \\
& \alpha & \\
&& \beta \\
\end{pmatrix}$.

- $p(x)=(x-\alpha)(x-\beta)^2$: This is satisfied by $\displaystyle A = \begin{pmatrix}
\alpha && \\
& \beta & 1 \\
&& \beta \\
\end{pmatrix}$.

::
::ProblemBlock{number=7}
#problem
Find the smallest Galois extension $K$ of $\Q$ that contains $\Q(\sqrt[3]{5})$, and explain your answer.

#proof
The element $\alpha = \sqrt[3]{5}$ is a root of the polynomial
$$
p(x) = x^3-5 \in \Q[x],
$$
which is irreducible over $\Q$ by Eisenstein's criterion. Thus $p(x)$ is the irreducible polynomial of $\alpha$ over $\Q$. Let $\omega\in\C$ be a primitive 3rd root of unity. Any Galois extension $K/\Q$ that contains $\alpha$ must contian the remaining roots $\omega^i\alpha$ for $i=1,2$ of $p(x)$. Thus we may take $K$ to be the splitting field of the separable polynomial $p(x) = \Pi_{i=0}^2 (x-\omega^i\alpha)$:
$$
K = \Q(\alpha,\omega\alpha,\omega^2\alpha) = \Q(\alpha,\omega)
$$

::

::ProblemBlock{number=8}
#problem
Assume $F$ is a field of characteristic 0 and $\alpha$ is such that the extension $F(\alpha)/F$ is finite of degree not divisible by 3. Is it true that $F(\alpha^3)=F(\alpha)$? Explain your answer.

#proof
Not true. If $F=\Q$ and $\alpha$ is the primitive third root of unity then $[F(\alpha):F]=2$ but $\alpha^3=1$ so $F(\alpha^3)=F$.

::

::ProblemBlock{number=9}
#problem
Consider a finite extension of fields $K/F$. Prove that the following are equivalent:

(i) $K$ is a splitting field of some polynomial in $F[x]$ over $F$.

(ii) Every irreducible polynomial $p(x)\in F[x]$ which has a root in $K$ splits in $K[x]$ into linear factors.

#proof
$(i)\implies (ii)$: Say $K$ is a splitting field of $f(x)\in F[x]$. Assume $p(x)$ is irreducible in $F[x]$ and $\alpha\in K$ is a root of $p(x)$. Work in some field $L$ such that $K\subseteq L$ and all roots of $p(x)$ are in $L$. Let $\beta\in L$ be another root of $p(x)$. Since $p(x)$ is irreducible in $F[x]$, there is an $F$-isomorphism $\varphi:F(\alpha)\to F(\beta)$. The field $K$ is a splitting field of $f$ over $F(\alpha)$. Let $L'$ be a field extending $L$ which contains all roots of $\varphi(f)$ and $K'\subseteq L'$ be the splitting field of $\varphi(f)$ over $F(\beta)$. Then there is an isomorphism $\psi:K\to K'$ extending $\varphi$. Since $\psi$ is the identity on $F$ and $K$ is a splitting field of $f$ over $F$, the field $K'$ is a splitting field of $\psi(f)=f$ over $F$. It follows that $K'=K$. Since $\beta\in K'$, we conclude $\beta\in K$. This means that all roots of $p(x)$ are in $K$, so $p(x)$ splits in $K$ into linear factors.

$(ii)\implies (i)$: Assume $K\neq F$, otherwise there is nothing to prove. Let $\alpha_1\in K\setminus F$. Since $K/F$ is finite, the minimal polynomial $m_{\alpha_1,F}(x)$ splits into linear factors in $K[x]$, so all roots of $m_{\alpha_1,F}(x)$ are in $K$. Let $F_1$ be the result of adjoining all roots of $m_{\alpha_1,F}(x)$ to  $F$. If $F_1=K$ then $K$ is the splitting field of $m_{\alpha_1,F}(x)$ over $F$. Otherwise there is some $\alpha_2\in K\setminus F_1$, and similarly as above we obtain $m_{\alpha_2,F}(x)$ and $F_2$. If $F_1F_2=K$ then $K$ is the splitting field of $m_{\alpha_1,F}(x)m_{\alpha_2,F}(x)$ over $F$. In this manner we proceed inductively to construct $\alpha_i\in K\setminus F_1\cdots F_{i-1}$ and $F_i$ as above. Since
$$
[K:F] > [K:F_1] > [K:F_1F_2] > \cdots > [K:F_1F_2\cdots F_i] > \cdots
$$
there is some number $k$ such that $K = F_1F_2\cdots F_k$. Then the field $K$ is the splitting field for $m_{\alpha_1,F}(x)m_{\alpha_2,F}(x)\cdots m_{\alpha_k,F}(x)$.

::

::ProblemBlock{number=10}
#problem
Recall that $\Z$ is the ring of integers, $\R$ is the ring of real numbers, and $\C$ is the ring of complex numbers. Also $i=\sqrt{-1}$ and $\Z[i]$ is the ring of Gaussian integers.

Prove that $\Z[i]\otimes_\Z \R$ and $\C$ are isomorphic as rings.

Recall that if $S,S'$ are rings extending a ring $R$ then on $S\otimes_R S'$ the ring multiplication is defined by letting $(s\otimes t)(s'\otimes t')=ss'\otimes tt'$ for all simple tensors.

#proof
We use the theorem on hte correspondence between bilinear maps and homomorphisms. The map $\varphi:\Z[i]\times\R\to \C$ defined by $\varphi(a+ib,r) = (a+ib)r$ is easily seen to be $\Z$-bilinear. By the correspondence theorem, there is a unique module homomorphism $\Phi:\Z[i]\otimes_\Z \R\to \C$ such that $\Phi((a+ib)\otimes r) = (a+ib)r$ for every simple tensor $(a+ib)\otimes r$. We show that $\Phi$ is a ring isomorphism. That $\Phi$ is a ring homomorphism follows from the general theory, so we focus on showing that $\Phi$ is a bijection.

To see that $\Phi$ is surjective, notice that if $c+id\in \C$ then $c+id = 1\cdot c+i\cdot d = \Phi(1\otimes c+i\otimes d)$.

To see that $\Phi$ is injective if suffices to show the kernel of $\Phi$ is trivial. For this, observe that any $x\in \Z[i]\otimes_\Z\R$ is of the form
$$
\begin{array}{@{}rcl@{}}
x & =& (a_1+ib_1)\otimes r_1+(a_2+ib_2)\otimes r_2+\cdots+ (a_k+ib_k)\otimes r_k \\
& =& (a_1\otimes r_1) + (ib_1\otimes r_1) + (a_2\otimes r_2) + (ib_2\otimes r_2) + \cdots + (a_k\otimes r_k) + (ib_k\otimes r_k) \\
& =& (a_1\otimes r_1) + (a_2\otimes r_2) + \cdots + (a_k\otimes r_k) + (ib_1\otimes r_1) + (ib_2\otimes r_2) + \cdots + (ib_k\otimes r_k) \\
& =& (1\otimes a_1r_1) + (1\otimes a_2r_2) + \cdots + (1\otimes a_kr_k) + (i\otimes b_1r_1) + (i\otimes b_2r_2) + \cdots + (i\otimes b_kr_k) \\
& =& (1\otimes (a_1r_1+a_2r_2+\cdots +a_kr_k)) + (i\otimes(b_1r_1+b_2r_2+\cdots+b_kr_k)). \\
\end{array}
$$

Since $\Phi$ is a homomorphism, we have
$$
\Phi(x) = (a_1r_1+a_2r_2+\cdots+a_kr_k)+i(b_1r_1+b_2r_2+\cdots+b_kr_k)
$$
so $\Phi(x)=0$ iff
$$
a_1r_1+a_2r_2+\cdots+a_kr_k = 0 = b_1r_1+b_2r_2+\cdots+b_kr_k
$$
iff $x = (1\otimes 0)+(i\otimes 0)=0+0=0$. (Recall that $u\otimes 0=0$ is a general fact about tensor products.) Hence $\Phi(x)=0$ iff $x=0$.

::