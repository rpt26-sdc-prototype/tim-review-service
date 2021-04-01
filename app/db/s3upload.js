var fs = require('fs');
var AWS = require('aws-sdk');
var awsInfo = require('../private');

//defining bucket
const s3 = new AWS.S3({
  accessKeyId: awsInfo.ID,
  secretAccessKey: awsInfo.SECRET
});

//fs read dir get array
var fileArray = fs.readdirSync(`${__dirname}/../profilePictures/`);

//loop through array
(async () => {

  for (var i = 0; i < fileArray.length; i++) {
    var fileContent = fs.readFileSync(`${__dirname}/../profilePictures/${fileArray[i]}`)

    var params = {
      Bucket: awsInfo.BUCKET_NAME,
      Key: fileArray[i],
      Body: fileContent
    };

    var URLlink = await s3.upload(params).promise()
    fs.appendFileSync(`${__dirname}/../bucketLinks/list.txt`, `${URLlink.Location}\n`)
  }
})();