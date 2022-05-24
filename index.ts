/* function soma(a: number, b: number) {
  return a + b;
}

soma(1, 2);

//types
//interfaces
*/

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "Pequeno" | "Medio" | "Grande";
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: "Cachorro",
  porte: "Medio",
  tipo: "terrestre",
};
