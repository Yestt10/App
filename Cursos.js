        // Dados de exemplo com títulos, URLs de imagens e URLs de links
        const feedData = [
            {
                title: 'Redes Sociais: Conexões Virtuais, Desafios Reais e Maléficios',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLc7VgZr2N1xjshZAE8sxxwUAmtuAMOm187R95Fe3h5R7CSo0Mjf2CgJqRRTbiqhbdQk9U7hL1prPrbjTxyMjLoQUHGSurQvUTxyIpUD9NiKomIUrfnih6ulkEBEqWeGojO4V1FGTOXfmEO26XJ12g7AniBkekQzpVSERtc4QTZ_rDxBVR1A4FlSnlA8N2/w554-h311-c-rw/uma-pessoa-triste-no-computador.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/redes-sociais-conexoes-virtuais.html'
            },
            {
                title: 'O natal está chegado cultive o espírito de generosidade e gratidão',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbj0wtU2k01V3n7SpMWgLP6gsK5U3yUVVHig5PeV7UULhDGcnP2ab-xSj40YGYwBuV5PtpU4g0ncKXiDUm7e-VSVRKmN54JyTfHgoJaeNzU0tO10O07vv-QRfPIxInxnTWH_-DoQe0ot3qn7dH52KR92ozJSDwBquGpZNr8DZQXPH8TA84Ey0IKnuQ8fLu/s960/natal.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/o-natal-esta-chegado.html'
            },
            // Adicione mais itens conforme necessário
       {
                title: 'Conexões - fios invisíveis que nos ligam uns aos outros',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4kXUuM2-X7cLO9u1FkP75CPacwAGuCr-eUGAzE71pMo8jnhbtJN4OA5LHeXkwyA26yT_KgUJlz5CF4cxxVbEyZwCCAgLGX5pwa97wEj9TTLHenoarkeatSCIytMPHd9z0Ho2nNF2IdotZSp_C6wIvbxxjsEXl9z3WDpKT3afsJPXY8N83zFm_qZoVc2fZ/s960/conexoes.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/conexoes-fios-invisiveis-que-nos-ligam.html'
            },
       {
                title: 'Cicatrizes - Facadas Invisíveis que Levamos',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBpf21soDrCC7H_eRsCi8wUroSzjy7vjK9ckZTOmu-lwRKWm3eG5CZGBDKAgaF9wRTIcwOyneDr6QrWriRWNc9KJxsKEPpwmx9jSS2VnTMe5PwVnPfQcvAcrvI_KTa4RmVK8xGBNl3ShdoGVSDKAHUI2YYelz7tKWAEvNAowHLlo6kCosu6bqGh968ax1w/w554-h311-c-rw/faca-com-sangue.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/cicatrizes-as-facadas-invisiveis.html'
            },
       {
                title: 'Encontrando Luz nas Sombras - Anda Desanimado(a)? Leia esse Texto',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMk2bRycyRZMasSlAJx2eJxiYmCbCE7nYcK5ABjZocqtVv145Ano1r23ror2Is1DedBC_znhYlnDWRvHJIzX5h8ymQ-CTUIL6YnIZwqwrb2O6UHv7JqyB8O3XJs3L6iiWgrB8owyVDsAMFSO4xntHOwtNol9WQq0riVBR7kbBtmMUiK864Ugg5PM0G_HWA/w554-h311-c-rw/luz-nas-sobra.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/encontrando-luz-nas-sombras.html'
            },
       {
                title: 'Apressando-se Devagar - No Ritmo do Tempo',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho1fL_buEy6Mf1joudXOKG2qLJYqSndIqVlJb7eLnwMil7LXPltaMpFGfjf2Miq5VO4G3OXGjTncWziPR-b6d7A7-0d9ExnmZopUN1et9pQzYG4uDT_cgaRTDnvl6bmwWaWTNZvs__dTHftHVz29jCDMF-AqxlOKU7CVyespfyMPhwFkg3zh8fDTj5y5__/s320-rw/tempo.jpg',
                linkUrl: 'https://www.alcir.net/2023/10/apressando-se-devagar-no-ritmo-do-tempo.html'
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
