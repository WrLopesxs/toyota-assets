// POR ESTA (apenas para teste local):
const API_URL = 'https://script.google.com/macros/s/AKfycbzbXBOkRN2YiYremndvUXKXbvMAbqkJRPV8NvJEssARPoScg_bX5ysWbUrgZegEQ1FOGw/exec';
const STORAGE_THEME_KEY = 'dashboard-theme';

let dadosCompletos = [];
let dadosFiltrados = [];
let filtros = {
    modelo: 'todos',
    turno: 'todos',
    status: 'todos',
    ordem: 'desc'
};

const ultimaAtualizacaoEl = document.getElementById('ultimaAtualizacao');
const cardsContainer = document.getElementById('cardsContainer');
const btnAtualizar = document.getElementById('btnAtualizar');
const filtroModeloEl = document.getElementById('filtroModelo');
const filtroTurnoEl = document.getElementById('filtroTurno');
const filtroStatusEl = document.getElementById('filtroStatus');
const filtroOrdemEl = document.getElementById('filtroOrdem');
const kpiTotal = document.getElementById('kpiTotal');
const kpiCritico = document.getElementById('kpiCritico');
const kpiAtencao = document.getElementById('kpiAtencao');
const kpiNormal = document.getElementById('kpiNormal');
const modalDetalhes = document.getElementById('modalDetalhes');
const modalTitulo = document.getElementById('modalTitulo');
const modalBody = document.getElementById('modalBody');
const btnTema = document.getElementById('btnTema');
const temaIcone = document.getElementById('temaIcone');
const temaLabel = document.getElementById('temaLabel');

document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    configurarEventos();
    carregarDados();
});

function configurarEventos() {
    btnAtualizar.addEventListener('click', carregarDados);

    filtroModeloEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('filtro-btn')) {
            atualizarFiltro('modelo', e.target.dataset.modelo);
        }
    });

    filtroTurnoEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('filtro-btn')) {
            atualizarFiltro('turno', e.target.dataset.turno);
        }
    });

    filtroStatusEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('filtro-btn')) {
            atualizarFiltro('status', e.target.dataset.status);
        }
    });

    filtroOrdemEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('filtro-btn')) {
            atualizarFiltro('ordem', e.target.dataset.ordem);
        }
    });

    if (btnTema) {
        btnTema.addEventListener('click', alternarTema);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalDetalhes.classList.contains('mostrar')) {
            fecharModal();
        }
    });

    modalDetalhes.addEventListener('click', (e) => {
        if (e.target === modalDetalhes) {
            fecharModal();
        }
    });
}

function inicializarTema() {
    const temaSalvo = localStorage.getItem(STORAGE_THEME_KEY);
    const prefereEscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const temaInicial = temaSalvo || (prefereEscuro ? 'dark' : 'light');

    aplicarTema(temaInicial, false);
}

function alternarTema() {
    const temaAtual = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const proximoTema = temaAtual === 'dark' ? 'light' : 'dark';

    aplicarTema(proximoTema, true);
}

function aplicarTema(tema, salvar) {
    const temaFinal = tema === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = temaFinal;

    if (salvar) {
        localStorage.setItem(STORAGE_THEME_KEY, temaFinal);
    }

    atualizarBotaoTema(temaFinal);
}

function atualizarBotaoTema(tema) {
    if (!temaIcone || !temaLabel) {
        return;
    }

    if (tema === 'dark') {
        temaIcone.textContent = '☀';
        temaLabel.textContent = 'Modo claro';
    } else {
        temaIcone.textContent = '🌙';
        temaLabel.textContent = 'Modo escuro';
    }
}

async function carregarDados() {
    mostrarLoading(true);

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== 'ok' || !Array.isArray(data.dados)) {
            throw new Error(data.erro || 'Resposta inválida da API');
        }

        dadosCompletos = data.dados.filter((item) => itemPodeSerExibido(item));

        const modelos = [...new Set(dadosCompletos.map(item => item.modelo).filter(Boolean))].sort();
        atualizarFiltrosModelo(modelos);

        if (data.ultimaAtualizacao) {
            const dataAtualizacao = new Date(data.ultimaAtualizacao);
            ultimaAtualizacaoEl.textContent = `Atualizado: ${formatarDataHora(dataAtualizacao)}`;
        } else {
            ultimaAtualizacaoEl.textContent = 'Atualizado agora';
        }

        aplicarFiltros();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        mostrarErro('Erro de conexão com a API. Tente novamente.');
    } finally {
        mostrarLoading(false);
    }
}

