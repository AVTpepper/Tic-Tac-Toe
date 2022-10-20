# __Portfolio Project 2 - Tic Tac Toe__

The Tic Tac Toe website is for anyone looking for an online game that has elements of competition and strategy. This website is created for somebody who is looking for some quick fun with a friend, or by themselves. 

![Responsive Mock Up](/assets/images/am-i-responsive-tic-tac-toe.png)

## __Wireframes__
Before starting the project I created my ideal look of the Tic Tac Toe website to have an idea of what I pictured myself creating. This was the beginning of the project and I had high hopes of what I was going to be able to accomplish. 

![Mobile & Desktop Wireframe](/assets/images/wireframe-tictactoe-mobile%2Bdesktop-smaller-version.png)

---

## __Features__
This website does have some features, but in the future it will be fun to come back and add the features that I have in mind.

### __Existing Features__

- __Heading__
    - Simple and minimalistic header to open the page. It is clear what the intention of the website is.

![Image of header](/assets/images/tic-tac-toe-heading.png)

- __Scoreboard__
    - Next we have the scoreboard. This is where the points will be tracked for each round won by each player. 

![Scoreboard](/assets/images/tic-tac-toe-scoreboard.png)

- __Game Controls__
    - Here we have our game controls. With these buttons you can control the scoreboard and the playing board. The action of the button is written on the button itself. The top button will reset the score and the bottom bottom will start a new round and clear the board.

![Game Controls](/assets/images/tic-tac-toe-game-controls.png)

- __Winning Message__
    - This is an area on the page where a winning message will pop up once there is a winning combination on the playing board.

![Winning Message](/assets/images/winning-message.png)

- __Playing Board__
    - This is where the action takes place. Each square is clickable, and each click will alternate between "X" and "O".

![Playing Board](/assets/images/tic-tac-toe-playing-board.png)

### __Technologies Used__
- HTML
- CSS
- JavaScript

### __Features Left To Implement__
I have several features I would like to implement:
- More website visitor controls over the game. Such as:
    - Chosing what marker they want to be, "X" or "O".
    - Chosing to play against the computer or another player.
- Creating the computer controlled player.
- Adding more style to the page.
- Adding hover effects.
- Adding a help menu.
---

## __Testing__

Running my JavaScript code through jshint.com I realised I was missing quite a few semicolons and had some unecessary ones, so I spent some time to get that corrected. I also got warnings such as: 
- 	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)  & 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz) which I am not sure how to fix.

### __Lighthouse Test__

After a bit of tinkering with labels, meta tags and html structure this is the final score that I got through Lighthouse testing:

![Lighthouse test results](/assets/images/lighthouse_test.png)

### __Validator Testing__

- __HTML__
    - First time running the HTML through the [W3B validator](https://validator.w3.org/) I received one warning.

    ```
    Warning: Empty heading.
    From line 40, column 3; to line 40, column 18
    button>↩  <h2 id="result"></h2>↩
    ```
    - The warning was fixed immediatley by chancing the h2 element to a span element. 

- __CSS__
    - - First time running the HTML through the [W3B validator](https://validator.w3.org/css-validator/) no erros and no warnings were found.
---
## __Deployment__

This project was deployed on GitHub. Below are the steps I followed to be able to deploy the website:
1. In the GitHub repository, navigate to the Settings tab.
2. Scroll down until you see GitHub pages.
3. From the source section drop-down menu, select the main branch.
4. Once the main branch has been selected hit the save button.
5. Finally, when the page is refreshed there will be a detailed ribbon display to indicate the successful deployment.

The live link can be found here: https://avtpepper.github.io/Tic-Tac-Toe/

---
## __Credits__
### Code
- Coding logic was hard to define, I watched several YouTube videos and tried to combine those to create my own logic. During the process I received help from github user [@devinardya](https://github.com/devinardya)
---
## __Special Thanks__
Special thanks goes out to:
- My mentor Maranatha Ilesanmi for guiding me through the project.
- GitHub user [@devinardya](https://github.com/devinardya) for help with testing and understanding the game logic.

