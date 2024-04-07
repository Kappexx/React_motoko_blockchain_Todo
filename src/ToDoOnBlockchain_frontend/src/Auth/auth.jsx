import { AuthClient } from "@dfinity/auth-client";

const Auth = async () => {
  const authClient = await AuthClient.create();

  await authClient.login({
    identityProvider: "https://identity.ic0.app/#authorize",
    onSuccess: async () => {
      console.log("secsesss");
      return authClient;
    },
  });

  if (authClient.isAuthenticated()) {
    return authClient;
  } else {
    console.log("Auth Error");
    return "Error";
  }
};

export default Auth;
