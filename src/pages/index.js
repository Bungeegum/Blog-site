import React from 'react'
import {withRouteData} from 'react-static'
import {Link} from '@reach/router'

function getFormattedDate(date) {
  if (date){
    var aDate= new Date(date);
    var year = aDate.getFullYear();

    var month = (1 + aDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = aDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
  }
  else
  return null
}

export default withRouteData(
  ({posts})=>(
    
    <div className="container">
    {posts.reverse().map(post=>(
      <Link key={post.id} to={`/post/${post.id}`} className="card">
        <div style={{paddingRight:'1em'}}>
          <img 
            alt={post.title}

            className="card-img"

            src={`https://media.graphcms.com/resize=w:170,h:150,fit:crop/${
            post.image.handle
            }`}
          
          />
        </div>
        <div>
          <h3 style={{margin:0}}>{post.title}</h3>
         <div className="card-details">
          <p>
              {post.author.name}
          </p>
          <p>
            {getFormattedDate(post.date)}
          </p>
         </div>
          
         
          {post.tag.map(tag=>(
            <span className="card-tag" key={tag}>{tag}</span>
          ))}
        </div>
      
      </Link>
    ))}
    
    </div>
  )
)
