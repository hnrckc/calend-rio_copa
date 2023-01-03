function creatGame(p1, hour, p2) {
  return `
    <li>
      <img src="assets/icon-${p1}.svg" alt="${p1}-icone" />
      <strong>${hour}</strong>
      <img src="assets/icon-${p2}.svg" alt="${p2}-icone" />
    </li>
  `
}

let delay = -0.7
function creatCard(date, day, games) {
  delay = delay + 0.7
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
        <h2>CALENDÁRIO COPA DO MUNDO</h2>
      </header>
      <main id="cards">
      ${creatCard(
        "22/11",
        "terça",
        creatGame("argentina", "07:00", "saudiarabia") +
          creatGame("denmark", "10:00", "tunisia") +
          creatGame("mexico", "13:00", "poland") +
          creatGame("france", "16:00", "australia")
      )}
       ${creatCard(
         "23/11",
         "quinta",
         creatGame("morocco", "07:00", "croatia") +
           creatGame("germany", "10:00", "japan") +
           creatGame("spain", "13:00", "costarica") +
           creatGame("belgium", "16:00", "canada")
       )}
       
        ${creatCard(
          "24/11",
          "quinta",
          creatGame("switzerland", "07:00", "cameroon") +
            creatGame("uruguay", "10:00", "southkorea") +
            creatGame("portugal", "13:00", "ghana") +
            creatGame("brasil", "16:00", "sérbia")
        )}
        ${creatCard(
          "28/11",
          "segunda",
          creatGame("cameroon", "07:00", "sérbia") +
            creatGame("southkorea", "10:00", "ghana") +
            creatGame("brasil", "13:00", "switzerland") +
            creatGame("portugal", "16:00", "uruguay")
        )}
        ${creatCard(
          "02/12",
          "sexta",
          creatGame("southkorea", "12:00", "portugal") +
            creatGame("ghana", "12:00", "uruguay") +
            creatGame("sérbia", "16 :00", "switzerland") +
            creatGame("cameroon", "16:00", "brasil")
        )}
      </main>
`
