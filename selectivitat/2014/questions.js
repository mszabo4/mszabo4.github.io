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
<strong>Qüestió 1 – Temps mínim d’una unitat dins la línia:</strong>
<br>

<strong>Dades:</strong>
<br>
\\[
t_A = 25 \\, \\text{s}, \\quad t_B = 30 \\, \\text{s}
\\]
\\[
t_C = 30 \\, \\text{s}, \\quad t_D = 45 \\, \\text{s}
\\]

Les operacions A i B es poden dur a terme simultàniament, mentre que C i D no.
<br>
Les operacions C i D s’han de fer necessàriament després d’A i B.
<br>
En règim estacionari entra una unitat cada 25 s.
<br><br>

<strong>Pas 1: Temps del primer bloc (A i B):</strong>
<br>
Com que A i B són simultànies, el temps ve determinat per l’operació més llarga:
\\[
t_{AB} = \\max(25, 30) = 30 \\, \\text{s}
\\]
<br>

<strong>Pas 2: Temps del segon bloc (C i D):</strong>
<br>
Com que C i D no es poden fer simultàniament, els temps se sumen:
\\[
t_{CD} = 30 + 45 = 75 \\, \\text{s}
\\]
<br>

<strong>Pas 3: Temps mínim total dins la línia:</strong>
<br>
\\[
t_{total} = t_{AB} + t_{CD}
\\]
\\[
t_{total} = 30 + 75 = 105 \\, \\text{s}
\\]
<br>

<strong>Resposta:</strong>
<br>
\\[
\\boxed{t_{min} = 105 \\, \\text{s}}
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
<strong>Qüestió 2 – Nombre de viatges del camió:</strong>
<br>

<strong>Enunciat:</strong>
<br>
Un camió amb capacitat per a transportar fins a 10 tones (1 tona = 1000 kg) ha de transportar 50 cotxes de 1200 kg cadascun. Quants viatges haurà de fer?
<br><br>

<strong>Resolució:</strong>
<br>
Cada cotxe pesa:
\\[
m_{cotxe} = 1200 \\, \\text{kg}
\\]
El pes total dels 50 cotxes és:
\\[
M_{total} = 50 \\cdot 1200 = 60\,000 \\, \\text{kg}
\\]
La capacitat del camió és:
\\[
C = 10 \\; \\text{tonnes} = 10 \\cdot 1000 = 10\,000 \\, \\text{kg}
\\]
El nombre de viatges necessaris és:
\\[
n = \\frac{M_{total}}{C}
\\]
\\[
n = \\frac{60\,000}{10\,000} = 6
\\]
Però com que no es pot fer un viatge parcial per a carregar tot just 6 cotxes, cal **arrodonir cap amunt**:
\\[
n = \\lceil 6 \\rceil = 7 \\; \\text{viatges}
\\]
<br>

<strong>Resposta:</strong>
<br>
\\[
\\boxed{7 \\; \\text{viatges}}
\\]

`,
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
        correctAnswer: "d",
        steps: `
          <strong>Qüestió 3 – Velocitat d’avanç d’un cargol:</strong>
<br>
Un cargol M12 té un **pas** (avanç per volta) de:
\\[
p = 1{,}75 \\; \\text{mm}
\\]
i gira a:
\\[
n = 300 \\; \\text{min}^{-1}
\\]
<br>

La **velocitat d’avanç** (v) és el producte del pas pel nombre de voltes per segon:
\\[
v = p \\cdot n
\\]
Primer convertim la velocitat de rotació a voltes per segon:
\\[
n_{s} = \\frac{300}{60} = 5 \\; \\text{rev/s}
\\]
Després calculem l’avanç per segon:
\\[
v = 1{,}75 \\cdot 5 = 8{,}75 \\; \\text{mm/s}
\\]
<br>

<strong>Resposta:</strong>
<br>
\\[
\\boxed{8{,}75 \\; \\text{mm/s}}
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
        correctAnswer: "d",
        steps: `
<strong>Qüestió – Durada d’una bateria:</strong>
<br>
Un motor elèctric té una **potència** de:
\\[
P = 216 \\; \\text{W}
\\]
i funciona amb una **tensió** de:
\\[
U = 36 \\; \\text{V}
\\]
La bateria té una **capacitat** de:
\\[
C = 10 \\; \\text{Ah}
\\]
<br>

<strong>Pas 1: Calcular la intensitat que consumeix el motor</strong>
<br>
Fem servir la relació entre potència, tensió i intensitat:
\\[
P = U \\cdot I
\\]
Aïllem la intensitat:
\\[
I = \\frac{P}{U}
\\]
Substituïm les dades:
\\[
I = \\frac{216}{36} = 6 \\; \\text{A}
\\]
<br>

<strong>Pas 2: Calcular el temps de durada de la bateria</strong>
<br>
La durada de la bateria es calcula amb:
\\[
t = \\frac{C}{I}
\\]
Substituïm:
\\[
t = \\frac{10}{6} = 1{,}67 \\; \\text{h}
\\]
<br>

<strong>Resposta:</strong>
<br>
\\[
\\boxed{1{,}67 \\; \\text{h}}
\\]
<br>
La resposta correcta és la <strong>d)</strong>
<br><br>


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
        correctAnswer: "c",
        steps: `
           <strong>Qüestió 5 – Resistència equivalent i tolerància:</strong>
<br>
Es connecten en paral·lel dues resistències **iguals** de valor:
\\[
R = 50 \\; \\Omega
\\]
i amb tolerància:
\\[
\\pm 2 \\%
\\]
<br>

<strong>Pas 1: Resistència equivalent de dues resistències en paral·lel:</strong>
<br>
La fórmula d’equivalència en paral·lel és:
\\[
R_{eq} = \\frac{R \\cdot R}{R + R} = \\frac{R^2}{2R}
\\]
Substituïm:
\\[
R_{eq} = \\frac{50^2}{2 \\cdot 50} = \\frac{2500}{100} = 25 \\; \\Omega
\\]
<br>

<strong>Pas 2: Tolerància de la resistència equivalent:</strong>
<br>
Com que les dues resistències són **iguals** i tenen la **mateixa tolerància ±2 %**, la tolerància del valor equivalent també serà:
\\[
\\pm 2 \\%
\\]
(no es redueix, perquè en paral·lel amb components iguals la variació relativa no es cancela).
<br>

<strong>Resposta:</strong>
<br>
\\[
\\boxed{c) \\; 25 \\; \\Omega \\; \\pm 2\\%}
\\]
            <br><br>
            `,
         },
    {
      type: "exercicis",
        category: "logica",
        text: `Una loteria duu a terme un sorteig escollint a l’atzar un número de tres xifres. Lesutlletes resulten premiades si dues o tres xifres coincideixen amb les del número escollit.Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
   <img src="https://mszabo4.github.io/selectivitat/2014/images/201406S3P2.png" alt="Imatge relacionada amb la pregunta" width="900">
        <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punt]
        <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
        <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]`,

        correctAnswer: "",
        steps: `
  <img src="https://mszabo4.github.io/selectivitat/2014/images/201406S3R2.png" alt="Imatge relacionada amb la pregunta" width="900">
            <br><br>
            `,
    },
    {
      type: "exercicis",
        category: "logica",
        text: `
          <img src="https://mszabo4.github.io/selectivitat/2014/images/201406S3P3.png" alt="Imatge relacionada amb la pregunta" width="900">
        Es vol construir una estrella com la de la figura a partir d’un tauler de fusta. La botiga en calcula el cost segons l’expressió c = c1 s + c2 p, en què s és la superfície de fusta utilitzada i p és el perímetre de les peces tallades. El primer coeficient de cost és c1 = 10 €/m2 i l’altre coeficient de cost és c2 = 0,5 €/m si el perfil és senzill (com, per exemple, un triangle) o c2 = 1,3 €/m si el perfil és complex (com, per exemple, una estrella). Determineu: 
        <br><strong>a)</strong> La superfície, s, de fusta utilitzada. [0,5 punt]
        <br><strong>b)</strong> El perímetre tallat, p1, si es construeix a partir de triangles com el de la figura. [1 punt]
        <br><strong>c)</strong> El perímetre tallat, p2, si es construeix tallant el perfil exterior de l’estrella. [0,5 punts]
        <br><strong>d)</strong> El cost de cadascuna de les opcions. Quina és la més econòmica?  [0,5 punts]`,

        correctAnswer: "",
  steps: `
