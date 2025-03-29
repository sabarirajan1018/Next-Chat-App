export default function MessageInput({ value, onChange, onSend }) {
    return (
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
          placeholder="Type a message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
          onClick={onSend}
        >
          Send
        </button>
      </div>
    );
  }
  