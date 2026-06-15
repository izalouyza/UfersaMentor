const pool = require('../config/db');
const crypto = require('crypto');

exports.agendar = async (req, res) => {
    const { alunoId, horarioId, monitoriaId, data, duvida } = req.body;
    
    try {
        const id = crypto.randomUUID();
        // Insert na tabela 'agendamentos' do seu banco
        const query = `
            INSERT INTO agendamentos (id, aluno_id, horario_id, monitoria_id, data, duvida_principal, status)
            VALUES ($1, $2, $3, $4, $5, $6, 'confirmado')
        `;
        await pool.query(query, [id, alunoId, horarioId, monitoriaId, data, duvida]);
        
        res.status(201).json({ mensagem: 'Agendamento realizado com sucesso!', id });
    } catch (err) {
        console.error('Erro ao agendar:', err);
        res.status(500).json({ erro: 'Erro ao salvar agendamento no banco.' });
    }
};