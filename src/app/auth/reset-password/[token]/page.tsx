interface Props { params: { token: string } }
export default function ResetPasswordPage({ params }: Props) {
  return <h1>Auth / Reset Password Token: {params.token}</h1>;
}
