// ============================================
// CONFIGURAÃ‡Ã•ES
// ============================================
const API_URL = 'https://script.google.com/macros/s/AKfycbzKX5yLRRwbzV8-iggoNlM780Np7Z-drBke0D629GDm4QLE7ZAkOGpBBT5zo77kE9Zb/exec';

// ============================================
// DADOS DOS PART NUMBERS (MESMA ORDEM QUE VOCÃŠ PASSOU)
// ============================================
const partNumbers = [
    // 230B
    { pn: "53311-230.1B", modelo: "230B" },
    { pn: "53321-230.1B", modelo: "230B" },
    { pn: "53811-230.1B", modelo: "230B" },
    { pn: "53812-230.1B", modelo: "230B" },
    { pn: "55111-230.1B", modelo: "230B" },
    { pn: "58211-230.1B", modelo: "230B" },
    { pn: "61633-230.1B", modelo: "230B" },
    { pn: "61634-230.1B", modelo: "230B" },
    { pn: "67111-230.1B", modelo: "230B" },
    { pn: "67112-230.1B", modelo: "230B" },
    { pn: "67141-230.1B", modelo: "230B" },
    { pn: "67142-230.1B", modelo: "230B" },
    { pn: "58311-230B (HB)", modelo: "230B" },
    { pn: "61631-230B (HB)", modelo: "230B" },
    { pn: "61632-230B (HB)", modelo: "230B" },
    { pn: "63111-230B (HB)", modelo: "230B" },
    { pn: "67115-230B (HB)", modelo: "230B" },
    { pn: "67149-230B (HB)", modelo: "230B" },
    
    // 231 (SD)
    { pn: "58311-231B (SD)", modelo: "231" },
    { pn: "61111-231B (SD)", modelo: "231" },
    { pn: "61112-231B (SD)", modelo: "231" },
    { pn: "64411-231B (SD)", modelo: "231" },
    { pn: "64412-231B (SD)", modelo: "231" },
    { pn: "64414-231B (SD)", modelo: "231" },
    
    // 740B
    { pn: "53311-740B", modelo: "740B" },
    { pn: "53321-740B", modelo: "740B" },
    { pn: "53811-740B", modelo: "740B" },
    { pn: "53812-740B", modelo: "740B" },
    { pn: "61111-740B", modelo: "740B" },
    { pn: "61112-740B", modelo: "740B" },
    { pn: "61631-740B", modelo: "740B" },
    { pn: "61632-740B", modelo: "740B" },
    { pn: "63111-740B", modelo: "740B" },
    { pn: "63111-740B (SOLAR)", modelo: "740B" },
    { pn: "67111-740B", modelo: "740B" },
    { pn: "67112-740B", modelo: "740B" },
    { pn: "67141-740B", modelo: "740B" },
    { pn: "67142-740B", modelo: "740B" },
    { pn: "67113-740B", modelo: "740B" },
    { pn: "67114-740B", modelo: "740B" },
    { pn: "67143-740B", modelo: "740B" },
    { pn: "67144-740B", modelo: "740B" },
    { pn: "67118-740B", modelo: "740B" },
    { pn: "67119-740B", modelo: "740B" },
    { pn: "67149-740B", modelo: "740B" },
    { pn: "67149-740B POWER", modelo: "740B" },
    { pn: "58211-HV-740B", modelo: "740B" },
    { pn: "58211-FF-740B", modelo: "740B" },
    { pn: "58311-740B", modelo: "740B" },
    { pn: "55111-740B", modelo: "740B" },
    { pn: "58113-740B", modelo: "740B" },
    
    // 340B
    { pn: "61633.4-340B", modelo: "340B" },
    
    // D90B
    { pn: "53311-D90B", modelo: "D90B" },
    { pn: "53321-D90B", modelo: "D90B" },
    { pn: "63111-D90B C/F", modelo: "D90B" },
    { pn: "63111-D90B S/F", modelo: "D90B" },
    { pn: "63113-D90B PANOR", modelo: "D90B" },
    { pn: "53811-D90B", modelo: "D90B" },
    { pn: "53812-D90B", modelo: "D90B" },
    { pn: "61111-D90B", modelo: "D90B" },
    { pn: "61112-D90B", modelo: "D90B" },
    { pn: "67111-D90B", modelo: "D90B" },
    { pn: "67112-D90B", modelo: "D90B" },
    { pn: "67113-D90B", modelo: "D90B" },
    { pn: "67114-D90B", modelo: "D90B" },
    { pn: "67141-D90B", modelo: "D90B" },
    { pn: "67142-D90B", modelo: "D90B" },
    { pn: "67143-D90B", modelo: "D90B" },
    { pn: "67144-D90B", modelo: "D90B" },
    { pn: "67118-D90B", modelo: "D90B" },
    { pn: "67119-D90B", modelo: "D90B" },
    { pn: "67149-D90B", modelo: "D90B" },
    { pn: "67149-D90B PBD", modelo: "D90B" },
    { pn: "61631-D90B", modelo: "D90B" },
    { pn: "61632-D90B", modelo: "D90B" },
    { pn: "61633-D90B", modelo: "D90B" },
    { pn: "61634-D90B", modelo: "D90B" },
    { pn: "55111-D90B FFV", modelo: "D90B" },
    { pn: "55111-D90B HV", modelo: "D90B" },
    { pn: "55111-D90B HV IBOOSTER", modelo: "D90B" },
    { pn: "58211-D90B FFV", modelo: "D90B" },
    { pn: "58211-D90B HV", modelo: "D90B" },
    { pn: "58311-D90B FFV", modelo: "D90B" },
    { pn: "58311-D90B HV", modelo: "D90B" },
    { pn: "58111-D90B", modelo: "D90B" }
];

