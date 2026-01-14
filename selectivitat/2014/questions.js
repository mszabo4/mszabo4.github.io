const questions = [
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
text: `En una línia de producció es duen a terme quatre operacions. Les operacions A i B, 
d’una durada de 25 s i 30 s, respectivament, es poden dur a terme simultàniament. Les operacions C i D tenen una durada de 30 s i 45 s, respectivament, i no es poden dur a terme 
simultàniament. Les operacions C i D s’han de dur a terme necessàriament després de les 
operacions A i B. En règim estacionari, entra una unitat cada 25 s a la línia. Quin és el temps 
mínim d’una unitat dins de la línia?`,        options: [
            { text: "130 s", value: "a" },
            { text: "45 s", value: "b" },
            { text: "105 s", value: "c" },
            { text: "100 s", value: "d" }
        ],
        correctAnswer: "c",
       steps: `
\\[
\text{Operacions simultànies: } \max(t_A, t_B) = \max(25, 30) = 30 \text{ s}
\\]
\\[
\text{Operacions seqüencials: } t_C + t_D = 30 + 45 = 75 \text{ s}
\\]
\\[
\text{Temps total d'una unitat dins la línia} = \max(t_A, t_B) + t_C + t_D = 30 + 75 = 105 \text{ s}
\\]
`

    },
    {
       type: "questions",
        category: "organitzacio",
        text: `Un camió amb capacitat per a transportar fins a 10 tones (1 tona = 1 000 kg) ha de 
transportar 50 cotxes de 1 200 kg cadascun. Quants viatges haurà de fer?`,
        options: [
            { text: "6", value: "a" },
            { text: "8", value: "b" },
            { text: "7", value: "c" },
            { text: "10", value: "d" }
        ],
        correctAnswer: "c",
       steps: `
\\[
\text{Massa d'un cotxe: } 1 \text{ 200 kg} = 1,2 \text{ t}
\\]
\\[
\text{Nombre de cotxes per viatge: } \left\lfloor \frac{\text{capacitat del camió}}{\text{massa d'un cotxe}} \right\rfloor = \left\lfloor \frac{10 \text{ t}}{1,2 \text{ t}} \right\rfloor = 8 \text{ cotxes per viatge}
\\]
\\[
\text{Nombre de viatges necessaris: } \left\lceil \frac{50 \text{ cotxes}}{8 \text{ cotxes/viatge}} \right\rceil = \left\lceil 6,25 \right\rceil = 7 \text{ viatges}
\\]
`
,
    },
    {
       type: "questions",
        category: "electrics",
        text: `Un cargol M12 de pas (avanç per volta) p = 1,75 mm es cargola a una velocitat de rotació 
n = 300 min–1. Quina és la velocitat d’avanç del cargol?`,
        options: [
            { text: "14,29 mm/s", value: "a" },
            { text: "54,98 mm/s", value: "b" },
            { text: "25 mm/s", value: "c" },
            { text: "8,75 mm/s", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            n_s = \frac{60 \cdot f}{p} = \frac{60 \cdot 50}{2} = 1500 \text{ min}^{-1}
            \\]
            \\[
            n = n_s \cdot (1 - s) = 1500 \cdot (1 - 0,04) = 1500 \cdot 0,96
            \\]
            \\[
            n = 1440 \text{ min}^{-1}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions",
        category: "electrics",
        text: `Un motor elèctric té un consum de 216 W de potència i s’alimenta amb una tensió 
U = 36 V mitjançant una bateria de 10 A h de capacitat. Quant de temps durarà la bateria si 
està totalment carregada?`,
        options: [
            { text: "21,6 h", value: "a" },
            { text: "3,6 h", value: "b" },
            { text: "6 h", value: "c" },
            { text: "1,67 h", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{8} + \frac{1}{8} = \frac{2}{8}
            \\]
            \\[
            R_{eq} = \frac{8}{2} = 4 \text{ Ω}
            \\]
            <br><br>
            `,
    },
    {
       type: "questions",
        category: "energia",
        text: `En un circuit elèctric, es connecten en paraŀlel dues resistències iguals de valor nominal 
50 Ω i tolerància ± 2 %. Quina és la resistència equivalent?`,
        options: [
            { text: "100 Ω ± 4 %", value: "a" },
            { text: "100 Ω ± 2 %", value: "b" },
            { text: "25 Ω ± 2 %", value: "c" },
            { text: "25 Ω ± 1 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \text{Consum total} = \frac{6 \text{ L}}{100 \text{ km}} \cdot 350 \text{ km} = 21 \text{ L}
            \\]
            \\[
            \text{Emissions} = 21 \text{ L} \cdot 2,35 \text{ kg/L} = 49,35 \text{ kg}
            \\]
            <br><br>
            `,
    },
    {
      type: "exercicis",
        category: "materials",
        text: `Una loteria duu a terme un sorteig escollint a l’atzar un número de tres xifres. Les 
butlletes resulten premiades si dues o tres xifres coincideixen amb les del número escollit. 
Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:`,
      //Imagen del problema  
         <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
         <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
         <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
         <br><br> ,
               
    steps: `
            \\[
            \text{Massa total} = \frac{500 \text{ g Ag}}{0,925} = 540,54 \text{ g total}
            \\]
            \\[
            \text{Massa Cu} = 540,54 - 500 = 40,54 \text{ g}
            \\]
            <br><br>
            `,
    },
    {
      type: "exercicis",
        category: "logica",
        text: `Es vol construir una estrella com la de la figura a partir d’un tauler de fusta. La botiga en calcula el cost segons l’expressió c = c1 s + c2 p, en què s és la superfície de fusta utilitzada i p és el perímetre de les peces tallades. El primer coeficient de cost és c1 = 10 €/m2 i l’altre coeficient de cost és c2 = 0,5 €/m si el perfil és senzill (com, per exemple, un triangle) o c2 = 1,3 €/m si el perfil és complex (com, per exemple, una estrella). Determineu: 
        <br><strong>a)</strong> La superfície, s, de fusta utilitzada. [0,5 punt]
        <br><strong>b)</strong> El perímetre tallat, p1, si es construeix a partir de triangles com el de la figura. [1 punt]
        <br><strong>c)</strong> El perímetre tallat, p2, si es construeix tallant el perfil exterior de l’estrella. [0,5 punts]
        <br><strong>d)</strong> El cost de cadascuna de les opcions. Quina és la més econòmica?  [0,5 punts]`,

        correctAnswer: "",
        steps: `
            <strong>a) Taula de veritat (resum):</strong>
            L'enunciat diu: $t = q + (v \cdot \bar{c})$
            <br>Files on t=1: (c,q,v) = (0,0,1), (0,1,1), (1,1,1), etc. (Segons lògica de divisibilitat real).
            <br><strong>b) Funció simplificada:</strong>
            \\[
            t = q + \bar{c} \cdot v
            \\]
            <strong>c) Esquema:</strong>
            Es necessita una porta NOT per a c, una AND per $(\bar{c} \cdot v)$ i una OR final amb q.
            <br><br>
            `,
    },
    {
        type: "exercicis",
        category: "mecanica",
        text: `Un vehicle utilitza gasolina de poder calorífic pc = 42 MJ/L. Quan circula per un terreny horitzontal a una velocitat v = 100 km/h, el motor gasta ce = 4,7 L/(100 km) i desenvolupa una potència mecànica Pmec = 21 kW. Determineu:
        <br><img src="https://tu-repositorio.com/img/grua_pau2014.png" alt="Esquema de la grua" width="600">
        <br><strong>a)</strong> El consum, c, de gasolina en L/s. [0,5 punt]
        <br><strong>b)</strong> La potència tèrmica consumida, Ptèrm [0,5 punts]
        <br><strong>a)</strong> El rendiment, η, del motor. [0,5 punt]
        <br><strong>a)</strong> La distància, d, que pot recórrer el vehicle si el dipòsit de combustible té una capacitat V = 45 L.  [1 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Moment sense càrrega (respecte l'eix):</strong>
            \\[
            M_0 = m_c \cdot g \cdot d - m_f \cdot g \cdot \frac{L}{2}
            \\]
            \\[
            M_0 = 4000 \cdot 9,8 \cdot 5 - 1500 \cdot 9,8 \cdot 10 = 196\,000 - 147\,000 = 49\,000 \text{ Nm}
            \\]
            <strong>b) Càrrega màxima a l'extrem (L=20m):</strong>
            \\[
            \sum M = 0 \rightarrow m_c \cdot g \cdot d = m_f \cdot g \cdot \frac{L}{2} + M_{max} \cdot g \cdot L
            \\]
            \\[
            196\,000 = 147\,000 + M_{max} \cdot 9,8 \cdot 20
            \\]
            \\[
            49\,000 = 196 \cdot M_{max} \rightarrow M_{max} = 250 \text{ kg}
            \\]
            <br><br>
            `,
   },
    {
        type: "exercicis",
        category: "hidraulica",
        text: `La figura mostra les dimensions d’una grua amb contrapès a la base. La massa del contrapès és mc = 12 500 kg i la massa de la resta d’elements de la grua es considera negligible. Determineu:
        <br><strong>a)</strong> La massa màxima, mmàx, que pot elevar la grua, amb el ganxo situat a l’extrem, sense que bolqui.  [1 punt]
        <br><strong>b)</strong> Calculeu la potència elèctrica consumida pel motor de la bomba en kW. [1,5 punts]
        `,
        text: `La grua s’utilitza per a fer pujar una massa m = 1 000 kg fins a una altura Δh = 20 m, amb el ganxo situat a 15 m de l’eix de la torre. La velocitat d’elevació de la càrrega és v = 30 m/min. Determineu:
        <br><strong>b)</strong> L’energia mecànica, Emec, necessària per a fer l’elevació.  [1 punt]
        <br><strong>c)</strong> La potència, Pm, que ha de desenvolupar el motor.   [1 punt]
        `,
        correctAnswer: "",
        steps: `
            <strong>a) Treball útil (1h):</strong>
            \\[
            W_u = m \cdot g \cdot h = (10 \cdot 1000 \text{ kg}) \cdot 9,8 \cdot 30 = 2,94 \text{ MJ}
            \\]
            <strong>b) Potència elèctrica:</strong>
            \\[
            P_u = \frac{W_u}{t} = \frac{2,94 \cdot 10^6 \text{ J}}{3600 \text{ s}} = 816,67 \text{ W}
            \\]
            \\[
            P_{elec} = \frac{P_u}{\eta} = \frac{816,67}{0,7} = 1166,67 \text{ W} = 1,167 \text{ kW}
            \\]
            <br><br>
            `,
    },
    {
        type: "exercicis",
        category: "mecanica",
        text: `En un centre d’ensenyament, el consum diari d’aigua calenta sanitària és c = 850 L. Cal incrementar la temperatura de l’aigua Δt = 20 °C i per això s’hi instaŀlen 20 captadors solars de rendiment η = 0,45 i superfície s = 1,3 m2. La calor específica de l’aigua és ce = 4,18 J/(g °C). Determineu:
        <br><img src="https://tu-repositorio.com/img/grua_pau2014.png" alt="Esquema de la grua" width="600">
        <br><strong>a)</strong> L’energia diària que cal per a escalfar l’aigua. [0,5 punt]
        <br><strong>b)</strong> L’energia diària que ha de captar cadascun dels captadors. [0,5 punts]
        <br><strong>c)</strong> Si la població on està situat el centre té una mitjana anual de sol de 2 600 h, quina és la potència mitjana necessària de radiació solar per unitat de superfície? [0,5 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Moment sense càrrega (respecte l'eix):</strong>
            \\[
            M_0 = m_c \cdot g \cdot d - m_f \cdot g \cdot \frac{L}{2}
            \\]
            \\[
            M_0 = 4000 \cdot 9,8 \cdot 5 - 1500 \cdot 9,8 \cdot 10 = 196\,000 - 147\,000 = 49\,000 \text{ Nm}
            \\]
            <strong>b) Càrrega màxima a l'extrem (L=20m):</strong>
            \\[
            \sum M = 0 \rightarrow m_c \cdot g \cdot d = m_f \cdot g \cdot \frac{L}{2} + M_{max} \cdot g \cdot L
            \\]
            \\[
            196\,000 = 147\,000 + M_{max} \cdot 9,8 \cdot 20
            \\]
            \\[
            49\,000 = 196 \cdot M_{max} \rightarrow M_{max} = 250 \text{ kg}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `questió 2 serie 4`,
        options: [
            { text: "22 μm", value: "a" },
            { text: "47 μm", value: "b" },
            { text: "34 μm", value: "c" },
            { text: "No hi ha joc en aquest ajust.", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[	
            {σ_{e}} = \\frac{\\text{F}}{\\text{A}} \\; \\text{&#8594} \\; \\text{A} = \\frac{\\text{F}}{{σ_{e}}}            
            \\]
            \\[
            \\text{A} = \\frac{\\text{F}}{{σ_{e}}} = \\frac{1400}{85} = 16{,}47 \\; \\text{mm}^2
            \\]
            \\[
            A = \\frac{\\pi \\cdot \\text{d}^2}{4} \\; \\text{&#8594} \\; \\text{d} = \\sqrt{\\frac{\\text{A} \\cdot 4}{\\pi}}
            \\]
            \\[
            d = \\sqrt{\\frac{16{,}47 \\cdot 4}{\\pi}} = 4{,}58 \\; \\text{mm}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `La substitució de 10 bombetes incandescents de 60 W per 10 bombetes de LED de 7 W comporta un estalvi energètic, després de 100 h de funcionament, de`,
        options: [
            { text: "530 kW h.", value: "a" },
            { text: "60 kW h.", value: "b" },
            { text: "53 kW h.", value: "c" },
            { text: "16,67 kW h.", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[	
            \\text{Temps per trajecte:}\\; 3 \\; \\text{min} \\; 15 \\; \\text{s} = 195 \\; \\text{s}   
            \\]
            \\[
            \\text{Cicle dia:}\\; 195 \\; \\text{s} + 45 \\; \\text{s}  = 240 \\; \\text{s} = 4 \\; \\text{min}
            \\]
            \\[
            \\text{Cicle nit:}\\; 195 \\; \\text{s} + 75 \\; \\text{s}  = 270 \\; \\text{s} = 4,5 \\; \\text{min}
            \\]
            \\[

            \\]
            \\[
            Viatges \\; dia
            \\]
            \\[
            \\text{Temps funcionant:}\\; 18 \\; \\text{h} = 18 \\; \\cdot \\; 60 = 1080 \\; \\text{s}
            \\]
            \\[
            \\frac{1080}{4} = 270 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            Viatges \\; nit
            \\]
            \\[
            \\text{Temps funcionant:}\\; 6 \\; \\text{h} = 6 \\; \\cdot \\; 60 = 360 \\; \\text{s}
            \\]
            \\[
            \\frac{360}{4,5} = 80 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            \\text{Viatges totals:}\\; 270 + 80 = 350 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            \\textbf{Total viatgers:}\\; 350 \\; \\cdot \\; 300 = 105000 \\; \\text{viatgers}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `El full de característiques d’un acceleròmetre indica que, per a l’interval de mesures comprès entre 0,5 m/s2 i 100 m/s2, la precisió és de ± 10 mm/s2 i ± 0,5 % de la lectura. Quin és l’error màxim d’una lectura de 15 m/s2?`,
        options: [
            { text: "85 mm/s2", value: "a" },
            { text: "15 mm/s2", value: "b" },
            { text: "10,5 mm/s2", value: "c" },
            { text: "500 mm/s2", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[	
            R_{1_{min}} = 30 - 2\\; \\% = 30(100 - 2)\\; \\% = 30 \\; \\cdot \\; 98 \\;\\% = 30 \\; \\cdot \\; 0{,}98 = 29{,}4 \\; \\text{Ω}
            \\]
            \\[
            R_{1_{max}} = 30 + 2\\; \\% = 30(100 + 2)\\; \\% = 30 \\; \\cdot \\; 102 \\;\\% = 30 \\; \\cdot \\; 1{,}02 = 30{,}6 \\; \\text{Ω}
            \\]
            \\[
            R_{2_{min}} = 30 - 5\\; \\% = 30(100 - 5)\\; \\% = 30 \\; \\cdot \\; 95 \\;\\% = 30 \\; \\cdot \\; 0{,}95 = 28{,}5 \\; \\text{Ω}
            \\]
            \\[
            R_{2_{max}} = 30 + 5\\; \\% = 30(100 + 5)\\; \\% = 30 \\; \\cdot \\; 105 \\;\\% = 30 \\; \\cdot \\; 1{,}05 = 31{,}5 \\; \\text{Ω}
            \\]
            \\[

            \\]
            \\[
            R_{min} = \\frac{R_{1_{min}} \\cdot R_{2_{min}}}{R_{1_{min}} + R_{2_{min}}} = \\frac{29,4 \\cdot 28,5}{29,4 + 28,5} = 14,47 \\; \\Omega
            \\]
            \\[
            R_{max} = \\frac{R_{1_{max}} \\cdot R_{2_{max}}}{R_{1_{max}} + R_{2_{max}}} = \\frac{30,6 \\cdot 31,5}{30,6 + 31,5} = 15,52 \\; \\Omega
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Una barra d’acer inoxidable té una llargària L = 250 mm a 20 °C. El coeficient de dilatació tèrmica de l’acer inoxidable és αinox = 17,3 × 10–6 K–1. A quina temperatura la barra s’haurà allargat un 0,1 %?`,
        options: [
            { text: "58,70 °C", value: "a" },
            { text: "173 °C", value: "b" },
            { text: "32,50 °C", value: "c" },
            { text: "77,80 °C", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[	
            {V_{Cilindre}} = \\frac{C_{total}}{N_{cilindres}} = \\frac{2792}{6} = 465,33 \\; \\text{cm}^{3}
            \\]
            \\[
            V = \\frac{\\pi \\cdot D^{2}}{4} \\cdot C \\; \\text{&#8594} \\; D = \\sqrt{\\frac{V \\cdot 4}{\\pi \\cdot C}}
            \\]
            \\[
            D = \\sqrt{\\frac{V \\cdot 4}{\\pi \\cdot C}} = \\sqrt{\\frac{465,33 \\cdot 4}{\\pi \\cdot 9}} = 8,114 \\; \\text{cm} = 81{,}14 \\; \\text{mm}
            \\]
            <br><br>
            `,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Una màquina expenedora automàtica disposa d’una pantalla tàctil amb un sistema de menús. La màquina retorna al menú principal si es prem el botó habilitat per a aquesta finalitat, després de fer una comanda o quan transcorren 30 segons sense que ningú toqui la pantalla. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
               <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex1/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema i indiqueu els casos que no són possibles. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br><br>
            `,
    },  
{
        type: "exercicis",
        category: "energia",
        text: `La porta de garatge de la figura s’acciona manualment fent una força vertical, F, a l’extrem A. En el punt B,  la porta rep l’acció d’un contrapès Fcp = 500 N, el pes  de la porta, Fpes, i una força horitzontal provinent de la guia, Fguia. La massa de la porta és m = 30 kg. Per tal de mantenir la porta immobilitzada a α = 45°, determineu:
               <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex1/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> La força, F, necessària. [1 punt]
               <br><strong>b)</strong> La força que fa la barra CD. [1 punt]
               <br><strong>c)</strong> La força horitzontal, Fguia, que rep la porta de la guia en el punt B. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex1/imatgeResposta.png" alt="Imatge relacionada amb la resposta" width="900">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "materials",
        text: `
       En un habitatge, s’utilitza una bomba elèctrica per a fer pujar l’aigua procedent d’una cisterna. La bomba eleva un volum V = 45 600 L d’aigua en un temps t = 8 h de funcionament a una altura h = 10,4 m. Determineu:
               <br><strong>a)</strong> El treball, W, fet per la bomba.  [0,5 punts]
               <br><strong>b)</strong> El rendiment de la bomba, ηb, si s’acciona mitjançant un motor elèctric de potència Pm = 525 W. [0,5 punts]
               <br><strong>c)</strong> La pressió mitjana, p, de funcionament de la bomba. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Nombre de triangles equilàters \\(n_{\text{T}}\\) i el perímetre \\(p_{\text{T}}\\):</strong>
            <br>
            \\[
            n_{\\text{T}} = 6 + 6 = 12 \\, \\text{triangles}
            \\]
            \\[
            p_{\\text{T}} = n_{\\text{T}} \\cdot 3b = 12 \\cdot 3 \\cdot 0{,}3 = 10{,}8 \\, \\text{m}
            \\]
            <br>
            <strong>b) Nombre de rombes \\(n_{\\text{R}}\\) i perímetre de les peces \\(p_{\\text{R}}\\):</strong>
            <br>
            \\[
            n_{\\text{R}} = \\frac{n_{\\text{T}}}{2} = \\frac{12}{2} = 6 \\, \\text{rombes}
            \\]
            \\[
            p_{\\text{R}} = n_{\\text{R}} \\cdot 4b = 6 \\cdot 4 \\cdot 0{,}3 = 7{,}2 \\, \\text{m}
            \\]
            <br>
            <strong>c) Perímetre tallat \\(p_{\\text{E}}\\) de l'estrella (perfil exterior):</strong>
            <br>
            \\[
            p_{\\text{E}} = 12 \\cdot b = 12 \\cdot 0{,}3 = 3{,}6 \\, \\text{m}
            \\]
            <br>
            <strong>d) Superfície \\(s\\), costos \\(c_{\text{T}}, c_{\text{R}}, c_{\text{E}}\\) i opció més econòmica:</strong>
            <br>
            - Superfície d'un triangle equilàter: \\( A_{\\text{T}} = \\frac{\\sqrt{3}}{4} b^2 = \\frac{\\sqrt{3}}{4} (0{,}3)^2 = 0{,}03897 \\, \\text{m}^2 \\).
            \\[
            s = 12 \\cdot A_{\\text{T}} = 12 \\cdot 0{,}03897 = 0{,}4677 \\, \\text{m}^2
            \\]
            \\[
            c_{\\text{T}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 10{,}8) = 7{,}016 + 6{,}48 = 13{,}50 \\, \\text{€}
            \\]
            - Cost amb rombes (\\( c_2 = 0{,}6 \\)): 
            \\[
            c_{\\text{R}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 7{,}2) = 7{,}016 + 4{,}32 = 11{,}34 \\, \\text{€}
            \\]
            - Cost estrella sencera (\\( c_2 = 1{,}4 \\)): 
            \\[
            c_{\\text{E}} = (15 \\cdot 0{,}4677) + (1{,}4 \\cdot 3{,}6) = 7{,}016 + 5{,}04 = 12{,}06 \\, \\text{€}
            \\]
            - <strong>Conclusió:</strong> L'opció més econòmica és la construcció a partir de <strong>6 rombes</strong> amb un cost d'<strong>11,34 €</strong>.
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        Una torradora de pa consta, bàsicament, de dues resistències, coŀlocades a banda i banda 
de l’espai on s’introdueix la llesca de pa, i d’un termòstat que permet regular el grau de torrat 
que es desitja. Les dues resistències són de fil de nicrom de diàmetre d = 0,4 mm i de llargària 
L = 3,5 m cadascuna i estan connectades en sèrie. La torradora s’alimenta amb una tensió 
U = 230 V i la resistivitat del nicrom a 20 °C és ρ20
 = 10,8 × 10–7 Ω m. Determineu:
              
               <br><strong>a)</strong> La resistència total, R20, de la torradora a 20 °C.  [0,5 punts]
               La resistivitat varia amb la temperatura segons l’expressió següent, en què α = 0,4 × 10–3 °C–1 
