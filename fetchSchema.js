require("dotenv").config();
const axios = require("axios")
const {
    buildClientSchema,
    getIntrospectionQuery,
    printSchema,
} = require("graphql")
const path = require("path");
const fs = require("fs")
async function main() {
    console.log(`Fetching Schema...`);


    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + "/graphql/v1"
    const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    console.log(`Fetching Schema from ${url}`);

    const response = await axios.post(url, {
        query: getIntrospectionQuery()
    }, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            apiKey
        }
    })

    const data = response.data?.data

    const schema = printSchema(buildClientSchema(data))
    const filePath = path.join(__dirname, "/schema","schema.graphql")
    console.log(`Writing schema to ${filePath}`);

    fs.writeFileSync(filePath, schema)
    console.log("Done!");
}


main()