import { Container } from "./styles"

export const TransactionsTable = () => {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jogo do Bicho</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Gato</td>
                        <td>19/09/2022</td>
                    </tr>
                    <tr>
                        <td>Agiota</td>
                        <td className="withdraw">- R$ 6.000,00</td>
                        <td>Dinheiro emprestado</td>
                        <td>04/09/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}