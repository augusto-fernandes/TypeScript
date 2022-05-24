/* const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
});
 */

//Generic Types

function AdicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(() => valor);
}

AdicionaApendiceALista([1, 2, 3],2);