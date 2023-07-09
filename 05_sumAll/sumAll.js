const sumAll = function(firstInteger, secondInteger) {
    let sum=0;
    if ( firstInteger >= 0 && secondInteger >= 0 && Number.isInteger(firstInteger) && Number.isInteger(secondInteger) ) {
        if (firstInteger===secondInteger) {
            sum=firstInteger;
            return sum;
        }
        else if (firstInteger<secondInteger) {
            for (let i=firstInteger; i<=secondInteger; i++){
                sum=sum + i;
            }
            return sum;
        }
        else {
            for (let i=secondInteger; i<=firstInteger; i++)
            sum=sum+i;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
    

};

// Do not edit below this line
module.exports = sumAll;
