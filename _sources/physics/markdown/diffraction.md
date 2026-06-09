# 光の回折

ホログラムから出てきた光は，回折しながら伝播します．伝播後の像がどのように記述されるかを示します．

## フレネル回折

物体面での光の位置を$\, (x_0, \, y_0) \,$，観測面での位置座標を$\, (x, \, y) \,$とし，この間を距離$\, r \,$だけ伝播するという状況を考えます．

ただし，物体面と観測面は距離$\, z \,$だけ離れているものとします．

まず，この距離$\, r \,$は，$x, y, x_0, y_0, z \,$を用いて

$$
\begin{aligned}
r &= \sqrt{(x-x_0)^2+(y-y_0)^2+z^2} \newline
&= z \sqrt{1+\frac{(x-x_0)^2}{z^2}+\frac{(y-y_0)^2}{z^2}}
\end{aligned}
\tag{1}
$$

と表すことができます．

ここで，$\alpha \,$がめっちゃ小さいとき

$$
\sqrt{1+\alpha} \approx 1+\frac{\alpha}{2}
\tag{2}
$$

と近似できるので，(2)式を用いると，(1)式は

$$
\begin{aligned}
r &= z(1+\frac{(x-x_0)^2+(y-y_0)^2}{2z^2}) \newline
&\approx z+\frac{(x-x_0)^2+(y-y_0)^2}{2z}
\end{aligned}
\tag{3}
$$

と近似できます．ここで，各点での光は球面波として伝播するものと考えます．つまり，距離$, r \,$だけ離れている点へ伝播するとき，その場所では

$$
u = \frac{e^{-ikr}}{r}
\tag{4}
$$

という波に変化します．
(4)式に(3)式を代入すると

**レイリー＝ゾンマーフェルトの回折積分**は

$$
U(x \, y)=\frac{1}{i \lambda} \iint^{\infty} _ {-\infty}{U _ 0(x _ 0 \, y _ 0)\frac{e^{ikr}}{r}\cos{\theta}dx _ 0dy _ 0}
\tag{5}
$$

と書けるので，これに先ほど近似した$\, r \,$を代入すると

$$

$$

---

## 関連ページ

### 方法1: HTMLカード型リンク（クリッカブル）

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div class="card" style="border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin: 16px 0; background-color: #f9f9f9; cursor: pointer; transition: all 0.3s ease;">
    <h3 style="margin-top: 0;">ジョーンズ行列</h3>
    <p>光の偏光を行列で表現する理論について学びます。</p>
  </div>
</a>

### 方法2: Markdownカード記法（CSS class使用）+ JavaScript

{:.card-link href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html"}
## ジョーンズ行列
光の偏光を行列で表現する理論について学びます。

<script>
document.querySelectorAll('.card-link').forEach(card => {
  const href = card.getAttribute('href');
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => window.location.href = href);
  card.addEventListener('mouseenter', () => card.style.opacity = '0.8');
  card.addEventListener('mouseleave', () => card.style.opacity = '1');
});
</script>

### 方法3: 引用ブロック形式（クリッカブル）

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div style="border-left: 4px solid #ccc; padding-left: 16px; margin: 16px 0; cursor: pointer; transition: opacity 0.3s ease;">
    <strong>ジョーンズ行列</strong><br>
    光の偏光を行列で表現する理論について学びます。
  </div>
</a>
