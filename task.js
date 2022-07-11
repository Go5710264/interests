const interest = document.querySelectorAll('.interest'); // доступ к каждому элементу всех списков

interest.forEach((int) => {
    let chld = [...int.children];
    chld.forEach((chil, indx) => {
        let ch = [...chil.children];
        ch.forEach((c, i) => {
            c.addEventListener('click', (element) => {
                if (!element.parentElement) {
                    indx++;
                }
            })
        })
    })
})
// interest.addEventListener('change', () => {
//     if ()
// })
// console.log(interest);