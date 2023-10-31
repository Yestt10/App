   // Dados de exemplo com títulos, URLs de imagens e URLs de links
        const feedData = [
            {
                title: 'Título do Artigo 1',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
            {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
            // Adicione mais itens conforme necessário
        ];

        // Chama a função para renderizar o feed quando a página carrega
        window.onload = renderFeed;
