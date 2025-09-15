const data = {
    // Mobs (da lista do seu documento)
    mob1: {
        title: "Olhos da Noite",
        image: "", // Adicione URL de imagem aqui se quiser
        content: `<p>Descrição: Olhos famintos que espreitam na escuridão.</p>`
    },
    mob2: {
        title: "Sereia",
        image: "",
        content: `<p>Descrição: Entidade misteriosa dos oceanos que canta para atrair vítimas.</p>`
    },
    mob3: {
        title: "Dragão de Sangue",
        image: "",
        content: `<p>Descrição: Dragão mitológico que nasce nas luas de sangue e atira bolas de fogo.</p>`
    },
    mob4: {
        title: "Dragão de Gelo",
        image: "",
        content: `<p>Descrição: Ser antigo que sobrevoa montanhas geladas e cospe bolas de gelo.</p>`
    },
    mob5: {
        title: "Dragão Venenoso",
        image: "",
        content: `<p>Descrição: Monstro voador veloz que cospe veneno em savanas.</p>`
    },
    mob6: {
        title: "Baú Monstro",
        image: "",
        content: `<p>Descrição: Baús infectados que se transformam em monstros.</p>`
    },
    mob7: {
        title: "Dragão das Almas",
        image: "",
        content: `<p>Descrição: Dragão que manipula almas em dimensões escuras.</p>`
    },
    mob8: {
        title: "Fantasma do Labirinto",
        image: "",
        content: `<p>Descrição: Espírito que guarda labirintos com puzzles.</p>`
    },
    mob9: {
        title: "Fantasma do Fim",
        image: "",
        content: `<p>Descrição: Fantasma do End que aparece em dimensões finais.</p>`
    },
    mob10: {
        title: "Fada",
        image: "",
        content: `<p>Descrição: Aliada mágica que concede efeitos especiais.</p>`
    },
    mob11: {
        title: "Vagalumes",
        image: "",
        content: `<p>Descrição: Insetos luminosos que iluminam áreas escuras.</p>`
    },
    mob12: {
        title: "Golems de Pedra",
        image: "",
        content: `<p>Descrição: Guardiões de pedra que protegem estruturas.</p>`
    },
    mob13: {
        title: "Mercenário",
        image: "",
        content: `<p>Descrição: Aliado que ajuda em batalhas e missões.</p>`
    },
    mob14: {
        title: "Baleia Vagante do Fim",
        image: "",
        content: `<p>Descrição: Criatura gigante do End que vaga pelo vazio.</p>`
    },
    mob15: {
        title: "Goblins",
        image: "",
        content: `<p>Descrição: Mobs hostis em acampamentos, com armadilhas.</p>`
    },
    mob16: {
        title: "Zumbi Necromante",
        image: "",
        content: `<p>Descrição: Boss que invoca zumbis no pântano.</p>`
    },
    mob17: {
        title: "Esqueleto Errante",
        image: "",
        content: `<p>Descrição: Esqueleto errante que ataca à distância.</p>`
    },

    // Itens (da lista do seu documento)
    item1: {
        title: "Sopa Apimentada",
        image: "",
        content: `<p>Descrição: Poção que recarrega fúria para guerreiros.</p>`
    },
    item2: {
        title: "Shuriken",
        image: "",
        content: `<p>Descrição: Arma de arremesso para classes ágeis.</p>`
    },
    item3: {
        title: "Cristal de Mana",
        image: "",
        content: `<p>Descrição: Recarrega mana para magos.</p>`
    },
    item4: {
        title: "Poção do Desvanecimento",
        image: "",
        content: `<p>Descrição: Torna o jogador invisível temporariamente.</p>`
    },
    item5: {
        title: "Fada no Frasco",
        image: "",
        content: `<p>Descrição: Frasco com fada que concede efeitos de cura.</p>`
    },
    item6: {
        title: "Bandeira Chunk",
        image: "",
        content: `<p>Descrição: Marca chunks para teleporte.</p>`
    },
    item7: {
        title: "Orbe Evolutiva",
        image: "",
        content: `<p>Descrição: Evolui habilidades de classe.</p>`
    },
    item8: {
        title: "Almas",
        image: "",
        content: `<p>Descrição: Coletadas de mobs para missões.</p>`
    },
    item9: {
        title: "Blocos Falsos",
        image: "",
        content: `<p>Descrição: Blocos que se disfarçam para armadilhas.</p>`
    },
    item10: {
        title: "Página Perdida do Bestiário",
        image: "",
        content: `<p>Descrição: Página para completar o bestiário.</p>`
    },
    item11: {
        title: "Minério de Rubi",
        image: "",
        content: `<p>Descrição: Minério raro para ferramentas e armaduras.</p>`
    },
    item12: {
        title: "Lápide",
        image: "",
        content: `<p>Descrição: Marca locais de morte para coordenadas.</p>`
    },
    item13: {
        title: "Mesa de Purificação",
        image: "",
        content: `<p>Descrição: Mesa para purificar itens corrompidos.</p>`
    },
    item14: {
        title: "Mesa de Transmutação",
        image: "",
        content: `<p>Descrição: Mesa para transmutar gemas e materiais.</p>`
    },
    item15: {
        title: "Frasco de Mana",
        image: "",
        content: `<p>Descrição: Recupera mana durante o combate.</p>`
    },
    item16: {
        title: "Planta Mística",
        image: "",
        content: `<p>Descrição: Planta que gera sementes místicas.</p>`
    },
    item17: {
        title: "Armadura Divina",
        image: "",
        content: `<p>Descrição: Armadura com proteção divina e efeitos.</p>`
    },
    item18: {
        title: "Pedra Filosofal",
        image: "",
        content: `<p>Descrição: Transmuta metais comuns em raros.</p>`
    },
    item19: {
        title: "Ossos e Pó Negro",
        image: "",
        content: `<p>Descrição: Material para crafting de itens sombrios.</p>`
    },
    item20: {
        title: "Poções de Tamanho",
        image: "",
        content: `<p>Descrição: Altera o tamanho do jogador temporariamente.</p>`
    },
    item21: {
        title: "Mochila",
        image: "",
        content: `<p>Descrição: Expande o inventário.</p>`
    },
    item22: {
        title: "Sal Marinho",
        image: "",
        content: `<p>Descrição: Usado para crafting de blocos e itens.</p>`
    },
    item23: {
        title: "Container de Coração",
        image: "",
        content: `<p>Descrição: Armazena corações extras.</p>`
    },
    item24: {
        title: "Lamparina de Vagalume",
        image: "",
        content: `<p>Descrição: Lanterna que usa vagalumes para luz.</p>`
    },
    item25: {
        title: "Baú Portátil do Fim",
        image: "",
        content: `<p>Descrição: Baú portátil com itens do End.</p>`
    },
    item26: {
        title: "Catnip",
        image: "",
        content: `<p>Descrição: Atrai pets felinos.</p>`
    },
    item27: {
        title: "Bússola das Almas",
        image: "",
        content: `<p>Descrição: Localiza almas e mobs.</p>`
    },
    item28: {
        title: "Cajado de Dragão",
        image: "",
        content: `<p>Descrição: Cajado para controlar dragões.</p>`
    },
    item29: {
        title: "Cauda de Sereia",
        image: "",
        content: `<p>Descrição: Item drop de sereias para natação.</p>`
    },
    item30: {
        title: "Armadura de Rubi",
        image: "",
        content: `<p>Descrição: Armadura resistente com efeitos de fogo.</p>`
    },
    item31: {
        title: "Discos dos Bardos",
        image: "",
        content: `<p>Descrição: Discos musicais para trilha sonora.</p>`
    },
    item32: {
        title: "Ovos de Dragões",
        image: "",
        content: `<p>Descrição: Ovos para chocar dragões.</p>`
    },
    item33: {
        title: "Frasco de Néctar",
        image: "",
        content: `<p>Descrição: Poção de cura de flores.</p>`
    },
    item34: {
        title: "Ferramentas de Prismarinho",
        image: "",
        content: `<p>Descrição: Ferramentas aquáticas de prismarinho.</p>`
    },
    item35: {
        title: "Ferramentas de Rubi",
        image: "",
        content: `<p>Descrição: Ferramentas duráveis de rubi.</p>`
    },
    item36: {
        title: "Totem do Teleporte",
        image: "",
        content: `<p>Descrição: Totem para teleporte rápido.</p>`
    },
    item37: {
        title: "Armadura de Lobo",
        image: "",
        content: `<p>Descrição: Armadura com bônus para pets lobos.</p>`
    },
    item38: {
        title: "Ectoplasma",
        image: "",
        content: `<p>Descrição: Material de fantasmas para crafting.</p>`
    },
    item39: {
        title: "Alma Renascida",
        image: "",
        content: `<p>Descrição: Alma que revive o jogador.</p>`
    },
    item40: {
        title: "Espada Goblin",
        image: "",
        content: `<p>Descrição: Espada drop de goblins.</p>`
    },
    item41: {
        title: "Espada Mística",
        image: "",
        content: `<p>Descrição: Espada com magias embutidas.</p>`
    },
    item42: {
        title: "Vagalume no Frasco",
        image: "",
        content: `<p>Descrição: Frasco com vagalume para luz portátil.</p>`
    },
    item43: {
        title: "Cristais de Sal do Nether",
        image: "",
        content: `<p>Descrição: Cristais do Nether para crafting.</p>`
    },
    item44: {
        title: "Armadura de Prismarinho",
        image: "",
        content: `<p>Descrição: Armadura aquática de prismarinho.</p>`
    },
    item45: {
        title: "Pérolas Piratas",
        image: "",
        content: `<p>Descrição: Pérolas de naufrágios para trocas.</p>`
    },
    item46: {
        title: "Essência da Bruxa",
        image: "",
        content: `<p>Descrição: Essência para poções avançadas.</p>`
    },
    item47: {
        title: "Livro do Mago",
        image: "",
        content: `<p>Descrição: Livro com feitiços para magos.</p>`
    },
    item48: {
        title: "Capacete Ancestral",
        image: "",
        content: `<p>Descrição: Capacete com visão noturna ancestral.</p>`
    },

    // Estruturas (da lista do seu documento)
    estrutura1: {
        title: "Castelo Mago das Sombras",
        image: "",
        content: `<p>Descrição: Castelo final do boss Shadow Wizard.</p>`
    },
    estrutura2: {
        title: "Cidade de Glowstone",
        image: "",
        content: `<p>Descrição: Cidade luminosa com NPCs e missões.</p>`
    },
    estrutura3: {
        title: "Cidade dos Musgos",
        image: "",
        content: `<p>Descrição: Cidade natural com estruturas de musgo.</p>`
    },
    estrutura4: {
        title: "Cidade de FarLands",
        image: "",
        content: `<p>Descrição: Cidade no Far Lands com biomas estranhos.</p>`
    },
    estrutura5: {
        title: "Cabana da Bruxa",
        image: "",
        content: `<p>Descrição: Cabana com poções e missões da bruxa.</p>`
    },
    estrutura6: {
        title: "Pilar de Gelo",
        image: "",
        content: `<p>Descrição: Pilar gelado em montanhas com puzzles.</p>`
    },
    estrutura7: {
        title: "Ilha da Sereia",
        image: "",
        content: `<p>Descrição: Ilha oceânica com sereias hostis.</p>`
    },
    estrutura8: {
        title: "Cemitério",
        image: "",
        content: `<p>Descrição: Cemitério com fantasmas e almas.</p>`
    },
    estrutura9: {
        title: "Torre de Mana",
        image: "",
        content: `<p>Descrição: Torre para recarregar mana.</p>`
    },
    estrutura10: {
        title: "Navio Fantasma",
        image: "",
        content: `<p>Descrição: Navio naufragado com tesouros.</p>`
    },
    estrutura11: {
        title: "Acampamento Goblin",
        image: "",
        content: `<p>Descrição: Acampamento hostil com goblins.</p>`
    },
    estrutura12: {
        title: "Árvore Morta",
        image: "",
        content: `<p>Descrição: Árvore seca com itens escondidos.</p>`
    },
    estrutura13: {
        title: "Acampamento Mercenário",
        image: "",
        content: `<p>Descrição: Acampamento de aliados mercenários.</p>`
    },
    estrutura14: {
        title: "Balões",
        image: "",
        content: `<p>Descrição: Balões para teleporte aéreo.</p>`
    },

    // Gameplay (da lista do seu documento)
    gameplay1: {
        title: "Sistema de Missões",
        image: "",
        content: `<p>Descrição: Sistema robusto de missões para progressão.</p>`
    },
    gameplay2: {
        title: "Colecionáveis",
        image: "",
        content: `<p>Descrição: Itens colecionáveis para bestiário e recompensas.</p>`
    },
    gameplay3: {
        title: "Progressão",
        image: "",
        content: `<p>Descrição: Ganhe XP para níveis lendários e classes.</p>`
    },
    gameplay4: {
        title: "Teleporte",
        image: "",
        content: `<p>Descrição: Teleporte entre cidades e jogadores.</p>`
    },
    gameplay5: {
        title: "Câmeras",
        image: "",
        content: `<p>Descrição: Mudança de perspectiva para RPG e cinemáticas.</p>`
    },
    gameplay6: {
        title: "Renderizar Armaduras",
        image: "",
        content: `<p>Descrição: Opção para esconder ou mostrar armadura.</p>`
    },
    gameplay7: {
        title: "Stamina",
        image: "",
        content: `<p>Descrição: Barra de stamina para combate equilibrado.</p>`
    },
    gameplay8: {
        title: "Lua de Sangue",
        image: "",
        content: `<p>Descrição: Noites especiais com mobs únicos e dificuldade aumentada.</p>`
    },
    gameplay9: {
        title: "Níveis de Monstros",
        image: "",
        content: `<p>Descrição: Mobs de níveis 1 a 10 com dificuldade crescente.</p>`
    },
    gameplay10: {
        title: "Ambientação",
        image: "",
        content: `<p>Descrição: Sons e músicas ambientais por bioma.</p>`
    },
    gameplay11: {
        title: "Pets",
        image: "",
        content: `<p>Descrição: Pets com efeitos especiais e customização.</p>`
    },
    gameplay12: {
        title: "NPCs",
        image: "",
        content: `<p>Descrição: NPCs interativos para missões e trocas.</p>`
    },
    gameplay13: {
        title: "Sistema de Classes",
        image: "",
        content: `<p>Descrição: Classes com magias, fúria e personalização.</p>`
    },
    gameplay14: {
        title: "Gênero",
        image: "",
        content: `<p>Descrição: Seleção de gênero para vozes e aparência.</p>`
    }
};
