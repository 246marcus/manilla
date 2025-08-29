import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Top Benefits of Using Crypto for Everyday Shopping",
    category: "Cryptocurrency",
    date: "March 2025",
    name: "Jacob Jone",
  },
  {
    id: 2,
    title: "Top Benefits of Using Crypto for Everyday Shopping",
    category: "Cryptocurrency",
    date: "March 2025",
    name: "Jacob Jone",
  },
  {
    id: 3,
    title: "Top Benefits of Using Crypto for Everyday Shopping",
    category: "Cryptocurrency",
    date: "March 2025",
    name: "Jacob Jone",
  },
];

export default function LatestBlogs() {
  return (
    <div className="bg-white rounded-xl shadow py-4">
      <h2 className="font-semibold  text-black/80 mb-1 px-4">Latest Blogs</h2>
      <p className="text-black/60 text-xs mb-2 px-4">
        Review/Edit your most recent blogs
      </p>
      <p className="text-sm text-black/80 font-semibold bg-black/15 mb-4 py-2 px-4">
        Here are your latest blogs
      </p>
      <div className="space-y-2 ">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex space-x-3 p-4 py-2 pe-2 border rounded-md border-black/20">
            <div className="flex-5/12 flex p-4 px-1">
              {" "}
              <Image
                src="/icons/dashblog.png"
                alt="Blog"
                width={100}
                height={80}
                className="rounded-md flex-1  h-auto"
              />
            </div>
            <div className="text-black/60 space-y-1 flex-7/12">
              <p className="text-xs ">{blog.category}</p>
              <p className="text-xs leading-4 text-black/80 font-semibold">
                {blog.title}
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/dashblog.png"
                  alt="Blog"
                  width={40}
                  height={40}
                  className="rounded-full w-7 h-7 "
                />
                <div className="">
                  <p className="text-sm font-semibold text-black/90 ">
                    {blog.name}
                  </p>
                  <p className="text-xs ">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
