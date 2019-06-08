const getFiles = function () {
    refresh();
};

const getFolders = function () {
    refresh();
};

const downloadFile = function () {
    refresh();
};

const simpleGet = function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            refresh();
            update(JSON.stringify(json, undefined, 4));
        });
};


const refresh = function () {
    var resultarea = document.getElementById("text-area");
    resultarea.value = "";
};

const update = function (data) {
    var resultarea = document.getElementById("text-area");
    resultarea.value = data;
};