const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];



$(document).ready(()=> {



  const createTweetElement = (tweet) => {
    let $tweet = `
    <article>
            <header>
              <div id="user-name">
                <img src="${tweet.user.avatars}" alt="profile picture"/>
                <p>${tweet.user.name}</p>
              </div>
              
              <p id="user-handle">${tweet.user.handle}</p>
            </header>
            
            <p>${tweet.content.text}</p>
            <footer>
              <p>${tweet.created_at}</p>
              <div class="footer-icons">
                <i class="fa-solid fa-flag"></i>
                <i class="fa-solid fa-retweet"></i>
                <i class="fa-solid fa-heart"></i> 
              </div>
            </footer>
          </article>
  `;

    return $tweet;
  };

  const renderTweets = function(tweets) {
    const allTweets = $(".all-tweets");
    $.each(tweets, (post) => {
      allTweets.append(createTweetElement(tweets[post]));
    });

    return allTweets;

  };

  renderTweets(data);
});
