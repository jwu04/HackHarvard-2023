import { create } from 'openai'

const getQs = async (req, res) => {
    const answers = req.body.answers

    let prompt = `We are writing a story based on someone's memory. ` +
        'So far, we know that it is about ' + answers[0].a + ' and it is a ' + answers[1].a + ' memory.' +
        'We also have the answers to the following questions:';

    for (let i = 2; i < answers.length; i++) {
        prompt += `\nQ: ${answers[i].q} \nA: ${answers[i].a}`
    }

    prompt += "\n\nWhat is one potential question you could ask this person to hear more about their memory? Start it off by saying, in a counselor's voice, 'So I've gathered that you (context) and (context)-' then delve deeper into one final question to complete your psychoanalysis. However, please be specific, especially pertaining to the last answer that they gave. Make them feel that you care. Be concise."
    const apiKey = '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'
    const url = 'https://api.openai.com/v1/chat/completions'

    const body = JSON.stringify({
        messages: [{"role": "user", "content": prompt}],
        model: 'gpt-3.5-turbo',
        stream: false,
    })

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body,
        })
        const data = await response.json()
        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default getQs;
