import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/profile", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.log("Нет доступа к профилю");
        }
      } catch (err) {
        console.error("Ошибка сети:", err);
      }
    };

    fetchProfile();
  }, []);
  return (
    <div>
      Profile
      {profile && (
        <>
          <pre>ФИО: {profile.fullName}</pre>
          <pre>Ваш логин: {profile.login}</pre>
        </>
      )}
    </div>
  );
};

export default Profile;
