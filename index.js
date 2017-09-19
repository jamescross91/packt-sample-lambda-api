const aws = require('aws-sdk');
const s3 = new aws.S3();

const getParams = {
    Bucket: 'packt-james-test-bucket', // your bucket name,
    Key: 'packt-test-file.txt' // path to the object you're looking for
}

exports.handler = (event, context, callback) => {
  s3.getObject(getParams, function(err, data) {
    // Handle any error and exit
    if (err)
        return err;

    return data.Body.toString('utf-8'); 
    });
}