function atualizarFiltrosModelo(modelos) {
    if (!modelos.includes(filtros.modelo)) {
        filtros.modelo = 'todos';
    }

    const html = [
        `<button class="filtro-btn ${filtros.modelo === 'todos' ? 'ativo' : ''}" data-modelo="todos">Todos</button>`
    ];

    modelos.forEach((modelo) => {
        const ativo = filtros.modelo === modelo ? 'ativo' : '';
        html.push(`<button class="filtro-btn ${ativo}" data-modelo="${modelo}">${modelo}</button>`);
    });

    filtroModeloEl.innerHTML = html.join('');
}

function atualizarFiltro(tipo, valor) {
    filtros[tipo] = valor;

    const config = {
        modelo: { container: filtroModeloEl, dataAttr: 'modelo' },
        turno: { container: filtroTurnoEl, dataAttr: 'turno' },
        status: { container: filtroStatusEl, dataAttr: 'status' },
        ordem: { container: filtroOrdemEl, dataAttr: 'ordem' }
    };

    const { container, dataAttr } = config[tipo];

    container.querySelectorAll('.filtro-btn').forEach((btn) => {
        btn.classList.toggle('ativo', btn.dataset[dataAttr] === valor);
    });

    aplicarFiltros();
}

function aplicarFiltros() {
    dadosFiltrados = dadosCompletos.filter((item) => {
        if (!itemPodeSerExibido(item)) {
            return false;
        }

        if (filtros.modelo !== 'todos' && item.modelo !== filtros.modelo) {
            return false;
        }

        if (filtros.turno !== 'todos' && String(item.turnoPrevisto) !== String(filtros.turno)) {
            return false;
        }

        if (filtros.status !== 'todos' && normalizarStatus(item.status) !== normalizarStatus(filtros.status)) {
            return false;
        }

        return true;
    });

    ordenarDadosFiltrados();
    atualizarKPIs();
    renderizarCards();
}

function ordenarDadosFiltrados() {
    dadosFiltrados.sort((a, b) => {
        const dataA = obterTimestampSeguro(a?.dataFim);
        const dataB = obterTimestampSeguro(b?.dataFim);

        if (dataA === null && dataB === null) {
            return 0;
        }

        if (dataA === null) {
            return 1;
        }

        if (dataB === null) {
            return -1;
        }

        if (filtros.ordem === 'asc') {
            return dataA - dataB;
        }

        return dataB - dataA;
    });
}

function atualizarKPIs() {
    const total = dadosFiltrados.length;
    const criticos = dadosFiltrados.filter(item => normalizarStatus(item.status) === 'critico').length;
    const atencao = dadosFiltrados.filter(item => normalizarStatus(item.status) === 'atencao').length;
    const normal = dadosFiltrados.filter(item => normalizarStatus(item.status) === 'normal').length;

    kpiTotal.textContent = total;
    kpiCritico.textContent = criticos;
    kpiAtencao.textContent = atencao;
    kpiNormal.textContent = normal;
}

function renderizarCards() {
    if (dadosFiltrados.length === 0) {
        cardsContainer.innerHTML = '<div class="loading-cards">Nenhum item encontrado com os filtros atuais.</div>';
        return;
    }

    cardsContainer.innerHTML = dadosFiltrados.map(item => criarCardHTML(item)).join('');

    document.querySelectorAll('.pn-card').forEach((card) => {
        card.addEventListener('click', () => abrirModal(card.dataset.pn));
    });
}

function criarCardHTML(item) {
    const dataFim = new Date(item.dataFim);
    const autonomiaHoras = Number(item.autonomiaHoras) || 0;
    const autonomiaDias = (autonomiaHoras / 24).toFixed(1);
    const statusInfo = obterStatusInfo(item.status);

    return `
        <article class="pn-card ${statusInfo.classe}" data-pn="${item.pn}">
            <div class="pn-header">
                <span class="pn-nome">${item.pn}</span>
                <span class="pn-modelo">${item.modelo}</span>
            </div>

            <div class="pn-info">
                <div class="info-item">
                    <div class="info-label">Estoque</div>
                    <div class="info-value">${item.estoque}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Consumo/h</div>
                    <div class="info-value">${Number(item.consumo || 0).toFixed(1)}</div>
                </div>
            </div>

            <div class="pn-previsao">
                <div class="previsao-item">
                    <span class="previsao-label">Autonomia:</span>
                    <span class="previsao-value">${autonomiaHoras}h (${autonomiaDias} dias)</span>
                </div>
                <div class="previsao-item">
                    <span class="previsao-label">Acaba em:</span>
                    <span class="previsao-value">${formatarDataHora(dataFim)}</span>
                </div>
                <div class="previsao-item">
                    <span class="previsao-label">Turno:</span>
                    <span class="pn-turno">${item.turnoPrevisto}º Turno</span>
                </div>
            </div>

            <div class="pn-status ${statusInfo.classe}">
                ${statusInfo.icone} ${statusInfo.label.toUpperCase()} ${statusInfo.icone}
            </div>
        </article>
    `;
}

