// 背景に「座標系」を描画する
const canvas = document.createElement('canvas');
canvas.id = 'bg-grid';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let mouse = { x: null, y: null };
const gridSize = 40;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
resize();

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; // 非常に薄いグリッド
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
            let posX = x;
            let posY = y;

            if (mouse.x && mouse.y) {
                let dx = mouse.x - x;
                let dy = mouse.y - y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                
                // マウス周辺でグリッドの交点をわずかに引き寄せる
                if (dist < 200) {
                    posX += dx * (200 - dist) / 1000;
                    posY += dy * (200 - dist) / 1000;
                }
            }

            // 十字マークを描画（測量図のようなイメージ）
            ctx.beginPath();
            ctx.moveTo(posX - 3, posY); ctx.lineTo(posX + 3, posY);
            ctx.moveTo(posX, posY - 3); ctx.lineTo(posX, posY + 3);
            ctx.stroke();
        }
    }
    requestAnimationFrame(drawGrid);
}

drawGrid();