és el coeficient de temperatura de la resistència elèctrica del nicrom i ΔT és l’increment de 
temperatura des del valor de referència de 20 °C:
ρ = ρ20 (1 + α ΔT) //poner la formula en foto
Si el fil de nicrom s’escalfa fins a 600 °C, determineu:
               <br><strong>b)</strong>La resistència total, R600, de la torradora quan el fil de nicrom és a 600 °C. [1 punt]
               <br><strong>c)</strong>La variació de la intensitat que circula per les resistències a 20 °C i a 600 °C. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència mecànica requerida per elevar la càrrega \\(P_{càrrega}\\):</strong>
            <br>
            \\[
            v = \\frac{\\Delta h}{t} = \\frac{5}{60} = 0,0833 \\; \\text{m/s}
            \\]
            \\[
            F = m \\cdot g = 2500 \\cdot 9{,}81 = 24525 \\; \\text{N}
            \\]
            \\[
            P_{càrrega} = F \\cdot v = 24525 \\cdot 0,0833 = 2044 \\; \\text{W}
            \\]
            <br>
            <strong>b) Potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix del motor:</strong>
            <br>
            \\[
            P_{m} = \\frac{P_{càrrega}}{η_{red}} = \\frac{2044}{0,70} = 2919 \\; \\text{W}
            \\]
            \\[
            \\omega = \\frac{2\\pi n}{t} = \\frac{2\\pi 1500}{60} = 157,1 \\; \\text{rad/s}
            \\]
            \\[
            Γ_{m} = \\frac{P_m}{\\omega} = \\frac{2919}{157,1} = 18,6 \\; \\text{N\\(\\cdot\\)m}
            \\]
            <br>
            <strong>c) Intensitat consumida pel motor:</strong>
            <br>
            \\[
            P_{el} = \\frac{P_m}{η_{mot}} = \\frac{2919}{0,78} = 3742,3 \\; \\text{W}
            \\]
            \\[
            I = \\frac{P_{el}}{U} = \\frac{3742,3}{220} = 17,01 \\; \\text{A}
            \\]
            <br>
            <strong>d) Potència total dissipada pel conjunt motor–reductor:</strong>
            <br>
            \\[
            P_{diss} = P_{el} - P_{càrrega} = 3742,3 - 2044 = 1698,3 \\; \\text{W}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `
       En un gran premi de Fórmula 1 del circuit de Montmeló, un vehicle ha circulat a 
una velocitat mitjana v = 192 km/h i ha tingut un consum mitjà de combustible per volta 
cm
 = 2,5 kg. El combustible utilitzat tenia una densitat ρ = 0,74 kg/L. El circuit té una longitud 
d = 4,655 km i el gran premi es disputava a 66 voltes. Determineu:
              
               <br><strong>a)</strong> El consum del vehicle, c, en L/(100 km).  [0,5 punts]
               <br><strong>b)</strong> El temps, t, que ha necessitat el vehicle per a completar el gran premi en hores, 
minuts, segons i miŀlèsimes de segon. [0,5 punts]
               <br><strong>c)</strong> La massa de combustible, mcomb, que portava inicialment el vehicle si en finalitzar la cursa li n’ha sobrat un 1,5 %.  [1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Diagrama del cos lliure:</strong>
            <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex4/imatgeResposta.png" alt="Imatge relacionada amb la resposta" width="900">

            <strong>b) Massa de la placa:</strong>
            <br>
            \\[
            V = (2L) \\cdot L \\cdot e = 2 \\cdot 1 \\cdot 0,005 = 0,01 \\; \\text{m}^3
            \\]
            \\[
            m = ρV = 2710 \\cdot 0,01 = 27,1 \\; \\text{kg}
            \\]
            \\[
            W = mg = 27,1 \\cdot 9,98 = 265,8 \\; \\text{N}
            \\]
            <br>
            <strong>c) Tensió del cable i forces a O:</strong>
            <br>
            \\[
            T \\text{sin}30º \\cdot 2L - W \\cdot L = 0
            \\]
            \\[
            T \\cdot 0,5 \\cdot 2 - 265,8 = 0
            \\]
            \\[
            T = 265,8 \\; \\text{N}
            \\]
            \\[
            - Eix y
            \\]
            \\[
            F_{v} + T \\text{sin}30º - W = 0
            \\]
            \\[
            F_{v} + 132,9 - 265,8 = 0
            \\]
            \\[
            F_{v} = 132,9 \\; \\text{N}
            \\]
            \\[
            - Eix x
            \\]
            \\[
            F_{h} - T \\text{sin}30º = 0
            \\]
            \\[
            F_{h} = 265,8 \\cdot 0,866 = 230,2 \\; \\text{N}
            \\]
            <br>
            <strong>d) Tensió normal i allargament unitari del cable:</strong>
            <br>
            \\[
            A = \\frac{\\pi d^{2}}{4} = \\frac{\\pi (0,002)^{2}}{4} = 3,14 \\cdot 10^{-6} \\; \\text{m}^2
            \\]
            \\[
            σ = \\frac{T}{A} = \\frac{265,8}{3,14 \\cdot 10^{-6}} = 84,6 \\; \\text{MPa}
            \\]
            \\[
            ε = \\frac{σ}{E} = \\frac{84,6 \\cdot 10^{6}}{207 \\cdot 10^{7}} = 4,1 \\cdot 10^{-4}
            \\]
            \\[
            σ = 84,6 \\; \\text{MPa} < 350 \\; \\text{MPa}
            \\]
            <strong>El cable NO es deforma permanentment</strong>
            <br><br>
            `
    },
];
