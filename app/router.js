const { Console } = require("console");
const controller = require("./controller.js")
const utils = require("./utils.js")
const data = require("./../arrayData.js")
const logger = require('tracer').colorConsole();




const router = async (request, response) => {



    // req.url == "/api/tasks" && req.method == "GET"
    // let urlek = request.url.split("/api/tasks")[1]
    // console.log(urlek, "----------------------------",)
    // console.log(data)
    // if (urlek == "") {
    //     console.log("pobieram wszytskie zadania")
    //     if (req.method == "GET") {

    //     }
    // }
    let gotdata = await getRequestData(request);
    if (request.url == "/api/tasks" && request.method == "GET") {
        
        response.end(controller.getall)

    }
    if (request.url.match(/\/api\/tasks\/([0-9]+)/) && request.method == "GET") {

    }
    if (request.url == "/api/tasks" && request.method == "POST") {

    }
    if (request.url.match(/\/api\/tasks\/([0-9]+)/) && request.method == "DELETE") {

    }
    if (request.url == "/api/tasks" && request.method == "PATCH") {
        //musze dodac gotdata do data
        controller.add(gotdata)
    }

}
module.exports = router
