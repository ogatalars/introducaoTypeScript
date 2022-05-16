function a() {}
function b() {}
function principal(): void {
    const valorA = a();
    const valorB = b();
}
// void não tem um retorno padrão; ele pode ser usado para retornar uma mensagem de erro ou para não retornar nada.

principal()

function funcaoQNuncaRetorna(): never {
    while(true) {
        console.log('Eu nunca retorno');
    }
}