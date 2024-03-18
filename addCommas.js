function addCommas() {}

function addCommas(number) {
    // Convert the number to a string
    let numStr = String(number);

    // Check if the number has a decimal point
    if (numStr.includes('.')) {

        let [intPart, decPart] = numStr.split('.');
        let intPartWithCommas = Number(intPart).toLocaleString();
       
        return `${intPartWithCommas}.${decPart}`;
    } else {
   
        return Number(numStr).toLocaleString();
    }
};

module.exports = addCommas;