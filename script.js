let currentStep = 1;
// Récupérer les réponses  
let bedSizesText = "";
let resultCoffee= "";
let resultCooking= "";
let resultStove= "";
let bedSizes = []; // Initialisez bedSizes une seule fois ici


function previousStep() {
    document.getElementById('step' + currentStep).classList.remove('current-step');
    currentStep--;
    document.getElementById('step' + currentStep).classList.add('current-step');
}

function validateStep() {
    // Sélectionne tous les champs requis dans la page actuelle
    const requiredFields = document.querySelectorAll('.form-step.current-step input[required], .form-step.current-step select[required]');

    // Vérifie si tous les champs requis sont remplis
    for (const field of requiredFields) {
        if (!field.value) {
            // Affiche un message d'erreur si un champ requis est vide
            alert('Veuillez remplir tous les champs s\'il vous plaît.');
            return false; // Empêche le passage à la page suivante
        }
    }

    // Si tous les champs sont remplis, retourne true pour permettre le passage à la page suivante
    return true;
}


function nextStep() {
    if (validateStep()) {
        document.getElementById('step' + currentStep).classList.remove('current-step');
        currentStep++;
        document.getElementById('step' + currentStep).classList.add('current-step');

        // Récupère le nombre de lits saisi
        const bedCount = parseInt(document.getElementById('bed').value);

        // Sélectionne le conteneur pour les champs de taille de lit
        const bedSizeContainer = document.getElementById('bedSizeContainer');

        // Nettoie le contenu existant du conteneur
        bedSizeContainer.innerHTML = '';

        // Génère dynamiquement les champs de taille de lit en fonction du nombre de lits saisi
        for (let i = 0; i <= bedCount-1; i++) {
            const label = document.createElement('label');
            label.textContent = `Taille du lit ${i+1} : `;

            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'cm x cm'
            input.classList.add('bedSizeInput'); // Ajoute une classe pour le style CSS

            // Ajoutez un gestionnaire d'événements pour mettre à jour les valeurs des champs de taille de lit
            input.addEventListener('input', function(event) {
                bedSizes[i] = event.target.value;
            });

            bedSizeContainer.appendChild(label);
            bedSizeContainer.appendChild(input);
            bedSizeContainer.appendChild(document.createElement('br'));
        }

        const coffeeCheckbox = document.getElementById('coffee');
        const coffeeTypeContainer = document.getElementById('coffeeTypeContainer');

        coffeeCheckbox.addEventListener('change', function() {
            if (coffeeCheckbox.checked) {
                coffeeTypeContainer.style.display = 'block';
            } else {
                coffeeTypeContainer.style.display = 'none';
            }
        });

        const cookingCheckbox = document.getElementById('cooking');
        const cookingTypeContainer = document.getElementById('cookingTypeContainer');

        cookingCheckbox.addEventListener('change', function() {
            if (cookingCheckbox.checked) {
                cookingTypeContainer.style.display = 'block';
            } else {
                cookingTypeContainer.style.display = 'none';
            }
        });

        const stoveCheckbox = document.getElementById('stove');
        const stoveTypeContainer = document.getElementById('stoveTypeContainer');

        stoveCheckbox.addEventListener('change', function() {
            if (stoveCheckbox.checked) {
                stoveTypeContainer.style.display = 'block';
            } else {
                stoveTypeContainer.style.display = 'none';
            }
        });

    }
}


