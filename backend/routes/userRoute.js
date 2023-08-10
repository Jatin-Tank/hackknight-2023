import express from 'express'
import { deleteUser, forgotPassword, getAllUsers, getUser, getUserDetails, logOutUser, loginUser, registerUser, updatePassword, updateProfile, updateUserRole } from '../controller/userController.js';
import { authorizeRoles, isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post("/user/new",registerUser);
router.post("/user/login",loginUser);
router.get("/user/logout",logOutUser);
router.get("/user/getUserData",isAuthenticated,getUserDetails);

export default router;
