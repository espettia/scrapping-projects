This project is of a crawler made to scrape the website of "Falabella" a big chain of department stores in LA. 
The website uses javascript and is loaded dynamically, so I had to parse the script sections by hand and fortunately it was made up of only a json dictionary. 
Then it was pretty easy to get a python object using the json library and the json.loads() function.

Also, some elements are not present along all webpages, exception handlers are still to be implemented
The same ui is used in other Falabella group websites such as Sodimac, Tottus and Linio and i expect this crawler to work well on these sites, but i haven't test it yet.

I think the code can be improved by adding some exception handlers and a way to compute the number of pages of products a category has.
Also multithreading has to be implemented, as when trying to parse all 56 products of 56 pages, the time it took to scrape only 800 products was llike 20 minutes.
I guess it has to do with I/O waiting, so multithreading is compoetely necessary.
