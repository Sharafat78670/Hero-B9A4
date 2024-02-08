function checkName(name) {
    if (typeof name === "number"|| typeof name !== "string") {
        return "invalid"
    }
    for (let i = name.length-1; i >=0; i--) {
        const element = name[i];    
        if (element=='A'||element=='Y'||element=='I'||element=='E'||element=='O'||element=='W'||element=='a'||element=='y'||element=='i'||element=='e'||element=='o'||element=='w') {
            return "Good Name";
        }
        else{
            return "Bad Name";
        }   
    } 
  }
    console.log(checkName('SHUVO'))