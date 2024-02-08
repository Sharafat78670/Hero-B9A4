function password(obj) {
    const { name, birthYear, siteName } = obj;
    if (!name || !birthYear || !siteName || String(birthYear).length < 4||String(birthYear).length > 4) {
        return "invalid";
    }
    let password=obj.siteName[0].toUpperCase() + obj.siteName.slice(1)+'#'+obj.name+'@'+obj.birthYear;
    return password;
    }
    console.log(password({name:'Sharafat', birthYear: 99999, siteName: 'facebook' }))