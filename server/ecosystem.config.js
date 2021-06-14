module.exports = {
  apps: [{
    name: 'review-server',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: [
        'ec2-18-116-228-112.us-east-2.compute.amazonaws.com',
        'ec2-3-20-97-156.us-east-2.compute.amazonaws.com',
      ],
      key: './Login_Scripts/reviews-server.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rpt26-sdc-prototype/tim-review-service.git',
      path: '/home/ubuntu/review-server',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ./server/ecosystem.config.js && pm2 save'
    }
  }
}