function showResult() {

    // Récupérer les valeurs des tailles de lit directement des champs de saisie
    const bedSizeInputs = document.querySelectorAll('.bedSizeInput');
    console.log("bedSizeInputs: ", bedSizeInputs);
    
    bedSizes.forEach((size, index) => {
        bedSizesText += `Taille du lit ${index + 1}: ${size}<br>`;
    });

    //Step 1: Informations Personnelles
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const fiscal = document.getElementById('fiscal').value;
    const iban = document.getElementById('iban').value;
    const bic = document.getElementById('bic').value;
    
    // Step 2: Logement
    const address = document.getElementById('address').value;
    const cp = document.getElementById('cp').value;
    const city = document.getElementById('city').value;
    const subway = document.getElementById('subway').value;
    const code1 = document.getElementById('code1').value;
    const code2 = document.getElementById('code2').value;
    const mailbox = document.getElementById('mailbox').value;
    const floor = document.getElementById('floor').value;
    const number = document.getElementById('number').value;
    const key = document.getElementById('key').value;

    //Step 3: Capacité
    const area = document.getElementById('area').value;
    const pax = document.getElementById('pax').value;
    const room = document.getElementById('room').value;
    const bed = document.getElementById('bed').value;
    
    //Step 4: Equipements Général
    const vaccum = document.getElementById('vaccum').value;
    const iron = document.getElementById('iron').checked;
    const ironingBoard = document.getElementById('ironingBoard').checked;
    const bucket = document.getElementById('bucket').checked;
    const mop = document.getElementById('mop').checked;
    const hairDryer = document.getElementById('hairDryer').checked;
    const fan = document.getElementById('fan').checked;
    const air = document.getElementById('air').checked;
    const tv = document.getElementById('tv').checked;
    const office = document.getElementById('office').checked;

    //Step 5: Equipement cuisine
    // Récupérer le type de Machine à café  si la case est cochée
    const coffeeCheckbox = document.getElementById('coffee');
    const coffeeTypeSelect = document.getElementById('coffeeType');
    let coffeeType = '';

    if (coffeeCheckbox.checked) {
        coffeeType = coffeeTypeSelect.value;
    }
    // Ajouter les informations sur la Machine à café si elle est cochée
    if (coffeeCheckbox.checked) {
        resultCoffee += `
            Machine à café : Oui<br>
            Type de Machine à café : ${coffeeType}<br>
        `;
    } else {
        resultCoffee += `Machine à café : Non<br>`;
    }
    const kettle = document.getElementById('kettle').checked;
    const toaster = document.getElementById('toaster').checked;
    const microwave = document.getElementById('microwave').checked;
    const oven = document.getElementById('oven').checked;
    // Récupérer le type de Plaque de cuisson  si la case est cochée
    const cookingCheckbox = document.getElementById('cooking');
    const cookingTypeSelect = document.getElementById('cookingType');
    let cookingType = '';

    if (cookingCheckbox.checked) {
        cookingType = cookingTypeSelect.value;
    }
    // Ajouter les informations sur la Plaque de cuisson si elle est cochée
    if (cookingCheckbox.checked) {
        resultCooking += `
            Plaque de cuisson : Oui<br>
            Type de Plaque : ${cookingType}<br>
        `;
    } else {
        resultCooking += `Plaque de cuisson : Non<br>`;
    }
    // Récupérer le type de cuisinière si la case est cochée
    const stoveCheckbox = document.getElementById('stove');
    const stoveTypeSelect = document.getElementById('stoveType');
    let stoveType = '';

    if (stoveCheckbox.checked) {
        stoveType = stoveTypeSelect.value;
    }
    // Ajouter les informations sur la cuisinière si elle est cochée
    if (stoveCheckbox.checked) {
        resultStove += `
            Cuisinière: Oui<br>
            Type de cuisinière: ${stoveType}<br>
        `;
    } else {
        resultStove += `Cuisinière: Non<br>`;
    }
    const dishWasher = document.getElementById('dishWasher').checked;
    const washingMachine = document.getElementById('washingMachine').checked;
    const dryer = document.getElementById('dryer').checked;
    const rack = document.getElementById('rack').checked;

    //Step 6: Equipement Chambre
    const pillows = document.getElementById('pillows').checked;
    const duvet = document.getElementById('duvet').checked;
    const bedsideTable = document.getElementById('bedsideTable').checked;
    const bedsideLamp = document.getElementById('bedsideLamp').checked;
    const electricSocket = document.getElementById('electricSocket').checked;
    const storageSpace = document.getElementById('storageSpace').checked;

    //Step 7: Equipement Salle de Bain
    const bathroom = document.getElementById('bathroom').value;
    const shower = document.getElementById('shower').checked;
    const bath = document.getElementById('bath').checked;
    const wc = document.getElementById('wc').checked;
    const landing = document.getElementById('landing').checked;

    //Step 8: Détails technique
    const lift = document.getElementById('lift').checked;
    const garbage = document.getElementById('garbage').value;
    const heating = document.getElementById('heating').value;
    const water = document.getElementById('water').value;
    const meter = document.getElementById('meter').value;
    const cost = document.getElementById('cost').value;
    const other = document.getElementById('other').value;

    //Step 9: Internet
    const wifi = document.getElementById('wifi').value;
    const password = document.getElementById('password').value;

    

    // Afficher les résultats
    document.getElementById('result-text').innerHTML = `
        INFORMATIONS PERSONNELLES : 
        <br><br>
        NOM: ${surname}<br>
        Prénom: ${name}<br>
        Date d'anniversaire: ${date}<br>
        Téléphone: ${phone}<br> 
        E-mail: ${email}<br>
        Numéro fiscal: ${fiscal}<br>
        IBAN: ${iban}<br>
        BIC: ${bic}<br>
        <br><br>

        LOGEMENT : 
        <br><br>
        Adresse: ${address}<br>
        Code Postal: ${cp}<br> 
        Ville: ${city}<br> 
        Station de métro: ${subway}<br>
        Code Porte rue: ${code1}<br>
        Code Porte SaS: ${code2}<br>
        Boîte au Lettre: ${mailbox}<br>
        Etage: ${floor}<br> 
        Ascenseur : ${lift}<br>
        Numéro du logement: ${number}<br> 
        Nombre de jeux de Clés : ${key}<br>
        <br><br>

        CAPACITÉ : 
        <br><br>
        Superficie du logement : ${area}<br>
        Nombre d'hôtes : ${pax}<br>
        Nombre de chambre(s) : ${room}<br>
        Nombre de lit(s): ${bed}<br>
        <br><br>

        ÉQUIPEMENT GÉNÉRAL : 
        <br><br>
        Aspirateur : ${vaccum}<br>
        Fer à repasser : ${iron}<br>
        Planche à repasser : ${ironingBoard}<br>
        Sceau à Serpillière : ${bucket}<br>
        Serpillière : ${mop}<br>
        Sèche-Cheveux : ${hairDryer}<br>
        Ventilateur : ${fan}<br>
        Climatisation : ${air}<br>
        Télévision : ${tv}<br>
        Espace de travail : ${office}<br>
        <br><br>

        ÉQUIPEMENT CUISINE : 
        <br><br>
        ${resultCoffee}
        Bouilloir: ${kettle}<br>
        Grille Pain: ${toaster}<br>
        Micro-onde : ${microwave}<br>
        Four : ${oven}<br>
        ${resultCooking}
        ${resultStove}
        Lave-Vaiselle: ${dishWasher}<br>
        Machine à Laver: ${washingMachine}<br>
        Sèche-linge: ${dryer}<br>
        Étendoire: ${rack}<br> 
        <br><br>

        ÉQUIPEMENT CHAMBRE:
        <br><br>
        ${bedSizesText}
        Couette (x1 / lit): ${duvet}<br>
        Table de Chevet (x2): ${bedsideTable}<br>
        Lampe de Chevet (x2): ${bedsideLamp}<br>
        Prise électrique à proximité du lit: ${electricSocket}<br>
        Espace de rangement pour les Guest: ${storageSpace}<br>
        <br><br>

        ÉQUIPEMENT SALLE DE BAIN:
        <br><br>
        Nombre de Salle de Bain : ${bathroom}<br>
        Douche : ${shower}<br>
        Baignoir : ${bath}<br>
        WC Séparé : ${wc}<br>
        WC sur le pallier : ${landing}<br>
        <br><br>

        DÉTAIL TECHNIQUE:
        <br><br>
        Ascenseur : ${lift}<br>
        Accès local poubelle : ${garbage}<br>
        Type de chauffage : ${heating}<br>
        Robinet d'arrivée d'eau général : ${water}<br>
        Compteur électrique : ${meter}<br>
        Tarif minimum par nuit : ${cost}<br>
        Autre : ${other}<br>
        <br><br>

        INTERNET:
        <br><br>
        Nom du WIFI : ${wifi}<br>
        Mot de passe: ${password}`;
    
    // Supprimer la classe 'current-step' et ajouter 'current-step' à la section de résultat
    document.getElementById('step' + currentStep).classList.remove('current-step');
    document.getElementById('result').classList.add('current-step');

    // Afficher le bouton de soumission
    document.getElementById('submitButton').style.display = 'block';
}




