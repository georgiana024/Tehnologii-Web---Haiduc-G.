**1. Ce este o resursă (resource) în aplicația ta?**
În aplicația mea, o resursă reprezintă o facilitate sau un punct de interes din cadrul campusului universitar (ex: cămin ,biblioteca, cantina). Acestea sunt definite ca obiecte structurate în fișierul 'resources.json', având atribute precum nume, tip, locație, program de funcționare și tag-uri asociate.

**2. Dă exemplu de un URI și explică componentele acestuia.**
Exemplu de URI folosit în proiect: 'pages/library.html#schedule'
* 'pages/library.html' reprezintă **calea (path)** relativă către fișierul HTML care conține informațiile despre bibliotecă.
* '#schedule' reprezintă **fragmentul (anchor)**, care indică browserului să deruleze (jump) direct la secțiunea din acea pagină care are ID-ul "schedule" (secțiunea cu orarul).

**3. Care părți sunt statice și care sunt dinamice?**
* **Părți statice:** Structura de bază a paginilor (HTML), bara de navigare, secțiunea Hero, cardurile de prezentare mari și footer-ul. Acestea nu se schimbă la încărcarea paginii.
* **Părți dinamice:** Secțiunea "RESURSE CAMPUS" de pe pagina principală (Home). Aici, cardurile cu informații, locații și tag-uri sunt generate dinamic folosind JavaScript, citind datele în timp real din fișierul 'resources.json'. Tot dinamică este și filtrarea datelor în consolă.

**4. Este aplicația ta document-centric sau interactive (sau ambele)? De ce?**
Aplicația este ambele:
* Este **document-centric** deoarece scopul ei principal este de a oferi informații și documente structurate (pagini HTML statice) despre facilitățile campusului.
* Este **interactive** deoarece folosește JavaScript modern pentru a prelua date asincron din format JSON, a manipula DOM-ul pentru a afișa informații pe pagină și a executa funcții de filtrare și mapare a datelor.
