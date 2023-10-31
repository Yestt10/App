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
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
                       {
                title: 'Título do Artigo 2',
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

        // Função para exibir os itens do feed na página
        function renderFeed() {
            const feedContainer = document.getElementById('feed');

            feedData.forEach(item => {
                const feedItem = document.createElement('div');
                feedItem.classList.add('feed-item');

                const image = document.createElement('img');
                image.src = item.imageUrl;
                image.alt = 'Imagem do Artigo';

                const title = document.createElement('h2');
                const link = document.createElement('a');
                link.href = item.linkUrl;
                link.innerText = item.title;

                title.appendChild(link);

                feedItem.appendChild(image);
                feedItem.appendChild(title);
                feedContainer.appendChild(feedItem);
            });
        }

        // Chama a função para renderizar o feed quando a página carrega
        window.onload = renderFeed;
