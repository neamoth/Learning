console.log('Promise Then and catch function');

function newFun() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Promise is resolve');
                resolve();
            } else {
                console.log('Function: Promise is rejected')
                reject('Promise is not Fullfil');
            }
        }, 2000);
    })
}
newFun().then(function () {
    console.log('Neamoth: Thank you!!!!');
}).catch(function (error) {
    console.log('Neamoth: Sorry Bro !! ' + error)
})