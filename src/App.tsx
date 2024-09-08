import { useState, useEffect } from 'react';
import './App.css';

interface Translation {
  sv: string,
  en: string
}

type Tip = Translation;

const appName: Translation = {
  sv: "Parprogrammering - ett överlevnadskit",
  en: "Pair Programming Survival Kit"
}

const texts: Tip[] = [
  {
    sv: "Det hjälper att ha en ödmjuk inställning. Parprogrammering är utmanande, det tränar skills du kanske inte är van vid att bruka som isolerad utvecklare. Tala högt om kod, vara nyfiken på hur andra tänker, vara pedagogisk, visa att du inte kan allt etc. Det tar tid att bygga dessa skills så ha tålamod med dig själv och den du parprogrammerar med!",
    en: "It helps to have a humble attitude. Pair programming is challenging; it trains skills you might not be used to as an isolated developer. Speak aloud about code, be curious about how others think, be pedagogical, show that you don't know everything, etc. It takes time to build these skills, so be patient with yourself and your pair programming partner!"
  },
  {
    sv: "Inled en session med att 'connecta' med varandra. Hur mår du? Hur är din dag? Att förstå var den andra 'är' idag skapar empatisk kontakt och ökar motivation att bygga tillsammans, och minskar risken för friktion under sessionen. Förslag på timebox: 5 minuter.",
    en: "Start a session by 'connecting' with each other. How are you? How's your day? Understanding where the other person 'is' today creates empathetic contact, increases motivation to build together, and reduces the risk of friction during the session. Suggested timebox: 5 minutes."
  },
  {
    sv: "Aligna sedan om ett första 'mikromål'. Att ha valt en ticket från Jira i förväg är nödvändigt men alltså inte tillräckligt. Försök formulera ett första steg tillsammans, gärna i text (t.ex. skriv ett meddelande i chatten), som gärna får vara riktigt litet (tänk 10 minuters jobb), så blir det så mycket lättare att förstå vad som pågår därefter, och ni får en bra start på sessionen. Lite som att skrynkla en post-it och slänga i papperskorgen, en liten YES-känsla fort! Exempel skulle kunna vara 'GOAL: get topmost acceptance criteria passing' eller 'GOAL: hello page seen in browser'. Förslag på timebox: 5 minuter.",
    en: "Then align on a first 'micro-goal'. Having chosen a ticket from Jira in advance is necessary but not sufficient. Try to formulate a first step together, preferably in text (e.g., write a message in the chat), which can be really small (think 10 minutes of work), making it much easier to understand what's going on thereafter, and you get a good start to the session. It's like crumpling a post-it and throwing it in the trash, a quick YES feeling! Examples could be 'GOAL: get topmost acceptance criteria passing' or 'GOAL: hello page seen in browser'. Suggested timebox: 5 minutes."
  },
  {
    sv: "När det sedan kommer till att göra, låt den som känner sig mest osäker sitta vid tangentbordet. Detta medför att den mer erfarne delar med sig av kunskap kring koden, verktygen och domänen.",
    en: "When it comes to doing, let the person who feels most unsure sit at the keyboard. This means that the more experienced person shares knowledge about the code, tools, and domain."
  },
  {
    sv: "Parprogrammeringens syfte är långsiktighet t.ex. dela kunskap och T-shape:a teamet. Hur många timmar tar det tills ni båda är kunniga på detta ställe och med dessa verktyg? Skruva därför ned volymen på rösten som säger 'men det kommer ju gå mycket fortare om du som kan detta gör det!' - den rösten är en röst av stress och press.",
    en: "The purpose of pair programming is long-term, e.g., sharing knowledge and T-shaping the team. How many hours does it take until you are both knowledgeable about this place and these tools? Therefore, turn down the volume on the voice that says 'but it will go much faster if you who know this do it!' - that voice is a voice of stress and pressure."
  },
  {
    sv: "Byt vem som sitter med tangentbordet antingen på klocka t.ex. var 5 eller 10 minut eller när typist (som vi kallar den som sitter vid tangentbordet) vet mer än navigatören (som vi kallar den som styr inriktning).",
    en: "Switch who sits at the keyboard either on a clock, e.g., every 5 or 10 minutes, or when the typist (as we call the person sitting at the keyboard) knows more than the navigator (as we call the person steering the direction)."
  },
  {
    sv: "Ha paus 10 minuter per timme! Låt gärna den i paret som är mest tidskänslig sköta detta. Ta en mobil, det räcker!",
    en: "Take a 10-minute break per hour! Let the most time-sensitive person in the pair handle this. Take a mobile phone, that's enough!"
  },
  {
    sv: "Sessionen på 1-3 h avslutas med retrospektiv i 10 minuter; detta är viktigt eftersom denna form av arbete är högintensiv och ni kommer behöva 'ventilera' inför varandra. GLÖM INTE BORT DETTA STEG; i min erfarenhet är det det allra vanligaste misstaget, att glömma bort retrotid.",
    en: "The 1-3 hour session ends with a 10-minute retrospective; this is important because this form of work is high-intensity and you will need to 'ventilate' with each other. DON'T FORGET THIS STEP; in my experience, it's the most common mistake to forget retro time."
  }
]

export default function App() {
  const [page, setPage] = useState<number>(0);
  const [language, setLanguage] = useState<'sv' | 'en'>('sv');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as 'sv' | 'en';
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'sv' ? 'en' : 'sv';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="app">
      <div className="language-toggle">
        <button onClick={toggleLanguage} className="lang-button interactive">
          {language === 'sv' ? 'EN' : 'SV'}
        </button>
      </div>
      <h2>{appName[language]}</h2>
      <div className="container">
        {page > 0 && (
          <div className="sidebar interactive" onClick={() => setPage(page-1)}>
            {language === 'sv' ? 'Förra!' : 'Previous!'}
          </div>
        )}
 
        <div className="content">
          <div>
            <h3>{language === 'sv' ? 'Tips' : 'Tip'} {page+1}</h3>
            <div>{texts[page][language]}</div>
          </div>
        </div>

        {page < texts.length-1 && (
          <div className="sidebar interactive" onClick={() => setPage(page+1)}>
            {language === 'sv' ? 'Nästa!' : 'Next!'}
          </div>
        )}
      </div>
    </div>
  )
}
