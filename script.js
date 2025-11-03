let currentStep = 1;
const totalSteps = 9; // nombre total d'étapes
let bedSizesText = "";
let resultCoffee = "";
let resultCooking = "";
let resultStove = "";
let bedSizes = [];

// Attacher ces listeners UNE fois au chargement (hors nextStep)
window.addEventListener('DOMContentLoaded', () => {
    const coffeeCheckbox = document.getElementById('coffee');
    if (coffeeCheckbox) {
        coffeeCheckbox.addEventListener('change', function () {
            const container = document.getElementById('coffeeTypeContainer');
            if(container) container.style.display = this.checked ? 'block' : 'none';
        });
    }
    const cookingCheckbox = document.getElementById('cooking');
    if (cookingCheckbox) {
        cookingCheckbox.addEventListener('change', function () {
            const container = document.getElementById('cookingTypeContainer');
            if(container) container.style.display = this.checked ? 'block' : 'none';
        });
    }
    const stoveCheckbox = document.getElementById('stove');
    if (stoveCheckbox) {
        stoveCheckbox.addEventListener('change', function () {
            const container = document.getElementById('stoveTypeContainer');
            if(container) container.style.display = this.checked ? 'block' : 'none';
        });
    }
});

function previousStep() {
    if (currentStep <= 1) return; // Pas avant la 1ère étape
    const currentStepDiv = document.getElementById('step' + currentStep);
    if (currentStepDiv) currentStepDiv.classList.remove('current-step');

    currentStep--;

    const prevStepDiv = document.getElementById('step' + currentStep);
    if (prevStepDiv) prevStepDiv.classList.add('current-step');
}

function validateStep() {
    const currentStepDiv = document.getElementById('step' + currentStep);
    if (!currentStepDiv) return false; // Sécurité

    // Sélecteur pour inputs et selects required dans l’étape visible
    const requiredFields = currentStepDiv.querySelectorAll('input[required], select[required]');
    for (const field of requiredFields) {
        if (!field.value) {
            alert('Veuillez remplir tous les champs s\'il vous plaît.');
            return false;
        }
    }
    return true;
}

function nextStep() {
    if (!validateStep()) return;

    const currentStepDiv = document.getElementById('step' + currentStep);
    if (currentStepDiv) currentStepDiv.classList.remove('current-step');

    if (currentStep < totalSteps) {
        currentStep++;
    } else {
        // On est à la dernière étape, afficher résultat
        showResult();
        return;
    }

    const nextStepDiv = document.getElementById('step' + currentStep);
    if (nextStepDiv) nextStepDiv.classList.add('current-step');

    // Mise à jour dynamique des tailles de lit uniquement à l’étape où c’est nécessaire
    if (currentStep === 5) { // exemple : étape 5 est celle des lits, adapte si besoin
        const bedCountInput = document.getElementById('bed');
        const bedSizeContainer = document.getElementById('bedSizeContainer');
        if (bedCountInput && bedSizeContainer) {
            const bedCount = parseInt(bedCountInput.value);
            bedSizeContainer.innerHTML = '';
            bedSizes = [];
            for (let i = 0; i < bedCount; i++) {
                const label = document.createElement('label');
                label.textContent = `Taille du lit ${i + 1} : `;

                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'cm x cm';
                input.classList.add('bedSizeInput');

                // Mise à jour de bedSizes au fur et à mesure
                input.addEventListener('input', (e) => {
                    bedSizes[i] = e.target.value;
                });

                bedSizeContainer.appendChild(label);
                bedSizeContainer.appendChild(input);
                bedSizeContainer.appendChild(document.createElement('br'));
            }
        }
    }
}

function showResult() {
    // Réinitialisation
    bedSizesText = "";
    resultCoffee = "";
    resultCooking = "";
    resultStove = "";

    // Récupérer tailles de lit
    bedSizes = Array.from(document.querySelectorAll('.bedSizeInput')).map(input => input.value);
    bedSizes.forEach((size, index) => {
        bedSizesText += `Taille du lit ${index + 1}: ${size}<br>`;
    });

    // TODO: Récupérer autres données et construire resultCoffee, resultCooking, resultStove ici
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
     const numberFloor = document.getElementById('numberFloor').value;
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
     const smoke = document.getElementById('smoke').checked;
     const carbon = document.getElementById('carbon').checked;
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
     const fridge = document.getElementById('fridge').checked;
     const freezer = document.getElementById('freezer').checked;
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
         Nombre d'étage dans l'immeuble: ${numberFloor}<br>
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
         Détecteur de fumée : ${smoke}<br>
         Détecteur de monoxyde de carbonne : ${carbon}<br>
         Télévision : ${tv}<br>
         Espace de travail : ${office}<br>
         <br><br>
 
         ÉQUIPEMENT CUISINE : 
         <br><br>
         ${resultCoffee}
         Réfrigérateur: ${fridge}<br>
         Congélateur: ${freezer}<br>
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
        Oreiller (x2 / lit): ${pillows}<br>
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
    // Affiche la page résultat
    const currentStepDiv = document.getElementById('step' + currentStep);
    if (currentStepDiv) currentStepDiv.classList.remove('current-step');

    const resultDiv = document.getElementById('result');
    if (resultDiv) resultDiv.classList.add('current-step');

    const submitBtn = document.getElementById('submitButton');
    if (submitBtn) submitBtn.style.display = 'block';
}

