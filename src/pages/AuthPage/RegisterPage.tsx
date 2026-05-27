import Register from "../../components/AuthComponents/Register";

const RegisterPage = () => {
  return (
    <div>
      <Register onBackToLogin={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default RegisterPage;
