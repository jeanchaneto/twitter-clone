import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = ({ providers }) => {

const {data, status} = useSession();
const router = useRouter();

if(status ==='loading') {
  return <p className="flex items-center justify-center h-screen">Loading...</p>
}
if(status === 'authenticated') {
  router.push('/');
}

  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-themeWhite px-5 py-2 rounded-full flex items-center text-black"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            <img
              className="h-8 mr-2"
              src="/images/google-icon.png"
              alt="google icon"
            />
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  
  return {
    props: { providers },
  };
}
