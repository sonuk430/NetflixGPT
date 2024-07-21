import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./fireBase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // if user will login the user go to Browse Page
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // if user will loginOot the user go to login Page
      }
    });
    // unsubscribe when conponent unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="Logo" />
        <div className="flex">
          <img
            className="w-12 h-12 p-2"
            src={user === null ? "" : user.photoURL}
            alt="userIcon"
          />

          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
