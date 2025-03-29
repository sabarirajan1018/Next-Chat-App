export default function MessagesList({ messages }) {
    return (
      <div className="space-y-3 bg-gray-800 p-4 rounded-lg text-white">
        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-700 rounded-md">
              {msg}
            </div>
          ))
        )}
      </div>
    );
  }
  