// ============================================
// ESTADO DA APLICAÃ‡ÃƒO
// ============================================
let turnoAtivo = null;
let modeloAtual = null;
let pnsFiltrados = [...partNumbers];
let temaManualAtivo = false;
let acaoConfirmacaoAtual = null;

// ============================================
// ELEMENTOS DOM
// ============================================
const telaInicial = document.getElementById('telaInicial');
const telaPreenchimento = document.getElementById('telaPreenchimento');
const modelosContainer = document.getElementById('modelosContainer');
const cardsContainer = document.getElementById('cardsContainer');
const buscaPN = document.getElementById('buscaPN');
const btnVoltar = document.getElementById('btnVoltar');
const btnEnviar = document.getElementById('btnEnviar');
const tituloModelo = document.getElementById('tituloModelo');
const turnoInfo = document.getElementById('turnoInfo');
const progressoTexto = document.getElementById('progressoTexto');
const progressoPercentual = document.getElementById('progressoPercentual');
const progressoBarra = document.getElementById('progressoBarra');
const btnZerarVazios = document.getElementById('btnZerarVazios');
const resumoEstoquePalete = document.getElementById('resumoEstoquePalete');
const resumoEstoqueFrac = document.getElementById('resumoEstoqueFrac');
const resumoReparoPalete = document.getElementById('resumoReparoPalete');
const resumoReparoFrac = document.getElementById('resumoReparoFrac');
const notificacao = document.getElementById('notificacao');
const modalConfirmacao = document.getElementById('modalConfirmacao');
const modalSucesso = document.getElementById('modalSucesso');
const modalMensagem = document.getElementById('modalMensagem');
const modalCancelar = document.getElementById('modalCancelar');
const modalConfirmar = document.getElementById('modalConfirmar');
const fecharSucesso = document.getElementById('fecharSucesso');
const resumoEnvio = document.getElementById('resumoEnvio');
const themeToggle = document.getElementById('themeToggle');
const themeToggleText = document.getElementById('themeToggleText');

const THEME_STORAGE_KEY = 'inventario-theme';
const THEME_MANUAL_KEY = 'inventario-theme-manual';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

// ============================================
// INICIALIZAÃ‡ÃƒO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    configurarTema();
    carregarModelos();
    configurarEventos();
    atualizarPainelPreenchimento();
});

