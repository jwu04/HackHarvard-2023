# Rememory 
Team: Jonathan Wu, Amy Mai, Karar Abed  
HackHarvard 2023 Submssion
## Project Description
Have you ever wondered what it would be like to turn our dreams, memories, or thoughts into images? That's exactly what **Rememory** is all about! We leverage the practice of narrative elicitations with ChatGPT to help elders tell a clear and detailed story about their memories. Once the user has completed describing a memory, we utilize Stable Diffusion, a type of generative AI, to bring these abstract memories into a reality. With these tools, we can transform the dreams and thoughts of older people who are experiencing dementia into beautiful visual experiences. 

Our project does more than just create stunning memories. It actually provides a lot of comfort and healing to the people who have dementia. Plus, it helps us learn a whole lot more about Alzheimer's and dementia, so we can better understand and even find ways to help people who have these conditions. 

We're not only exploring new and exciting territories in science and technology, but we're trying to quantify memory loss and prevent any further degradation of the human mind by reminding them of the memories that they experienced. It's a wonderful way to use the power of technology to bring comfort and happiness to people who need it. Our goal is that our web-app will challenge the mind and pose a striking question to them:

*Do you remember me?*
## Requirements
- Make sure you have Node.js installed on your device. Link to installation can be found [here]( https://nodejs.org/en/download).
## Launch Codes
### Clone Repository
Clone this repository to your computer with the HTTPs link:
```shell
https://github.com/jwu04/HackHarvard-2023.git
```
### Change Directory
Change your directory to the one that this project is located in:
```shell
cd HackHarvard-2023
```
### Install Node.js Dependencies
Install all the required Node.js Dependency in order for this to work
```shell
npm install
```
### Get API Keys
You will need four API keys, one from [Replicate](https://replicate.com/explore), two from [Supabase](https://supabase.com/) and one from [OpenAI](https://openai.com/).  

Once you have both keys, create a file called `.env.local` and add corresponding lines to each key. For example:
```Javascript
SUPABASE_URL=paste here
SUPABASE_ANON_KEY=paste here
OPENAI_API_KEY=paste here
REPLICATE_API_TOKEN=paste here
```
### Build and Start
1. Once you have done that, make sure that you can compile the program
```shell
npm run build
```
2. Then run the following:
```shell
npm run dev
```
### Launch Site
Once that is done, the website should be found at: [localhost:3000/](localhost:3000/). 
Enjoy remembering!
## Screenshots
TBD
