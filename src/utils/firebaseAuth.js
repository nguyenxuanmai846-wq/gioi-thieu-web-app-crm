import siteConfig from '../config/siteConfig';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

let app = null;
let auth = null;
let provider = null;

export const isFirebaseConfigured = () => {
  const config = siteConfig.firebaseConfig;
  return Boolean(
    config && 
    config.apiKey && 
    config.apiKey.trim() !== '' && 
    config.apiKey !== 'AIzaSy...' && 
    config.projectId && 
    config.projectId.trim() !== ''
  );
};

export const getFirebaseAuth = () => {
  if (!isFirebaseConfigured()) return null;
  if (!app) {
    app = getApps().length > 0 ? getApp() : initializeApp(siteConfig.firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
  }
  return { auth, provider };
};

/**
 * Đăng nhập với tài khoản Google
 */
export const signInWithGoogle = async () => {
  if (!isFirebaseConfigured()) {
    throw new Error('CONFIG_MISSING');
  }

  const { auth, provider } = getFirebaseAuth();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  
  const userData = {
    uid: user.uid,
    displayName: user.displayName || 'Doanh nghiệp',
    email: user.email,
    photoURL: user.photoURL || null
  };

  // Lưu trạng thái vào localStorage
  localStorage.setItem('webapp_crm_user', JSON.stringify(userData));
  return userData;
};

/**
 * Đăng xuất
 */
export const logoutUser = async () => {
  if (isFirebaseConfigured() && auth) {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn('Sign out error', e);
    }
  }
  localStorage.removeItem('webapp_crm_user');
};

/**
 * Lấy thông tin user hiện tại (từ localStorage hoặc Firebase)
 */
export const getCurrentStoredUser = () => {
  try {
    const raw = localStorage.getItem('webapp_crm_user');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
};
