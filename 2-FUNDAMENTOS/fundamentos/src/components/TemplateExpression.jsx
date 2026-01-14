// 4 - template expression

const TemplateExpression = () => {
    const name = "Rafael";

    const data = {
        age: 22,
        job: "Programador"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} anos e vocên é um  {data.job}</p>
    </div>
  )
}

export default TemplateExpression