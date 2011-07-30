// FIXME: fixture data is GIGANTIC multi-line string. set up simple server to load fixtures
// via ajax (http://bit.ly/pGxr94) or set up jasmine-node to run it on the command line and
// just load the file like a normal person

describe("twitter antispam", function () {
  afterEach(function () {
    $("#fixture").remove();
  });
  beforeEach(function () {
    $("#fixture").remove();
    $("body").append('\
<div id="fixture">\
                                                                                                   \
<!-- real data copied from my twitter stream. changed indentation, content, and of course the      \
     extent. real twitter stream obviously included many tweets, this only includes two.           \
     the first is an example of the type of tweet I\'m eliminating, the other is an example        \
     of a real tweet, from a real person, which I want to see. to be perfect this should           \
     really use a real spam tweet, instead I just pretend to be spamming myself, but whatever.     \
     anyway, if you\'re wondering if classes with gratuitous whitespace like "  twitter-atreply"   \
     are for real, the whitespace either came from Chrome or from Twitter, not from me. -->        \
                                                                                                   \
<div class="stream-items">                                                                         \
                                                                                                   \
  <!-- first the evil spam tweet -->                                                               \
                                                                                                   \
  <div class="stream-item"                                                                         \
       data-item-id="97200174417457152"                                                            \
       data-item-type="tweet"                                                                      \
       media="true">                                                                               \
    <div class="more">»</div>                                                                      \
    <div class="stream-item-content tweet stream-tweet  "                                          \
         data-tweet-id="97200174417457152"                                                         \
         data-item-id="97200174417457152"                                                          \
         data-screen-name="gilesgoatboy"                                                           \
         data-user-id="1341781">                                                                   \
      <div class="tweet-dogear "></div>                                                            \
      <div class="tweet-image">                                                                    \
        <img height="48"                                                                           \
             width="48"                                                                            \
             src="http://a2.twimg.com/profile_images/1251763141/image_normal.jpg"                  \
             alt="Giles"                                                                           \
             class="user-profile-link"                                                             \
             data-user-id="1341781">                                                               \
      </div>                                                                                       \
      <div class="tweet-content">                                                                  \
        <div class="tweet-row">                                                                    \
          <span class="tweet-user-name">                                                           \
            <a class="tweet-screen-name user-profile-link"                                         \
               data-user-id="1341781"                                                              \
               href="/#!/gilesgoatboy"                                                             \
               title="Giles">gilesgoatboy</a>                                                      \
            <span class="tweet-full-name">Giles</span>                                             \
          </span>                                                                                  \
          <div class="tweet-corner">                                                               \
            <div class="tweet-meta">                                                               \
              <span class="icons">                                                                 \
                <div class="extra-icons">                                                          \
                  <span class="inlinemedia-icons"></span>                                          \
                </div>                                                                             \
              </span>                                                                              \
            </div>                                                                                 \
          </div>                                                                                   \
        </div>                                                                                     \
        <div class="tweet-row">                                                                    \
          <div class="tweet-text pretty-link">                                                     \
            <a class="  twitter-atreply"                                                           \
               data-screen-name="gilesgoatboy"                                                     \
               href="http://twitter.com/gilesgoatboy"                                              \
               rel="nofollow">                                                                     \
              <span class="at">@</span>                                                            \
              <span class="at-text">gilesgoatboy</span></a>                                        \
            <a href="http://t.co/GUUHLz6"                                                          \
               data-expanded-url="http://minimal-bitly.gilesb.com/"                                \
               title="http://minimal-bitly.gilesb.com/"                                            \
               target="_blank"                                                                     \
               rel="nofollow"                                                                      \
               class="twitter-timeline-link">bit.ly/dDhdQH</a></div>                               \
        </div>                                                                                     \
        <div class="tweet-row">                                                                    \
          <a href="/#!/gilesgoatboy/status/97200174417457152"                                      \
             class="tweet-timestamp"                                                               \
             title="12:01 AM Jul 30th">                                                            \
            <span class="_timestamp"                                                               \
                  data-time="1312009302000"                                                        \
                  data-long-form="true">11 hours ago</span></a>                                    \
          <span class="tweet-actions"                                                              \
                data-tweet-id="97200174417457152">                                                 \
            <span class="tweet-action action-favorite">                                            \
              <a href="#"                                                                          \
                 class="favorite-action"                                                           \
                 title="Favorite">                                                                 \
                <span>                                                                             \
                  <i></i>                                                                          \
                  <b>Favorite</b>                                                                  \
                </span></a>                                                                        \
              <span class="activity-count favoriter-count"></span>                                 \
            </span>                                                                                \
            <a href="#"                                                                            \
               class="reply-action"                                                                \
               data-screen-name="gilesgoatboy"                                                     \
               title="Reply">                                                                      \
              <span>                                                                               \
                <i></i>                                                                            \
                <b>Reply</b>                                                                       \
              </span></a>                                                                          \
            <a href="#"                                                                            \
               class="delete-action"                                                               \
               title="Delete">                                                                     \
              <span>                                                                               \
                <i></i>                                                                            \
                <b>Delete</b>                                                                      \
              </span></a>                                                                          \
          </span>                                                                                  \
        </div>                                                                                     \
      </div>                                                                                       \
    </div>                                                                                         \
  </div>                                                                                           \
                                                                                                   \
  <!-- next is the good tweet -->                                                                  \
                                                                                                   \
                                                                                                   \
  <div class="stream-item "                                                                        \
       data-item-id="97071926949847040"                                                            \
       data-item-type="tweet"                                                                      \
       media="true">                                                                               \
    <div class="more">»</div>                                                                      \
    <div class="stream-item-content tweet stream-tweet  "                                          \
         data-tweet-id="97071926949847040"                                                         \
         data-item-id="97071926949847040"                                                          \
         data-screen-name="patmaddox"                                                              \
         data-user-id="14955528">                                                                  \
    <div class="tweet-dogear "></div>                                                              \
    <div class="tweet-image">                                                                      \
      <img height="48"                                                                             \
           width="48"                                                                              \
           src="http://a1.twimg.com/profile_images/61549298/Photo_23_normal.jpg"                   \
           alt="Pat Maddox"                                                                        \
           class="user-profile-link"                                                               \
           data-user-id="14955528">                                                                \
    </div>                                                                                         \
    <div class="tweet-content">                                                                    \
      <div class="tweet-row">                                                                      \
        <span class="tweet-user-name">                                                             \
          <a class="tweet-screen-name user-profile-link"                                           \
             data-user-id="14955528"                                                               \
             href="/#!/patmaddox"                                                                  \
             title="Pat Maddox">patmaddox</a>                                                      \
          <span class="tweet-full-name">Pat Maddox</span>                                          \
        </span>                                                                                    \
        <div class="tweet-corner">                                                                 \
          <div class="tweet-meta">                                                                 \
            <span class="icons">                                                                   \
              <div class="extra-icons">                                                            \
                <span class="reply-icon icon">@</span>                                             \
                <span class="inlinemedia-icons"></span>                                            \
              </div>                                                                               \
            </span>                                                                                \
          </div>                                                                                   \
        </div>                                                                                     \
      </div>                                                                                       \
      <div class="tweet-row">                                                                      \
        <div class="tweet-text pretty-link">                                                       \
          <a class="  twitter-atreply"                                                             \
             data-screen-name="gilesgoatboy"                                                       \
             href="http://twitter.com/gilesgoatboy"                                                \
             rel="nofollow">                                                                       \
            <span class="at">@</span>                                                              \
            <span class="at-text">                                                                 \
              gilesgoatboy                                                                         \
            </span>                                                                                \
          </a>                                                                                     \
          <a class="  twitter-atreply"                                                             \
             data-screen-name="thoughtbot"                                                         \
             href="http://twitter.com/thoughtbot"                                                  \
             rel="nofollow">                                                                       \
            <span class="at">@</span>                                                              \
            <span class="at-text">                                                                 \
              thoughtbot                                                                           \
            </span>                                                                                \
          </a>                                                                                     \
          I like turtles                                                                           \
        </div>                                                                                     \
      </div>                                                                                       \
      <div class="tweet-row">                                                                      \
        <a href="/#!/patmaddox/status/97071926949847040"                                           \
           class="tweet-timestamp"                                                                 \
           title="3:32 PM Jul 29th">                                                               \
          <span class="_timestamp"                                                                 \
                data-time="1311978725000"                                                          \
                data-long-form="true">                                                             \
            20 hours ago                                                                           \
          </span>                                                                                  \
        </a>                                                                                       \
        <span class="tweet-actions"                                                                \
              data-tweet-id="97071926949847040">                                                   \
        <span class="tweet-action action-favorite">                                                \
          <a href="#"                                                                              \
             class="favorite-action"                                                               \
             title="Favorite">                                                                     \
            <span>                                                                                 \
              <i></i>                                                                              \
              <b>Favorite</b>                                                                      \
            </span>                                                                                \
          </a>                                                                                     \
          <span class="activity-count favoriter-count"></span>                                     \
        </span>                                                                                    \
        <span class="tweet-action action-retweet">                                                 \
          <a href="#"                                                                              \
             class="retweet-action"                                                                \
             title="Retweet">                                                                      \
            <span>                                                                                 \
              <i></i>                                                                              \
              <b>Retweet</b>                                                                       \
            </span>                                                                                \
          </a>                                                                                     \
          <span class="activity-count retweeter-count"></span>                                     \
        </span>                                                                                    \
        <a href="#"                                                                                \
           class="reply-action"                                                                    \
           data-screen-name="patmaddox"                                                            \
           title="Reply">                                                                          \
          <span>                                                                                   \
            <i></i>                                                                                \
            <b>Reply</b>                                                                           \
          </span>                                                                                  \
        </a>                                                                                       \
      </span>                                                                                      \
    </div>                                                                                         \
  </div>                                                                                           \
</div>                                                                                             \
                                                                                                   \
                                                                                                   \
</div>\
');
  });
  it("testset", function () {
      expect($("#fixture").text()).toEqual("asdf");
  });
});

