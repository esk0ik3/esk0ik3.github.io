# ジョーンズベクトル

完全偏光である光の電場は，以下に⽰すような２次元の複素ベクトルで表現できます．このベクトルはジョーンズベクトルと呼ばれています．ただし，光は$z$軸方向に伝播しており，電場は$x, y$面内で振動しています.

$$
\mathbf{E} = 
\begin{bmatrix}
A _ {x} e^{i\phi _ x} \newline
A _ {y} e^{i\phi _ y}
\end{bmatrix}
\tag{1}
$$

ここで，$A _ {x}, A _ {y}$はそれぞれ$x, y$成分の振幅を表し，$\phi _ x, \phi _ y$はそれぞれ$x, y$成分の位相を表しています．

これは1941年にアメリカの物理学者ジョーンズ(R. Clark Jones)によって考案されたもので **ジョーンズベクトル** と言い,上式のように書くことで偏光状態を **複素ベクトル** によって表すことができます. $x,y$ 成分の振幅や位相の違いによって色々な偏光状態が表されます.

ここで **※全体にかかる振幅の大きさや位相は偏光の状態に影響しない** ことに注意してくださいこれは

- 全体にかかる振幅とは、例えば水平方向に振動している電場の振動の幅が変わるだけで水平であるという形は変わらない.
- 全体にかかる位相とは、例えば水平方向に振動している電場をどの瞬間から観測するのか(右に一番振れているところから観測するのか,左に一番振れているところから観測するのか)の違いであり物理的にはどちらも同じ電場を表している.

ということに対応しています.つまり $(1.1)$ 式は

$$
\vec{E}=E _ {x0} e^{i\phi _ x}
\begin{bmatrix}
1 \newline
\frac{E _ {y0}}{E _ {x0}} e^{i(\phi _ y-\phi _ x)}
\end{bmatrix}\propto
\begin{bmatrix}
1 \newline
a e^{i\delta}
\end{bmatrix}
$$

- $a = \frac{E _ {y0}}{E _ {x0}}$
- $\delta = \phi _ y-\phi _ x$

としても **同じ偏光状態** を表しているということです.

<div style="page-break-before:always"></div>

## ジョーンズベクトルの見方

ジョーンズベクトルは複素ベクトルであるので成分だけで見るとどのような偏光状態を表しているかは一目ではわからないです.そこでこのベクトルが時間変化したときにどのような形になるかを考えます.時間変化を見たいので $e^{i\omega t}$ をかけます.

$$
\vec{E}=e^{i\omega t}
\begin{bmatrix}
E_{x0} e^{i\phi_x} \newline
E_{y0} e^{i\phi_y}
\end{bmatrix}
$$

次にこのベクトルを実部と虚部に分けます.

$$
\vec{E}=
\begin{bmatrix}
E_{x0}[\cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x}+i(\cos{\omega t}\sin{\phi _ x}+\sin{\omega t}\cos{\phi _ x})] \newline
E_{y0}[\cos{\omega t}\cos{\phi _ y}-\sin{\omega t}\sin{\phi _ y}+i(\cos{\omega t}\sin{\phi _ y}+\sin{\omega t}\cos{\phi _ y})] 
\end{bmatrix}
$$

最後に実部をとり $t$ を変化させたときのベクトルの軌跡を見れば良いです.つまり

$$
Re(\vec{E})=
\begin{bmatrix}
E_{x0}(\cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x}) \newline
E_{y0}(\cos{\omega t}\cos{\phi _ y}-\sin{\omega t}\sin{\phi _ y}) 
\end{bmatrix} \quad (2.1)
$$

の軌跡を考えます.

そもそも波を複素数で表現するのは実部だけ( $\cos$ だけ)で考えると計算が面倒になるという問題を解決するためだったので最終的には実部を取るというのは理にかなっています.

次の項からは代表的な偏光状態について考えます.

<div style="page-break-before:always"></div>

## 直線偏光

$(1.1)$ 式において $x,y$ 成分の位相が共に等しいとき,つまり

$$
\phi_y = \phi_x
$$

の場合を考えます.軌跡を考えるベクトルは

$$
\begin{aligned}
Re(\vec{E})
&=
\begin{bmatrix}
E_{x0}(\cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x}) \newline
E_{y0}(\cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x}) 
\end{bmatrix} \newline
&=
\begin{bmatrix}
E_{x0}\cos{(\omega t+\phi _ x)} \newline
E_{y0}\cos{(\omega t+\phi _ x)}
\end{bmatrix} \newline
\therefore Re(\vec{E})
&=
\cos{(\omega t+\phi _ x)}
\begin{bmatrix}
E_{x0} \newline
E_{y0}
\end{bmatrix}
\end{aligned}
$$

$x,y$ 成分に位相差はないので振幅の比によって偏光状態が決まります.また, $t$ を変化させてこのベクトルの軌道を見てもこれらの成分の比は変わらないので直線に変化します.この偏光状態を直線偏光と言います.

## 円偏光

次に振幅が等しく,x成分の位相 $\delta _ x$ ,y成分の位相 $\delta _ y$ が $\delta = \delta _ y - \delta _ x$ だけ遅れている場合を考えます.まず

$$
\delta = \frac{\pi}{2}
$$

の場合を考えます.

