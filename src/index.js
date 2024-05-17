const express = require('express')
const app = express()
const port = 3092

app.get('/', (req, res) => {
  res.send(`
		<div>
            <meta http-equiv="Refresh" content="0; url='https://linktr.ee/yoshioutwear'" />
        </div>
	`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})