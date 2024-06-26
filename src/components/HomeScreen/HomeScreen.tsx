import { useState } from "react";
import UserList from "../users/UserList";
import Users from "../users/Users";
import { User } from "../../types/types";

function HomeScreen() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSelected = (user: User) => {
    setLoading(true);
    setSelectedUser(user);
    setLoading(false);
  };
  return (
    <div className=" sm:max-w-[100vw] max-w-[90vw] flex items-center justify-center md:m-auto">
      <div className="flex flex-row">
        <div className="overflow-y-scroll sm:w-[20vw]  md:p-5 md:w-[20vw] overflow-x-hidden h-screen">
          <UserList onSelectedUser={handleSelected} />
        </div>
        <div className="flex-grow p-1 w-[60vw] md:w-[60vw] sm:">
          <Users user={selectedUser} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