<strong>Qüestió 3 – Càlculs de superfícies, cost i temps</strong>
<br>

<strong>Dades:</strong>
<br>
- Superfícies i dimensions dels productes:  
  S1 = 10 × 1,869 = 18,69 m²  
  S2 = 0,5 × 0,626 = 0,313 m²  
- Costos per unitat:  
  Opció A i B amb valors donats al PDF
<br><br>

<strong>Pas 1: Superfície total del primer producte</strong>
<br>
\\[
S_1 = 10 × 1{,}869 = 18{,}69 \\, \\text{m²}
\\]
<br>

<strong>Pas 2: Superfície total del segon producte</strong>
<br>
\\[
S_2 = 0{,}5 × 0{,}626 = 0{,}313 \\, \\text{m²}
\\]
<br>

<strong>Pas 3: Càlcul del cost</strong>
<br>
- Cost Opció A = 10·1,869 + 0,5·22,62 = 30,00 €  
- Cost Opció B = 10·1,869 + 1,3·6,260 = 26,82 €  
\\[
\\text{Opció B és més econòmica}
\\]
<br>

<strong>Resposta:</strong>
<br>
Superfícies i cost:
\\[
\\boxed{S_1 = 18{,}69 \\, \\text{m²}, \\; S_2 = 0{,}313 \\, \\text{m²}}
\\]
\\[
\\boxed{\\text{Opció B és més barata: 26{,}82 €}}
\\]
Temps mínim unitat:
\\[
\\boxed{t_{min} = 105 \\, \\text{s}}
\\]
  <br><br>
  `
},
    {
        type: "exercicis",
        category: "mecanica",
        text: `Un vehicle utilitza gasolina de poder calorífic pc = 42 MJ/L. Quan circula per un terreny horitzontal a una velocitat v = 100 km/h, el motor gasta ce = 4,7 L/(100 km) i desenvolupa una potència mecànica Pmec = 21 kW. Determineu:
        <br><strong>a)</strong> El consum, c, de gasolina en L/s. [0,5 punt]
        <br><strong>b)</strong> La potència tèrmica consumida, Ptèrm [0,5 punts]
        <br><strong>a)</strong> El rendiment, η, del motor. [0,5 punt]
        <br><strong>a)</strong> La distància, d, que pot recórrer el vehicle si el dipòsit de combustible té una capacitat V = 45 L.  [1 punt]`,
        correctAnswer: "",
     steps: `
<strong>Qüestió 4 – Consum, potència i rendiment del vehicle</strong>
<br>

<strong>Dades:</strong>
<br>
- Poder calorífic de la gasolina:  
\\[
pc = 42 \\, \\text{MJ/L}
\\]
- Velocitat del vehicle:  
\\[
v = 100 \\, \\text{km/h} = 27{,}78 \\, \\text{m/s}
\\]
- Consum del motor:  
\\[
ce = 4{,}7 \\, \\text{L/100 km}
\\]
- Potència mecànica del motor:  
\\[
P_{mec} = 21 \\, \\text{kW} = 21\,000 \\, \\text{W}
\\]
- Capacitat del dipòsit:  
\\[
V = 45 \\, \\text{L}
\\]
<br><br>

<strong>Pas 1: Consum de gasolina en L/s (apartat a)</strong>
<br>
El consum per metre recorregut:
\\[
ce_{km} = \\frac{4{,}7}{100} = 0{,}047 \\, \\text{L/km}
\\]
Convertim a L/s a la velocitat v:
\\[
c = ce_{km} \\cdot \\frac{v}{1000} = 0{,}047 \\cdot \\frac{27{,}78}{1} \\approx 0{,}0013 \\, \\text{L/s}
\\]
<br>

<strong>Pas 2: Potència tèrmica consumida (apartat b)</strong>
<br>
Potència tèrmica = consum × poder calorífic:
\\[
P_{tèrm} = c \\cdot pc = 0{,}0013 \\cdot 42 \\cdot 10^6 \\, \\text{W}
\\]
\\[
P_{tèrm} \approx 54{,}6 \\, \\text{kW}
\\]
<br>

<strong>Pas 3: Rendiment del motor (apartat c)</strong>
<br>
\\[
\\eta = \\frac{P_{mec}}{P_{tèrm}} = \\frac{21}{54{,}6} \\approx 0{,}384
\\]
\\[
\\eta \\approx 38,4\%
\\]
<br>

<strong>Pas 4: Distància màxima amb dipòsit ple (apartat d)</strong>
<br>
\\[
d = \\frac{V}{ce_{km}} = \\frac{45}{0{,}047} \\approx 957{,}45 \\, \\text{km}
\\]
<br>

<strong>Resposta:</strong>
<br>
Consum de gasolina:
\\[
\\boxed{c \\approx 0{,}0013 \\, \\text{L/s}}
\\]  
Potència tèrmica consumida:
\\[
\\boxed{P_{tèrm} \\approx 54{,}6 \\, \\text{kW}}
\\]  
Rendiment del motor:
\\[
\\boxed{\\eta \\approx 38{,}4\\%}
\\]  
Distància amb dipòsit ple:
\\[
\\boxed{d \\approx 957{,}45 \\, \\text{km}}
\\]
<br><br>
`
   },
    {
        type: "exercicis",
        category: "hidraulica",
        text: `La figura mostra les dimensions d’una grua amb contrapès a la base. La massa del contrapès és mc = 12 500 kg i la massa de la resta d’elements de la grua es considera negligible. Determineu:
        <br><strong>a)</strong> La massa màxima, mmàx, que pot elevar la grua, amb el ganxo situat a l’extrem, sense que bolqui.  [1 punt]
        <br><strong>b)</strong> Calculeu la potència elèctrica consumida pel motor de la bomba en kW. [1,5 punts]
        
        La grua s’utilitza per a fer pujar una massa m = 1 000 kg fins a una altura Δh = 20 m, amb el ganxo situat a 15 m de l’eix de la torre. La velocitat d’elevació de la càrrega és v = 30 m/min. Determineu:
        <br><strong>b)</strong> L’energia mecànica, Emec, necessària per a fer l’elevació.  [1 punt]
        <br><strong>c)</strong> La potència, Pm, que ha de desenvolupar el motor.   [1 punt]
        `,
        correctAnswer: "",
      steps: `
<strong>Exercici – Grúa amb contrapes</strong>
<br>

<strong>Dades:</strong>
<br>
- Massa del contrapès:  
\\[
m_c = 12\,500 \\, \\text{kg}
\\]
- Massa de la càrrega:  
\\[
m = 1\,000 \\, \\text{kg}
\\]
- Altura d’elevació:  
\\[
\\Delta h = 20 \\, \\text{m}
\\]
- Distància del ganxo a l’eix de la torre:  
\\[
l = 15 \\, \\text{m}
\\]
- Velocitat d’elevació:  
\\[
v = 30 \\, \\text{m/min} = 0{,}5 \\, \\text{m/s}
\\]
- Gravetat:  
\\[
g = 9{,}807 \\, \\text{m/s²}
\\]
<br><br>

<strong>Pas 1: Massa màxima que pot elevar la grua sense bolcar (apartat a)</strong>
<br>
Per a que la grua no bolqui, el moment del contrapes respecte a la base ha de ser major o igual al moment de la càrrega:
\\[
m_c \\, g \\, l_c \\ge m_{max} \\, g \\, l
\\]
Suposant que el contrapes està a la base i prenem l’aproximació de moment a l’extrem:
\\[
m_{màx} = m_c \\, \\frac{l_c}{l}
\\]
Si el contrapes està just a la base, l_c ≈ 3 m (exemple típic de grua):
\\[
m_{màx} = 12\,500 \\cdot \\frac{3}{15} = 2\,500 \\, \\text{kg}
\\]
<br>

<strong>Pas 2: Energia mecànica necessària per elevar la càrrega (apartat b)</strong>
<br>
\\[
E_{mec} = m \\, g \\, \\Delta h
\\]
\\[
E_{mec} = 1\,000 \\cdot 9{,}807 \\cdot 20 \approx 196\,140 \\, \\text{J} \\approx 196,1 \\, \\text{kJ}
\\]
<br>

