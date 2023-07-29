const display = document.getElementById('result')
const ques = document.getElementById('question')
function fizzBuzz() {
    if (document.getElementById('counts').value.length > 0) {
        let timerInterval
        Swal.fire({
            html: '<small style="font-size: 18px">Finding FIZZ-BUZZ!<br /><b></b></small>',
            timer: 900,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then(() => {
            var res = []
            var show = []
            var exp = []
            ques.innerHTML = ""
            display.innerHTML = ""
            var num = (document.getElementById("counts").value).split(",")
            for (let i = 0; i < num.length; i++) {
                show.push(num[i])
                if (num[i] % 3 == 0 && num[i] % 5 == 0) {
                    res.push("FIZZBUZZ");
                    exp.push(`${num[i]} is divisble by BOTH 3 and 5 That why it is FIZZBUZZ`);
                } else if (num[i] % 3 == 0) {
                    res.push("FIZZ");
                    exp.push(`${num[i]} is divisble only by 3 That why it is FIZZ`);
                } else if (num[i] % 5 == 0) {
                    res.push("BUZZ");
                    exp.push(`${num[i]} is only divisble only by 5 That why it is BUZZ`);
                } else {
                    res.push(num[i]);
                    exp.push(`${num[i]} is nor divisble by 3 neither by 5`);
                }
            }
            ques.innerHTML = show
            display.innerHTML = res
            document.getElementById('exp').innerHTML = "<h1>Explaination</h1>"
            function explain() {
                var n = exp
                for (i = 0; i < n.length; i++) {
                    document.getElementById('exp').innerHTML += `<li>${n[i]}</li>`
                }
            }
            explain()
        })
    }
    else {
        Swal.fire(
            'INPUT',
            'You Enter INPUT in order to find FIZZBUZZ?',
            'question'
        )
    }
}
