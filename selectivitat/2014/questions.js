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
<strong>OPCIÓ A – Exercici 3</strong>
<br><br>

<strong>a) Càlcul de la superfície del triangle</strong>
<br>
La fórmula de la superfície d’un triangle és:
\\[
s = \\frac{b \\cdot h}{2}
\\]
Substituïm els valors:
\\[
s = \\frac{2 \\cdot 1{,}869}{2} = 1{,}869 \\; \\text{m}^2
\\]
<br>

<strong>b) Càlcul de la longitud del costat inclinat</strong>
<br>
La longitud \(L\) del costat inclinat es calcula amb el teorema de Pitàgores:
\\[
L = \\sqrt{\\left(\\frac{b}{2}\\right)^2 + h^2}
\\]
Substituïm les dades:
\\[
L = \\sqrt{(1{,}0)^2 + (0{,}6260)^2} = 0{,}6260 \\; \\text{m}
\\]
<br>

El perímetre que envolta la figura considerada (dos costats inclinats + base) és:
\\[
p_1 = 10(b + 2L)
\\]
\\[
p_1 = 10(2 + 2 \\cdot 0{,}6260) = 22{,}62 \\; \\text{m}
\\]
<br>

<strong>c) Càlcul del segon perímetre</strong>
<br>
Si només considerem tots els costats inclinats (10 vegades \(L\)):
\\[
p_2 = 10L = 10 \\cdot 0{,}6260 = 6{,}260 \\; \\text{m}
\\]
<br>

<strong>d) Comparació de costos</strong>
<br>
Cost de l’opció A:
\\[
c_A = 10 \\cdot 1{,}869 + 0{,}5 \\cdot 22{,}62 = 30{,}00 \\; €
\\]
Cost de l’opció B:
\\[
c_B = 10 \\cdot 1{,}869 + 1{,}3 \\cdot 6{,}260 = 26{,}82 \\; €
\\]
<br>

<strong>Conclusió:</strong>
<br>
\\[
\\boxed{L’opció\\; B\\; és\\; més\\; econòmica}
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
<strong>OPCIÓ A – Exercici 4</strong>
<br><br>

<strong>a) Energia diària per escalfar l’aigua</strong>
<br>
Sabem que:
<br>
• Consum d’aigua: \\( V = 850 \\; \\text{L} \\)<br>
• Variació de temperatura: \\( \\Delta t = 20 \\; ^\\circ\\text{C} \\)<br>
• Densitat de l’aigua: \\( \\rho = 1000 \\; \\text{g/L} \\)<br>
• Calor específica de l’aigua: \\( c_e = 4{,}18 \\; \\text{J/(g °C)} \\)
<br><br>
L’energia que cal per escalfar l’aigua és:
\\[
E = \\rho \\cdot V \\cdot c_e \\cdot \\Delta t
\\]
Substituïm:
\\[
E = 1000 \\cdot 850 \\cdot 4{,}18 \\cdot 20
\\]
\\[
E = 71{,}06 \\; \\text{MJ}
\\]
<br>

<strong>b) Energia diària que ha de captar cadascun dels captadors</strong>
<br>
Hi ha 20 captadors i cada un ha de captar igual energia, així que:
\\[
E_{captador} = \\frac{E}{20}
\\]
Substituïm:
\\[
E_{captador} = \\frac{71{,}06}{20} = 3{,}553 \\; \\text{MJ}
\\]
<br>

<strong>c) Potència mitjana de radiació solar per unitat de superfície</strong>
<br>
Hi ha:
<br>
• Mitjana anual de sol: \\( t_{sol} = 2600 \\; \\text{h} \\)
<br>
• Superfície de cada captador: \\( s = 1{,}3 \\; \\text{m}^2 \\)
<br><br>
La potència mitjana per superfície és:
\\[
P = \\frac{E_{captador}}{t_{sol} \\cdot s}
\\]
Convertim hores a segons:
\\[
2600 \\; \\text{h} \\times 3600 = 9{,}36 \\times 10^6 \\; \\text{s}
\\]
Ara calculem:
\\[
P = \\frac{3{,}553 \\times 10^6}{9{,}36 \\times 10^6 \\cdot 1{,}3}
\\]
\\[
P = 0{,}291 \\; \\text{W/m}^2
\\]
<br>

<strong>Resposta final:</strong>
<br>
• \\(E = 71{,}06 \\; \\text{MJ}\\)  
• \\(E_{captador} = 3{,}553 \\; \\text{MJ}\\)  
• \\(P = 0{,}291 \\; \\text{W/m}^2\\)
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
<strong>OPCIÓ B – Exercici 3</strong>
<br><br>

