
// samples
const uiManager = {
    saveDraft(formId, data) {
      // Only for non-sensitive forms!
      localStorage.setItem(`draft_${formId}`, JSON.stringify(data));
    },
  
    loadDraft(formId) {
      const draft = localStorage.getItem(`draft_${formId}`);
      return draft ? JSON.parse(draft) : null;
    },

    dismissMessage(messageId) {
        const dismissed = JSON.parse(localStorage.getItem('dismissed_messages') || '[]');
        dismissed.push(messageId);
        localStorage.setItem('dismissed_messages', JSON.stringify(dismissed));
    },
    
    hasSeenMessage(messageId) {
        const dismissed = JSON.parse(localStorage.getItem('dismissed_messages') || '[]');
        return dismissed.includes(messageId);
    }

};

const sessionManager = {
    storeTemporaryData(key, value) {
      sessionStorage.setItem(key, JSON.stringify({
        value,
        timestamp: Date.now(),
        expiresIn: 30 * 60 * 1000 // 30 minutes
      }));
    },
  
    getTemporaryData(key) {
      const data = sessionStorage.getItem(key);
      if (!data) return null;
  
      const { value, timestamp, expiresIn } = JSON.parse(data);
  
      // Auto-expire old data even within the session
      if (Date.now() - timestamp > expiresIn) {
        sessionStorage.removeItem(key);
        return null;
      }
  
      return value;
    },
  
    refreshData(key) {
      const data = this.getTemporaryData(key);
      if (data) {
        this.storeTemporaryData(key, data); // Reset expiration
      }
      return data;
    }
};
  
  // Example usage in a shopping cart
  const cartManager = {
    async updateCart(items) {
      sessionManager.storeTemporaryData('cart', items);
  
      // Also sync with server
      await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify(items)
      });
    },
  
    getCart() {
      return sessionManager.getTemporaryData('cart') || [];
    }
  };