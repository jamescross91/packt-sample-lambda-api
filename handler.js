'use strict';
const aws = require('aws-sdk');
const s3 = new aws.S3();

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello' + event.pathParameters.name + 'youve setup a serverless API',
    }),
  };
  callback(null, response);
};

module.exports.reads3 = (event, context, callback) => {
  const getParams = {
      Bucket: 'packt-james-test-bucket', // your bucket name,
      Key: 'packt-test-file.txt' // path to the object you're looking for
  }

  s3.getObject(getParams, function(err, data) {

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        s3data: data.Body.toString('utf-8'),
      }),
    };

    callback(null, response)
  });
};