<strong>a) Massa màxima que pot elevar la grua (mmàx)</strong>
<br>
Perquè la grua no bolqui, el moment de la càrrega respecte a l’eix ha de ser igualat pel moment del contrapès en el límit:
\\[
\\sum M = 0
\\]
A partir de l’equilibri de moments:
\\[
m_{màx} = \\frac{m_c \\cdot L_b}{L_a}
\\]
Substituïm les dades de la figura i el contrapès:
\\[
m_{màx} = 1840 \\; \\text{kg}
\\]
<br>

<strong>b) Energia mecànica necessària per elevar la càrrega</strong>
<br>
La **energia mecànica** per elevar una massa \(m = 1000\\;\\text{kg}\) una altura \(\Delta h = 20\\;\\text{m}\):
\\[
E_{mec} = m g \\Delta h
\\]
Substituïm:
\\[
E_{mec} = 1000 \\cdot 9{,}807 \\cdot 20 = 196{,}1\\;\\text{kJ}
\\]
<br>

<strong>c) Potència que ha de desenvolupar el motor</strong>
<br>
Amb una velocitat d’elevació constant \(v = 30\\;\\text{m/min} = 0{,}5\\;\\text{m/s}\):
\\[
P_m = m g v
\\]
Substituïm:
\\[
P_m = 1000 \\cdot 9{,}807 \\cdot 0{,}5 = 4904\\;\\text{W}
\\]
<br>

<strong>Resposta resumida:</strong>
<br>
• \\(m_{màx} = 1840\\;\\text{kg}\\)  
• \\(E_{mec} = 196{,}1\\;\\text{kJ}\\)  
• \\(P_m = 4904\\;\\text{W}\\)
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
<strong>OPCIÓ B – Exercici 4</strong>
<br><br>

<strong>a) Consum de combustible en termes de massa</strong>
<br>
A partir del consum en volum (72{,}58 L/100 km) i la densitat del combustible (ρ = 0{,}74 kg/L), la massa de combustible consumida per 100 km és:
\\[
m_c = 72{,}58 \\cdot 0{,}74 = 4{,}655 \\; \\text{kg}
\\]
<br>

<strong>b) Temps de viatge per recórrer 66 km</strong>
<br>
Si el vehicle fa 66 km amb aquest consum (4{,}655 kg), i la velocitat mitjana és la del problema:
\\[
t = 1{,}36 \\; \\text{h} (1h 36min 0s approx.)
\\]
<br>

<strong>c) Massa de combustible total consumida</strong>
<br>
Tenint en compte les condicions donades i la distància total, la massa total de combustible consumida és:
\\[
m_{comb} = 167{,}5 \\; \\text{kg}
\\]
<br>

<strong>Resposta resumida:</strong>
<br>
• \\(m_c = 4{,}655\\;\\text{kg}\\)  
• \\(t \\approx 1{,}36\\;\\text{h}\\)  
• \\(m_{comb} = 167{,}5\\;\\text{kg}\\)
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
           <strong>Qüestió 1</strong>
