import { confirmSignUp, getCurrentUser, signIn, } from 'aws-amplify/auth';
import { useAsync } from '../hooks/useAsync';
import { UseAsyncOutput } from '../types/default';
import { signUp } from 'aws-amplify/src/auth';
import { signOut } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';

export function handleSignIn(navigation): UseAsyncOutput {
  const { state, loading, error, execute } = useAsync(signIn, {
    callback: ({ response }) => {
      if (response.isSignedIn)
        navigation.navigate('Dashboard')
    }
  })

  return {
    state, loading, error, execute
  }
}

export async function currentAuthenticatedUser() {
  try {
    const { username, signInDetails } = await getCurrentUser();

    return { username, signInDetails }
  } catch (err) {
    console.log(err);
  }
}

export async function currentSession() {
  try {
    const accessToken = (await fetchAuthSession()).tokens.accessToken.toString() ?? {};

    return { accessToken }
  } catch (err) {
    console.log(err);
  }
}

export function handleSignUp(navigation) {
  const { state, loading, error, execute } = useAsync(signUp, {
    callback: ({ props, response }) => {
      if (response.userId)
        navigation.navigate('Confirm', { userName: props.username })
    }
  })

  return {
    state, loading, error, execute
  }
}

export function handleSignUpConfirmation(navigation) {
  const { state, loading, error, execute } = useAsync(confirmSignUp, {
    callback: ({ response }) => {
      if (response.isSignUpComplete) navigation.navigate('Dashboard')
    }
  })

  return {
    state, loading, error, execute
  }
}


export async function handleSignOut(navigation) {
  try {
    await signOut();
    navigation.navigate('SignIn')
  } catch (error) {
    console.log('error signing out: ', error);
  }
}