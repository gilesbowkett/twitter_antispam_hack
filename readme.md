twitter antispam
================

experiment to see if I can kill spam via http://defunkt.io/dotjs

specs
-----

the strategy is to use jQuery to hide tweets which contain nothing but URLs, and create a simple
div alerting you to the spam filter hiding tweets, and giving you the option to view them if you
wish. this is all very trivial jQuery; the effort comes from filtering through Twitter's gigantic
DOM.

