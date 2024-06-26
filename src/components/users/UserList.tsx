import React from "react";
import Skeleton from "react-loading-skeleton";
import { fetchUsers } from "../../util/api";
import { User } from "../../types/types";


interface Props{
    onSelectedUser:(user:User)=>void;
}

function UserList({onSelectedUser}:Props){
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState("");

  React.useEffect(() => {
    const loaduser = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setErr("Failed to fetch users!");
        setLoading(false);
      }
    };
    loaduser();
  }, []);
  if(err) console.error(err);
  if (loading || !users) {
    return (
      <div>
        {Array(15)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="flex items-center gap-2 mt-2">
              <Skeleton circle={true} height={60} width={60} className="mr-3" />
              <Skeleton height={30} width={200} />
            </div>
          ))}
      </div>
    );
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center mb-4 p-2 rounded-md selection:cursor-pointer hover:bg-[#504d4d4d] transition duration-300 ease-in-out"
            onClick={() => onSelectedUser(user)}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={``}
                className="w-12 h-12 rounded-full mr-3"
              />
            ) : (
              <Skeleton circle={true} height={50} width={50} className="mr-3" />
            )}

            <span>
              {" "}
              {user.profile.firstName} {user.profile.lastName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
