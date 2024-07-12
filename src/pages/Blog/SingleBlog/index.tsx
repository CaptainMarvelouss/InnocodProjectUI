
import { useEffect, useState } from 'react';
import './index.css'
import { PostService } from '../../../services/PostService';
import { useSearchParams } from 'react-router-dom';
import { Post } from '../../../interfaces';
import { SortEnum } from '../../../common/enum';
export function SingleBlog() {

    const [listPost, setListPost] = useState<Post[]>();

    const [post, setPost] = useState<Post>();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    useEffect(() => {
        const handleFetchPost = async () => {
            try {
                if (id != null) {
                    const data = await PostService.getPostById(id);
                    setPost(data);
                }

            } catch (err) {
                console.log(err)
            }
        }
        handleFetchPost();
    }, []);
    function formatDate(inputDate: string) {
        // Parse the input date string into a Date object
        const date = new Date(inputDate);

        // Array of month names to map numeric month to abbreviation
        const monthNames = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        // Get components of the date
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        // Format the date string
        const formattedDate = `${month}. ${day}, ${year}`;

        return formattedDate;
    }
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
        <div className="container-single-blog">
            <div className='post-content'>
                <h1>{post?.title}</h1>
                <p className='authors'>By {post?.user?.displayName} on {formatDate(post?.date || "")}</p>
                <div className='img-center'>
                    <img src={post?.image}></img>

                </div>
                <p className='title-img'>{post?.title}</p>

                <p>{post?.content}</p>
            </div>


            <div className="card">
                <div className="card-overlay"></div>
                <div className="card-inner">#hashTags</div>
                <ul className="tag">
                    <li className="tag__name">Electric Cars</li>
                    <li className="tag__name">Digital Transform</li>
                    <li className="tag__name">Semiconductor</li>
                    <li className="tag__name">Environment</li>
                </ul>
                <div className='latest'>
                
                {listPost && listPost.map(post => (
                    <div className="card">
                    <img src="https://fptdanang.pro/wp-content/uploads/2022/08/FPT-Danang-_-FComplex.jpg" alt="" className='latest-img'/>
                    <div className="card__content">
                        <p className="card__title">{post.title}</p>
                        <p className="card__description">
                            <img src={post.image} alt="" />
                        </p>
                    </div>
                </div>))}
              
                </div>
                

            </div>

        </div>
    );


}