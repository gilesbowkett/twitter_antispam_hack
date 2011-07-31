twitter antispam
================

experiment to see if I can kill spam via http://defunkt.io/dotjs

specs
-----

the strategy is to use jQuery to hide tweets which contain nothing but URLs, and create a simple
div alerting you to the spam filter hiding tweets, and giving you the option to view them if you
wish.

this is all very trivial jQuery; the effort comes from filtering through Twitter's gigantic DOM.
the other tricky part, of course, is that tweets are loaded live, so you can't just run the JS
the moment the page loads, which is the simple case for dotjs.

fuck me. I might have to monkeypatch jQuery on twitter, and have it pass its normal success callback
through some kind of filter. that sounds horrible, but if it works, the advantage could be that
you filter at the JSON data level, instead of the DOM level, which would almost undoubtedly be less
painful.

