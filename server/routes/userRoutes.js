import express from 'express';

import {registerUser, authUser, getUserProfile, updateUserFavouritesShops} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/profile/likes').put(protect, updateUserFavouritesShops);

export default router;