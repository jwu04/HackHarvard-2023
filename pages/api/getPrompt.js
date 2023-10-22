import OpenAI from "openai";
const openai = new OpenAI();

const getPrompt = async (req, res) => {
    const answers = req.body.answers
    console.log(answers[0])

    let prompt = 'Given these question and answers, create a prompt that we can give to a stable diffusion model.' +
    'We also have the answers to the following questions:'

    for (let i = 0; i < answers.length; i++) {
        prompt += `\nQ: ${answers[i].q} \nA: ${answers[i].a}`
    }

    const diffPrompt = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt
    }).then(() => {
        res.status(200).json({ message: diffPrompt })
    }).catch(err => {
        res.status(404).json({ success: 'false' })
    })
}

export default getPrompt;
