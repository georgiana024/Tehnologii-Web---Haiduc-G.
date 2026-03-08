document.addEventListener('DOMContentLoaded', () => {

    fetch('data/resources.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('resource-list');
            container.innerHTML = '';
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'resource-card'; 
                
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p><strong>Locație:</strong> ${item.location}</p>
                    <p><strong>Program:</strong> ${item.program}</p>
                    <p><em>Tag-uri: ${item.tags.join(', ')}</em></p>
                `;
                
                container.appendChild(div);
            });
            const studyOnly = data.filter(res => res.type === "studiu");
            console.log("Doar locuri de studiu (filter):", studyOnly);

            const resourceNames = data.map(res => res.name);
            console.log("Numele tuturor resurselor (map):", resourceNames);

            const uniqueTags = [...new Set(data.flatMap(res => res.tags))];
            console.log("Toate tag-urile/categoriile unice (flatMap + Set):", uniqueTags);

        })
      
        .catch(error => {
            console.error("Eroare la fetch:", error);
            const container = document.getElementById('resource-list');
            container.innerHTML = '<p style="color:red;">Eroare la încărcarea datelor.</p>';
        });

});