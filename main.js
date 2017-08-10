const assert = (condition, message) => {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

const __test__ = () => {
    let m = [
        [0, 1, 0, 1],
        [1, 1, 0 ,1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ]
    let m0 = around(m, 0, 1)
    let expect_m0 = [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 0],
    ]
    let m1 = around(m, 1, 0)
    let expect_m1 = [
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 1],
    ]
    assert(JSON.stringify(m0) == JSON.stringify(expect_m0),
           "around function error")
    assert(JSON.stringify(m1) == JSON.stringify(expect_m1),
           "around function error")
    assert(sum2D(m0) == 3, "sum2D function error")
    assert(getCenter2D(m0) == 1, "getCenter2D function error")

    //canvas = document.getElementById('world')
    //let w = world(canvas, 4, 4)
    //w.status = m
    //w.display()
    //w.run()
}

const __main__ = () => {
    canvas = document.getElementById('world')
    w = world(canvas, 200, 200)
    w.fps = 10
    w.run()
}

//__test__()
__main__()