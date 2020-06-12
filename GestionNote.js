 // --- Exercice 3 -------------------------------

 var choix
 var tabNotes = []
 var nombreNotes
 var note
 var numNote
 var sommeNotes = 0
 var moyenne
 var max
 var min

 do {
     console.log("1- Stocker les notes des élèves dans un tableau.")
     console.log("2- Afficher la liste des notes")
     console.log("3- Modifier une note")
     console.log("4- Afficher la moyenne de la classe.")
     console.log("5- Afficher la note la plus élevée.")
     console.log("6- Afficher la note la plus base.")
     console.log("0- Quitter le programme")
     choix = parseInt(prompt("Tapez le numéro voulu : "))
     switch (choix) {
         case 1:
             console.log("1- Stocker les notes des élèves dans un tableau.")
             nombreNotes = parseInt(prompt("Saisir le nombre de notes : "))
             function stockNote(nombreNotes, tabNotes) {
                 for (let i = 0; i < nombreNotes; i++) {
                     note = parseFloat(prompt("Saisissez la note"))
                     tabNotes.push(note)
                 }
             }
             break
         case 2:
             console.log("2- Afficher la liste des notes")
             function afficheNote(tabNotes) {
                 console.log(tabNotes)
             }
             break
         case 3:
             console.log("3- Modifier une note")
             function modifieNote(numNote, tabNotes) {
                 numNote = parseInt(prompt("Saisissez le numéro de la note à modifier : "))
                 tabNotes[numNote - 1] = parseFloat(prompt("Saisissez la nouvelle note : "))
             }
             break
         case 4:
             console.log("4- Afficher la moyenne de la classe.")
             function afficheLaMoyenne(tabNotes) {
                 for (let i = 0; i < tabNotes.length; i++) {
                     sommeNotes = sommeNotes + tabNotes[i]
                 }

                 moyenne = sommeNotes / tabNotes.length
                 console.log("La moyenne est : ", moyenne)
             }
             break
         case 5:
             console.log("5- Afficher la note la plus élevée.")
             function afficheLaNoteLaPlusElevee(tabNotes) {
                 for (let i = 0; i < tabNotes.length; i++) {
                     if (i == 0) {
                         max = tabNotes[0]
                     } else {
                         if (tabNotes[i] > max) {
                             max = tabNotes[i]
                         }
                     }
                 }
                 console.log("La note la plus élevée est : ", max)
             }
             break
         case 6:
             console.log("6- Afficher la note la plus basse.")
             function afficheLaNoteLaPlusBasse(tabNotes) {
                 for (let i = 0; i < tabNotes.length; i++) {
                     if (i == 0) {
                         min = tabNotes[0]
                     } else {
                         if (tabNotes[i] < min) {
                             min = tabNotes[i]
                         }
                     }
                 }
                 console.log("La note la plus basse est : ", min)
             }
             break
         case 0:
             console.log("0- Quitter le programme")
             break
         default:
             console.log("Erreur saisie")
             break;
     }
 } while (choix != 0)