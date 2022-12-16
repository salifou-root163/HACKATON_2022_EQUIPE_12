 function safeRecharge(today){     
       
    //const today = new Date()
    const [month, day, year] = [
        today.getMonth(),
        today.getDate(),
        today.getFullYear(),
      ];
      const hour = today.getHours();   
      return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://opendata-corse.edf.fr/api/records/1.0/search/?dataset=signal-reseau-corse-recharge-vehicule-electrique&q=&rows=144&sort=-date&facet=date&refine.date=${year}%2F${month+1}%2F${day}`);
    request.send();
    request.onload = () => {
    if(request.status === 200){
        const data = JSON.parse(request.response);
        records = data.records
        for(let i=0; i<records.length; i++){
            const date = new Date(records[i].fields.date)
            if(hour === date.getHours()-1){
                let signal = records[i].fields.signal
                resolve(signal);
                
                
            }
        }
    }
    else{
        reject(`error ${request.status} ${request.statusText}`)
    }
    
      
}


})
 }
