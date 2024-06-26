import { User } from "../../types/types";
import Skeleton from "react-loading-skeleton";
interface Props {
  user: User | null;
  loading: boolean;
}
function Users({ user, loading }: Props) {
  if (!user || loading) {
    return (
      <div className="flex flex-col p-4 w-fit ">
        <Skeleton circle={true} height={100} width={100} className="mb-4" />
        <Skeleton height={25} width={150} className="mb-2" />
        <Skeleton height={20} width={200} className="mb-2" />
        <p className="mb-2">select a user to see details</p>
        <Skeleton height={20} width={250} className="mb-2" />
        <Skeleton height={20} width={300} className="mb-2" />
      </div>
    );
  }
  return (
    <div className="p-5 h-full flex flex-col  mt-[10vh]">
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={``}
          className="w-[15vh] h-[15vh] rounded-full mr-3"
        />
      ) : (
        <Skeleton circle={true} height={50} width={50} className="mr-3" />
      )}
      <h2 className="text-2xl font-semibold mb-2">
        {user.profile.firstName} {user.profile.lastName}
      </h2>
      <p className="text-lg mb-2">{user.jobTitle}</p>
      <p className="mb-2 text-sm font-extralight">{user.Bio}</p>
      <p className="mb-2 text-sm font-extralight">{user.profile.email}</p>
    </div>
  );
}

export default Users;
