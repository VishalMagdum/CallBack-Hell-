let line = document.querySelector('.line')
var count = function () {
    var display = document.getElementById('count-text')
    setTimeout(() => {
        display.innerText = "10"
        setTimeout(() => {
            display.innerText = "9"
            setTimeout(() => {
                display.innerText = "8"
                setTimeout(() => {
                    display.innerText = "7"
                    setTimeout(() => {
                        display.innerText = "6"
                        setTimeout(() => {
                            display.innerText = "5"
                            setTimeout(() => {
                                display.innerText = "4"
                                setTimeout(() => {
                                    display.innerText = "3"
                                    setTimeout(() => {
                                        display.innerText = "2"
                                        setTimeout(() => {
                                            display.innerText = "1"
                                            setTimeout(() => {
                                                line.style.display = "none"
                                                display.innerText = "Happy Independence Day"


                                            }, 1000)


                                        }, 1000)


                                    }, 1000)

                                }, 1000)

                            }, 1000)

                        }, 1000)

                    }, 1000)

                }, 1000)

            }, 1000)

        }, 1000)
    }, 1000)
}
count()
