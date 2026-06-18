# Site da SAdEM

Base estática do site da Secretaria Acadêmica da Engenharia Mecatrônica.

## Como abrir

Extraia o arquivo ZIP e abra `index.html` no navegador.

## Estrutura

- `index.html`: página inicial.
- `usp.html`: guia da USP São Carlos, EESC, curso, mapas, grade e extracurriculares.
- `nucleos.html`: página com núcleos e eventos da SAdEM.
- `alumni.html`: página da Rede Alumni.
- `iniciacoes-cientificas.html`: página de orientações sobre iniciação científica.
- `contato.html`: página com e-mail, Instagram e links institucionais.
- `css/estilo.css`: aparência do site.
- `js/script.js`: menu responsivo, subabas de núcleos, cartões de núcleos e formulário visual.
- `img/`: logotipo e imagens dos núcleos.
- `arquivos/`: pasta reservada para PDFs, editais, formulários e materiais.

## Dados configurados

- Instagram: @patosadem
- E-mail: sadem@eesc.usp.br
- Link institucional: https://eesc.usp.br/

## Observações

O site não usa banco de dados nem backend. O formulário de contato é apenas visual. Para receber mensagens reais, é necessário conectar a página a Google Forms, Formspree, Netlify Forms ou backend próprio.

A aba `USP` contém mapas incorporados do Google Maps para Campus 1 e Campus 2, além de informações sobre a USP São Carlos, a EESC, Engenharia Mecatrônica, grade curricular e extracurriculares compatíveis com o curso.

As imagens das extracurriculares da aba USP foram substituídas por arquivos locais dentro de `img/extracurriculares/`, com apresentação padronizada para deixar os cartões mais consistentes visualmente.

Gestores dos núcleos atualizados na página `nucleos.html`: Quack, Educk, MKultural, Eventos, Social, Esportes, MKting e MKado.

Atualização: a seção de conteúdo sugerido da página `alumni.html` foi removida e o favicon foi adicionado usando o logotipo da SAdEM.
