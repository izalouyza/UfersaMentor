# Arquitetura do Sistema

# SGM - Sistema de Gerenciamento de Monitorias

## 1. Visão Geral

O SGM (Sistema de Gerenciamento de Monitorias) foi desenvolvido seguindo uma arquitetura em camadas, separando a interface do usuário da lógica de negócio e do armazenamento de dados.

Essa organização facilita a manutenção do código, a escalabilidade da aplicação e o desenvolvimento em equipe.

---

# 2. Tecnologias Utilizadas

## Frontend


## Backend


## Banco de Dados


## Ferramentas de Desenvolvimento

* Git
* GitHub

---

# 3. Estrutura do Projeto

```text
src/
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   ├── services/
│   ├── assets/
│   └── styles/
│
└── backend/
    ├── controllers/
    ├── services/
    ├── models/
    ├── repositories/
    ├── routes/
    ├── config/
    └── database/
```

---

# 4. Fluxo Básico da Aplicação

```text
Usuário
      │
      ▼
Frontend (Interface)
      │
      ▼
API / Backend
      │
      ▼
Camada de Serviços
      │
      ▼
Repositório
      │
      ▼
Banco de Dados
      │
      ▼
Resposta ao Backend
      │
      ▼
Frontend
      │
      ▼
Usuário
```

O usuário interage com a interface do sistema. As requisições são enviadas ao backend, que processa as regras de negócio, consulta ou altera os dados armazenados e devolve uma resposta para ser exibida na aplicação.

---

# 5. Responsabilidade dos Componentes

## Frontend

Responsável pela interface gráfica da aplicação, interação com o usuário, validação inicial dos dados e comunicação com a API.

### Components

Componentes reutilizáveis da interface.

### Pages

Representam as telas do sistema.

### Layouts

Estruturas visuais compartilhadas entre páginas.

### Routes

Gerenciam a navegação da aplicação.

### Services

Realizam as chamadas para a API do backend.

### Assets

Armazenam imagens, ícones e outros arquivos estáticos.

### Styles

Contêm os arquivos de estilização da aplicação.

---

## Backend

Responsável pelo processamento das regras de negócio e gerenciamento das informações do sistema.

### Controllers

Recebem as requisições e encaminham para os serviços apropriados.

### Services

Implementam a lógica de negócio da aplicação.

### Models

Representam as entidades do sistema.

### Repositories

Realizam o acesso ao banco de dados.

### Routes

Definem os endpoints disponíveis na API.

### Config

Armazena configurações gerais do sistema.

### Database

Gerencia a conexão e a configuração do banco de dados.

---

# 6. Arquitetura Adotada

O projeto utiliza uma arquitetura em camadas (**Frontend → Backend → Banco de Dados**), promovendo baixo acoplamento entre os componentes e facilitando a manutenção, evolução e reutilização do código.

Essa separação permite que alterações na interface não impactem diretamente a lógica de negócio, tornando o sistema mais organizado e escalável.

---

# 7. Escalabilidade

A estrutura adotada permite a inclusão de novas funcionalidades por meio da criação de novos componentes, serviços, controladores e modelos, sem comprometer a organização existente.

Essa abordagem favorece o desenvolvimento colaborativo e segue boas práticas de Engenharia de Software.

---

# 8. Considerações Finais

A arquitetura proposta atende aos requisitos do MVP do projeto e estabelece uma base sólida para futuras evoluções do sistema, garantindo organização, modularidade e facilidade de manutenção.
