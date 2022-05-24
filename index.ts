interface IUsuario {
    id: string;
    email: string;

    //o ponto de interrogação torna o valor opcional
    cargo?:'gerente' |'coordenador' | 'supervisor' | 'funcionario';

}



function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);

    }else{
        //redirecionar para a area de usuario
    }
}