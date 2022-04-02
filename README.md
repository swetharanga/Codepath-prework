# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **SWETHA RANGA**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/spangled-nebula-yoke.)

## Required Functionality

The following **required** functionality is complete:

* [ X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ X] Game buttons each light up and play a sound when clicked. 
* [ X] Computer plays back sequence of clues including sound and visual cue for each button
* [ X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ X] User wins the game after guessing a complete pattern
* [ X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ X] Computer picks a different pattern each time the game is played
* [X ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![X](https://i.imgur.com/EwfIKPv.gif)
![](https://i.imgur.com/O4IPx3B.gif)
![](https://i.imgur.com/mYiMqBP.gif)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Yes , I used a couple of resources like W3school , frontend30.com,programiz.com 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I ran into minor concerns that I was able to resolve quickly. For example, when I hit the start button, it did not change to the stop button. Later, I discovered that it was due to the fact that I used a different version of the button variable in javascript. In html.index, I capitalized the button variable. The audio for the first button then worked, but I had to change the audio function setting in javascript to correct it. Then it worked flawlessly. When I started working with the guess function, I was perplexed as to which nested if condition should be used to increment the guess counter. I struggled with making the game terminate after 7 trials while also including the circumstances. My game either ended after one attempt or did not terminate after 8 attempts.

My game either crashed after one attempt or required numerous debugging sessions to determine which nested loop would be the most suited to call the playClueSequence function and increment progress. When the player won, my test condition failed to test the if condition  and terminate the game. After a lot of trial and error, it finally worked perfectly the way I wanted it to. Next on the row was while I was attempting to improve my code by experimenting with the optional steps. I worked on speeding up the code by incrementing the constant variable clueHoldtime by different time values, but it disrupted and messed up another part of the code.  When I altered any section of my function, it always turned off the audio, which was a constant difficulty for me. But eventually, I went over my code and tested it several times to ensure that it worked , compiled and produced the expected result.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Following the assignment, I was intrigued by the idea that developers have the ability to accessorize, manage the working of a specific website's demographics. I'm still curious about how interactive and imaginative a website may be created with javascript. I wonder how the execution process of every section of code in javascript works because I want to understand more about the language and its libraries such as Vanila,React, and jQuery and their usefulness. I'd like to learn to create, build, test, and deploy web apps . I still want to expand my horizons in the field of web development and figure out answers to my questions. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would update the game's layout. The color of the backdrop, the text, and the fonts. Then I'd play the pattern repeatedly for a brief amount of time, and the player would have to guess the pattern. I would improve the game's graphic design and colors. I would play the audio for all eight patterns at the same time, expecting the player to recall all of the tunes and asking the player to match them with colors. I'd also give compliment colors, for instance, if I had 8 colors in my game, I'd pair up 2 colors and play the tune of one color, then ask the player to match the color of that initially played tune and declare the winner. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.kapwing.com/videos/62479fa568df5200b6714d38)


## License

    Copyright [SWETHA RANGA]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.