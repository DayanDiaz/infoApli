# infoApli
How do deploy with GitHub?

Steps:

1- Create new repository on GitHub

2- Should install gh-pages in your proyecto of react with next command

	nmp install gh-pages --save-dev

3- Enter on package.json and add in the configuration the following:
	
	"hostpage":"http://{name-user}.github.io//{name-repository}/"

and add on scrips the next two lines:
	
	
"predeploy": "npm run build",

"deploy": "gh-pages -d build"

4- execute next command on the proyect:

npm run deploy

5- Then, need upload the proyect in the repository
open git bash in the directory with proyect react and write
	
	git remote add origin https://githup.com//{name-user}/{name-repository}.git
	
	git add .
	
	git commit -m "{description}"
	
	git pull
	
	git push origin main

Finally enter:

	http://{name-user}.github.io//{name-repository}/
