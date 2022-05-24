function soma(a: number, b: number) {
  return a + b;
}

soma(1, 2);

//types
//interfaces

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  executaRugido(alturaEmDecibeis:number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}
const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  executaRugido:(alturaEmDecibeis) =>(`${alturaEmDecibeis}`)
  
};
animal.executaRugido(4)
const felino: IFelino = {
nome: 'Coruja',
tipo: "terrestre",
visaoNoturna: true
}
