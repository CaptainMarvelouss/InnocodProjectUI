import { useState } from "react";
import { ChatGPTService } from "../../services/ChatGPTService";
import './index.css'

export function Home() {
    const [question, setQuestion] = useState("");
    const [message, setMessage] = useState("");
    const [send, setSend] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChatGpt = async () => {
        setSent(true)

        setSend(true)

        console.log(question)
        try {
            if (question != null) {
                const data = await ChatGPTService.chatWithGPT({
                    question
                });
                console.log(data.candidates[0].content)
                setMessage(data.candidates[0].content)
            }
        } catch (err) {
            console.log(err);
        } finally {
            setSent(false)
        }
    }
    
    return (
        <>
            {/* <h1>Hello</h1>x
        <input onChange={(e) => setQuestion(e.target.value)}
        value={question}
        />
        <button onClick={handleChatGpt}
        type="button"
        >Hello</button>
        </> */}

            <div className="chat">
                <div className="chat-title">
                    <h1>FPT Companion</h1>
                    <h2>gpt</h2>
                    <figure className="avatar">
                        <img src="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png" /></figure>
                </div>
                <div className="messages">
                    <div className="messages-content">
                        {sent && (<div className="message loading new"><figure className="avatar"><img src="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png" /></figure><span></span></div>)}
                    {message !== "" && !sent && (<div className="message new">{message}<figure className="avatar"><img src="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png" /></figure></div>)}
                    {sent && ( <div className="message message-personal">{question}</div>)}
                    </div>
                </div>
                <div className="message-box">
                    <input className="message-input" onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                    />
                    <button type="button" className="message-submit" onClick={handleChatGpt}>Send</button>
                </div>

            </div>
            <div className="bg"></div>
        </>
    );
}