$$
\phi_y = \phi_x + \frac{\pi}{2}
$$

であるのでこれを(2.1)に代入すると

$$
\begin{aligned}
  Re(\vec{E})&=
  \begin{bmatrix}
    E_{x0}(\cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x}) \newline
    E_{y0}(\cos{\omega t}\cos{\phi _ y}-\sin{\omega t}\sin{\phi _ y}) 
  \end{bmatrix} \newline
    &=E _ {x0}
  \begin{bmatrix}
    \cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x} \newline
    \cos{\omega t}\cos{(\phi _ x+\frac{\pi}{2})}-\sin{\omega t}\sin{(\phi _ x+\frac{\pi}{2})}
  \end{bmatrix} \newline
    &=E _ {x0}
  \begin{bmatrix}
    \cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x} \newline
    -\cos{\omega t}\sin{\phi _ x}-\sin{\omega t}\cos{\phi _ x}
  \end{bmatrix} \newline
    \therefore Re(\vec{E})&=
    E _ {x0}
  \begin{bmatrix}
    \cos{\omega t} \newline
    -\sin{\omega t}
  \end{bmatrix}
\end{aligned}
$$

任意の $\phi _ x$ について成り立つので $\phi _ x=0$ としました.この軌道は右回りの円になるのでこれは **右回り円偏光** となります.

また(1.1)に代入するとジョーンズベクトルは

$$
\begin{aligned}
  \vec{E}
    &=E_{x0}
  \begin{bmatrix}
    e^{i \varphi_x} \newline
    e^{i (\varphi_x + \frac{\pi}{2})}
  \end{bmatrix} \newline
    &= E_{x0} e^{i\varphi_x}
  \begin{bmatrix}
    1 \newline
    e^{i\frac{\pi}{2}}
  \end{bmatrix} \newline
    &= E_{x0} e^{i\varphi_x} \newline
  \therefore \vec{E} &=E_{x0} e^{i\varphi_x}
  \begin{bmatrix}
    1 \newline
    i
  \end{bmatrix} \newline
\end{aligned}
$$

となるのでこのジョーンズベクトルは右回り円偏光を表していることが分かりました.

次に

$$
\delta = -\frac{\pi}{2}
$$

の場合を考えます.同様に計算すると

$$
\begin{aligned}
  Re(\vec{E})&=
  \begin{bmatrix}
    E_{x0}(\cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x}) \newline
    E_{y0}(\cos{\omega t}\cos{\phi _ y}-\sin{\omega t}\sin{\phi _ y}) 
  \end{bmatrix} \newline
    &=E _ {x0}
  \begin{bmatrix}
    \cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x} \newline
    \cos{\omega t}\cos{(\phi _ x-\frac{\pi}{2})}-\sin{\omega t}\sin{(\phi _ x-\frac{\pi}{2})}
  \end{bmatrix} \newline
    &=E _ {x0}
  \begin{bmatrix}
    \cos{\omega t}\cos{\phi _ x}-\sin{\omega t}\sin{\phi _ x} \newline
    \cos{\omega t}\sin{\phi _ x}+\sin{\omega t}\cos{\phi _ x}
  \end{bmatrix} \newline
    \therefore Re(\vec{E})&=
    E _ {x0}
  \begin{bmatrix}
    \cos{\omega t} \newline
    \sin{\omega t}
  \end{bmatrix}
\end{aligned}
$$

となりこれは **左回り円偏光** となります.

$$
\begin{aligned}
  \vec{E}
    &=E_{x0}
  \begin{bmatrix}
    e^{i \varphi_x} \newline
    e^{i (\varphi_x - \frac{\pi}{2})}
  \end{bmatrix} \newline
    &= E_{x0} e^{i\varphi_x}
  \begin{bmatrix}
    1 \newline
    e^{-i\frac{\pi}{2}}
  \end{bmatrix} \newline
    &= E_{x0} e^{i\varphi_x} \newline
  \therefore \vec{E}&=E_{x0} e^{i\varphi_x}
  \begin{bmatrix}
    1 \newline
    -i
  \end{bmatrix} \newline
\end{aligned}
$$

となりこのジョーンズベクトルは左回り円偏光を表していることが分かりました.

## ジョーンズベクトルによるベクトルビームの表現

ベクトルビームは断面内で空間的な偏光不均一性を持つため，ジョーンズベクトルを位置の関数として定義することで，その特性を表現します．

ビームは円形であることが多いため，極座標系で位置を表現したほうが分かりやすいです．そこで，径成分$\, r \,$，方位角$\, \varphi \,$を用いてベクトルビームのジョーンズベクトルは

$$
\mathbf{J}(r, \varphi)=
\begin{bmatrix}
f(r, \varphi) \newline
g(r, \varphi)
\end{bmatrix}
\tag{1}
$$

のように書くことができます．

以下に，有名なベクトルビームの例を示します．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/lemon_monstar_star.png" 
       style="width: 70%; background-color: transparent !important; border: none !important; box-shadow: none !important;">
  <p style="margin-top: 10px; font-size: 0.8em;">偏光状態</p>
</div>

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/radial_azimuthal.png" 
       style="width: 50%; background-color: transparent !important; border: none !important; box-shadow: none !important;">
  <p style="margin-top: 10px; font-size: 0.8em;">偏光状態</p>
</div>

