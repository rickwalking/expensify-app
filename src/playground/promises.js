const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolve data');
        reject('something went wrong');
    }, 1500);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});