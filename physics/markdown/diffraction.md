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

### パターンA: シャドウ + ホバー浮き上がり効果

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div class="card" style="border: 1px solid #333; border-radius: 8px; padding: 20px; margin: 16px 0; background-color: #ffffff; color: #000000; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);" onmouseover="this.style.boxShadow='0 8px 24px rgba(0, 0, 0, 0.25)'; this.style.transform='translateY(-4px)';" onmouseout="this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)'; this.style.transform='translateY(0)';">
    <h3 style="margin-top: 0; color: #000000; margin-bottom: 8px;">ジョーンズ行列</h3>
    <p style="color: #000000; margin: 0;">光の偏光を行列で表現する理論について学びます。</p>
  </div>
</a>

### パターンB: 左ボーダー + グラデーション背景 + シャドウ

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div class="card" style="border: 1px solid #333; border-left: 5px solid #4a90e2; border-radius: 8px; padding: 20px; margin: 16px 0; background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%); color: #000000; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);" onmouseover="this.style.boxShadow='0 8px 24px rgba(74, 144, 226, 0.3)';" onmouseout="this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)';">
    <h3 style="margin-top: 0; color: #4a90e2; margin-bottom: 8px;">ジョーンズ行列</h3>
    <p style="color: #000000; margin: 0;">光の偏光を行列で表現する理論について学びます。</p>
  </div>
</a>

### パターンC: 矢印アイコン + シャドウ + ホバー背景色変化

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div class="card" style="border: 1px solid #333; border-radius: 8px; padding: 20px; margin: 16px 0; background-color: #ffffff; color: #000000; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); display: flex; justify-content: space-between; align-items: center;" onmouseover="this.style.backgroundColor='#f0f0f0'; this.style.boxShadow='0 8px 24px rgba(0, 0, 0, 0.25)';" onmouseout="this.style.backgroundColor='#ffffff'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)';">
    <div>
      <h3 style="margin-top: 0; color: #000000; margin-bottom: 8px;">ジョーンズ行列</h3>
      <p style="color: #000000; margin: 0;">光の偏光を行列で表現する理論について学びます。</p>
    </div>
    <span style="font-size: 24px; color: #4a90e2; margin-left: 16px;">→</span>
  </div>
</a>

### パターンD: 大きめのテキスト + 余白増加 + シャドウ + スケーリング

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div class="card" style="border: 1px solid #333; border-radius: 8px; padding: 28px; margin: 16px 0; background-color: #ffffff; color: #000000; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(0, 0, 0, 0.25)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)';">
    <h3 style="margin-top: 0; color: #000000; margin-bottom: 12px; font-size: 22px;">ジョーンズ行列</h3>
    <p style="color: #000000; margin: 0; font-size: 16px; line-height: 1.6;">光の偏光を行列で表現する理論について学びます。</p>
  </div>
</a>

### パターンE: グラデーション + 左ボーダー + アイコン + ホバー浮き上がり

<a href="https://esk0ik3.github.io/physics/markdown/jones_matrix.html" style="text-decoration: none; color: inherit;">
  <div class="card" style="border: 1px solid #ddd; border-left: 6px solid #4a90e2; border-radius: 12px; padding: 24px; margin: 16px 0; background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%); color: #000000; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" onmouseover="this.style.boxShadow='0 12px 32px rgba(74, 144, 226, 0.25)'; this.style.transform='translateY(-6px)';" onmouseout="this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.1)'; this.style.transform='translateY(0)';">
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <h3 style="margin-top: 0; color: #4a90e2; margin-bottom: 8px;">ジョーンズ行列</h3>
        <p style="color: #666; margin: 0;">光の偏光を行列で表現する理論について学びます。</p>
      </div>
      <span style="font-size: 28px; color: #4a90e2; margin-left: 16px;">✦</span>
    </div>
  </div>
</a>
