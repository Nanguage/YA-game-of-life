const genMatrix = (width, height, initFunc=randInit) => {
    /**
     * generate matrix
     * initFunc(i, j) : init function of cell in position (i, j),
     *     default random init.
     */
    let m = new Array()
    for (let i = 0; i < height; i++) {
        m[i] = new Array()
        for (let j = 0; j < width; j++) {
            m[i][j] = initFunc(i, j)
        } 
    }
    return m
}

const randInit = (i, j) => {
    /**
     * init cell randomly, half chance alive, half chance dead
     */
    return Math.floor(Math.random() * 2)
}

const around = (matrix, y, x, borderSize=1) => {
    /**
     * get the sub-matrix which is around the cell 'matrix[y][x]'
     * borderSize: how many layers around the center, default 1
     */
    let b = borderSize
    let size = b * 2 + 1
    let center = b + 1
    let len_y = matrix.length
    let len_x = matrix[0].length
    let around = genMatrix(size, size, (i, j)=>{
        let pos_y = (y + (i + 1 - center)) % len_y
        let pos_x = (x + (j + 1 - center)) % len_x
        pos_y = (pos_y < 0) ? len_y + pos_y : pos_y
        pos_x = (pos_x < 0) ? len_x + pos_x : pos_x
        let alive = matrix[pos_y][pos_x]
        return alive
    })
    return around
}

const sum2D = (matrix) => {
    /**
     * get the sum value of 2D matrix.
     */
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j =  0; j < matrix[i].length; j++) {
            sum += matrix[i][j]
        }
    }
    return sum
}

const getCenter2D = (matrix) => {
    /**
     * get the center element of matrix
     */
    h = matrix.length 
    w = matrix[0].length
    hc = Math.floor(h/2)
    wc = Math.floor(w/2)
    return matrix[hc][wc]
}

const printMatrix = (matrix) => {
    /**
     * print matrix in a easy to read format,
     * for debug
     */
    let str = ""
    for (let i = 0; i < matrix.length; i++) {
        for (let j =  0; j < matrix[i].length; j++) {
            str += matrix[i][j] + " "
        }
        str += "\n"
    }
    log(str)
}