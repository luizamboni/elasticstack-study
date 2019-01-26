const fs = require("fs")

const logger = fs.createWriteStream(
  '/logs/application.log', { flags: 'a' }
)

// redirect stdout/stderr
process.stdout.pipe(logger)


setInterval(() => {
  const val = Math.random().toString(36).substring(10)
  console.log(`value is: ${val}`)
  logger.write(`value is: ${val}\n`)
}, 200)