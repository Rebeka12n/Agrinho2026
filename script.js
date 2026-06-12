/*
   Campo Aberto — Agrinho 2026
   script.js — tudo que faz o site funcionar de verdade
   Rebeka Noronha Soveral

   o que ta aqui:
    1. lista de tecnologias ja cadastradas
    2. monta os cards na tela
    3. filtra por categoria quando o usuario clica
    4. busca por texto enquanto digita
    5. abre e fecha a janela de detalhes
    6. processa o formulario quando alguem envia uma tecnologia nova
    7. modo escuro com preferencia salva no navegador
    8. contador de resultados
*/

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. as tecnologias que ja vem cadastradas no site
    //    cada uma tem: codigo, categoria, titulo,
    //    resumo, descricao, como fazer, dificuldade e foto
    // =============================================
    const tecnologias = [

        // tecnologias que os indigenas ja usavam ha seculos
        {
            id: 'TEC-001',
            cat: 'solo',
            emoji: 'S',
            titulo: 'Terra Preta Indígena',
            resumo: 'Solo enriquecido com carvão e matéria orgânica — mais fértil que qualquer adubo comprado.',
            descricao: 'A terra preta indígena (ou "Terra Preta de Índio") é um dos maiores feitos da engenharia agrícola pré-colombiana. Criada pelos povos amazônicos há mais de 1.500 anos, é um solo artificialmente enriquecido com carvão vegetal em pedaços pequenos, restos de alimentos, ossos e matéria orgânica. Ao contrário do solo pobre da Amazônia, ela é extremamente fértil e se auto-regenera — pesquisadores descobriram que a terra preta continua "crescendo" em profundidade séculos após ter sido criada. Estudos mostram que ela suporta até 10 vezes mais nutrientes que o solo comum.',
            comofazer: 'Reúna carvão de madeira (de qualquer queima caseira), restos de comida, esterco de animais e cinzas. Quebre o carvão em pedaços do tamanho de uma ervilha. Misture tudo e enterre numa camada de 20 a 30 cm na área de plantio. Quanto mais você adicionar ao longo do tempo, mais o solo melhora. Não precisa de nada comprado — só do que a própria fazenda já produz.',
            dificuldade: 'facil',
            autor: 'Sabedoria Amazônica — há 1.500 anos',
            foto: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
            fotoAlt: 'Solo escuro e fértil — representação da terra preta indígena. Foto: Unsplash'
        },
        {
            id: 'TEC-002',
            cat: 'agua',
            emoji: 'A',
            titulo: 'Camalhões — Campos Elevados',
            resumo: 'Faixas de terra elevada com canais entre elas que controlam enchentes e secas ao mesmo tempo.',
            descricao: 'Os camalhões são uma das tecnologias mais sofisticadas da engenharia indígena amazônica. Civilizações como os Marajoaras (Ilha de Marajó, 400–1300 d.C.) criavam faixas elevadas de terra intercaladas com canais baixos. Na época das chuvas, a água ficava nos canais e as plantações nas faixas altas ficavam protegidas. Na seca, os canais retinham umidade e também serviam como tanques para criação de peixes. Um único sistema resolvia três problemas: enchente, seca e proteína animal.',
            comofazer: 'Com enxada, trator ou animal de tração, levante faixas de terra de 30 a 60 cm de altura e 1 a 2 metros de largura. Deixe sulcos de 40 a 60 cm entre elas. Plante nas faixas altas. Nos sulcos, a água da chuva se acumula e você pode criar peixe-pato ou simplesmente usá-la para irrigar na seca. Não precisa de nenhum material comprado — só da terra que você já tem.',
            dificuldade: 'medio',
            autor: 'Povos Marajoaras — Ilha de Marajó',
            foto: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
            fotoAlt: 'Campo agrícola com faixas elevadas — princípio dos camalhões indígenas. Foto: Unsplash'
        },
        {
            id: 'TEC-003',
            cat: 'floresta',
            emoji: 'F',
            titulo: 'Agrofloresta Indígena',
            resumo: 'A floresta cultivada — produz como uma roça mas parece mata nativa.',
            descricao: 'Em vez de desmatar para plantar, os povos amazônicos favoreciam espécies úteis dentro da floresta. Castanheiras, frutíferas, palmeiras e plantas medicinais eram "plantadas" ou preservadas estrategicamente. O resultado era uma floresta que parecia nativa mas era, na prática, um imenso pomar e farmácia natural. Pesquisadores descobriram que muitas florestas amazônicas consideradas "intocadas" são, na verdade, florestas cultivadas há séculos. Esse sistema é mais produtivo por hectare que a monocultura, usa zero insumo químico e sequestra carbono ao mesmo tempo.',
            comofazer: 'Comece plantando espécies frutíferas e nativas entre suas lavouras. Com o tempo, diversifique: plante bananeiras, mamão, abacate, ipê, cedro. A sombra das árvores protege o solo, as raízes profundas trazem nutrientes das camadas baixas, e a biodiversidade combate pragas naturalmente. Não precisa de agrotóxico. Cada ano que passa o sistema fica mais produtivo e mais resistente.',
            dificuldade: 'medio',
            autor: 'Povos Indígenas Amazônicos',
            foto: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80',
            fotoAlt: 'Floresta densa com diversidade de espécies — agrofloresta. Foto: Unsplash'
        },
        {
            id: 'TEC-004',
            cat: 'agua',
            emoji: 'A',
            titulo: 'Canais de Gravidade',
            resumo: 'Leve água até a lavoura sem bomba, motor ou eletricidade — só com a inclinação do terreno.',
            descricao: 'Os povos amazônicos construíam sistemas de canais interligados que distribuíam a água das cheias de forma controlada, levando-a às plantações na seca e desviando na cheia. O princípio é simples: a água flui sempre ladeira abaixo. Bastava seguir a inclinação natural do terreno para guiar a água até onde precisava. Comportas simples feitas de pedra ou madeira controlavam o fluxo. Sem bomba, sem motor, sem conta de energia.',
            comofazer: 'Caminhe pelo seu terreno após uma chuva e observe para onde a água vai naturalmente. Cave um canal raso (20–30 cm) seguindo essa inclinação até a área de plantio. Para controlar o fluxo, coloque pedras ou tábuas simples que você pode abrir e fechar. Uma cisterna simples no ponto mais baixo do canal acumula água para os dias sem chuva.',
            dificuldade: 'medio',
            autor: 'Povos Indígenas Amazônicos',
            foto: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80',
            fotoAlt: 'Canal de irrigação entre plantações — irrigação por gravidade. Foto: Unsplash'
        },

        // praticas da agricultura familiar que qualquer um pode fazer hoje
        {
            id: 'TEC-005',
            cat: 'agua',
            emoji: 'A',
            titulo: 'Cisterna de Calçadão',
            resumo: 'Armazena até 52 mil litros de água da chuva para sobreviver à seca sem depender de poço ou caminhão-pipa.',
            descricao: 'A cisterna de calçadão é uma das tecnologias mais transformadoras para famílias rurais em regiões com seca prolongada. Um calçadão de cimento (ou simplesmente o telhado da casa) capta a água da chuva e direciona para um reservatório subterrâneo de 52 mil litros. Com essa quantidade, uma família de 5 pessoas tem água para beber e cozinhar durante 8 meses de seca. O Programa Um Milhão de Cisternas já construiu mais de 650 mil dessas estruturas no Nordeste do Brasil.',
            comofazer: 'Construa um calçadão de cimento de 200 m² próximo à cisterna (ou use o telhado da casa). A cisterna é uma caixa de alvenaria ou concreto de 16.000 a 52.000 litros, enterrada no solo. A calha direciona a água do calçadão para a cisterna. O custo de materiais é baixo e pode ser feito em mutirão pela família. Existe um manual técnico gratuito disponível pela ASA Brasil (asabrasil.org.br).',
            dificuldade: 'medio',
            autor: 'ASA Brasil — Agricultura Familiar',
            foto: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&q=80',
            fotoAlt: 'Captação de água da chuva em área rural — cisterna. Foto: Unsplash'
        },
        {
            id: 'TEC-006',
            cat: 'solo',
            emoji: 'S',
            titulo: 'Compostagem Caseira',
            resumo: 'Transforma restos da cozinha e da roça em adubo orgânico de alta qualidade — sem custo nenhum.',
            descricao: 'A compostagem é o processo pelo qual microrganismos decompõem matéria orgânica e a transformam em húmus — um dos melhores adubos existentes. Qualquer fazenda já produz todos os materiais necessários: cascas de frutas e verduras, folhas secas, esterco de animais, bagaço de cana, palha. O composto resultante melhora a estrutura do solo, aumenta a retenção de água e fornece nutrientes de forma lenta e constante — exatamente como a natureza faz.',
            comofazer: 'Escolha um canto sombreado. Alterne camadas de material seco (folhas, palha, papelão) com material úmido (restos de comida, esterco, grama). Cubra com palha ou lona para manter umidade. Revire a pilha a cada 2 semanas com uma enxada. Em 2 a 3 meses, o material escurece, cheira a terra molhada e está pronto para usar. Uma pilha de 1 m² produz composto suficiente para fertilizar 30 m² de plantação.',
            dificuldade: 'facil',
            autor: 'Embrapa — Agricultura Orgânica',
            foto: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
            fotoAlt: 'Material orgânico em processo de compostagem. Foto: Unsplash'
        },
        {
            id: 'TEC-007',
            cat: 'agua',
            emoji: 'A',
            titulo: 'Gotejamento com Garrafa PET',
            resumo: 'Irriga uma planta a custo zero com uma garrafa pet furada — funciona por gravidade.',
            descricao: 'Uma das tecnologias mais simples e eficazes para pequenas hortas. Uma garrafa PET de 2 litros, enterrada ao lado da planta com pequenos furos no fundo, libera água lentamente durante 12 a 24 horas. A água vai direto para a raiz, sem evaporar. Usa até 70% menos água que a irrigação por mangueira. É reutilizável, gratuita e qualquer pessoa consegue montar em minutos.',
            comofazer: 'Pegue uma garrafa PET de 2 litros. Faça 3 a 5 furos pequenos (com alfinete ou agulha quente) no fundo ou nas laterais próximas ao fundo. Enterre a garrafa ao lado de cada planta, com o fundo para baixo, deixando a boca para cima. Encha de água com uma regador. A garrafa vai liberar água lentamente por horas. Quanto menores os furos, mais lenta a liberação.',
            dificuldade: 'facil',
            autor: 'Agricultura Familiar — Adaptação Popular',
            foto: 'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=600&q=80',
            fotoAlt: 'Irrigação por gotejamento em plantação. Foto: Unsplash'
        },
        {
            id: 'TEC-008',
            cat: 'solo',
            emoji: 'S',
            titulo: 'Cobertura Morta (Mulching)',
            resumo: 'Cubra o solo com palha, folhas ou gravetos — mantém a umidade e combate ervas daninhas sem veneno.',
            descricao: 'O mulching é a prática de cobrir o solo ao redor das plantas com material orgânico seco: palha, folhas, casca de árvore, bagaço ou gravetos. Essa camada de 5 a 10 cm faz várias coisas ao mesmo tempo: retém a umidade do solo (reduz rega em até 50%), impede o crescimento de ervas daninhas, mantém a temperatura do solo estável e, ao se decompor, vira adubo natural. É exatamente o que acontece no chão das florestas — nenhuma floresta precisa de capina ou rega constante.',
            comofazer: 'Recolha palha, folhas secas, casca de madeira ou qualquer material orgânico seco que você tenha. Espalhe uma camada de 5 a 10 cm ao redor das plantas, deixando um espaço de 5 cm próximo ao caule para não apodrecer. Repõe a cada 2 a 3 meses conforme o material vai se decompondo. Custo: zero. Material: o que a própria fazenda já produz.',
            dificuldade: 'facil',
            autor: 'Permacultura — Técnica Universal',
            foto: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
            fotoAlt: 'Solo coberto com palha entre plantas — cobertura morta (mulching). Foto: Unsplash'
        },
        {
            id: 'TEC-009',
            cat: 'energia',
            emoji: 'E',
            titulo: 'Biodigestor Caseiro',
            resumo: 'Transforma esterco animal em gás de cozinha e adubo líquido — dois recursos de um único resíduo.',
            descricao: 'Um biodigestor é um sistema fechado onde bactérias decompõem matéria orgânica sem oxigênio, produzindo biogás (metano, que funciona como gás de cozinha) e biofertilizante líquido (excelente para plantas). Uma família com 5 cabeças de gado produz esterco suficiente para gerar biogás para 2 a 3 horas de fogão por dia, além de litros de biofertilizante concentrado. O investimento inicial é baixo e em poucos meses se paga com a economia no gás de botijão.',
            comofazer: 'O biodigestor mais simples usa uma caixa d\'água grande de polietileno (1.000 litros) ou câmaras de pneu de caminhão. Enterre o recipiente, faça uma entrada para o esterco diluído em água (proporção 1:1) e uma saída para o biofertilizante. O gás é captado por um tubo na tampa e levado para um gasômetro simples (outra caixa d\'água ou bexiga). Existem manuais gratuitos do SENAR e da Embrapa para construção detalhada.',
            dificuldade: 'dificil',
            autor: 'Embrapa — Energia na Agricultura',
            foto: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
            fotoAlt: 'Propriedade rural com sistema de biogás. Foto: Unsplash'
        },
        {
            id: 'TEC-010',
            cat: 'floresta',
            emoji: 'F',
            titulo: 'Rotação de Culturas',
            resumo: 'Plante espécies diferentes no mesmo terreno a cada temporada — o solo se recupera sozinho.',
            descricao: 'A rotação de culturas é a prática de plantar espécies diferentes em sequência no mesmo pedaço de terra. Cada planta usa e devolve nutrientes diferentes ao solo. Leguminosas como feijão, amendoim e soja fixam nitrogênio da atmosfera — essencialmente "fertilizando" o solo de graça. Cereais como milho e sorgo são pesados em nutrientes. Ao alternar, o solo nunca é esgotado de um só nutriente. Também quebra ciclos de pragas e doenças que se especializam em uma única cultura.',
            comofazer: 'Divida sua área em parcelas. Temporada 1: plante leguminosa (feijão, soja, amendoim). Temporada 2: plante cereal (milho, sorgo). Temporada 3: plante hortaliça ou outra cultura. Temporada 4: deixe descansar com adubação verde (aveia ou mucuna). A sequência exata depende da sua região e do que você planta. O princípio: nunca o mesmo na mesma terra duas vezes seguidas.',
            dificuldade: 'facil',
            autor: 'Embrapa — Boas Práticas Agrícolas',
            foto: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
            fotoAlt: 'Campos com diferentes culturas em rotação. Foto: Unsplash'
        },
        {
            id: 'TEC-011',
            cat: 'comunidade',
            emoji: 'C',
            titulo: 'Banco de Sementes Crioulas',
            resumo: 'Guarde as sementes da colheita — variedades adaptadas à sua região que nenhum catálogo vende.',
            descricao: 'Sementes crioulas são variedades de plantas que foram selecionadas e guardadas por agricultores ao longo de gerações. Elas são adaptadas ao clima, ao solo e às pragas locais — algo que nenhuma semente comercial consegue replicar completamente. Um banco de sementes comunitário reúne as variedades de toda uma região, garante a biodiversidade agrícola e elimina a dependência de comprar sementes todo ano. No Brasil, existem centenas de bancos de sementes comunitários ativos, muitos iniciados por mulheres agricultoras.',
            comofazer: 'Selecione as plantas mais saudáveis e produtivas da sua roça. Deixe algumas delas produzir sem colher — elas formarão as sementes para o próximo plantio. Colha as sementes quando completamente maduras e secas. Guarde em potes de vidro ou garrafas PET bem fechadas, num lugar fresco e seco. Troque sementes com vizinhos — quanto mais você compartilha, mais variedades você recebe de volta.',
            dificuldade: 'facil',
            autor: 'Agricultores Familiares — Tradição Brasileira',
            foto: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80',
            fotoAlt: 'Sementes diversas armazenadas — banco de sementes crioulas. Foto: Unsplash'
        },
        {
            id: 'TEC-012',
            cat: 'comunidade',
            emoji: 'C',
            titulo: 'Mutirão e Troca de Saberes',
            resumo: 'O trabalho coletivo que tornou possível as grandes obras indígenas — e ainda funciona hoje.',
            descricao: 'Os grandes sistemas indígenas — os aterros marajoaras, os canais amazônicos, as cidades da floresta — foram construídos com trabalho coletivo organizado. O mutirão não é só uma tradição cultural: é uma tecnologia social que multiplica a capacidade de trabalho e distribui conhecimento. Uma família sozinha não constrói uma cisterna de 52.000 litros em uma semana — mas 10 famílias em mutirão constroem 10 cisternas em 10 semanas, e cada família aprende o processo. O conhecimento se propaga junto com o trabalho.',
            comofazer: 'Organize um calendário de mutirões com famílias vizinhas. Cada final de semana, o grupo inteiro trabalha na propriedade de uma família diferente — construindo cisterna, preparando terra, plantando ou colhendo. Quem recebe o trabalho oferece a refeição. Ao final de um ciclo, todas as famílias receberam o mesmo número de dias de trabalho que doaram. Custo financeiro: zero. Ganho: infraestrutura que cada família sozinha levaria anos para construir.',
            dificuldade: 'facil',
            autor: 'Tradição Indígena e Rural Brasileira',
            foto: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
            fotoAlt: 'Pessoas trabalhando juntas no campo — mutirão. Foto: Unsplash'
        },
    ];

    // aqui a gente guarda o que as pessoas enviam pelo formulario
    let tecnologiasExtras = [];
    let categoriaAtiva = 'todos';
    let textoBusca     = '';

    // =============================================
    // 2. pegando os elementos do HTML pelo id
    // =============================================
    const grid          = document.getElementById('catalogo-grid');
    const vazio         = document.getElementById('catalogo-vazio');
    const contagem      = document.getElementById('catalogo-contagem');
    const buscaHero     = document.getElementById('busca-hero');
    const btnsTags      = document.querySelectorAll('.ftag');
    const modal         = document.getElementById('modal');
    const modalFundo    = document.getElementById('modal-fundo');
    const modalFechar   = document.getElementById('modal-fechar');
    const modalConteudo = document.getElementById('modal-conteudo');
    const formTech      = document.getElementById('form-tech');
    const msgSucesso    = document.getElementById('msg-sucesso');
    const textarea      = document.getElementById('tech-desc');
    const contadorDesc  = document.getElementById('contador-desc');

    // =============================================
    // 3. funcao que monta os cards na tela
    // =============================================

    // texto que aparece em cada nivel de dificuldade
    const difLabel = {
        facil:   'Fácil — qualquer pessoa',
        medio:   'Médio — precisa de prática',
        dificil: 'Exige planejamento'
    };

    // texto que aparece em cada categoria
    const catLabel = {
        agua:       'Água',
        solo:       'Solo',
        floresta:   'Floresta',
        energia:    'Energia',
        comunidade: 'Comunidade',
        novidade:   'Compartilhada'
    };

    function renderizar() {
        const tudo = [...tecnologias, ...tecnologiasExtras];

        // aplica os dois filtros juntos (categoria + texto)
        const filtradas = tudo.filter(t => {
            const passaCat  = categoriaAtiva === 'todos' || t.cat === categoriaAtiva;
            const texto     = textoBusca.toLowerCase();
            const passaBusca = texto === '' ||
                t.titulo.toLowerCase().includes(texto) ||
                t.resumo.toLowerCase().includes(texto) ||
                t.descricao.toLowerCase().includes(texto);
            return passaCat && passaBusca;
        });

        // atualiza o numero de resultados la em cima
        contagem.textContent = `${filtradas.length} tecnologia${filtradas.length !== 1 ? 's' : ''}`;

        // apaga os cards antes de redesenhar
        grid.innerHTML = '';

        if (filtradas.length === 0) {
            vazio.classList.remove('escondido');
            return;
        }
        vazio.classList.add('escondido');

        // cria um card pra cada tecnologia que passou nos filtros
        filtradas.forEach((t, i) => {
            const card = document.createElement('article');
            card.className = 'card-tech';
            card.setAttribute('role', 'listitem');
            card.setAttribute('data-cat', t.cat);
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `Ver detalhes: ${t.titulo}`);
            card.style.animationDelay = `${i * 0.04}s`;

            card.innerHTML = `
                <div class="card-topo">
                    <span class="card-titulo">${t.titulo}</span>
                    <span class="card-codigo">${t.id}</span>
                </div>
                <p class="card-resumo">${t.resumo}</p>
                <div class="card-rodape">
                    <span class="cat-badge cat-${t.cat}">${catLabel[t.cat] || t.cat}</span>
                    <span class="dif-badge">${difLabel[t.dificuldade] || ''}</span>
                </div>
                <span class="card-ver-mais" aria-hidden="true">Ver como fazer →</span>
            `;

            // ao clicar no card abre a janela de detalhes
            card.addEventListener('click', () => abrirModal(t));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(t); }
            });

            grid.appendChild(card);
        });
    }

    // renderiza ao carregar
    renderizar();

    // =============================================
    // 4. filtros — categoria e busca por texto
    // =============================================

    // cada botao de categoria filtra a lista
    btnsTags.forEach(btn => {
        btn.addEventListener('click', () => {
            btnsTags.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            categoriaAtiva = btn.dataset.cat;
            renderizar();
        });
    });

    // filtra enquanto o usuario digita
    buscaHero.addEventListener('input', e => {
        textoBusca = e.target.value;
        renderizar();
        // rola suavemente para o grid
        if (textoBusca.length > 1) {
            document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // volta pro estado inicial, mostra tudo
    window.limparFiltros = function () {
        categoriaAtiva = 'todos';
        textoBusca = '';
        buscaHero.value = '';
        btnsTags.forEach(b => b.classList.remove('ativo'));
        btnsTags[0].classList.add('ativo');
        renderizar();
    };

    // =============================================
    // 5. janela de detalhes — abre ao clicar num card
    // =============================================
    function abrirModal(t) {
        modalConteudo.innerHTML = `
            <img
                src="${t.foto}"
                alt="${t.fotoAlt}"
                class="modal-img"
                loading="lazy"
                onerror="this.style.display='none'"
            >
            <div class="modal-cat-badge">
                <span class="cat-badge cat-${t.cat}">${catLabel[t.cat] || t.cat}</span>
            </div>
            <h2 class="modal-titulo">${t.titulo}</h2>
            <span class="modal-autor">Por: ${t.autor}</span>
            <p class="modal-desc">${t.descricao}</p>
            <span class="modal-como-titulo">◆ Como fazer na prática</span>
            <p class="modal-como">${t.comofazer}</p>
            <span class="modal-dif">${difLabel[t.dificuldade] || ''}</span>
            <p class="modal-fonte">Imagem: Unsplash (licença gratuita) · Código: ${t.id}</p>
        `;

        modal.classList.remove('escondido');
        document.body.style.overflow = 'hidden';
        modalFechar.focus();
    }

    function fecharModal() {
        modal.classList.add('escondido');
        document.body.style.overflow = '';
    }

    modalFechar.addEventListener('click', fecharModal);
    modalFundo.addEventListener('click', fecharModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.classList.contains('escondido')) fecharModal();
    });

    // =============================================
    // 6. formulario pra a comunidade enviar novas tecnologias
    // =============================================

    // conta os caracteres enquanto o usuario digita na descricao
    const LIMITE = 300;
    textarea.addEventListener('input', () => {
        const qtd = textarea.value.length;
        contadorDesc.textContent = `${qtd} / ${LIMITE}`;
        if (qtd > LIMITE) textarea.value = textarea.value.substring(0, LIMITE);
    });

    // mostra ou esconde o erro embaixo de cada campo
    function definirErro(campoId, erroId, valido) {
        const campo = document.getElementById(campoId);
        const erro  = document.getElementById(erroId);
        erro.classList.toggle('escondido', valido);
        campo.style.borderColor = valido ? '' : 'var(--terra)';
        return valido;
    }

    formTech.addEventListener('submit', e => {
        e.preventDefault();

        const nome  = document.getElementById('tech-nome').value.trim();
        const cat   = document.getElementById('tech-cat').value;
        const desc  = document.getElementById('tech-desc').value.trim();
        const como  = document.getElementById('tech-como').value.trim();
        const dif   = document.getElementById('tech-dif').value;
        const autor = document.getElementById('tech-autor').value.trim() || 'Agricultor Anônimo';

        // verifica se todos os campos estao preenchidos antes de salvar
        const ok =
            definirErro('tech-nome', 'erro-nome-tech', nome.length >= 3) &
            definirErro('tech-cat',  'erro-cat-tech',  cat !== '') &
            definirErro('tech-desc', 'erro-desc-tech', desc.length >= 20) &
            definirErro('tech-como', 'erro-como-tech', como.length >= 20);

        if (!ok) return;

        // monta o objeto da nova tecnologia com os dados do formulario
        const novaId = 'COM-' + String(tecnologiasExtras.length + 1).padStart('3', '0');
        const nova = {
            id:          novaId,
            cat:         cat,
            emoji:       catLabel[cat]?.split(' ')[0] || '⭐',
            titulo:      nome,
            resumo:      desc.substring(0, 100) + (desc.length > 100 ? '...' : ''),
            descricao:   desc,
            comofazer:   como,
            dificuldade: dif,
            autor:       autor + ' (enviado pela comunidade)',
            foto:        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80',
            fotoAlt:     'Tecnologia compartilhada pela comunidade',
        };
        // marca como novidade pra aparecer diferente no catalogo
        nova.cat = 'novidade';

        tecnologiasExtras.unshift(nova);

        // limpa o formulario depois de enviar
        formTech.reset();
        contadorDesc.textContent = '0 / 300';

        // mostra a mensagem de sucesso por 6 segundos
        msgSucesso.textContent = `"${nome}" foi publicada no catálogo com sucesso. Role para cima para ver.`;
        msgSucesso.classList.remove('escondido');
        setTimeout(() => msgSucesso.classList.add('escondido'), 6000);

        // volta pro inicio e mostra a tecnologia nova no topo
        window.limparFiltros();
        document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    });

    // =============================================
    // 7. modo escuro — salva a preferencia no navegador
    // =============================================
    const btnTema = document.getElementById('btn-tema');

    function aplicarTema(tema) {
        document.documentElement.setAttribute('data-tema', tema);
        localStorage.setItem('tema-campo-aberto', tema);
        btnTema.textContent = tema === 'escuro' ? 'Claro' : 'Escuro';
        btnTema.setAttribute('title', tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro');
        btnTema.setAttribute('aria-label', tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro');
    }

    aplicarTema(localStorage.getItem('tema-campo-aberto') || 'claro');
    btnTema.addEventListener('click', () => {
        aplicarTema(
            document.documentElement.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro'
        );
    });


    // =============================================
    // 8. botoes A- e A+ pra quem precisa de fonte maior
    // =============================================
    const btnZoomMais  = document.getElementById('btn-zoom-mais');
    const btnZoomMenos = document.getElementById('btn-zoom-menos');

    // cinco tamanhos de fonte disponiveis
    const TAMANHOS_ZOOM = [12, 14, 16, 18, 20];
    let nivelZoom = 2; // começa no 16px (nível padrão)

    function aplicarZoom() {
        document.documentElement.style.fontSize = TAMANHOS_ZOOM[nivelZoom] + 'px';
        // guarda o tamanho escolhido pra proxima visita
        localStorage.setItem('zoom-campo-aberto', nivelZoom);
        // atualiza os botoes conforme o nivel atual
        btnZoomMenos.disabled = nivelZoom === 0;
        btnZoomMais.disabled  = nivelZoom === TAMANHOS_ZOOM.length - 1;
        btnZoomMenos.setAttribute('aria-label', `Diminuir fonte (atual: ${TAMANHOS_ZOOM[nivelZoom]}px)`);
        btnZoomMais.setAttribute('aria-label',  `Aumentar fonte (atual: ${TAMANHOS_ZOOM[nivelZoom]}px)`);
    }

    // carrega o tamanho que o usuario usou da ultima vez
    const zoomSalvo = localStorage.getItem('zoom-campo-aberto');
    if (zoomSalvo !== null) nivelZoom = parseInt(zoomSalvo, 10);
    aplicarZoom();

    btnZoomMais.addEventListener('click', () => {
        if (nivelZoom < TAMANHOS_ZOOM.length - 1) { nivelZoom++; aplicarZoom(); }
    });
    btnZoomMenos.addEventListener('click', () => {
        if (nivelZoom > 0) { nivelZoom--; aplicarZoom(); }
    });


    // =============================================
    // CENA HERO INTERATIVA — paralaxe e tooltips
    // =============================================
    const heroSvg     = document.getElementById('hero-svg');
    const tooltip     = document.getElementById('svg-tooltip');
    const tooltipBg   = document.getElementById('tooltip-bg');
    const tooltipTexto= document.getElementById('tooltip-texto');

    if (heroSvg) {
        // paralaxe suave ao mover o mouse — elementos se deslocam levemente
        heroSvg.addEventListener('mousemove', (e) => {
            const rect = heroSvg.getBoundingClientRect();
            const cx   = rect.width  / 2;
            const cy   = rect.height / 2;
            const dx   = (e.clientX - rect.left - cx) / cx;  // -1 a 1
            const dy   = (e.clientY - rect.top  - cy) / cy;

            // aplica deslocamento proporcional em cada camada
            document.querySelectorAll('.folha-flutuante').forEach((el, i) => {
                const fator = (i % 2 === 0) ? 12 : 8;
                const tx = dx * fator;
                const ty = dy * fator * 0.5;
                el.style.transform = `translate(${tx}px, ${ty}px)`;
            });
        });

        heroSvg.addEventListener('mouseleave', () => {
            document.querySelectorAll('.folha-flutuante').forEach(el => {
                el.style.transform = '';
            });
            if (tooltip) tooltip.setAttribute('opacity', '0');
        });

        // tooltip ao passar o mouse nos elementos interativos
        document.querySelectorAll('.elem-interativo').forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                const dica = el.dataset.dica;
                if (!dica || !tooltip) return;

                // pega posição do elemento no SVG
                const rect    = heroSvg.getBoundingClientRect();
                const elRect  = el.getBoundingClientRect();
                const svgW    = heroSvg.viewBox.baseVal.width  || 1400;
                const svgH    = heroSvg.viewBox.baseVal.height || 520;
                const scaleX  = svgW / rect.width;
                const scaleY  = svgH / rect.height;

                const cx = (elRect.left + elRect.width / 2  - rect.left) * scaleX;
                let   cy = (elRect.top                       - rect.top)  * scaleY - 20;
                if (cy < 50) cy = (elRect.bottom - rect.top) * scaleY + 20;

                // divide texto em linhas de ~40 chars
                const palavras = dica.split(' ');
                const linhas = [];
                let linha = '';
                palavras.forEach(p => {
                    if ((linha + p).length > 42) { linhas.push(linha.trim()); linha = ''; }
                    linha += p + ' ';
                });
                if (linha.trim()) linhas.push(linha.trim());

                // limpa textos anteriores
                while (tooltipTexto.firstChild) tooltipTexto.removeChild(tooltipTexto.firstChild);

                const alturaLinha = 16;
                const largura     = Math.max(...linhas.map(l => l.length)) * 6.5 + 24;
                const altura      = linhas.length * alturaLinha + 16;

                tooltipBg.setAttribute('x',      cx - largura / 2);
                tooltipBg.setAttribute('y',      cy - altura);
                tooltipBg.setAttribute('width',  largura);
                tooltipBg.setAttribute('height', altura);

                linhas.forEach((l, i) => {
                    const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                    tspan.setAttribute('x', cx);
                    tspan.setAttribute('y', cy - altura + 14 + i * alturaLinha);
                    tspan.textContent = l;
                    tooltipTexto.appendChild(tspan);
                });

                tooltip.setAttribute('opacity', '1');
            });

            el.addEventListener('mouseleave', () => {
                if (tooltip) tooltip.setAttribute('opacity', '0');
            });
        });
    }

}); // fim
