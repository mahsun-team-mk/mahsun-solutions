import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (

        <>
            {/* /////////////////////////////////////////////>>>>>>> Start Footer <<<<<< //////////////////////////////////////////////////////////// */}
            <footer className="bg-black py-5 font-sans tracking-wide">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">About Us</h4>
                        <p className="text-gray-400 text-base text-justify">A Front-End Developer creates visual and interactive elements of websites
                            using cutting-edge technology like JavaScript, React.js, Next.js and Tailwind Css ensuring responsive, user-friendly
                            interfaces across all devices.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">Web Development</a></li>
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">Mobile App Development</a>
                            </li>
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">UI/UX Design</a></li>
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                        <p className="text-gray-400 text-base">First Floor Jameel Market</p>
                        <p className="text-gray-400 text-base">Umerkot, Sindh, Pakistan</p>
                        <p className="text-gray-400 text-base">mahsunteam@gmail.com</p>
                        <p className="text-gray-400 text-base">+92 336 326 8833</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>

                        <ul className="flex flex-wrap gap-x-5 gap-4">
                            <li><a href="javascript:void(0)" className="text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 512 512">
                                    <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                                    <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
                                </svg>
                            </a></li>
                            {/* ///////////////////////////////// Linkedin Icon //////////////////////// */}
                            <li>
                                <a href="https://www.linkedin.com/in/mahsun-team-mk/" target="_blank" className="text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 176 176">
                                        <g data-name="Layer 2">
                                            <rect width="176" height="176" fill="#0077b5" data-original="#0077b5" rx="24" />
                                            <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            {/* ///////////////////////////////// Github Icon //////////////////////// */}


                            <li>
                                <a href="https://github.com/mahsun-team-mk" target="_blank" className="text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="#0077b5" rx="4" />
                                        <path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.185 6.839 9.503.5.09.683-.217.683-.483 0-.238-.009-.868-.013-1.704-2.782.605-3.37-1.343-3.37-1.343-.454-1.157-1.109-1.466-1.109-1.466-.906-.62.069-.607.069-.607 1.002.07 1.528 1.03 1.528 1.03.89 1.526 2.34 1.086 2.91.831.09-.647.349-1.086.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.984 1.029-2.682-.103-.253-.447-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.562 9.562 0 0112 6.845c.85.004 1.705.115 2.504.336 1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.202 2.396.1 2.65.64.698 1.027 1.59 1.027 2.682 0 3.847-2.339 4.695-4.566 4.944.358.308.678.918.678 1.852 0 1.336-.012 2.417-.012 2.746 0 .268.18.577.688.48A10.024 10.024 0 0022 12.019C22 6.484 17.523 2 12 2z" />
                                    </svg>
                                </a>
                            </li>


                            {/* /////////////////////////////////  end github Icon //////////////////////// */}


                            {/* /////////////////////////////////  X icon Icon //////////////////////// */}

                            {/* <li><a href="javascript:void(0)" className="text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 1227 1227">
            <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
            <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
          </svg></a></li> */}
                        </ul>

                    </div>
                </div>

                <div className="bg-gray-900 p-5 mt-2">
                    <p className='text-gray-400 text-base text-center'>© MahSun Solutions. All rights reserved.</p>
                </div>
            </footer>
            {/* /////////////////////////////////////////////>>>>>>> End Footer <<<<<< //////////////////////////////////////////////////////////// */}
        </>


    );
}