function sendMail() {
    const loader = document.getElementById("loader");
    if(loader) loader.classList.add("show-loader");

    const templateParams = {
        surname: document.getElementById('surname')?.value || '',
        name: document.getElementById('name')?.value || '',
        date: document.getElementById('date')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        email: document.getElementById('email')?.value || '',
        fiscal: document.getElementById('fiscal')?.value || '',
        iban: document.getElementById('iban')?.value || '',
        bic: document.getElementById('bic')?.value || '',
        address: document.getElementById('address')?.value || '',
        cp: document.getElementById('cp')?.value || '',
        city: document.getElementById('city')?.value || '',
        subway: document.getElementById('subway')?.value || '',
        code1: document.getElementById('code1')?.value || '',
        code2: document.getElementById('code2')?.value || '',
        mailbox: document.getElementById('mailbox')?.value || '',
        floor: document.getElementById('floor')?.value || '',
        numberFloor: document.getElementById('numberFloor')?.value || '',
        number: document.getElementById('number')?.value || '',
        key: document.getElementById('key')?.value || '',
        area: document.getElementById('area')?.value || '',
        pax: document.getElementById('pax')?.value || '',
        room: document.getElementById('room')?.value || '',
        bed: document.getElementById('bed')?.value || '',
        vaccum: document.getElementById('vaccum')?.value || '',
        iron: document.getElementById('iron')?.checked || false,
        ironingBoard: document.getElementById('ironingBoard')?.checked || false,
        bucket: document.getElementById('bucket')?.checked || false,
        mop: document.getElementById('mop')?.checked || false,
        hairDryer: document.getElementById('hairDryer')?.checked || false,
        fan: document.getElementById('fan')?.checked || false,
        air: document.getElementById('air')?.checked || false,
        smoke: document.getElementById('smoke')?.checked || false,
        carbon: document.getElementById('carbon')?.checked || false,
        tv: document.getElementById('tv')?.checked || false,
        office: document.getElementById('office')?.checked || false,
        coffee: resultCoffee.replaceAll('<br>', '\n'),
        fridge: document.getElementById('fridge')?.checked || false,
        freezer: document.getElementById('freezer')?.checked || false,
        kettle: document.getElementById('kettle')?.checked || false,
        toaster: document.getElementById('toaster')?.checked || false,
        microwave: document.getElementById('microwave')?.checked || false,
        oven: document.getElementById('oven')?.checked || false,
        cooking: resultCooking.replaceAll('<br>', '\n'),
        stove: resultStove.replaceAll('<br>', '\n'),
        dishWasher: document.getElementById('dishWasher')?.checked || false,
        washingMachine: document.getElementById('washingMachine')?.checked || false,
        dryer: document.getElementById('dryer')?.checked || false,
        rack: document.getElementById('rack')?.checked || false,
        bedSizes: bedSizesText.replaceAll('<br>', '\n'),
        pillows: document.getElementById('pillows')?.checked || false,
        duvet: document.getElementById('duvet')?.checked || false,
        bedsideTable: document.getElementById('bedsideTable')?.checked || false,
        bedsideLamp: document.getElementById('bedsideLamp')?.checked || false,
        electricSocket: document.getElementById('electricSocket')?.checked || false,
        storageSpace: document.getElementById('storageSpace')?.checked || false,
        bathroom: document.getElementById('bathroom')?.value || '',
        shower: document.getElementById('shower')?.checked || false,
        bath: document.getElementById('bath')?.checked || false,
        wc: document.getElementById('wc')?.checked || false,
        landing: document.getElementById('landing')?.checked || false,
        lift: document.getElementById('lift')?.checked || false,
        garbage: document.getElementById('garbage')?.value || '',
        heating: document.getElementById('heating')?.value || '',
        water: document.getElementById('water')?.value || '',
        meter: document.getElementById('meter')?.value || '',
        cost: document.getElementById('cost')?.value || '',
        other: document.getElementById('other')?.value || '',
        wifi: document.getElementById('wifi')?.value || '',
        password: document.getElementById('password')?.value || ''
    };

    emailjs.send('service_7jwblni', 'template_p2p4x6v', templateParams)
        .then(response => {
            console.log("E-mail envoyé avec succès :", response);
            if(loader) loader.classList.remove("show-loader");
            const submitBtn = document.getElementById("submitButton");
            if(submitBtn) submitBtn.style.display = "none";
            const confirmationMessage = document.createElement("h3");
            confirmationMessage.textContent = "Merci, vos informations ont bien été envoyées";
            const formContainer = document.getElementById("form-container");
            if(formContainer) formContainer.appendChild(confirmationMessage);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
            if(loader) loader.classList.remove("show-loader");
            alert("Une erreur est survenue : " + JSON.stringify(error));
        });
}
