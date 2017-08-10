const eventHandler = (world) => {
    eh = {
        w: world,
    }
    document.querySelector("#pause").addEventListener("click", () => {
        eh.w.pause()
    })
    document.querySelector("#continue").addEventListener("click", () => {
        eh.w.continue()
    })
    document.querySelector("#step").addEventListener("click", () => {
        eh.w.step()
    })
    document.querySelector("#clear").addEventListener("click", () => {
        eh.w.clear()
        eh.w.display()
    })
    document.querySelector("#init").addEventListener("click", () => {
        eh.w.init()
        eh.w.display()
    })

    document.querySelector("button.set-fps").addEventListener("click", () => {
        let input = document.querySelector("input.set-fps")
        let fps = Number(input.value)
        eh.w.fps = fps
    })

    eh.w.canvas.addEventListener('mousedown', (event) => {
        // change the cell status which has been clicked
        let size = eh.w.canvas.width/eh.w.width
        let y = event.offsetY
        let x = event.offsetX
        let i = Math.floor(y/size) 
        let j = Math.floor(x/size) 
        alive = eh.w.status[i][j]
        eh.w.status[i][j] = alive ? 0 : 1
        eh.w.display()
    })
    return eh
}