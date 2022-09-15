$(document).ready(() => {


  // // Implement escape function to prevent XSS issues
  const escape = (str) => {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Builds the tweet template and fills in the fields using the database

  const createTweetElement = (tweet) => {
    let $tweet = `
    <article class="new-tweet">
            <header>
              <div id="user-name">
                <img src="${tweet.user.avatars}" alt="profile picture"/>
                <p id="user">${tweet.user.name}</p>
              </div>
              
              <p id="user-handle">${tweet.user.handle}</p>
            </header>
            
            <p>${escape(tweet.content.text)}</p>
            <footer>
              <p>${timeago.format(tweet.created_at)}</p>
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

  // Renders tweet list, populating it by looping through the database
  const renderTweets = function (tweets) {
    const $allTweets = $(".all-tweets");
    $allTweets.empty();
    $.each(tweets, (post) => {
      $allTweets.prepend(createTweetElement(tweets[post]));
    });
  };


  //Setting Listeners for form submission
  $(".submit-tweet").submit(function (event) {
    event.preventDefault();

    let tweetInner = event.target[0].value;
    if (!tweetInner) {
      $(".error").text("Tweet empty, please share your thoughts!");
      $(".error").slideDown("slow").delay(2500).slideUp("slow");
      return;
    }

    if (tweetInner.length > 140) {
      $(".error").text("Tweet is too long. Max characters is 140.");
      $(".error").slideDown("slow").delay(2500).slideUp("slow");
      return;
    }

    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
    }).then(function () {
      loadTweets();
      document.querySelector(".submit-tweet").reset();
    });
  });


  // Implement loadTweets function.
  // Use AJAX to fetch the tweets from the database
  const loadTweets = () => {
    $.ajax({
      method: "GET",
      url: "/tweets"
    }).then(function (tweet) {
      renderTweets(tweet);
    });
  };
  loadTweets();


  // Implement onclick to show/hide the form when clicking the nav arrows
  $(".nav-arrows").on("click", function () {
    $(".tweet-form").slideToggle("slow", function () {
    });
    $("tweet-form").focus();
  });


  // Implement button to navigate back to the top of the page.
  let $homeBtn = $("#home-btn")[0];
  $(window).scroll(function () {
    if ($('body').scrollTop > 150 || document.documentElement.scrollTop > 150) {
      $($homeBtn).css("display", "block");
    } else {
      $($homeBtn).css("display", "none");
    }
  });

  $("#home-btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});
