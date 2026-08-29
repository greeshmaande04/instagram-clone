import './index.css'

const ShareModal = ({isOpen, onClose, shareLink}) => {
  if (!isOpen) {
    return null
  }

  const handleCopy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareLink)
    }
  }

  const handleNativeShare = async () => {
    if (!navigator.share) {
      return
    }

    await navigator.share({
      title: 'Instagram Clone',
      text: 'Check out this post!',
      url: shareLink,
    })
  }

  return (
    <div className="share-overlay" onClick={onClose}>
      <div className="share-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose}>
          ×
        </button>
        <h3>Share Post</h3>
        <p>Share this link with friends or use your device sharing options.</p>
        <div className="share-link-box">
          <input type="text" readOnly value={shareLink} className="share-link" />
          <button type="button" className="copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
        {navigator.share && (
          <button type="button" className="native-share-button" onClick={handleNativeShare}>
            Share with device
          </button>
        )}
      </div>
    </div>
  )
}

export default ShareModal