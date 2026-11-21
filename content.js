"use strict";

const photos = [
  ["Modelo do sistema digestório", "libfile_e23ff09316f481918e1e50cd569c1f12"],
  ["Modelo do pâncreas, duodeno e baço", "libfile_7d96fe35409081918b34913bf2bfb28c"]
];

const topics = {
  digestorio: {
    title: "Sistema digestório",
    source: "Material de aula: Sistema Digestório — Aspectos morfofisiológicos básicos. Prática: fotos dos modelos anatômicos.",
    recall: "Trace o caminho do alimento da boca ao ânus. Em seguida, descreva como a bile e a secreção pancreática chegam ao duodeno.",
    sections: [
      ["Trajeto e órgãos anexos", [
        "Boca → faringe → esôfago → estômago → duodeno → jejuno → íleo → ceco → cólon ascendente → transverso → descendente → sigmoide → reto → canal anal e ânus.",
        "O fígado produz bile e a vesícula biliar a armazena e concentra. O colédoco conduz a bile ao duodeno. A cabeça do pâncreas se encaixa na curva duodenal e sua cauda se aproxima do baço.",
        "Ácinos pancreáticos produzem enzimas digestivas e os ductos contribuem com bicarbonato. As ilhotas liberam hormônios, como insulina e glucagon, para o sangue."
      ]],
      ["Parede e reconhecimento histológico", [
        "Do lúmen para fora: mucosa, submucosa, muscular externa e serosa ou adventícia. A mucosa inclui epitélio, lâmina própria e muscular da mucosa.",
        "O plexo submucoso fica na submucosa e participa do controle da secreção. O plexo mioentérico fica entre as camadas da muscular externa e coordena a motilidade.",
        "Esôfago: epitélio estratificado pavimentoso não queratinizado, resistente ao atrito. Estômago: fossetas e glândulas gástricas, com células parietais que secretam ácido e fator intrínseco e células principais que liberam pepsinogênio.",
        "Intestino delgado: vilosidades e microvilosidades ampliam a superfície de absorção. Duodeno: glândulas submucosas de Brunner. Cólon: criptas, muitas células caliciformes e ausência de vilosidades."
      ]],
      ["Fígado, peritônio e mesentério", [
        "O lóbulo hepático clássico se organiza em torno de uma veia central. Na periferia, o espaço portal reúne ramos da veia porta e da artéria hepática e um ducto biliar.",
        "O fígado é revestido pela cápsula fibrosa de Glisson. O pâncreas tem envoltório conjuntivo delicado e localização predominantemente retroperitoneal.",
        "O peritônio parietal reveste a parede abdominopélvica e o visceral recobre as vísceras. O mesentério sustenta o intestino e conduz vasos sanguíneos, linfáticos e nervos."
      ]]
    ]
  },
  coracao: {
    title: "Coração",
    source: "Material de aula consultado: Histologia do sistema circulatório. Revisão complementar de anatomia e fisiologia cardíacas.",
    recall: "Parta das veias cavas e explique o trajeto de uma hemácia até a aorta. Nomeie as quatro valvas na ordem em que ela as atravessa.",
    sections: [
      ["Câmaras, valvas e circuitos", [
        "Veias cavas → átrio direito → tricúspide → ventrículo direito → valva pulmonar → tronco e artérias pulmonares → pulmões.",
        "Veias pulmonares → átrio esquerdo → mitral → ventrículo esquerdo → valva aórtica → aorta → circulação sistêmica.",
        "As diferenças de pressão abrem e fecham as valvas. Cordas tendíneas e músculos papilares impedem que as valvas atrioventriculares se projetem para os átrios durante a sístole ventricular.",
        "O ventrículo esquerdo tem miocárdio mais espesso porque bombeia para a circulação sistêmica. As artérias coronárias levam sangue ao próprio coração."
      ]],
      ["Parede e condução", [
        "O endocárdio reveste as câmaras. O miocárdio gera força contrátil. O epicárdio corresponde à lâmina visceral do pericárdio seroso.",
        "Cardiomiócitos são estriados, ramificados e geralmente têm um ou dois núcleos centrais. Discos intercalares promovem união mecânica e permitem acoplamento elétrico.",
        "Nó sinoatrial → nó atrioventricular → feixe atrioventricular → ramos → fibras de Purkinje. A sístole ventricular inclui a ejeção e a diástole ventricular inclui o enchimento."
      ]]
    ]
  },
  vasos: {
    title: "Vasos sanguíneos",
    source: "Material de aula: Histologia do sistema circulatório.",
    recall: "Compare artéria, veia e capilar numa lâmina. Explique como uma arteríola pode alterar o fluxo ao variar seu raio.",
    sections: [
      ["Como reconhecer os vasos", [
        "A túnica íntima contém endotélio pavimentoso simples. A média traz músculo liso e componentes elásticos. A adventícia é formada principalmente por tecido conjuntivo.",
        "Artérias conduzem sangue para fora do coração e costumam ter média mais desenvolvida que a de veias comparáveis. Veias conduzem sangue ao coração e muitas possuem válvulas contra o refluxo.",
        "Capilares têm parede formada essencialmente por endotélio e lâmina basal. Sua estrutura delgada favorece trocas com os tecidos."
      ]],
      ["Fluxo, endotélio e músculo liso", [
        "O fluxo depende do gradiente de pressão e da resistência. A resistência aumenta quando o raio cai ou a viscosidade aumenta.",
        "O endotélio atua como barreira seletiva, regula o tônus vascular e participa do controle da coagulação. O músculo liso tem células fusiformes, sem estriações, e controla o diâmetro vascular.",
        "Óxido nítrico relaxa o músculo liso vascular. Bradicinina e histamina podem favorecer vasodilatação. Endotelina-1, angiotensina II, noradrenalina e vasopressina podem promover vasoconstrição."
      ]]
    ]
  },
  linfatico: {
    title: "Sistema linfático",
    source: "Materiais de aula: Fisiologia do sistema linfático e Histologia do sistema circulatório.",
    recall: "Explique como o líquido que sai dos capilares sanguíneos retorna às veias. Diferencie o que é filtrado pelo linfonodo e pelo baço.",
    sections: [
      ["Drenagem e transporte", [
        "O excesso de líquido intersticial entra em capilares linfáticos de fundo cego e passa a ser chamado linfa. Vasos coletores, linfonodos, troncos e ductos compõem o caminho de retorno à circulação venosa.",
        "Válvulas limitam o refluxo. A compressão pelos músculos esqueléticos, os movimentos respiratórios e a contração dos coletores favorecem o fluxo.",
        "O ducto linfático direito drena o quadrante superior direito. O ducto torácico drena o restante do corpo. Capilares linfáticos das vilosidades intestinais absorvem lipídios transportados em quilomícrons."
      ]],
      ["Histologia e órgãos", [
        "Capilares linfáticos têm revestimento endotelial fino. Coletores maiores têm túnicas íntima, média e adventícia que são menos nítidas que as dos vasos sanguíneos comparáveis.",
        "Linfonodos filtram a linfa. O baço filtra o sangue. O timo participa da maturação de linfócitos T.",
        "Em linfonodos e baço, a malha reticular sustenta as células funcionais. No timo, células epiteliais reticulares formam a rede de sustentação do parênquima. Folículos linfoides são ricos em linfócitos B e podem apresentar centro germinativo após ativação."
      ]]
    ]
  }
};

