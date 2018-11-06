onmessage = function (mess) {
    let text = mess.data;
    console.log(text);
    this.postMessage('*' + text + '*');

    let result = nums.reduce((ant, act) => {
        return ant += act;
    });
    this.postMessage(result);

}