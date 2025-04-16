<h1>Can I HelpU desenvolvido com Nuxt + NestJs</h1>
<h4>🚀 Projeto Can I HelpU desenvolvido com Nuxt + NestJs</h4>

<h2>🚧 Status do projeto</h2>
<p>Em progresso</p>

<h2>🖥️ Pré-requisitos e como rodar a aplicação</h2>
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) </p>

<h3>Configurações Necessarias </h3>
<li>Instale as dependências na raiz da aplicação (pnpm install)(caso não tenha o pnpm , rodar npm install -g pnpm)</li>

<h3>Rodando Frontend</h3>
<ul>
	<li>Execute a aplicação em modo de desenvolvimento apps/frontend(pnpm run dev)</li>
 	<li>Acesse http://localhost:3000 (Caso a porta esteja disponível) </li>
</ul>

<h3>Rodando Backend</h3>
<ul>
  <li>
    Copie o arquivo <code>.env.example</code> para <code>.env</code> na pasta <code>apps/backend</code> e configure as variáveis de ambiente do JWT.  
    As chaves <strong>privada</strong> e <strong>pública</strong> devem usar criptografia <code>RS256</code> e estar codificadas em <strong>Base64</strong>.
  </li>
  <br/>
  <li>
    Comando para gerar a chave <strong>privada</strong>:
    <pre><code>openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048</code></pre>
  </li>

  <li>
    Comando para gerar a chave <strong>pública</strong>:
    <pre><code>openssl rsa -pubout -in private.pem -out public.pem</code></pre>
  </li>

  <li>
    Comando para converter as chaves em <strong>Base64</strong> (Linux/macOS):
    <pre><code>
#Chave privada
base64 private.pem > private_base64.txt

#Chave pública
base64 public.pem > public_base64.txt
    </code></pre>
  </li>
  <li>
    Comando para converter as chaves em <strong>Base64</strong> no <strong>Windows (PowerShell)</strong>:
    <pre><code>
[Convert]::ToBase64String([IO.File]::ReadAllBytes("private.pem")) > private_base64.txt
[Convert]::ToBase64String([IO.File]::ReadAllBytes("public.pem")) > public_base64.txt
    </code></pre>
  </li>
  <li>
    Rode o banco de dados da aplicação com Docker:
    <pre><code>cd apps/backend && docker compose up --build</code></pre>
  </li>

  <li>
    Execute a aplicação em modo de desenvolvimento:
    <pre><code>cd apps/backend && pnpm run dev</code></pre>
  </li>

  <li>
    Acesse: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> (caso a porta esteja disponível).
  </li>

   <li>
    Acesse: <a href="http://localhost:3000/api" target="_blank">http://localhost:3000/api</a> (para ter acesso ao swagger).
  </li>
</ul>


<h2>🤖 Tecnologias Utilizadas</h2>
<div style="display: inline_block">
 
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"/>

   <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"/>

<img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"/>

<img src="https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF"/>

</div>

<h2>🖼️ Demonstração da aplicação</h2>
<img margin-bottom="20px" src="/apps/frontend/src/assets/readme/1.png">
<hr/>
<img margin-bottom="20px" src="/apps/frontend/src/assets/readme/2.png">
<hr/>
<img margin-bottom="20px" src="/apps/frontend/src/assets/readme/3.png">
<hr/>
<img margin-bottom="20px" src="/apps/frontend/src/assets/readme/4.png">

<h4  style="display: inline_block">Visualização do site :</h4><a style="display: inline_block" target="blank" href="https://resilient-sherbet-ce099f.netlify.app/auth/login/">Preview na Vercel</a>

<h2>🧑🏻‍ Autor</h2>
<p>Feito por João paulo</p>
<a href="mailto:joaopauloneto3687@gmail.com">
	<img src="https://img.shields.io/badge/-joaopauloneto3687@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:joaopauloneto3687@gmail.com">
</a>
