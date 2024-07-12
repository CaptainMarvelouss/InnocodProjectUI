
import { useEffect, useState } from 'react';
import './index.css'
import { PostService } from '../../../services/PostService';
import { SortEnum } from '../../../common/enum';
import { Post } from '../../../interfaces';
export function AllBlog() {

    const [listPost, setListPost] = useState<Post[]>();
    useEffect(() => {
        const handleFetchPost = async () => {
            try {
                const data = await PostService.sortAllPost(SortEnum.TimeDescending);
                setListPost(data);
            } catch (err) {
                console.log(err)
            }
        }
        handleFetchPost();
    }, []);

    

    return (
        <div className="container-all-blog">
            <h1>All blog</h1>
            <div className='search-container-blog'>


                <form className="form formSearch">
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" placeholder="Type your text" required type="text" />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
                <div className='search-button'>
                    <button > Search
                    </button>
                </div>
            </div>
            <div className='blog-container'>
                {listPost && listPost.map(post => (

                    <div className="card sweeperCard o-hidden">
                        <div className="containers">
                            <div className="icon">
                                <svg
                                    width="28"
                                    height="29"
                                    viewBox="0 0 28 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.7222 9.04435V6.71102C23.7222 5.42235 22.6775 4.37769 21.3888 4.37769L6.61106 4.37769C5.32239 4.37769 4.27773 5.42235 4.27773 6.71102V9.04435C4.27773 10.333 5.32239 11.3777 6.61106 11.3777H21.3888C22.6775 11.3777 23.7222 10.333 23.7222 9.04435Z"
                                        stroke="#23C55E"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M23.7222 21.4888V19.1555C23.7222 17.8668 22.6775 16.8221 21.3888 16.8221H15.9444C14.6557 16.8221 13.6111 17.8668 13.6111 19.1555V21.4888C13.6111 22.7775 14.6557 23.8221 15.9444 23.8221H21.3888C22.6775 23.8221 23.7222 22.7775 23.7222 21.4888Z"
                                        stroke="#23C55E"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="title my-3">{post.title}</div>
                            <div className="subtitle">
                                {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
                            </div>
                            <div className="linkMore mt-3">
                                <a href={'/blog-details?id='+post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Learn More
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 19"
                                    height="19"
                                    width="18"
                                >
                                    <path
                                        stroke="#072713"
                                        fill="#072713"
                                        d="M3 9.09985C3 9.23792 2.88807 9.34985 2.75 9.34985C2.61193 9.34985 2.5 9.23792 2.5 9.09985C2.5 8.96178 2.61193 8.84985 2.75 8.84985C2.88807 8.84985 3 8.96178 3 9.09985Z"
                                    ></path>
                                    <path
                                        stroke="#072713"
                                        fill="#072713"
                                        d="M9.25 2.84985C9.25 2.98792 9.13807 3.09985 9 3.09985C8.86193 3.09985 8.75 2.98792 8.75 2.84985C8.75 2.71178 8.86193 2.59985 9 2.59985C9.13807 2.59985 9.25 2.71178 9.25 2.84985Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M2.75 3.59985C3.16421 3.59985 3.5 3.26407 3.5 2.84985C3.5 2.43564 3.16421 2.09985 2.75 2.09985C2.33579 2.09985 2 2.43564 2 2.84985C2 3.26407 2.33579 3.59985 2.75 3.59985Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M2.75 6.72485C3.16421 6.72485 3.5 6.38907 3.5 5.97485C3.5 5.56064 3.16421 5.22485 2.75 5.22485C2.33579 5.22485 2 5.56064 2 5.97485C2 6.38907 2.33579 6.72485 2.75 6.72485Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M2.75 12.9749C3.16421 12.9749 3.5 12.6391 3.5 12.2249C3.5 11.8106 3.16421 11.4749 2.75 11.4749C2.33579 11.4749 2 11.8106 2 12.2249C2 12.6391 2.33579 12.9749 2.75 12.9749Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M2.75 16.0999C3.16421 16.0999 3.5 15.7641 3.5 15.3499C3.5 14.9356 3.16421 14.5999 2.75 14.5999C2.33579 14.5999 2 14.9356 2 15.3499C2 15.7641 2.33579 16.0999 2.75 16.0999Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M15.25 3.59985C15.6642 3.59985 16 3.26407 16 2.84985C16 2.43564 15.6642 2.09985 15.25 2.09985C14.8358 2.09985 14.5 2.43564 14.5 2.84985C14.5 3.26407 14.8358 3.59985 15.25 3.59985Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M15.25 6.72485C15.6642 6.72485 16 6.38907 16 5.97485C16 5.56064 15.6642 5.22485 15.25 5.22485C14.8358 5.22485 14.5 5.56064 14.5 5.97485C14.5 6.38907 14.8358 6.72485 15.25 6.72485Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M12.125 3.59985C12.5392 3.59985 12.875 3.26407 12.875 2.84985C12.875 2.43564 12.5392 2.09985 12.125 2.09985C11.7108 2.09985 11.375 2.43564 11.375 2.84985C11.375 3.26407 11.7108 3.59985 12.125 3.59985Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M5.875 3.59985C6.28921 3.59985 6.625 3.26407 6.625 2.84985C6.625 2.43564 6.28921 2.09985 5.875 2.09985C5.46079 2.09985 5.125 2.43564 5.125 2.84985C5.125 3.26407 5.46079 3.59985 5.875 3.59985Z"
                                    ></path>
                                    <path
                                        fill="#072713"
                                        d="M5.875 16.0999C6.28921 16.0999 6.625 15.7641 6.625 15.3499C6.625 14.9356 6.28921 14.5999 5.875 14.5999C5.46079 14.5999 5.125 14.9356 5.125 15.3499C5.125 15.7641 5.46079 16.0999 5.875 16.0999Z"
                                    ></path>
                                    <path
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        stroke="#072713"
                                        d="M9.25 15.3499V9.34985H15.25"
                                    ></path>
                                    <path
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        stroke="#072713"
                                        d="M9.25 9.34985L15.25 15.3499"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );


}