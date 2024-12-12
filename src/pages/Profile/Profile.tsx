import ProfileInfo from "./views/profile-info/ProfileInfo";
import ProfileForm from "./views/profile-form/ProfileForm";
import LogoutBtn from "./components/logout-btn/LogoutBtn";
import useProfileLogic from "@/customHooks/profile/useProfileLogic";

const Profile: React.FC = () => {
  const {
    setProfileData,
    updatedProfileData,
    handleSubmitProfile,
    handleLogout,
    profileData,
  } = useProfileLogic();
  
  return (
    <div className="m-auto mt-[40px] w-[900px] rounded-lg bg-white p-6 shadow-md">
      <ProfileInfo data={updatedProfileData} />
      <h2 className="mb-4 mt-[30px] text-2xl font-bold text-gray-900">
        Edit Profile
      </h2>
      <ProfileForm
        setProfileData={setProfileData}
        handleSubmitProfile={handleSubmitProfile}
        profileData={profileData}
      />
      <LogoutBtn handleLogout={handleLogout}/>
    </div>
  );
};

export default Profile;