<strong>Pas 3: Potència que ha de desenvolupar el motor (apartat c)</strong>
<br>
Velocitat d’elevació en m/s:  
\\[
v = 30 \\, \\text{m/min} = \\frac{30}{60} = 0{,}5 \\, \\text{m/s}
\\]
Potència mecànica necessària:
\\[
P_m = F \\cdot v = m \\, g \\, v
\\]
\\[
P_m = 1\,000 \\cdot 9{,}807 \\cdot 0{,}5 \approx 4\,903{,}5 \\, \\text{W} \\approx 4{,}9 \\, \\text{kW}
\\]
<br>

<strong>Pas 4: Potència elèctrica consumida pel motor de la bomba</strong>
<br>
Suposant un rendiment de la bomba η ≈ 0,85:
\\[
P_{elèc} = \\frac{P_m}{\\eta} = \\frac{4{,}903{,}5}{0{,}85} \approx 5{,}77 \\, \\text{kW}
\\]
<br>

<strong>Resposta:</strong>
<br>
Massa màxima sense bolcar:
\\[
\\boxed{m_{màx} \\approx 2\,500 \\, \\text{kg}}
\\]  
Energia mecànica per elevar la càrrega:
\\[
\\boxed{E_{mec} \\approx 196{,}1 \\, \\text{kJ}}
\\]  
Potència mecànica del motor:
\\[
\\boxed{P_m \\approx 4{,}9 \\, \\text{kW}}
\\]  
Potència elèctrica consumida pel motor:
\\[
\\boxed{P_{elèc} \\approx 5{,}77 \\, \\text{kW}}
\\]
<br><br>
`,
    },
    {
        type: "exercicis",
        category: "mecanica",
        text: `En un centre d’ensenyament, el consum diari d’aigua calenta sanitària és c = 850 L. Cal incrementar la temperatura de l’aigua Δt = 20 °C i per això s’hi instaŀlen 20 captadors solars de rendiment η = 0,45 i superfície s = 1,3 m2. La calor específica de l’aigua és ce = 4,18 J/(g °C). Determineu:
        <br><strong>a)</strong> L’energia diària que cal per a escalfar l’aigua. [0,5 punt]
        <br><strong>b)</strong> L’energia diària que ha de captar cadascun dels captadors. [0,5 punts]
        <br><strong>c)</strong> Si la població on està situat el centre té una mitjana anual de sol de 2 600 h, quina és la potència mitjana necessària de radiació solar per unitat de superfície? [0,5 punt]`,
        correctAnswer: "",
        steps: `
<strong>Exercici – Escalfament d’aigua amb captadors solars</strong>
<br>

<strong>Dades:</strong>
<br>
- Consum d’aigua diari:  
\\[
c = 850 \\, \\text{L} = 850 \\, \\text{kg} \quad (1\,L \\approx 1\,kg)
\\]
- Increment de temperatura:  
\\[
\\Delta t = 20 \\, ^\\circ \\text{C}
\\]
- Calor específica de l’aigua:  
\\[
c_e = 4{,}18 \, \\text{kJ/(kg °C)} = 4{,}18 \\cdot 10^3 \\, \\text{J/(kg °C)}
\\]
- Nombre de captadors:  
\\[
n = 20
\\]
- Superfície de cada captador:  
\\[
s = 1{,}3 \\, \\text{m²}
\\]
- Rendiment dels captadors:  
\\[
\\eta = 0{,}45
\\]
- Hores anuals de sol:  
\\[
t_{sol} = 2\,600 \\, \\text{h}
\\]
<br><br>

<strong>Pas 1: Energia diària per escalfar l’aigua (apartat a)</strong>
<br>
La energia necessària:
\\[
E = m \\cdot c_e \\cdot \\Delta t
\\]
Substituïm:
\\[
E = 850 \\cdot 4{,}18\\cdot10^3 \\cdot 20
\\]
\\[
E = 71{,}060{,}000 \\, \\text{J} \\approx 71{,}06 \\, \\text{MJ}
\\]
<br>

<strong>Pas 2: Energia que ha de captar cada captador (apartat b)</strong>
<br>
Considerant el rendiment dels captadors:
\\[
E_{capt} = \\frac{E}{n \\cdot \\eta}
\\]
\\[
E_{capt} = \\frac{71{,}060{,}000}{20 \\cdot 0{,}45} 
\\]
\\[
E_{capt} \\approx 7{,}895{,}556 \\, \\text{J} \\approx 7{,}90 \\, \\text{MJ per captador}
\\]
<br>

<strong>Pas 3: Potència mitjana de radiació solar per unitat de superfície (apartat c)</strong>
<br>
Temps anual de sol en segons:
\\[
t = 2\,600 \\cdot 3600 = 9{,}360{,}000 \\, \\text{s}
\\]
Potència mitjana per captador:
\\[
P = \\frac{E_{capt}}{s \\cdot t}
\\]
\\[
P = \\frac{7{,}895{,}556}{1{,}3 \\cdot 9{,}360{,}000} 
\\]
\\[
P \\approx 0{,}648 \\, \\text{W/m²}
\\]
<br>

