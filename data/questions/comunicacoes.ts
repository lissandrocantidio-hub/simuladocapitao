import { Question } from '../../types/questions'

export const comunicacoesQuestions: Question[] = [
  {
    id: 2022036,
    subject: 'comunicacoes',
    topic: 'EPIRB',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O que Ã© o â€œEPIRBâ€',
    options: {
      A: 'AuxÃ­lio Ã  navegaÃ§Ã£o.',
      B: 'Baliza radioindicadora de posiÃ§Ã£o em emergÃªncia.',
      C: 'SÃ­mbolo representado pela Carta nÂ° 12000.',
      D: 'Boia Lanby.',
      E: 'SatÃ©lite geoestacionÃ¡rio.',
    },
    correct: 'B',
    explanation:
      'EPIRB Ã© a sigla para Emergency Position Indicating Radio Beacon, uma baliza de emergÃªncia destinada a transmitir a posiÃ§Ã£o da embarcaÃ§Ã£o ou do sinistro para fins de busca e salvamento. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 2022037,
    subject: 'comunicacoes',
    topic: 'GMDSS / SART',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Equipamento do GMDSS para localizaÃ§Ã£o, projetado para operar com radares.',
    options: {
      A: 'ARPA.',
      B: 'SART.',
      C: 'EPIRB.',
      D: 'NAVTEX.',
      E: 'GPS.',
    },
    correct: 'B',
    explanation:
      'GMDSS significa Sistema Global de Socorro e Seguranca Maritima. Dentro dele, o SART e o Search and Rescue Radar Transponder, isto e, um transponder de radar para busca e salvamento. Quando interrogado por radar, ele gera uma resposta caracteristica na tela e ajuda a localizar a embarcação ou balsa em perigo. Por isso, a alternativa correta e a B.',
  },
  {
    id: 20252022,
    subject: 'comunicacoes',
    topic: 'EPIRB',
    year: 2025,
    exam: 'CPA-II 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Como Ã© chamado um dispositivo que Ã© ativado automaticamente apÃ³s um naufrÃ¡gio e emite uma mensagem que Ã© captada pelos satÃ©lites do GMDSS',
    options: {
      A: 'SART.',
      B: 'EPIRB.',
      C: 'INTERCO.',
      D: 'NAVTEX.',
      E: 'SAFETYNET.',
    },
    correct: 'B',
    explanation:
      'O EPIRB Ã© a baliza de emergÃªncia que transmite alerta de socorro, podendo ser ativada automaticamente em situaÃ§Ãµes de sinistro. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20252023,
    subject: 'comunicacoes',
    topic: 'GMDSS / SAFETYNET',
    year: 2025,
    exam: 'CPA-II 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Sobre o GMDSS (Sistema Global de Socorro e SeguranÃ§a MarÃ­tima), assinale a alternativa correta.',
    options: {
      A: 'A Ãrea A3 estÃ¡ situada alÃ©m das Ãreas A1 e A2, e dentro do alcance de rÃ¡dios MF das estaÃ§Ãµes costeiras.',
      B: 'A Ãrea A1 abrange as regiÃµes portuÃ¡rias, sendo as regiÃµes costeiras abrangidas pela Ãrea A2.',
      C: 'Na jurisdiÃ§Ã£o do Brasil nÃ£o existe a Ãrea A3.',
      D: 'O serviÃ§o SAFETYNET atende Ã  Ãrea A3.',
      E: 'A NAVAREA IV Ã© de responsabilidade do Brasil.',
    },
    correct: 'D',
    explanation:
      'GMDSS significa Sistema Global de Socorro e Seguranca Maritima. MSI significa informacoes de segurança maritima. O SAFETYNET e um servico via satelite usado para distribuir essas informacoes, inclusive na Area A3 do GMDSS. As demais alternativas confundem a definicao das áreas de mar ou das responsabilidades. Por isso, a alternativa correta e a D.',
  },
  {
    id: 20252024,
    subject: 'comunicacoes',
    topic: 'HF / socorro e alcance',
    year: 2025,
    exam: 'CPA-II 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O CapitÃ£o-Amador experiente deve ter disponÃ­vel a bordo, quando em travessias transoceÃ¢nicas, um equipamento de radiocomunicaÃ§Ã£o em Alta FrequÃªncia (HF). Sobre esse recurso, assinale a alternativa correta.\n\nI - As transmissÃµes e recepÃ§Ãµes em HF sÃ£o pouco afetadas pela variaÃ§Ã£o da ionosfera.\nII - Os equipamentos em HF nÃ£o possuem Digital Selective Call (DSC).\nIII - A frequÃªncia de socorro no AtlÃ¢ntico Sul Ã© 4.125 kHz.\nIV - O alcance de uma comunicaÃ§Ã£o rÃ¡dio em HF pode chegar a 6.000 milhas nÃ¡uticas.',
    options: {
      A: 'Somente as afirmativas I e II estÃ£o corretas.',
      B: 'Somente as afirmativas I, II e IV estÃ£o corretas.',
      C: 'Somente as afirmativas II e III estÃ£o corretas.',
      D: 'Somente as afirmativas II, III e IV estÃ£o corretas.',
      E: 'Somente as afirmativas III e IV estÃ£o corretas.',
    },
    correct: 'E',
    explanation:
      'HF significa alta frequencia, usada em comunicacoes de longo alcance. DSC significa Digital Selective Call, ou chamada seletiva digital. Comunicacoes em HF sofrem influencia importante da ionosfera, e equipamentos modernos podem operar com DSC. Ja a frequencia de socorro de 4.125 kHz e o grande alcance potencial do HF estao corretos. Por isso, a alternativa correta e a E.',
  },
  {
    id: 20252025,
    subject: 'comunicacoes',
    topic: 'socorro no mar / obrigacao de assistencia',
    year: 2025,
    exam: 'CPA-II 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Durante a participacao na REFENO, um capitao-amador ouviu no VHF de bordo, no canal de escuta permanente, uma mensagem de MAYDAY informando naufragio nas proximidades de Fernando de Noronha. Em seguida, identificou na área indicada um facho de luz vermelha de forte intensidade, sendo sua embarcação a única próxima da posição informada. Quanto ao dever de prestar assistencia a quem estiver em perigo no mar, assinale a alternativa correta.',
    options: {
      A: 'Por estar em competicao, o capitao nao tera o dever de atender ao chamado.',
      B: 'Qualquer embarcação que preste auxilio podera cobrar, desde logo, os eventuais custos do socorro.',
      C: 'O capitao devera atender prontamente ao chamado, por se tratar de obrigacao legal de prestar assistencia.',
      D: 'O auxilio inicial cabera, necessariamente, aos navios de socorro da Marinha do Brasil, ainda que estejam mais distantes.',
      E: 'O capitao podera prosseguir em sua derrota, pois a mensagem recebida caracteriza apenas situação de urgencia.',
    },
    correct: 'C',
    explanation:
      'O dever de prestar assistencia a pessoas em perigo no mar prevalece sobre a conveniencia da viagem ou da competicao. A expressao MAYDAY caracteriza mensagem de socorro, e nao simples urgencia. Por isso, a conduta correta e atender prontamente ao chamado, como afirma a alternativa C.',
  },
  {
    id: 20252029,
    subject: 'comunicacoes',
    topic: 'VHF / canais preferenciais',
    year: 2025,
    exam: 'CPA-II 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Quanto ao uso do rÃ¡dio VHF de bordo, assinale a alternativa incorreta, no que se refere ao uso preferencial dos canais disponÃ­veis.',
    options: {
      A: 'O canal 71 Ã© dedicado ao uso do Digital Selective Call (DSC) em VHF.',
      B: 'Deve ser feita escuta permanente no canal 16.',
      C: 'Boletins meteorolÃ³gicos e escuta permanente pelos iates clubes e marinas sÃ£o feitos no canal 68.',
      D: 'O canal 09 Ã© a primeira opÃ§Ã£o em substituiÃ§Ã£o ao canal 16 em chamadas de socorro, urgÃªncia e seguranÃ§a.',
      E: 'O canal 13 Ã© usado em trÃ¡fego de seguranÃ§a.',
    },
    correct: 'A',
    explanation:
      'VHF e a faixa de rádio de muito alta frequencia usada amplamente na navegação costeira. DSC significa Digital Selective Call, ou chamada seletiva digital. No VHF maritimo, o DSC usa o canal 70, nao o 71. Por isso, a alternativa A e a incorreta e, portanto, a resposta certa da questao.',
  },
  {
    id: 20242019,
    subject: 'comunicacoes',
    topic: 'INMARSAT-C',
    year: 2024,
    exam: 'CPA-II 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Nas comunicaÃ§Ãµes por satÃ©lite, a SES (Ship Earth Station) tem como principal equipamento para mensagens de socorro (distress) e seguranÃ§a (safety) o INMARSAT-C. O que permite que esse equipamento opere mesmo que a embarcaÃ§Ã£o esteja bem adernada',
    options: {
      A: 'Gerar alerta automÃ¡tico de ECG (chamada em grupo concentrada).',
      B: 'Transmitir em alta velocidade (6.000 bits por segundo).',
      C: 'Operar com 04 satÃ©lites geoestacionÃ¡rios.',
      D: 'As caracterÃ­sticas da antena onidirecional.',
      E: 'Transmitir em duas direÃ§Ãµes (two-way).',
    },
    correct: 'D',
    explanation:
      'SES significa Ship Earth Station, isto e, a estacao terrena de bordo. O INMARSAT-C e um terminal satelital de mensagens do sistema Inmarsat. Nesse caso, a operacao continua possível mesmo com bastante adernamento porque a antena e praticamente onidirecional e nao exige apontamento fino. Por isso, a alternativa correta e a D.',
  },
  {
    id: 20242020,
    subject: 'comunicacoes',
    topic: 'EPIRB 406 MHz',
    year: 2024,
    exam: 'CPA-II 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'As EPIRBs de 406 MHz, uma vez ativadas, emitem continuamente alertas de socorro em radiofrequÃªncia para os satÃ©lites do sistema COSPAS-SARSAT por pelo menos:',
    options: {
      A: '24 horas, podendo chegar a 100 horas em regiÃµes tropicais.',
      B: '48 horas, podendo chegar a 100 horas em regiÃµes tropicais.',
      C: '72 horas, podendo chegar a 200 horas em regiÃµes tropicais.',
      D: '96 horas, podendo chegar a 200 horas em regiÃµes tropicais.',
      E: '120 horas, podendo chegar a 200 horas em regiÃµes tropicais.',
    },
    correct: 'B',
    explanation:
      'EPIRB significa Emergency Position Indicating Radio Beacon, uma baliza de emergência que transmite alerta de socorro. Nas EPIRBs de 406 MHz, a autonomia mínima deve garantir transmissao continua por pelo menos 48 horas. Por isso, a alternativa correta e a B.',
  },
  {
    id: 20242021,
    subject: 'comunicacoes',
    topic: 'SART',
    year: 2024,
    exam: 'CPA-II 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Analise as afirmativas abaixo sobre o transponder SART, principal equipamento para localizaÃ§Ã£o de embarcaÃ§Ã£o em perigo ou balsa salva-vidas na Ã¡rea do sinistro, e assinale a alternativa correta.\n\nI - opera na faixa de frequÃªncia de 9 GHz (9.200 a 9.500 MHz).\nII - gera uma sÃ©rie de sinais de resposta quando interrogado por um radar da banda S (10 cm).\nIII - o sinal de resposta gera na tela do radar uma linha com 10 pontos (blip code) para fora da posiÃ§Ã£o do transponder ao longo da linha de marcaÃ§Ã£o.\nIV - em embarcaÃ§Ãµes de sobrevivÃªncia, a IMO recomenda que seja instalado a, no mÃ­nimo, 1 metro acima do nÃ­vel do mar.',
    options: {
      A: 'Apenas as afirmativas I e IV estÃ£o corretas.',
      B: 'Apenas as afirmativas II e III estÃ£o corretas.',
      C: 'Apenas as afirmativas I, III e IV estÃ£o corretas.',
      D: 'Apenas as afirmativas II e IV estÃ£o corretas.',
      E: 'Apenas as afirmativas I, II e III estÃ£o corretas.',
    },
    correct: 'A',
    explanation:
      'SART significa Search and Rescue Radar Transponder. Ele responde a radares da banda X, e nao da banda S, por isso a afirmativa II esta errada. A faixa de 9 GHz esta correta, assim como a recomendacao de instalacao elevada na embarcação de sobrevivencia para melhorar a deteccao. Por isso, a alternativa correta e a A.',
  },
  {
    id: 20242022,
    subject: 'comunicacoes',
    topic: 'GMDSS / Ã¡reas de mar',
    year: 2024,
    exam: 'CPA-II 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Correlacione a coluna da esquerda com a da direita e marque a alternativa correta, quanto Ã s Ã¡reas de mar e equipamentos do Sistema Global MarÃ­timo de Socorro e SeguranÃ§a (GMDSS).\n\n(01) Ãrea A1\n(02) Ãrea A2\n(03) Ãrea A3\n(04) IRIDIUM\n(05) SAFETYNET\n(06) METAREA V\n(07) NAVTEX\n(08) NAVAREA VI\n(09) METAREA IV\n(10) NAVAREA V\n\nItens a correlacionar:\n- Atende as Ã¡reas A1 e A2.\n- Atende a Ã¡rea A3.\n- Ãrea de responsabilidade do Brasil quando se trata de Aviso aos Navegantes.\n- Ãrea de responsabilidade do Brasil quando se trata de meteorologia.\n- Ãrea dentro da cobertura radiotelefÃ´nica com no mÃ­nimo 1 estaÃ§Ã£o costeira em MF e alerta permanente de DSC em MF.\n- Utiliza o sistema INMARSAT de comunicaÃ§Ãµes.\n- Utiliza satÃ©lites em Ã³rbitas baixas (LEO), possibilitando comunicaÃ§Ãµes satelitais com cobertura global.\n- Ãrea dentro da cobertura dos satÃ©lites geoestacionÃ¡rios do sistema INMARSAT, entre as latitudes de 70Â°S e o alcance das estaÃ§Ãµes costeiras em HF.\n- Utiliza comunicaÃ§Ãµes radiotelex de impressÃ£o direta em frequÃªncia fixa (NBDP).',
    options: {
      A: '07 - 07 - 09 - 09 - 01 - 07 - 01 - 03 - 04',
      B: '04 - 05 - 08 - 06 - 02 - 05 - 04 - 01 - 04',
      C: '04 - 07 - 10 - 06 - 03 - 07 - 01 - 02 - 07',
      D: '07 - 05 - 10 - 06 - 02 - 05 - 04 - 03 - 07',
      E: '07 - 04 - 08 - 09 - 03 - 04 - 07 - 02 - 05',
    },
    correct: 'D',
    explanation:
      'A correlaÃ§Ã£o correta Ã©: NAVTEX atende Ã s Ã¡reas A1 e A2; SAFETYNET usa o sistema INMARSAT; o Brasil Ã© responsÃ¡vel pela NAVAREA V e pela METAREA VI no contexto do enunciado; a Ãrea A2 Ã© a de cobertura MF com alerta DSC permanente; IRIDIUM usa satÃ©lites LEO; e a Ãrea A3 corresponde Ã  cobertura INMARSAT fora da A1/A2. Essa combinaÃ§Ã£o corresponde Ã  alternativa D.',
  },
  {
    id: 20242023,
    subject: 'comunicacoes',
    topic: 'procedimentos radiotelefÃ´nicos / urgÃªncia',
    year: 2024,
    exam: 'CPA-II 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'De acordo com os procedimentos radiotelefÃ´nicos, a estaÃ§Ã£o que transmite uma mensagem muito urgente concernente Ã  seguranÃ§a de uma embarcaÃ§Ã£o ou de uma pessoa deve iniciar a transmissÃ£o por:',
    options: {
      A: 'SÃ‰CURITÃ‰, SÃ‰CURITÃ‰, SÃ‰CURITÃ‰.',
      B: 'AVEGANTE, AVEGANTE, AVEGANTE.',
      C: 'MÃŠIDEI, MÃŠIDEI, MÃŠIDEI.',
      D: 'INTERCO, INTERCO, INTERCO.',
      E: 'PAN, PAN, PAN.',
    },
    correct: 'E',
    explanation:
      'A chamada de urgÃªncia em radiotelefonia marÃ­tima usa o sinal PAN PAN. â€œMAYDAYâ€ Ã© reservado ao socorro, e â€œSÃ‰CURITÃ‰â€ a mensagens de seguranÃ§a. Por isso, a alternativa correta Ã© a E.',
  },
  {
    id: 20232017,
    subject: 'comunicacoes',
    topic: 'HF / frequÃªncia de socorro',
    year: 2023,
    exam: 'CPA-II 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Durante um cruzeiro no oceano AtlÃ¢ntico Sul, o capitÃ£o-amador recebeu em seu equipamento receptor HF um â€œdistressâ€ no DSC. Para trafegar por voz, prontamente ajustou a escuta de radiotelefonia na frequÃªncia de:',
    options: {
      A: 'canal 16 do VHF.',
      B: '2.182 kHz.',
      C: '4.125 kHz.',
      D: '4.382 kHz.',
      E: '156,8 MHz.',
    },
    correct: 'C',
    explanation:
      'Na faixa de HF/MF marÃ­tima, a frequÃªncia de 4.125 kHz Ã© usada para radiotelefonia de socorro em HF, compatÃ­vel com o contexto da questÃ£o. Por isso, a alternativa correta Ã© a C.',
  },
  {
    id: 20232026,
    subject: 'comunicacoes',
    topic: 'GMDSS / correlação de áreas e serviços',
    year: 2023,
    exam: 'CPA-II 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'De acordo com o Sistema Global Marítimo de Socorro e Segurança (GMDSS), correlacione a coluna da esquerda com a da direita e marque a alternativa correta.\n\n(1) Área A1\n(2) SISTRAM\n(3) NAVAREA V\n(4) RENEC\n(5) SAFETYNET\n(6) METAREA IV\n(7) Área A2\n(8) CISMAR\n(9) NAVTEX\n(10) Rede costeira de apoio ao iatismo\n\nItens a correlacionar:\n- Atende à Área A3 e utiliza o sistema INMARSAT de comunicações.\n- Órgão da MB responsável pelo acompanhamento do tráfego marítimo na área SAR brasileira.\n- Área marítima brasileira de responsabilidade da DHN de disseminação das MSI.\n- Situada dentro da cobertura radiotelefônica com uma estação costeira em MF, em que um permanente alerta DSC em MF esteja disponível.\n- Presta serviço de radiocomunicações terra-embarcação-terra, em apoio à segurança da navegação e à salvaguarda da vida humana no mar.',
    options: {
      A: '9 - 4 - 6 - 1 - 4',
      B: '2 - 2 - 3 - 6 - 2',
      C: '1 - 8 - 1 - 3 - 10',
      D: '5 - 8 - 3 - 7 - 4',
      E: '3 - 2 - 6 - 1 - 10',
    },
    correct: 'D',
    explanation:
      'SAFETYNET é o serviço de MSI via INMARSAT para a Área A3; CISMAR é o órgão da MB ligado ao acompanhamento do tráfego na área SAR brasileira; NAVAREA V é a área brasileira de avisos aos navegantes; a Área A2 é a de cobertura MF com DSC; e a RENEC presta apoio de radiocomunicações terra-embarcação-terra ao iatismo. Essa sequência corresponde à alternativa D.',
  },
  {
    id: 20232027,
    subject: 'comunicacoes',
    topic: 'radiotelefonia / urgencia',
    year: 2023,
    exam: 'CPA-II 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'De acordo com os procedimentos radiotelefonicos, uma estacao que tem uma mensagem urgente concernente a segurança de uma embarcação, aeronave ou pessoa deve iniciar a transmissao por:',
    options: {
      A: 'MAYDAY, MAYDAY, MAYDAY.',
      B: 'SECURITE, SECURITE, SECURITE.',
      C: 'INTERCO, INTERCO, INTERCO.',
      D: 'SOS, SOS, SOS.',
      E: 'PAN, PAN, PAN.',
    },
    correct: 'E',
    explanation:
      'Mensagem urgente, mas nao de socorro imediato, e precedida pelo sinal PAN PAN. Por isso, a alternativa correta e a E.',
  },
  {
    id: 20232028,
    subject: 'comunicacoes',
    topic: 'SART / resposta em radar',
    year: 2023,
    exam: 'CPA-II 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Durante um cruzeiro no AtlÃ¢ntico Sul, o capitÃ£o-amador verificou na tela do radar banda X, na proa da embarcaÃ§Ã£o, a cerca de 5 milhas nÃ¡uticas, uma linha com 12 pontos (â€œblip codeâ€) que depois se expandiu em arcos concÃªntricos e, posteriormente, cÃ­rculos. Ele percebeu que se tratava de uma embarcaÃ§Ã£o ou balsa salva-vidas em perigo, enviando um sinal de resposta de um:',
    options: {
      A: 'EPIRB.',
      B: 'SART.',
      C: 'COSPAS-SARSAT.',
      D: 'LEOSAR.',
      E: 'LEOLUT.',
    },
    correct: 'B',
    explanation:
      'A linha de pontos que se abre em arcos e depois cÃ­rculos na tela do radar Ã© a assinatura tÃ­pica de um SART interrogado por radar de banda X. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20232029,
    subject: 'comunicacoes',
    topic: 'NAVTEX / DSC / sinais de socorro',
    year: 2023,
    exam: 'CPA-II 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Analise as afirmativas abaixo e assinale a alternativa correta.\n\nI - Atualmente nenhuma estaÃ§Ã£o costeira brasileira transmite mensagens em NAVTEX.\nII - Os rÃ¡dios VHF sÃ£o equipados com o recurso de Chamada Seletiva Digital (DSC), no canal 77.\nIII - Avisos temporÃ¡rios, divulgados por meio dos Avisos aos Navegantes, antecipam informaÃ§Ãµes de correÃ§Ãµes que, posteriormente, serÃ£o objeto de Avisos permanentes.\nIV - Foguetes ou granadas lanÃ§ando estrelas encarnadas, disparados um de cada vez em intervalos curtos, indicam perigo e necessidade de auxÃ­lio imediato.',
    options: {
      A: 'Apenas as afirmativas I e IV estÃ£o corretas.',
      B: 'Apenas as afirmativas II e III estÃ£o corretas.',
      C: 'Apenas as afirmativas I, III e IV estÃ£o corretas.',
      D: 'Apenas as afirmativas II e IV estÃ£o corretas.',
      E: 'Apenas as afirmativas I, II e III estÃ£o corretas.',
    },
    correct: 'A',
    explanation:
      'A afirmativa I Ã© aceita como correta no contexto da prova, e a IV tambÃ©m estÃ¡ correta porque foguetes ou granadas lanÃ§ando estrelas vermelhas, em intervalos curtos, sÃ£o sinais internacionais de socorro. A II estÃ¡ errada porque o DSC em VHF usa o canal 70, nÃ£o o 77. A III estÃ¡ incorreta porque avisos temporÃ¡rios nÃ£o sÃ£o, por definiÃ§Ã£o, simples antecipaÃ§Ãµes de futuros avisos permanentes. Por isso, a alternativa correta Ã© a A.',
  },
  {
    id: 20222017,
    subject: 'comunicacoes',
    topic: 'EPIRB 406 MHz',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Quanto Ã s â€œEmergency Position Indicating Radio Beaconâ€ (EPIRB), assinale a alternativa correta.',
    options: {
      A: 'Pertencem ao sistema GPS e sÃ£o capazes de informar com precisÃ£o a posiÃ§Ã£o de distress aos satÃ©lites do sistema.',
      B: 'SÃ£o o principal recurso do GMDSS para a localizaÃ§Ã£o por aeronaves e navios de busca e salvamento.',
      C: 'SÃ£o rastreÃ¡veis por radares da banda â€œSâ€ na faixa de 5 Mhz.',
      D: 'SÃ£o transmissores de emergÃªncia e permitem a comunicaÃ§Ã£o por voz, via sistema INMARSAT.',
      E: 'Operam na frequÃªncia de 406 Mhz e se comunicam com os satÃ©lites do sistema COSPAS-SARSAT.',
    },
    correct: 'E',
    explanation:
      'As EPIRBs modernas de emergÃªncia operam em 406 MHz e transmitem alertas ao sistema COSPAS-SARSAT. Por isso, a alternativa correta Ã© a E.',
  },
  {
    id: 20222018,
    subject: 'comunicacoes',
    topic: 'GMDSS / Ã¡rea A2',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual(is) faixa(s) de frequÃªncia de comunicaÃ§Ã£o rÃ¡dio (fonia e DSC) o GMDSS (Global Maritime Distress and Safety System) estabelece como obrigatÃ³ria para uma embarcaÃ§Ã£o que navegarÃ¡ no limite de 150 milhas nÃ¡uticas (Ã¡rea A2)',
    options: {
      A: 'Somente VHF.',
      B: 'VHF e HF.',
      C: 'VHF e MF.',
      D: 'Somente MF.',
      E: 'HF e MF.',
    },
    correct: 'C',
    explanation:
      'Na Ãrea A2, o GMDSS exige cobertura alÃ©m da Ãrea A1, com VHF e MF/DSC. Por isso, a alternativa correta Ã© a C.',
  },
  {
    id: 20222019,
    subject: 'comunicacoes',
    topic: 'CIS / chamada por grupos de letras',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Ao iniciar uma chamada em radiotelefonia utilizando GRUPOS DE LETRAS do CÃ³digo Internacional de Sinais (CIS), qual a palavra padrÃ£o deve ser pronunciada',
    options: {
      A: 'CIS',
      B: 'CODE',
      C: 'DE',
      D: 'INTERCO',
      E: 'GROUP',
    },
    correct: 'D',
    explanation:
      'Em portuguÃªs, a palavra padrÃ£o usada na abertura de chamada com grupos do CÃ³digo Internacional de Sinais Ã© â€œINTERCOâ€. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20222020,
    subject: 'comunicacoes',
    topic: 'VTS',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Sobre os ServiÃ§os de TrÃ¡fego de EmbarcaÃ§Ãµes (Vessel Traffic Service â€“ VTS), assinale a alternativa correta:',
    options: {
      A: 'O AIS nÃ£o possui as mesmas vulnerabilidades das comunicaÃ§Ãµes em VHF.',
      B: 'Todas as embarcaÃ§Ãµes que operam na Ã¡rea de atuaÃ§Ã£o do VTS deverÃ£o possuir AIS por forÃ§a das normas portuÃ¡rias.',
      C: 'RadiogoniÃ´metros (Radio Detection Finder â€“ RDF) nÃ£o sÃ£o ferramentas essenciais de auxÃ­lio Ã  navegaÃ§Ã£o de um VTS.',
      D: 'A autoridade de um ServiÃ§o de OrganizaÃ§Ã£o de TrÃ¡fego no VTS (VTS-TOS) nÃ£o se sobrepÃµe Ã  competÃªncia de um Comandante de embarcaÃ§Ã£o, pela seguranÃ§a de seu navio.',
      E: 'As Atalaias dos serviÃ§os de praticagem, se estiverem devidamente equipadas como um VTS, tÃªm autorizaÃ§Ã£o para interferir no trÃ¡fego de embarcaÃ§Ãµes de determinados portos no Brasil.',
    },
    correct: 'D',
    explanation:
      'A responsabilidade primÃ¡ria pela seguranÃ§a do navio permanece com o comandante, ainda que exista organizaÃ§Ã£o de trÃ¡fego por VTS. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20222021,
    subject: 'comunicacoes',
    topic: 'NAVTEX',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um CapitÃ£o Amador brasileiro, ao navegar nas proximidades das Ilhas Virgens BritÃ¢nicas em seu Yatch, poderÃ¡ utilizar um equipamento dedicado ao recebimento de boletins meteorolÃ³gicos, via telegrafia, com impressÃ£o direta em banda estreita, no padrÃ£o MSI (Maritime Safety Information) e que usa a frequÃªncia de 518 kHz. Qual o nome do serviÃ§o em que esse equipamento opera',
    options: {
      A: 'MMSI.',
      B: 'LUT.',
      C: 'SafetyNET.',
      D: 'WMO.',
      E: 'NAVTEX.',
    },
    correct: 'E',
    explanation:
      'O serviÃ§o MSI em 518 kHz com impressÃ£o direta em banda estreita Ã© o NAVTEX. Por isso, a alternativa correta Ã© a E.',
  },
]



