let sub = document.forms.authUser
localStorage.setItem('one', 1)
sub.addEventListener('submit', (data) => {
    data.preventDefault()

    document.body.style.backgroundColor = 'grey'
    let formData = new FormData(sub);
    formData.forEach(element => {
        console.log(element);
    });
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8000/api/v1/token/', true)
    xhr.responseType = 'json'
    xhr.send(formData);


    xhr.onload = function () {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера

            var user = xhr.response
            console.log(user.access);
            localStorage.setItem("jwt", user.access)
            console.log(localStorage);
            document.body.style.backgroundColor = 'white'

            setTimeout(() => {
                location.href = 'http://Thezhenok.github.io/igor/two'
            }, 1000);
        }
    };
})

console.log('Open');






