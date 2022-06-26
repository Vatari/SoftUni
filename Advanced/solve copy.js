function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
      return `Post: ${this.title}\nTitle: ${this.content}`;
    }
  }
  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
      this.rating = likes - dislikes
    }
    addComment(comment) {
      this.comments.push(comment);
    }
    toString() {
      return `Post: ${this.title}\nContent: ${this.content}\n${this.rating}\nComments: \n * ${this.comments.join('\n * ')}`
    }
  }
  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content)
      this.views = views
    }
    view() {
      this.views++
    }
    

  }
  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solve();
let post = new classes.Post("Post", "Content");
//console.log(post.toString());
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());


/* const classes = solution();
const junior = new classes.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary(); */
