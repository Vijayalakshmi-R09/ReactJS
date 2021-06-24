class Animal
{
    constructor(type,color)
    {
        this.type=type;
        this.color=color;
      
    }
    scientificName(type)
    {
        if(type==='Vertebrate')
        {
            console.log("Scientific name: Vertebrata");
        }
        else if(type==='Amphibia'){
            console.log("Scientific name: Amphibia");
        }
        else if(type==='Reptiles'){
            console.log("Scientific name: Reptilia");
        }
    }
}

class Reptiles extends Animal
{
    constructor(type,color,reproduction){
        super(type,color);
        this.reproduction=reproduction;
    }
    move()
    {
        console.log("Repltiles mostly crawl in nature.");
    }
}
    let rep=new Reptiles("Reptiles","yellow","layeaggs");
    rep.scientificName("Reptiles");
    rep.move();