function flashcards(topic, entries) {
  return entries.map(([key, prompt, answer, note]) => ({ id: key, topic, prompt, answer, note }));
}

const deck = [
  ...flashcards("digestorio", [
    ["d-trajeto", "Quais são as três partes do intestino delgado, na ordem do trânsito?", "Duodeno, jejuno e íleo", "O íleo se comunica com o ceco na junção ileocecal."],
    ["d-bile", "Quem produz bile e quem a armazena?", "Fígado e vesícula biliar, respectivamente", "A vesícula também concentra a bile. O colédoco a leva ao duodeno."],
    ["d-camadas", "Quais são as camadas da parede digestiva a partir do lúmen?", "Mucosa, submucosa, muscular externa e serosa ou adventícia", "A serosa inclui mesotélio. A adventícia prende o órgão aos tecidos vizinhos."],
    ["d-mucosa", "Quais são os três componentes da mucosa?", "Epitélio, lâmina própria e muscular da mucosa", "A lâmina própria é conjuntiva. A muscular da mucosa gera movimentos locais."],
    ["d-plexos", "Onde ficam os plexos submucoso e mioentérico?", "Na submucosa e entre as camadas da muscular externa, respectivamente", "O plexo submucoso participa do controle da secreção. O mioentérico coordena a motilidade."],
    ["d-esofago", "Que epitélio protege o esôfago contra o atrito?", "Estratificado pavimentoso não queratinizado", "As múltiplas camadas protegem a superfície durante a passagem do bolo alimentar."],
    ["d-gastricas", "O que secretam células parietais e principais do estômago?", "Parietais: ácido clorídrico e fator intrínseco. Principais: pepsinogênio.", "Em meio ácido, o pepsinogênio é ativado em pepsina."],
    ["d-brunner", "Qual glândula submucosa ajuda a reconhecer o duodeno?", "Glândula de Brunner", "Sua secreção alcalina ajuda a neutralizar o quimo ácido."],
    ["d-vilos", "Como distinguir intestino delgado e cólon numa lâmina?", "Delgado com vilosidades. Cólon com criptas e muitas células caliciformes.", "O muco do cólon auxilia a lubrificação e o órgão também absorve água e eletrólitos."],
    ["d-pancreas", "Quais estruturas representam as funções exócrina e endócrina do pâncreas?", "Ácinos e ductos na porção exócrina. Ilhotas na endócrina.", "A secreção exócrina segue ao duodeno. Os hormônios das ilhotas seguem ao sangue."],
    ["d-portal", "Quais são os três componentes clássicos da tríade portal?", "Ramo da veia porta, ramo da artéria hepática e ducto biliar", "A tríade fica na periferia do lóbulo clássico e a veia central fica no centro."],
    ["d-peritonio", "Onde ficam as lâminas parietal e visceral do peritônio?", "A parietal reveste a parede. A visceral recobre vísceras.", "O mesentério é uma prega peritoneal que sustenta o intestino e conduz vasos e nervos."]
  ]),
  ...flashcards("coracao", [
    ["c-direito", "Qual lado bombeia sangue para os pulmões?", "Lado direito", "O ventrículo direito ejeta através da valva pulmonar."],
    ["c-esquerdo", "Onde desembocam as veias pulmonares?", "Átrio esquerdo", "Levam o sangue dos pulmões de volta ao coração."],
    ["c-av", "Quais são as duas valvas atrioventriculares?", "Tricúspide à direita e mitral à esquerda", "A mitral também é chamada bicúspide."],
    ["c-semilu", "Quais são as duas valvas semilunares?", "Pulmonar e aórtica", "Elas ficam nas saídas dos ventrículos direito e esquerdo."],
    ["c-papilar", "Qual é a função das cordas tendíneas e músculos papilares?", "Impedir o prolapso das valvas atrioventriculares", "São importantes durante a sístole ventricular."],
    ["c-parede", "Quais são as camadas da parede cardíaca, de dentro para fora?", "Endocárdio, miocárdio e epicárdio", "O epicárdio é a lâmina visceral do pericárdio seroso."],
    ["c-discos", "Que estrutura conecta cardiomiócitos e permite a contração coordenada?", "Discos intercalares", "Junções comunicantes permitem a propagação do estímulo elétrico."],
    ["c-sa", "Qual estrutura inicia normalmente o impulso cardíaco?", "Nó sinoatrial", "O estímulo percorre os átrios e segue ao nó atrioventricular."],
    ["c-esforco", "Por que o ventrículo esquerdo tem parede mais espessa?", "Bombeia contra a maior resistência da circulação sistêmica", "O lado direito trabalha com as pressões menores do circuito pulmonar."]
  ]),
  ...flashcards("vasos", [
    ["v-tunicas", "Quais são as túnicas dos vasos maiores?", "Íntima, média e adventícia", "Endotélio, músculo liso e conjuntivo são referências para reconhecê-las."],
    ["v-endotelio", "Que tipo de epitélio constitui o endotélio?", "Pavimentoso simples", "Uma camada de células achatadas reveste o interior dos vasos."],
    ["v-media", "Qual túnica costuma ser mais espessa em artérias do que em veias correspondentes?", "Túnica média", "O músculo liso e os componentes elásticos dão suporte e regulam o calibre."],
    ["v-capilar", "Que estrutura torna o capilar apropriado para trocas?", "Parede delgada com endotélio e lâmina basal", "Ela reduz a distância entre o sangue e os tecidos."],
    ["v-no", "Qual fator endotelial relaxa a musculatura lisa vascular?", "Óxido nítrico", "O relaxamento promove vasodilatação."],
    ["v-raio", "O que ocorre com a resistência vascular quando o raio diminui?", "A resistência aumenta", "Para a mesma diferença de pressão, o fluxo diminui."],
    ["v-valvulas", "O que as válvulas venosas fazem?", "Dificultam o refluxo", "Ajudam o retorno venoso, especialmente em membros."]
  ]),
  ...flashcards("linfatico", [
    ["l-linfa", "Quando o líquido intersticial passa a ser chamado de linfa?", "Ao entrar nos capilares linfáticos", "O excesso de líquido retorna ao sangue pelos ductos linfáticos."],
    ["l-fluxo", "O que favorece o fluxo unidirecional da linfa?", "Válvulas e forças que impulsionam a linfa", "Entre essas forças estão a contração dos coletores e a compressão pelos músculos."],
    ["l-ductos", "Qual ducto recebe a drenagem dos membros inferiores?", "Ducto torácico", "O ducto linfático direito atende o quadrante superior direito."],
    ["l-filtro", "Qual órgão filtra linfa e qual filtra sangue?", "Linfonodos filtram linfa. O baço filtra sangue.", "O baço também participa da resposta imune e da remoção de hemácias envelhecidas."],
    ["l-timo", "Onde amadurecem os linfócitos T?", "Timo", "Sua rede de sustentação do parênquima é formada por células epiteliais reticulares."],
    ["l-germinativo", "Que células predominam nos folículos linfoides?", "Linfócitos B", "Folículos secundários apresentam um centro germinativo."],
    ["l-gordura", "Que vasos das vilosidades absorvem quilomícrons?", "Capilares linfáticos intestinais", "São chamados vasos quilíferos."],
    ["l-edema", "O que pode ocorrer se a drenagem linfática estiver comprometida?", "Acúmulo de líquido intersticial", "A drenagem insuficiente pode contribuir para edema."]
  ])
];

