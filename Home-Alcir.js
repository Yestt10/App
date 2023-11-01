        // Dados de exemplo com títulos, URLs de imagens e URLs de links
        const feedData = [
            {
                title: 'Redes Sociais: Conexões Virtuais, Desafios Reais e Maléficios',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLc7VgZr2N1xjshZAE8sxxwUAmtuAMOm187R95Fe3h5R7CSo0Mjf2CgJqRRTbiqhbdQk9U7hL1prPrbjTxyMjLoQUHGSurQvUTxyIpUD9NiKomIUrfnih6ulkEBEqWeGojO4V1FGTOXfmEO26XJ12g7AniBkekQzpVSERtc4QTZ_rDxBVR1A4FlSnlA8N2/w554-h311-c-rw/uma-pessoa-triste-no-computador.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/redes-sociais-conexoes-virtuais.html'
            },
            {
                title: 'Título do Artigo 2',
                imageUrl: 'https://via.placeholder.com/100',
                linkUrl: 'https://www.google.com'
            },
            // Adicione mais itens conforme necessário
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
