const interestCheck = [...document.querySelectorAll('.interest__check')]; 
console.log(interestCheck);

interestCheck.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (element.checked === true) {
            if (index === 1 || index === 2) {
                if (index === 1 && interestCheck[2].checked === false) {
                    interestCheck[0].indeterminate = true;
                } else if (index === 2 && interestCheck[1].checked === false) {
                    interestCheck[0].indeterminate = true;
                } else {
                    interestCheck[0].indeterminate = false;
                    interestCheck[0].checked = true;
                }
            } else if (index === 4 || index === 7) {
                interestCheck[3].indeterminate = true;
                if (index === 4) {
                    for (i = 5; i < interestCheck.length - 1; i++) {
                        interestCheck[i].checked = true;
                    }
                    if (interestCheck[7].checked === true) {
                        interestCheck[3].indeterminate = false;
                        interestCheck[3].checked = true;
                    }
                } else {
                    if (interestCheck[4].checked === true) {
                        interestCheck[3].indeterminate = false;
                        interestCheck[3].checked = true;
                    }
                }
            } else if (index === 0) {
                interestCheck[1].checked = true;
                interestCheck[2].checked = true;
            } else if (index === 3) {
                for (i = 4; i < interestCheck.length; i++) {
                    interestCheck[i].checked = true;
                }
            } else if (index === 5 || index === 6) { 
                if (index === 5 && interestCheck[6].checked === false) {
                    interestCheck[4].indeterminate = true;
                    interestCheck[3].indeterminate = true;
                } else if (index === 6 && interestCheck[5].checked === false) {
                    interestCheck[4].indeterminate = true;
                    interestCheck[3].indeterminate = true;
                } else {
                    interestCheck[4].indeterminate = false;
                    interestCheck[4].checked = true;
                    if (interestCheck[7].checked === true) {
                        interestCheck[3].indeterminate = false;  
                        interestCheck[3].checked = true;
                    }
                }
            }
        } else {
            if (index === 1 || index === 2) {
                if (index === 1 && interestCheck[2].checked === false) {
                    interestCheck[0].indeterminate = false;
                } else if (index === 2 && interestCheck[1].checked === false) {
                    interestCheck[0].indeterminate = false;
                } else if (index === 1 && interestCheck[2].checked === true) {
                    interestCheck[0].checked = false;
                    interestCheck[0].indeterminate = true;
                } else if (index === 2 && interestCheck[1].checked === true) {
                    interestCheck[0].checked = false;
                    interestCheck[0].indeterminate = true;
                } else {
                    interestCheck[0].indeterminate = false;
                    interestCheck[0].checked = false;
                }
            } else if (index === 4 || index === 7) {
                if (index === 4 && interestCheck[7].checked === true) {
                    interestCheck[3].checked = false;
                    interestCheck[3].indeterminate = true;
                    for (i = 5; i < interestCheck.length - 1; i++) {
                        interestCheck[i].checked = false;
                    }
                } else if (index === 4 && interestCheck[7].checked === false) {
                    interestCheck[3].indeterminate = false;
                    for (i = 5; i < interestCheck.length - 1; i++) {
                        interestCheck[i].checked = false;
                    }
                } else if (index === 7 && interestCheck[4].checked === false) {
                    interestCheck[3].indeterminate = false;
                } else {
                    interestCheck[3].checked = false;
                    interestCheck[3].indeterminate = true;
                }
            } else if (index === 5 || index === 6) { 
                if (index === 5 && interestCheck[6].checked === true) {
                    interestCheck[4].checked = false;
                    interestCheck[4].indeterminate = true;
                    interestCheck[3].checked = false;
                    interestCheck[3].indeterminate = true;
                } else if (index === 6 && interestCheck[5].checked === true) {
                    interestCheck[4].checked = false;
                    interestCheck[4].indeterminate = true;
                    interestCheck[3].checked = false;
                    interestCheck[3].indeterminate = true;
                } else {
                    interestCheck[4].checked = false;
                    interestCheck[4].indeterminate = false;
                    if (interestCheck[7].checked === false) {
                        interestCheck[3].checked = false;
                        interestCheck[3].indeterminate = false;  
                    }
                }
            } else if (index === 0) {
                interestCheck[1].checked = false;
                interestCheck[2].checked = false;
            } else if (index === 3) {
                for (i = 4; i < interestCheck.length; i++) {
                    interestCheck[i].checked = false;
                }
            }
        }
    }) 
})
