var posts=["2025/02/13/这是我的第二篇博文置顶/","2025/02/13/这是一篇新的博文/","2025/01/11/肥猪赛大象/","2025/01/11/我的第一篇文章/","2025/01/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };