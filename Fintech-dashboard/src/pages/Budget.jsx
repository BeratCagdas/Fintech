import React, { useState } from "react";

function Budget() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleExpensesChange = (e) => {
    setExpenses(e.target.value);
  };

  const calculateBalance = () => {
    setBalance(income - expenses);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-700">Bütçe Yönetimi</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-semibold">Gelir:</label>
            <input
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              value={income}
              onChange={handleIncomeChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold">Giderler:</label>
            <input
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              value={expenses}
              onChange={handleExpensesChange}
            />
          </div>

          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={calculateBalance}
          >
            Bakiye Hesapla
          </button>

          {balance !== 0 && (
            <div className="mt-6 text-lg font-semibold">
              <p>Güncel Bakiye: {balance} TL</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Budget;