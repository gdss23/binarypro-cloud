const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/trade', async (req, res) => {
  const { broker, credentials, trade } = req.body;
  if (broker === 'quotex' || broker === 'pocketoption') {
    // (Em breve conexão real via API não-oficial)
    res.json({ success: true, message: 'Ordem simulada (API em desenvolvimento).' });
  } else {
    res.json({ success: false, message: 'Corretora não suportada no momento.' });
  }
});

app.listen(PORT, () => console.log('BinaryPro Cloud rodando na porta ' + PORT));
