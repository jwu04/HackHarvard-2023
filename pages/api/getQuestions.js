import OpenAI from "openai";
const openai = new OpenAI();

const getQs = async (req, res) => {
    const answers = req.body.answers
    console.log(answers)

    let prompt = 'We are writing a story based on someone\'s memory. ' +
    'We have the answers to the following questions:'

    for (let i = 0; i < answers.length; i++) {
        prompt += `\nQ: ${answers[i].q} \nA: ${answers[i].a}`
    }

    prompt += "\n\nWhat is one potential question you could ask this person to hear more about their memory? Start it off by saying, in a counselor's voice, \"So I've gathered that you <context> and <context>-\" then delve deeper into one final question to complete your psychoanalysis."
    await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt
    }).then((next) => {
        res.status(200).json({ message: next })
    }).catch(err => {
        console.log(err)
        res.status(404).json(err)
    })
}

export default getQs;
