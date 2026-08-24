# Perguntas de Reflexão


1. **Qual foi a principal vantagem de utilizar branches?**
Permitiu que cada integrante trabalhasse na sua parte do código (HTML, CSS, JS e Documentação) em paralelo, sem correr o risco de alterar ou sobrescrever diretamente a branch principal (`main`).


2. **Por que os Pull Requests são importantes em projetos colaborativos?**
Ajuda na revisão do código por outro membro da equipe antes de integrar as mudanças na branch principal, reduzindo falhas e mantendo o padrão do projeto.


3. **Como acontece um conflito de merge?**
Esse caso acontece quando dois integrantes modificam exatamente a mesma linha do mesmo arquivo em branches diferentes. Quando chega a hora de integrar a segunda branch depois que a primeira já foi mesclada, o Git não consegue decidir sozinho qual versão deve ser mantida.


4. **Como a equipe resolveu o conflito encontrado?**
O integrante responsável puxou as atualizações da `main` para a branch local, abriu o arquivo `README.md` no editor de código, definiu a versão final do texto junto com a equipe, removeu os marcadores do Git e enviou um novo commit.


5. **Qual prática de GitHub a equipe considera mais importante em projetos maiores?**
A utilização de Pull Requests com revisão obrigatória de código e o uso de mensagens de commit claras e de fácil compreensão.