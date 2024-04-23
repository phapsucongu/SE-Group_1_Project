const ChatPage =() => {
    return (
        <div>
            <h1>Chat Page</h1>
            <ul id="messages"></ul>
            <form id="chat-form">
                <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off" />
                <button class="btn">Send</button>
            </form>
        </div>
    );
};
export default ChatPage;

