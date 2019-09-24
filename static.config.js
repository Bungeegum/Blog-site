import path from 'path'
import {request} from 'graphql-request'

const GRAPHCMS_ENDPOINT='https://api-uswest.graphcms.com/v1/ck0x8dxa13vmf01hd5k7fhq43/master';
const query = `
{
  posts{
    title
    image{
      handle
    }
    date
    content
    tag
    author{
      id
      name
    }
    id
  }
  authors{
    id
    name
    avatar{
      handle
    }
    bibilography
  }
}`


export default {
  getSiteData: ()=>({
    title:"The blog",
  }),
  getRoutes: async () => {
    //destructure data into posts and authors
    const {posts,authors}= await request(GRAPHCMS_ENDPOINT,query)

    return [
      {
        path: '/',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/about',
        template:'src/pages/about',
        getData:()=>({
          authors
        })
      }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
