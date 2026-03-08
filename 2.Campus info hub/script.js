// 1. addEventListener() - Așteptăm ca HTML-ul să se încarce complet înainte de a rula scriptul
document.addEventListener('DOMContentLoaded', () => {

    // 2. fetch() - Facem cererea către fișierul JSON [cite: 22]
    fetch('data/resources.json')
        // 3. .then() și .json() - Procesăm răspunsul și îl transformăm din JSON în obiect de JavaScript [cite: 22]
        .then(response => response.json())
        .then(data => {
            
            // 4. document.getElementById() - Găsim containerul în pagină
            const container = document.getElementById('resource-list');
            container.innerHTML = ''; // Ștergem textul "Se încarcă..."

            // 5. forEach(), createElement(), appendChild() - Generăm cardurile pentru fiecare resursă
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'resource-card'; // Folosim clasa din CSS-ul nou creat
                
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p><strong>Locație:</strong> ${item.location}</p>
                    <p><strong>Program:</strong> ${item.program}</p>
                    <p><em>Tag-uri: ${item.tags.join(', ')}</em></p>
                `;
                
                container.appendChild(div);
            });

            // 6. filter() - Găsim doar locurile destinate studiului [cite: 24]
            const studyOnly = data.filter(res => res.type === "studiu");
            console.log("Doar locuri de studiu (filter):", studyOnly);

            // 7. map() - Extragem doar numele resurselor într-o listă nouă
            const resourceNames = data.map(res => res.name);
            console.log("Numele tuturor resurselor (map):", resourceNames);

            // 8. flatMap() + new Set() - Extragem absolut toate tag-urile unice din campus 
            // flatMap combină toate listele de tag-uri într-una singură, iar Set elimină duplicatele
            const uniqueTags = [...new Set(data.flatMap(res => res.tags))];
            console.log("Toate tag-urile/categoriile unice (flatMap + Set):", uniqueTags);

        })
        // 9. catch() - Prindem și afișăm eventualele erori (ex: dacă lipsește fișierul)
        .catch(error => {
            console.error("Eroare la fetch:", error);
            const container = document.getElementById('resource-list');
            container.innerHTML = '<p style="color:red;">Eroare la încărcarea datelor.</p>';
        });

});