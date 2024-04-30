package odin.vet.api.medico;

import odin.vet.api.endereco.DadosEndereco;

public record DadosCadastroMedico(
        String nome,
        String email,
        String telefone,
        String foto,
        String crmv,
        Especialidade especialidade,
        DadosEndereco endereco
) {
}
