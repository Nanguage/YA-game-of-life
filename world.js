const world = (canvas, width=100, height=100, fps=1) => {
    /**
     *  Conway's game of life
     */
    let context = canvas.getContext('2d')
    let status = genMatrix(width, height)

    let w = {
        canvas: canvas,
        context: context,
        width: width,
        height: height,
        status: status,
        fps: fps,
        stop: false,
    }

    w.update = function() {
        let next = genMatrix(this.width, this.height, (i, j) => {return 0})
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let neighbors = around(this.status, i, j)
                let alive = this.status[i][j]
                let n = sum2D(neighbors) - alive
                let nextAlive
                if (alive) {
                    if (n < 2) {
                        nextAlive = 0
                    } else if (n > 3) {
                        nextAlive = 0
                    } else {
                        nextAlive = 1
                    }
                } else {
                    if (n == 3) {
                        nextAlive = 1
                    } else {
                        nextAlive = 0
                    }
                }
                next[i][j] = nextAlive                
                //printMatrix(this.status)
                //printMatrix(neighbors)
                //log(i, j, nextAlive)
            }
        }
        //printMatrix(this.status)
        //printMatrix(next)
        //log('---------------')
        this.status = next.slice()
    }

    w.display = function(colors={ 0: 'white', 1: 'black', }) {
        let [w, h] = [this.canvas.width/this.width,
                      this.canvas.height/this.height]
        let ctx = this.context
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let alive = this.status[i][j]
                ctx.fillStyle = colors[alive]
                ctx.fillRect(j*w, i*h, w, h)
            }
        }
    }

    w.run = function() {
        setInterval(() => {
            if (!this.stop){
                this.update()
                this.display()
            }
        }, 1000/this.fps)
    }

    return w
}