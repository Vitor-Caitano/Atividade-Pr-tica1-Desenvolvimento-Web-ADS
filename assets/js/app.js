const dados = {
    "albuns": [
        {
            "id": 1,
            "nome": "Please, Please Me",
            "capa": "assets/img/please cover.jpg",
            "faixas": ["I Saw Her Standing There", "Misery", "Anna (Go to Him)", "Chains", "Boys", "Ask Me Why", "Please, Please Me", "Love Me Do", "P.S.I Love You", "Baby is You", "Do You Want to Know a Secret", "A Taste of Honey", "There's A Place", "Twist and Shout"],
            "lancamento": "22 de março de 1963",
            "gravadora": "Parlophone",
            "descricao": "Please, Please Me foi o álbum de estreia dos Beatles, que, aproveitando o sucesso de singles anteriores, levou a banda ao topo das paradas britânicas.",
            "texto": "Please, Please Me foi o álbum de estreia dos Beatles, lançado no dia 22 de março de 1963 pela Parlophone, buscando capitalizar com o sucesso do single 'Please, Please Me', a banda montou a seleção das faixas com base nas preferidas dos show que faziam em bailes e com novas composições de Lennon-McCartney. O álbum foi um sucesso e atingiu o topo das paradas britânicas em maio de 63."
        },
        {
            "id": 2,
            "nome": "With the Beatles",
            "capa": "assets/img/with the beatles cover.jpg",
            "faixas": ["It Won't Be Long", "All I've Got to Do", "All My Loving", "Don't Bother Me", "Little Child", "Till There Was You", "Please Mister Postman", "Roll Over Beethoven", "Hold Me Tight", "You Really Got a Hold on Me", "I Wanna Be Your Man", "Devil in Her Heart", "Not a Second Time", "Money (That's What I Want)"],
            "lancamento": "22 de novembro de 1963",
            "gravadora": "Parlophone",
            "descricao": "With the Beatles foi o segundo álbum de estúdio do grupo, consolidando a 'Beatlemania' no Reino Unido e trazendo grandes clássicos como 'All My Loving'.",
            "texto": "With the Beatles é o segundo álbum de estúdio dos Beatles, lançado em 22 de novembro de 1963 pela Parlophone. Gravado apenas quatro meses após o álbum de estreia, o disco consolidou o fenômeno da Beatlemania no Reino Unido, permanecendo no topo das paradas por 21 semanas. Ele se destaca por trazer composições marcantes de Lennon-McCartney, a primeira música autoral de George Harrison ('Don't Bother Me') e uma forte influência de covers de R&B e Motown."
        },
        {
            "id": 3,
            "nome": "A Hard Day's Night",
            "capa": "assets/img/hard night cover.jpg",
            "faixas": ["A Hard Day's Night", "I Should Have Known Better", "If I Fell", "And I Love Her", "Tell Me Why", "Can't Buy Me Love", "Any Time at All", "I'll Cry Instead", "Things We Said Today", "When I Get Home", "You Can't Do That", "I'll Be Back"],
            "lancamento": "10 de julho de 1964",
            "gravadora": "Parlophone",
            "descricao": "A Hard Day's Night é o terceiro álbum da banda e a trilha sonora do seu primeiro filme homônimo, sendo o único disco do grupo composto inteiramente por Lennon-McCartney.",
            "texto": "A Hard Day's Night foi lançado em 10 de julho de 1964 pela Parlophone como o terceiro álbum de estúdio dos Beatles, servindo também como a trilha sonora do primeiro filme da banda. O álbum marca um momento histórico por ser o único de toda a discografia do grupo a conter exclusivamente composições originais de John Lennon e Paul McCartney (sem nenhum cover). O disco captura o auge da Beatlemania global, impulsionado por mega-hits como a faixa-título e 'Can't Buy Me Love', apresentando uma sonoridade mais madura e o uso marcante da guitarra Rickenbacker de 12 cordas de George Harrison."
        },
        {
            "id": 4,
            "nome": "Beatles for Sale",
            "capa": "assets/img/for sale cover.jpg",
            "faixas": ["No Reply", "I'm a Loser", "Baby's in Black", "Rock and Roll Music", "I'll Follow the Sun", "Mr. Moonlight", "Kansas City/Hey-Hey-Hey-Hey!", "Eight Days a Week", "Words of Love", "Honey Don't", "Every Little Thing", "I Don't Want to Spoil the Party", "What You're Doing", "Everybody's Trying to Be My Baby"],
            "lancamento": "4 de dezembro de 1964",
            "gravadora": "Parlophone",
            "descricao": "Beatles for Sale reflete o cansaço da banda com a rotina exaustiva da Beatlemania, trazendo uma sonoridade mais melancólica e fortes influências do folk rock e do country.",
            "texto": "Lançado em 4 de dezembro de 1964 pela Parlophone, Beatles for Sale é o quarto álbum de estúdio do grupo. Gravado em meio a uma intensa rotina de turnês globais e gravações, o disco transmite visivelmente o esgotamento físico e mental dos integrantes. Musicalmente, o álbum marca o início de uma transição profunda, muito influenciada pelo encontro com Bob Dylan, resultando em letras mais introspectivas e melancólicas de John Lennon (como 'I'm a Loser' e 'No Reply'). Para aliviar a pressão de compor material inédito com tanta rapidez, os Beatles voltaram a incluir covers de rock and roll, country e R&B, mas ainda assim emplacaram clássicos autorais gigantescos como 'Eight Days a Week'."
        }
    ]
}

preencheCards = () => {
    for(let i = 0; i < dados.albuns.length; i++)
    {
        document.getElementById(`card-capa${i+1}`).src = dados.albuns[i].capa;
        document.getElementById(`card-titulo${i+1}`).innerText = dados.albuns[i].nome;
        document.getElementById(`card-descricao${i+1}`).innerText = dados.albuns[i].descricao;
    }
}