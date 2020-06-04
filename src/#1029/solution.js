var twoCitySchedCost = function(costs) {
    let total=0
    let dArr=[]

    costs.forEach(c => {
        total+=c[0]
        dArr.push(c[1]-c[0])
    });
    
    dArr.sort((a,b)=>a-b)
    for(let i=0;i<dArr.length/2;i++){
        total+=dArr
    }
    return total
};