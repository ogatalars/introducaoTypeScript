enum Permissoes {
    admin, 
    editor,
    comum 
}
const usuario = {
    nivel: Permissoes.admin
};

console.log(usuario)

// enum == representação numerica de um valor legivel