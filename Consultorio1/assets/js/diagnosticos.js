const dadosDiagnosticos = [
  {
    [
        {
          "id": 1,
          "diagnostico": "Risco de insegurança na Terapia via Endovenosa",
          "metas": "Segurança na Terapia via endovenosa, eficaz",
          "intervencoes": [
            "Confirmar prescrição médica",
            "Assegurar que é a medicação correta",
            "Confirmar dose correta",
            "Confirmar a identidade do paciente",
            "Confirmar tempo de infusão correto",
            "Assegurar técnica asséptica",
            "Rotular adequadamente a medicação preparada",
            "Administrar Medicação Intravenosa (ou Endovenosa)",
            "Realizar punção venosa periférica",
            "Documentar o processo de preparação da medicação"
          ],
          "condutas": [
            "Realizar dupla checagem da medicação e paciente antes da administração.",
            "Monitorar sinais de complicações, como infiltração ou flebite.",
            "Verificar acesso venoso antes e após a administração.",
            "Manter técnica asséptica rigorosa durante todo o procedimento.",
            "Registrar qualquer evento adverso ou intercorrência no prontuário.",
            "Educar o paciente sobre possíveis efeitos colaterais e sinais de complicações."
          ]
        },
        {
          "id": 2,
          "diagnostico": "Risco de insegurança na Terapia via Subcutânea",
          "metas": "Segurança na Terapia via subcutânea, eficaz",
          "intervencoes": [
            "Monitorar sinais vitais",
            "Assegurar técnica asséptica",
            "Monitorar os sinais e sintomas de reação alérgica sistêmica e anafilaxia",
            "Orientar paciente quanto aos cuidados com local da administração subcutânea",
            "Aplicar medicação em local prescrito",
            "Documentar o processo"
          ],
          "condutas": [
            "Confirmar prescrição médica antes da administração.",
            "Escolher corretamente o local de aplicação e alternar os locais para evitar lipodistrofia.",
            "Usar técnica de preensão adequada da pele para minimizar dor e absorção irregular.",
            "Observar sinais de hematoma ou reação no local da aplicação.",
            "Registrar a administração e possíveis reações do paciente.",
            "Esclarecer o paciente sobre os cuidados após a aplicação da medicação."
          ]
        },
        {
          "id": 3,
          "diagnostico": "Adesão ao Regime Dietético",
          "metas": "Adesão ao Regime Dietético, eficaz",
          "intervencoes": [
            "Fornecer orientação nutricional personalizada",
            "Envolver um nutricionista para acompanhamento",
            "Monitorar a adesão às recomendações dietéticas"
          ],
          "condutas": [
            "Avaliar a aceitação e dificuldades do paciente quanto ao plano alimentar.",
            "Incentivar a ingestão de alimentos saudáveis e balanceados.",
            "Identificar barreiras e fatores que influenciam a adesão ao regime alimentar.",
            "Acompanhar peso e sinais clínicos que indiquem déficit ou excesso nutricional.",
            "Esclarecer dúvidas do paciente sobre substituições alimentares.",
            "Estimular suporte familiar na adesão ao plano alimentar."
          ]
        },
        {
          "id": 4,
          "diagnostico": "Efeito secundário da medicação, se presente",
          "metas": "Efeito secundário da medicação, ausente",
          "intervencoes": [
            "Interromper medicação endovenosa",
            "Inserir dispositivo de acesso vascular, se necessário",
            "Verificar permeabilidade de acesso venoso",
            "Comunicar ao enfermeiro",
            "Comunicar a equipe médica",
            "Monitorar os sinais e sintomas de reação alérgica sistêmica e anafilaxia",
            "Administrar medicação endovenosa"
          ],
          "condutas": [
            "Identificar sinais e sintomas adversos relacionados à medicação.",
            "Suspender imediatamente a administração em caso de reações graves.",
            "Notificar imediatamente a equipe médica e registrar o evento.",
            "Garantir acesso venoso para administração de possíveis antídotos.",
            "Monitorar os sinais vitais do paciente constantemente.",
            "Esclarecer o paciente sobre os sintomas a serem observados após a medicação."
          ]
        },
        {
          "id": 5,
          "diagnostico": "Risco de extravasamento de medicação",
          "metas": "Risco de extravasamento de medicação, diminuído",
          "intervencoes": [
            "Acompanhar pessoa em seus deslocamentos",
            "Manter vigilância contínua"
          ],
          "condutas": [
            "Observar sinais de infiltração ou extravasamento durante a infusão.",
            "Reavaliar periodicamente o local de punção venosa.",
            "Usar cateteres adequados ao tipo de medicação e veia disponível.",
            "Orientar o paciente para relatar qualquer desconforto no local da infusão.",
            "Em caso de extravasamento, interromper a infusão imediatamente.",
            "Aplicar protocolo específico para extravasamento conforme o medicamento envolvido."
          ]
        },
        {
  },
  // ... outros diagnósticos
];

// Função para carregar os diagnósticos no acordeão
function carregarDiagnosticos() {
    const acordeao = document.getElementById('accordionExample');
    acordeao.innerHTML = ''; 

    dadosDiagnosticos.forEach((item) => {
        const itemAcordeao = document.createElement('div');
        itemAcordeao.className = 'accordion-item';
        itemAcordeao.innerHTML = `
            <h2 class="accordion-header" id="heading${item.id}">
                <button class="accordion-button collapsed" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse${item.id}">
                    ${item.diagnostico}
                </button>
            </h2>
            <div id="collapse${item.id}" 
                 class="accordion-collapse collapse" 
                 aria-labelledby="heading${item.id}" 
                 data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="mb-3">
                        <strong class="text-primary">Meta:</strong>
                        <div class="meta ps-3">${item.metas}</div>
                    </div>
                    
                    <div class="mb-3">
                        <strong class="text-primary">Intervenções:</strong>
                        <div class="intervencoes ps-3">
                            ${item.intervencoes.map(intervencao => `
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="intervencao${item.id}">
                                    <label class="form-check-label">
                                        ${intervencao}
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <strong class="text-primary">Condutas:</strong>
                        <div class="condutas ps-3">
                            ${item.condutas.map(conduta => `
                                <div class="conduta mb-2">${conduta}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        acordeao.appendChild(itemAcordeao);
    });
} 