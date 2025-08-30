// Animal型
class Animal{
    kind: string;
    constructor(kind: string){
        this.kind = kind;
    }
    chirp(kind: string): string{
        if (this.kind === "dog"){
            return "わんわん";
        }
        else{
            return "にゃー";
        }
    }
}

const dogbutton = document.getElementById("dog") as HTMLButtonElement; 
const catbutton = document.getElementById("cat") as HTMLButtonElement;
const animalchirp = document.getElementById("chirp") as HTMLDivElement; 
const resetbutton = document.getElementById("reset") as HTMLButtonElement;
const resetmessage = document.getElementById("message") as HTMLButtonElement;

dogbutton.addEventListener("click", () => {
    const animal = new Animal("dog");
    animalchirp.innerText = animal.chirp("dog");
});

catbutton.addEventListener("click",() =>{
    const animal = new Animal("cat");
    animalchirp.innerText = animal.chirp("cat");
})

resetbutton.addEventListener("click",() =>{
    animalchirp.innerText = "鳴き声";
    resetmessage.innerText ="リセットしました";
    setTimeout(() => {
        resetmessage.innerText ="";
    }, 7000);
})
