//un programme qui affiche si un nombre est premier ou pas.
//un nombre premiers n'est divisible que par un ou lui même 

let nombre = process.argv[2]

let premier = true;

if (nombre <= 1) { //si le nombre est inferieur ou egale a 1 il ne peut etre premier car les entier commence a 2
  premier = false;
}

for (let i = 2; i < nombre; i++) { //on commence a 2 -->tant que i < au nombre donner -->faire +1
  if (nombre % i === 0) { //si au bout d'un moment le nombre donner diviser par i =O alors cela signifie que le nombre entré peut etre divisé par un autre nombre que 1 et lui meme
    //en sachant que nous avons ecarter cest possibilité avec "si nombre <=1 false et i<nombre "
    premier = false;
  
  }
}

if (premier) {
  console.log(nombre + " est un nombre premier");
} else {
  console.log(nombre + " n'est pas un nombre premier");
}







