import Navbar from "../components/Navbar";
import BudgetForm from "../components/BudgetForm";
import FooterNav from "../components/FooterNav";
export default function Budgets() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-4 justify-center items-center" >
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-black ">Your Budgets</h2>
        </div>
      <BudgetForm />
      <FooterNav    />
    </div>
  );
}
