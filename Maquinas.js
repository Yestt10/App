        // Dados de exemplo com títulos, URLs de imagens e URLs de links
        const feedData = [
            {
                title: 'Point Pro 2 (Mercado Pago) R$139,90',
                imageUrl: 'https://i.imgur.com/snWb4MC.jpg',
                linkUrl: 'https://mpago.li/2nrBRmk'
            },
            {
                title: 'Point Smart (Mercado Pago) R$339,90',
                imageUrl: 'https://i.imgur.com/nlV4FQX.jpg',
                linkUrl: 'https://mpago.li/1RTCLqC'
            },
            // Adicione mais itens conforme necessário
       {
                title: 'Point Mini NFC (Mercado Pago) R$11,55',
                imageUrl: 'https://i.imgur.com/yRLGwiT.jpg',
                linkUrl: 'https://mpago.li/2KbgYNf'
            },
       {
                title: 'Ton T1',
                imageUrl: 'https://i.imgur.com/q7rUsXH.jpg',
                linkUrl: 'https://www.ton.com.br/catalogo/?referrer=97B2DEDE-8D48-4FA6-848E-ADE657DEC214&utm_medium=invite_share&utm_source=revendedor'
            },
       {
                title: 'Ton T1 Chip',
                imageUrl: 'https://i.imgur.com/vMUSUGC.jpg',
                linkUrl: 'https://www.ton.com.br/catalogo/?referrer=97B2DEDE-8D48-4FA6-848E-ADE657DEC214&utm_medium=invite_share&utm_source=revendedor'
            },
       {
                title: 'Ton T2',
                imageUrl: 'https://i.imgur.com/M5oOb03.png',
                linkUrl: 'https://www.ton.com.br/catalogo/?referrer=97B2DEDE-8D48-4FA6-848E-ADE657DEC214&utm_medium=invite_share&utm_source=revendedor'
            },
                       {
                title: 'Ton T3',
                imageUrl: 'https://i.imgur.com/c7ZXrMl.png',
                linkUrl: 'https://www.ton.com.br/catalogo/?referrer=97B2DEDE-8D48-4FA6-848E-ADE657DEC214&utm_medium=invite_share&utm_source=revendedor'
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
