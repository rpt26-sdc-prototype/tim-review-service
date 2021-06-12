module.exports = {
  apps: [
    {
      name: "Main Server",
      script: "index.js",
      instances: "1",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
        PORT: 4000
      }
    },
  ]
}
