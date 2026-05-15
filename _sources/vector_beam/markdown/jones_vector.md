# ジョーンズベクトル

完全偏光である光の電場は，以下に⽰すような2次元の複素ベクトルで表現できます．このベクトルはジョーンズベクトルと呼ばれています．ただし，光は$\, z \,$軸方向に伝播しており，電場は$\, x, y \,$面内で振動しているものとします.

> 1941年にアメリカの物理学者ロバート・クラーク・ジョーンズ(Robert Clark Jones, 1916–2004)によって考案されました.

$$
\mathbf{E} = 
\begin{bmatrix}
A _ {x} e^{i\phi _ x} \newline
A _ {y} e^{i\phi _ y}
\end{bmatrix}
\tag{1}
$$

$A _ {x}, A _ {y} \,$は$\, x, y \,$成分の振幅を表し，$\phi _ x, \phi _ y \,$は$\, x, y \,$成分の位相を表しています．

## 偏光の表現

ジョーンズベクトルによって偏光状態を表現することを考えます．偏光とは電場の振動方向であるので，$\, x, y \,$成分間の振幅比と位相差が重要です．よって，以下のようにジョーンズベクトルを規格化します．

$$
\mathbf{E} = 
\begin{bmatrix}
1 \newline
A e^{i\phi}
\end{bmatrix}
\tag{2}
$$

ただし，$\, A = \frac{A _ y}{A _ x} \, , \phi = \phi _ y - \phi _ x \,$です．

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

