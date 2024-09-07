import { useState } from 'react'
import './App.css'


const texts: string[] = [
  "Det hjälper att ha en ödmjuk inställning. Parprogrammering är utmanande, det tränar skills du kanske inte är van vid att bruka som isolerad utvecklare. Tala högt om kod, vara nyfiken på hur andra tänker, vara pedagogisk, visa att du inte kan allt etc. Det tar tid att bygga dessa skills så ha tålamod med dig själv och den du parprogrammerar med!",
  "Inled en session med att 'connecta' med varandra. Hur mår du? Hur är din dag? Att förstå var den andra 'är' idag skapar empatisk kontakt och ökar motivation att bygga tillsammans, och minskar risken för friktion under sessionen. Förslag på timebox: 5 minuter.",
  "Aligna sedan om ett första 'mikromål'. Att ha valt en ticket från Jira i förväg är nödvändigt men alltså inte tillräckligt. Försök formulera ett första steg tillsammans, gärna i text (t.ex. skriv ett meddelande i chatten), som gärna får vara riktigt litet (tänk 10 minuters jobb), så blir det så mycket lättare att förstå vad som pågår därefter, och ni får en bra start på sessionen. Lite som att skrynkla en post-it och slänga i papperskorgen, en liten YES-känsla fort! Exempel skulle kunna vara 'GOAL: get topmost acceptance criteria passing' eller 'GOAL: hello page seen in browser'. Förslag på timebox: 5 minuter.",
  "När det sedan kommer till att göra, låt den som känner sig minst erfaren kring målet/koden/verktygen sitta vid tangentbordet. Detta medför att den mer erfarne delar med sig av kunskap kring koden/verktygen/domänen. Fall inte för frestelsen och rösten som säger 'men det kommer ju gå mycket fortare om du som kan detta gör det..'! Den rösten är en röst av stress och press, och har inte förstått att parprogrammeringens syfte är långsiktigt d.v.s dela kunskap och T-shape:a teamet. Hur många timmar tar det tills ni båda är kunniga på detta ställe och med dessa verktyg?",
  "Byt vem som sitter med tangentbordet antingen på klocka t.ex. var 5 eller 10 minut eller när typist (som vi kallar den som sitter vid tangentbordet) vet mer än navigatören (som vi kallar den som styr inriktning).",
  "Ha paus 10 minuter per timme! Låt gärna den i paret som är mest tidskänslig sköta detta. Ta en mobil, det räcker!",
  "Sessionen på 1-3 h avslutas med retrospektiv i 10 minuter; detta är viktigt eftersom denna form av arbete är högintensiv och ni kommer behöva 'ventilera' inför varandra. GLÖM INTE BORT DETTA STEG; i min erfarenhet är det det allra vanligaste misstaget, att glömma bort retrotid."
]

export default function App() {
  const [page, setPage] = useState<number>(0);
  return (
    <>
      <div className="container">

          {page > 0 && (
            <div className="sidebar" onClick={() => setPage(page-1)}>
              Förra!
            </div>
          )}
          { page === 0 && (
            <div className="sidebar">
              &nbsp;
            </div>
          )}

          <div className="content">
            <div>
              <h3>Tips {page+1}</h3>
              <div>{texts[page]}</div>
            </div>
          </div>

          {page < texts.length-1 && (
            <div className="sidebar" onClick={() => setPage(page+1)}>
              Nästa!
            </div>
          )}
          { page === texts.length-1 && (
            <div className="sidebar">
              &nbsp;
            </div>
          )}

      </div>
    </>
  )
}