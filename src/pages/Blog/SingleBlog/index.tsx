import { useEffect, useState } from "react"
import "./index.css"
import { PostService } from "../../../services/PostService";
import { Comment, CommentReply, Post } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { CommentService } from "../../../services/CommentService";
import { ReplyCommentService } from "../../../services/ReplyCommentService";
export function Blog() {
    const [post, setPost] = useState<Post>();
    const [listComment, setListComment] = useState<Comment[]>();

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const postData = await PostService.getPostById(id);
                    setPost(postData);

                    const commentsData = await CommentService.getAllCommentByPostId(id);
                    setListComment(commentsData);

                    const updatedComments = await Promise.all(commentsData.map(async (comment) => {
                        const replies = await ReplyCommentService.getAllReplyComment(comment.id.toString());
                        return { ...comment, commentReply: replies };
                    }));

                    setListComment(updatedComments);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);
    
    return (
        <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="no-sidebar.html">No Sidebar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="single-post.html">Single Post</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="components.html" className="ml-4 btn btn-dark mt-1 btn-sm">Components</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="page-header page-header-mini">
                <h1 className="title">{post?.title}</h1>
                <ol className="breadcrumb pb-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Voluptates Corporis Placeat</li>
                </ol>
            </header>

            <section className="container">
                <div className="page-container">
                    <div className="page-content">
                        <div className="card">
                            <div className="card-header pt-0">
                                <h3 className="card-title mb-4">{post?.title}</h3>
                                <div className="blog-media mb-4">
                                    <img src={post?.image} alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#Salupt</a>
                                </div>
                                <small className="small text-muted">
                                    <a href="#" className="text-muted">BY Admin</a>
                                    <span className="px-2">·</span>
                                    <span>January 24 2019</span>
                                    <span className="px-2">·</span>
                                    <a href="#" className="text-muted">32 Comments</a>
                                </small>
                            </div>
                            <div className="card-body border-top">
                                <p className="my-3">{post?.content}</p>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta mollitia assumenda quasi itaque, et doloremque voluptatem, praesentium cumque aperiam. Nobis aut expedita recusandae aliquam sapiente perferendis, perspiciatis quasi, vel, fugit eligendi aliquid. Minus, odit repellendus eligendi. Esse illo assumenda dolore sed.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, obcaecati veritatis enim earum neque, eveniet quasi commodi alias, adipisci magnam, ab praesentium dolore culpa!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eius nam pariatur necessitatibus, enim, consectetur, esse sint qui sed nisi unde vero! Ratione dolore quod perferendis, non ad et, tempora quisquam, iusto nesciunt rem ut excepturi eligendi nam? Repellendus itaque hic fuga ducimus asperiores dolorem dolores, aliquid quaerat temporibus ratione doloribus eius nihil expedita adipisci in quis modi unde repudiandae iusto reiciendis ipsa deleniti accusamus maxime, dolor animi? Animi ut quia natus in aliquid error quaerat, adipisci quisquam labore ipsa sapiente illo quidem, blanditiis doloribus voluptas et nam, omnis? Inventore minima ipsa non porro fugit, reprehenderit voluptates officiis.</p> */}
                            </div>

                            <div className="card-footer">
                                <h6 className="mt-5 mb-3 text-center"><a href="#" className="text-dark">Comments</a></h6>
                                <hr />
                                {listComment?.map(comment => (
                                    <div className="media mt-5">
                                        <img src={comment.user.avatar} className="mr-3 thumb-sm rounded-circle" alt="..." />
                                        <div className="media-body">
                                            <h6 className="mt-0">{comment.user.displayName}</h6>
                                            <p>{comment.content}</p>
                                            <a href="#" className="text-dark small font-weight-bold"><i className="ti-back-right"></i> Replay</a>
                                            {comment.commentReply?.map(reply => (
                                            <div className="media mt-5">
                                                <a className="mr-3" href="#">
                                                    <img src={reply.user.avatar} className="thumb-sm rounded-circle" alt="..." />
                                                </a>
                                                <div className="media-body align-items-center">
                                                    <h6 className="mt-0">{reply.user.displayName}</h6>
                                                    <p>{reply.content}</p>
                                                    <a href="#" className="text-dark small font-weight-bold"><i className="ti-back-right"></i> Replay</a>

                                                </div>
                                                
                                            </div>
                                             ))}
                                        </div>
                                    </div>
                                ))}

                                <h6 className="mt-5 mb-3 text-center"><a href="#" className="text-dark">Write Your Comment</a></h6>
                                <hr />
                                <form>
                                    <div className="form-row">
                                        <div className="col-12 form-group">
                                            <textarea name="" id="" cols={30} rows={10} className="form-control" placeholder="Enter Your Comment Here"></textarea>
                                        </div>
                                        
                                        <div className="form-group col-12">
                                            <button className="btn btn-primary btn-block">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <h6 className="mt-5 text-center">Related Posts</h6>
                        <hr />
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src="src/assets/imgs/blog-2.jpg" alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#Placeat</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h6 className="card-title mb-2"><a href="#" className="text-dark">{post?.title}</a></h6>
                                        <small className="small text-muted">January 20 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">34 Comments</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src="src/assets/imgs/blog-3.jpg" alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#dolores</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h6 className="card-title mb-2"><a href="#" className="text-dark">Dolorum Dolores Itaque</a></h6>
                                        <small className="small text-muted">January 19 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">64 Comments</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-none d-lg-block">
                                <div className="card mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src="src/assets/imgs/blog-4.jpg" alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#amet</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h6 className="card-title mb-2">Quisquam Dignissimos</h6>
                                        <small className="small text-muted">January 17 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">93 Comments</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-sidebar">
                        <h6 className=" ">Tags</h6>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#iusto</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#quibusdam</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#officia</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#animi</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#mollitia</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#quod</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#ipsa at</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#dolor</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#incidunt</a>
                        <a href="javascript:void(0)" className="badge badge-primary m-1">#possimus</a>

                        <div className="ad-card d-flex text-center align-items-center justify-content-center mt-4">
                            <span className="font-weight-bold">ADS</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="instagram-wrapper mt-5">
                <div className="ig-id">
                    <a href="javascript:void(0)">Follow @joe_mitchell On Instagram</a>
                </div>
                <a href="javascript:void(0)" className="insta-item">
                    <img src="src/assets/imgs/insta-1.jpg" alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src="src/assets/imgs/insta-2.jpg" alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src="src/assets/imgs/insta-3.jpg" alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src="src/assets/imgs/insta-4.jpg" alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src="src/assets/imgs/insta-5.jpg" alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src="src/assets/imgs/insta-6.jpg" alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
            </div>

            <footer className="page-footer">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                            <img src="src/assets/imgs/logo.svg" alt="" className="logo" />
                        </div>
                        <div className="col-md-9 text-center text-md-right">
                            <div className="socials">
                                <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-facebook pr-1"></i> 123,345</a>
                                <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-twitter pr-1"></i> 321,534</a>
                                <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-pinterest-alt pr-1"></i> 543,312</a>
                                <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-instagram pr-1"></i> 123,023</a>
                                <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-youtube pr-1"></i> 231,043</a>
                            </div>
                        </div>
                    </div>
                    <p className="border-top mb-0 mt-4 pt-3 small">&copy; <script>document.write(new Date().getFullYear())</script>, JoeBlog Created By <a href="https://www.devcrud.com" className="text-muted font-weight-bold" target="_blank">DevCrud.</a>  All rights reserved </p>
                </div>
            </footer>



        </body>
    )
}