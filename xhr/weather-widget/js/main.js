const request = new XMLHttpRequest();
request.addEventListener("load", onLoad);
request.addEventListener("error", onError);
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather', true);
request.send();
function onLoad() {
    if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        setData(response);
    }else{
        console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);
    }
}
function onError() {
    console.log("Сработало событие error");
}

