import { PropTypes } from "prop-types";
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const{title,cover,author_img,reading_time,author,posted_date,hashtags}= blog
    return (
        <div>
            <img className="w-full  mb-8" src= {cover} alt="Cover picture of the title ${title} " />
            <div className="flex justify-between">
                <div className="flex mb-6">
                <img className="w-14" src={author_img} alt="" />
                <div className="ml-6">
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className="text-xs">
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className="ml-2 text-xs text-red-600"> 
                    <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className="mb-4">
                {
                    hashtags.map((hash,idx)=><span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequred
}

export default Blog;