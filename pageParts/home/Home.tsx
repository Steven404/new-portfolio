const Home = () => {
    return (
        <div className="flex flex-col items-center h-[92vh] justify-center">
            <div className="flex flex-col items-center border-solid border-2 border-black py-16 px-20 border-r-0 border-b-0 max-w-5xl">
                <span className="text-gray-800 font-medium text-4xl">Welcome</span>
                <div className="flex flex-col mt-6">
                    <span className="description-text">Here you can find information about me, my projects and my previous work expirience.</span>
                    <span className="description-text">If you are interested in learning information about me you can either download my resume by pressing the <span className="font-semibold">Download my CV</span> button bellow or you can browse this website.</span>
                    <span className="description-text">In this website you can find the following <span className="font-semibold">information</span>:</span>
                    <ul className="list-disc list-inside mt-2">
                        <li className="description-text"><span className="font-semibold">About Me</span><p> In this section you can find general information about who I am and a summary of my knowledge related<br/> to programming.</p></li>
                        <li className="description-text"><span className="font-semibold">Work Experience</span><p>Here you can get informed about my work expirience.</p></li>
                        <li className="description-text"><span className="font-semibold">Projects</span><p>This is where you can find the projects I've worked on in the past (including this website nextjs project).</p></li>
                        <li className="description-text"><span className="font-semibold">Contact</span><p>If you want to get in touch with me here you can find my email, my personal phone number and my linked in profile.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;