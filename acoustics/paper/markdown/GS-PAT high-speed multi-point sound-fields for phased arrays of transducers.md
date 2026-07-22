# GS-PAT high-speed multi-point sound-fields for phased arrays of transducers
[https://dl.acm.org/doi/10.1145/3386569.3392492](https://dl.acm.org/doi/10.1145/3386569.3392492)

## イントロ
・PATs(Phased Arrays of Transducers)とは振動子(トランスデューサ)を並べることで音波や超音波の振幅と位相を空間的に(例えば16x16)制御できる装置であり、haptics(触覚)、levitation(空中に浮遊させてディスプレイとして用いる)、パラメトリックオーディオ(特定の人にだけ音を届ける)などに応用されている。
この制御に使われるアルゴリズムは、1秒間に数百回程度の計算しかできないという問題がある。これにより複数の場所を高速で制御することは難しく、PATsの応用範囲を広げる際に障壁となっている。
これらを踏まえて、この論文ではGS-PATというアルゴリズムを提案している。

