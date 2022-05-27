import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles"


export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}