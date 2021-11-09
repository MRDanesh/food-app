import express from 'express';

import {registerUser, authUser, getUserProfile, updateUserFavouritesShops, updateUserProfile} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/profile/likes').put(protect, updateUserFavouritesShops);
router.route('/profile/update').put(protect, updateUserProfile);

export default router;