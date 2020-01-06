import React from "react";
import {Link} from "gatsby";
import { kebabCase } from 'lodash';

function RightSection({
    PostContent,
    content,
    description,
    tags,
    title,
}){
    return <div id="blog_content" className="bg-white w-full mb-20">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <p>{description}</p>
        <PostContent content={content} />
        {tags && tags.length ? (
          <div className="flex mt-10 items-center">
            <h4 className="text-black font-bold">Tags:</h4>
            <ul className="flex">
              {tags.map(tag => (
                <li className="list-none flex-shrink-0 m-1 cursor-pointer flex rounded bg-gray-200 text-black capitalize px-2 py-1 text-xs mr-3" key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  </div>
}

export default React.memo(RightSection);