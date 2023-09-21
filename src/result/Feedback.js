import React, { useState } from 'react';


const FeedbackForm = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     // you can handle the submission of the feedback, e.g., send it to a server or display it.
    console.log('Selected Emoji:', selectedEmoji);
    console.log('Feedback Text:', feedbackText);
    // Reset the form after submission
    setSelectedEmoji('');
    setFeedbackText('');
  };

  return (
    <div className="container w-3/5 mx-80 items-center  mt-40 p-4 bg-green-600 rounded-lg shadow-lg">
      <h1 className="text-center text-pink-700 text-2xl font-bold mb-4">Give Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center space-x-3 mb-6">
           
          <div className="cursor-pointer" onClick={() => handleEmojiClick('😢')}>
            <span role="img" aria-label="Sad Emoji" className={`text-4xl ${selectedEmoji === '😢' ? 'text-blue-500' : 'text-gray-400'}`}>😢</span>
          </div>
          <div className="cursor-pointer" onClick={() => handleEmojiClick('😐')}>
            <span role="img" aria-label="Neutral Emoji" className={`text-4xl ${selectedEmoji === '😐' ? 'text-yellow-500' : 'text-gray-400'}`}>😐</span>
          </div>
          <div className="cursor-pointer" onClick={() => handleEmojiClick('😊')}>
            <span role="img" aria-label="Normal Emoji" className={`text-4xl ${selectedEmoji === '😊' ? 'text-red-500' : 'text-gray-400'}`}>😊</span>
          </div>
          <div className="cursor-pointer" onClick={() => handleEmojiClick('😄')}>
            <span role="img" aria-label="Happy Emoji" className={`text-4xl ${selectedEmoji === '😄' ? 'text-red-500' : 'text-gray-400'}`}>😄</span>
          </div>
          <div className="cursor-pointer" onClick={() => handleEmojiClick('😢')}>
            <span role="img" aria-label="Heart Eyes Emoji" className={`text-4xl ${selectedEmoji === '😢' ? 'text-red-500' : 'text-gray-400'}`}>😍</span>
          </div>
        </div>
        <div className="mb-4 mx-auto">
          <label className="text-lg text-amber-100"> Do you have any other feedback on the reading material?</label>
          <textarea
            rows="4"
            className="w-full p-2 mt-2 rounded-lg border"
            placeholder="Type your feedback here..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
        </div>
        <div className='flex items-center justify-center '>
        <button
          type="submit"
          className=" hover:bg-blue-400 text-white px-4 py-2 rounded-md bg-blue-600"
        >
          Submit Feedback
        </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
