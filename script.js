let currentStep = 1;
let bedSizes = []; // Initialisez bedSizes une seule fois ici


function previousStep() {
    document.getElementById('step' + currentStep).classList.remove('current-step');
    currentStep--;
    document.getElementById('step' + currentStep).classList.add('current-step');
}

function nextStep() {
    document.getElementById('step' + currentStep).classList.remove('current-step');
    currentStep++;
    document.getElementById('step' + currentStep).classList.add('current-step');

    // Récupère le nombre de lits saisi
    const bedCount = parseInt(document.getElementById('bed').value);

    // Sélectionne le conteneur pour les champs de taille de lit
    const bedSizeContainer = document.getElementById('bedSizeContainer');

    // Vide le contenu existant du conteneur
    bedSizeContainer.innerHTML = '';

    // Génère dynamiquement les champs de taille de lit en fonction du nombre de lits saisi
    for (let i = 1; i <= bedCount; i++) {
        const label = document.createElement('label');
        label.textContent = `Taille du lit ${i} : `;

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'cm x cm'
        input.classList.add('bedSizeInput'); // Ajoute une classe pour le style CSS

        // Ajoutez un gestionnaire d'événements pour mettre à jour les valeurs des champs de taille de lit
        input.addEventListener('input', function(event) {
            const index = parseInt(event.target.id.replace('bedSizeInput_', ''));
            bedSizes[index] = event.target.value;
            console.log('MaJ de la valeur bedSizes : ', bedSizes);
        });

        bedSizeContainer.appendChild(label);
        bedSizeContainer.appendChild(input);
        bedSizeContainer.appendChild(document.createElement('br'));
    }

    // Stockez les valeurs des champs de taille de lit dans bedSizes
    bedSizes = Array.from(bedSizeContainer.querySelectorAll('.bedSizeInput')).map(input => input.value);

    console.log(bedSizes);
}

function showResult() {
    // Récupérer les réponses  
    let resultBedSize = "";

    //Step 1: Informations Personnelles
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    // Step 2: Logement
    const address = document.getElementById('address').value;
    const cp = document.getElementById('cp').value;
    const city = document.getElementById('city').value;
    const code1 = document.getElementById('code1').value;
    const code2 = document.getElementById('code2').value;
    const mailbox = document.getElementById('mailbox').value;
    const floor = document.getElementById('floor').value;
    const key = document.getElementById('key').value;

    //Step 3: Capacité
    const area = document.getElementById('area').value;
    const pax = document.getElementById('pax').value;
    const room = document.getElementById('room').value;
    const bed = document.getElementById('bed').value;
    
    //Step 4: Equipements Général
    const iron = document.getElementById('iron').checked;
    const ironingBoard = document.getElementById('ironingBoard').checked;
    const bucket = document.getElementById('bucket').checked;
    const mop = document.getElementById('mop').checked;
    const hairDryer = document.getElementById('hairDryer').checked;

    
    //Step 5: Equipement cuisine
    const coffee = document.getElementById('coffee').checked;
    const kettle = document.getElementById('kettle').checked;
    const toaster = document.getElementById('toaster').checked;
    const dishWasher = document.getElementById('dishWasher').checked;
    const washingMachine = document.getElementById('washingMachine').checked;
    const dryer = document.getElementById('dryer').checked;

    //Step 6: Equipement Chambre
    console.log(bedSizes);
    const pillows = document.getElementById('pillows').checked;
    const duvet = document.getElementById('duvet').checked;
    const bedsideTable = document.getElementById('bedsideTable').checked;
    const bedsideLamp = document.getElementById('bedsideLamp').checked;
    const electricSocket = document.getElementById('electricSocket').checked;
    const storageSpace = document.getElementById('storageSpace').checked;

    //Step 7: Internet
    const wifi = document.getElementById('wifi').value;
    const password = document.getElementById('password').value;

    // Ajouter les tailles des lits
    bedSizes.forEach((size, index) => {
        resultBedSize += `\nTaille du lit ${index + 1}: ${size}<br>`;
        console.log('function bedSizes.forEach');
    });

    console.log(resultBedSize);

    // Afficher les résultats
    document.getElementById('result-text').innerHTML = `
        Informations Personnelles : 
        <br><br>
        NOM: ${surname}<br>
        Prénom: ${name}<br>
        Date d'anniversaire: ${date}<br>
        Téléphone: ${phone}<br> 
        E-mail: ${email}<br>
        <br><br>
        LOGEMENT : 
        <br><br>
        Adresse: ${address}<br>
        Code Postal: ${cp}<br> 
        Ville: ${city}<br> 
        Code Porte rue: ${code1}<br>
        Code Porte SaS: ${code2}<br>
        BAL: ${mailbox}<br>
        Etage: ${floor}<br> 
        Nombre de jeux de Clés : ${key}<br>
        <br><br>
        ÉQUIPEMENT CUISINE : 
        <br><br>
        Machine a café: ${coffee}<br>
        Bouilloir: ${kettle}<br>
        Grille Pain: ${toaster}<br>
        Lave-Vaiselle: ${dishWasher}<br>
        Machine à Laver: ${washingMachine}<br>
        Sèche-linge: ${dryer}<br>
        <br><br>
        EQUIPEMENTS CHAMBRE:
        <br><br>
        ${resultBedSize}
        Oreiller (x2 / lit): ${pillows}<br>
        Couette (x1 / lit): ${duvet}<br>
        Table de Chevet (x2): ${bedsideTable}<br>
        Lampe de Chevet (x2): ${bedsideLamp}<br>
        Prise électrique à proximité du lit: ${electricSocket}<br>
        Espace de rangement pour les Guest: ${storageSpace}<br>
        <br><br>
        INTERNET:
        <br><br>
        Nom du WIFI : ${wifi}<br>
        Mot de passe: ${password}`;

    document.getElementById('step' + currentStep).classList.remove('current-step');
    document.getElementById('result').classList.add('current-step');

    document.getElementById('submitButton').style.display = 'block';
    
}

