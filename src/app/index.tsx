import { Loading } from '@/components/loading'
import { useAuthenticationContainer } from '@/hooks/use-authentication-container'
import { useLoginContainer } from '@/hooks/use-login-container'
import { UseLoginScreen } from '@/screens/login/use-login-screen'

export default function Index() {
  const { onSubmit, isLoading } = useLoginContainer()
  const { isLoading: isLoadingAuth } = useAuthenticationContainer()

  if (isLoadingAuth) return <Loading />

  return <UseLoginScreen onSubmit={onSubmit} isLoading={isLoading} />
}
