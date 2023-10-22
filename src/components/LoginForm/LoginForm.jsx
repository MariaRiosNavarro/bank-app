import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </form>
    </>
  );
};

export default LoginForm;
