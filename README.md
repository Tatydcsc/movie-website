# Movie Website

Este é um projeto completo de um site de listagem de filmes, com funcionalidades de cadastro e login de usuários. O frontend foi desenvolvido em **React**, e o backend com **Node.js**, **Express** e **MySQL**.

---

##  Funcionalidades

- Cadastro de usuários
- Login com validação de senha (criptografada com bcrypt)
- Listagem de filmes com imagem, título, descrição e nota
- Componentes reutilizáveis como **Navbar**, **MovieCard**, **StarRating**
- Integração com a API TMDb para buscar filmes 

---

##  Tecnologias Utilizadas

### Frontend:
- React
- React Router DOM
- Redux
- SCSS

### Backend:
- Node.js
- Express
- MySQL
- Bcrypt
- CORS

---

## Estrutura do Projeto

```
movie-website/
├── client/                # Frontend React
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── CardMovie/
│       │   ├── ListMovie/
│       │   ├── Navbar/
│       │   └── StarRating/
│       ├── features/auth/
│       ├── redux/
│       ├── App.js
│       └── index.js
├── server/                # Backend Node + Express
│   └── index.js
```


