# 2026 Spring Quals in Algebra

::ProblemBlock{number=1}
#problem

How many elements of order $7$ are there in a simple group of order $168$?

#proof

Let $G$ be a simple group of order $168=2^3\cdot 3\cdot 7$. The elements of order $7$ in $G$ are exactly the nonidentity elements of the Sylow $7$-subgroups of $G$.

The number $n_7$ of Sylow $7$-subgroups divides $2^3\cdot 3=24$ and satisfies $n_7\equiv 1\pmod 7$, so $n_7\in\{1,8\}$. Because $G$ is simple, $n_7\ne 1$, since a unique Sylow subgroup would be normal. Therefore, $n_7=8$. The intersection of two distinct subgroups of order $7$ must be trivial.

Consequently, the number of elements of order $7$ is

$$
(7-1)n_7=6\cdot 8=48.
$$
::

::ProblemBlock{number=2}
#problem

Let $G$ be a finite group and let $H\leq G$ be a subgroup. Prove that the number of conjugates of $H$ in $G$ divides the index $[G:H]$.

#proof

Let $X$ denote the set of conjugates of $H$ in $G$. Consider the action of $G$ on $X$ given by

$$
g\cdot K=gKg^{-1}.
$$

This is a group action because

$$
(gh)\cdot K=(gh)K(gh)^{-1}=g\cdot(h\cdot K).
$$

By the Orbit-Stabilizer Theorem, the size of the orbit of $H$ is equal to the index of the stabilizer of $H$. Let

$$
S=\operatorname{Stab}_G(H).
$$

The stabilizer $S$ contains $H$, since $hHh^{-1}=H$ for every $h\in H$. Thus,

$$
H\leq S\leq G.
$$

By Lagrange's Theorem, $|S|=|H|m$ for some positive integer $m$. Therefore, the number of conjugates of $H$ is

$$
[G:S]=\frac{|G|}{|S|}=\frac{|G|}{|H|m},
$$

which divides

$$
\frac{|G|}{|H|}=[G:H].
$$
::

::ProblemBlock{number=3}
#problem

Prove that the symmetric group $S_4$ has a normal subgroup $N$ such that $S_4/N\cong S_3$.

#proof

Let

$$
N=\{e,(12)(34),(13)(24),(14)(23)\}.
$$

This is a subgroup of $S_4$. It is normal because it is a union of conjugacy classes: the identity class and the class consisting of all permutations of cycle type $(2,2)$.

The quotient $S_4/N$ has order

$$
\frac{|S_4|}{|N|}=\frac{24}{4}=6.
$$

Every group of order $6$ is isomorphic either to $\mathbb Z/6\mathbb Z$ or to $S_3$. No quotient of $S_4$ can contain an element of order $6$, since the order of an element in a quotient divides the order of a preimage and $S_4$ has no element of order $6$. Hence $S_4/N$ cannot be cyclic. Therefore,

$$
S_4/N\cong S_3.
$$
::

::ProblemBlock{number=4}
#problem

Let $R$ be a unique factorization domain, and let $p\in R$ be an irreducible element. Let $K$ denote the field of fractions of $R$. Prove that the subring

$$
S=\left\{\frac ab\in K\ \middle|\ a,b\in R,\ p\nmid b\right\}
$$

of $K$ is a principal ideal domain with a single irreducible element up to associates.

#proof

Let $a_1/b_1$ and $a_2/b_2$ be two nonzero elements of $S$, and let $e_1$ and $e_2$ be the powers of $p$ in the factorizations of $a_1$ and $a_2$, respectively. Write

$$
a_1=p^{e_1}c_1,\qquad a_2=p^{e_2}c_2,
$$

where $c_1,c_2\in R$ and $p\nmid c_1,c_2$.

If $e_1\leq e_2$, then $a_1/b_1$ divides $a_2/b_2$ in $S$, because

$$
\frac{a_2}{b_2}
=
\frac{a_1}{b_1}
\frac{p^{e_2-e_1}b_1c_2}{b_2c_1},
$$

and the second factor belongs to $S$.

Now let $I$ be a nonzero ideal of $S$. Choose a nonzero element $a/b\in I$ for which the exponent of $p$ in $a$ is minimal. By the preceding divisibility observation, $a/b$ divides every element of $I$. Hence $I=(a/b)$, proving that $S$ is a principal ideal domain.

It remains to identify the irreducible elements. If $a/b\in S$ and $p\nmid a$, then $a/b$ is a unit in $S$, since its inverse $b/a$ also belongs to $S$. If $p^2\mid a$, then $a/b$ is a product of two nonunits and is not irreducible. Thus an irreducible element must have the form

$$
\frac{pc}{b},
$$

where $p\nmid c$. Since $c/b$ is a unit of $S$, this element is associate to $p$. Therefore, up to associates, $p$ is the unique irreducible element of $S$.
::

::ProblemBlock{number=5}
#problem

Let $\zeta=e^{2\pi i/7}\in\mathbb C$ be a primitive seventh root of unity. Find the minimal polynomial of $\sqrt[7]{5}$ over $\mathbb Q(\zeta)$.

#proof

Let $\alpha=\sqrt[7]{5}$. Since $x^7-5$ is Eisenstein at $5$,

$$
[\mathbb Q(\alpha):\mathbb Q]=7.
$$

Also,

$$
[\mathbb Q(\zeta):\mathbb Q]=\varphi(7)=6.
$$

The degree $[\mathbb Q(\zeta,\alpha):\mathbb Q]$ is divisible by both $6$ and $7$, and hence is divisible by $42$. Therefore,

$$
[\mathbb Q(\zeta,\alpha):\mathbb Q(\zeta)]
$$