function configurarEventos() {
    // Turnos
    document.querySelectorAll('.turno-btn').forEach(btn => {
        btn.addEventListener('click', () => selecionarTurno(btn.dataset.turno));
    });

    // Busca
    buscaPN.addEventListener('input', filtrarModelos);

    // BotÃµes de navegaÃ§Ã£o
    btnVoltar.addEventListener('click', voltarParaInicio);
    btnEnviar.addEventListener('click', enviarDados);
    if (btnZerarVazios) {
        btnZerarVazios.addEventListener('click', confirmarZerarNaoPreenchidos);
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', alternarTema);
    }

    cardsContainer.addEventListener('input', lidarComInputCard);
    cardsContainer.addEventListener('click', lidarComAcoesCard);

    // Modais
    modalCancelar.addEventListener('click', fecharModalConfirmacao);
    modalConfirmar.addEventListener('click', executarConfirmacaoModal);
    fecharSucesso.addEventListener('click', () => {
        modalSucesso.classList.remove('mostrar');
        voltarParaInicio();
    });

    // Fechar modais clicando fora
    window.addEventListener('click', (e) => {
        if (e.target === modalConfirmacao) fecharModalConfirmacao();
        if (e.target === modalSucesso) {
            modalSucesso.classList.remove('mostrar');
            voltarParaInicio();
        }
    });
}

// ============================================
// FUNÃ‡Ã•ES DE TURNO
// ============================================
function selecionarTurno(turno) {
    turnoAtivo = turno;
    document.querySelectorAll('.turno-btn').forEach(btn => {
        btn.classList.toggle('ativo', btn.dataset.turno === turno);
    });
    turnoInfo.textContent = `${turno}o Turno`;

    if (!temaManualAtivo) {
        const temaSugerido = turno === '3' ? THEME_DARK : THEME_LIGHT;
        const temaAtual = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
        if (temaAtual !== temaSugerido) {
            aplicarTema(temaSugerido);
            mostrarNotificacao(
                temaSugerido === THEME_DARK
                    ? 'Tema escuro ativado automaticamente para o 3o turno.'
                    : 'Tema claro ativado automaticamente para este turno.',
                'sucesso'
            );
        }
    }
}

function configurarTema() {
    const temaSalvo = localStorage.getItem(THEME_STORAGE_KEY);
    temaManualAtivo = localStorage.getItem(THEME_MANUAL_KEY) === 'true';
    const temaInicial = temaSalvo === THEME_DARK ? THEME_DARK : THEME_LIGHT;
    aplicarTema(temaInicial);
}

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem(THEME_STORAGE_KEY, tema);

    if (themeToggleText) {
        themeToggleText.textContent = tema === THEME_DARK ? 'Modo claro' : 'Modo escuro';
    }

    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', tema === THEME_DARK ? 'true' : 'false');
    }
}

function alternarTema() {
    const temaAtual = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    const proximoTema = temaAtual === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    temaManualAtivo = true;
    localStorage.setItem(THEME_MANUAL_KEY, 'true');
    aplicarTema(proximoTema);
}

// ============================================
// FUNÃ‡Ã•ES DOS MODELOS
// ============================================
function carregarModelos() {
    // Agrupar PNs por modelo
    const modelos = {};
    partNumbers.forEach(item => {
        if (!modelos[item.modelo]) {
            modelos[item.modelo] = [];
        }
        modelos[item.modelo].push(item);
    });

    // Criar cards dos modelos
    modelosContainer.innerHTML = '';
    Object.entries(modelos).forEach(([modelo, itens]) => {
        const card = document.createElement('div');
        card.className = 'modelo-card';
        card.dataset.modelo = modelo;
        card.innerHTML = `
            <div class="modelo-nome">${modelo}</div>
            <div class="modelo-qtd">${itens.length} itens</div>
        `;
        card.addEventListener('click', () => abrirModelo(modelo));
        modelosContainer.appendChild(card);
    });
}

function filtrarModelos() {
    const termo = buscaPN.value.toLowerCase().trim();
    
    if (!termo) {
        carregarModelos();
        return;
    }

    // Filtrar PNs que contÃªm o termo
    const pnsFiltrados = partNumbers.filter(item => 
        item.pn.toLowerCase().includes(termo)
    );

    // Agrupar resultados por modelo
    const modelosFiltrados = {};
    pnsFiltrados.forEach(item => {
        if (!modelosFiltrados[item.modelo]) {
            modelosFiltrados[item.modelo] = [];
        }
        modelosFiltrados[item.modelo].push(item);
    });

    // Mostrar resultados
    modelosContainer.innerHTML = '';
    Object.entries(modelosFiltrados).forEach(([modelo, itens]) => {
        const card = document.createElement('div');
        card.className = 'modelo-card';
        card.dataset.modelo = modelo;
        card.innerHTML = `
            <div class="modelo-nome">${modelo}</div>
            <div class="modelo-qtd">${itens.length} itens encontrados</div>
        `;
        card.addEventListener('click', () => abrirModelo(modelo));
        modelosContainer.appendChild(card);
    });

    if (pnsFiltrados.length === 0) {
        modelosContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum PN encontrado</div>';
    }
}

