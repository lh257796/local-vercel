import React from "react";
import { useSelector } from "react-redux";
import axios from 'axios'

const News = () => {
    const {news}= useSelector(state => state)

    console.log('news from store :',news);

    // const attempt = async() => {
    //     const res = await axios.get('https://www.reddit.com/r/science/hot.json?f=flair_name%3A%22Health%22')
    //     const posts = res.data.data.children;
    //     console.log(ea[0].data.title,ea[0].data.url, ea[0].data.thumbnail, ea[0].data.permalink);
    // }

    // attempt();

    return (
        <div>
            <h3>Regularly Updated Zero-Bias 100% Legit Health News (sponsored by Reddit APIs)</h3>
            <h4><em>Taken from /r/science sorted by Health flair</em></h4>
            <ul>
                {
                    news.map(post => {
                        return (
                            <li key = {post.id}>

                                <strong><a href ={post.data.url}>{post.data.title}</a></strong> {<br/>}{<br/>}
                                <img className='.img' src={post.data.thumbnail} alt=' (Oops! Could not find thumbnail)'></img> {<br/>}
                                <em><small> Sourced from: {post.data.domain}</small></em> {<br/>}
                                <small>Upvotes: {post.data.score}</small> {<br/>}
                                <small>Comments: {post.data.num_comments}</small> {<br/>}
                                <small><em>permalink: {post.data.permalink}</em></small>
                            {<hr/>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default News
