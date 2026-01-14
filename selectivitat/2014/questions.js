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
        text: `Un motor de corrent altern asíncron de dos parells de pols, que està connectat a una xarxa amb una tensió U = 230 V i una freqüència &#402 = 50 Hz, té un lliscament relatiu s = 0,04 en condicions nominals. Quina és la velocitat de gir nominal n del motor?`,
        options: [
            { text: "1440 min<sup>–1</sup>", value: "a" },
            { text: "1500 min<sup>–1</sup>", value: "b" },
            { text: "2880 min<sup>–1</sup>", value: "c" },
            { text: "3000 min<sup>–1</sup>", value: "d" }
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
        text: `Es connecten en paral·lel dos altaveus que tenen una impedància (resistència) de 8 Ω cadascun. Quina és la impedància equivalent del conjunt?`,
        options: [
            { text: "16 Ω", value: "a" },
            { text: "8 Ω", value: "b" },
            { text: "4 Ω", value: "c" },
            { text: "2 Ω", value: "d" }
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
        text: `Un motor de combustió d'un automòbil emet 2,35 kg de CO<sub>2</sub> per cada litre de gasolina consumit. Si l'automòbil consumeix 6 L cada 100 km, quina és l'emissió de CO<sub>2</sub> en un recorregut de 350 km?`,
        options: [
            { text: "14,1 kg", value: "a" },
            { text: "49,35 kg", value: "b" },
            { text: "21,0 kg", value: "c" },
            { text: "8,22 kg", value: "d" }
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
      type: "questions",
        category: "materials",
        text: `L'argent de llei és un aliatge que conté un 92,5 % d'argent (Ag) i un 7,5 % de coure (Cu). Quina quantitat de coure cal per a aliar-lo amb 500 g d'argent pur per a obtenir argent de llei?`,
        options: [
            { text: "37,5 g", value: "a" },
            { text: "40,54 g", value: "b" },
            { text: "462,5 g", value: "c" },
            { text: "540,54 g", value: "d" }
        ],
        correctAnswer: "b",
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
        text: `Un sistema per determinar si un any és de traspàs rep tres senyals lògics d'un calendari digital: <i>c</i> (divisible per 100), <i>q</i> (divisible per 400) i <i>v</i> (divisible per 4). L'any és de traspàs ($t=1$) si és divisible per 400 O BÉ si és divisible per 4 però NO per 100. 
        <br><strong>a)</strong> Elaboreu la taula de veritat. [1 punt]
        <br><strong>b)</strong> Determineu la funció lògica $t(c, q, v)$ simplificada. [1 punt]
        <br><strong>c)</strong> Dibuixeu l'esquema de portes lògiques. [0,5 punts]`,
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
    // --- SÈRIE 3: MECÀNICA (ESTÀTICA) ---
    {
        type: "exercicis",
        category: "mecanica",
        text: `Una grua de construcció té una fletxa de $L = 20 \text{ m}$ i un contrapès de massa $m_{c} = 4000 \text{ kg}$ situat a $d = 5 \text{ m}$ de l'eix vertical. La massa de la fletxa és $m_{f} = 1500 \text{ kg}$ i es considera concentrada al seu punt mig.
        <br><img src="https://tu-repositorio.com/img/grua_pau2014.png" alt="Esquema de la grua" width="600">
        <br><strong>a)</strong> Determineu el moment de bolcament respecte a l'eix quan no hi ha càrrega. [1 punt]
        <br><strong>b)</strong> Quina és la càrrega màxima $M_{max}$ que pot aixecar a l'extrem de la fletxa sense que la grua bolqui cap endavant? [1,5 punts]`,
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
    // --- SÈRIE 4: HIDRÀULICA ---
    {
        type: "exercicis",
        category: "hidraulica",
        text: `Una bomba d'aigua puja un cabal de $q = 10 \text{ m}^3/\text{h}$ a una alçada de $h = 30 \text{ m}$. El rendiment de la bomba és $\eta = 0,7$.
        <br><strong>a)</strong> Determineu el treball útil fet en una hora. [1 punt]
        <br><strong>b)</strong> Calculeu la potència elèctrica consumida pel motor de la bomba en kW. [1,5 punts]`,
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
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `La velocitat de sincronisme d’un motor asíncron, que està connectat a una xarxa de tensió U = 230 V i freqüència f = 50 Hz, és de 750 min<sup>–1</sup>. Quina serà la velocitat de sincronisme si es connecta a una xarxa de tensió U = 120 V i freqüència f = 60 Hz?`,
        options: [
            { text: "900 min<sup>–1</sup>", value: "a" },
            { text: "552 min<sup>–1</sup>", value: "b" },
            { text: "750 min<sup>–1</sup>", value: "c" },
            { text: "391 min<sup>–1</sup>", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[	
            {n_{s}} = \\frac{120 \\cdot \\text{&#402}}{\\text{p}} \\; \\text{&#8594} \\; \\text{p} = \\frac{120 cdot \\text{&#402}}{{n_{s}}}
            \\]
            \\[
            p = \\frac{120 \\cdot 50 \\, \\text{Hz}}{750 \\; \\text{min}^{-1}} \\, = 8 \\, pols
            \\]
            \\[
            {n_{s}} = \\frac{120 \\cdot 60 \\, \\text{Hz}}{8} = 900 \\; \\text{min}^{-1}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El límit elàstic d'un aliatge d'alumini és σ<sub>e</sub> = 85 MPa. Si una peça cilíndrica d'aquest material està sotmesa a una força de tracció de 1 400 N, quin és el diàmetre mínim que ha de tenir la secció perquè no es produeixi deformació plàstica?`,
        options: [
            { text: "3,24 mm", value: "a" },
            { text: "16,47 mm", value: "b" },
            { text: "4,58 mm", value: "c" },
            { text: "2,29 mm", value: "d" }
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
        text: `Dues terminals d'un aeroport estan comunicades per un tren autònom que en un trajecte pot transportar fins a tres-centes persones. El temps del trajecte és de 3 min i 15 s; i el temps d'espera entre dos trajectes és de 45 s de les 5.30 h a les 23.30 h, i d'1 min i 15 s de les 23.30 h a les 5.30 h. Quin és el nombre màxim de viatgers que pot transportar un tren durant tot un dia?`,
        options: [
            { text: "105 000", value: "a" },
            { text: "96 000", value: "b" },
            { text: "108 000", value: "c" },
            { text: "101 647", value: "d" }
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
        text: `En un circuit elèctric, es connecten en paral·lel dues resistències de 30 Ω cadascuna i toleràncies de ± 2 % i ± 5 %, respectivament. Entre quins valors es troba la resistència equivalent?`,
        options: [
            { text: "57,90 Ω i 62,10 Ω", value: "a" },
            { text: "14,47 Ω i 15,52 Ω", value: "b" },
            { text: "14,25 Ω i 15,75 Ω", value: "c" },
            { text: "57 Ω i 63 Ω", value: "d" }
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
        text: `Un cotxe té un motor de combustió V6 amb sis cilindres. La cilindrada és de 2 792 cm<sup>3</sup> i la cursa dels cilindres és de 90 mm. Quant fa el diàmetre dels cilindres?`,
        options: [
            { text: "70,32 mm", value: "a" },
            { text: "40,57 mm", value: "b" },
            { text: "198,74 mm", value: "c" },
            { text: "81,14 mm", value: "d" }
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
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `En un gran premi de Fórmula 1, un vehicle ha tingut un consum mitjà de combustible per volta c<sub>m</sub> = 2,9 kg. El combustible utilitzat té una densitat ρ = 0,75 kg/L. Si el circuit té una longitud d = 5,543 km, quin ha estat el consum del vehicle en L/(100 km)?`,
        options: [
            { text: "75 L/(100 km)", value: "a" },
            { text: "52,32 L/(100 km)", value: "b" },
            { text: "254,9 L/(100 km)", value: "c" },
            { text: "69,76 L/(100 km)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[	
            V = \\frac{m}{\\rho} = \\frac{2,9}{0,75} = 3,57 \\; \\text{L/Volta}
            \\]
            \\[
            C_{1\\; \\text{km}} = \\frac{V}{d} = \\frac{3,87 \\; \\text{L/Volta}}{5,543 \\; \\text{km}} = 0,698 \\; \\text{L/km}
            \\]
            \\[
            C_{100\\; \\text{km}} = 0,698 \\; \\cdot \\; 100 = 69,8 \\; \\text{L/100 km}
            \\]
            <br><br>
            `,
    },  
{
        type: "exercicis",
        category: "energia",
        text: `Per a controlar la velocitat dels vehicles a l'entrada d'una població s'ha instaŀlat un semàfor que generalment és verd, però que canvia a vermell quan es detecta un vehicle que s'hi
        apropa a una velocitat superior o igual a \\(60 \\; \\text{km/h}\\). Perquè els vianants puguin travessar la
        carretera, el semàfor dels cotxes també canvia a vermell si com a mínim fa un minut que és
        verd i, a més, un vianant prem el polsador que incorpora el mateix semàfor. Responeu a les
        qüestions que hi ha a continuació utilitzant les variables d'estat següents:
               <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex1/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
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
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex2/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">

        Es vol construir una estrella de sis puntes com la de la figura a partir d'un tauler de fusta.
L'estrella es pot construir a partir de triangles equilàters o de rombes com els que es mostren
en la figura. El cost de producció de l'estrella es calcula segons l'expressió 
\\[
c = c_{1} s + c_{2} p
\\]
en què s és la superfície de fusta utilitzada i p és el perímetre de les peces tallades per a construir
l'estrella. El primer coeficient de cost és \\(c_{1} = 15 \\; \\text{€/m}^2\\)
, i el segon és \\(c_{2} = 0,6 \\; \\text{€/m}\\)  si el perfil és
senzill (com, per exemple, un triangle o un rombe) o \\(c_{2} = 1,4 \\; \\text{€/m} \\) si el perfil és complex (com,
per exemple, una estrella). Determineu:
              
               <br><strong>a)</strong> El nombre de triangles equilàters \\(n_{T}\\) que calen per a construir l'estrella i el perímetre
                                        de les peces tallades \\(p_{T}\\) en aquest cas. [0,5 punts]
               <br><strong>b)</strong> El nombre de rombes \\(n_{R}\\) que calen per a construir l'estrella i el perímetre de les peces
                                        tallades \\(p_{R}\\) en aquest cas. [0,5 punts]
               <br><strong>c)</strong> El perímetre tallat \\(p_{E}\\) si l'estrella es construeix tallant-ne directament el perfil exterior. [0,5 punts]
               <br><strong>d)</strong> La superfície \\(s\\) de fusta necessària per a construir l’estrella, i el cost \\(c_{T}\\), \\(c_{R}\\) i \\(c_{E}\\)
 de cadascuna de les tres opcions anteriors. Quina és l'opció més econòmica?
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
        Un elevador puja amb una velocitat constant una càrrega \\(m = 2 500 \\; \\text{kg}\\) fins a una altura
\\(Δh = 5 \\; \\text{m} \\) en un temps \\(t = 60 \\; \\text{s} \\). L'elevador s'acciona amb un motor elèctric de corrent continu en sèrie amb un reductor d'engranatges. Segons el catàleg del fabricant, el rendiment del
reductor d'engranatges és \\(η_{red} = 0,70\\). El motor s'alimenta amb una tensió \\( U = 220 \\; \\text{V} \\), gira a
una velocitat \\(n = 1 500 \\; \\text{min}^{–1}\\) i té un rendiment electromecànic \\(η_{mot} = 0,78\\). Si les resistències
passives a l'elevador es consideren negligibles, determineu:
              
               <br><strong>a)</strong> La potència mecànica \\(P_{càrrega}\\) requerida per a elevar la càrrega. [0,5 punts]
               <br><strong>b)</strong> La potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix de sortida del motor. [1 punt]
               <br><strong>c)</strong> La intensitat \\(I\\) que consumeix el motor elèctric. [0,5 punts]
               <br><strong>d)</strong> La potència total dissipada \\(P_{diss}\\) pel conjunt motor-reductor. [0,5 punts]
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
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex4/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">
        La placa d’alumini de la figura, de gruix
\\(e = 5 \\; \\text{mm}\\), està articulada a terra en el punt
O. Per a mantenir-la en repòs s’utilitza un
cable d’acer que es fixa en el punt A i que té la
direcció que es mostra en la figura. El cable té
una secció circular de diàmetre \\(d = 2 \\; \\text{mm}\\). La
densitat de l’alumini és \\(ρ_{alumini} = 2 710 kg/m^{3}\\) i el mòdul elàstic de l'acer és \\(E_{acer} = 207 \\; \\text{GPa}\\).
              
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la placa. [0,5 punts]
               <br><strong>Determineu:)</strong>
               <br><strong>b)</strong> La massa \\(m\\) de la placa. [0,5 punts]
               <br><strong>c)</strong> La força \\(T\\) que fa el cable, i les forces horitzontal \\(F_{h}\\) i vertical \\(F_{v}\\) en el punt O. [1 punt]
               <br><strong>d)</strong>  La tensió normal \\(σ\\) del cable i el seu allargament unitari \\(ε\\). Si el límit elàstic de l’acer
és \\(σ_{e,acer} = 350 \\; \\text{MPa}\\), el cable s’arriba a deformar de manera permanent? [0,5 punts]
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
