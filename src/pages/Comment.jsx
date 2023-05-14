import React from 'react';
import Layout from "./../components/Layout/Layout";
import {Link } from 'react-router-dom';
const Comment = () => {
    return (
        <Layout>
        <div>
        <button>  <a href="https://forms.gle/ebGd7zfiFjFokkkb9"> Feedback</a></button>
        </div>
      {/* <div>
       <Link to= "https://forms.gle/ebGd7zfiFjFokkkb9"  >Click to open HereWeCode (new tab)</Link>
     {/* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" /> */}
      {/* </div>  */}
     </Layout>
    );
};

export default Comment;