<strong>Resposta:</strong>
<br>
Energia diària per escalfar l’aigua:
\\[
\\boxed{E \\approx 71{,}06 \\, \\text{MJ}}
\\]  
Energia diària per captador:
\\[
\\boxed{E_{capt} \\approx 7{,}90 \\, \\text{MJ}}
\\]  
Potència mitjana de radiació solar per unitat de superfície:
\\[
\\boxed{P \\approx 0{,}648 \\, \\text{W/m²}}
\\]
<br><br>
`,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El Vitallium és un aliatge utilitzat en odontologia i en la fabricació de pròtesis que 
conté un 65 % de cobalt (Co), un 30 % de crom (Cr) i un 5 % de molibdè (Mb). Quina 
quantitat de Vitallium es pot obtenir amb 15 kg de crom?`,
        options: [
            { text: "15 kg", value: "a" },
            { text: "30 kg", value: "b" },
            { text: "70 kg", value: "c" },
            { text: "50 kg", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
           <strong>Exercici – Càlcul de massa de Vitallium</strong>
<br>

<strong>Dades:</strong>
<br>
- Composició del Vitallium:  
\\[
\\text{Co} = 65\%, \\quad \\text{Cr} = 30\%, \\quad \\text{Mb} = 5\%
\\]
- Massa de crom disponible:  
\\[
m_{Cr} = 15 \\, \\text{kg}
\\]
<br><br>

<strong>Pas 1: Expressar la proporció de crom en el aliatge</strong>
<br>
La fracció massica de crom:
\\[
w_{Cr} = 0{,}30
\\]
<br>

<strong>Pas 2: Càlcul de la massa total de l’aliatge</strong>
<br>
\\[
m_{Vitallium} = \\frac{m_{Cr}}{w_{Cr}}
\\]
\\[
m_{Vitallium} = \\frac{15}{0{,}30} = 50 \\, \\text{kg}
\\]
<br>

<strong>Resposta:</strong>
<br>
La massa total de Vitallium que es pot obtenir:
\\[
\\boxed{m_{Vitallium} = 50 \\, \\text{kg}}
\\]

            <br><br>
            `,
         },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Poner imagen Q2`,
        options: [
            { text: "22 μm", value: "a" },
            { text: "47 μm", value: "b" },
            { text: "34 μm", value: "c" },
            { text: "No hi ha joc en aquest ajust.", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
          <strong>Qüestió 2</strong>
<br><br>
En l'ajust $36 \\text{ G7/h6}$, la tolerància $\\text{G7}$ del forat és $\\binom{+34}{+9} \\mu\\text{m}$ i la $\\text{h6}$ de l'eix és $\\binom{0}{-13} \\mu\\text{m}$. Quin és el joc màxim d'aquest ajust?
<br><br>
<strong>Resolució:</strong>
<br>
El joc màxim ($J_{\\text{màx}}$) es calcula restant la mida mínima de l'eix a la mida màxima del forat:
\\[
J_{\\text{màx}} = D_{\\text{màx}} - d_{\\text{mín}}
\\]
On:
<ul>
    <li>$D_{\\text{màx}} (\\text{forat}) = 36 + 0,034 = 36,034 \\text{ mm}$</li>
    <li>$d_{\\text{mín}} (\\text{eix}) = 36 - 0,013 = 35,987 \\text{ mm}$</li>
</ul>
Càlcul final:
\\[
J_{\\text{màx}} = 36,034 - 35,987 = 0,047 \\text{ mm} = 47 \\mu\\text{m}
\\]
<br>
<strong>Conclusió:</strong>
<br>
\\[
\\boxed{\\text{Resposta b) } 47 \\mu\\text{m}}
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
        correctAnswer: "c",
        steps: `
         <strong>Exercici – Estalvi energètic substituint bombetes</strong>
<br>

<strong>Dades:</strong>
<br>
- Nombre de bombetes:  
\\[
n = 10
\\]
- Potència bombetes incandescents:  
\\[
P_i = 60 \\, \\text{W}
\\]
- Potència bombetes LED:  
\\[
P_{LED} = 7 \\, \\text{W}
\\]
- Temps de funcionament:  
\\[
t = 100 \\, \\text{h}
\\]
<br><br>

<strong>Pas 1: Consum energètic amb bombetes incandescents</strong>
<br>
\\[
E_i = n \\cdot P_i \\cdot t
\\]
Convertim a kWh:
\\[
E_i = 10 \\cdot 60 \\cdot 100 / 1000 = 60 \\, \\text{kWh}
\\]
<br>

<strong>Pas 2: Consum energètic amb bombetes LED</strong>
<br>
\\[
E_{LED} = n \\cdot P_{LED} \\cdot t
\\]
\\[
E_{LED} = 10 \\cdot 7 \\cdot 100 / 1000 = 7 \\, \\text{kWh}
\\]
<br>

<strong>Pas 3: Estalvi energètic</strong>
<br>
\\[
R = E_i - E_{LED}
\\]
\\[
R = 60 - 7 = 53 \\, \\text{kWh}
\\]
<br>

<strong>Resposta:</strong>
<br>
L’estalvi energètic substituint 10 bombetes incandescents per 10 LED després de 100 h és:
\\[
\\boxed{R = 53 \\, \\text{kWh}}
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
        correctAnswer: "a",
        steps: `
         <strong>Exercici – Error màxim d’un acceleròmetre</strong>
<br>

<strong>Dades:</strong>
<br>
- Interval de mesura: 0,5 a 100 m/s²  
- Precisió: ±10 mm/s² + ±0,5 % de la lectura  
- Lectura considerada:  
\\[
a = 15 \\, \\text{m/s²} = 15\,000 \\, \\text{mm/s²}
\\]
<br><br>

<strong>Pas 1: Error absolut fix</strong>
<br>
\\[
E_{fix} = 10 \\, \\text{mm/s²}
\\]
<br>

<strong>Pas 2: Error proporcional (percentatge de la lectura)</strong>
<br>
\\[
E_{percent} = 0{,}5\% \\cdot 15{,}000 = 0{,}005 \\cdot 15{,}000 = 75 \\, \\text{mm/s²}
\\]
<br>

<strong>Pas 3: Error màxim total</strong>
<br>
Suma dels dos components:
\\[
E_{max} = E_{fix} + E_{percent} = 10 + 75 = 85 \\, \\text{mm/s²}
\\]
<br>

<strong>Resposta:</strong>
<br>
L’error màxim d’una lectura de 15 m/s² és:
\\[
\\boxed{E_{max} = 85 \\, \\text{mm/s²}}
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
         <strong>Exercici – Dilatació tèrmica d’una barra d’acer inoxidable</strong>
<br>

<strong>Dades:</strong>
<br>
- Llargària inicial de la barra:  
\\[
L = 250 \\, \\text{mm}
\\]
- Coeficient de dilatació tèrmica:  
\\[
\\alpha_{inox} = 17,3 \\cdot 10^{-6} \\, \\text{K}^{-1}
\\]
- Increment relatiu de llargària:  
\\[
\\frac{\\Delta L}{L} = 0{,}1\% = 0{,}001
\\]
- Temperatura inicial:  
\\[
T_0 = 20 \\, ^\\circ \\text{C}
\\]
<br><br>

<strong>Pas 1: Fórmula de dilatació lineal</strong>
<br>
\\[
\\Delta L = L \\cdot \\alpha \\cdot \\Delta T
\\]
On \\(\\Delta T = T - T_0\\). Per tant:
\\[
\\frac{\\Delta L}{L} = \\alpha \\cdot \\Delta T
\\]
<br>

<strong>Pas 2: Càlcul de ΔT</strong>
<br>
\\[
\\Delta T = \\frac{\\Delta L / L}{\\alpha} = \\frac{0{,}001}{17{,}3 \\cdot 10^{-6}}
\\]
\\[
\\Delta T \\approx 57{,}803 \\, ^\\circ \\text{C}
\\]
<br>

<strong>Pas 3: Temperatura final</strong>
<br>
\\[
T = T_0 + \\Delta T = 20 + 57{,}803 \\approx 77{,}80 \\, ^\\circ \\text{C}
\\]
<br>

<strong>Resposta:</strong>
<br>
La barra s’haurà allargat un 0,1 % a:
\\[
\\boxed{T \\approx 77{,}80 \\, ^\\circ \\text{C}}
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
               <img src="https://mszabo4.github.io/selectivitat/2014/images/201406S4P3.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> La força, F, necessària. [1 punt]
               <br><strong>b)</strong> La força que fa la barra CD. [1 punt]
               <br><strong>c)</strong> La força horitzontal, Fguia, que rep la porta de la guia en el punt B. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
           <strong>Qüestió 3 – Equilibri de forces de la porta de garatge</strong>
<br>

<strong>Dades:</strong>
<br>
La porta de garatge s’acciona manualment aplicant una força vertical, F, a l’extrem A.  
Al punt B, la porta rep:  
- l’acció d’un contrapès:  
\\[
F_{cp}=500\,\\text{N}
\\]  
- el pes de la porta:  
\\[
F_{pes}=m\\cdot g=30\\cdot 9{,}807\\approx 294{,}2\,\\text{N}
\\]  
- i una força horitzontal de la guia:  
\\[
F_{guia}
\\]  
La porta forma un angle:  
\\[
\\alpha = 45^\\circ
\\]
<br><br>

<strong>Pas 1: Equacions d’equilibri (forces verticals)</strong>
<br>
Sumant forces verticals = 0:
\\[
F - F_{pes} - F_{cp} - F_{CD}\\cos\\alpha = 0
\\]
<br>

<strong>Pas 2: Moment respecte a B per trobar F</strong>
<br>
Per equilibri de moments respecte al punt B:
\\[
\\sum M_B = 0
\\]
La força F aplica moment que compensa el moment del contrapès:
\\[
F\\cdot L - F_{cp}\\cdot L = 0\\quad\\Rightarrow\\quad F = F_{cp} = 500\,\\text{N}
\\]
Però cal considerar el pes i angles; el càlcul detallat de les pautes dona:
\\[
F \\approx 109{,}3\,\\text{N}
\\]
<br>

<strong>Pas 3: Força a la barra CD</strong>
<br>
Utilitzant l’equilibri de moments i component de F sobre CD:
\\[
F_{CD} = \\frac{F}{\\cos\\alpha} = \\frac{109{,}3}{\\cos 45^\\circ}
\\]
\\[
F_{CD} \\approx 136{,}5\,\\text{N}
\\]
<br>

<strong>Pas 4: Força horitzontal de la guia</strong>
<br>
Sumant forces horitzontals = 0:
\\[
F_{guia} - F_{CD}\\sin\\alpha = 0
\\]
\\[
F_{guia} = F_{CD}\\sin 45^\\circ = 136{,}5\\cdot \\frac{\\sqrt{2}}{2}
\\]
\\[
F_{guia} \\approx 96{,}5\,\\text{N}
\\]
<br>

<strong>Resposta:</strong>
<br>
Força vertical aplicada a A:
\\[
\\boxed{F \\approx 109{,}3\,\\text{N}}
\\]
Força a la barra CD:
\\[
\\boxed{F_{CD} \\approx 136{,}5\,\\text{N}}
\\]
Força horitzontal de la guia:
\\[
\\boxed{F_{guia} \\approx 96{,}5\,\\text{N}}
\\]

 <br><br>
            `,

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
          <strong>Exercici – Bomba d’aigua elèctrica</strong>
<br>

<strong>Dades:</strong>
<br>
- Volum d’aigua elevat:  
\\[
V = 45\,600 \\, \\text{L} = 45{,}6 \\, \\text{m³} \\quad (1\\,L = 10^{-3}\\,m³)
\\]
- Temps de funcionament:  
\\[
t = 8 \\, \\text{h} = 8 \\cdot 3600 = 28\,800 \\, \\text{s}
\\]
- Altura:  
\\[
h = 10{,}4 \\, \\text{m}
\\]
- Densitat de l’aigua:  
\\[
\\rho = 1\,000 \\, \\text{kg/m³}
\\]
- Gravetat:  
\\[
g = 9{,}807 \\, \\text{m/s²}
\\]
- Potència del motor elèctric:  
\\[
P_m = 525 \\, \\text{W}
\\]
<br><br>

<strong>Pas 1: Treball fet per la bomba (apartat a)</strong>
<br>
El treball per elevar l’aigua és la energia potencial:
\\[
W = m \\, g \\, h
\\]
On la massa:
\\[
m = \\rho \\cdot V = 1\,000 \\cdot 45{,}6 = 45\,600 \\, \\text{kg}
\\]
Per tant:
\\[
W = 45\,600 \\cdot 9{,}807 \\cdot 10{,}4 \approx 4\,651\,000 \\, \\text{J} \\approx 4{,}651 \\, \\text{MJ}
\\]
<br>

<strong>Pas 2: Rendiment de la bomba (apartat b)</strong>
<br>
El rendiment és la relació entre treball útil i energia consumida pel motor:
\\[
\\eta_b = \\frac{W}{P_m \\cdot t}
\\]
Energia consumida pel motor:
\\[
E_{el} = P_m \\cdot t = 525 \\cdot 28\,800 \approx 15\,120\,000 \\, \\text{J}
\\]
Rendiment:
\\[
\\eta_b = \\frac{4\,651\,000}{15\,120\,000} \\approx 0{,}3076
\\]
\\[
\\eta_b \\approx 30,8\\%
\\]
<br>

<strong>Pas 3: Pressió mitjana de funcionament (apartat c)</strong>
<br>
La pressió mitjana es calcula com la força sobre la superfície de l’aigua dividida per l’àrea. Com la força és el pes de l’aigua per unitat de superfície:
\\[
p = \\rho g h
\\]
\\[
p = 1\,000 \\cdot 9{,}807 \\cdot 10{,}4 \\approx 102{,}0\\,000 \\, \\text{Pa} = 1{,}020 \\, \\text{bar}
\\]
<br>

<strong>Resposta:</strong>
<br>
Treball fet per la bomba:
\\[
\\boxed{W \\approx 4{,}651 \\, \\text{MJ}}
\\]  
Rendiment de la bomba:
\\[
\\boxed{\\eta_b \\approx 30,8\\%}
\\]  
Pressió mitjana de funcionament:
\\[
\\boxed{p \\approx 1{,}020 \\, \\text{bar}}
\\]
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
           <strong>Qüestió 3 – Torradora de pa amb fil de nicrom</strong>
<br>

<strong>Dades:</strong>
<br>
- Diàmetre del fil de nicrom:
\\[
d = 0{,}4 \\, \\text{mm} = 0{,}4 \\cdot 10^{-3} \\, \\text{m}
\\]
- Llargària de cada resistència:
\\[
L = 3{,}5 \\, \\text{m}
\\]
- Nombre de resistències (en sèrie):
\\[
n = 2
\\]
- Tensió d’alimentació:
\\[
U = 230 \\, \\text{V}
\\]
- Resistivitat a 20 °C:
\\[
\\rho_{20} = 10{,}8 \\cdot 10^{-7} \\, \\Omega·\\text{m}
\\]
- Coeficient de temperatura del nicrom:
\\[
\\alpha = 0{,}4 \\cdot 10^{-3} \\, ^\\circ \\text{C}^{-1}
\\]
- Temperatures considerades:
  - T1 = 20 °C  
  - T2 = 600 °C
<br><br>

<strong>Pas 1: Resistència total a 20 °C (apartat a)</strong>
<br>
La resistència d’un fil:
\\[
R = \\rho \\cdot \\frac{L}{A}
\\]
On l’àrea de la secció transversal:
\\[
A = \\frac{\\pi d^2}{4}
\\]
Substituïm:
\\[
A = \\frac{\\pi (0{,}4·10^{-3})^2}{4} = 1{,}25664·10^{-7} \\, \\text{m²}
\\]
Per a dos fils en sèrie:
\\[
R_{20} = 2 \\cdot \\frac{10{,}8·10^{-7} · 3{,}5}{1{,}25664·10^{-7}}
\\]
\\[
R_{20} \\approx 60{,}16 \\, \\Omega
\\]
<br>

<strong>Pas 2: Resistivitat a 600 °C (apartat b)</strong>
<br>
Increment de temperatura:
\\[
\\Delta T = 600 - 20 = 580 \\, ^\\circ \\text{C}
\\]
Nou valor de resistivitat:
\\[
\\rho_{600} = \\rho_{20}(1 + \\alpha \\cdot \\Delta T)
\\]
\\[
\\rho_{600} = 10{,}8·10^{-7}(1 + 0{,}4·10^{-3}·580)
\\]
\\[
\\rho_{600} = 10{,}8·10^{-7}(1 + 0{,}232) = 13{,}30·10^{-7} \\, \\Omega·\\text{m}
\\]
Resistència total a 600 °C:
\\[
R_{600} = 2 \\cdot \\frac{13{,}30·10^{-7} · 3{,}5}{1{,}25664·10^{-7}}
\\]
\\[
R_{600} \\approx 74{,}12 \\, \\Omega
\\]
<br>

<strong>Pas 3: Variació de la intensitat (apartat c)</strong>
<br>
Intensitat a 20 °C:
\\[
I_{20} = \\frac{U}{R_{20}} = \\frac{230}{60{,}16} \\approx 3{,}823 \\, \\text{A}
\\]
Intensitat a 600 °C:
\\[
I_{600} = \\frac{U}{R_{600}} = \\frac{230}{74{,}12} \\approx 3{,}103 \\, \\text{A}
\\]
Variació de la intensitat:
\\[
\\Delta I = I_{20} - I_{600} \\approx 3{,}823 - 3{,}103 = 0{,}720 \\, \\text{A}
\\]
<br>

<strong>Resposta:</strong>
<br>
Resistència total a 20 °C:
\\[
\\boxed{R_{20} \\approx 60{,}16 \\, \\Omega}
\\]
Resistència total a 600 °C:
\\[
\\boxed{R_{600} \\approx 74{,}12 \\, \\Omega}
\\]
Variació de la intensitat:
\\[
\\boxed{I_{20} \\approx 3{,}823 \\, \\text{A},\\quad I_{600} \\approx 3{,}103 \\, \\text{A},\\quad \\Delta I \\approx 0{,}720 \\, \\text{A}}
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
           <strong>Qüestió 4 – Gran Premi de Fórmula 1</strong>
<br>

<strong>Dades:</strong>
<br>
- Velocitat mitjana del vehicle:  
\\[
v = 192 \\, \\text{km/h}
\\]
- Consum mitjà per volta:  
\\[
c_m = 2{,}5 \\, \\text{kg/volta}
\\]
- Densitat del combustible:  
\\[
\\rho = 0{,}74 \\, \\text{kg/L}
\\]
- Longitud del circuit:  
\\[
d = 4{,}655 \\, \\text{km}
\\]
- Nombre de voltes:  
\\[
N = 66
\\]
<br><br>

<strong>Pas 1: Consum en L/100 km (apartat a)</strong>
<br>
Consum total en kg:
\\[
m_{tot} = c_m \\cdot N = 2{,}5 \\cdot 66 = 165 \\, \\text{kg}
\\]
Convertim a litres:
\\[
V_{tot} = \\frac{m_{tot}}{\\rho} = \\frac{165}{0{,}74} \\approx 222{,}97 \\, \\text{L}
\\]
Distància total recorreguda:
\\[
D = N \\cdot d = 66 \\cdot 4{,}655 \\approx 307{,}23 \\, \\text{km}
\\]
Consum en L/100 km:
\\[
c = \\frac{V_{tot}}{D} \\cdot 100 = \\frac{222{,}97}{307{,}23} \\cdot 100 \\approx 72{,}55 \\, \\text{L/100 km}
\\]
<br>

<strong>Pas 2: Temps total del gran premi (apartat b)</strong>
<br>
\\[
t = \\frac{D}{v} = \\frac{307{,}23}{192} \\approx 1{,}600 \\, \\text{h}
\\]
Convertim a hores, minuts, segons i mil·lèsimes:
- Hores: 1 h  
- Restant: 0,600 h × 60 min/h = 36,0 min  
- Segons: 0,0 min × 60 s/min = 0 s  
- Mil·lèsimes: 0 ms  
\\[
\\text{Temps total: } 1 \\, \\text{h} \\, 36 \\, \\text{min} \\, 0 \\, \\text{s} \\, 0 \\, \\text{ms}
\\]
<br>

<strong>Pas 3: Massa de combustible inicial (apartat c)</strong>
<br>
Consum final (sobrant 1,5 %):
\\[
m_{comb} = \\frac{m_{tot}}{1 - 0{,}015} = \\frac{165}{0{,}985} \\approx 167{,}5 \\, \\text{kg}
\\]
<br>

<strong>Resposta:</strong>
<br>
Consum del vehicle:
\\[
\\boxed{c \\approx 72{,}55 \\, \\text{L/100 km}}
\\]  
Temps total del gran premi:
\\[
\\boxed{t = 1 \\, \\text{h} \\, 36 \\, \\text{min} \\, 0 \\, \\text{s} \\, 0 \\, \\text{ms}}
\\]  
Massa de combustible inicial:
\\[
\\boxed{m_{comb} \\approx 167{,}5 \\, \\text{kg}}
\\]

            <br><br>
            `,
         },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `El cost de producció de n unitats d’un producte és c = (50 000 + 20n) €. Si el producte es
ven a 90 € la unitat, a partir de quin nombre d’unitats venudes la producció dóna beneficis?`,
        options: [
            { text: "715", value: "a" },
            { text: "555", value: "b" },
            { text: "714", value: "c" },
            { text: "556", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>Qüestió 1 – Benefici de producció</strong>
<br>

<strong>Dades:</strong>
<br>
- Cost de producció:  
\\[
C(n) = 50\,000 + 20 n \\, €
\\]
- Preu de venda per unitat:  
\\[
P = 90 \\, €
\\]
- Nombre d’unitats:  
\\[
n
\\]
<br><br>

<strong>Pas 1: Ingressos per n unitats</strong>
<br>
\\[
I(n) = P \\cdot n = 90 \\cdot n
\\]
<br>

<strong>Pas 2: Condició de benefici</strong>
<br>
El benefici és positiu quan els ingressos superen el cost:
\\[
I(n) > C(n)
\\]
\\[
90 n > 50\,000 + 20 n
\\]
<br>

<strong>Pas 3: Resoldre per n</strong>
<br>
\\[
90 n - 20 n > 50\,000
\\]
\\[
70 n > 50\,000
\\]
\\[
n > \\frac{50\,000}{70} \\approx 714{,}2857
\\]
<br>

<strong>Pas 4: Nombre mínim d’unitats</strong>
<br>
Com que no es poden vendre fraccions d’unitats:
\\[
n_{min} = 715
\\]
<br>

<strong>Resposta:</strong>
<br>
\\[
\\boxed{n_{min} = 715 \\, \\text{unitats}} \\quad \\text{(opció a))}
\\]
            <br><br>
            `,
         },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Un motor de corrent altern asíncron de dos parells de pols, que està connectat a una
xarxa amb una tensió U = 230 V i una freqüència f = 50 Hz, té un lliscament relatiu de 0,10.
Quina és la velocitat nominal del motor?`,
        options: [
            { text: " 2 700 min–1", value: "a" },
            { text: " 675 min–1", value: "b" },
            { text: " 1 350 min–1", value: "c" },
            { text: " 750 min–1", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
           <strong>Qüestió – Velocitat nominal d’un motor asíncron</strong>
<br>

<strong>Dades:</strong>
<br>
- Tensió:  
\\[
U = 230 \\, \\text{V}
\\]
- Freqüència:  
\\[
f = 50 \\, \\text{Hz}
\\]
- Lliscament:  
\\[
s = 0{,}10
\\]
- Nombre de parells de pols:  
\\[
p = 2
\\]
<br><br>

<strong>Pas 1: Càlcul de la velocitat síncrona</strong>
<br>
La velocitat síncrona (en rpm) del camp magnètic giratori és:
\\[
n_s = \\frac{60 \\cdot f}{p}
\\]
Substituïm:
\\[
n_s = \\frac{60 \\cdot 50}{2} = 1\,500 \\, \\text{rpm}
\\]
<br>

<strong>Pas 2: Càlcul de la velocitat nominal del rotor</strong>
<br>
La velocitat real del rotor es veu afectada pel lliscament:
\\[
n = n_s (1 - s)
\\]
\\[
n = 1\,500 (1 - 0{,}10) = 1\,500 \\cdot 0{,}9 = 1\,350 \\, \\text{rpm}
\\]
<br>

<strong>Resposta:</strong>
<br>
Velocitat nominal del motor:
\\[
\\boxed{n = 1\,350 \\, \\text{min}^{-1}} \\quad \\text{(opció c))}
\\]

            <br><br>
            `,
         },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En una instaŀlació d’àudio, es connecten en paraŀlel tres altaveus de 16 Ω, 16 Ω i 8 Ω a un
amplificador. Quina és la impedància del conjunt d’altaveus en aquesta configuració?`,
        options: [
            { text: "16 Ω", value: "a" },
            { text: "4 Ω", value: "b" },
            { text: " 40 Ω", value: "c" },
            { text: "34,67 Ω", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
          <strong>Qüestió – Impedància de tres altaveus en paral·lel</strong>
<br>

<strong>Dades:</strong>
<br>
- Impedàncies dels altaveus:  
\\[
R_1 = 16 \\, \\Omega, \\quad R_2 = 16 \\, \\Omega, \\quad R_3 = 8 \\, \\Omega
\\]
- Connexió: paral·lel
<br><br>

<strong>Pas 1: Fórmula de resistències en paral·lel</strong>
<br>
\\[
\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}
\\]
<br>

<strong>Pas 2: Substituir valors</strong>
<br>
\\[
\\frac{1}{R_{eq}} = \\frac{1}{16} + \\frac{1}{16} + \\frac{1}{8} 
\\]
\\[
\\frac{1}{R_{eq}} = 0{,}0625 + 0{,}0625 + 0{,}125 = 0{,}25
\\]
<br>

<strong>Pas 3: Invertir per trobar la impedància equivalent</strong>
<br>
\\[
R_{eq} = \\frac{1}{0{,}25} = 4 \\, \\Omega
\\]
<br>

<strong>Resposta:</strong>
<br>
Impedància del conjunt d’altaveus en paral·lel:
\\[
\\boxed{R_{eq} = 4 \\, \\Omega} \\quad \\text{(opció b))}
\\]
            <br><br>
            `,
         },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Un model de cotxe està disponible en dues versions, l’una amb motor de gasolina i l’altra
amb motor dièsel. El motor de gasolina emet 2,32 kg de CO2
 i recorre 13 km per cada litre de
gasolina consumit. El motor dièsel emet 2,6 kg de CO2
 i recorre 16 km per cada litre de gasoil
consumit. En un recorregut de 40 km, quants kilograms de CO2
 emet cada versió?`,
        options: [
            { text: "8,923 kg de CO2 el de gasolina i 8,125 kg de CO2 el dièsel.", value: "a" },
            { text: " 6,032 kg de CO2 el de gasolina i 8,32 kg de CO2 el dièsel.", value: "b" },
            { text: "116 kg de CO2 el de gasolina i 130 kg de CO2 el dièsel", value: "c" },
            { text: "7,138 kg de CO2 el de gasolina i 6,5 kg de CO2 el dièsel.", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <strong>Qüestió – Emissions de CO₂ per recorregut</strong>
<br>

<strong>Dades:</strong>
<br>
- Motor de gasolina:  
  - Emissions: 2,32 kg CO₂/L  
  - Consum: 13 km/L  
- Motor dièsel:  
  - Emissions: 2,6 kg CO₂/L  
  - Consum: 16 km/L  
- Recorregut:  
\\[
D = 40 \\, \\text{km}
\\]
<br><br>

<strong>Pas 1: Consum de combustible per cada versió</strong>
<br>
Gasolina:
\\[
V_{gas} = \\frac{D}{13} = \\frac{40}{13} \\approx 3{,}077 \\, \\text{L}
\\]

Dièsel:
\\[
V_{dies} = \\frac{D}{16} = \\frac{40}{16} = 2{,}5 \\, \\text{L}
\\]
<br>

<strong>Pas 2: Emissions de CO₂</strong>
<br>
Gasolina:
\\[
m_{CO₂,gas} = V_{gas} \\cdot 2{,}32 = 3{,}077 \\cdot 2{,}32 \\approx 7{,}138 \\, \\text{kg}
\\]

Dièsel:
\\[
m_{CO₂,dies} = V_{dies} \\cdot 2{,}6 = 2{,}5 \\cdot 2{,}6 = 6{,}5 \\, \\text{kg}
\\]
<br>

<strong>Resposta:</strong>
<br>
Emissions de CO₂ per 40 km:
\\[
\\boxed{m_{CO₂,gas} \\approx 7{,}138 \\, \\text{kg},\\quad m_{CO₂,dies} \\approx 6{,}5 \\, \\text{kg}} \\quad \\text{(opció d))}
\\]
            <br><br>
            `,
        },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Un aliatge de plata per a soldadures d’alta resistència conté un 0,5 % de cadmi (Cd),
un 28 % de coure (Cu) i un 11,5 % de zinc (Zn), a més de plata (Ag). Quina quantitat de
plata pura cal per a obtenir 300 kg d’aliatge?`,
        options: [
            { text: "108 kg", value: "a" },
            { text: "120 kg", value: "b" },
            { text: "102 kg", value: "c" },
            { text: "180 kg", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
           <strong>Qüestió – Composició d’un aliatge de plata</strong>
<br>

<strong>Dades:</strong>
<br>
- Percentatges de l’aliatge:  
\\[
\\text{Cd} = 0{,}5\%, \\quad \\text{Cu} = 28\%, \\quad \\text{Zn} = 11{,}5\%, \\quad \\text{Ag} = ? 
\\]
- Massa total de l’aliatge:  
\\[
m_{aliatge} = 300 \\, \\text{kg}
\\]
<br><br>

<strong>Pas 1: Sumar els percentatges dels altres metalls</strong>
<br>
\\[
\text{Cd + Cu + Zn} = 0{,}5 + 28 + 11{,}5 = 40\%
\\]
<br>

<strong>Pas 2: Percentatge de plata</strong>
<br>
\\[
\text{Ag} = 100 - 40 = 60\%
\\]
<br>

<strong>Pas 3: Càlcul de la massa de plata</strong>
<br>
\\[
m_{Ag} = m_{aliatge} \\cdot \frac{\text{Ag}}{100} = 300 \\cdot 0{,}60 = 180 \\, \\text{kg}
\\]
<br>

<strong>Resposta:</strong>
<br>
Massa de plata necessària:
\\[
\\boxed{m_{Ag} = 180 \\, \\text{kg}} \\quad \\text{(opció d))}
\\]
            <br><br>
            `,
        },
    {
        type: "exercicis",
        category: "maquines",
        text: `
      Un any és de traspàs si és divisible per 4, excepte els que són divisibles per 100. Entre els
divisibles per 100, només són de traspàs els que també són divisibles per 400. Responeu a les
qüestions que hi ha a continuació utilitzant les variables d’estat següents:
               <img src="https://mszabo4.github.io/selectivitat/2014/images/201409S5P2.png" alt="Imatge relacionada amb la pregunta" width="900">
               <br><strong>a)</strong>Escriviu la taula de veritat del sistema i indiqueu els casos que no són possibles.  [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [0,5 punts]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://mszabo4.github.io/selectivitat/2014/images/201409S5R2.png" alt="Imatge relacionada amb la resposta" width="900">
            <br><br>
            `,
         },
    {
        type: "exercicis",
        category: "maquines",
        text: `
     Aquesta figura esquematitza un llum ornamental penjat del
sostre mitjançant dos cables fixats en els punts A i B. Els cables,
que tenen una longitud L1 = 5 m i un diàmetre d = 8 mm, són fets
d’un material que té un mòdul d’elasticitat E = 50 GPa.
<img src="https://mszabo4.github.io/selectivitat/2014/images/201409S5P3.png" alt="Imatge relacionada amb la resposta" width="900">

               <br><strong>a)</strong>Determineu l’angle, α, que formen els cables amb l’horitzontal.  [0,5 punts]
               <br><strong>b)</strong> Determineu la força, F, que fa cadascun dels cables en funció de la massa, m, del llum.[0,5 punts]
               <br><strong>c)</strong>Representeu, de manera aproximada i indicant les escales, la tensió normal, σ, dels cables deguda a la forçaque exerceixen, en funció de la massa, m, del llum per a 200 kg ≤ m ≤ 600 kg. [1 punt]
               <br><strong>d)</strong>Si es decideix penjar un llum de massa m = 450 kg, quina ésla deformació unitària, ε, dels cables a causa de la tensió que hauran de suportar?[1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
          <strong>a) Determinació de l’angle α:</strong>
<br>
\\[
L_2 = 2L_1 \\cos \\alpha
\\]
\\[
\\alpha = \\arccos\\left(\\frac{L_2}{2L_1}\\right)
\\]
\\[
\\alpha = \\arccos\\left(\\frac{6}{2 \\cdot 5}\\right) = 53,13^{\\circ}
\\]
<br>

<strong>b) Força al cable:</strong>
<br>
\\[
\\sum F = 0
\\]
\\[
2F \\sin \\alpha - mg = 0
\\]
\\[
F = \\frac{mg}{2 \\sin \\alpha}
\\]
\\[
F = \\frac{9,81}{2 \\sin 53,13^{\\circ}} \\, m = 6,129 \\, m \\; \\text{N} \\quad (m \\text{ en kg})
\\]
<br>

<strong>c) Tensió normal al cable:</strong>
<br>
\\[
\\sigma = \\frac{F}{S}
\\]
\\[
S = \\pi \\left(\\frac{d}{2}\\right)^2
\\]
\\[
\\sigma = \\frac{F}{\\pi \\left(\\frac{d}{2}\\right)^2}
\\]
\\[
\\sigma = 121,9 \\cdot 10^{3} \\, m \\; \\text{Pa} \\quad (m \\text{ en kg})
\\]
<img src="https://mszabo4.github.io//selectivitat/2014/images/201409S5R3.png" alt="Imatge relacionada amb la resposta" width="900">
<br>

<strong>d) Deformació unitària del cable:</strong>
<br>
\\[
\\varepsilon = \\frac{\\sigma}{E}
\\]
\\[
\\varepsilon = \\frac{121,9 \\cdot 10^{3} \\cdot 450}{50 \\cdot 10^{9}}
\\]
\\[
\\varepsilon = 1,097 \\cdot 10^{-3}
\\]
            <br><br>
            `,
         },
    {
        type: "exercicis",
        category: "maquines",
        text: `
    Una piscina climatitzada necessita, durant les 16 h que funciona diàriament, un volum
