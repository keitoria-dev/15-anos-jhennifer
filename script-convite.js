const estrelas = document.getElementById("estrelas");

for(let i=0;i<120;i++){

    const estrela=document.createElement("div");

    estrela.classList.add("estrela");

    estrela.style.left=Math.random()*100+"vw";

    estrela.style.top=Math.random()*100+"vh";

    estrela.style.animationDelay=Math.random()*4+"s";

    estrela.style.animationDuration=(2+Math.random()*5)+"s";

    estrelas.appendChild(estrela);

}