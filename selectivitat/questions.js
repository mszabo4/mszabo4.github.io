const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `Després d’una tempesta, es recullen grans quantitats de fulles i boles (fruits secs) del plataner. 
               En lloc de llençar-les, es proposa aprofitar-les com a biomassa per generar energia tèrmica 
               i escalfar aigua en un petit sistema hidràulic experimental al taller de tecnologia.
               
               <br><br><strong>Dades conegudes:</strong><br>
               \\(m_b = 2 \\, \\text{kg}\\) (massa de biomassa)<br>
               \\(PC = 15\\,000 \\, \\text{kJ/kg}\\) (poder calorífic del material sec)<br>
               \\(c = 4{,}18 \\, \\text{kJ/(kg·°C)}\\) (calor específic de l’aigua)<br>
               \\(m_a = 10 \\, \\text{kg}\\) (massa d’aigua)<br>
               \\(T_i = 20 °C\\), \\(T_f = 80 °C\\)<br>
               \\(\\eta = 35\\%\\) (rendiment de la combustió)<br>
               \\(h = 3 \\, \\text{m}\\) (alçada de caiguda)<br>
               \\(\\rho = 1000 \\, \\text{kg/m}^3\\)<br>
               
               Determineu:
               <br><strong>a)</strong> L’energia necessària per escalfar l’aigua.
               <br><strong>b)</strong> L’energia útil obtinguda de la biomassa.
               <br><strong>c)</strong> El cabal volumètric d’aigua que podria moure una turbina amb aquesta energia.
               <br><strong>d)</strong> La potència hidràulica que es podria obtenir.
               <br><strong>e)</strong> Expliqueu breument com aquest experiment mostra la conversió d’energia calorífica en energia mecànica.
               <br><br>
               <img src="ruta/a/imatgePlataner.jpg" alt="Biomassa de plataner utilitzada com a combustible">`,  
        correctAnswer: "",  
        steps: `
            <strong>a) Energia necessària per escalfar l’aigua:</strong>
            \\[
            Q = m_a \\cdot c \\cdot (T_f - T_i)
            \\]
            \\[
            Q = 10 \\cdot 4{,}18 \\cdot (80 - 20) = 2508 \\, \\text{kJ}
            \\]

            <br><strong>b) Energia útil obtinguda de la biomassa:</strong>
            \\[
            E_{útil} = m_b \\cdot PC \\cdot \\eta = 2 \\cdot 15\\,000 \\cdot 0{,}35 = 10\\,500 \\, \\text{kJ}
            \\]

            <br><strong>c) Energia hidràulica i cabal volumètric:</strong>
            \\[
            Q_v = \\frac{E_{útil}}{t \\cdot \\eta_h \\cdot \\rho \\cdot g \\cdot h}
            \\]
            Si el procés dura \\(t = 600 \\, \\text{s}\\) i \\(\\eta_h = 0{,}6\\):
            \\[
            Q_v = \\frac{10\\,500\\,000}{600 \\cdot 0{,}6 \\cdot 1000 \\cdot 9{,}81 \\cdot 3} \\approx 0{,}1 \\, \\text{m}^3/\\text{s}
            \\]

            <br><strong>d) Potència hidràulica:</strong>
            \\[
            P = \\rho \\cdot g \\cdot Q_v \\cdot h = 1000 \\cdot 9{,}81 \\cdot 0{,}1 \\cdot 3 = 2943 \\, \\text{W} \\approx 3 \\, \\text{kW}
            \\]

            <br><strong>e) Conclusió:</strong>
            Amb 2 kg de biomassa del plataner es pot escalfar prou aigua per moure una petita turbina hidràulica de 
            \\(3 \\, \\text{kW}\\) de potència durant uns minuts. Això mostra la transformació d’energia calorífica en energia mecànica útil.
            <br><br>
            <img src="ruta/a/imatgeRespostaPlataner.jpg" alt="Esquema del sistema energètic experimental">`,
    },
    {
        type: "questions",
        category: "energia",
        text: `Un rentaplats ha consumit \\(0{,}9 \\, \\text{kWh}\\) d’energia elèctrica per a escalfar \\(11 \\, \\text{L}\\) d’aigua des d’una temperatura ambient \\(T_{amb} = 10 \\, ^\\circ \\text{C}\\) a una temperatura \\(T = 70 \\, ^\\circ \\text{C}\\). La calor específica de l’aigua és \\(c_e = 4{,}18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ \\text{C}}\\). El rendiment del rentaplats és:`,
        options: [
            { text: "11,74 %", value: "a" },
            { text: "27,59 %", value: "b" },
            { text: "76,63 %", value: "c" },
            { text: "85,15 %", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            m = 11 \\, \\text{L} \\times 1000 \\, \\text{g/L} = 11000 \\, \\text{g}
            \\]
            \\[
            \\Delta T = 70 - 10 = 60 \\, ^\\circ \\text{C}
            \\]
            \\[
            Q = m \\times c_e \\times \\Delta T = 11000 \\times 4{,}18 \\times 60 = 2{,}7588 \\times 10^6 \\, \\text{J}
            \\]
            \\[
            W = 0{,}9 \\, \\text{kWh} \\times 3600000 = 3{,}24 \\times 10^6 \\, \\text{J}
            \\]
            \\[
            \\eta = \\frac{Q}{W} \\times 100 = \\frac{2{,}7588 \\times 10^6}{3{,}24 \\times 10^6} \\times 100 = 85{,}15\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`
    },
    {
        type: "questions",
        category: "materials",
        text: `Una família que anualment generava 525 kg d’envasos, en un any ha aconseguit reduir aquesta quantitat un 60 %. Quina reducció en emissions de GEH ha obtingut respecte a l’any anterior, tenint en compte que el factor d’emissió dels envasos és de 120,09 g CO2eq/kg residu?`,
        options: [
            { text: "25,22 kg CO2eq", value: "a" },
            { text: "37,83 kg CO2eq", value: "b" },
            { text: "63,05 kg CO2eq", value: "c" },
            { text: "88,27 kg CO2eq", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            525 \\times 0{,}60 = 315 \\, \\text{kg reduïts}
            \\]
            \\[
            525 \\times 120{,}09 = 63{,}05 \\, \\text{kg CO2eq inicials}
            \\]
            \\[
            210 \\times 120{,}09 = 25{,}22 \\, \\text{kg CO2eq finals}
            \\]
            \\[
            63{,}05 - 25{,}22 = 37{,}83 \\, \\text{kg CO2eq de reducció}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`
    }
];