is divisible by $7$. On the other hand, $\alpha$ satisfies $x^7-5$, so this degree is at most $7$. It is therefore equal to $7$. Consequently, the minimal polynomial of $\sqrt[7]{5}$ over $\mathbb Q(\zeta)$ is

$$
x^7-5.
$$
::

::ProblemBlock{number=6}
#problem

Show that there is a real $6\times 6$ matrix whose minimal polynomial is $x^4+1$ and which is not similar to any matrix with rational entries.

#proof

Let

$$
C=
\begin{pmatrix}
0&0&0&-1\\
1&0&0&0\\
0&1&0&0\\
0&0&1&0
\end{pmatrix},
\qquad
R=\frac12
\begin{pmatrix}
\sqrt2&-\sqrt2\\
\sqrt2&\sqrt2
\end{pmatrix}.
$$

The matrix $C$ is the companion matrix of $x^4+1$, so its minimal polynomial is $x^4+1$. The matrix $R$ is the real rotation matrix through the angle $\pi/4$, and it satisfies $R^4=-I$.

Consider the block diagonal matrix

$$
M=
\begin{pmatrix}
C&0\\
0&R
\end{pmatrix}.
$$

Then $M^4+I=0$, so the minimal polynomial of $M$ divides $x^4+1$. The minimal polynomial of a block diagonal matrix is the least common multiple of the minimal polynomials of its blocks. Since the minimal polynomial of the $C$ block is $x^4+1$, the minimal polynomial of $M$ is exactly $x^4+1$.

Finally, $M$ is not similar to a rational matrix. Indeed, trace is invariant under similarity, but

$$
\operatorname{tr}(M)=\operatorname{tr}(C)+\operatorname{tr}(R)=\sqrt2\notin\mathbb Q.
$$

Every matrix with rational entries has rational trace, so no rational matrix can be similar to $M$.
::

::ProblemBlock{number=7}
#problem

Find the Galois group of the splitting field of the polynomial

$$
p(x)=x^4-6x^2+6
$$

up to isomorphism. You may use without proof that $\sqrt6\notin\mathbb Q(\sqrt{3+\sqrt3})$.

#proof

Let $F$ be the splitting field of $p(x)$. Its roots satisfy

$$
x^2=\frac{6\pm\sqrt{36-24}}2=3\pm\sqrt3.
$$

Thus the roots are

$$
\pm\sqrt{3+\sqrt3}
\qquad\text{and}\qquad
\pm\sqrt{3-\sqrt3}.
$$

Set

$$
\alpha=\sqrt{3+\sqrt3},
\qquad
\beta=\sqrt{3-\sqrt3}.
$$

Then $F=\mathbb Q(\alpha,\beta)$. Moreover,

$$
\alpha\beta
=
\sqrt{(3+\sqrt3)(3-\sqrt3)}
=
\sqrt6,
$$

so $F=\mathbb Q(\alpha,\sqrt6)$.

By Eisenstein's criterion, applied at either $2$ or $3$, the polynomial $p(x)$ is irreducible over $\mathbb Q$. Hence

$$
[\mathbb Q(\alpha):\mathbb Q]=4.
$$

The degree of $\sqrt6$ over $\mathbb Q(\alpha)$ is at most $2$, and the given fact shows that it is greater than $1$. Therefore,

$$
[F:\mathbb Q(\alpha)]=2
$$

and

$$
[F:\mathbb Q]
=[F:\mathbb Q(\alpha)][\mathbb Q(\alpha):\mathbb Q]
=2\cdot4=8.
$$

Thus $G=\operatorname{Gal}(F/\mathbb Q)$ has order $8$. Because $F$ contains the nonnormal extension $\mathbb Q(\alpha)/\mathbb Q$, the corresponding subgroup of $G$ is not normal. Among the groups of order $8$, the only one having a nonnormal subgroup is the dihedral group of order $8$. Therefore,

$$
\operatorname{Gal}(F/\mathbb Q)\cong D_4,
$$

where $D_4$ denotes the dihedral group of order $8$.
::

::ProblemBlock{number=8}
#problem

If $q$ is a prime power, let $\mathbb F_q$ denote the finite field of order $q$. Find all polynomials $g(x)\in\mathbb F_2[x]$ such that

$$
\mathbb F_2[x]/(g(x))\cong\mathbb F_{16}.
$$

#proof

A polynomial $g(x)\in\mathbb F_2[x]$ satisfies

$$
\mathbb F_2[x]/(g(x))\cong\mathbb F_{16}=\mathbb F_{2^4}
$$

if and only if $g(x)$ is irreducible over $\mathbb F_2$ and has degree $4$.

A reducible quartic either has a linear factor or is a product of two irreducible quadratics. A quartic has a linear factor over $\mathbb F_2$ precisely when it has a root in $\{0,1\}$. The only irreducible quadratic over $\mathbb F_2$ is $x^2+x+1$, and

$$
(x^2+x+1)^2=x^4+x^2+1.
$$

After eliminating the quartics having a root in $\mathbb F_2$ and the square above, the irreducible monic quartics are

$$
x^4+x^3+1,\qquad
x^4+x+1,\qquad
x^4+x^3+x^2+x+1.
$$

Therefore, these are exactly the polynomials $g(x)$ for which

$$
\mathbb F_2[x]/(g(x))\cong\mathbb F_{16}.
$$
::

::ProblemBlock{number=9}
#problem

Let $n\geq 1$ be an integer. Prove that the polynomial

$$
f(x)=1+\frac{x}{1}+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}\in\mathbb Q[x]
$$

has no roots in $\mathbb C$ with multiplicity greater than $1$.

#proof

A polynomial has a repeated root if and only if it has a nonconstant common divisor with its derivative. Any common divisor of $f$ and $f'$ must also divide

$$
f(x)-f'(x)=\frac{x^n}{n!}.
::