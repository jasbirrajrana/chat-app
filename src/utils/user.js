const users = [];

//add user , removeuser getuser ,getUsers

const addUser = ({ id, username, room }) => {
  //CLEAN THE DATA
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  //check for exixting user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  //validate username

  if (existingUser) {
    return {
      error: "Username is in use",
    };
  }
  //stored user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//removing user
const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
//get user  by id
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//get users in room
const getUsersInRoom = (room) => {
  room = room.trim();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