// ============================================
// FUNÃ‡Ã•ES DE PREENCHIMENTO
// ============================================
function abrirModelo(modelo) {
    if (!turnoAtivo) {
        mostrarNotificacao('Selecione um turno primeiro!', 'erro');
        return;
    }

    modeloAtual = modelo;
    tituloModelo.textContent = modelo;
    
    // Filtrar PNs do modelo (manter ordem original)
    const pnsModelo = partNumbers.filter(item => item.modelo === modelo);
    
    // Criar cards de preenchimento
    cardsContainer.innerHTML = '';
    pnsModelo.forEach(item => {
        const card = criarCardPN(item.pn);
        cardsContainer.appendChild(card);
    });

    atualizarPainelPreenchimento();

    // Trocar tela
    telaInicial.classList.remove('ativa');
    telaPreenchimento.classList.add('ativa');
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function criarCardPN(pn) {
    const card = document.createElement('div');
    card.className = 'card-pn';
    card.dataset.pn = pn;
    
    card.innerHTML = `
        <div class="card-actions">
            <span class="card-check" aria-hidden="true">&#10003;</span>
            <button class="btn-limpar-card" type="button" data-acao="limpar-card" aria-label="Limpar card ${pn}" title="Limpar card">&#128465;</button>
        </div>
        <div class="pn-titulo">${pn}</div>
        <div class="card-atualizado" hidden></div>
        <div class="opcoes-container">
            <div class="opcao estoque">
                <div class="opcao-titulo">ESTOQUE</div>
                <div class="inputs-row">
                    <div class="input-group">
                        <label>Palete</label>
                        <input type="number" class="estoque-palete" min="0" placeholder="0">
                    </div>
                    <div class="input-group">
                        <label>Fracionado</label>
                        <input type="number" class="estoque-frac" min="0" placeholder="0">
                    </div>
                </div>
            </div>
            <div class="opcao reparo">
                <div class="opcao-titulo">REPARO</div>
                <div class="inputs-row">
                    <div class="input-group">
                        <label>Palete</label>
                        <input type="number" class="reparo-palete" min="0" placeholder="0">
                    </div>
                    <div class="input-group">
                        <label>Fracionado</label>
                        <input type="number" class="reparo-frac" min="0" placeholder="0">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function voltarParaInicio() {
    telaPreenchimento.classList.remove('ativa');
    telaInicial.classList.add('ativa');
    modeloAtual = null;
    atualizarPainelPreenchimento();
}

// ============================================
// VALIDAÃ‡ÃƒO E ENVIO
// ============================================
function obterInputsCard(card) {
    return Array.from(card.querySelectorAll('input[type="number"]'));
}

function campoTemValor(valor) {
    return String(valor ?? '').trim() !== '';
}

function cardTemDados(card) {
    return obterInputsCard(card).some(input => campoTemValor(input.value));
}

function cardCompleto(card) {
    const inputs = obterInputsCard(card);
    return inputs.length > 0 && inputs.every(input => campoTemValor(input.value));
}

function formatarHora(isoString) {
    return new Date(isoString).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function atualizarEstadoCard(card, atualizarHorario = false) {
    const temDados = cardTemDados(card);
    const completo = cardCompleto(card);
    const elementoAtualizado = card.querySelector('.card-atualizado');

    card.classList.toggle('preenchido', temDados);
    card.classList.toggle('completo', completo);

    if (temDados) {
        if (atualizarHorario || !card.dataset.ultimaAtualizacao) {
            card.dataset.ultimaAtualizacao = new Date().toISOString();
        }

        if (elementoAtualizado) {
            elementoAtualizado.hidden = false;
            elementoAtualizado.textContent = `Atualizado: ${formatarHora(card.dataset.ultimaAtualizacao)}`;
        }
    } else {
        delete card.dataset.ultimaAtualizacao;
        if (elementoAtualizado) {
            elementoAtualizado.hidden = true;
            elementoAtualizado.textContent = '';
        }
    }
}

function corProgresso(percentual) {
    const lightness = 64 - Math.round((percentual / 100) * 22);
    return `hsl(142, 68%, ${lightness}%)`;
}

function atualizarPainelPreenchimento() {
    const cards = Array.from(document.querySelectorAll('.card-pn'));
    const totalCards = cards.length;
    let cardsPreenchidos = 0;

    const totais = {
        estoquePalete: 0,
        estoqueFrac: 0,
        reparoPalete: 0,
        reparoFrac: 0
    };

    cards.forEach(card => {
        atualizarEstadoCard(card, false);

        const estoquePalete = card.querySelector('.estoque-palete')?.value || '';
        const estoqueFrac = card.querySelector('.estoque-frac')?.value || '';
        const reparoPalete = card.querySelector('.reparo-palete')?.value || '';
        const reparoFrac = card.querySelector('.reparo-frac')?.value || '';

        if (campoTemValor(estoquePalete) || campoTemValor(estoqueFrac) || campoTemValor(reparoPalete) || campoTemValor(reparoFrac)) {
            cardsPreenchidos += 1;
        }

        totais.estoquePalete += parseInt(estoquePalete || 0, 10);
        totais.estoqueFrac += parseInt(estoqueFrac || 0, 10);
        totais.reparoPalete += parseInt(reparoPalete || 0, 10);
        totais.reparoFrac += parseInt(reparoFrac || 0, 10);
    });

    const percentual = totalCards > 0 ? Math.round((cardsPreenchidos / totalCards) * 100) : 0;

    if (progressoTexto) {
        progressoTexto.textContent = `${cardsPreenchidos} de ${totalCards} PNs preenchidos`;
    }
    if (progressoPercentual) {
        progressoPercentual.textContent = `${percentual}%`;
    }
    if (progressoBarra) {
        progressoBarra.style.width = `${percentual}%`;
        progressoBarra.style.backgroundColor = corProgresso(percentual);
    }

    if (resumoEstoquePalete) resumoEstoquePalete.textContent = String(totais.estoquePalete);
    if (resumoEstoqueFrac) resumoEstoqueFrac.textContent = String(totais.estoqueFrac);
    if (resumoReparoPalete) resumoReparoPalete.textContent = String(totais.reparoPalete);
    if (resumoReparoFrac) resumoReparoFrac.textContent = String(totais.reparoFrac);
}

function limparDadosCard(card, atualizarHorario = true) {
    obterInputsCard(card).forEach(input => {
        input.value = '';
    });
    atualizarEstadoCard(card, atualizarHorario);
}

function confirmarLimpezaCard(card) {
    abrirModalConfirmacao({
        mensagem: `Limpar dados deste PN (${card.dataset.pn})?`,
        textoConfirmar: 'LIMPAR PN',
        onConfirm: () => {
            limparDadosCard(card);
            atualizarPainelPreenchimento();
            mostrarNotificacao(`PN ${card.dataset.pn} limpo.`, 'sucesso');
        }
    });
}

function lidarComInputCard(evento) {
    const input = evento.target;
    if (!(input instanceof HTMLInputElement) || input.type !== 'number') return;

    const card = input.closest('.card-pn');
    if (!card) return;

    atualizarEstadoCard(card, true);
    atualizarPainelPreenchimento();
}

function lidarComAcoesCard(evento) {
    const botaoLimpar = evento.target.closest('[data-acao="limpar-card"]');
    if (!botaoLimpar) return;

    const card = botaoLimpar.closest('.card-pn');
    if (!card) return;

    confirmarLimpezaCard(card);
}

function confirmarZerarNaoPreenchidos() {
    const cards = Array.from(document.querySelectorAll('.card-pn'));
    if (cards.length === 0) {
        mostrarNotificacao('Abra um modelo para usar esta acao.', 'erro');
        return;
    }

    abrirModalConfirmacao({
        mensagem: 'Preencher com 0 todos os campos vazios deste modelo?',
        textoConfirmar: 'ZERAR VAZIOS',
        onConfirm: zerarCamposNaoPreenchidos
    });
}

function zerarCamposNaoPreenchidos() {
    const cards = Array.from(document.querySelectorAll('.card-pn'));
    let totalCamposAlterados = 0;
    let cardsAlterados = 0;

    cards.forEach(card => {
        let alterouCard = false;
        obterInputsCard(card).forEach(input => {
            if (!campoTemValor(input.value)) {
                input.value = '0';
                alterouCard = true;
                totalCamposAlterados += 1;
            }
        });

        if (alterouCard) {
            cardsAlterados += 1;
            atualizarEstadoCard(card, true);
        }
    });

    atualizarPainelPreenchimento();

    if (totalCamposAlterados === 0) {
        mostrarNotificacao('Nao ha campos vazios para zerar.', 'sucesso');
        return;
    }

    mostrarNotificacao(`${cardsAlterados} cards atualizados com zero.`, 'sucesso');
}

function validarCards() {
    const cards = document.querySelectorAll('.card-pn');
    const cardsVazios = [];
    cards.forEach((card, index) => {
        if (!cardTemDados(card)) {
            cardsVazios.push({
                card: card,
                pn: card.dataset.pn,
                index: index
            });
        }
    });
    return cardsVazios;
}

function enviarDados() {
    if (!turnoAtivo) {
        mostrarNotificacao('Turno nao selecionado!', 'erro');
        return;
    }
    const cardsVazios = validarCards();
    if (cardsVazios.length > 0) {
        const pnsVazios = cardsVazios.map(item => item.pn).join(', ');
        abrirModalConfirmacao({
            mensagem: `Os seguintes itens estao sem informacao: ${pnsVazios}. Deseja enviar mesmo assim?`,
            textoConfirmar: 'CONTINUAR',
            onConfirm: prepararEnvio
        });
    } else {
        prepararEnvio();
    }
}
function fecharModalConfirmacao() {
    modalConfirmacao.classList.remove('mostrar');
    modalConfirmar.textContent = 'CONTINUAR';
    modalCancelar.textContent = 'VOLTAR';
    acaoConfirmacaoAtual = null;
}
function abrirModalConfirmacao({ mensagem, textoConfirmar = 'CONTINUAR', textoCancelar = 'VOLTAR', onConfirm = null }) {
    modalMensagem.textContent = mensagem;
    modalConfirmar.textContent = textoConfirmar;
    modalCancelar.textContent = textoCancelar;
    acaoConfirmacaoAtual = typeof onConfirm === 'function' ? onConfirm : null;
    modalConfirmacao.classList.add('mostrar');
}
function executarConfirmacaoModal() {
    const acao = acaoConfirmacaoAtual;
    fecharModalConfirmacao();
    if (acao) {
        acao();
    }
}

function temQuantidadePositiva(...valores) {
    return valores.some(valor => Number(valor || 0) > 0);
}

function numeroPositivoOuNulo(valor) {
    const numero = Number(valor || 0);
    return Number.isFinite(numero) && numero > 0 ? numero : null;
}

function prepararEnvio() {
    const cards = document.querySelectorAll('.card-pn');
    const dadosEnvio = [];
    cards.forEach(card => {
        const pn = card.dataset.pn;
        const estoquePalete = card.querySelector('.estoque-palete').value;
        const estoqueFrac = card.querySelector('.estoque-frac').value;
        const reparoPalete = card.querySelector('.reparo-palete').value;
        const reparoFrac = card.querySelector('.reparo-frac').value;

        const estoquePaleteNum = numeroPositivoOuNulo(estoquePalete);
        const estoqueFracNum = numeroPositivoOuNulo(estoqueFrac);
        const reparoPaleteNum = numeroPositivoOuNulo(reparoPalete);
        const reparoFracNum = numeroPositivoOuNulo(reparoFrac);

        // Mantem "0" como preenchido no progresso, mas envia para API apenas se houver valor > 0.
        if (temQuantidadePositiva(estoquePaleteNum, estoqueFracNum)) {
            const itemEstoque = {
                partNumber: pn,
                turno: turnoAtivo,
                tipo: 'estoque',
                timestamp: new Date().toISOString()
            };
            if (estoquePaleteNum !== null) itemEstoque.qtdePalete = estoquePaleteNum;
            if (estoqueFracNum !== null) itemEstoque.fracionado = estoqueFracNum;

            dadosEnvio.push({
                ...itemEstoque
            });
        }
        if (temQuantidadePositiva(reparoPaleteNum, reparoFracNum)) {
            const itemReparo = {
                partNumber: pn,
                turno: turnoAtivo,
                tipo: 'reparo',
                timestamp: new Date().toISOString()
            };
            if (reparoPaleteNum !== null) itemReparo.qtdePalete = reparoPaleteNum;
            if (reparoFracNum !== null) itemReparo.fracionado = reparoFracNum;

            dadosEnvio.push({
                ...itemReparo
            });
        }
    });
    if (dadosEnvio.length === 0) {
        mostrarNotificacao('Nenhum dado para enviar!', 'erro');
        return;
    }
    enviarParaAPI(dadosEnvio);
}
async function enviarParaAPI(dados) {
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span class="loading"></span> Enviando...';

    try {
        // Prepara os dados em lote
        const dadosLote = {
            turno: turnoAtivo,
            timestamp: new Date().toISOString(),
            itens: dados.map(item => ({
                partNumber: item.partNumber,
                tipo: item.tipo,
                ...(Number(item.qtdePalete) > 0 ? { qtdePalete: item.qtdePalete } : {}),
                ...(Number(item.fracionado) > 0 ? { fracionado: item.fracionado } : {})
            }))
        };

        console.log('Enviando lote com', dados.length, 'itens');

        // ÃšNICA REQUISIÃ‡ÃƒO com TODOS os itens
        await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosLote) // Envia tudo de uma vez
        });

        // Como Ã© no-cors, nÃ£o podemos ler response
        // Mas podemos assumir que deu certo se nÃ£o deu erro
        
        console.log('âœ… Lote enviado com sucesso!');

        // Mostrar modal de sucesso
        mostrarModalSucesso(dados);

    } catch (error) {
        console.error('âŒ Erro no envio do lote:', error);
        mostrarNotificacao('Erro ao enviar dados. Tente novamente.', 'erro');
    } finally {
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = '<span class="btn-enviar-icon" aria-hidden="true">-></span> ENVIAR INVENTARIO';
    }
}

function mostrarModalSucesso(dados) {
    // Agrupar por tipo para mostrar mais organizado
    const estoque = dados.filter(d => d.tipo === 'estoque');
    const reparo = dados.filter(d => d.tipo === 'reparo');
    
    let resumo = '';
    
    if (estoque.length > 0) {
        resumo += '<strong>ESTOQUE:</strong><br>';
        estoque.forEach(item => {
            const palete = Number(item.qtdePalete) > 0 ? item.qtdePalete : '-';
            const frac = Number(item.fracionado) > 0 ? item.fracionado : '-';
            resumo += `â€¢ ${item.partNumber}: ${palete} palete, ${frac} frac<br>`;
        });
    }
    
    if (reparo.length > 0) {
        resumo += '<br><strong>REPARO:</strong><br>';
        reparo.forEach(item => {
            const palete = Number(item.qtdePalete) > 0 ? item.qtdePalete : '-';
            const frac = Number(item.fracionado) > 0 ? item.fracionado : '-';
            resumo += `â€¢ ${item.partNumber}: ${palete} palete, ${frac} frac<br>`;
        });
    }
    
    resumo += `<br><strong>Total:</strong> ${dados.length} itens`;
    resumo += `<br><strong>Turno:</strong> ${turnoAtivo}Âº`;
    
    resumoEnvio.innerHTML = resumo;
    modalSucesso.classList.add('mostrar');
}

// ============================================
// UTILITÃRIOS
// ============================================
function mostrarNotificacao(mensagem, tipo) {
    notificacao.textContent = mensagem;
    notificacao.className = `notificacao mostrar ${tipo}`;
    
    setTimeout(() => {
        notificacao.classList.remove('mostrar');
    }, 3000);
}

// Scroll para card especÃ­fico
function scrollAteCard(card) {
    const headerOffset = 100;
    const elementPosition = card.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    // Destacar card
    card.classList.add('alerta');
    setTimeout(() => {
        card.classList.remove('alerta');
    }, 2000);
}
