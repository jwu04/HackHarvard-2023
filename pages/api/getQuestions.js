import axios from 'axios';

const getQs = async (req, res) => {
    const answers = req.body.answers

    let prompt = `We are writing a story based on someone's memory. ` +
        'So far, we know that it is about ' + answers[0].a + ' and it is a ' + answers[1].a + ' memory.' +
        'We also have the answers to the following questions:';

    for (let i = 2; i < answers.length; i++) {
        prompt += `\nQ: ${answers[i].q} \nA: ${answers[i].a}`
    }

    prompt += "\n\nHow would you articulate a description of this story, this narration of one's memory? Be concise, this will be used for a description box of the memory that was described to you. It should be a concise description of the story, short enough to summarize points of the memory."
    const apiKey = process.env.OPENAI_API_KEY
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
            body
        })
        const data = await response.json()

        // // Now just straight send to supabase
        // await axios.post('/api/saveMem', { 
        //     description: 'andgasdgasd',
        //     img: 'none'
        // })
        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default getQs;
