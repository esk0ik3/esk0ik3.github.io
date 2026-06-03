# 学生時代の研究概要

ここでは，自分が大学生の時に研究していた内容をざっくり説明します．途中で出てくる内容についてはこのあとの章で詳しく説明します．

## 偏光

光は電磁波の一種であるので，その伝播方向と直交した方向に電場と磁場が振動しています．今，電場の振動方向を考える*と，光を迎える側から見た人からはどの方向に振動しているかということを考えることができます，これを偏光といいます．

*物質と相互作用するのは電場であるため．例えば，カメラで撮影できるのは電場分布．

## スカラービームとベクトルビーム

光はレーザーポインターのように大きさを持つので，各位置での振動方向というものが考えられます．しかし，一般的に使われているビームは，場所によらずにすべて同じ方向に振動しています．これをスカラービームと言います．それとは違って，この振動方向が位置によって異なるものをベクトルビームと言います．自分は，このベクトルビームというものを研究していました．

ベクトルビームの例をいくつか下に示します．矢印はビーム断面内の電場の振動方向を表しています．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/radial_azimuthal_lemon_monstar_star.png" 
       style="width: 100%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">ベクトルビームの例</p>
</div>

## 研究内容

自分の研究では，一番左側のラジアル偏光ビームを扱っていました．理論的には，以下のような光強度分布をもちます．

左から全光強度，0°～135°偏光，LCP(左回り円偏光)，RCP(右回り円偏光)です．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/sim_radial_intensity.png" 
       style="width: 100%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">シミュレーション</p>
</div>

しかし，実験では

- 光学系の収差
- 光学素子の持つ，反射率，透過率，位相変化の偏光依存性

という要因によって，以下のように，光強度分布が異なるラジアル偏光ビームになってしまいます．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/exp_radial_intensity_1.png" 
       style="width: 100%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">実験結果(補正前)</p>
</div>

これを，空間光変調素子(SLM)や，電動回転マウントによって，新たに光学素子を追加せずに，動的にフィードバック制御する光学システムの構築，という研究を行っていました．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/exp_radial_intensity_2.png" 
       style="width: 100%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">実験結果(補正後)</p>
</div>

ストークスパラメーターで比較すると以下のようになります．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/sim_radial_stokes_parameter.png" 
       style="width: 50%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">シミュレーション</p>
</div>

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/exp_radial_stokes_parameter_1.png" 
       style="width: 50%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">実験結果(補正前)</p>
</div>

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/exp_radial_stokes_parameter_2.png" 
       style="width: 50%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">実験結果(補正後)</p>
</div>

なお，使用した光学系は以下のものです．

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/esk0ik3/esk0ik3.github.io/main/vector_beam/fig/vector_beam_optical_setup.png" 
       style="width: 100%; background-color: white !important; padding: 10px; border: none !important; box-shadow: none !important; border-radius: 4px;">
  <p style="margin-top: 5px; font-size: 0.9em;">実験光学系</p>
</div>

- BS:ビームスプリッター
- PBS:偏光ビームスプリッター
- BE:ビームエキスパンダー
- RAP:三角プリズム
- SLM:空間光変調素子
- HWP:1/2波長板
- QWP:1/4波長板
- SH sensor:シャックハルトマンセンサー.