function questions(topic, entries) {
  return entries.map(([key, prompt, answer, distractors, note]) => ({ id: key, topic, prompt, answer, options: [answer, ...distractors], note }));
}

const quiz = [
  ...questions("digestorio", [
    ["qd-piloro", "Depois de passar pelo piloro, onde chega o quimo?", "Duodeno", ["Jejuno", "Íleo", "Ceco"], "O piloro regula a passagem da secreção e do conteúdo gástrico para o duodeno."],
    ["qd-camada", "Em qual camada ficam as glândulas de Brunner?", "Submucosa", ["Lâmina própria", "Muscular externa", "Serosa"], "As glândulas submucosas são um marcador histológico do duodeno."],
    ["qd-plexo", "Qual plexo fica entre as camadas da muscular externa?", "Mioentérico", ["Submucoso", "Portal", "Celíaco"], "O plexo mioentérico participa da coordenação do movimento do tubo digestivo."],
    ["qd-parietal", "Qual célula gástrica libera fator intrínseco?", "Parietal", ["Principal", "Caliciforme", "Enterócito"], "As células parietais também secretam ácido clorídrico."],
    ["qd-colon", "Uma lâmina contém criptas e muitas células caliciformes, sem vilosidades. Qual órgão combina com esse padrão?", "Cólon", ["Duodeno", "Jejuno", "Esôfago"], "Células caliciformes fabricam muco e as criptas são características da mucosa colônica."],
    ["qd-endocrino", "Onde são produzidos os hormônios pancreáticos?", "Ilhotas pancreáticas", ["Ácinos pancreáticos", "Ducto pancreático", "Glândulas de Brunner"], "As ilhotas são a porção endócrina do pâncreas."],
    ["qd-glisson", "A cápsula de Glisson reveste qual órgão?", "Fígado", ["Estômago", "Baço", "Pâncreas"], "Ela é uma cápsula de tecido conjuntivo fibroso."],
    ["qd-mesenterio", "Qual estrutura suspende alças intestinais e conduz seus vasos e nervos?", "Mesentério", ["Ducto colédoco", "Muscular da mucosa", "Orofaringe"], "O mesentério liga o intestino à parede posterior e permite a passagem dessas estruturas."]
  ]),
  ...questions("coracao", [
    ["qc-tricuspide", "Qual valva o sangue atravessa do átrio direito ao ventrículo direito?", "Tricúspide", ["Mitral", "Aórtica", "Pulmonar"], "A tricúspide é a valva atrioventricular direita."],
    ["qc-pulmonar", "Que vaso leva sangue do ventrículo direito em direção aos pulmões?", "Tronco pulmonar", ["Aorta", "Veia cava superior", "Veia pulmonar"], "O tronco pulmonar divide-se nas artérias pulmonares."],
    ["qc-veias", "Qual câmara recebe o sangue que chega pelas veias pulmonares?", "Átrio esquerdo", ["Átrio direito", "Ventrículo direito", "Ventrículo esquerdo"], "Do átrio esquerdo ele segue pela valva mitral."],
    ["qc-parede", "Qual camada cardíaca gera a força para o bombeamento?", "Miocárdio", ["Endocárdio", "Epicárdio", "Pericárdio fibroso"], "Ela é composta principalmente de músculo estriado cardíaco."],
    ["qc-discos", "Uma lâmina mostra fibras estriadas e ramificadas com discos intercalares. Qual tecido aparece?", "Músculo estriado cardíaco", ["Músculo liso vascular", "Músculo estriado esquelético", "Tecido conjuntivo denso"], "Os discos intercalares unem os cardiomiócitos e facilitam a coordenação da contração."],
    ["qc-conducao", "Depois de atravessar os átrios, onde o impulso sofre atraso antes de alcançar os ventrículos?", "Nó atrioventricular", ["Nó sinoatrial", "Fibras de Purkinje", "Ramo esquerdo do feixe"], "O atraso ajuda a completar o enchimento ventricular antes da contração."]
  ]),
  ...questions("vasos", [
    ["qv-intima", "Qual túnica fica junto ao lúmen?", "Íntima", ["Média", "Adventícia", "Serosa"], "O endotélio é o componente da íntima diretamente em contato com o sangue."],
    ["qv-media", "Em qual túnica predomina músculo liso nas artérias musculares?", "Média", ["Íntima", "Adventícia", "Mesotélio"], "A contração dessa musculatura pode reduzir o calibre."],
    ["qv-fluxo", "Mantidas as demais condições, o que aumenta o fluxo?", "Aumentar o raio do vaso", ["Aumentar a viscosidade", "Reduzir a diferença de pressão", "Reduzir o raio do vaso"], "Com maior raio, a resistência ao fluxo diminui."],
    ["qv-no", "Qual substância produzida pelo endotélio é vasodilatadora?", "Óxido nítrico", ["Endotelina-1", "Angiotensina II", "Noradrenalina"], "O óxido nítrico promove relaxamento da musculatura lisa vascular."],
    ["qv-valvula", "Qual achado favorece identificar uma veia de membro?", "Válvulas em direção ao fluxo", ["Parede formada só de endotélio", "Média com numerosas lâminas elásticas", "Vilosidades na luz"], "Válvulas venosas limitam o refluxo."],
    ["qv-capilar", "Que tipo de vaso possui parede apropriada para troca direta com os tecidos?", "Capilar", ["Artéria elástica", "Veia de grande calibre", "Artéria muscular"], "A parede capilar delgada favorece as trocas."]
  ]),
  ...questions("linfatico", [
    ["ql-retorno", "Onde a linfa retorna à circulação sanguínea?", "Na circulação venosa", ["Na aorta", "Nas artérias pulmonares", "Na cavidade do ventrículo direito"], "Os ductos desembocam nas junções entre jugulares internas e subclávias."],
    ["ql-ducto", "Qual é o principal ducto da drenagem linfática do abdome?", "Ducto torácico", ["Ducto linfático direito", "Ducto pancreático principal", "Colédoco"], "O ducto torácico drena o abdome, os membros inferiores e a porção superior esquerda."],
    ["ql-filtro", "Qual órgão filtra o sangue e retira parte das hemácias envelhecidas?", "Baço", ["Linfonodo", "Timo", "Tonsila"], "O baço participa da vigilância imune do sangue."],
    ["ql-timo", "Em qual órgão predominam células epiteliais reticulares na sustentação do parênquima?", "Timo", ["Baço", "Linfonodo", "Fígado"], "As células epiteliais reticulares participam do ambiente de maturação das células T."],
    ["ql-vaso", "Como os capilares linfáticos iniciais se organizam nos tecidos?", "Começam em fundo cego", ["Nascem diretamente do ventrículo", "Ligam duas arteríolas", "Têm parede muscular espessa"], "Sua parede delgada permite a entrada de líquido intersticial."],
    ["ql-foliculo", "Qual tipo celular predomina em um folículo linfoide?", "Linfócito B", ["Hemácia", "Cardiomiócito", "Célula parietal"], "O centro germinativo é típico de um folículo secundário."]
  ])
];
