const _ = require('lodash')

const dummy = (blogs) => {
   return 1
}

const totalLikes = (blogs) => {
   const likesArr = blogs.map((blog) => blog.likes)
   const reducer = (sum, item) => {
      return sum + item
   }
   return likesArr.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
   if (blogs.length !== 0) {
      const max = blogs.reduce((prev, curr) => {
         return prev.likes > curr.likes ? prev : curr
      })
      return max
   } else {
      return 'no favorite'
   }
}

const mostBlogs = (blogs) => {
   const authorList = blogs.map((blog) => blog.author)

   function mostActiveAuthor(arr) {
      return arr
         .slice()
         .sort((a, b) => arr.filter((v) => v === a).length - arr.filter((v) => v === b).length)
         .pop()
   }

   const author = mostActiveAuthor(authorList)

   const blogsOfAuthor = authorList.filter((element) => element === author)

   const amount = blogsOfAuthor.length

   return {
      author,
      amount,
   }
}

const mostLikes = (blogs) => {
   const reducedList = blogs.map((blog) => {
      return { author: blog.author, likes: blog.likes }
   })

   var temp = {}
   var obj = null
   for (var i = 0; i < reducedList.length; i++) {
      obj = reducedList[i]

      if (!temp[obj.author]) {
         temp[obj.author] = obj
      } else {
         temp[obj.author].likes += obj.likes
      }
   }
   var result = []
   for (var prop in temp) result.push(temp[prop])

   const sortResult = _.orderBy(result, ['likes'], ['desc'])

   return sortResult[0]
}

module.exports = {
   dummy,
   totalLikes,
   favoriteBlog,
   mostBlogs,
   mostLikes,
}
