## 物理について

ここでは物理学に関するトピック、特に光学についてまとめています。

## マクスウェル方程式
文中に数式を入れる場合は、シングルドル記号で囲みます。
例えば、電磁波の基本となるのはマクスウェル方程式 $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$ です。

## 径方向偏光（Radially Polarized Beam）
独立した行で数式を表示したい場合は、ダブルドル記号 `$$` で囲みます。

$$
\mathbf{E}(r, \phi) = E_0(r) \begin{pmatrix} \cos \phi \\ \sin \phi \end{pmatrix}
$$

このように行列を使って偏光状態を記述することも可能です。

## フーリエ変換
光学シミュレーションで頻繁に使用する2次元フーリエ変換の定義は以下の通りです。

$$
G(f_x, f_y) = \iint_{-\infty}^{\infty} g(x, y) e^{-j 2\pi (f_x x + f_y y)} dx dy
$$
