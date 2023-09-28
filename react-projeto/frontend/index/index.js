document.addEventListener("DOMContentLoaded", function() {
    const header = renderHeader();
    document.getElementById('header-placeholder').appendChild(header);
    exibirEventos();
});

function renderHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
        <a href="index.html" style="color: white; text-decoration: none;"/><h1 >Plataforma de Eventos Online</h1>
        <nav>
            <ul>
                <li><a href="ListagemdeEventos.html">Listagem de Eventos</a></li>
                <li><a href="CriarEditarVideos.html">Criar/Editar Videos</a></li>
                <li><a href="MeusEventos.html">Meus Eventos</a></li>
            </ul>
        </nav>
    `;
    return header;
}

function exibirEventos() {
    const listaEventos = document.querySelector(".event-grid");
    listaEventos.innerHTML = "";

    eventos.forEach(evento => {
        const eventoCard = document.createElement("div");
        eventoCard.classList.add("event-card");

        eventoCard.innerHTML = `
            <img src="imagem-do-evento.jpg" alt="${evento.nome}">
            <h2>${evento.nome}</h2>
            <p>${evento.descricao}</p>
            <p>Data: ${evento.data}</p>
            <p>Horário: ${evento.horario}</p>
            <p>Local: ${evento.local}</p>
            <p>Transmissão ao Vivo: ${evento.transmissaoAoVivo ? "Sim" : "Não"}</p>
            <p class="perfil">Postado por: Nome do Perfil</p>
        `;

        listaEventos.appendChild(eventoCard);
    });
}
//Eventos passados só como exemplo, aqui precisaria chamar os eventos armazenados no banco
const eventos = [
    {
        id: 1,
        nome: "Conferência de Tecnologia",
        descricao: "Uma conferência emocionante sobre as últimas tendências em tecnologia.",
        data: "2023-10-15",
        horario: "10:00 - 16:00",
        local: "Online",
        transmissaoAoVivo: true,
        chatAtivo: true
    },
    {
        id: 2,
        nome: "Workshop de Marketing",
        descricao: "Aprenda as melhores estratégias de marketing com especialistas da indústria.",
        data: "2023-11-05",
        horario: "14:00 - 17:00",
        local: "Online",
        transmissaoAoVivo: true,
        chatAtivo: true
    }
];
