let estaAtivo: boolean;

estaAtivo = true;

function mapearStatusUsuario(status: boolean) {
    if(status) {
        return `Usuario está ativo`
    } else {
        return `Usuario está inativo`
    }
}

mapearStatusUsuario(true)