function sendMail() {
    var templateParams = {
        surname: document.getElementById('surname').value,
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,

        address: document.getElementById('address').value,
        cp: document.getElementById('cp').value,
        city: document.getElementById('city').value,
        code1: document.getElementById('code1').value,
        code2: document.getElementById('code2').value,
        mailbox: document.getElementById('mailbox').value,
        floor: document.getElementById('floor').value,
        key: document.getElementById('key').value,

        area: document.getElementById('area').value,
        pax: document.getElementById('pax').value,
        room: document.getElementById('room').value,  
        bed: document.getElementById('bed').value,

        //Step 4: Equipements Général
        iron: document.getElementById('iron').checked,
        ironingBoard: document.getElementById('ironingBoard').checked,
        bucket: document.getElementById('bucket').checked,
        mop: document.getElementById('mop').checked,
        hairDryer: document.getElementById('hairDryer').checked,

        
        //Step 5: Equipement cuisine
        coffee: document.getElementById('coffee').checked,
        kettle: document.getElementById('kettle').checked,
        toaster: document.getElementById('toaster').checked,
        dishWasher: document.getElementById('dishWasher').checked,
        washingMachine: document.getElementById('washingMachine').checked,
        dryer: document.getElementById('dryer').checked,

        //Step 6: Equipement Chambre
        bedSizes: bedSizes,

        pillows: document.getElementById('pillows').checked,
        duvet: document.getElementById('duvet').checked,
        bedsideTable: document.getElementById('bedsideTable').checked,
        bedsideLamp: document.getElementById('bedsideLamp').checked,
        electricSocket: document.getElementById('electricSocket').checked,
        storageSpace: document.getElementById('storageSpace').checked,

        //Step 7: Internet
        wifi: document.getElementById('wifi').value,
        password: document.getElementById('password').value,

    };
    
    emailjs.send('service_9b7xk5g', 'template_0wbrehf', templateParams)
        .then(function(response) {
        // Remplacer le bouton par un message de confirmation
        var submitButton = document.getElementById("submitButton");
        submitButton.style.display = "none"; // Masquer le bouton

        // Créer et afficher le message de confirmation
        var confirmationMessage = document.createElement("h3");
        confirmationMessage.textContent = "Merci, vos informations ont bien été envoyées";
        document.getElementById("form-container").appendChild(confirmationMessage);        }, function(error) {
            console.error('Error sending e-mail:', error);
        });
    
  
}
