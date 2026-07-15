// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 shadow bg-white">
//       <ul className="flex gap-3 text-black">
//         <li>
//           <Link href={"/"}>Home</Link>
//         </li>
//         <li>
//           <Link href={"/destinations"}>Destinations</Link>{" "}
//         </li>
//         <li>
//           <Link href={"/my-bookings"}>My Bookings</Link>{" "}
//         </li>
//         <li>
//           <Link href={"/add-destination"}>Add Destination</Link>{" "}
//         </li>
//       </ul>
//       <div className="">
//         <Image
//           src={"/assets/Wanderlast.png"}
//           alt="wanderlust logo"
//           width={150}
//           height={150}
//         />
//       </div>
//       <ul className="flex gap-3 items-center text-black">
//         <li>
//           <Link href={"/profile"}>Profile</Link>{" "}
//         </li>
//         {user ? (
//           <>
//             <li>
//               <Avatar>
//                 <Avatar.Image
//                   referrerPolicy="no-referrer"
//                   alt="John Doe"
//                   src={user?.image}
//                 />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>
//             </li>
//             <li>
//               <Button
//                 onClick={handleSignOut}
//                 variant="danger"
//                 className={"rounded-none"}
//               >
//                 Logout
//               </Button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link href={"/login"}>Login</Link>{" "}
//             </li>
//             <li>
//               <Link href={"/signup"}>Sign Up</Link>{" "}
//             </li>{" "}
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="shadow bg-white">
      <div className="flex justify-between items-center p-4">
        {/* Left Menu */}
        <ul className="hidden lg:flex gap-3 text-black">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>
          <li>
            <Link href={"/my-bookings"}>My Bookings</Link>
          </li>
          <li>
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
        </ul>

        {/* Logo */}
        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            alt="wanderlust logo"
            width={150}
            height={150}
            className="w-28 md:w-36 lg:w-40"
          />
        </div>

        {/* Right Menu */}
        <ul className="hidden lg:flex gap-3 items-center text-black">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </li>

              <li>
                <Button
                  onClick={handleSignOut}
                  variant="danger"
                  className="rounded-none"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-black"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-white">
          <ul className="flex flex-col gap-4 p-5 text-black">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/destinations"
                onClick={() => setMenuOpen(false)}
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                onClick={() => setMenuOpen(false)}
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href="/add-destination"
                onClick={() => setMenuOpen(false)}
              >
                Add Destination
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
            </li>

            {user ? (
              <>
                <li className="flex items-center gap-3">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>

                  <span>{user?.name}</span>
                </li>

                <li>
                  <Button
                    onClick={handleSignOut}
                    variant="danger"
                    className="rounded-none w-full"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    href="/signup"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;