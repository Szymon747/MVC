const data = require("./model.js")
let zadankaArray = data.zadankaArray


console.log(data)
module.exports = {
    add: (gotdata) => {
        console.log("---", JSON.parse(gotdata))
        // let gotdata = await getRequestData(request);
        // // const nowy = new data.Zadanko(5, "string1", "string2", false);
        // const nowy = new data.Zadanko(gotdata);
        console.log(zadankaArray)
        zadankaArray.push(JSON.parse(gotdata))
    },
    delete: (id) => {
        // usuwanie po id z animalsArray
    },
    update: (id) => {
        // update po id elementu animalsArray
    },
    getall: () => {
        // console.log(zadankaArray)
        return zadankaArray
    }

}