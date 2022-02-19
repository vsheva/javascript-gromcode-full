
const superRound = (num, prec) => {
   return [
        Math.floor(num * 10**prec) / 10**prec,
        Math.trunc(num * 10**prec) / 10**prec,
        Math.ceil(num * 10**prec) / 10**prec,
        Math.round(num * 10**prec) / 10**prec,
        +num.toFixed(2),
    ];

};



