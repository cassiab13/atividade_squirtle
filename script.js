const header = document.querySelector('header');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

document.addEventListener("DOMContentLoaded", () => {
    createHeader();
    createNav();
    createSectionInfoSquirtle();
    createSectionCaracteristicas();
    createSectionCuriosidades();
    createArticleArtigoSquirtle();
    createSectionRecursos();
    createSectionEvolucao();
    createFooter()
});

function createElements() {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const article = document.createElement('article');
    return { section, h1, h2, div, img1, img2, p, ul, li, a, article};
}

function createHeader() {
    const { a, h1 } = createElements();
    header.append(a);
    a.href = './index.html';
    a.appendChild(h1);
    h1.textContent = 'Squirtle';
    h1.style.color = "#FFFFFF";
}

function createNav() {
    const { ul } = createElements();
    
    const links = [
        { text: 'Informações sobre Squirtle', href: '#info-squirtle' },
        { text: 'Características', href: '#caracteristicas' },
        { text: 'Curiosidades', href: '#curiosidades' },
        { text: 'Artigo sobre Squirtle', href: '#artigo-squirtle' },
        { text: 'Recursos adicionais', href: '#recursos' },
        { text: 'Evolução', href: '#evolucao' },
    ]
    nav.append(ul);

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = link.href;
        a.textContent = link.text;
    })
}

function createSectionInfoSquirtle() {
    const { section, h2, div, img1, img2, p } = createElements();
 
    main.append(section);
    section.setAttribute('id', 'info-squirtle');
    section.setAttribute('aria-labelledby', 'info-squirtle-label');
    section.appendChild(h2);
    h2.setAttribute('id', 'info-squirtle-label');
    h2.textContent = 'Informações sobre Squirtle';
    section.appendChild(div);
    div.appendChild(img1);
    img1.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png');
    img1.setAttribute('alt', 'Squirtle 1');
    div.appendChild(img2);
    img2.setAttribute('src', 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png');
    img2.setAttribute('alt', 'Squirtle 2');
    section.appendChild(p);
    p.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.'
}

function createSectionCaracteristicas() {
    const { section, h2, p } = createElements();

    main.append(section);
    section.setAttribute('id', 'caracteristicas');
    section.setAttribute('aria-labelledby', 'caracteristicas-label');
    section.appendChild(h2);
    h2.setAttribute('id', 'caracteristicas-label');
    h2.textContent = 'Características';
    section.append(p);
    p.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.'
}

function createSectionCuriosidades() {
    const { section, h2, ul } = createElements();

    main.append(section);
    section.setAttribute('id', 'curiosidades');
    section.setAttribute('aria-labelledby', 'curiosidades-label');
    section.appendChild(h2);
    h2.setAttribute('id', 'curiosidades-label');
    h2.textContent = 'Curiosidades';
    section.appendChild(ul);
   
    const texts = [
        'Squirtle é um dos Pokémon mais populares e adoráveis.',
        'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
        ' Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
    ]

    texts.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    })
}

function createArticleArtigoSquirtle() {
    const { article, h2 } = createElements();
    main.append(article);
    article.setAttribute('id', 'artigo-squirtle');
    article.setAttribute('aria-labelledby', 'artigo-squirtle-label');
    article.appendChild(h2);
    h2.setAttribute('id', 'artigo-squirtle-label');
    h2.textContent = 'Squirtle: O Amigo Aquático';
    const texts = [
        'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.',
        ' Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.',
        'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.'
    ]

    texts.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        article.appendChild(p);
    })
}

function createSectionRecursos() {
    const { section, h2, ul } = createElements();
    main.append(section);
    section.setAttribute('id', 'recursos');
    section.setAttribute('aria-labelledby', 'recursos-label');
    section.appendChild(h2);
    h2.setAttribute('id', 'recursos-label');
    h2.textContent = 'Recursos adicionais';
    section.appendChild(ul);

    const links = [
        { href: 'https://www.pokemon.com/br/pokedex/squirtle', target: '_blank', text: 'Pokédex - Squirtle' },
        { href: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)', target: '_blank', text: 'Bulbapedia - Squirtle' }
    ]

    links.forEach(link => {
        const li = document.createElement('li');
        ul.appendChild(li)
        const a = document.createElement('a');
        a.href = link.href;
        a.setAttribute('target', link.target);
        a.textContent = link.text;
        li.appendChild(a);
    })
}

function createSectionEvolucao() {
    const { section, h2, ul } = createElements();
    main.append(section);
    section.setAttribute('id', 'evolucao');
    section.setAttribute('aria-labelledby', 'evolucao-label');
    section.appendChild(h2);
    h2.setAttribute('id', 'evolucao-label');
    h2.textContent = 'Evoluções';
    section.appendChild(ul);

    const links = [
        { href: './pages/pokemon/index.html?name=squirtle', src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', alt: 'Squirtle', text: '1. Squirtle' },
        { href: './pages/pokemon/index.html?name=wartortle', src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png', alt: 'Wartortle', text: '2. Wartortle' },
        {href: './pages/pokemon/index.html?name=blastoise', src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png', alt: 'Blastoise', text: '3. Blastoise' }
    ]

    links.forEach(link => {        
        const li = document.createElement('li');
        ul.appendChild(li);
        const a = document.createElement('a');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        a.href = link.href;
        li.appendChild(a);
        a.appendChild(figure);
        img.src = link.src;
        img.alt = link.alt;
        figcaption.textContent = link.text;
        figure.appendChild(img);
        figure.appendChild(figcaption);
    })
}

function createFooter() {
    const footer = document.querySelector('footer')
    const p = document.createElement('p');
    p.setAttribute('aria-label', 'Copyright');
    p.textContent = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.';
    footer.appendChild(p);

    const links = [
        { href: '#header', text: 'Voltar para o topo' },
        { href: 'mailto:contato@squirtlepage.com', text: 'Contato via e-mail' },
        { href: 'tel:+5555555555', text: 'Telefone: (55) 5555-5555' },
    ]

    links.forEach(link => {
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        p.appendChild(a);
        footer.appendChild(p);
    })
}