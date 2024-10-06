export default function(){
    return(
        <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
                <img src="https://www.svgrepo.com/show/447858/youtube-play.svg" alt="logo" className="h-16 w-15"/>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">Youtube E-com</span>
            </a>
            <div className="mt-6 lg:max-w-xl">
                <p className="text-sm text-gray-800">
                We are a small business dedicated to helping clients enhance their digital presence through beautifully designed thumbnails and high-quality stock videos. Our creative team works closely with you to understand your vision and deliver customized visuals that captivate and engage your audience.
                    </p>
            </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Popular Courses</p>
            <a href="#">Thumbnail Designing</a>
            <a href="#">Podcast Making</a>
            <a href="#">Video Search Optimization</a>
            {/* <p className="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a> */}
        </div>

        <div>
            <p className="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
            <div className="flex items-center gap-1 px-2">
                <a href="#" className="w-full min-w-xl">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="Playstore Button"
                        className="h-10"/>
                </a>
                <a className="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube Button"
                        className="h-12"/>
                </a>
            </div>
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">youtubeEcom@company.com</a>
            </div>
        </div>

    </div>

    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">&copy;Copyright 2024 Company. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </a>
            </li>
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </a>
            </li>
        </ul>
    </div>

</footer>
    )
}