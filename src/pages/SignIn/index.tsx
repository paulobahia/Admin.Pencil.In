import { LoginForm } from "./components"

export const SignIn = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 antialiased bg-background">
      <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
        <span className="text-3xl font-medium text-center">
          Bem-vindo(a) novamente
        </span>
      </div>
      <LoginForm />
    </main >
  )
}