import "core-js"

import { getSentry } from "./sentry_services.js"

async function loadSentry(){
    let entries = []
    let sentryJSON = await getSentry()
    sentryJSON.forEach(line => {
        entries.push({
            id: line["sentryId"],
            name: line["fullname"],
            yearRangeMin: line["year_range_min"],
            yearRangeMax: line["year_range_max"]
          })
    })
    console.log(entries)
}

// function renderEntries(entries){
//     entries.forEach(line =>{
//         const text = `${line.id} | ${line.name} | ${line.yearRangeMin} | ${yearRangeMax}`
//         console.log(text)
//     })

// }

loadSentry()