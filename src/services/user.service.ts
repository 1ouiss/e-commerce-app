import instance from "./api.service";

const endPoint = "/users";

const getOneUser = async (id: number) => {
  const user = await instance.get(`${endPoint}/${id}`);
  console.log(user.data);

  return user.data;
};

const getAllUsers = async () => {
  const users = await instance.get(`${endPoint}`);
  return users.data;
};

const UserService = {
  getOneUser,
  getAllUsers,
};

export default UserService;
