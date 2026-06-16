# Arquitetura do Sistema

# UfersaMentor

## 1. Visão Geral

O **UfersaMentor** é uma aplicação desenvolvida para centralizar e facilitar o gerenciamento das monitorias acadêmicas na UFERSA. O sistema permite o cadastro de monitores, acompanhamento de sessões e visualização de horários, substituindo controles manuais por uma plataforma organizada.

O projeto foi concebido como um **MVP (Minimum Viable Product)** no contexto da disciplina de Engenharia de Software.

---

## 2. Tecnologias Utilizadas

### Frontend

* **TypeScript:** utilizado como linguagem principal para garantir tipagem estática e maior segurança durante o desenvolvimento.
* **Tailwind CSS:** responsável pela estilização da interface e construção de layouts modernos e responsivos.

### Backend (BaaS)

* **Supabase:** plataforma utilizada como **Backend as a Service (BaaS)**, responsável pela autenticação, gerenciamento do banco de dados e aplicação das políticas de segurança.

### Banco de Dados

* **PostgreSQL:** sistema de gerenciamento de banco de dados relacional hospedado no Supabase.

### Ferramentas de Desenvolvimento

* **Git & GitHub:** utilizados para controle de versão e colaboração entre os integrantes da equipe.
* **Engenharia de Software:** aplicação de técnicas de levantamento de requisitos, modelagem e prototipação do sistema.

---

## 3. Estrutura do Projeto

A organização dos arquivos segue uma separação clara entre código-fonte e documentação técnica.

```text

```

---

## 4. Fluxo Básico da Aplicação

Com a utilização do Supabase como Backend as a Service, o fluxo de comunicação da aplicação ocorre da seguinte forma:

```text
Usuário (Aluno | Monitor | Professor)
              │
              ▼
Frontend (UfersaMentor - React)
              │
              ▼
Supabase Client (SDK)
              │
              ▼
Row Level Security (RLS)
              │
              ▼
PostgreSQL (Banco de Dados Supabase)
              │
              ▼
Resposta ao Frontend
              │
              ▼
Usuário
```

O usuário interage com a interface da aplicação. As operações são enviadas ao Supabase através do SDK oficial, que aplica as políticas de segurança (Row Level Security) antes de acessar o banco de dados PostgreSQL. Após o processamento, a resposta é retornada ao frontend para atualização da interface.

---

## 5. Responsabilidade dos Componentes

### Frontend

Responsável pela interface gráfica da aplicação e pela comunicação direta com o Supabase SDK, proporcionando autenticação, visualização e manipulação dos dados de forma intuitiva.

### Supabase (Backend)

Responsável pelo gerenciamento da autenticação, armazenamento dos dados, aplicação das políticas de segurança (RLS) e disponibilização das APIs utilizadas pelo sistema.

### Banco de Dados PostgreSQL

Responsável pela persistência das informações do sistema, garantindo integridade, consistência e confiabilidade dos dados armazenados.

---

## 6. Arquitetura Adotada

O projeto utiliza uma arquitetura baseada em **Backend as a Service (BaaS)**.

Diferentemente da arquitetura tradicional de três camadas, que possui um servidor de aplicação próprio, o UfersaMentor utiliza o Supabase para fornecer os serviços de backend, reduzindo a complexidade do desenvolvimento e da manutenção da infraestrutura.

### Vantagens

* Redução da complexidade da aplicação.
* Autenticação integrada.
* APIs geradas automaticamente.
* Escalabilidade simplificada.
* Menor custo de manutenção.
* Desenvolvimento mais ágil.

### Segurança

A segurança é garantida por meio de:

* Tipagem estática com TypeScript;
* Políticas de acesso implementadas através do **Row Level Security (RLS)**;
* Controle de autenticação e autorização realizado pelo Supabase.

Dessa forma, cada usuário acessa apenas as informações compatíveis com seu perfil (administrador, professor, monitor ou aluno).

---

## 7. Escalabilidade

A arquitetura foi projetada para permitir a evolução contínua do MVP.

Novas funcionalidades poderão ser incorporadas por meio da criação de novas tabelas, funções e políticas de segurança no Supabase, sem necessidade de alterações significativas na estrutura existente.

Essa abordagem favorece o desenvolvimento incremental e está alinhada às boas práticas de Engenharia de Software.

---

## 8. Considerações Finais

A arquitetura do **UfersaMentor** atende aos objetivos propostos para a disciplina de Engenharia de Software, fornecendo uma base moderna, modular e escalável para o gerenciamento das monitorias acadêmicas.

A utilização do Supabase como Backend as a Service simplifica o desenvolvimento da aplicação, mantendo elevados padrões de segurança e facilitando futuras expansões do sistema, permitindo sua evolução de um MVP para uma solução completa e robusta para a UFERSA.
