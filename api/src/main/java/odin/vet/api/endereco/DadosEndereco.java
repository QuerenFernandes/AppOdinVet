package odin.vet.api.endereco;

public record DadosEndereco(
        String logradouro,
        Integer numero,
        String complemento,
        String bairro,
        String cidade,
        String uf,
        String cep
) {
}
