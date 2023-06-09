import UsernameForm from "@/components/UsernameForm";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {

  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState();
  const [userInfoStatus, setUserInfoStatus] = useState('loading');

  function getUserInfo() {
    if (status === "loading") {
      return;
    }
    fetch("/api/users?id="+session.user.id)
    .then(response => response.json()
    .then(data => {
      setUserInfo(data.user);
      setUserInfoStatus('loaded');
    }))
  }

  useEffect(() => {
    getUserInfo();
  }, [status]);

  if(userInfoStatus === 'loading') {
    return <p>loading</p>
  }

if(!userInfo?.username) {
  return <UsernameForm />
}

  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
