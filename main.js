document.addEventListener('DOMContentLoaded', function() {
    // Lista de IDs das seções
    const sections = ['introducao', 'mobs', 'itens', 'estruturas', 'gameplay', 'changelogs', 'colaboradores'];

    // Função para popular uma seção com dados do objeto 'data'
    function populateSection(sectionId, keyPrefix) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const contentDiv = section.querySelector('.section-content');
        if (!contentDiv) {
            console.warn(`Seção ${sectionId} não tem .section-content!`);
            return;
        }

        // Limpa o conteúdo existente
        contentDiv.innerHTML = '';

        // Itera sobre as chaves que começam com o prefixo
        Object.keys(data).forEach(key => {
            if (key.startsWith(keyPrefix)) {
                const item = data[key];
                const card = document.createElement('div');
                card.className = 'item-card';
                const imageHtml = item.image ? `<img src="${item.image}" alt="${item.title}" class="card-image">` : '';
                card.innerHTML = `
                    ${imageHtml}
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-content">${item.content}</div>
                `;
                contentDiv.appendChild(card);
            }
        });
    }

    // Função para mostrar/esconder seções
    window.showSection = function(sectionId) {
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                section.classList.toggle('active', id === sectionId);
            }
        });
        // Rola para a seção selecionada, se existir
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Popula apenas as seções com dados dinâmicos
    populateSection('mobs', 'mob');
    populateSection('itens', 'item');
    populateSection('estruturas', 'estrutura');
    populateSection('gameplay', 'gameplay');

    // Mostra a seção Introdução por padrão
    showSection('introducao');

    console.log('Conteúdo populado dinamicamente do const_data.js!');
});
