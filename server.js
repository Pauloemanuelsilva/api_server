import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// Criar dados / usuários / Fazer Requisições zxs
app.post('/users', async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name, // Corrigido de 'nome' para 'name'
      email: req.body.email,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

// Mostrar dados cadastrados / Fazer requisição GET
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users); // Corrigido 'jason' para 'json'
});

// Atualizar dados / usuários / Fazer Requisições PUT
app.put('/users/:id', async (req, res) => { // Corrigido para usar ':id' na URL
  await prisma.user.update({
    where: {
      id: req.params.id, // Corrigido para pegar o ID da URL
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });
  res.status(200).json(req.body); // Corrigido para usar 200 para PUT
});

// Deletar dados / usuários / Fazer Requisições DELETE
app.delete('/users/:id', async (req, res) => { // Corrigido para usar ':id' na URL
  await prisma.user.delete({ // Corrigido de 'update' para 'delete'
    where: {
      id: req.params.id, // Corrigido para pegar o ID da URL
    },
  });
  res.status(200).json({ message: 'Usuário Deletado com sucesso!' }); // Corrigido status code para 200
});

// Iniciar o servidor
app.listen(8080);
