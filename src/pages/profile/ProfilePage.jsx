import { ProfileForm } from "./components/ProfileForm";

export const ProfilePage = () => {
  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Profile Page</h2>
      <ProfileForm />
    </section>
  );
};