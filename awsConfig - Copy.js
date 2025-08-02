// src/awsConfig.js
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: //Enter your access keyid,
  secretAccessKey: //Enter your access key
  region://enter your region
});

export default AWS;
