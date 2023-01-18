
const { S3Client , PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const crypto = require("crypto")

const randomImageName = (bytes = 32) => {
    return crypto.randomBytes(bytes).toString("hex")
}


const bucketName = process.env.AWS_BUCKET_NAME
const bucketregion = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AwS_SECRET_KEY

const s3 = new S3Client({
    credentials : {
        accessKeyId,
        secretAccessKey
    },
    region : bucketregion
})


//get pics

async function getPicUrl(key){
    // gets object signed url

    const params = {
        Bucket : bucketName ,
        Key : key
    }


    const command = new GetObjectCommand(params)
    const timings = 24 * 60 * 60  /*seconds 86400 = 24 hours*/
    const url = await getSignedUrl( s3, command, { expiresIn: timings });

    return url
}

//uploads file to s3

async function uploadFile(file) {



    const uploadParams = {
        Bucket : bucketName,
        Body : file.buffer,
        Key : file.path ,
        ContentType : file.mimetype
    }

    const command = new PutObjectCommand(uploadParams)
    const response = await s3.send(command)

    console.log("response : " + response)

    return response
}


module.exports = {
    getPicUrl,
    uploadFile
}





//downloads file from s3