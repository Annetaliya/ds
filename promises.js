createAudioFileAsync(audioSetting).then(succesCallback, failureCallback)
const promise = doSomething();
const promise2 = promise.then(succesCallback, failureCallback)

function doSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //other things to do before the
            //completion of the promise
            console.log("Did something")
            // the fulfillment value of the promise
            resolve('https://example.com')
        }, 200)
    })
}