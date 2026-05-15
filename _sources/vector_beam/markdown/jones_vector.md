# ジョーンズベクトル

完全偏光である光の電場は，以下のように表現できます．ただし，光は$\, z \,$軸方向に伝播しており，電場は$\, x, y \,$面内で振動しているものとします.

$$
\mathbf{E(z,t)} = 
\mathbf{J}e^{i(kz-\omega t)}
\tag{1}
$$

この$\, \mathbf{J} \,$は2次元複素ベクトルであり，ジョーンズベクトルと呼ばれています．
> ジョーンズベクトルは，1941年にアメリカの物理学者ロバート・クラーク・ジョーンズ(Robert Clark Jones, 1916–2004)によって考案されました.

具体的には以下のように書けます．

$$
\mathbf{J} = 
\begin{bmatrix}
A _ {x} e^{i\phi _ x} \newline
A _ {y} e^{i\phi _ y}
\end{bmatrix}
\tag{2}
$$

$A _ {x}, A _ {y} \,$は$\, x, y \,$成分の振幅を表し，$\phi _ x, \phi _ y \,$は$\, x, y \,$成分の位相を表しています．

## 偏光の表現

ジョーンズベクトルによって偏光状態を表現できます．偏光とは電場の振動方向であるので，$\, x, y \,$成分間の振幅比と位相差が重要です．よって，以下のようにジョーンズベクトルを規格化してもokです．

$$
\mathbf{J} = 
\begin{bmatrix}
1 \newline
A e^{i\phi}
\end{bmatrix}
\tag{3}
$$

ただし，$\, A = \frac{A _ y}{A _ x} \, , \phi = \phi _ y - \phi _ x \,$です．

ここで$\, (3) \,$式を$\, (1) \,$式に代入します．

$$
\mathbf{E(z,t)} = 
\begin{bmatrix}
1 \newline
A e^{i\phi}
\end{bmatrix}
e^{i(kz-\omega t)}
\tag{4}
$$

今は，偏光状態だけを考えているので，わかりやすいように$\, z=0 \,$の地点を考えます．

$$
\begin{aligned}
\mathbf{E(0,t)}
&= 
\begin{bmatrix}
1 \newline
A e^{i\phi}
\end{bmatrix}
e^{-i\omega t} \newline
&=
\begin{bmatrix}
e^{-i\omega t} \newline
A e^{i(\phi-\omega t)}
\end{bmatrix} \newline
&=
\begin{bmatrix}
\cos{\omega t}-i\sin{\omega t} \newline
A \big(\cos{(\phi-\omega t)}-i\sin{(\phi-\omega t)}\big)
\end{bmatrix}
\end{aligned}
\tag{5}
$$

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

