import React, { useEffect, useRef } from "react";

function SharePopup({ isShareOpen, setIsShareOpen, shareLink }) {
    
      const popupRef = useRef(null);
    
    //   const shareLink = "https://yourwebsite.com/some-page";
    
      const copyToClipboard = () => {
        navigator.clipboard.writeText(shareLink);
        alert("Link copied to clipboard!");
      };
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsShareOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [popupRef]);
    
      return (
        <div className="relative top-12 w-fi">
    
          {isShareOpen && (
            <div
              ref={popupRef} 
              className="absolute right-0 mt-2 w-80 p-4 bg-white shadow-lg rounded-lg z-50"
            >
              <h3 className="font-semibold text-gray-700 mb-2">Share this Job</h3>
    
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-[#6200b3d7] text-white rounded-r-md hover:bg-[#6300B3]"
                >
                  Copy
                </button>
              </div>

              <div className="flex  justify-center space-x-8 mt-4">
                <div className="border rounded-lg hover:shadow">
                    <a  
                        href={`mailto:?subject=Check this out&body=${shareLink}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                        >
                            <img src="/static/images/gmail.png" alt="gmail" className="h-12" />
                    </a>
                </div>
                <div className="flex  items-center px-2 border rounded-lg hover:shadow">
                    <a
                    href={`https://twitter.com/intent/tweet?url=${shareLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                        >
                            <img src="/static/images/twitter.png" alt="twitter" className="h-8" />
                        </a>
                </div>
                <div className="border rounded-lg hover:shadow">
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                    >
                        <img src="/static/images/whatsapp.png" alt="whatsapp" className="h-12"/>
                    </a>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    export default SharePopup;
    