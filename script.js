// Масив об'єктів transactions
const transactions = [
  { category: "їжа", amount: 500 },
  { category: "транспорт", amount: 100 },
  { category: "їжа", amount: 700 },
  { category: "розваги", amount: 300 },
  { category: "транспорт", amount: 200 },
  { category: "їжа", amount: 300 },
];

// Функція агрегації за допомогою reduce
const aggregateExpenses = (transactions) => {
  return transactions.reduce((accumulator, transaction) => {
    const category = transaction.category;
    const amount = transaction.amount;

    // Якщо категорії ще немає
    if (!accumulator[category]) {
      accumulator[category] = 0;
    }

    // Додавання суми
    accumulator[category] += amount;

    return accumulator;
  }, {});
};

// Функція виводу результату
const showExpenses = () => {
  const result = aggregateExpenses(transactions);

  let output = "";

  for (let category in result) {
    output += `${category}: ${result[category]} грн <br>`;
  }

  document.getElementById("result").innerHTML = output;

  // Вивід у консоль
  console.log(result);
};
