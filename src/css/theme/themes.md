# Themes

Este arquivo CSS contém importações de estilos e definições de estilos específicos para cada Help Center. Ele está estruturado em seções para facilitar a compreensão e a manutenção.

## Importações

As importações são divididas em três categorias: **Base**, **Layout**, e **Componentes**.

### Base

As regras de estilo base são importadas a partir dos arquivos CSS correspondentes:
```css
@import url("../base/_base.css");
@import url("../base/_typography.css");
```
### Layout

Os estilos de layout são importados a partir de arquivos dedicados:
```css
@import url("../layout/_banner.css");
@import url("../layout/_breadcrumbs.css");
@import url("../layout/_code.css");
@import url("../layout/_expand.css");
@import url("../layout/_header.css");
@import url("../layout/_images.css");
@import url("../layout/_lists.css");
@import url("../layout/_main-content.css");
@import url("../layout/_panels.css");
@import url("../layout/_tiles.css");
```

### Componentes

Os estilos de componentes são importados da seguinte maneira:
```css
@import url("../components/_header-bar.css");
@import url("../components/_layoutmenu.css");
```
## Variáveis CSS

As variáveis CSS são definidas no `:root`, permitindo o uso de cores consistentes em todo o estilo da aplicação:
```css
:root {
  --ndd-orbix-primary-color: #4b1159;
  --ndd-orbix-secondary-color: #9622b2;
  --ndd-orbix-third-color: #ebd4f0;
}
```
## Estilos Específicos
Aqui você poderá definir os estilos específicos para o Help Center.

## Exemplo de uso
Este exemplo mostra como customizamos os links do Help Center do NDD Orbix.

**Primeiro link**
```css
li.render-links--link:nth-child(1) {
  background-color: var(--ndd-dark-color);
}
```

**Quando o link é hovered, a cor de fundo muda:**
```css
li.render-links--link:nth-child(1):hover {
  background-color: var(--ndd-dark-hover-color);
  -webkit-transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
```