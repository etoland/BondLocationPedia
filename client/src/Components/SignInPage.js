// import React, { useContext, useState, useEffect } from "react";
// import { SignInContext } from "./SignInContext";
// import { useAuth0 } from "@auth0/auth0-react";
// import SignInButton from "./SignInButton";

// const SignInPage = () => {
//   const { signIn, setSignIn } = useContext(SignInContext);
//   const { user, isAuthenticated } = useAuth0;

//   useEffect(() => {
//     if (isAuthenticated) {
//       setSignIn({
//         firstName: user?.given_name,
//         lastName: user.family_name,
//         email: user.email,
//       });
//     }
//   }, [user]);

//   return (
//     <>
//       {isAuthenticated ? (
//         <p>Greeting's Agent ...{signIn.firstName}</p>
//       ) : (
//         <p>Welcome Guest Agent</p>
//       )}
//     </>
//   );
// };

// export default SignInPage;
