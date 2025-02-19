var posts=["2025/02/18/桌面应用开发框架选择/","2025/02/14/npm-源设置指南：国内镜像与科学上网/","2025/02/14/Cursor：AI辅助编程的新星/","2025/02/14/AI辅助编程/","2025/02/14/如何用Ollama部署本地大模型/","2025/02/14/RUST引领前端工具链革新/","2025/02/14/前端包管理工具对比/","2025/02/14/前端打包工具发展史/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };