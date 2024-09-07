"use client"; // Add this line at the top
import image2 from "../public/image2.jpg"
import AiImage from "../public/Ai.png"; // Import the image
import Image from "next/image";

export default function NavigationBar() {
    return (
        <>

            {/* //////////////////////////////////////>>>>>>>>     start Nav Bar    <<<<<<<<<   ////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////>>>>>>>>>     end start Nav Bar    <<<<<<<<<   ////////////////////////////////////////////////////// */}

            <section className="text-gray-600 body-font  "  >
                <div className="container  flex  py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2  ml-10 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
                            <span className="word word3 text-green-600"> Mukesh</span>{" "}
                            <span className="word word4 text-red-600">Kumar</span>{" "}
                            <span className="word word5">Developer</span>



                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                            <span className="word word5">I am a</span>{" "}
                            <span className="word word5 text-blue-600">Front-End Developer</span>
                        </h2>

                        <p className="mb-8 leading-relaxed text-justify" >
                            A Front-End Developer is responsible for creating the visual and interactive elements of a
                            WEBSITE or WEB Application. We use HTML, CSS, JavaScript, React.js, Next.js, Bootstrap and Tailwind.Css
                            to build responsive, user-friendly interfaces, ensuring a seamless user experience across various devices
                            and browsers. </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get The Free Guidance
                                <ul className="flex flex-wrap pl-4 gap-x-5 gap-4">
                                    {/* ///////////////////////////////// Facebook Icon //////////////////////// */}

                                    {/* <li><a href="javascript:void(0)" className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8" viewBox="0 0 512 512">
                        <path fill="" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                        <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
                      </svg>
                    </a></li> */}
                                    {/* ///////////////////////////////// Linkedin Icon //////////////////////// */}
                                    <li>
                                        <a href="https://www.linkedin.com/in/mahsun-team-mk/" target="_blank" className="text-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 rounded-full" viewBox="0 0 176 176">
                                                <g data-name="Layer 2">
                                                    <rect width="176" height="176" fill="" data-original="#0077b5" rx="24" />
                                                    <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>

                                    {/* ///////////////////////////////// Github Icon //////////////////////// */}


                                    <li>
                                        <a href="https://github.com/mahsun-team-mk" target="_blank" className="text-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 rounded-full" viewBox="0 0 24 24">
                                                <rect width="24" height="24" fill="" rx="4" />
                                                <path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.185 6.839 9.503.5.09.683-.217.683-.483 0-.238-.009-.868-.013-1.704-2.782.605-3.37-1.343-3.37-1.343-.454-1.157-1.109-1.466-1.109-1.466-.906-.62.069-.607.069-.607 1.002.07 1.528 1.03 1.528 1.03.89 1.526 2.34 1.086 2.91.831.09-.647.349-1.086.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.984 1.029-2.682-.103-.253-.447-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.562 9.562 0 0112 6.845c.85.004 1.705.115 2.504.336 1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.202 2.396.1 2.65.64.698 1.027 1.59 1.027 2.682 0 3.847-2.339 4.695-4.566 4.944.358.308.678.918.678 1.852 0 1.336-.012 2.417-.012 2.746 0 .268.18.577.688.48A10.024 10.024 0 0022 12.019C22 6.484 17.523 2 12 2z" />
                                            </svg>
                                        </a>
                                    </li>


                                    {/* /////////////////////////////////  end github Icon //////////////////////// */}
                                </ul>

                            </button>
                            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:b
                
                
                g-gray-200 rounded text-lg">Contact Us</button> */}
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded animate__animated animate__jackInTheBox animate__delay-1s p-4rounded" alt="hero" src="image2.jpg" />
                    </div>
                </div>
            </section>
            {/* //////////////////////////////////////>>>>>>>>>    Main message    <<<<<<<<<   ////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////   Start  Techmology  ////////////////////////////////////////////////////////////////////////  */}
            <div className="bg-gray-100 md:px-10 px-4 py-12  font-[sans-serif] text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-5 ">Top Technology in 2024</h2>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-20" >The world is rapidly changing and moving towards AI and robotics.</p>

                <div className="max-md:max-w-lg mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="AAi.png" alt="Blog Post 1" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">AI Robot</h3>
                                <p className="text-sm opacity-75">
                                    An AI robot is a physical or virtual entity equipped with artificial intelligence.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>

                            </div>
                        </div>



                        <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="AI11.jpg" alt="Blog Post 2" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Artificial intelligence </h3>
                                <p className="text-sm opacity-75">AI is a set of technologies that enable computers to perform a variety of advanced
                                    functions. </p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/chatbot2.jpg" alt="Blog Post 3" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">AI ChatBot</h3>
                                <p className="text-sm opacity-75"> AI chatbot is a set of technologies that are based
                                    primarily on machine learning and deep learning.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="chatbot4.jpg" alt="Blog Post 1" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Blockchain</h3>
                                <p className="text-sm opacity-75">
                                    Blockchain is a decentralized and distributed digital ledger technology.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>

                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="software.jpg" alt="Blog Post 2" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Internet of Things</h3>
                                <p className="text-sm opacity-75 text-justify">IoT refers to the network of
                                    interconnected devices  and systems that communicate and exchange the data.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>


                        <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="clould.jpg" alt="Blog Post 3" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Clould Computing</h3>
                                <p className="text-sm opacity-75">Cloud computing is a technology that delivers computing resources
                                    and services over the internet.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>




                    </div>


                </div>
            </div>
            {/* ///////////////////////////////////////////////////>>>>> technology end <<<<<<< ////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> start Our Services <<<<<<      //////////////////////////////////////////////////////////// */}

            {/* <div className="font-[sans-serif] bg-gradient-to-r  from-purple-800 to-indigo-800 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">Our Exclusive Services</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
                        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img src="/Ai.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                            <h3 className="text-xl font-semibold mb-3">Artificial Intelligence</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Our AI service provides comprehensive
                                solutions to harness the power of artificial intelligence, offering everything from strategic consulting
                                and custom AI development to seamless integration, deployment, and ongoing support. We specialize in creating
                                tailored machine learning models, natural language processing tools, and computer vision systems, all while
                                ensuring ethical practices and regulatory compliance.</p>
                        </div>

                        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img src="/chatBot.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                            <h3 className="text-xl font-semibold mb-3">AI Chatbot</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Our AI chatbot service delivers advanced conversational
                                solutions designed to enhance user engagement and streamline interactions. We develop intelligent chatbots capable
                                of understanding natural language, providing accurate responses. With features like
                                personalized interactions, automated customer support,  our chatbots
                                improve efficiency and customer satisfaction. </p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img src="/mobileApp.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                            <h3 className="text-xl font-semibold mb-3">Mobile App Developer</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">A Mobile App Developer designs, builds, and maintains
                                software applications for mobile devices, such as smartphones and tablets. They work with various programming
                                languages and development frameworks to create apps that are functional, user-friendly, and optimized for performance
                                across different mobile platforms (e.g., iOS, Android)</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img src="/ecommerce2.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                            <h3 className="text-xl font-semibold mb-3">E-Commerce Websites</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">E-Commerce websites are online platforms that facilitate
                                buying and selling of products or services over the internet. They provide a virtual storefront where businesses can
                                showcase their products, manage inventory, process transactions, and handle customer interactions. Key features often
                                include product catalogs, shopping carts, secure payment gateways, user accounts, and order tracking.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img src="/developer.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                            <h3 className="text-xl font-semibold mb-3">Web Design</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Web design involves creating the visual and functional
                                aspects of websites. It encompasses the layout, color schemes, typography, graphics, and overall user experience. Web
                                designers use various tools and techniques to ensure that a website is aesthetically pleasing, intuitive, and easy
                                to navigate. The goal is to create a user-friendly interface that effectively communicates the brand’s message and
                                meets the needs of its target audience</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img src="/consultant.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
                            <h3 className="text-xl font-semibold mb-3">Software Consulting</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Software consulting involves providing expert
                                advice and guidance on software development and technology solutions. Consultants work with businesses to
                                identify their software needs, recommend appropriate technologies, and develop strategies to achieve their
                                goals. This can include assessing current systems, designing custom software solutions, overseeing
                                implementation, and optimizing performance. </p>
                        </div>


                    </div>
                </div>
            </div> */}

            {/* /////////////////////////////////////////////>>>>>>>  End Our Services <<<<<<      //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> start  Gallery <<<<<<      //////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////>>>>>>> end Gallery <<<<<<      //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
            <section className="text-gray-600  body-font bg-gray-100">
                <div className="container   py-24 mx-auto">
                    <div className="flex flex-wrap  w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Our Work</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 text-justify w-full leading-relaxed text-gray-500">Front-End Developers create visually engaging
                            and user-friendly interfaces using HTML, CSS, and JavaScript, ensuring a seamless experience across devices
                            and browsers.  </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-300 p-6 rounded-lg">
                                <img className="h-60 rounded w-full object-cover object-center mb-6" src="front.jpg" alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Front End Developer</h2>
                                <p className="leading-relaxed text-base">Front-End Developers create visually engaging and user-friendly interfaces.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-300 p-6 rounded-lg">
                                <img className="h-60 rounded w-full object-cover object-center mb-6" src="backEnd.jpg" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Back End Developer</h2>
                                <p className="leading-relaxed text-base">Back-End Developers handle
                                    server-side logic, database management. </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-300 p-6 rounded-lg">
                                <img className="h-60 rounded w-full object-cover object-center mb-6" src="mobile2.jpg" alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mobile App Developer</h2>
                                <p className="leading-relaxed text-base">A mobile app is a software application designed
                                    specifically for use on mobile devices.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-300 p-6 rounded-lg">
                                <img className="h-60 rounded w-full object-cover object-center mb-6" src="chatbot5.jpg" alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">AI Chatbot Developer</h2>
                                <p className="leading-relaxed text-base">Chatbot developers are web developers who create,
                                    design, and maintain chatbots.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /////////////////////////////////////////////>>>>>>> end  about Our work <<<<<<      //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start Pricing <<<<<<      //////////////////////////////////////////////////////////// */}
            <div className="max-w-7xl max-sm:max-w-md mx-auto p-4 font-[sans-serif] bg-pink-100">
                <div className="text-center">
                    <h2 className="text-gray-800 text-3xl font-bold mb-4">Pricing Plans</h2>
                    <p className="text-gray-800 text-sm">Select your Service according your needs</p>
                </div>

                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-8">
                    <label className=" bg-gray-200 cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-orange-500 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio" type="radio" name="value1" className="w-5 h-5 hidden peer" />
                            <div
                                className="relative flex items-center bg-gray-600 justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-orange-500 rounded-full overflow-hidden">
                                <span className="bg-orange-800 bg-gray-600 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold  text-black-500">AI Chatbot</h3>
                            <p className="text-gray-600 text-xs mt-1">15 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$200</h3>
                            <p className="text-gray-600 text-xs mt-1">3  Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>

                    <label className="bg-white bg-gray-200 cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-blue-500 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio2" type="radio" name="value1" className="w-5 h-5 hidden peer" checked />
                            <div
                                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-blue-500 rounded-full overflow-hidden">
                                <span className="bg-blue-500 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-500">Mobile App</h3>
                            <p className="text-gray-600 text-xs mt-1">15 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$200</h3>
                            {/* <p className="text-xs mt-1 text-red-500">20% Off regular price</p> */}
                            <p className="text-gray-600 text-xs mt-1">3 Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>

                    <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-teal-500  bg-gray-200 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio3" type="radio" name="value1" className="w-5 h-5 hidden peer" />
                            <div
                                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-teal-500 rounded-full overflow-hidden">
                                <span className="bg-teal-500 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-500">Full Stack Website</h3>
                            <p className="text-gray-600 text-xs mt-1">15 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$200</h3>
                            <p className="text-gray-600 text-xs mt-1">3 Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>

                    <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4   bg-gray-200 border-pink-500 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio4" type="radio" name="value1" className="w-5 h-5 hidden peer" />
                            <div
                                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-pink-500 rounded-full overflow-hidden">
                                <span className="bg-pink-500 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-pink-500">UI/UX Design</h3>
                            <p className="text-gray-600 text-xs mt-1">10 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$150</h3>
                            <p className="text-gray-600 text-xs mt-1">5 Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>
                </div>
            </div>
            {/* /////////////////////////////////////////////>>>>>>> End Pricing <<<<<< /////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start Testimonial <<<<<<  //////////////////////////////////////////////////////////// */}
            {/* <div className="py-10 font-[sans-serif] bg-cyan-100 max-md:max-w-2xl mx-auto">
                <div className="md:mb-28 mb-12 text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold">What our happy client Said</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 relative">
                    <div className="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[140%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
                    </div>

                    <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
                        <div>
                            <img src="https://readymadeui.com/profile_2.webp" className="w-10 h-10 rounded-full" />
                            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">John Doe</h4>
                            <p className="mt-0.5 text-xs text-gray-600">Founder of Rubik</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                        </div>
                    </div>

                    <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
                        <div>
                            <img src="https://readymadeui.com/profile_3.webp" className="w-10 h-10 rounded-full" />
                            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Mark Adair</h4>
                            <p className="mt-0.5 text-xs text-gray-600">Founder of Alpha</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600 text-sm leading-relaxed">The service was excellent. While the food took a
                                bit longer to arrive, the staff was polite and attentive, and the delivery time was surprisingly quick.</p>
                        </div>
                    </div>

                    <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
                        <div>
                            <img src="https://readymadeui.com/profile_4.webp" className="w-10 h-10 rounded-full" />
                            <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Simon Konecki</h4>
                            <p className="mt-0.5 text-xs text-gray-600">Founder of Labar</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600 text-sm leading-relaxed">The experience was outstanding. Though there was a
                                longer wait for my meal, the team was courteous and attentive, and the delivery was remarkably swift.</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* /////////////////////////////////////////////>>>>>>> End Testimonial <<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start company Rating <<<<<< //////////////////////////////////////////////////////////// */}
            {/* <div className="bg-cyan-100 px-4 py-16 font-[sans-serif] text-white">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-12 max-w-7xl mx-auto">
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 512 512">
                            <path d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z" data-original="#000000" />
                            <path d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">13+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Clients</p>
                    </div>
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 512 512">
                            <path fill-rule="evenodd" d="M64.217 333.491h41.421c5.508 0 10 4.492 10 10v97.833c0 5.508-4.492 10-10 10H64.217c-5.508 0-10-4.492-10-10v-97.833c0-5.508 4.492-10 10-10zm155.471-61.737h-41.422c-5.508 0-10 4.492-10 10v159.571c0 5.508 4.492 10 10 10h41.422c5.508 0 10-4.492 10-10V281.754c0-5.508-4.493-10-10-10zm114.049-64.466h-41.421c-5.508 0-10 4.492-10 10v224.036c0 5.508 4.492 10 10 10h41.421c5.508 0 10-4.492 10-10V217.288c-.001-5.507-4.493-10-10-10zm72.625-57.992h41.421c5.508 0 10 4.492 10 10v282.028c0 5.508-4.492 10-10 10h-41.421c-5.508 0-10-4.492-10-10V159.296c0-5.508 4.492-10 10-10zm2.707-106.018a7.98 7.98 0 0 1-.812-15.938l49.121-2.666a7.98 7.98 0 0 1 8.307 9.094l.006.001-7.088 48.68a7.986 7.986 0 0 1-15.812-2.25l3.878-26.632C385.642 108.019 321.72 152.702 257.158 189.5c-69.131 39.402-138.98 69.744-206.779 93.355a7.976 7.976 0 0 1-5.25-15.062c66.943-23.313 135.906-53.269 204.154-92.167 63.527-36.208 126.449-80.188 186.56-133.799zM45.262 481.873h421.477c5.508 0 10 4.492 10 10v3.193c0 5.508-4.492 10-10 10H45.262c-5.508 0-10-4.492-10-10v-3.193c0-5.508 4.492-10 10-10zM139.587 6.935c-48.325 0-87.5 39.175-87.5 87.5s39.175 87.5 87.5 87.5 87.5-39.175 87.5-87.5c-.001-48.325-39.176-87.5-87.5-87.5zm-8 32.13v5.279c-5.474 1.183-10.606 3.537-14.768 6.92-6.626 5.387-10.827 13.21-10.353 22.965.476 9.817 5.372 16.4 12.186 20.849 5.887 3.844 13.093 5.827 19.733 6.917 5.206.855 10.757 2.201 14.95 4.733 3.261 1.969 5.71 4.838 6.23 9.127.072.595.111 1.013.117 1.26.08 3.359-1.536 5.926-3.962 7.767-3.135 2.379-7.564 3.785-12.005 4.324a33.57 33.57 0 0 1-3.172.254c-5.25.126-10.424-1.156-14.458-3.842-3.274-2.18-5.775-5.367-6.818-9.552a7.982 7.982 0 0 0-15.5 3.812c2.094 8.399 7.044 14.749 13.505 19.052 4.252 2.831 9.164 4.736 14.315 5.711v5.165a8 8 0 1 0 16-.001v-5.01c6.309-1.038 12.699-3.388 17.758-7.226 6.302-4.782 10.494-11.632 10.275-20.829a29.17 29.17 0 0 0-.179-2.76c-1.22-10.052-6.653-16.591-13.856-20.94-6.27-3.786-13.768-5.668-20.637-6.796-4.832-.793-9.912-2.13-13.607-4.543-2.767-1.806-4.752-4.416-4.937-8.224-.202-4.157 1.615-7.512 4.478-9.84 2.281-1.854 5.196-3.144 8.362-3.781a22.978 22.978 0 0 1 10.115.244c5.278 1.338 10.083 4.817 12.614 10.845a7.997 7.997 0 0 0 10.469 4.281 7.997 7.997 0 0 0 4.281-10.469c-4.701-11.196-13.65-17.664-23.489-20.158a37.3 37.3 0 0 0-1.646-.377v-5.161a8 8 0 1 0-16.001.004z" clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">450+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Unique Visitors</p>
                    </div>
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 28 28">
                            <path d="M18.56 16.94h-3.12l.65-2.16a2.58 2.58 0 0 0-1.66-3.21 1.41 1.41 0 0 0-1.81 1l-.1.42a8.61 8.61 0 0 1-2.26 4l-.57.56a1.56 1.56 0 0 0-1.21-.59h-.73a1.56 1.56 0 0 0-1.56 1.54v6.44a1.56 1.56 0 0 0 1.56 1.56h.73a1.55 1.55 0 0 0 1.33-.76l.14.07a6.55 6.55 0 0 0 2.91.69h3.59a3.58 3.58 0 0 0 3-1.6 6.34 6.34 0 0 0 1.07-3.53v-2.49a1.94 1.94 0 0 0-1.96-1.94zm-9.56 8a.56.56 0 0 1-.56.56h-.69a.56.56 0 0 1-.56-.56V18.5a.56.56 0 0 1 .56-.56h.73a.56.56 0 0 1 .52.56zm10.5-3.57a5.38 5.38 0 0 1-.9 3 2.59 2.59 0 0 1-2.15 1.15h-3.59a5.53 5.53 0 0 1-2.46-.58l-.4-.2V18.6l.92-.92a9.63 9.63 0 0 0 2.53-4.46l.1-.41a.43.43 0 0 1 .2-.26.4.4 0 0 1 .32 0 1.58 1.58 0 0 1 1 2l-.84 2.81a.5.5 0 0 0 .08.44.48.48 0 0 0 .4.2h3.79a.94.94 0 0 1 .94.94zM11 7.3l-.32 1.85a1.09 1.09 0 0 0 .44 1.09 1.11 1.11 0 0 0 .65.22 1.18 1.18 0 0 0 .52-.13L14 9.45l1.67.88a1.1 1.1 0 0 0 1.17-.09 1.09 1.09 0 0 0 .44-1.08L17 7.3 18.31 6a1.1 1.1 0 0 0 .29-1.14 1.12 1.12 0 0 0-.9-.76l-1.87-.27L15 2.12a1.12 1.12 0 0 0-2 0l-.83 1.69-1.87.27a1.12 1.12 0 0 0-.9.76A1.1 1.1 0 0 0 9.69 6zm-.6-2.23 2.13-.31a.49.49 0 0 0 .47-.27l1-1.93a.11.11 0 0 1 .2 0l1 1.93a.49.49 0 0 0 .38.27l2.13.31a.12.12 0 0 1 .09.08.11.11 0 0 1 0 .11l-1.54 1.5a.53.53 0 0 0-.15.45l.37 2.11a.09.09 0 0 1-.05.11.1.1 0 0 1-.12 0l-1.9-1a.47.47 0 0 0-.46 0l-1.91 1a.09.09 0 0 1-.11 0 .09.09 0 0 1-.05-.11l.37-2.11a.53.53 0 0 0-.15-.45l-1.54-1.5a.11.11 0 0 1 0-.11.12.12 0 0 1-.12-.08zm-3.06 8.18a1 1 0 0 0 1-1.19l-.27-1.52 1.12-1.09a1 1 0 0 0-.56-1.73L7.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L3.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12zm-1.84-1.9a.46.46 0 0 0-.23.06l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45L2.51 8.71l1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29L7.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.46.46 0 0 0-.23-.06zm20.95-2.94a1 1 0 0 0-.82-.69L24.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L20.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12 1 1 0 0 0 1-1.19l-.27-1.52 1.11-1.09a1 1 0 0 0 .27-1.04zM24.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.47.47 0 0 0-.46 0l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45l-1.29-1.29 1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29z" data-name="Layer 2" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">10+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Customer Satisfaction</p>
                    </div>
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 512 512">
                            <path d="M477.797 290.203c0 59.244-23.071 114.942-64.963 156.834S315.244 512 256 512s-114.942-23.071-156.834-64.963-64.963-97.59-64.963-156.834c0-39.621 10.579-78.512 30.595-112.468 19.419-32.944 47.178-60.48 80.276-79.63 7.646-4.427 17.437-1.814 21.861 5.836 4.426 7.648 1.813 17.437-5.836 21.861-53.882 31.175-88.951 87.036-94.189 148.4H84.6c8.837 0 16 7.163 16 16s-7.163 16-16 16H66.884C74.594 398.12 148.083 471.609 240 479.319v-17.717c0-8.837 7.163-16 16-16s16 7.163 16 16v17.717c91.917-7.71 165.406-81.199 173.116-173.116h-17.717c-8.837 0-16-7.163-16-16s7.163-16 16-16h17.69c-5.238-61.364-40.307-117.227-94.19-148.4-7.648-4.425-10.262-14.212-5.836-21.861 4.425-7.648 14.214-10.261 21.861-5.836 33.098 19.148 60.857 46.685 80.277 79.63 20.016 33.955 30.596 72.846 30.596 112.467zm-253.173-220.2 15.259-15.259-.258 71.899c-.031 8.837 7.106 16.025 15.942 16.058h.059c8.81 0 15.967-7.126 15.999-15.942l.259-72.248 15.492 15.492c3.124 3.124 7.219 4.687 11.313 4.687s8.189-1.563 11.313-4.687c6.248-6.248 6.248-16.379 0-22.627L267.313 4.687c-6.248-6.248-16.379-6.248-22.627 0l-42.689 42.689c-6.248 6.248-6.248 16.379 0 22.627s16.379 6.248 22.627 0zM272 174.358v64.628c16.74 5.24 29.977 18.478 35.218 35.217h50.493c8.837 0 16 7.163 16 16s-7.163 16-16 16h-50.493c-6.823 21.795-27.202 37.655-51.218 37.655-29.585 0-53.654-24.069-53.654-53.655 0-24.015 15.86-44.394 37.654-51.217v-64.628c0-8.837 7.163-16 16-16s16 7.163 16 16zm5.655 115.845c0-11.94-9.715-21.654-21.655-21.654s-21.654 9.714-21.654 21.654 9.714 21.655 21.654 21.655 21.655-9.714 21.655-21.655z" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">4+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Running Projects</p>
                    </div>
                </div>
            </div> */}
            {/* /////////////////////////////////////////////>>>>>>> End Company Rating <<<<<< //////////////////////////////////////////////////////////// */}


            {/* /////////////////////////////////////////////>>>>>>> Start Why Chose Us <<<<<< //////////////////////////////////////////////////////////// */}
            {/* <section className="  bg-cyan-800  pt-16 h-[500px]">
                <div className=" font-[sans-serif] ">
                    <div className="grid sm:grid-cols-3   items-center lg:p-12 p-6 gap-6 max-w-3xl min-h-[400px] mx-auto bg-green-100 rounded-lg">
                        <div className="sm:col-span-2  max-sm:order-1">
                            <h2 className="text-gray-800 text-3xl font-extrabold">Why Choose Us ???</h2>
                            <p className="text-gray-800 text-sm mt-4 leading-relaxed text-justify" >At ReXon Solution,
                                Our team utilizes cutting-edge technology. With a commitment to transparent communication,
                                timely delivery, Security and competitive pricing, we ensure that every project is executed with the
                                highest quality standards. Choose us for a reliable partner dedicated to helping you achieve
                                your goals with excellence.</p>

                            <div className="mt-12 flex items-end">
                                <div>
                                    <h4 className="text-gray-800 text-sm font-semibold">Engr. parvez Ahmed</h4>
                                    <p className="text-gray-800 text-xs mt-1">Managing Director, ReXson Solution</p>
                                </div>

                                <div className="space-x-5 ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 cursor-pointer fill-gray-400 rotate-180 inline" viewBox="0 0 512 512">
                                        <path d="M502.628 278.627 389.25 392.005c-6.249 6.249-14.438 9.373-22.628 9.373s-16.379-3.124-22.628-9.373c-12.496-12.497-12.496-32.758 0-45.255L402.745 288H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h370.745l-58.751-58.75c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l113.378 113.378c12.496 12.496 12.496 32.758 0 45.254z" data-original="#000000" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 cursor-pointer inline" viewBox="0 0 512 512">
                                        <path d="M502.628 278.627 389.25 392.005c-6.249 6.249-14.438 9.373-22.628 9.373s-16.379-3.124-22.628-9.373c-12.496-12.497-12.496-32.758 0-45.255L402.745 288H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h370.745l-58.751-58.75c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l113.378 113.378c12.496 12.496 12.496 32.758 0 45.254z" data-original="#000000" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="sm:ml-auto  sm:relative lg:left-24">
                            <img src='whyChoseUs4.jpeg' className="w-60 h-60 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <div className=" mx-auto   bg-cyan-800  font-[sans-serif]">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 max-md:max-w-lg mx-auto gap-12">
                    <div className="p-4 flex gap-6 bg-green-100  rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black  p-3 rounded-lg shrink-0" viewBox="0 0 32 32">
                            <path className="text-white" d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                            <path className="text-white" d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs Expand your reach with our global network.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg  bg-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 bg-black h-12  p-3 rounded-lg shrink-0" viewBox="0 0 682.667 682.667">
                            <defs >
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path className="text-white" d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                                <path className="text-white" d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                            </g>
                        </svg>
                        <div>
                            <h3 className="text-gray-800  text-xl font-semibold mb-3">Security</h3>
                            <p className="text-gray-600 text-sm">Your data is protected by the latest security measures.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg hover:shadow-md bg-green-100 hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12  h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 512.001 512.001">
                            <path className="text-white" d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Support</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs 24/7 customer support for all your inquiries.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg bg-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 24 24">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path className="text-white" d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                                <path className="text-white" d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                                <path className="text-white" d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
                            </g>
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
                            <p className="text-gray-600 text-sm">Experience blazing-fast performance with our product.</p>
                        </div>
                    </div>

                    <div className="p-4 flex bg-green-100 gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 504.69 504.69">
                            <path className="text-white" d="M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z" data-original="#000000" />
                            <path className="text-white" d="M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z" data-original="#000000" />
                            <path className="text-white" d="M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z" data-original="#000000" />
                            <path className="text-white" d="M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z" data-original="#000000" />
                            <path className="text-white" d="M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z" data-original="#000000" />
                            <path className="text-white" d="M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z" data-original="#000000" />
                            <path className="text-white" d="M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z" data-original="#000000" />
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Global Reach</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs Expand your reach with our global network.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg bg-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path className="text-white" d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="30" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path className="text-white" d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30" data-original="#000000" />
                            </g>
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Communication</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs Seamless communication for your team.</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* /////////////////////////////////////////////>>>>>>> End Why Choose us<<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start Our Team  <<<<<< //////////////////////////////////////////////////////////// */}
            <div className="font-[sans-serif] bg-black ">
                <div className="lg:max-w-6xl max-w-xl mx-auto pt-10 py-5">
                    <h2 className="text-white text-3xl  font-extrabold text-center">Meet Our Leadership Team</h2>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-6">

                        <div className="flex items-center max-sm:flex-col bg-gray-100 gap-2 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                            <img src="gm.jpg" className="lg:w-2/5 sm:h-60 object-auto" />

                            <div className="p-4">
                                <h4 className="text-gray-800 text-base font-bold">Suneel Kumar</h4>
                                <p className="text-gray-600 text-xs mt-1">Chief Executive Officer (CEO)</p>

                                <div className="mt-4">
                                    <p className="text-gray-600 text-sm leading-relaxed"> MahSun Solutions leads strategic initiatives, driving innovation.</p>
                                </div>

                                <div className="space-x-2 mt-4">
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                            <img src="mk.jpg" className="lg:w-2/5 sm:h-60 object-cover" />

                            <div className="p-4">
                                <h4 className="text-gray-800 text-base font-bold">Mukesh Kumar</h4>
                                <p className="text-gray-500 text-xs mt-1">Director of Software Development</p>

                                <div className="mt-4">
                                    <p className="text-gray-600 text-sm leading-relaxed">He guides software engineering teams, ensuring
                                        the successful delivery of high-quality software products.</p>
                                </div>

                                <div className="space-x-2 mt-4">
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                            <img src="kapeel.jpg" className="w-full sm:h-60 object-cover" />

                            <div className="p-4">
                                <h4 className="text-gray-800 text-base font-bold">Kapeel Kumar</h4>
                                <p className="text-gray-500 text-xs mt-1">Director of Technology</p>

                                <div className="mt-4">
                                    <p className="text-gray-600 text-sm leading-relaxed">Oversees an organization is technological initiatives, ensuring
                                        alignment with business goals and driving innovation.</p>
                                </div>

                                <div className="space-x-2 mt-4">
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                            <img src="shahzaib.jpg" className="w-full sm:h-60 object-cover" />

                            <div className="p-4">
                                <h4 className="text-gray-800 text-base font-bold">Shahzaib Ali</h4>
                                <p className="text-gray-500 text-xs mt-1">Director of HR</p>

                                <div className="mt-4">
                                    <p className="text-gray-600 text-sm leading-relaxed">Oversees the strategic planning and
                                        execution of human resources functions, with company goals while managing
                                        talent acquisition, .</p>
                                </div>

                                <div className="space-x-2 mt-4">
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////////>>>>>>> End  Our Team  <<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start Contact Us <<<<<< //////////////////////////////////////////////////////////// */}
            <div className="font-[sans-serif]  mx-auto relative bg-gray-300 rounded-lg py-6">
                <div className="grid lg:grid-cols-3 items-center">
                    <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
                        <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-blue-600" viewBox="0 0 512 512">
                                <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000"></path>
                                <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000"></path>
                            </svg>
                            <h4 className="text-gray-800 text-base font-bold mt-4">Visit office</h4>
                            <p className="text-sm text-gray-600 mt-2"> First Floor Jameel Market, Umerkot, Pakistan</p>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-blue-600" viewBox="0 0 473.806 473.806">
                                <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" data-original="#000000"></path>
                            </svg>
                            <h4 className="text-gray-800 text-base font-bold mt-4">Call us</h4>
                            <p className="text-sm text-gray-600 mt-2">+92 336 326 8833</p>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-blue-600" viewBox="0 0 32 32">
                                <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#000000"></path>
                                <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#000000"></path>
                            </svg>
                            <h4 className="text-gray-800 text-base font-bold mt-4">Chat to us</h4>
                            <p className="text-sm text-gray-600 mt-2">mahsunteam@gmail.com</p>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-blue-600" viewBox="0 0 100 100">
                                <path d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z" data-original="#000000"></path>
                            </svg>
                            <h4 className="text-gray-800 text-base font-bold mt-4">Fax</h4>
                            <p className="text-sm text-gray-600 mt-2">+1-548-2588</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-blue-400 rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
                        <h2 className="text-3xl text-white text-center font-bold mb-6">Contact us</h2>
                        <form>
                            <div className="max-w-md mx-auto space-y-3">
                                <input type='text' placeholder='Name'
                                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
                                <input type='email' placeholder='Email'
                                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
                                <input type='email' placeholder='Phone No.'
                                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />

                                <textarea placeholder='Message' rows={8}
                                    className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"></textarea>


                                <button type='button'
                                    className="text-gray-800 w-full relative bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg text-sm px-6 py-3 !mt-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                        <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                    </svg>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////////>>>>>>> End Contact Us <<<<<< //////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////>>>>>>> Start Footer <<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> End Footer <<<<<< //////////////////////////////////////////////////////////// */}






            <style jsx>{`
  .word {
    opacity: 0;
    animation: fadeIn 1s forwards;
  }
  .word1 {
    animation-delay: 0s;
  }
  .word2 {
    animation-delay: 1s;
  }
  .word3 {
    animation-delay: 2s;
  }
  .word4 {
    animation-delay: 3s;
  }
  .word5 {
    animation-delay: 4s;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`}</style>

        </>
    );
}

