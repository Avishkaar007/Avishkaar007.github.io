const { MongoClient } = require('mongodb');
async function main() {

    let uri = "mongodb+srv://root:tiger@cluster0.gs4zbgn.mongodb.net/web?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
    uri = "mongodb://127.0.0.1:27017/";
    
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
            
        var cln = client.db("web").collection("Project_List");
        await cln.find().toArray().then((res,err)=>{ if (err) throw err; console.log(res)});
        
        await cln.deleteMany(obj);
        await cln.insertOne(obj);
        // console.log((await cln.deleteMany(obj)).deletedCount);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        
    }
}

main().catch(console.error);