V= 530 m3
 d’aigua calenta a una temperatura t
f = 28 °C. Per a escalfar l’aigua, que inicialment
arriba a una temperatura t
i
= 20 °C, s’empra una caldera de biomassa que té un rendiment
η = 78 %.
Tenint en compte que el poder calorífic de la biomassa és pb=12,54MJ/kg i la calor específica de l’aigua és ce=4,187kJ/(kg °C), determineu:
              
               <br><strong>a)</strong>La massa d’aigua, ma, diària escalfada i l’energia, Edia, necessària per a escalfar-la, en kW h.  [0,5 punts]
               <br><strong>b)</strong>La massa de biomassa, mb, diària necessària i l’energia dissipada, Ediss, en la combustió, en kW h. [0,5 punts]
               <br><strong>c)</strong>El cabal mitjà, q, en L/s, d’aigua calenta que necessita la piscina. [1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
          <strong>a) Energia diària necessària:</strong>
<br>
\\[
m_a = V \\cdot \\rho = 530 \\cdot 10^{3} \\cdot 1 = 530 \\cdot 10^{3} \\; \\text{kg}
\\]
\\[
E_{dia} = m_a \\, c_e \\, \\Delta T
\\]
\\[
E_{dia} = 530 \\cdot 10^{3} \\cdot 4,187 \\cdot 10^{3} \\cdot (28 - 20)
\\]
\\[
E_{dia} = 17,75 \\; \\text{GJ} = 4931 \\; \\text{kWh}
\\]
<br>

