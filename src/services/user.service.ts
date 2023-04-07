import instance from "./api.service";

const endPoint = "/users";

const getOneUser = async (id: number) => {
  try {
    const user = await instance.get(`${endPoint}/${id}`);

    return user.data;
  } catch (error: any) {
    if (error.response.status === 400) {
      window.location.reload();
    }
  }
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
