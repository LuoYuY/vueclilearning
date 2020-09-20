import showBlogs from "./Components/showBlogs";
import addBlog from "./Components/addBlog";
import singleBlog from "./Components/singleBlog";

export default [
  { path:'/',component:showBlogs }, //a route if goto '/',show 'showblogs'
  { path:'/add',component:addBlog },
  { path:'/blog/:id',component:singleBlog}
]
