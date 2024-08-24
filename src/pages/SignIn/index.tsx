import { LoginForm } from "./components"

export const SignIn = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen antialiased bg-background">
      <div className="w-full max-w-md mx-auto text-center">
        <span className="text-3xl font-medium text-center">
          Bem-vindo(a) novamente
        </span>
      </div>
      <LoginForm />
    </main >
  )
}