import { useState } from "react";
import { ChatGPTService } from "../../services/ChatGPTService";


export function Home() {
    const [question, setQuestion] = useState("");
const handleChatGpt = async () => {
    console.log(question)
    try {
        if (question != null) {
            const data = await ChatGPTService.chatWithGPT({
                question
            });
            console.log(data.candidates[0].content)
        }
    } catch(err) {
        console.log(err);
    }
}
    return (
        <>
            <h1>Hello</h1>
        <input onChange={(e) => setQuestion(e.target.value)}
        value={question}
        />
        <button onClick={handleChatGpt}
        type="button"
        >Hello</button>
        </>
            
    );
}