function sendMail() {

    // Affiche le loader
    const loader = document.getElementById("loader");
    loader.classList.add("show-loader"); // Si tu utilises la classe pour afficher le loader

    
    var templateParams = {
        //step1
        surname: document.getElementById('surname').value,
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        fiscal: document.getElementById('fiscal').value,
        iban: document.getElementById('iban').value,
        bic: document.getElementById('bic').value,

        //step2
        address: document.getElementById('address').value,
        cp: document.getElementById('cp').value,
        city: document.getElementById('city').value,
        subway: document.getElementById('subway').value,
        code1: document.getElementById('code1').value,
        code2: document.getElementById('code2').value,
        mailbox: document.getElementById('mailbox').value,
        floor: document.getElementById('floor').value,
        number: document.getElementById('number').value,
        key: document.getElementById('key').value,

        //step3
        area: document.getElementById('area').value,
        pax: document.getElementById('pax').value,
        room: document.getElementById('room').value,  
        bed: document.getElementById('bed').value,

        //Step 4: Equipements Général
        vaccum : document.getElementById('vaccum').value,
        iron: document.getElementById('iron').checked,
        ironingBoard: document.getElementById('ironingBoard').checked,
        bucket: document.getElementById('bucket').checked,
        mop: document.getElementById('mop').checked,
        hairDryer: document.getElementById('hairDryer').checked,
        fan : document.getElementById('fan').checked,
        air : document.getElementById('air').checked,
        tv : document.getElementById('tv').checked,
        office : document.getElementById('office').checked,
        
        //Step 5: Equipement cuisine
        coffee: resultCoffee.replaceAll('<br>', '\n'),
        kettle: document.getElementById('kettle').checked,
        toaster: document.getElementById('toaster').checked,
        microwave : document.getElementById('microwave').checked,
        oven : document.getElementById('oven').checked,
        cooking : resultCooking.replaceAll('<br>', '\n'),
        stove : resultStove.replaceAll('<br>', '\n'),
        dishWasher : document.getElementById('dishWasher').checked,
        washingMachine : document.getElementById('washingMachine').checked,
        dryer : document.getElementById('dryer').checked,
        rack : document.getElementById('rack').checked,

        //Step 6: Equipement Chambre
        bedSizes: bedSizesText.replaceAll('<br>', '\n'),
        pillows: document.getElementById('pillows').checked,
        duvet: document.getElementById('duvet').checked,
        bedsideTable: document.getElementById('bedsideTable').checked,
        bedsideLamp: document.getElementById('bedsideLamp').checked,
        electricSocket: document.getElementById('electricSocket').checked,
        storageSpace: document.getElementById('storageSpace').checked,

        //Step 7: Equipement Salle de Bain
        bathroom : document.getElementById('bathroom').value, 
        shower : document.getElementById('shower').checked,
        bath : document.getElementById('bath').checked,
        wc : document.getElementById('wc').checked,
        landing : document.getElementById('landing').checked,

        //Step 8: Détails technique
        lift: document.getElementById('lift').checked,
        garbage: document.getElementById('garbage').value,
        heating: document.getElementById('heating').value,
        water : document.getElementById('water').value,
        meter: document.getElementById('meter').value,
        cost: document.getElementById('cost').value,
        other: document.getElementById('other').value,


        //Step 9: Internet
        wifi: document.getElementById('wifi').value,
        password: document.getElementById('password').value,

    };

    emailjs.send('service_7jwblni', 'template_p2p4x6v', templateParams)
    .then(function(response) {
        console.log("E-mail envoyé avec succès :", response);
        // Masquer le loader
        loader.classList.remove("show-loader");
        // Masquer le bouton d'envoi
        var submitButton = document.getElementById("submitButton");
        submitButton.style.display = "none"; 

        // Afficher le message de confirmation
        var confirmationMessage = document.createElement("h3");
        confirmationMessage.textContent = "Merci, vos informations ont bien été envoyées";
        document.getElementById("form-container").appendChild(confirmationMessage);
    }, function(error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
        // Masquer le loader en cas d'erreur
        loader.classList.remove("show-loader");
        alert("Une erreur est survenue : " + JSON.stringify(error));
    });
    
  
}
