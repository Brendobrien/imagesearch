# Image Search Abstraction Layer

<a href="https://brendobrien-imagesearch.herokuapp.com">https://brendobrien-imagesearch.herokuapp.com</a>

## Upgrading to heroku 18

https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack#upgrading-an-app

```
heroku stack:set heroku-18 -a brendobrien-imagesearch
heroku git:remote -a brendobrien-imagesearch
git commit --allow-empty -m "Upgrading to heroku-18" && git push heroku master
```
