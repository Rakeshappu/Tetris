class Piece {
    constructor(shape, ctx) {
        this.shape = shape;
        this.ctx = ctx;
        this.y = 0;
        this.x = Math.floor(columns / 2) - Math.floor(shape[0].length / 2);
    }
    renderPiece() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = colours[cell];
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1);
                }
            });
        });
    }
}
