const express = require('express')

const app = express()
const PORT = 3001

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Servidor do Cryrem funcionando!'
  })
})

app.post('/api/chat', (req, res) => {
  const message = req.body?.message?.trim()

  if (!message) {
    return res.status(400).json({
      error: 'Mensagem vazia.'
    })
  }

  res.json({
    reply: `Recebi sua mensagem: "${message}"`
  })
})

app.listen(PORT, () => {
  console.log(`Servidor do Cryrem rodando na porta ${PORT}`)
})