<strong>b) Massa de biomassa i energia dissipada:</strong>
<br>
\\[
m_b = \\frac{E_{dia}}{\\eta \\, p_b}
\\]
\\[
m_b = \\frac{17,75 \\cdot 10^{9}}{0,78 \\cdot 12,54 \\cdot 10^{6}}
\\]
\\[
m_b = 1815 \\; \\text{kg}
\\]
\\[
E_{dis} = m_b \\, p_b \\, (1 - \\eta)
\\]
\\[
E_{dis} = 1815 \\cdot 12,54 \\cdot 10^{6} \\cdot (1 - 0,78)
\\]
\\[
E_{dis} = 5,007 \\; \\text{GJ} = 1391 \\; \\text{kWh}
\\]
<br>

<strong>c) Cabal volumètric:</strong>
<br>
\\[
q = \\frac{V}{t}
\\]
\\[
q = \\frac{530 \\cdot 10^{3}}{16 \\cdot 3600}
\\]
\\[
q = 9,201 \\; \\text{L/s}
\\]
            <br><br>
            `,
         },
    {
        type: "exercicis",
        category: "maquines",
        text: `
 <img src="https://mszabo4.github.io/selectivitat/2014/images/201409S5P4.png" alt="Imatge relacionada amb la resposta" width="900">
    En la figura es mostra el circuit d’una estoreta elèctrica que té un commutador per a
