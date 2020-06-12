// --- TP Final Algo ---------------------------------

let choixMenu
let stockProduit = []
let totalid = 0
let stockPanier= []
let choixAddProduit
let totalPanier = 0

do {
    displayMenu(console.log)
    choixMenu = parseInt(prompt("Merci de sélectionner votre choix : "))
    switch (choixMenu) {
        case 1:
            displayMenuProduit(console.log)
            choixMenuProduit = parseInt(prompt("Merci de sélectionner votre choix : "))
            switch (choixMenuProduit) {
                case 1:
                    addProduit(prompt)
                    break;
                case 2:
                    modifyProduit(console.log, prompt)
                    break;
                case 3:
                    deleteProduit(console.log, prompt)
                    break;
                case 4:
                    console.log("Vous êtes de retour au Menu principal")
                    break;
            }
            break;
        case 2:
            displayMenuPanier(console.log)
            choixMenuPanier = parseInt(prompt("Merci de sélectionner votre choix : "))
            switch (choixMenuPanier) {
                case 1:
                    addProduitPanier(console.log, prompt)
                    break;
                case 2:
                    deleteProduitPanier(console.log, prompt)
                    break;
                case 3:
                    displayPanier(console.log, prompt)
                    break;
                case 4:
                    confirmPanier(console.log, prompt)
                    break;
                case 5:
                    console.log("Vous êtes de retour au Menu principal")
                    break;
            }
            break;
        default:
            console.log("Choix érroné, merci de recommencer")
            break;
    }
} while (choixMenu != 3)

function displayMenu(methodAffichage) {
    methodAffichage("1- Gestion produit")
    methodAffichage("2- Gestion panier")
    methodAffichage("3- Quitter")
}

function displayMenuProduit(methodAffichage) {
    methodAffichage("1- Ajouter un produit")
    methodAffichage("2- Modifier un produit")
    methodAffichage("3- Supprimer un produit")
    methodAffichage("4- Retour au menu principal")
}

function displayMenuPanier(methodAffichage) {
    methodAffichage("1- Ajouter un produit au panier")
    methodAffichage("2- Supprimer un produit du panier")
    methodAffichage("3- Afficher le détail du Panier avec le total")
    methodAffichage("4- Valider le panier")
    methodAffichage("5- Retour au menu principal")
}

function addProduit(methodSaisie) {
    do {
        choixAddProduit = parseInt(methodSaisie("Tapez 1 pour ajouter un produit OU tapez -1 pour quitter : "))
        if (choixAddProduit == -1) {
            break
        }
        let produit = { id: '', label: '', prix: '' }
        produit['id'] = totalid + 1
        totalid += 1
        produit['label'] = methodSaisie("Merci de saisir le nom du produit : ")
        produit['prix'] = parseInt(methodSaisie("Merci de saisir le prix du produit : "))
        stockProduit.push(produit)
    } while (choixAddProduit != -1)
}

function modifyProduit(methodAffichage, methodSaisie) {
    methodAffichage(stockProduit)
    let choixId = methodSaisie("Merci de saisir l'id du produit à modifier : ")
    let nouveauLabel = methodSaisie("Merci de saisir le nouveau label : ")
    let nouveauPrix = parseInt(methodSaisie("Merci de saisir le nouveau prix : "))
    for (let i = 0; i < stockProduit.length; i++) {
        if (stockProduit[i]['id'] == choixId) {
            stockProduit[i]['label'] = nouveauLabel
            stockProduit[i]['prix'] = nouveauPrix
        }
    }
    methodAffichage(stockProduit)
}

function deleteProduit(methodAffichage, methodSaisie) {
    methodAffichage(stockProduit)
    let choixId = methodSaisie("Merci de saisir l'id du produit à supprimer : ")
    for (let i = 0; i < stockProduit.length; i++) {
        if (stockProduit[i]['id'] == choixId) {
            stockProduit.splice(i,1)
        }
    }
    methodAffichage(stockProduit)
}

function addProduitPanier(methodAffichage, methodSaisie) {
    methodAffichage(stockProduit)
    let choixLabel = methodSaisie("Merci de saisir le label du produit à ajouter au panier : ")
    for (let i = 0; i < stockProduit.length; i++) {
        if (stockProduit[i]['label'] == choixLabel) {
            stockPanier.push(stockProduit[i])
            stockProduit.splice(i, 1)
        }
    }
    methodAffichage("Voici votre panier : ")
    methodAffichage(stockPanier)
    methodAffichage("Voici le stock restant : ")
    methodAffichage(stockProduit)
}

function deleteProduitPanier(methodAffichage, methodSaisie) {
    methodAffichage(stockPanier)
    let choixLabel = methodSaisie("Merci de saisir le label du produit à supprimer : ")
    for (let i = 0; i < stockPanier.length; i++) {
        if (stockPanier[i]['label'] == choixLabel) {
            stockProduit.push(stockPanier[i])
            stockPanier.splice(i,1)
        }
    }
    methodAffichage("Voici votre parnier : ")
    methodAffichage(stockPanier)
    methodAffichage("Voici le nouveau stock : ")
    methodAffichage(stockProduit)
}

function displayPanier(methodAffichage, methodSaisie) {
    totalPanier = 0
    methodAffichage(stockPanier)
    for (let i = 0; i < stockPanier.length; i++) {
        totalPanier += stockPanier[i]['prix']
    }
    methodAffichage("Vous avez : ", stockPanier.length, "produits et le montant de votre panier s'élève à : ", totalPanier, " euros.")
}

function confirmPanier(methodAffichage, methodSaisie) {
    displayPanier(methodAffichage, methodSaisie)
    let choixFinal = methodSaisie("Souhaitez-vous valider votre panier ? y/n : ")
    if (choixFinal == 'y') {
        methodAffichage("Panier validé, votre commande est confirmée et sera expédiée dans les meilleurs délais")
        stockPanier.splice(0, stockPanier.length)
    }
}