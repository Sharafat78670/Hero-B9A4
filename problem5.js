function monthlySavings(arr , livingCost) {
    if (!Array.isArray(arr)||typeof livingCost !== 'number') {
        return "invalid input"
    }
    let sum=0;
    let returnTex=0;
    for (let i = 0; i <arr.length; i++) {
        const element = arr[i];
        sum+=element;
        if (element>=3000) {
           tex = element*20/100;
           returnTex+=tex;
        }   
    }
    const totalSaving=sum - tex - livingCost;
    if (totalSaving<0) {
        return "earn more"
    }
    return totalSaving;
    }
    console.log(monthlySavings([1200,3000,1500] , 5000))