/*Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


Exemples d’utilisation :
$> python exo.py “Hello world!”
12


$> python exo.py
erreur.


$> python exo.py “Bonjour” “Aurevoir”
erreur.

$> python exo.py 10
erreur.
*/


const a = process.argv[2]



if (a===undefined){console.log("erreur.");}
else if (process.argv.length>3){console.log("erreur.");}
else if (isNaN(a)===false){console.log("erreur.");}
else {
let count = 0;
for (let i = 0; i < a.length; i++) {
  count++; //a chaque boucle effectuer la fonction count prend +1 
}
console.log("Le nombre de caractères dans la chaîne est : " + count)}
