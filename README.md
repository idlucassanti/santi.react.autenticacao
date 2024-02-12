- Criar formulário de login.
- Disponibilizar autenticação em toda aplicação.
- Saber se o usuário está autenticado ou não.

- Criar cliente de requisição API: utilizar Axios
- Criar tratamento quando houver requisição para API.
- Criar objeto de retorno das chamadas para API.


- Incluir Token nas requisições para API.

- Criar tipagem do Usuário

- Criar página acessível apenas para usuários Logados.

- Redirecionar o usuário após o Login com navigate do React Router DOM.
- Exibir email do usuário quando for redirecionado para Home
- Manter informações do usuário autenticado quando dar refresh na página.


Context => Responsável por ter todas as informações do contexto de autenticação.
Provider => 
Promisse => realiza uma chamada para uma API. Tipagem de funções que realização tal ação.
Tipagem => Serve para encontrar informações dentro de um objeto pelo intellisense. Por isso tipamos.
Navegação =>
LocalStorage => Local onde armazenamos as informações do usuário. Existe um problema no Next.
SessionStorage => Durante a sessão do usuário.
Cookies => Recomendado quando projeto for Next.

Todas as telas vão precisar e quais são suas permissões para determinar se o usuário pode acessar a tela ou não, ou mostrar algum componente ou não para uma determinada permissão.

Resolva o Problema: Quando a página é recarregada, 