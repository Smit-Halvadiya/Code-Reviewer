import {generateContent} from "../services/ai.service.js";


const getResponse = async(req, res) => {
    const prompt = req.body.code;
        

    if(!prompt){
        return res.status(400).send("Prompt is required")
    }

    const response = await generateContent(prompt)
console.log(response);

    if(!response){
        return res.status(400).send("Ai not response")
    }

    res.send(response);
}

export {getResponse}