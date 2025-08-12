const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(btn => {
btn.addEventListener('click', () => {
    toggleButtons.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    
    const categorySelect = document.getElementById('categorySelect');
    if (btn.textContent.includes('Income')) {
    categorySelect.innerHTML = `
        <option value="">Select a category</option>
        <option value="salary">Salary</option>
        <option value="freelance">Freelance</option>
        <option value="investment">Investment</option>
        <option value="other">Other Income</option>
    `;
    } else {
    categorySelect.innerHTML = `
        <option value="">Select a category</option>
        <option value="housing">Housing</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="utilities">Utilities</option>
        <option value="other">Other Expense</option>
    `;
    }
});
});

const transactionForm = document.querySelector("form[aria-label='Add transaction form']");
const goalForm = document.querySelector("form[aria-label='Create savings goal form']");
const transactionsList = document.getElementById("transactionsList");
const emptyState = document.getElementById("emptyState");

let transactions = [];
let goals = [];

function updateEmptyState() {
if (transactions.length === 0 && goals.length === 0) {
    emptyState.style.display = "block";
    transactionsList.style.display = "none";
} else {
    emptyState.style.display = "none";
    transactionsList.style.display = "block";
}
}

function renderTransactions() {
transactionsList.innerHTML = "";

transactions.forEach((transaction, index) => {
    const transactionItem = document.createElement("div");
    transactionItem.className = "transaction-item";
    transactionItem.innerHTML = `
    <div class="transaction-header">
        <div class="transaction-icon ${transaction.type === 'income' ? 'income' : 'expense'}">
        ${transaction.type === 'income' ? '💰' : '💸'}
        </div>
        <div class="transaction-details">
        <strong>${transaction.description}</strong> - R${transaction.amount.toFixed(2)}
        <span class="transaction-category">${transaction.category}</span>
        </div>
        <div class="transaction-date">${new Date(transaction.date).toLocaleDateString()}</div>
    </div>
    `;
    transactionsList.appendChild(transactionItem);
});

goals.forEach((goal, index) => {
    const goalItem = document.createElement("div");
    goalItem.className = "goal-item";
    goalItem.innerHTML = `
    <div class="goal-header">
        <div class="goal-icon">🎯</div>
        <div class="goal-details">
        <strong>${goal.name}</strong> - Target: R${goal.targetAmount.toFixed(2)}
        <span class="goal-category">${goal.category}</span>
        </div>
        <div class="goal-date">Target: ${new Date(goal.targetDate).toLocaleDateString()}</div>
    </div>
    `;
    transactionsList.appendChild(goalItem);
});
}

transactionForm.addEventListener("submit", function(e) {
e.preventDefault();

const amount = parseFloat(document.getElementById("amountInput").value);
const category = document.getElementById("categorySelect").value;
const description = document.getElementById("descInput").value;
const date = document.getElementById("dateInput").value;
const type = document.querySelector(".toggle-btn.active").textContent.includes("Income") ? "income" : "expense";

const transaction = {
    type,
    amount,
    category,
    description,
    date
};

transactions.push(transaction);
renderTransactions();
updateEmptyState();
transactionForm.reset();

document.querySelector(".toggle-btn").click();
});

goalForm.addEventListener("submit", function(e) {
e.preventDefault();

const name = document.getElementById("goalName").value;
const targetAmount = parseFloat(document.getElementById("targetAmount").value);
const category = document.getElementById("goalCategory").value;
const targetDate = document.getElementById("targetDate").value;

const goal = {
    name,
    targetAmount,
    category,
    targetDate
};

goals.push(goal);
renderTransactions();
updateEmptyState();
goalForm.reset();
});

updateEmptyState();