function abrirModal(pn) {
    const item = dadosCompletos.find((dado) => String(dado.pn) === String(pn));
    if (!item) {
        return;
    }

    const dataFim = new Date(item.dataFim);
    const autonomiaHoras = Number(item.autonomiaHoras) || 0;
    const autonomiaDias = (autonomiaHoras / 24).toFixed(1);
    const statusInfo = obterStatusInfo(item.status);

    modalTitulo.textContent = item.pn;

    modalBody.innerHTML = `
        <div class="modal-details">
            <div class="modal-grid">
                <div class="detail-box center">
                    <div class="detail-caption">Modelo</div>
                    <div class="detail-value">${item.modelo}</div>
                </div>
                <div class="detail-box center">
                    <div class="detail-caption">Linha</div>
                    <div class="detail-value">${item.linha}</div>
                </div>
            </div>

            <div class="detail-section">
                <h4>Detalhes do estoque</h4>
                <div class="detail-row">
                    <span>Quantidade atual:</span>
                    <strong>${item.estoque} peças</strong>
                </div>
                <div class="detail-row">
                    <span>Consumo por hora:</span>
                    <strong>${Number(item.consumo || 0).toFixed(1)} peças/h</strong>
                </div>
                <div class="detail-row">
                    <span>Autonomia:</span>
                    <strong>${autonomiaHoras} horas (${autonomiaDias} dias)</strong>
                </div>
            </div>

            <div class="detail-section">
                <h4>Previsão de esgotamento</h4>
                <div class="detail-row">
                    <span>Data:</span>
                    <strong>${formatarData(dataFim)}</strong>
                </div>
                <div class="detail-row">
                    <span>Horário:</span>
                    <strong>${formatarHora(dataFim)}</strong>
                </div>
                <div class="detail-row">
                    <span>Turno:</span>
                    <strong>${item.turnoPrevisto}º Turno</strong>
                </div>
            </div>

            <div class="status-box ${statusInfo.classe}">
                Status: ${statusInfo.icone} ${statusInfo.label.toUpperCase()}
            </div>
        </div>
    `;

    modalDetalhes.classList.add('mostrar');
}

function fecharModal() {
    modalDetalhes.classList.remove('mostrar');
}

function obterStatusInfo(status) {
    const statusNormalizado = normalizarStatus(status);

    if (statusNormalizado === 'critico') {
        return { classe: 'critico', icone: '🔴', label: 'Crítico' };
    }

    if (statusNormalizado === 'atencao') {
        return { classe: 'atencao', icone: '🟡', label: 'Atenção' };
    }

    return { classe: 'normal', icone: '🟢', label: 'Normal' };
}

function normalizarStatus(status) {
    return String(status || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

function obterTimestampSeguro(valorData) {
    const timestamp = new Date(valorData).getTime();
    return Number.isFinite(timestamp) ? timestamp : null;
}

function temEstoqueDisponivel(item) {
    const estoque = Number(item?.estoque);
    return Number.isFinite(estoque) && estoque > 0;
}

function temConsumoValido(item) {
    const consumo = Number(item?.consumo);
    return Number.isFinite(consumo) && consumo > 0;
}

function itemPodeSerExibido(item) {
    return temEstoqueDisponivel(item) && temConsumoValido(item);
}

function formatarDataHora(data) {
    if (!(data instanceof Date) || Number.isNaN(data.getTime())) {
        return '-';
    }

    return data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatarData(data) {
    if (!(data instanceof Date) || Number.isNaN(data.getTime())) {
        return '-';
    }

    return data.toLocaleDateString('pt-BR');
}

function formatarHora(data) {
    if (!(data instanceof Date) || Number.isNaN(data.getTime())) {
        return '-';
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function mostrarLoading(ativo) {
    if (ativo) {
        btnAtualizar.disabled = true;
        btnAtualizar.innerHTML = '<span class="loading"></span> Atualizando...';
        cardsContainer.innerHTML = '<div class="loading-cards"><span class="loading"></span> Carregando dados da API...</div>';
    } else {
        btnAtualizar.disabled = false;
        btnAtualizar.innerHTML = '<span>↻</span> Atualizar dados';
    }
}

function mostrarErro(mensagem) {
    cardsContainer.innerHTML = `<div class="loading-cards" style="color: #d42f4a;">${mensagem}</div>`;
}
