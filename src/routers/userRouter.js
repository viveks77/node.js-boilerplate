const express = require("express");
const User = require("../models/userModel");
const auth = require("../middlewares/authMiddleware");

const router = new express.Router();

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.token.filter((token) => {
      return token !== req.token;
    });
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

router.post("/user/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

router.get("/user/me", auth, async (req, res) => {
  try {
    res.status(200).send({ user: req.user });
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

router.delete("user/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

module.exports = router;
