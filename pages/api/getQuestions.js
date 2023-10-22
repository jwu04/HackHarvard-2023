import OpenAI from "openai";
const openai = new OpenAI();

const getQs = async (req, res) => {
    const answers = req.body.answers
    console.log(answers[0])

    let prompt = 'We are writing a story based on someone\'s memory. ' +
    `So far, we know that it is about ${(answers[0]).a.toLowerCase()} and it is a ${(answers[1]).q.toLowerCase()} memory.` +
    'We also have the answers to the following questions:'

    for (let i = 2; i < answers.length; i++) {
        prompt += `\nQ: ${answers[i].Q} \nA: ${answers[i].A}`
    }

    prompt += "\n\nWhat is one potential question you could ask this person to hear more about their memory? Start it off by saying, in a counselor's voice, \"So I've gathered that you <context> and <context>-\" then delve deeper into one final question to complete your psychoanalysis."
    const nextQ = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt
    }).then(() => {
        res.status(200).json({ message: nextQ })
    }).catch(err => {
        res.status(404).json({ success: 'false' })
    })
}

export default getQs;
