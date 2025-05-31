 var title = document.title
 console.log(title)

 var element= document.getElementById(title);
 element.classList.add("selected");


if(title=="Film"){
    const NUM_CLAKKERS = 40;

    const pageHeight = document.documentElement.scrollHeight-200;
    const pageWidth = document.documentElement.scrollWidth-100;

    for (let i = 0; i < NUM_CLAKKERS; i++) {
    const clapper = document.createElement('div');
    clapper.className = 'clapper';

    const top = Math.random() * pageHeight;
    const left = Math.random() * pageWidth;
    clapper.style.top = `${top}px`;
    clapper.style.left = `${left}px`;

    const rotation = Math.random() * 360;
    const scale = 1 + Math.random(); 
    clapper.style.transform = `rotate(${rotation}deg) scale(${scale})`;

    document.body.appendChild(clapper);
    }
}
