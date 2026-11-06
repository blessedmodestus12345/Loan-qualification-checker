let minIncomeForDuplex = 100000;
let minCreditScoreForDuplex = 1000;
let minIncomeForCondo = 75000;
let minCreditScoreForCondo = 800;
let minIncomeForCar = 40000;
let minCreditScoreForCar = 600;

function getLoanMsg(annualIncome, creditScore){
 if(annualIncome >= minIncomeForDuplex && creditScore >=minCreditScoreForDuplex){
    return "You are qualified to get loan for Duplex, condo and car.";
 }else if(annualIncome >=minIncomeForCondo && creditScore >= minCreditScoreForCondo){
    return "You are qualified to get loan for condo and car.";
 }else if(annualIncome >=minIncomeForCar && creditScore >= minCreditScoreForCar){
    return "You are qualified to get loan for car only.";
 }else{
    return "You are not Eligible for any loan."
 }
}
let msgForDuplex = getLoanMsg(101000,1500);
let msgForCondo = getLoanMsg(79000,1000);
let msgForCar = getLoanMsg(55000,800);
let msgForNoLoan = getLoanMsg(25000,400);
console.log(msgForDuplex)
console.log(msgForCondo)
console.log(msgForCar)
console.log(msgForNoLoan)
