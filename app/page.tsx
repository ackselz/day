import AuthForm from './auth/auth-form'

export default function Home() {
  return (
      <div className="row">
        <div className="col-6">
        </div>
        <div className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
  )
}