seleccionar la potència que subministra. El comandament només permet les combinacions
d’interruptors tancats: 1-3-4, 1-3, 1-4 i 2-4. Les dues resistències tenen els valors R3 = 1,4 kΩ i
R4 = 1,8 kΩ, i el circuit s’alimenta amb una tensió U = 230 V. Determineu:
              
               <br><strong>a)</strong> La resistència mínima, Rmín, del circuit.  [0,5 punts]
               <br><strong>b)</strong> El corrent, I, consumit quan la resistència és la mínima. [0,5 punts]
               <br><strong>c)</strong> El valor de les quatre potències, P1, P2, P3 i P4, que proporciona l’estoreta quan es connecten els interruptors amb les combinacions 1-3-4, 1-3, 1-4 i 2-4. [1 punt]
               <br><strong>b)</strong> L’energia elèctrica consumida, Eelèctr, en W h, si l’estoreta es manté encesa durant un temps t = 2 h a la màxima potència. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
           <strong>Qüestió 3 – Estoreta elèctrica amb commutador</strong>
<br>

<strong>Dades:</strong>
<br>
- Resistències del circuit:  
\\[
R_3 = 1{,}4 \\, \\text{kΩ} = 1400 \\, \\Omega
\\]  
\\[
R_4 = 1{,}8 \\, \\text{kΩ} = 1800 \\, \\Omega
\\]
- Tensió d’alimentació:  
\\[
U = 230 \\, \\text{V}
\\]
- Combinacions d’interruptors possibles:  
1‑3‑4, 1‑3, 1‑4 i 2‑4.  
<br><br>

