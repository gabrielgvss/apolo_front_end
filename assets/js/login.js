function validacao(user, senha) {
    fetch('http://127.0.0.1:8000/api/funcionarios', {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: user,
            senha: senha,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.error) {
                alert("Error Password or Username");
                const inputs = document.querySelectorAll('input')
                inputs.forEach(input => input.classList.add('border-danger'))

            } else {
                window.open(
                    "index.html"
                ); /*opens the target page while Id & password matches*/
            }
        })
        .catch((err) => {
            console.log(err);
        });
}