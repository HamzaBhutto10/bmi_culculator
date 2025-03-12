const form = document.querySelector("form")
form.addEventListener('submit', (e) => {
        e.preventDefault();
        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)

        const result = document.querySelector('#results')

        if(height === "" || height < 0 || isNaN(height)){
            result.innerHTML = `invalid height ${height}`;
        }
        else if(weight === "" || weight < 0 || isNaN(weight)){
            result.innerHTML = `invalid weight ${weight}`;
        }
        else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            result.innerHTML = `<span>your bmi ${bmi}</span>`
            let newMsg = document.createElement('p')
            result.appendChild(newMsg);
            newMsg.style.color = 'white'
            newMsg.id = 'newSpan'
            if(bmi < 18.6){
            newMsg.innerHTML = 'you are under weight'
            }
            else if(bmi > 18.6 && bmi < 26){
                newMsg.innerHTML = 'your are Normal'
            }
            else if(bmi > 26){
                newMsg.innerHTML = 'you are overweight'
            }
            else{
                newMsg.innerHTML = '';
            }
        }


})
