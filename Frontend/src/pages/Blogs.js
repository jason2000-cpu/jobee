import NavBar from "../components/NavBar";
import BlogCard from "../components/UI/BlogCard"
import Footer from "../components/footer";
import { posts } from "../utils/BlogPosts"

function Blogs() {
    return (
        <div>
            <NavBar />
            <div className=" my-10 px-10">
				<div className="flex flex-col items-center">
					<span className="text-sm">OUR BlOGS</span>
					<h1 className="text-3xl font-bold">Find All Our Blogs Here</h1>
					<p className="p-4 md:w-1/3 text-xs text-center">
						our blogs are written from very research research
						and well known writers writers so that  we can provide
						you the best blogs and articles articles for you to read
						them all along
					</p>
				</div>
                <div className="md:grid grid-cols-4 gap-4">

                    {
                        posts.map(post => <BlogCard post={post} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs;