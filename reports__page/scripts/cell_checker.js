const cell = document.querySelectorAll('.lesson td')

const checkCell = () => {
    console.log("hello");
    for (let i = 0; i < cell.length; i++) {

        switch (cell[i].innerHTML) {
            case "2":
                cell[i].style.color = '#e82b2b'
                break;
            case "3":
                cell[i].style.color = '#cd9d3d'
                break;
            case "4":
                cell[i].style.color = '#8e9708'
                break;
            case "5":
                cell[i].style.color = '#288b1e'
        }
    }

    // Arithmetic Mean

    let meanArray = document.querySelectorAll('.lesson.russian td');
    let res = [];

    for (let i = 0; i < meanArray.length; i++) {
        let mean = Number(meanArray[i].innerHTML.trim());

        if (!isNaN(mean) && mean !== 0) {
            res.push(mean);
        } else {
            console.log("skip");
        }
    }

    let preResult = res.reduce((acc, curr) => {
        return (acc + curr);
    })

    let arithmeticMean = preResult / res.length;

    arithmeticMean = arithmeticMean.toFixed(2)

    console.log(arithmeticMean);

    let ruCell = document.querySelector('.lesson.russian td.cell')
    let ruLCell = document.querySelector('.lesson.russian td.lastCell')

    ruCell.innerHTML = arithmeticMean
    ruLCell.innerHTML = Math.round(arithmeticMean)
}
const cellPlace = document.querySelectorAll('.lesson td')
let celler;


document.querySelectorAll('.cell__mode button').forEach((button, index) => {
    button.addEventListener('click', () => {
        celler = button.value
        button.classList.toggle('active');
    });
});

    if (cellPlace.innerHTML === undefined) {
        document.querySelectorAll('.lesson td').forEach(
            td => {
                td.addEventListener('click', (event) => {
                    td.innerHTML = celler;
                })
    }
        )}
console.log(cellPlace.innerHTML)