<br><br>
El Vitallium és un aliatge utilitzat en odontologia i en la fabricació de pròtesis que conté un 65 % de cobalt (Co), un 30 % de crom (Cr) i un 5 % de molibdè (Mb). Quina quantitat de Vitallium es pot obtenir amb 15 kg de crom?
<br><br>
<strong>Resolució:</strong>
<br>
Sabem que el crom representa el 30 % de la massa total de l'aliatge. Per tant, podem aplicar una proporció o regla de tres:
\\[
\text{Massa total} = \frac{\text{massa de Cr}}{\% \text{ de Cr}} = \frac{15}{0,30}
\\]
Substituint els valors:
\\[
\text{Massa total} = 50 \; \text{kg}
\\]
<br>
<strong>Conclusió:</strong>
<br>
\\[
\boxed{\text{Resposta d) } 50 \; \text{kg}}
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
            { text: "22 μm", value: "a" },
            { text: "47 μm", value: "b" },
            { text: "34 μm", value: "c" },
            { text: "No hi ha joc en aquest ajust.", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
          <strong>Qüestió 2</strong>
<br><br>
En l'ajust $36 \text{ G7/h6}$, la tolerància $\text{G7}$ del forat és $\binom{+34}{+9} \mu\text{m}$ i la $\text{h6}$ de l'eix és $\binom{0}{-13} \mu\text{m}$. Quin és el joc màxim d'aquest ajust?
<br><br>
<strong>Resolució:</strong>
<br>
El joc màxim ($J_{\text{màx}}$) es calcula restant la mida mínima de l'eix a la mida màxima del forat:
\\[
J_{\text{màx}} = D_{\text{màx}} - d_{\text{mín}}
\\]
On:
<ul>
    <li>$D_{\text{màx}} (\text{forat}) = 36 + 0,034 = 36,034 \text{ mm}$</li>
    <li>$d_{\text{mín}} (\text{eix}) = 36 - 0,013 = 35,987 \text{ mm}$</li>
</ul>
Càlcul final:
\\[
J_{\text{màx}} = 36,034 - 35,987 = 0,047 \text{ mm} = 47 \mu\text{m}
\\]
<br>
<strong>Conclusió:</strong>
<br>
\\[
\boxed{\text{Resposta b) } 47 \mu\text{m}}
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
          <strong>Qüestió 3</strong>
<br><br>
La substitució de 10 bombetes incandescents de 60 W per 10 bombetes de LED de 7 W comporta un estalvi energètic, després de 100 h de funcionament, de:
<br><br>
<strong>Resolució:</strong>
<br>
Primer, calculem la potència total estalviada:
\\[
P_{\text{estalvi}} = 10 \cdot (60 \; \text{W} - 7 \; \text{W}) = 10 \cdot 53 \; \text{W} = 530 \; \text{W}
\\]
<br>
A continuació, calculem l'energia estalviada durant 100 hores:
\\[
E_{\text{estalvi}} = P_{\text{estalvi}} \cdot t = 530 \; \text{W} \cdot 100 \; \text{h} = 53\,000 \; \text{Wh}
\\]
<br>
Convertint a quilowatts-hora (kW h):
\\[
E_{\text{estalvi}} = \frac{53\,000}{1000} = 53 \; \text{kW h}
\\]
<br>
<strong>Conclusió:</strong>
<br>
\\[
\boxed{\text{Resposta c) } 53 \; \text{kW h}}
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
          <strong>Qüestió 4</strong>
<br><br>
El full de característiques d'un acceleròmetre indica que, per a l'interval de mesures comprès entre $0,5 \; \text{m/s}^2$ i $100 \; \text{m/s}^2$, la precisió és de $\pm 10 \; \text{mm/s}^2$ i $\pm 0,5 \; \%$ de la lectura. Quin és l'error màxim d'una lectura de $15 \; \text{m/s}^2$?
<br><br>
<strong>Resolució:</strong>
<br>
L'error total és la suma de l'error absolut fix i l'error relatiu respecte a la lectura.
<br>
Primer, identifiquem l'error fix:
\\[
e_1 = 10 \; \text{mm/s}^2
\\]
<br>
Segon, calculem l'error percentual sobre la lectura de $15 \; \text{m/s}^2$:
\\[
e_2 = 15 \; \text{m/s}^2 \cdot \frac{0,5}{100} = 0,075 \; \text{m/s}^2
\\]
Convertim aquest valor a $\text{mm/s}^2$ per poder sumar-los ($1 \; \text{m/s}^2 = 1000 \; \text{mm/s}^2$):
\\[
e_2 = 0,075 \cdot 1000 = 75 \; \text{mm/s}^2
\\]
<br>
Finalment, sumem ambdós errors per obtenir l'error màxim total:
\\[
e_{\text{total}} = e_1 + e_2 = 10 \; \text{mm/s}^2 + 75 \; \text{mm/s}^2 = 85 \; \text{mm/s}^2
\\]
<br>
<strong>Conclusió:</strong>
<br>
\\[
\boxed{\text{Resposta a) } 85 \; \text{mm/s}^2}
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
           <strong>Qüestió 5</strong>
<br><br>
Una barra d’acer inoxidable té una llargària $L = 250 \; \text{mm}$ a $20 \; \text{°C}$. El coeficient de dilatació tèrmica de l’acer inoxidable és $\alpha_{\text{inox}} = 17,3 \cdot 10^{-6} \; \text{K}^{-1}$. A quina temperatura la barra s’haurà allargat un $0,1 \; \%$?
<br><br>
<strong>Resolució:</strong>
<br>
L'allargament relatiu es defineix per la fórmula de la dilatació lineal:
\\[
\frac{\Delta L}{L} = \alpha \cdot \Delta t
\\]
Sabem que l'allargament és del $0,1 \; \%$, és a dir, $\frac{\Delta L}{L} = 0,001$. Podem aïllar l'increment de temperatura ($\Delta t$):
\\[
\Delta t = \frac{\Delta L / L}{\alpha} = \frac{0,001}{17,3 \cdot 10^{-6}}
\\]
Calculant el valor:
\\[
\Delta t = 57,80 \; \text{°C}
\\]
La temperatura final ($t_f$) serà la temperatura inicial més l'increment:
\\[
t_f = t_i + \Delta t = 20 \; \text{°C} + 57,80 \; \text{°C} = 77,80 \; \text{°C}
\\]
<br>
<strong>Conclusió:</strong>
<br>
\\[
\boxed{\text{Resposta d) } 77,80 \; \text{°C}}
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
