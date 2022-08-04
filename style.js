function generateTable(){
    let table = document.getElementById("tableValue").value; 

        for (let index = 1; index <= 5; index++) {
            document.write(
                `<h1>${table} x ${index} = ${index * table}</h1>`);
        
    
    for (let index = 1; index <= 10; index++) {
        document.write(
            `<h1>${table} x ${index} = ${index * table} </h1>`);
    }
}

}