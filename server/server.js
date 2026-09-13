const express = require('express');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.'));

// Teste do servidor
app.get('/api/teste', (req, res) => {
    res.json({
        mensagem: 'Backend funcionando!'
    });
});

// Teste do banco de dados
app.get('/api/banco', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT NOW()');

        res.json({
            mensagem: 'PostgreSQL conectado!',
            horario: resultado.rows[0].now
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: 'Erro ao conectar ao PostgreSQL'
        });
    }
});

// Listar categorias
app.get('/api/categorias', async (req, res) => {
    try {
        const resultado = await pool.query(
            'SELECT * FROM categoria ORDER BY nome'
        );

        res.json(resultado.rows);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: 'Erro ao buscar categorias'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});