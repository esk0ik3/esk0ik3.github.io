# ジョーンズベクトル

光が完全偏光であると仮定して，その偏光状態をジョーンズベクトルによって定式化します．ただし，ベクトルビームは断面内で空間的な偏光不均一性を持つため，ジョーンズベクトルを位置の関数として定義することで，その特性を表現します．

ここで，方位角:$\varphi$に依存するような，以下のようなジョーンズベクトル

$$
\mathbf{J(\varphi)}=
\begin{bmatrix}
\cos{\varphi} \newline
\sin{\varphi}
\end{bmatrix}
$$

を考えます.これは，例えば$\varphi=0(rad)$の位置では

$$
\mathbf{J(0)}=
\begin{bmatrix}
1 \newline
0
\end{bmatrix}
$$

となり，p偏光であることが分かります．このように考えると，このジョーンズ行列が表している偏光状態は以下のような分布になっています．い

<!-- 1. 標準Markdown（サイズ指定不可のためそのまま） -->
![画像](./fig/radial.png)

<!-- 2. HTMLタグ（前後に必ず空行を入れる） -->

<img src="./fig/radial.png" style="display: block; margin: 0 auto; width: 10%;">

<!-- 3. pタグ囲み（前後に必ず空行を入れる） -->

<p style="text-align: center;">
  <img src="./fig/radial.png" style="width: 10%;">
</p>

<!-- 4. Kramdownスタイル（ ) と { の間に必ずスペースを入れる） -->
![画像](./fig/radial.png) {: style="display:block; margin:0 auto; width: 10%;"}

<!-- 5. Kramdownクラス（ ) と { の間に必ずスペースを入れる） -->
![画像](./fig/radial.png) {: .center width="10%"}
