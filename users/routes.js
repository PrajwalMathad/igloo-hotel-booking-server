import * as dao from "./dao.js";

function UserRoutes(app) {
  const createUser = async (req, res) => {
    try {
      const user = await dao.createUser(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const deleteUser = async (req, res) => {
    try {
      const status = await dao.deleteUser(req.params.userId);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findAllUsers = async (req, res) => {
    try {
      const users = await dao.findAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };
  const findUserById = async (req, res) => {
    try {
      const user = await dao.findUserById(req.params.userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const status = await dao.updateUser(userId, req.body);
      const currentUser = await dao.findUserById(userId);
      req.session['currentUser'] = currentUser;
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const signup = async (req, res) => {
    try {
      const user = await dao.findUserByEmail(
        req.body.email);
      if (user) {
        res.status(400).json(
          { message: "User already exists" });
      } else {
        const currentUser = await dao.createUser(req.body);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }


  };

  const signin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const currentUser = await dao.findUserByCredentials(email, password);
      req.session['currentUser'] = currentUser;
      res.json(currentUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const signout = (req, res) => {
    try {
      req.session.destroy();
      res.json(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const account = async (req, res) => {
    try {
      res.json(req.session['currentUser']);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default UserRoutes;