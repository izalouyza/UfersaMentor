# Backlog do Sistema

# UfersaMentor

Este documento apresenta o **backlog do UfersaMentor**, reunindo as histórias de usuário e funcionalidades planejadas para o sistema. Os requisitos estão organizados por prioridade e status de implementação, servindo como base para o gerenciamento ágil do projeto e para o planejamento das próximas releases.

---

## Legenda de Status

| Status                           | Descrição                                                                        |
| -------------------------------- | -------------------------------------------------------------------------------- |
| 🟢 **Implementado**              | Funcionalidade concluída e integrada ao MVP.                                     |
| 🟡 **Parcialmente Implementado** | Estrutura principal concluída, restando integrações ou refinamentos.             |
| 🔴 **Não Implementado**          | Funcionalidade prevista para futuras versões do sistema (Release 2 e Release 3). |

---

## Tabela de Casos de Uso

| ID        | História de Usuário / Funcionalidade                                                                    | Prioridade | Status |
| --------- | ------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| **UC-01** | O usuário deve realizar autenticação por meio do login institucional (SIGAA/Supabase Auth).             | Crítica    | 🟡     |
| **UC-02** | O administrador deve definir o monitor para determinada monitoria           | Alta       | 🟢     |
| **UC-03** | O usuário deve pesquisar monitorias por disciplina, monitor ou horário disponível.                      | Alta       | 🟢     |
| **UC-04** | O aluno deve agendar uma sessão de monitoria em um horário disponível, respeitando o controle de vagas. | Crítica    | 🟢     |
| **UC-05** | O aluno deve cancelar um agendamento dentro do prazo permitido, liberando automaticamente a vaga.       | Alta       | 🟢     |
| **UC-06** | O monitor deve cadastrar, editar e gerenciar seus plantões de monitoria.                                | Alta       | 🟢     |
| **UC-07** | O monitor deve registrar a presença ou ausência dos alunos após cada atendimento.                       | Crítica    | 🟢     |
| **UC-08** | O monitor deve cancelar um plantão previamente cadastrado, notificando os alunos afetados.              | Alta       | 🔴     |
| **UC-09** | O sistema deve disponibilizar um chat interno para comunicação entre alunos e monitores.                | Alta       | 🔴     |
| **UC-10** | O aluno deve acessar e realizar o download de materiais de apoio disponibilizados no sistema.           | Média      | 🟢     |
| **UC-11** | O monitor ou professor deve realizar upload de materiais e relatórios.                 | Média      | 🟢     |
| **UC-12** | O administrador deve cadastrar e gerenciar os vínculos de monitoria dos usuários.                       | Alta       | 🟢     |
| **UC-13** | Professores e administradores devem visualizar dashboards com indicadores de desempenho e assiduidade.  | Média      | 🟡     |
| **UC-14** | O sistema deve gerar automaticamente relatórios mensais e folhas de frequência em formato PDF.          | Alta       | 🔴     |

---

# Notas Estratégicas de Implementação

## UC-01 — Autenticação

A autenticação do sistema utiliza o **Supabase Auth**, proporcionando gerenciamento seguro de usuários e sessões.

A integração contempla:

* autenticação institucional;
* persistência de sessão;
* controle de acesso conforme o perfil do usuário;
* possibilidade de integração futura com provedores OAuth.

---

## UC-06, UC-07 e UC-12 — Gestão de Dados e Segurança

O armazenamento das informações é realizado pelo **PostgreSQL hospedado no Supabase**.

A estrutura do banco de dados já foi definida, enquanto a integração com o SDK encontra-se em fase de finalização.

As políticas de **Row Level Security (RLS)** serão responsáveis por garantir que cada usuário tenha acesso apenas aos dados compatíveis com seu perfil de acesso.

---

## UC-11 — Armazenamento de Materiais

Os materiais de apoio serão armazenados utilizando o **Supabase Storage**, oferecendo:

* armazenamento seguro;
* melhor desempenho no upload e download;
* organização dos arquivos;
* integração direta com a aplicação.

Essa abordagem evita o armazenamento de arquivos binários diretamente no banco de dados.

---

## UC-07 e UC-14 — Auditoria e Relatórios

Os registros de frequência e os relatórios mensais serão controlados por regras implementadas diretamente no banco de dados.

Triggers e políticas de segurança garantirão:

* integridade dos registros;
* bloqueio de alterações retroativas;
* consistência documental para prestação de contas e acompanhamento institucional.

---

## UC-13 — Dashboards Analíticos

A centralização dos dados no Supabase permitirá a construção de dashboards por meio de consultas otimizadas ao PostgreSQL.

Entre os indicadores previstos estão:

* quantidade de atendimentos realizados;
* frequência dos alunos;
* desempenho dos monitores;
* estatísticas por disciplina;
* indicadores de utilização do sistema.

---

# Planejamento das Releases

## Release 1 — MVP

* 🟢 Pesquisa de horários;
* 🟢 Agendamento de monitorias;
* 🟢 Gestão de plantões;
* 🟢 Cadastro administrativo de monitores;
* 🔴 Autenticação institucional;
* 🟢 Registro de frequência;
* 🟢 Cancelamento de agendamentos;
* 🟢 Upload de materiais.

---

## Release 2

* 🟡 Ativação de contas de monitor;
* 🟡 Cancelamento de plantões;
* 🔴 Chat interno;
* 🟢 Download de materiais.

---

## Release 3

* 🟡 Dashboards analíticos;
* 🔴 Relatórios mensais em PDF;
* 🔴 Melhorias nas políticas de segurança e auditoria;
* 🔴 Funcionalidades avançadas de gestão e acompanhamento acadêmico.

---

# Considerações Finais

O backlog do **UfersaMentor** representa o planejamento evolutivo do sistema, permitindo o desenvolvimento incremental das funcionalidades conforme as prioridades definidas para o projeto.

A adoção do **Supabase como Backend as a Service (BaaS)** fornece uma arquitetura moderna, segura e escalável, reduzindo a complexidade da infraestrutura e facilitando a evolução contínua da aplicação ao longo das próximas releases.
