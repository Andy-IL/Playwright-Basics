import { test, expect, Page } from '@playwright/test';
import * as csv from '@fast-csv/parse' ;
import path from 'path';
import { writeToPath } from 'fast-csv' ;


test ("CSV Test",async () => {
    let myObject: any = new Promise((resolve) => {
        let dataArray: JSON[] = [] ;
    
        csv.parseFile("./data/ComputerDetails.csv", {headers: true})
        .on ("data", (data) => {
            dataArray.push(data) ;
        })
        .on ("end", () => {
            resolve(dataArray) ;
        }) ;
        console.log ("JSON?:", dataArray) ;
    });
    let details = await myObject ;
    const input = JSON.stringify(details, null, 2) ;
      console.log(" got input: " + input) ;

        console.log ("Details[0] is: " + details[0]["Company"] + " " + details[0]["Computer_name"]) ;
        console.log ("And details[1] is: " + details[1]["Company"] + " " + details[1]["Computer_name"]) ;


// WRITE TO CSV 
const outputArray: any = Array.from(details) ;
await outputArray.unshift({Computer_name: "Computer_name", Company: "Company", Colour: "Colour" }) ;
await outputArray.push ({
    Computer_name: "WorkPC",
    Company: "Lenovo", 
    Colour: "Steel"
}) ;
console.log("outputArray: ", outputArray) ;

// const tempArray = [["Boo", "You"], ["And", "Me"]]
// console.log("Try this: ", tempArray )
// writeToPath ('./CompTemp.csv', outputArray)
writeToPath (path.resolve(__dirname, 'CompTemp.csv'), outputArray)
    .on('error', err => console.error(err)) 
    .on('finish', () => console.log("Done writing.")) ;

}) ;