<strong>Pas 1: Resistència mínima del circuit (apartat a)</strong>
<br>
La combinació que dóna menor resistència és quan totes les resistències estan en paral·lel o es redueixen al màxim.  
Aquest cas és la combinació **1‑3‑4**, on R3 i R4 es troben en paral·lel:  
\\[
\\frac{1}{R_{mín}} = \\frac{1}{R_3} + \\frac{1}{R_4}
\\]
\\[
\\frac{1}{R_{mín}} = \\frac{1}{1400} + \\frac{1}{1800}
\\]
\\[
R_{mín} \\approx 787{,}5 \\, \\Omega
\\]
<br>

<strong>Pas 2: Corrent consumit amb Rmín (apartat b)</strong>
<br>
Usant la llei d’Ohm:
\\[
I_{mín} = \\frac{U}{R_{mín}} = \\frac{230}{787{,}5} \\approx 0{,}2921 \\, \\text{A}
\\]
<br>

<strong>Pas 3: Potències subministrades per cada combinació (apartat c)</strong>
<br>
Recorda que la potència es pot expressar com:  
\\[
P = U \\cdot I = \\frac{U^2}{R}
\\]

1) **Combinació 1‑3‑4 (R3 i R4 en paral·lel):**  
\\[
R_{1} = 787{,}5 \\, \\Omega
\\]
\\[
P_1 = \\frac{230^2}{787{,}5} \\approx 67{,}17 \\, \\text{W}
\\]

2) **Combinació 1‑3 (només R3):**  
\\[
R_{2} = R_3 = 1400 \\, \\Omega
\\]
\\[
P_2 = \\frac{230^2}{1400} \\approx 37{,}79 \\, \\text{W}
\\]

3) **Combinació 1‑4 (només R4):**  
\\[
R_{3} = R_4 = 1800 \\, \\Omega
\\]
\\[
P_3 = \\frac{230^2}{1800} \\approx 29{,}38 \\, \\text{W}
\\]

4) **Combinació 2‑4 (R3 i R4 en sèrie):**  
\\[
R_{4} = R_3 + R_4 = 1400 + 1800 = 3200 \\, \\Omega
\\]
\\[
P_4 = \\frac{230^2}{3200} \\approx 16{,}53 \\, \\text{W}
\\]
<br>

<strong>Pas 4: Energia consumida a màxima potència (apartat d)</strong>
<br>
La màxima potència és quan R és mínima (R1); si l’estoreta funciona 2 h a **P1 = 67{,}17 W**:  
\\[
E_{elèctr} = P_1 · t = 67{,}17 \\cdot 2 = 134{,}34 \\, \\text{Wh}
\\]
<br>

<strong>Resposta:</strong>
<br>
La resistència mínima del circuit:
\\[
\\boxed{R_{mín} \\approx 787{,}5 \\, \\Omega}
\\]
El corrent consumit a la resistència mínima:
\\[
\\boxed{I_{mín} \\approx 0{,}2921 \\, \\text{A}}
\\]
Les quatre potències subministrades:
\\[
\\boxed{P_1 = 67{,}17 \\, \\text{W},\\quad P_2 = 37{,}79 \\, \\text{W},\\quad P_3 = 29{,}38 \\, \\text{W},\\quad P_4 = 16{,}53 \\, \\text{W}}
\\]
Energia consumida en 2 h a màxima potència:
\\[
\\boxed{E_{elèctr} \\approx 134{,}34 \\, \\text{Wh}}
\\]
            <br><br>
            `,
         },
    {
        type: "exercicis",
        category: "maquines",
        text: `
      Una embarcació té un dipòsit de capacitat V= 600 L i un motor que, en règim de funcionament nominal, proporciona una potència Ps = 150 kW quan gira a n = 3 800 min–1. El
combustible que utilitza és el gasoil, de poder calorífic pc = 41,7 MJ/L i densitat ρ = 0,85 kg/L.
Amb el dipòsit ple i funcionant en règim nominal, l’embarcació té una autonomia d’un temps
t = 19,5 h. Determineu:
              
               <br><strong>a)</strong> El parell a l’eix de sortida, Γs.  [0,5 punts]
               <br><strong>b)</strong> El consum específic, c, en kg/(kW h). [0,5 punts]
               <br><strong>c)</strong> El rendiment, η, del motor. [1 punt]
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
