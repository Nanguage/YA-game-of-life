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

    document.querySelector("button.set-fps").addEventListener("click", () => {
        let input = document.querySelector("input.set-fps")
        let fps = Number(input.value)
        eh.w.fps = fps
    })
    return eh
}