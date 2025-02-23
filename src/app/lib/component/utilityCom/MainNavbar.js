 
import React from "react";
import Link from "next/link";
 
import Image from "next/image";

const getData =async()=>{
    let res = await fetch('http://localhost:3000/api/getData/navbar',{cache:"force-cache"})
    let data = await res.json()
    return data.data
}
 

const MainNavbar =async () => {
    let Data = await getData()
    // const router = useRouter();
    // const [activePath, setActivePath] = useState(""); // Tracks the currently active path
    // const [Data, setData] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchHeroData = async () => {
    //         try {
    //             const response = await fetch("/api/getData/navbar", { cache: "force-cache" });

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             setData(data.data); // Assuming the API sends `{ status: "ok", data: [...] }`
    //         } catch (err) {
    //             console.error("Error fetching navbar data:", err);
    //             setError(err.message);
    //         }
    //     };

    //     fetchHeroData();
    // }, []);

    // // Initialize the active path based on the current route
    // useEffect(() => {
    //     setActivePath(window.location.pathname);
    // }, []);

    // const handleNavClick = (url) => {
    //     setActivePath(url); // Update the active path immediately
    //     router.push(url); // Navigate to the selected route
    // };

    // const logOut = async () => {
    //     const config = { method: "get" };
    //     let response = await fetch("/api/login", config, { cache: "force-cache" });
    //     let json = await response.json();

    //     if (json.status === "ok") {
    //         toast.success("Log Out Success");
    //         router.replace("/");
    //     }
    // };

    // const logIn = async () => {
    //     router.replace("/login");
    // };

    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {Data.map((value) => (
                                <li key={value._id}>
                                    <Link href={value.link}  >
                                        {value.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-16">
                        <Link href="/">
                            <Image src="/logo.jpg" alt="logo" width={500} height={300} />
                        </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Data.map((value) => (
                            
                                 <li key={value._id}>
                                    <Link href={value.link}  >
                                        {value.name}
                                    </Link>
                                </li>
                            
                        ))}
                    </ul>
                </div>

                <div className="navbar-end flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src="/file.jpg" alt="Logo Image" width={300} height={200} />
                            </div>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link href="/dashboard/profile" className="justify-between">
                                    Update
                                </Link>
                            </li>
                            <li>
                                {/* <button onClick={logIn}>Log In</button> */}
                            </li>
                            <li>
                                {/* <button onClick={logOut}>Log Out</button> */}
                            </li>
                            <li>
                                <Link href="/">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNavbar;
